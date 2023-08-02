-- CreateEnum
CREATE TYPE "PropertyTypeEnum" AS ENUM ('BED', 'ROOM', 'HOUSE');

-- CreateEnum
CREATE TYPE "AdvertiserTypeEnum" AS ENUM ('Agent', 'Live_in_Landlord', 'Current_Flatmate', 'Live_out_Landlord');

-- CreateEnum
CREATE TYPE "BedTypeEnum" AS ENUM ('Single', 'Double', 'Bunk', 'Sofa', 'Other');

-- CreateEnum
CREATE TYPE "BillingPeriodEnum" AS ENUM ('Weekly', 'Monthly', 'Yearly');

-- CreateEnum
CREATE TYPE "RoomTypeEnum" AS ENUM ('Single', 'Double', 'Twin', 'Triple', 'Quad', 'Other');

-- CreateEnum
CREATE TYPE "HouseTypeEnum" AS ENUM ('Flat', 'House', 'Studio', 'Portion');

-- CreateTable
CREATE TABLE "User" (
    "ID" CHAR(40) NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" INTEGER,
    "Password" TEXT NOT NULL,
    "Gender" TEXT,
    "Age" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "AdvertisementBase" (
    "AdvertisementID" TEXT NOT NULL,
    "PropertyType" "PropertyTypeEnum" NOT NULL,
    "City" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Floor" TEXT NOT NULL,
    "AdvertiserType" "AdvertiserTypeEnum" NOT NULL,
    "AvailableFrom" BIGINT,
    "MinimumStayPeriod" INTEGER,
    "MaximumStayPeriod" INTEGER,
    "ScheduledCalls" BOOLEAN,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "UserID" TEXT NOT NULL,
    "Smoking" BOOLEAN,
    "Vegetarian" BOOLEAN,

    CONSTRAINT "AdvertisementBase_pkey" PRIMARY KEY ("AdvertisementID")
);

-- CreateTable
CREATE TABLE "FavoriteAd" (
    "userID" TEXT NOT NULL,
    "advertisementID" TEXT NOT NULL,

    CONSTRAINT "FavoriteAd_pkey" PRIMARY KEY ("userID","advertisementID")
);

-- CreateTable
CREATE TABLE "RoomAndBed" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "TotalBedsRooms" INTEGER NOT NULL,
    "AvailableBedsRooms" INTEGER NOT NULL,
    "NumberOfMales" INTEGER NOT NULL,
    "NumberOfFemales" INTEGER NOT NULL,
    "MinAge" INTEGER NOT NULL,
    "MaxAge" INTEGER NOT NULL,
    "PrefMinAge" INTEGER NOT NULL,
    "PrefMaxAge" INTEGER NOT NULL,
    "PrefGender" TEXT NOT NULL,

    CONSTRAINT "RoomAndBed_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Bed" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "BedType" "BedTypeEnum" NOT NULL,
    "Rent" INTEGER NOT NULL,
    "Deposit" INTEGER NOT NULL,
    "BillingPeriod" "BillingPeriodEnum" NOT NULL,
    "IncludeBills" BOOLEAN NOT NULL,

    CONSTRAINT "Bed_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Room" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "RoomType" "RoomTypeEnum" NOT NULL,
    "RoomSize" INTEGER NOT NULL,
    "Rent" INTEGER NOT NULL,
    "Deposit" INTEGER NOT NULL,
    "BillingPeriod" "BillingPeriodEnum" NOT NULL,
    "IncludeBills" BOOLEAN NOT NULL,
    "AttachBathroom" BOOLEAN NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Flat" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "HouseType" "HouseTypeEnum" NOT NULL,
    "PropertySize" INTEGER NOT NULL,
    "Rent" INTEGER NOT NULL,
    "Deposit" INTEGER NOT NULL,
    "BillingPeriod" "BillingPeriodEnum" NOT NULL,
    "IncludeBills" BOOLEAN NOT NULL,

    CONSTRAINT "Flat_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "FlatRooms" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "RoomType" "RoomTypeEnum" NOT NULL,
    "AttachBathroom" BOOLEAN NOT NULL,

    CONSTRAINT "FlatRooms_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Preference" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "Student" BOOLEAN,
    "Professional" BOOLEAN,
    "PetOwners" BOOLEAN,
    "Family" BOOLEAN,
    "Male" BOOLEAN,
    "Female" BOOLEAN,
    "Couple" BOOLEAN,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "SharedSpace" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "Kitchen" BOOLEAN,
    "LivingRoom" BOOLEAN,
    "Bathroom" BOOLEAN,

    CONSTRAINT "SharedSpace_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "AvailableDays" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "Monday" BOOLEAN,
    "Tuesday" BOOLEAN,
    "Wednesday" BOOLEAN,
    "Thursday" BOOLEAN,
    "Friday" BOOLEAN,
    "Saturday" BOOLEAN,
    "Sunday" BOOLEAN,

    CONSTRAINT "AvailableDays_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Amenities" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "Furnished" BOOLEAN,
    "Internet" BOOLEAN,
    "Parking" BOOLEAN,
    "WashingMachine" BOOLEAN,
    "SharedKitchen" BOOLEAN,
    "LivingRoom" BOOLEAN,
    "Laundry" BOOLEAN,
    "RooftopTerrace" BOOLEAN,
    "Garden" BOOLEAN,
    "LoungeArea" BOOLEAN,
    "Electricity" BOOLEAN,
    "Water" BOOLEAN,
    "Heating" BOOLEAN,
    "AirConditioned" BOOLEAN,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "HouseRules" (
    "ID" TEXT NOT NULL,
    "HouseRules" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,

    CONSTRAINT "HouseRules_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Photos" (
    "ID" TEXT NOT NULL,
    "PhotoValue" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "AvailableTimes" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "Morning" BOOLEAN,
    "Afternoon" BOOLEAN,
    "Evening" BOOLEAN,

    CONSTRAINT "AvailableTimes_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "AdvertisementBase" ADD CONSTRAINT "AdvertisementBase_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteAd" ADD CONSTRAINT "FavoriteAd_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteAd" ADD CONSTRAINT "FavoriteAd_advertisementID_fkey" FOREIGN KEY ("advertisementID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomAndBed" ADD CONSTRAINT "RoomAndBed_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bed" ADD CONSTRAINT "Bed_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flat" ADD CONSTRAINT "Flat_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlatRooms" ADD CONSTRAINT "FlatRooms_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preference" ADD CONSTRAINT "Preference_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharedSpace" ADD CONSTRAINT "SharedSpace_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableDays" ADD CONSTRAINT "AvailableDays_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amenities" ADD CONSTRAINT "Amenities_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseRules" ADD CONSTRAINT "HouseRules_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableTimes" ADD CONSTRAINT "AvailableTimes_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;
