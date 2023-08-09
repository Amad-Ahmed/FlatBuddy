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
      console.log('Create Advertisement data');
      const adID = MakeTimedIDUnique();
      console.log('Generated Advertisement ID:', adID);

      // create entry in advertisement base table
      // imported from helper-functions.ts
      const advertisementBase = await createAdvertisementBase(
        this.prisma,
        dto,
        adID,
      );
      console.log('Advertisement Base created');

      // create entry in preference table
      const preference = await createPreference(this.prisma, dto, adID);
      console.log(preference);
      console.log('Preference created');

      // create entry for shared space table
      const sharedSpace = await createSharedSpace(this.prisma, dto, adID);
      console.log(sharedSpace);
      console.log('Shared Space created');

      // create entry for available days table
      const availableDays = await createAvailableDays(this.prisma, dto, adID);
      console.log(availableDays);
      console.log('Available Days created');

      // create entry for house rules table
      const houseRules = await createHouseRules(this.prisma, dto, adID);
      console.log(houseRules);
      console.log('House Rules created');

      // create entry for amenities table
      const amenities = await createAmenities(this.prisma, dto, adID);

      console.log(amenities);
      console.log('Amenities created');

      // create entry for available times table
      const availableTimes = await createAvailableTimes(this.prisma, dto, adID);
      console.log(availableTimes);
      console.log('Available Times created');

      // Create entry for Beds table if beds are available
      if (dto.Beds && dto.Beds.length > 0) {
        const beds = await createBeds(this.prisma, dto, adID);
        console.log(beds);
        console.log('Beds created');
      }

      // Create entry for Rooms table if rooms are available
      if (dto.Rooms && dto.Rooms.length > 0) {
        const rooms = await createRooms(this.prisma, dto, adID);
        console.log(rooms);
        console.log('Rooms created');
      }

      // Create entry for Flat table if flat is available
      if (dto.Flats) {
        const flat = await createFlat(this.prisma, dto, adID);
        console.log(flat);
        console.log('Flat created');
      }

      // create entry for FlatRoom table if flatroom is available
      if (dto.FlatRooms && dto.FlatRooms.length > 0) {
        const flatRooms = await createFlatRooms(this.prisma, dto, adID);
        console.log(flatRooms);
        console.log('Flat Rooms created');
      }

      // create entry for RoomAndBed Table
      if (dto.RoomAndBed) {
        const roomAndBed = await createRoomAndBed(this.prisma, dto, adID);
        console.log(roomAndBed);
        console.log('Room and Bed created');
      }

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
      const updatedAdvertisementBase = await updateAdvertisementBase(
        this.prisma,
        dto,
      );
      console.log('Advertisement Base updated');

      const preference = await updatePreference(this.prisma, dto);
      console.log('Preference updated');

      const sharedSpace = await updateSharedSpace(this.prisma, dto);
      console.log('Shared Space updated');

      const availableDays = await updateAvailableDays(this.prisma, dto);
      console.log('Available Days updated');

      const houseRules = await updateHouseRules(this.prisma, dto);
      console.log('House Rules updated');

      const amenities = await updateAmenities(this.prisma, dto);
      console.log('Amenities updated');

      const availableTimes = await updateAvailableTimes(this.prisma, dto);
      console.log('Available Times updated');

      // Update Beds table if beds are available
      if (dto.Beds && dto.Beds.length > 0) {
        const beds = await updateBeds(this.prisma, dto);
        console.log('Beds updated');
      }

      // Update Rooms table if rooms are available
      if (dto.Rooms && dto.Rooms.length > 0) {
        const rooms = await updateRooms(this.prisma, dto);
        console.log('Rooms updated');
      }

      // Update Flat table if flat is available
      if (dto.Flats) {
        const flat = await updateFlat(this.prisma, dto);
        console.log('Flat updated');
      }

      // Update FlatRoom table if flatroom is available
      if (dto.FlatRooms && dto.FlatRooms.length > 0) {
        console.log('Flat Rooms data', dto.FlatRooms);
        const flatRooms = await updateFlatRooms(this.prisma, dto);
        console.log('Flat Rooms updated');
      }
      // Update RoomAndBed Table if room and bed is available
      if (dto.RoomAndBed) {
        const roomAndBed = await updateRoomAndBed(this.prisma, dto);
        console.log('Room and Bed updated');
      }

      // Optionally, you can return the updated advertisementBase record
      return JSON.stringify(updatedAdvertisementBase, (_, v) =>
        typeof v === 'bigint' ? v.toString() : v,
      );
    } catch (err) {
      console.log(err);
      throw new Error('Failed to update advertisement');
    }
  }
}
