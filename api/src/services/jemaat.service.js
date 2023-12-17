const {
  findJemaats,
  insertJemaat,
  deleteJemaat,
  findJemaatById,
  editJemaat,
  findJemaatByNoAnggota,
} = require('../data/jemaat.data');
const { insertUser } = require('../data/user.data');
const prisma = require('../db');

const getAllJemaat = async () => {
  const jemaats = findJemaats();

  return jemaats;
};

const getJemaatById = async (id) => {
  const jemaat = await findJemaatById(id);

  if (!jemaat) {
    throw Error('Jemaat not found!');
  }

  return jemaat;
};

const getJemaatNoAnggota = async (noAnggota) => {
  const jemaat = await findJemaatByNoAnggota(noAnggota);

  if (!jemaat) {
    throw Error('Jemaat not found!');
  }

  return jemaat;
};
const createJemaat = async (newJemaatData) => {
  const jemaat = await insertJemaat(newJemaatData);

  return jemaat;
};

const deleteJemaatById = async (id) => {
  const jemaat = await getJemaatById(id);

  deleteJemaat(jemaat.id);
};

const editJemaatById = async (id, jemaatData) => {
  const jemaatCheck = await getJemaatById(id);

  const jemaat = editJemaat(id, jemaatData);

  return jemaat;
};

module.exports = {
  getAllJemaat,
  getJemaatById,
  getJemaatNoAnggota,
  createJemaat,
  deleteJemaatById,
  editJemaatById,
};
