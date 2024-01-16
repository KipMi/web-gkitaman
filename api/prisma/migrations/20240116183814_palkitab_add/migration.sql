-- CreateTable
CREATE TABLE "PemahamanAlkitab" (
    "id" SERIAL NOT NULL,
    "penjadwalan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PemahamanAlkitab_pkey" PRIMARY KEY ("id")
);
