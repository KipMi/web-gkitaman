const {
  findOrangTuas,
  findOrangTuaById,
  insertOrangTua,
  deleteOrangTua,
} = require('../data/orangTua.data');

const getAllOrangTua = async () => {
  const orangTua = await findOrangTuas();

  return orangTua;
};

const getOrangTuaById = async (id) => {
  const orangTua = await findOrangTuaById(id);

  return orangTua;
};

const createOrangTua = async (newOrangTuaData) => {
  const orangTua = await insertOrangTua(newOrangTuaData);

  return orangTua;
};

const deleteOrangTuaById = async (id) => {
  const orangTua = await getOrangTuaById(id);

  deleteOrangTua(orangTua.id);
};

module.exports = {
  getAllOrangTua,
  getOrangTuaById,
  createOrangTua,
  deleteOrangTuaById,
};
