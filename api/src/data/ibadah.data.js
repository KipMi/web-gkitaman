const prisma = require('../db');

const findIbadah = async () => {
  const ibadah = await prisma.ibadah.findMany();

  return ibadah;
};

const findIbadahById = async (id) => {
  const ibadah = await prisma.ibadah.findUnique({
    where: {
      id,
    },
  });

  return ibadah;
};

const insertIbadah = async (newIbadahData) => {
  const ibadah = await prisma.ibadah.create({
    data: {
      temaIbadah: newIbadahData.temaIbadah,
      category: newIbadahData.category,
      pemimpin: newIbadahData.pemimpin,
      linkVideo: newIbadahData.linkVideo,
      infoTambahan: newIbadahData.infoTambahan,
      waktuMulai: newIbadahData.waktuMulai,
      waktuSelesai: newIbadahData.waktuSelesai,
    },
  });

  return ibadah;
};

const editIbadah = async (category, ibadahData) => {
  const ibadah = await prisma.ibadah.update({
    where: {
      category,
    },

    data: {
      temaIbadah: ibadahData.temaIbadah,
      pemimpin: ibadahData.pemimpin,
      linkVideo: ibadahData.linkVideo,
      infoTambahan: ibadahData.infoTambahan,
      waktuMulai: ibadahData.waktuMulai,
      waktuSelesai: ibadahData.waktuSelesai,
    },
  });

  return ibadah;
};

const deleteIbadah = async (id) => {
  await prisma.ibadah.delete({
    where: {
      id: parseInt(id),
    },
  });
};

module.exports = {
  findIbadah,
  findIbadahById,
  insertIbadah,
  editIbadah,
  deleteIbadah,
};
