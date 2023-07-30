/*
  Warnings:

  - You are about to drop the column `advertisementAdvertisementID` on the `HouseRule` table. All the data in the column will be lost.
  - You are about to drop the column `advertisementAdvertisementID` on the `Photo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "HouseRule" DROP CONSTRAINT "HouseRule_advertisementAdvertisementID_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_advertisementAdvertisementID_fkey";

-- AlterTable
ALTER TABLE "HouseRule" DROP COLUMN "advertisementAdvertisementID";

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "advertisementAdvertisementID";

-- AddForeignKey
ALTER TABLE "HouseRule" ADD CONSTRAINT "HouseRule_Property_Ad_ID_fkey" FOREIGN KEY ("Property_Ad_ID") REFERENCES "Advertisement"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_Property_Ad_ID_fkey" FOREIGN KEY ("Property_Ad_ID") REFERENCES "Advertisement"("AdvertisementID") ON DELETE RESTRICT ON UPDATE CASCADE;
