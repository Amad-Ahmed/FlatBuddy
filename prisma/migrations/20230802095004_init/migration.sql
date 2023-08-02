/*
  Warnings:

  - The primary key for the `Bed` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID` on the `Bed` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(40)`.

*/
-- AlterTable
ALTER TABLE "Bed" DROP CONSTRAINT "Bed_pkey",
ALTER COLUMN "ID" SET DATA TYPE CHAR(40),
ADD CONSTRAINT "Bed_pkey" PRIMARY KEY ("ID");
