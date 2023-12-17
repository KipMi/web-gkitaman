const prisma = require('../db');

const findOrangTuas = async () => {
  const orangTua = await prisma.orangTua.findMany();

  return orangTua;
};

const findOrangTuaById = async (id) => {
  const orangTua = await prisma.orangTua.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return orangTua;
};

const insertOrangTua = async (newOrangTuaData) => {
  const orangTua = await prisma.orangTua.create({
    data: {
      namaDepan: newOrangTuaData.namaDepan,
      namaTengah: newOrangTuaData.namaTengah,
      namaKeluarga: newOrangTuaData.namaKeluarga,
    },
  });

  return orangTua;
};

const deleteOrangTua = async (id) => {
  await prisma.orangTua.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  findOrangTuas,
  findOrangTuaById,
  insertOrangTua,
  deleteOrangTua,
};
