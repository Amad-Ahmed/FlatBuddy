import { PrismaService } from 'src/prisma/prisma.service';
import { AdDto } from './dto';
import { Injectable } from '@nestjs/common';
import { MakeTimedIDUnique } from 'src/common-helpers/helper';
import { BedTypeEnum, BillingPeriodEnum } from '@prisma/client';
import { BedDto } from 'src/bed/dto';
import { HouseRulesDto } from 'src/houserules/dto';
import { RoomDto } from 'src/room/dto';
import { FlatRoomDto } from 'src/flatrooms/dto';
import {
  createAdvertisementBase,
  createAmenities,
  createAvailableDays,
  createAvailableTimes,
  createBeds,
  createFlat,
  createFlatRooms,
  createHouseRules,
  createPreference,
  createRoomAndBed,
  createRooms,
  createSharedSpace,
  updateAdvertisementBase,
  updateAmenities,
  updateAvailableDays,
  updateAvailableTimes,
  updateBeds,
  updateFlat,
  updateFlatRooms,
  updateHouseRules,
  updatePreference,
  updateRoomAndBed,
  updateRooms,
  updateSharedSpace,
} from './helper-functions';

@Injectable()
export class AdvertisementService {
  constructor(private prisma: PrismaService) {}

  async createAdvertisement(dto: AdDto) {
    try {
      const advertisementBase = await this.prisma.$transaction(
        async (prisma) => {
          const adID = MakeTimedIDUnique();

          const createdAdvertisementBase = await createAdvertisementBase(
            prisma,
            dto,
            adID,
          );

          // Call other helper functions within the transaction context
          const preference = await createPreference(prisma, dto, adID);
          const sharedSpace = await createSharedSpace(prisma, dto, adID);
          const availableDays = await createAvailableDays(prisma, dto, adID);
          const houseRules = await createHouseRules(prisma, dto, adID);
          const amenities = await createAmenities(prisma, dto, adID);
          const availableTimes = await createAvailableTimes(prisma, dto, adID);
          // Create entry for Beds table if beds are available
          if (dto.Beds && dto.Beds.length > 0) {
            const beds = await createBeds(prisma, dto, adID);
          }
          // Create entry for Rooms table if rooms are available
          if (dto.Rooms && dto.Rooms.length > 0) {
            const rooms = await createRooms(prisma, dto, adID);
          }
          // Create entry for Flat table if flat is available
          if (dto.Flats) {
            const flat = await createFlat(prisma, dto, adID);
          }
          // Create entry for FlatRoom table if flatroom is available
          if (dto.FlatRooms && dto.FlatRooms.length > 0) {
            const flatRooms = await createFlatRooms(prisma, dto, adID);
          }
          // Create entry for RoomAndBed Table
          if (dto.RoomAndBed) {
            const roomAndBed = await createRoomAndBed(prisma, dto, adID);
          }

          // code to find all the entries in photos table which have null PropertyAdID
          // and then assign adID to them
          const photos = await prisma.photos.findMany({
            where: { PropertyAdID: null },
          });
          const photoIds = photos.map((photo) => photo.ID);
          const updatedPhotos = await prisma.photos.updateMany({
            where: { ID: { in: photoIds } },
            data: { PropertyAdID: adID },
          });

          return createdAdvertisementBase;
        },
      );

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
      const advertisementBase = await this.prisma.$transaction(
        async (prisma) => {
          const updatedAdvertisementBase = await updateAdvertisementBase(
            prisma,
            dto,
          );

          // Call other helper functions within the transaction context
          const preference = await updatePreference(prisma, dto);
          const sharedSpace = await updateSharedSpace(prisma, dto);
          const availableDays = await updateAvailableDays(prisma, dto);
          const houseRules = await updateHouseRules(prisma, dto);
          const amenities = await updateAmenities(prisma, dto);
          const availableTimes = await updateAvailableTimes(prisma, dto);
          // Create entry for Beds table if beds are available
          if (dto.Beds && dto.Beds.length > 0) {
            const beds = await updateBeds(prisma, dto);
          }
          // Create entry for Rooms table if rooms are available
          if (dto.Rooms && dto.Rooms.length > 0) {
            const rooms = await updateRooms(prisma, dto);
          }
          // Create entry for Flat table if flat is available
          if (dto.Flats) {
            const flat = await updateFlat(prisma, dto);
          }
          // Create entry for FlatRoom table if flatroom is available
          if (dto.FlatRooms && dto.FlatRooms.length > 0) {
            const flatRooms = await updateFlatRooms(prisma, dto);
          }
          // Create entry for RoomAndBed Table
          if (dto.RoomAndBed) {
            const roomAndBed = await updateRoomAndBed(prisma, dto);
          }

          return updatedAdvertisementBase;
        },
      );

      return JSON.stringify(advertisementBase, (_, v) =>
        typeof v === 'bigint' ? v.toString() : v,
      );
    } catch (err) {
      console.log(err);
    }
  }

  // async editAdvertisement(dto: AdDto) {
  //   try {
  //     console.log('Edit Advertisement data');
  //     const updatedAdvertisementBase = await updateAdvertisementBase(
  //       this.prisma,
  //       dto,
  //     );
  //     console.log('Advertisement Base updated');

  //     const preference = await updatePreference(this.prisma, dto);
  //     console.log('Preference updated');

  //     const sharedSpace = await updateSharedSpace(this.prisma, dto);
  //     console.log('Shared Space updated');

  //     const availableDays = await updateAvailableDays(this.prisma, dto);
  //     console.log('Available Days updated');

  //     const houseRules = await updateHouseRules(this.prisma, dto);
  //     console.log('House Rules updated');

  //     const amenities = await updateAmenities(this.prisma, dto);
  //     console.log('Amenities updated');

  //     const availableTimes = await updateAvailableTimes(this.prisma, dto);
  //     console.log('Available Times updated');

  //     // Update Beds table if beds are available
  //     if (dto.Beds && dto.Beds.length > 0) {
  //       const beds = await updateBeds(this.prisma, dto);
  //       console.log('Beds updated');
  //     }

  //     // Update Rooms table if rooms are available
  //     if (dto.Rooms && dto.Rooms.length > 0) {
  //       const rooms = await updateRooms(this.prisma, dto);
  //       console.log('Rooms updated');
  //     }

  //     // Update Flat table if flat is available
  //     if (dto.Flats) {
  //       const flat = await updateFlat(this.prisma, dto);
  //       console.log('Flat updated');
  //     }

  //     // Update FlatRoom table if flatroom is available
  //     if (dto.FlatRooms && dto.FlatRooms.length > 0) {
  //       console.log('Flat Rooms data', dto.FlatRooms);
  //       const flatRooms = await updateFlatRooms(this.prisma, dto);
  //       console.log('Flat Rooms updated');
  //     }
  //     // Update RoomAndBed Table if room and bed is available
  //     if (dto.RoomAndBed) {
  //       const roomAndBed = await updateRoomAndBed(this.prisma, dto);
  //       console.log('Room and Bed updated');
  //     }

  //     // Optionally, you can return the updated advertisementBase record
  //     return JSON.stringify(updatedAdvertisementBase, (_, v) =>
  //       typeof v === 'bigint' ? v.toString() : v,
  //     );
  //   } catch (err) {
  //     console.log(err);
  //     throw new Error('Failed to update advertisement');
  //   }
  // }
}
