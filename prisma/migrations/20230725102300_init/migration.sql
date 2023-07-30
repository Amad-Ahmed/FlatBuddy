/*
  Warnings:

  - You are about to drop the column `PropertyType` on the `Flat` table. All the data in the column will be lost.
  - Changed the type of `PropertyType` on the `AdvertisementBase` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `AdvertiserType` on the `AdvertisementBase` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `BedType` on the `Bed` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `BillingPeriod` on the `Bed` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `HouseType` to the `Flat` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `BillingPeriod` on the `Flat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `RoomType` on the `FlatRooms` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `BillingPeriod` on the `Room` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `RoomType` on the `Room` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
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

-- AlterTable
ALTER TABLE "AdvertisementBase" DROP COLUMN "PropertyType",
ADD COLUMN     "PropertyType" "PropertyTypeEnum" NOT NULL,
DROP COLUMN "AdvertiserType",
ADD COLUMN     "AdvertiserType" "AdvertiserTypeEnum" NOT NULL;

-- AlterTable
ALTER TABLE "Bed" DROP COLUMN "BedType",
ADD COLUMN     "BedType" "BedTypeEnum" NOT NULL,
DROP COLUMN "BillingPeriod",
ADD COLUMN     "BillingPeriod" "BillingPeriodEnum" NOT NULL;

-- AlterTable
ALTER TABLE "Flat" DROP COLUMN "PropertyType",
ADD COLUMN     "HouseType" "HouseTypeEnum" NOT NULL,
DROP COLUMN "BillingPeriod",
ADD COLUMN     "BillingPeriod" "BillingPeriodEnum" NOT NULL;

-- AlterTable
ALTER TABLE "FlatRooms" DROP COLUMN "RoomType",
ADD COLUMN     "RoomType" "RoomTypeEnum" NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "BillingPeriod",
ADD COLUMN     "BillingPeriod" "BillingPeriodEnum" NOT NULL,
DROP COLUMN "RoomType",
ADD COLUMN     "RoomType" "RoomTypeEnum" NOT NULL;
