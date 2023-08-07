import { PrismaService } from 'src/prisma/prisma.service';
import { AdDto } from './dto';
import { Injectable } from '@nestjs/common';
import { MakeTimedIDUnique } from 'src/common-helpers/helper';
import { BedTypeEnum, BillingPeriodEnum } from '@prisma/client';
import { BedDto } from 'src/bed/dto';
import { HouseRulesDto } from 'src/houserules/dto';

@Injectable()
export class AdvertisementService {
  constructor(private prisma: PrismaService) {}

  async createAdvertisement(dto: AdDto) {
    try {
      console.log('Create Advertisement data');
      const adID = MakeTimedIDUnique();
      console.log('Generated Advertisement ID:', adID);

      const advertisementBase = await this.createAdvertisementBase(dto, adID);
      console.log('Advertisement Base created');

      // create entry in preference table
      const preference = await this.createPreference(dto, adID);
      console.log(preference);
      console.log('Preference created');

      // create entry for shared space table
      const sharedSpace = await this.createSharedSpace(dto, adID);
      console.log(sharedSpace);
      console.log('Shared Space created');

      // create entry for available days table
      const availableDays = await this.createAvailableDays(dto, adID);
      console.log(availableDays);
      console.log('Available Days created');

      // create entry for house rules table
      if (dto.HouseRules && dto.HouseRules.length > 0) {
        const houseRules = await this.createHouseRules(dto, adID);
        console.log(houseRules);
        console.log('House Rules created');
      }

      // create entry for amenities table
      const amenities = await this.createAmenities(dto, adID);

      console.log(amenities);
      console.log('Amenities created');

      // create entry for available times table
      const availableTimes = await this.createAvailableTimes(dto, adID);
      console.log(availableTimes);
      console.log('Available Times created');

      // Create entry for Beds table if beds are available
      if (dto.Beds && dto.Beds.length > 0) {
        const beds = await this.createBeds(dto, adID);
        console.log(beds);
        console.log('Beds created');
      }

      // create entry for RoomAndBed Table
      const roomAndBed = await this.createRoomAndBed(dto, adID);
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
    try {
      console.log('Edit Advertisement data');
      const updatedAdvertisementBase =
        await this.prisma.advertisementBase.update({
          where: { AdvertisementID: dto.AdvertisementID, UserID: dto.UserID },
          data: {
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
          },
        });
      console.log('Advertisement Base updated');

      //fetch preference ID from preference table using advertisement ID
      const preferenceID = await this.prisma.preference.findFirst({
        where: { PropertyAdID: dto.AdvertisementID },
        select: { ID: true },
      });
      console.log('Preference ID fetched');
      console.log(preferenceID);

      // fetch shared space ID from shared space table using advertisement ID
      const sharedSpaceID = await this.prisma.sharedSpace.findFirst({
        where: { PropertyAdID: dto.AdvertisementID },
        select: { ID: true },
      });

      console.log('Shared Space ID fetched');
      console.log(sharedSpaceID);

      // fetch available days ID from available days table using advertisement ID
      const availableDaysID = await this.prisma.availableDays.findFirst({
        where: { PropertyAdID: dto.AdvertisementID },
        select: { ID: true },
      });

      console.log('Available Days ID fetched');
      console.log(availableDaysID);

      // fetch available times ID from available times table using advertisement ID
      const availableTimesID = await this.prisma.availableTimes.findFirst({
        where: { PropertyAdID: dto.AdvertisementID },
        select: { ID: true },
      });

      console.log('Available Times ID fetched');
      console.log(availableTimesID);

      //fetch amenities ID from amenities table using advertisement ID
      const amenitiesID = await this.prisma.amenities.findFirst({
        where: { PropertyAdID: dto.AdvertisementID },
        select: { ID: true },
      });

      console.log('Amenities ID fetched');
      console.log(amenitiesID);

      //fetch house rules ID from house rules table using advertisement ID
      // const houseRulesID = await this.prisma.houseRules.findFirst({
      //   where: { PropertyAdID: dto.AdvertisementID },
      //   select: { ID: true },
      // });
      const houseRulesID = await this.prisma.houseRules.findMany({
        where: { PropertyAdID: dto.AdvertisementID },
        select: { ID: true },
      });
      console.log('House Rules ID fetched');
      console.log(houseRulesID);

      const preference = await this.prisma.preference.update({
        where: { PropertyAdID: dto.AdvertisementID, ID: preferenceID.ID },
        data: {
          Professional: dto.Preference.Professional,
          Student: dto.Preference.Student,
          Couple: dto.Preference.Couple,
          Family: dto.Preference.Family,
          Male: dto.Preference.Male,
          Female: dto.Preference.Female,
          PetOwners: dto.Preference.PetOwners,
        },
      });
      console.log('Preference updated');

      const sharedSpace = await this.prisma.sharedSpace.update({
        where: { PropertyAdID: dto.AdvertisementID, ID: sharedSpaceID.ID },
        data: {
          LivingRoom: dto.SharedSpace.LivingRoom,
          Kitchen: dto.SharedSpace.Kitchen,
          Bathroom: dto.SharedSpace.Bathroom,
        },
      });
      console.log('Shared Space updated');

      const availableDays = await this.prisma.availableDays.update({
        where: { PropertyAdID: dto.AdvertisementID, ID: availableDaysID.ID },
        data: {
          Monday: dto.AvailableDays.Monday,
          Tuesday: dto.AvailableDays.Tuesday,
          Wednesday: dto.AvailableDays.Wednesday,
          Thursday: dto.AvailableDays.Thursday,
          Friday: dto.AvailableDays.Friday,
          Saturday: dto.AvailableDays.Saturday,
          Sunday: dto.AvailableDays.Sunday,
        },
      });
      console.log('Available Days updated');

      // const houseRules = await this.prisma.houseRules.update({
      //   where: { PropertyAdID: dto.AdvertisementID, ID: houseRulesID.ID },
      //   data: {
      //     HouseRules: dto.HouseRules.HouseRules,
      //   },
      // });
      if (dto.HouseRules.length > 0) {
        await Promise.all(
          dto.HouseRules.map(async (rule: HouseRulesDto, index) => {
            const rulesIdtoUpdate = houseRulesID[index].ID;
            const houseRules = await this.prisma.houseRules.update({
              where: { PropertyAdID: dto.AdvertisementID, ID: rulesIdtoUpdate },
              data: {
                HouseRules: rule.HouseRules,
              },
            });
          }),
        );
      }

      console.log('House Rules updated');

      const amenities = await this.prisma.amenities.update({
        where: { PropertyAdID: dto.AdvertisementID, ID: amenitiesID.ID },
        data: {
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
      console.log('Amenities updated');

      const availableTimes = await this.prisma.availableTimes.update({
        where: { PropertyAdID: dto.AdvertisementID, ID: availableTimesID.ID },
        data: {
          Morning: dto.AvailableTimes.Morning,
          Afternoon: dto.AvailableTimes.Afternoon,
          Evening: dto.AvailableTimes.Evening,
        },
      });
      console.log('Available Times updated');

      const bedID = await this.prisma.bed.findMany({
        where: { PropertyAdID: dto.AdvertisementID },
        select: { ID: true },
      });

      console.log('Bed ID fetched');
      console.log(bedID);

      if (dto.Beds && dto.Beds.length > 0) {
        await Promise.all(
          dto.Beds.map(async (bed: BedDto, index) => {
            const bedIdToUpdate = bedID[index].ID; // Get the corresponding Bed ID from the fetched array
            return await this.prisma.bed.update({
              where: { PropertyAdID: dto.AdvertisementID, ID: bedIdToUpdate },
              data: {
                BedType: bed.BedType,
                Rent: bed.Rent,
                Deposit: bed.Deposit,
                BillingPeriod: bed.BillingPeriod,
                IncludeBills: bed.IncludeBills,
              },
            });
          }),
        );
        console.log('Beds updated');
      }

      // fetch room and bed ID from room and bed table using advertisement ID
      const roomAndBedID = await this.prisma.roomAndBed.findFirst({
        where: { PropertyAdID: dto.AdvertisementID },
        select: { ID: true },
      });

      const roomAndBed = await this.prisma.roomAndBed.update({
        where: { PropertyAdID: dto.AdvertisementID, ID: roomAndBedID.ID },
        data: {
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
      console.log('Room and Bed updated');

      // Optionally, you can return the updated advertisementBase record
      return JSON.stringify(updatedAdvertisementBase, (_, v) =>
        typeof v === 'bigint' ? v.toString() : v,
      );
    } catch (err) {
      console.log(err);
      throw new Error('Failed to update advertisement');
    }
  }

  async createAdvertisementBase(dto: AdDto, adID: string) {
    return await this.prisma.advertisementBase.create({
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
  }

  async createPreference(dto: AdDto, adID: string) {
    console.log('Inside createPreference');
    return await this.prisma.preference.create({
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
  }

  async createSharedSpace(dto: AdDto, adID: string) {
    return await this.prisma.sharedSpace.create({
      data: {
        ID: MakeTimedIDUnique(),
        PropertyAdID: adID,
        LivingRoom: dto.SharedSpace.LivingRoom,
        Kitchen: dto.SharedSpace.Kitchen,
        Bathroom: dto.SharedSpace.Bathroom,
      },
    });
  }

  async createAvailableDays(dto: AdDto, adID: string) {
    return await this.prisma.availableDays.create({
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
  }

  async createAmenities(dto: AdDto, adID: string) {
    return await this.prisma.amenities.create({
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
  }

  async createBeds(dto: AdDto, adID: string) {
    console.log('Inside createBeds');
    return await Promise.all(
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
  }

  async createAvailableTimes(dto: AdDto, adID: string) {
    return await this.prisma.availableTimes.create({
      data: {
        ID: MakeTimedIDUnique(),
        PropertyAdID: adID,
        Morning: dto.AvailableTimes.Morning,
        Afternoon: dto.AvailableTimes.Afternoon,
        Evening: dto.AvailableTimes.Evening,
      },
    });
  }

  async createHouseRules(dto: AdDto, adID: string) {
    console.log('Inside createHouseRules');
    return await Promise.all(
      dto.HouseRules.map(async (rule: HouseRulesDto) => {
        return await this.prisma.houseRules.create({
          data: {
            ID: MakeTimedIDUnique(),
            PropertyAdID: adID,
            HouseRules: rule.HouseRules,
          },
        });
      }),
    );
  }

  async createRoomAndBed(dto: AdDto, adID: string) {
    return await this.prisma.roomAndBed.create({
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
  }
}
