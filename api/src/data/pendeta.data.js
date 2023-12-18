const prisma = require("../db");

const insertPendeta = async (newKegiatanData) => {
  const kegiatan = await prisma.kegiatan.create({
    data: {
      namaDepan: newKegiatanData.namaDepan,
      namaTengah: newKegiatanData.namaTengah,
      namaKeluarga: newKegiatanData.namaKeluarga,
      status: newKegiatanData.status,
      imageURL: newKegiatanData.imageURL,
    },
  });

  return kegiatan;
};

module.exports = {
  insertPendeta,
};
