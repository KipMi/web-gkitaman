/*
  Warnings:

  - The `category` column on the `Doa` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `category` column on the `Ibadah` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "IbadahCategory" AS ENUM ('umum', 'remaja', 'pemuda', 'sekolahMinggu');

-- CreateEnum
CREATE TYPE "DoaCategory" AS ENUM ('pagi', 'malam');

-- AlterTable
ALTER TABLE "Doa" DROP COLUMN "category",
ADD COLUMN     "category" "DoaCategory" NOT NULL DEFAULT 'pagi';

-- AlterTable
ALTER TABLE "Ibadah" DROP COLUMN "category",
ADD COLUMN     "category" "IbadahCategory" NOT NULL DEFAULT 'umum';

-- CreateIndex
CREATE UNIQUE INDEX "Doa_category_key" ON "Doa"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Ibadah_category_key" ON "Ibadah"("category");
