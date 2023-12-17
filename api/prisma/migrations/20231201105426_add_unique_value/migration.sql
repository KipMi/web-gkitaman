/*
  Warnings:

  - A unique constraint covering the columns `[noAnggota]` on the table `OrangTua` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OrangTua_noAnggota_key" ON "OrangTua"("noAnggota");
