-- DropForeignKey
ALTER TABLE "Photos" DROP CONSTRAINT "Photos_PropertyAdID_fkey";

-- AlterTable
ALTER TABLE "Photos" ALTER COLUMN "PropertyAdID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_PropertyAdID_fkey" FOREIGN KEY ("PropertyAdID") REFERENCES "AdvertisementBase"("AdvertisementID") ON DELETE SET NULL ON UPDATE CASCADE;
