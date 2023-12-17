/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Jemaat" (
    "id" SERIAL NOT NULL,
    "namaDepan" TEXT NOT NULL,
    "namaTengah" TEXT,
    "namaKeluarga" TEXT NOT NULL,
    "noWA" INTEGER NOT NULL,
    "noTelpRumah" INTEGER NOT NULL,
    "tempatLahir" TEXT NOT NULL,
    "ayahId" INTEGER NOT NULL,
    "ibuId" INTEGER NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "golonganDarah" TEXT NOT NULL,
    "alamatRumah" TEXT NOT NULL,
    "wilayah" TEXT NOT NULL,

    CONSTRAINT "Jemaat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrangTua" (
    "id" SERIAL NOT NULL,
    "namaDepan" TEXT NOT NULL,
    "namaTengah" TEXT,
    "namaKeluarga" TEXT NOT NULL,

    CONSTRAINT "OrangTua_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kegiatan" (
    "id" SERIAL NOT NULL,
    "komisi" TEXT NOT NULL,
    "judulKegiatan" TEXT NOT NULL,
    "deskripsiKegiatan" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,

    CONSTRAINT "Kegiatan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Jemaat" ADD CONSTRAINT "Jemaat_ayahId_fkey" FOREIGN KEY ("ayahId") REFERENCES "OrangTua"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jemaat" ADD CONSTRAINT "Jemaat_ibuId_fkey" FOREIGN KEY ("ibuId") REFERENCES "OrangTua"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
