-- CreateEnum
CREATE TYPE "CategoryPernikahan" AS ENUM ('Katekisasi', 'Konseling', 'Pemberkatan');

-- CreateTable
CREATE TABLE "LayananBaptis" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "infoPendaftaran" TEXT NOT NULL,
    "jadwal" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananBaptis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayananPernikahan" (
    "id" SERIAL NOT NULL,
    "category" "CategoryPernikahan" NOT NULL,
    "infoPendaftaran" TEXT NOT NULL,
    "jadwal" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LayananPernikahan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KonselingPendeta" (
    "id" SERIAL NOT NULL,
    "info" TEXT NOT NULL,
    "jadwal" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KonselingPendeta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LayananBaptis_category_key" ON "LayananBaptis"("category");

-- CreateIndex
CREATE UNIQUE INDEX "LayananPernikahan_category_key" ON "LayananPernikahan"("category");
