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
      const advertisementBase = await this.prisma.advertisementBase.create({
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
      // create entry in preference table
      const preference = await this.prisma.preference.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          Professional: dto.Preference.Professional,
          Student: dto.Preference.Student,
          Couple: dto.Preference.Couple,
          Family: dto.Preference.Family,
          Male: dto.Preference.Male,
          Female: dto.Preference.Female,
          PetOwners: dto.Preference.PetOwners,
        },
      });
      console.log(preference);
      console.log('Preference created');

      // create entry for shared space table
      const sharedSpace = await this.prisma.sharedSpace.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          LivingRoom: dto.SharedSpace.LivingRoom,
          Kitchen: dto.SharedSpace.Kitchen,
          Bathroom: dto.SharedSpace.Bathroom,
        },
      });

      console.log(sharedSpace);
      console.log('Shared Space created');

      // create entry for available days table
      const availableDays = await this.prisma.availableDays.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          Monday: dto.AvailableDays.Monday,
          Tuesday: dto.AvailableDays.Tuesday,
          Wednesday: dto.AvailableDays.Wednesday,
          Thursday: dto.AvailableDays.Thursday,
          Friday: dto.AvailableDays.Friday,
          Saturday: dto.AvailableDays.Saturday,
          Sunday: dto.AvailableDays.Sunday,
        },
      });

      console.log(availableDays);
      console.log('Available Days created');

      // create entry for house rules table
      const houseRules = await this.prisma.houseRules.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          HouseRules: dto.HouseRules.HouseRules,
        },
      });

      console.log(houseRules);
      console.log('House Rules created');

      // create entry for amenities table
      const amenities = await this.prisma.amenities.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          Furnished: dto.Amenities.Furnished,
          Internet: dto.Amenities.Internet,
          Parking: dto.Amenities.Parking,
          WashingMachine: dto.Amenities.WashingMachine,
          SharedKitchen: dto.Amenities.SharedKitchen,
          LivingRoom: dto.Amenities.LivingRoom,
          Laundry: dto.Amenities.Laundry,
          Garden: dto.Amenities.Garden,
          LoungeArea: dto.Amenities.LoungeArea,
          Electricity: dto.Amenities.Electricity,
          Water: dto.Amenities.Water,
          Heating: dto.Amenities.Heating,
          AirConditioned: dto.Amenities.AirConditioned,
          RooftopTerrace: dto.Amenities.RooftopTerrace,
        },
      });

      console.log(amenities);
      console.log('Amenities created');

      // create entry for available times table
      const availableTimes = await this.prisma.availableTimes.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          Morning: dto.AvailableTimes.Morning,
          Afternoon: dto.AvailableTimes.Afternoon,
          Evening: dto.AvailableTimes.Evening,
        },
      });

      console.log(availableTimes);
      console.log('Available Times created');

      // Create entry for Beds table if beds are available
      if (dto.Beds && dto.Beds.length > 0) {
        const beds = await Promise.all(
          dto.Beds.map(async (bed: BedDto) => {
            return await this.prisma.bed.create({
              data: {
                ID: MakeTimedIDUnique(),
                PropertyAdID: adID,
                BedType: bed.BedType,
                Rent: bed.Rent,
                Deposit: bed.Deposit,
                BillingPeriod: bed.BillingPeriod,
                IncludeBills: bed.IncludeBills,
              },
            });
          }),
        );
        console.log(beds);
        console.log('Beds created');
      }

      // create entry for RoomAndBed Table
      const roomAndBed = await this.prisma.roomAndBed.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          TotalBedsRooms: dto.RoomAndBed.TotalBedsRooms,
          AvailableBedsRooms: dto.RoomAndBed.AvailableBedsRooms,
          NumberOfFemales: dto.RoomAndBed.NumberOfFemales,
          NumberOfMales: dto.RoomAndBed.NumberOfMales,
          MinAge: dto.RoomAndBed.MinAge,
          MaxAge: dto.RoomAndBed.MaxAge,
          PrefGender: dto.RoomAndBed.PrefGender,
          PrefMaxAge: dto.RoomAndBed.PrefMaxAge,
          PrefMinAge: dto.RoomAndBed.PrefMinAge,
        },
      });

      console.log(roomAndBed);
      console.log('Room and Bed created');

      // return advertisementBaseJson; // Return the advertisementBase record
      // return JSON.parse(JSON.stringify(advertisementBase));
      return JSON.stringify(advertisementBase, (_, v) =>
        typeof v === 'bigint' ? v.toString() : v,
      );
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
