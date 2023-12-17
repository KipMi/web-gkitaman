-- CreateEnum
CREATE TYPE "status" AS ENUM ('AKTIF', 'TIDAKAKTIF');

-- AlterTable
ALTER TABLE "Karyawan" ADD COLUMN     "status" "status" NOT NULL DEFAULT 'AKTIF';

-- CreateTable
CREATE TABLE "Renungan" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "kitab" TEXT NOT NULL,
    "ayat" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Renungan_pkey" PRIMARY KEY ("id")
);
