const prisma = require('../db');

const findKegiatans = async () => {
  const kegiatans = await prisma.kegiatan.findMany();

  return kegiatans;
};

const findKegiatanById = async (id) => {
  const kegiatan = await prisma.kegiatan.findUnique({
    where: {
      id,
    },
  });

  return kegiatan;
};

const insertKegiatan = async (newKegiatanData) => {
  const kegiatan = await prisma.kegiatan.create({
    data: {
      komisi: newKegiatanData.komisi,
      judulKegiatan: newKegiatanData.judulKegiatan,
      deskripsiKegiatan: newKegiatanData.deskripsiKegiatan,
      imageURL: newKegiatanData.imageURL,
    },
  });

  return kegiatan;
};

const editKegiatan = async (id, kegiatanData) => {
  const kegiatan = await prisma.kegiatan.update({
    where: {
      id,
    },

    data: {
      komisi: kegiatanData.komisi,
      judulKegiatan: kegiatanData.judulKegiatan,
      deskripsiKegiatan: kegiatanData.deskripsiKegiatan,
      imageURL: kegiatanData.imageURL,
    },
  });

  return kegiatan;
};

const deleteKegiatan = async (id) => {
  await prisma.kegiatan.delete({
    where: {
      id: parseInt(id),
    },
  });
};

module.exports = {
  findKegiatans,
  findKegiatanById,
  insertKegiatan,
  editKegiatan,
  deleteKegiatan,
};
