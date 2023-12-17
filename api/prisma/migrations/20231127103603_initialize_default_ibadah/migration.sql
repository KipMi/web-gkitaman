/*
  Warnings:

  - You are about to drop the column `gambar` on the `Karyawan` table. All the data in the column will be lost.
  - Added the required column `imageURL` to the `Karyawan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Karyawan" DROP COLUMN "gambar",
ADD COLUMN     "imageURL" TEXT NOT NULL;
