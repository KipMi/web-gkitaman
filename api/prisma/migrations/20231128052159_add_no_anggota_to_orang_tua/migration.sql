-- AlterTable
ALTER TABLE "OrangTua" ADD COLUMN     "noAnggota" INTEGER;

-- AddForeignKey
ALTER TABLE "OrangTua" ADD CONSTRAINT "OrangTua_noAnggota_fkey" FOREIGN KEY ("noAnggota") REFERENCES "Jemaat"("noAnggota") ON DELETE SET NULL ON UPDATE CASCADE;
