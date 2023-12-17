/*
  Warnings:

  - Added the required column `updatedAt` to the `Doa` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Doa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Ibadah` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Ibadah` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Jemaat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Karyawan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `OrangTua` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doa" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ibadah" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Jemaat" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Karyawan" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Kegiatan" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "OrangTua" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "DoaCategory";

-- DropEnum
DROP TYPE "IbadahCategory";

-- CreateIndex
CREATE UNIQUE INDEX "Doa_category_key" ON "Doa"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Ibadah_category_key" ON "Ibadah"("category");
