import { Prisma, PrismaClient } from '@prisma/client';
import { AdDto } from './dto';
import { MakeTimedIDUnique } from 'src/common-helpers/helper';
import { BedDto } from 'src/bed/dto';
import { RoomDto } from 'src/room/dto';
import { FlatRoomDto } from 'src/flatrooms/dto';

export async function createAdvertisementBase(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  return await prisma.advertisementBase.create({
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

export async function createPreference(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  console.log('Inside createPreference');
  return await prisma.preference.create({
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

export async function createAmenities(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  console.log('Inside createAmenities');
  return await prisma.amenities.create({
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

export async function createSharedSpace(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  return await prisma.sharedSpace.create({
    data: {
      ID: MakeTimedIDUnique(),
      PropertyAdID: adID,
      LivingRoom: dto.SharedSpace.LivingRoom,
      Kitchen: dto.SharedSpace.Kitchen,
      Bathroom: dto.SharedSpace.Bathroom,
    },
  });
}

export async function createAvailableDays(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  return await prisma.availableDays.create({
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

export async function createBeds(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  console.log('Inside createBeds');
  return await Promise.all(
    dto.Beds.map(async (bed: BedDto) => {
      return await prisma.bed.create({
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

export async function createRooms(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  console.log('Inside createRooms');
  return await Promise.all(
    dto.Rooms.map(async (room: RoomDto) => {
      return await prisma.room.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          RoomType: room.RoomType,
          RoomSize: room.RoomSize,
          Rent: room.Rent,
          Deposit: room.Deposit,
          BillingPeriod: room.BillingPeriod,
          IncludeBills: room.IncludeBills,
          AttachBathroom: room.AttachBathroom,
        },
      });
    }),
  );
}

export async function createFlat(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  console.log('Inside createFlats');
  return await prisma.flat.create({
    data: {
      ID: MakeTimedIDUnique(),
      PropertyAdID: adID,
      HouseType: dto.Flats.HouseType,
      PropertySize: dto.Flats.PropertySize,
      Rent: dto.Flats.Rent,
      Deposit: dto.Flats.Deposit,
      BillingPeriod: dto.Flats.BillingPeriod,
      IncludeBills: dto.Flats.IncludeBills,
    },
  });
}

export async function createFlatRooms(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  console.log('Inside createFlatRooms');
  return await Promise.all(
    dto.FlatRooms.map(async (flatRoom: FlatRoomDto) => {
      return await prisma.flatRooms.create({
        data: {
          ID: MakeTimedIDUnique(),
          PropertyAdID: adID,
          RoomType: flatRoom.RoomType,
          AttachBathroom: flatRoom.AttachBathroom,
        },
      });
    }),
  );
}

export async function createAvailableTimes(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  return await prisma.availableTimes.create({
    data: {
      ID: MakeTimedIDUnique(),
      PropertyAdID: adID,
      Morning: dto.AvailableTimes.Morning,
      Afternoon: dto.AvailableTimes.Afternoon,
      Evening: dto.AvailableTimes.Evening,
    },
  });
}

export async function createHouseRules(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  console.log('Inside createHouseRules');
  return await prisma.houseRules.create({
    data: {
      ID: MakeTimedIDUnique(),
      PropertyAdID: adID,
      HouseRules: dto.HouseRules.HouseRules,
    },
  });
}

export async function createRoomAndBed(
  prisma: PrismaClient,
  dto: AdDto,
  adID: string,
) {
  return await prisma.roomAndBed.create({
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

export async function updateAdvertisementBase(
  prisma: PrismaClient,
  dto: AdDto,
) {
  console.log('Inside updateAdvertisementBase');
  return await prisma.advertisementBase.update({
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
}

export async function updatePreference(prisma: PrismaClient, dto: AdDto) {
  // fetch preferenceID
  const preferenceID = await prisma.preference.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });
  console.log('preferenceID', preferenceID);

  console.log('Inside updatePreference');
  // update preference
  return await prisma.preference.update({
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
}

export async function updateSharedSpace(prisma: PrismaClient, dto: AdDto) {
  //fetch sharedSpaceID
  const sharedSpaceID = await prisma.sharedSpace.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('sharedSpaceID', sharedSpaceID);

  console.log('Inside updateSharedSpace');
  // update sharedSpace
  return await prisma.sharedSpace.update({
    where: { PropertyAdID: dto.AdvertisementID, ID: sharedSpaceID.ID },
    data: {
      LivingRoom: dto.SharedSpace.LivingRoom,
      Kitchen: dto.SharedSpace.Kitchen,
      Bathroom: dto.SharedSpace.Bathroom,
    },
  });
}

export async function updateAvailableDays(prisma: PrismaClient, dto: AdDto) {
  //fetch availableDaysID
  const availableDaysID = await prisma.availableDays.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('availableDaysID', availableDaysID);

  console.log('Inside updateAvailableDays');
  // update availableDays
  return await prisma.availableDays.update({
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
}

export async function updateHouseRules(prisma: PrismaClient, dto: AdDto) {
  //fetch houseRulesID
  const houseRulesID = await prisma.houseRules.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('houseRulesID', houseRulesID);

  console.log('Inside updateHouseRules');

  // update houseRules
  return await prisma.houseRules.update({
    where: { PropertyAdID: dto.AdvertisementID, ID: houseRulesID.ID },
    data: {
      HouseRules: dto.HouseRules.HouseRules,
    },
  });
}

export async function updateAmenities(prisma: PrismaClient, dto: AdDto) {
  //fetch amenitiesID
  const amenitiesID = await prisma.amenities.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('amenitiesID', amenitiesID);

  console.log('Inside updateAmenities');

  // update amenities
  return await prisma.amenities.update({
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
}

export async function updateAvailableTimes(prisma: PrismaClient, dto: AdDto) {
  //fetch availableTimesID
  const availableTimesID = await prisma.availableTimes.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('availableTimesID', availableTimesID);

  console.log('Inside updateAvailableTimes');

  // update availableTimes
  return await prisma.availableTimes.update({
    where: { PropertyAdID: dto.AdvertisementID, ID: availableTimesID.ID },
    data: {
      Morning: dto.AvailableTimes.Morning,
      Afternoon: dto.AvailableTimes.Afternoon,
      Evening: dto.AvailableTimes.Evening,
    },
  });
}

export async function updateBeds(prisma: PrismaClient, dto: AdDto) {
  const bedID = await prisma.bed.findMany({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('bedID', bedID);

  console.log('Inside updateBeds');

  // update beds
  return await Promise.all(
    dto.Beds.map(async (bed: BedDto, index) => {
      const bedIdToUpdate = bedID[index].ID; // Get the corresponding Bed ID from the fetched array
      return await prisma.bed.update({
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
}

export async function updateRoomAndBed(prisma: PrismaClient, dto: AdDto) {
  // fetch room and bed ID from room and bed table using advertisement ID
  const roomAndBedID = await prisma.roomAndBed.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('roomAndBedID', roomAndBedID);

  console.log('Inside updateRoomAndBed');

  // update room and bed
  return await prisma.roomAndBed.update({
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
}

export async function updateRooms(prisma: PrismaClient, dto: AdDto) {
  //fetch roomID
  const roomID = await prisma.room.findMany({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('roomID', roomID);

  console.log('Inside updateRooms');

  // update rooms
  return await Promise.all(
    dto.Rooms.map(async (room: RoomDto, index) => {
      const roomIdToUpdate = roomID[index].ID; // Get the corresponding Room ID from the fetched array
      return await prisma.room.update({
        where: { PropertyAdID: dto.AdvertisementID, ID: roomIdToUpdate },
        data: {
          RoomType: room.RoomType,
          Rent: room.Rent,
          Deposit: room.Deposit,
          BillingPeriod: room.BillingPeriod,
          IncludeBills: room.IncludeBills,
        },
      });
    }),
  );
}

export async function updateFlat(prisma: PrismaClient, dto: AdDto) {
  //fetch flatID
  const flatID = await prisma.flat.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('flatID', flatID);

  console.log('Inside updateFlat');

  // update flat
  return await prisma.flat.update({
    where: { PropertyAdID: dto.AdvertisementID, ID: flatID.ID },
    data: {
      HouseType: dto.Flats.HouseType,
      PropertySize: dto.Flats.PropertySize,
      Rent: dto.Flats.Rent,
      Deposit: dto.Flats.Deposit,
      BillingPeriod: dto.Flats.BillingPeriod,
      IncludeBills: dto.Flats.IncludeBills,
    },
  });
}

export async function updateFlatRooms(prisma: PrismaClient, dto: AdDto) {
  //fetch flatRoomsID
  const flatRoomsID = await prisma.flatRooms.findFirst({
    where: { PropertyAdID: dto.AdvertisementID },
    select: { ID: true },
  });

  console.log('flatRoomsID', flatRoomsID);

  console.log('Inside updateFlatRooms');

  return await Promise.all(
    dto.FlatRooms.map(async (flatRoom: FlatRoomDto, index) => {
      const flatRoomIdToUpdate = flatRoomsID[index].ID; // Get the corresponding FlatRoom ID from the fetched array
      return await prisma.flatRooms.update({
        where: { PropertyAdID: dto.AdvertisementID, ID: flatRoomIdToUpdate },
        data: {
          RoomType: flatRoom.RoomType,
          AttachBathroom: flatRoom.AttachBathroom,
        },
      });
    }),
  );
}
