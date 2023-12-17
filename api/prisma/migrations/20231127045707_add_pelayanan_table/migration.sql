/*
  Warnings:

  - Added the required column `gambar` to the `Karyawan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "userRole" ADD VALUE 'ADMIN';

-- AlterTable
ALTER TABLE "Karyawan" ADD COLUMN     "gambar" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Ibadah" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "temaIbadah" TEXT NOT NULL,
    "pemimpin" TEXT NOT NULL,
    "linkVideo" TEXT NOT NULL,
    "infoTambahan" TEXT NOT NULL,
    "waktuMulai" TIMESTAMP(3) NOT NULL,
    "waktuSelesai" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ibadah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doa" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "pemimpin" TEXT NOT NULL,
    "infoTambahan" TEXT NOT NULL,
    "waktuMulai" TIMESTAMP(3) NOT NULL,
    "waktuSelesai" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ibadah_category_key" ON "Ibadah"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Doa_category_key" ON "Doa"("category");
