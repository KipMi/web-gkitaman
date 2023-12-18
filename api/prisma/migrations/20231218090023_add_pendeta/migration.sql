-- CreateTable
CREATE TABLE "Pendeta" (
    "id" SERIAL NOT NULL,
    "namaDepan" TEXT NOT NULL,
    "namaTengah" TEXT,
    "status" BOOLEAN NOT NULL,
    "namaKeluarga" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pendeta_pkey" PRIMARY KEY ("id")
);
