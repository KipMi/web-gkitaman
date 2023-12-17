const {
  findIbadah,
  findIbadahById,
  insertIbadah,
  editIbadah,
  deleteIbadah,
} = require('../data/ibadah.data');

const getAllIbadah = async () => {
  const ibadah = await findIbadah();

  return ibadah;
};

const getIbadahById = async (id) => {
  const ibadah = await findIbadahById(id);

  if (!ibadah) {
    throw Error('Ibadah not found');
  }

  return ibadah;
};

const createIbadah = async (newIbadahData) => {
  const Ibadah = await insertIbadah(newIbadahData);

  return Ibadah;
};

const deleteIbadahById = async (id) => {
  const Ibadah = await getIbadahById(id);

  deleteIbadah(Ibadah.id);
};

const editIbadahByCategory = async (category, IbadahData) => {
  const Ibadah = await editIbadah(category, IbadahData);

  return Ibadah;
};

module.exports = {
  getAllIbadah,
  getIbadahById,
  createIbadah,
  deleteIbadahById,
  editIbadahByCategory,
};
