/*
  Warnings:

  - The primary key for the `Amenities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Air Conditioned` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `Laundry Rooftop / Terrace` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `Lounge Area` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `Property_Ad_ID` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `Shared Kitchen` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `Washing Machine` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `electricity` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `furnished` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `garden` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `heating` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `internet` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `livingRoom` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `parking` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `water` on the `Amenities` table. All the data in the column will be lost.
  - The primary key for the `AvailableDays` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Property_Ad_ID` on the `AvailableDays` table. All the data in the column will be lost.
  - You are about to drop the column `friday` on the `AvailableDays` table. All the data in the column will be lost.
  - You are about to drop the column `monday` on the `AvailableDays` table. All the data in the column will be lost.
  - You are about to drop the column `saturday` on the `AvailableDays` table. All the data in the column will be lost.
  - You are about to drop the column `sunday` on the `AvailableDays` table. All the data in the column will be lost.
  - You are about to drop the column `thursday` on the `AvailableDays` table. All the data in the column will be lost.
  - You are about to drop the column `tuesday` on the `AvailableDays` table. All the data in the column will be lost.
  - You are about to drop the column `wednesday` on the `AvailableDays` table. All the data in the column will be lost.
  - You are about to drop the column `Property_Ad_ID` on the `AvailableTimes` table. All the data in the column will be lost.
  - You are about to drop the column `advertisementID` on the `AvailableTimes` table. All the data in the column will be lost.
  - You are about to drop the column `availableFrom` on the `AvailableTimes` table. All the data in the column will be lost.
  - You are about to drop the column `availableTo` on the `AvailableTimes` table. All the data in the column will be lost.
  - You are about to drop the column `Include Bills` on the `Bed` table. All the data in the column will be lost.
  - You are about to drop the column `Property_Ad_ID` on the `Bed` table. All the data in the column will be lost.
  - You are about to drop the column `bedType` on the `Bed` table. All the data in the column will be lost.
  - You are about to drop the column `billingPeriod` on the `Bed` table. All the data in the column will be lost.
  - You are about to drop the column `deposit` on the `Bed` table. All the data in the column will be lost.
  - You are about to drop the column `rent` on the `Bed` table. All the data in the column will be lost.
  - You are about to drop the column `Include Bills` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `Property_Ad_ID` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `billingPeriod` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `deposit` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `rent` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `roomSize` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `roomType` on the `Room` table. All the data in the column will be lost.
  - The primary key for the `SharedSpace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Property_Ad_ID` on the `SharedSpace` table. All the data in the column will be lost.
  - You are about to drop the column `bathroom` on the `SharedSpace` table. All the data in the column will be lost.
  - You are about to drop the column `kitchen` on the `SharedSpace` table. All the data in the column will be lost.
  - You are about to drop the column `livingRoom` on the `SharedSpace` table. All the data in the column will be lost.
  - You are about to drop the `Advertisement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HouseRule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Miscellaneous` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `AirConditioned` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Electricity` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Furnished` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Garden` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Heating` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Internet` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Laundry` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LivingRoom` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LoungeArea` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Parking` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PropertyAdID` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RooftopTerrace` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SharedKitchen` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WashingMachine` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Water` to the `Amenities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Friday` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Monday` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PropertyAdID` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Saturday` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Sunday` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Thursday` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Tuesday` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Wednesday` to the `AvailableDays` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Afternoon` to the `AvailableTimes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Evening` to the `AvailableTimes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Morning` to the `AvailableTimes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PropertyAdID` to the `AvailableTimes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BedType` to the `Bed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BillingPeriod` to the `Bed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Deposit` to the `Bed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IncludeBills` to the `Bed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PropertyAdID` to the `Bed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rent` to the `Bed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AttachBathroom` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BillingPeriod` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Deposit` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IncludeBills` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PropertyAdID` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rent` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RoomSize` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RoomType` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Bathroom` to the `SharedSpace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `SharedSpace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Kitchen` to the `SharedSpace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LivingRoom` to the `SharedSpace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PropertyAdID` to the `SharedSpace` table without a default value. This is not possible if the table is not empty.
  - Made the column `Email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Advertisement" DROP CONSTRAINT "Advertisement_UserID_fkey";

-- DropForeignKey
ALTER TABLE "Advertisement" DROP CONSTRAINT "Advertisement_amenitiesPropertyAdID_fkey";

-- DropForeignKey
ALTER TABLE "Advertisement" DROP CONSTRAINT "Advertisement_availableDaysPropertyAdID_fkey";

-- DropForeignKey
ALTER TABLE "Advertisement" DROP CONSTRAINT "Advertisement_miscellaneousPropertyAdID_fkey";

-- DropForeignKey
ALTER TABLE "Advertisement" DROP CONSTRAINT "Advertisement_sharedSpacePropertyAdID_fkey";

-- DropForeignKey
ALTER TABLE "AvailableTimes" DROP CONSTRAINT "AvailableTimes_advertisementID_fkey";

-- DropForeignKey
ALTER TABLE "Bed" DROP CONSTRAINT "Bed_Property_Ad_ID_fkey";

-- DropForeignKey
ALTER TABLE "HouseRule" DROP CONSTRAINT "HouseRule_Property_Ad_ID_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_Property_Ad_ID_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_Property_Ad_ID_fkey";

-- AlterTable
ALTER TABLE "Amenities" DROP CONSTRAINT "Amenities_pkey",
DROP COLUMN "Air Conditioned",
DROP COLUMN "Laundry Rooftop / Terrace",
DROP COLUMN "Lounge Area",
DROP COLUMN "Property_Ad_ID",
DROP COLUMN "Shared Kitchen",
DROP COLUMN "Washing Machine",
DROP COLUMN "electricity",
DROP COLUMN "furnished",
DROP COLUMN "garden",
DROP COLUMN "heating",
DROP COLUMN "internet",
DROP COLUMN "livingRoom",
DROP COLUMN "parking",
DROP COLUMN "water",
ADD COLUMN     "AirConditioned" BOOLEAN NOT NULL,
ADD COLUMN     "Electricity" BOOLEAN NOT NULL,
ADD COLUMN     "Furnished" BOOLEAN NOT NULL,
ADD COLUMN     "Garden" BOOLEAN NOT NULL,
ADD COLUMN     "Heating" BOOLEAN NOT NULL,
ADD COLUMN     "ID" TEXT NOT NULL,
ADD COLUMN     "Internet" BOOLEAN NOT NULL,
ADD COLUMN     "Laundry" BOOLEAN NOT NULL,
ADD COLUMN     "LivingRoom" BOOLEAN NOT NULL,
ADD COLUMN     "LoungeArea" BOOLEAN NOT NULL,
ADD COLUMN     "Parking" BOOLEAN NOT NULL,
ADD COLUMN     "PropertyAdID" TEXT NOT NULL,
ADD COLUMN     "RooftopTerrace" BOOLEAN NOT NULL,
ADD COLUMN     "SharedKitchen" BOOLEAN NOT NULL,
ADD COLUMN     "WashingMachine" BOOLEAN NOT NULL,
ADD COLUMN     "Water" BOOLEAN NOT NULL,
ADD CONSTRAINT "Amenities_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "AvailableDays" DROP CONSTRAINT "AvailableDays_pkey",
DROP COLUMN "Property_Ad_ID",
DROP COLUMN "friday",
DROP COLUMN "monday",
DROP COLUMN "saturday",
DROP COLUMN "sunday",
DROP COLUMN "thursday",
DROP COLUMN "tuesday",
DROP COLUMN "wednesday",
ADD COLUMN     "Friday" BOOLEAN NOT NULL,
ADD COLUMN     "ID" TEXT NOT NULL,
ADD COLUMN     "Monday" BOOLEAN NOT NULL,
ADD COLUMN     "PropertyAdID" TEXT NOT NULL,
ADD COLUMN     "Saturday" BOOLEAN NOT NULL,
ADD COLUMN     "Sunday" BOOLEAN NOT NULL,
ADD COLUMN     "Thursday" BOOLEAN NOT NULL,
ADD COLUMN     "Tuesday" BOOLEAN NOT NULL,
ADD COLUMN     "Wednesday" BOOLEAN NOT NULL,
ADD CONSTRAINT "AvailableDays_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "AvailableTimes" DROP COLUMN "Property_Ad_ID",
DROP COLUMN "advertisementID",
DROP COLUMN "availableFrom",
DROP COLUMN "availableTo",
ADD COLUMN     "Afternoon" BOOLEAN NOT NULL,
ADD COLUMN     "Evening" BOOLEAN NOT NULL,
ADD COLUMN     "Morning" BOOLEAN NOT NULL,
ADD COLUMN     "PropertyAdID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Bed" DROP COLUMN "Include Bills",
DROP COLUMN "Property_Ad_ID",
DROP COLUMN "bedType",
DROP COLUMN "billingPeriod",
DROP COLUMN "deposit",
DROP COLUMN "rent",
ADD COLUMN     "BedType" TEXT NOT NULL,
ADD COLUMN     "BillingPeriod" TEXT NOT NULL,
ADD COLUMN     "Deposit" INTEGER NOT NULL,
ADD COLUMN     "IncludeBills" BOOLEAN NOT NULL,
ADD COLUMN     "PropertyAdID" TEXT NOT NULL,
ADD COLUMN     "Rent" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "Include Bills",
DROP COLUMN "Property_Ad_ID",
DROP COLUMN "billingPeriod",
DROP COLUMN "deposit",
DROP COLUMN "rent",
DROP COLUMN "roomSize",
DROP COLUMN "roomType",
ADD COLUMN     "AttachBathroom" BOOLEAN NOT NULL,
ADD COLUMN     "BillingPeriod" TEXT NOT NULL,
ADD COLUMN     "Deposit" INTEGER NOT NULL,
ADD COLUMN     "IncludeBills" BOOLEAN NOT NULL,
ADD COLUMN     "PropertyAdID" TEXT NOT NULL,
ADD COLUMN     "Rent" INTEGER NOT NULL,
ADD COLUMN     "RoomSize" INTEGER NOT NULL,
ADD COLUMN     "RoomType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SharedSpace" DROP CONSTRAINT "SharedSpace_pkey",
DROP COLUMN "Property_Ad_ID",
DROP COLUMN "bathroom",
DROP COLUMN "kitchen",
DROP COLUMN "livingRoom",
ADD COLUMN     "Bathroom" BOOLEAN NOT NULL,
ADD COLUMN     "ID" TEXT NOT NULL,
ADD COLUMN     "Kitchen" BOOLEAN NOT NULL,
ADD COLUMN     "LivingRoom" BOOLEAN NOT NULL,
ADD COLUMN     "PropertyAdID" TEXT NOT NULL,
ADD CONSTRAINT "SharedSpace_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "Email" SET NOT NULL,
ALTER COLUMN "Name" SET NOT NULL,
ALTER COLUMN "Password" SET NOT NULL;

-- DropTable
DROP TABLE "Advertisement";

-- DropTable
DROP TABLE "HouseRule";

-- DropTable
DROP TABLE "Miscellaneous";

-- DropTable
DROP TABLE "Photo";

-- DropEnum
DROP TYPE "AdvertiserTypeEnum";

-- DropEnum
DROP TYPE "BedTypeEnum";

-- DropEnum
DROP TYPE "BillingPeriodEnum";

-- DropEnum
DROP TYPE "PropertyTypeEnum";

-- DropEnum
DROP TYPE "RoomTypeEnum";

-- CreateTable
CREATE TABLE "AdvertisementBase" (
    "AdvertisementID" TEXT NOT NULL,
    "PropertyType" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Floor" TEXT NOT NULL,
    "AdvertiserType" TEXT NOT NULL,
    "AvailableFrom" BIGINT NOT NULL,
    "MinimumStayPeriod" INTEGER NOT NULL,
    "MaximumStayPeriod" INTEGER NOT NULL,
    "ScheduledCalls" BOOLEAN NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "UserID" TEXT NOT NULL,
    "Smoking" BOOLEAN NOT NULL,
    "Vegetarian" BOOLEAN NOT NULL,

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
CREATE TABLE "Flat" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "PropertyType" TEXT NOT NULL,
    "PropertySize" INTEGER NOT NULL,
    "Rent" INTEGER NOT NULL,
    "Deposit" INTEGER NOT NULL,
    "BillingPeriod" TEXT NOT NULL,
    "IncludeBills" BOOLEAN NOT NULL,

    CONSTRAINT "Flat_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "FlatRooms" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "RoomType" TEXT NOT NULL,
    "AttachBathroom" BOOLEAN NOT NULL,

    CONSTRAINT "FlatRooms_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Preference" (
    "ID" TEXT NOT NULL,
    "PropertyAdID" TEXT NOT NULL,
    "Student" BOOLEAN NOT NULL,
    "Professional" BOOLEAN NOT NULL,
    "PetOwners" BOOLEAN NOT NULL,
    "Family" BOOLEAN NOT NULL,
    "Male" BOOLEAN NOT NULL,
    "Female" BOOLEAN NOT NULL,
    "Couple" BOOLEAN NOT NULL,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("ID")
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
