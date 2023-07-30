/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Bookmark` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PropertyTypeEnum" AS ENUM ('Bed', 'Room', 'Property');

-- CreateEnum
CREATE TYPE "AdvertiserTypeEnum" AS ENUM ('Live_in_Landlord', 'Current_Flatmate', 'Agent', 'Live_out_Landlord');

-- CreateEnum
CREATE TYPE "RoomTypeEnum" AS ENUM ('Single', 'Double', 'Twin', 'Triple', 'Quadruple', 'Studio', 'Ensuite', 'Other');

-- CreateEnum
CREATE TYPE "BillingPeriodEnum" AS ENUM ('Weekly', 'Monthly', 'Yearly');

-- CreateEnum
CREATE TYPE "BedTypeEnum" AS ENUM ('Single', 'Double', 'Twin', 'Triple', 'Quadruple', 'Studio', 'Ensuite', 'Other');

-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_userId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "hash",
DROP COLUMN "id",
DROP COLUMN "lastName",
DROP COLUMN "updatedAt",
ADD COLUMN     "Age" INTEGER NOT NULL,
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "Gender" TEXT NOT NULL,
ADD COLUMN     "ID" TEXT NOT NULL,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD COLUMN     "Password" TEXT NOT NULL,
ADD COLUMN     "Phone" INTEGER NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("ID");

-- DropTable
DROP TABLE "Bookmark";

-- CreateTable
CREATE TABLE "Advertisement" (
    "AdvertisementID" TEXT NOT NULL,
    "PropertyType" "PropertyTypeEnum" NOT NULL,
    "City" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Floor" TEXT NOT NULL,
    "AdvertiserType" "AdvertiserTypeEnum" NOT NULL,
    "AvailableFrom" BIGINT NOT NULL,
    "MinimumStayPeriod" INTEGER NOT NULL,
    "MaximumStayPeriod" INTEGER NOT NULL,
    "ScheduledCalls" BOOLEAN NOT NULL,
    "PrefOccupation" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Student" BOOLEAN NOT NULL,
    "Professional" BOOLEAN NOT NULL,
    "UserID" TEXT NOT NULL,
    "miscellaneousPropertyAdID" TEXT,
    "sharedSpacePropertyAdID" TEXT,
    "availableDaysPropertyAdID" TEXT,
    "amenitiesPropertyAdID" TEXT,

    CONSTRAINT "Advertisement_pkey" PRIMARY KEY ("AdvertisementID")
);

-- CreateTable
CREATE TABLE "AvailableTimes" (
    "ID" TEXT NOT NULL,
    "Property_Ad_ID" TEXT NOT NULL,
    "availableFrom" BIGINT NOT NULL,
    "availableTo" BIGINT NOT NULL,
    "advertisementID" TEXT,

    CONSTRAINT "AvailableTimes_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Miscellaneous" (
    "Property_Ad_ID" TEXT NOT NULL,
    "smoking" BOOLEAN NOT NULL,
    "couple" BOOLEAN NOT NULL,
    "pet" BOOLEAN NOT NULL,
    "vegetarian" BOOLEAN NOT NULL,

    CONSTRAINT "Miscellaneous_pkey" PRIMARY KEY ("Property_Ad_ID")
);

-- CreateTable
CREATE TABLE "SharedSpace" (
    "Property_Ad_ID" TEXT NOT NULL,
    "kitchen" BOOLEAN NOT NULL,
    "livingRoom" BOOLEAN NOT NULL,
    "bathroom" BOOLEAN NOT NULL,

    CONSTRAINT "SharedSpace_pkey" PRIMARY KEY ("Property_Ad_ID")
);

-- CreateTable
CREATE TABLE "AvailableDays" (
    "Property_Ad_ID" TEXT NOT NULL,
    "monday" BOOLEAN NOT NULL,
    "tuesday" BOOLEAN NOT NULL,
    "wednesday" BOOLEAN NOT NULL,
    "thursday" BOOLEAN NOT NULL,
    "friday" BOOLEAN NOT NULL,
    "saturday" BOOLEAN NOT NULL,
    "sunday" BOOLEAN NOT NULL,

    CONSTRAINT "AvailableDays_pkey" PRIMARY KEY ("Property_Ad_ID")
);

-- CreateTable
CREATE TABLE "Amenities" (
    "Property_Ad_ID" TEXT NOT NULL,
    "furnished" BOOLEAN NOT NULL,
    "internet" BOOLEAN NOT NULL,
    "parking" BOOLEAN NOT NULL,
    "Washing Machine" BOOLEAN NOT NULL,
    "Shared Kitchen" BOOLEAN NOT NULL,
    "livingRoom" BOOLEAN NOT NULL,
    "Laundry Rooftop / Terrace" BOOLEAN NOT NULL,
    "garden" BOOLEAN NOT NULL,
    "Lounge Area" BOOLEAN NOT NULL,
    "electricity" BOOLEAN NOT NULL,
    "water" BOOLEAN NOT NULL,
    "heating" BOOLEAN NOT NULL,
    "Air Conditioned" BOOLEAN NOT NULL,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("Property_Ad_ID")
);

-- CreateTable
CREATE TABLE "Room" (
    "ID" TEXT NOT NULL,
    "Property_Ad_ID" TEXT NOT NULL,
    "roomType" "RoomTypeEnum" NOT NULL,
    "roomSize" INTEGER NOT NULL,
    "rent" INTEGER NOT NULL,
    "deposit" INTEGER NOT NULL,
    "billingPeriod" "BillingPeriodEnum" NOT NULL,
    "Include Bills" BOOLEAN NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Bed" (
    "ID" TEXT NOT NULL,
    "Property_Ad_ID" TEXT NOT NULL,
    "bedType" "BedTypeEnum" NOT NULL,
    "rent" INTEGER NOT NULL,
    "deposit" INTEGER NOT NULL,
    "billingPeriod" "BillingPeriodEnum" NOT NULL,
    "Include Bills" BOOLEAN NOT NULL,

    CONSTRAINT "Bed_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "HouseRule" (
    "ID" TEXT NOT NULL,
    "houseRules" TEXT NOT NULL,
    "Property_Ad_ID" TEXT NOT NULL,
    "advertisementAdvertisementID" TEXT,

    CONSTRAINT "HouseRule_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Photo" (
    "ID" TEXT NOT NULL,
    "photoValue" TEXT NOT NULL,
    "Property_Ad_ID" TEXT NOT NULL,
    "advertisementAdvertisementID" TEXT,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Advertisement_miscellaneousPropertyAdID_key" ON "Advertisement"("miscellaneousPropertyAdID");

-- CreateIndex
CREATE UNIQUE INDEX "Advertisement_sharedSpacePropertyAdID_key" ON "Advertisement"("sharedSpacePropertyAdID");

-- CreateIndex
CREATE UNIQUE INDEX "Advertisement_availableDaysPropertyAdID_key" ON "Advertisement"("availableDaysPropertyAdID");

-- CreateIndex
CREATE UNIQUE INDEX "Advertisement_amenitiesPropertyAdID_key" ON "Advertisement"("amenitiesPropertyAdID");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_miscellaneousPropertyAdID_fkey" FOREIGN KEY ("miscellaneousPropertyAdID") REFERENCES "Miscellaneous"("Property_Ad_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_sharedSpacePropertyAdID_fkey" FOREIGN KEY ("sharedSpacePropertyAdID") REFERENCES "SharedSpace"("Property_Ad_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_availableDaysPropertyAdID_fkey" FOREIGN KEY ("availableDaysPropertyAdID") REFERENCES "AvailableDays"("Property_Ad_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_amenitiesPropertyAdID_fkey" FOREIGN KEY ("amenitiesPropertyAdID") REFERENCES "Amenities"("Property_Ad_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableTimes" ADD CONSTRAINT "AvailableTimes_advertisementID_fkey" FOREIGN KEY ("advertisementID") REFERENCES "Advertisement"("AdvertisementID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_Property_Ad_ID_fkey" FOREIGN KEY ("Property_Ad_ID") REFERENCES "Advertisement"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bed" ADD CONSTRAINT "Bed_Property_Ad_ID_fkey" FOREIGN KEY ("Property_Ad_ID") REFERENCES "Advertisement"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseRule" ADD CONSTRAINT "HouseRule_advertisementAdvertisementID_fkey" FOREIGN KEY ("advertisementAdvertisementID") REFERENCES "Advertisement"("AdvertisementID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_advertisementAdvertisementID_fkey" FOREIGN KEY ("advertisementAdvertisementID") REFERENCES "Advertisement"("AdvertisementID") ON DELETE SET NULL ON UPDATE CASCADE;
