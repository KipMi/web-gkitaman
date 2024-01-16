/*
  Warnings:

  - You are about to drop the column `penjadwalan` on the `PemahamanAlkitab` table. All the data in the column will be lost.
  - Added the required column `pendeta` to the `PemahamanAlkitab` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tema` to the `PemahamanAlkitab` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PemahamanAlkitab" DROP COLUMN "penjadwalan",
ADD COLUMN     "pendeta" TEXT NOT NULL,
ADD COLUMN     "tema" TEXT NOT NULL;
