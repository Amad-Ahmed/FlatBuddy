-- AlterTable
ALTER TABLE "Amenities" ALTER COLUMN "AirConditioned" DROP NOT NULL,
ALTER COLUMN "Electricity" DROP NOT NULL,
ALTER COLUMN "Furnished" DROP NOT NULL,
ALTER COLUMN "Garden" DROP NOT NULL,
ALTER COLUMN "Heating" DROP NOT NULL,
ALTER COLUMN "Internet" DROP NOT NULL,
ALTER COLUMN "Laundry" DROP NOT NULL,
ALTER COLUMN "LivingRoom" DROP NOT NULL,
ALTER COLUMN "LoungeArea" DROP NOT NULL,
ALTER COLUMN "Parking" DROP NOT NULL,
ALTER COLUMN "RooftopTerrace" DROP NOT NULL,
ALTER COLUMN "SharedKitchen" DROP NOT NULL,
ALTER COLUMN "WashingMachine" DROP NOT NULL,
ALTER COLUMN "Water" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AvailableDays" ALTER COLUMN "Friday" DROP NOT NULL,
ALTER COLUMN "Monday" DROP NOT NULL,
ALTER COLUMN "Saturday" DROP NOT NULL,
ALTER COLUMN "Sunday" DROP NOT NULL,
ALTER COLUMN "Thursday" DROP NOT NULL,
ALTER COLUMN "Tuesday" DROP NOT NULL,
ALTER COLUMN "Wednesday" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AvailableTimes" ALTER COLUMN "Afternoon" DROP NOT NULL,
ALTER COLUMN "Evening" DROP NOT NULL,
ALTER COLUMN "Morning" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Preference" ALTER COLUMN "Student" DROP NOT NULL,
ALTER COLUMN "Professional" DROP NOT NULL,
ALTER COLUMN "PetOwners" DROP NOT NULL,
ALTER COLUMN "Family" DROP NOT NULL,
ALTER COLUMN "Male" DROP NOT NULL,
ALTER COLUMN "Female" DROP NOT NULL,
ALTER COLUMN "Couple" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SharedSpace" ALTER COLUMN "Bathroom" DROP NOT NULL,
ALTER COLUMN "Kitchen" DROP NOT NULL,
ALTER COLUMN "LivingRoom" DROP NOT NULL;