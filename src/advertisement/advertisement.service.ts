import { PrismaService } from 'src/prisma/prisma.service';
import { AdDto } from './dto';
import { Injectable } from '@nestjs/common';
import { MakeTimedIDUnique } from 'src/common-helpers/helper';
import { BedTypeEnum, BillingPeriodEnum } from '@prisma/client';
import { BedDto } from 'src/bed/dto';

@Injectable()
export class AdvertisementService {
  constructor(private prisma: PrismaService) {}

  async createAdvertisement(dto: AdDto) {
    try {
      console.log('Create Advertisement data');
      const adID = MakeTimedIDUnique();
      console.log('Generated Advertisement ID:', adID);
      const advertisementBase = this.prisma.advertisementBase.create({
        data: {
          AdvertisementID: adID,
          Title: dto.Title,
          Description: dto.Description,
          PropertyType: dto.PropertyType,
          AdvertiserType: dto.AdvertiserType,
          City: dto.City,
          Address: dto.Address,
          Floor: dto.Floor,
          AvailableFrom: Number(dto.AvailableFrom),
          MinimumStayPeriod: dto.MinimumStayPeriod,
          MaximumStayPeriod: dto.MaximumStayPeriod,
          ScheduledCalls: dto.ScheduledCalls,
          Smoking: dto.Smoking,
          Vegetarian: dto.Vegetarian,
          UserID: dto.UserID,
        },
      });
      console.log('Advertisement Base created');
      // // create entry in preference table
      const preference = this.prisma.preference.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          Professional: dto.preferenceDto.Professional,
          Student: dto.preferenceDto.Student,
          Couple: dto.preferenceDto.Couple,
          Family: dto.preferenceDto.Family,
          Male: dto.preferenceDto.Male,
          Female: dto.preferenceDto.Female,
          PetOwners: dto.preferenceDto.PetOwners,
        },
      });
      console.log('Preference created');
      // console.log(dto.bedDto.BillingPeriod);
      // console.log(dto.bedDto.BedType);
      // //check if property type is BED
      // if (dto.PropertyType === 'BED') {
      //   const bedDto: BedDto = {
      //     ID: MakeTimedIDUnique(),
      //     PropertyAdID: adID,
      //     BedType: dto.bedDto.BedType as BedTypeEnum,
      //     Rent: dto.bedDto.Rent,
      //     Deposit: dto.bedDto.Deposit,
      //     BillingPeriod: dto.bedDto.BillingPeriod,
      //     IncludeBills: dto.bedDto.IncludeBills,
      //   };
      //   const bed = this.prisma.bed.create({
      //     data: bedDto,
      //   });
      // }

      // // create entry in shared space table

      // const sharedSpace = this.prisma.sharedSpace.create({
      //   data: {
      //     ID: MakeTimedIDUnique(),
      //     PropertyAdID: adID,
      //     LivingRoom: dto.sharedSpaceDto.LivingRoom,
      //     Kitchen: dto.sharedSpaceDto.Kitchen,
      //     Bathroom: dto.sharedSpaceDto.Bathroom,
      //   },
      // });

      // // create available days in available days table
      // const availableDays = this.prisma.availableDays.create({
      //   data: {
      //     ID: MakeTimedIDUnique(),
      //     PropertyAdID: adID,
      //     Monday: dto.availableDaysDto.Monday,
      //     Tuesday: dto.availableDaysDto.Tuesday,
      //     Wednesday: dto.availableDaysDto.Wednesday,
      //     Thursday: dto.availableDaysDto.Thursday,
      //     Friday: dto.availableDaysDto.Friday,
      //     Saturday: dto.availableDaysDto.Saturday,
      //     Sunday: dto.availableDaysDto.Sunday,
      //   },
      // });

      // const amenities = this.prisma.amenities.create({
      //   data: {
      //     ID: MakeTimedIDUnique(),
      //     PropertyAdID: adID,
      //     Furnished: dto.amenitiesDto.Furnished,
      //     Internet: dto.amenitiesDto.Internet,
      //     Parking: dto.amenitiesDto.Parking,
      //     WashingMachine: dto.amenitiesDto.WashingMachine,
      //     SharedKitchen: dto.amenitiesDto.SharedKitchen,
      //     LivingRoom: dto.amenitiesDto.LivingRoom,
      //     Laundry: dto.amenitiesDto.Laundry,
      //     RooftopTerrace: dto.amenitiesDto.RooftopTerrace,
      //     Garden: dto.amenitiesDto.Garden,
      //     LoungeArea: dto.amenitiesDto.LoungeArea,
      //     Electricity: dto.amenitiesDto.Electricity,
      //     Water: dto.amenitiesDto.Water,
      //     Heating: dto.amenitiesDto.Heating,
      //     AirConditioned: dto.amenitiesDto.AirConditioned,
      //   },
      // });

      // // create entry in house rules table
      // const houseRules = this.prisma.houseRules.create({
      //   data: {
      //     ID: MakeTimedIDUnique(),
      //     PropertyAdID: adID,
      //     HouseRules: dto.houseRulesDto.HouseRules,
      //   },
      // });

      // // create Available Times in table
      // const availableTimes = this.prisma.availableTimes.create({
      //   data: {
      //     ID: MakeTimedIDUnique(),
      //     PropertyAdID: adID,
      //     Morning: dto.availableTimesDto.Morning,
      //     Afternoon: dto.availableTimesDto.Afternoon,
      //     Evening: dto.availableTimesDto.Evening,
      //   },
      // });

      return advertisementBase; // Return the advertisementBase record
    } catch (err) {
      console.log(err);
    }
  }
  async updateAdvertisement(advertisementId, data) {
    return this.prisma.advertisementBase.update({
      where: { AdvertisementID: advertisementId },
      data,
    });
  }
  async deleteAdvertisement(dto: AdDto) {
    return this.prisma.advertisementBase.delete({
      where: { AdvertisementID: dto.AdvertisementID, UserID: dto.UserID },
    });
  }

  async editAdvertisement(dto: AdDto) {
    return this.prisma.advertisementBase.update({
      where: { AdvertisementID: dto.AdvertisementID, UserID: dto.UserID },
      data: {
        AdvertisementID: dto.AdvertisementID,
        Title: dto.Title,
        Description: dto.Description,
        PropertyType: dto.PropertyType,
        AdvertiserType: dto.AdvertiserType,
        City: dto.City,
        Address: dto.Address,
        Floor: dto.Floor,
        AvailableFrom: Number(dto.AvailableFrom),
        MinimumStayPeriod: dto.MinimumStayPeriod,
        MaximumStayPeriod: dto.MaximumStayPeriod,
        ScheduledCalls: dto.ScheduledCalls,
        Smoking: dto.Smoking,
        Vegetarian: dto.Vegetarian,
        UserID: dto.UserID,
      },
    });
  }
}
