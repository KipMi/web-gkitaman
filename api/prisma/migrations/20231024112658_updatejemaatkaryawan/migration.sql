/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[noAnggota]` on the table `Jemaat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `noAnggota` to the `Jemaat` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('SUPERADMIN', 'KOMISIANAK', 'KOMISIREMAJA', 'KOMISIPEMUDA', 'KOMISIDEWASA', 'KOMISILANSIA', 'KOMISIKESENIAN', 'KOMISIMULTIMEDIA');

-- CreateEnum
CREATE TYPE "posisiKaryawan" AS ENUM ('PENDETA', 'STAFFKANTOR', 'KOMISI');

-- DropForeignKey
ALTER TABLE "Jemaat" DROP CONSTRAINT "Jemaat_ayahId_fkey";

-- DropForeignKey
ALTER TABLE "Jemaat" DROP CONSTRAINT "Jemaat_ibuId_fkey";

-- AlterTable
ALTER TABLE "Jemaat" ADD COLUMN     "noAnggota" INTEGER NOT NULL,
ALTER COLUMN "ayahId" DROP NOT NULL,
ALTER COLUMN "ibuId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" "userRole" NOT NULL DEFAULT 'SUPERADMIN',
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Karyawan" (
    "id" SERIAL NOT NULL,
    "namaDepan" TEXT NOT NULL,
    "namaTengah" TEXT,
    "namaKeluarga" TEXT NOT NULL,
    "posisi" "posisiKaryawan" NOT NULL DEFAULT 'STAFFKANTOR',

    CONSTRAINT "Karyawan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jemaat_noAnggota_key" ON "Jemaat"("noAnggota");

-- AddForeignKey
ALTER TABLE "Jemaat" ADD CONSTRAINT "Jemaat_ayahId_fkey" FOREIGN KEY ("ayahId") REFERENCES "OrangTua"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jemaat" ADD CONSTRAINT "Jemaat_ibuId_fkey" FOREIGN KEY ("ibuId") REFERENCES "OrangTua"("id") ON DELETE SET NULL ON UPDATE CASCADE;
