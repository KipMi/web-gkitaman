const {
  findKegiatans,
  findKegiatanById,
  insertKegiatan,
  editKegiatan,
  deleteKegiatan,
} = require('../data/kegiatan.data');

const getAllKegiatans = async () => {
  const kegiatans = await findKegiatans();

  return kegiatans;
};

const getKegiatanById = async (id) => {
  const kegiatan = await findKegiatanById(id);

  if (!kegiatan) {
    throw Error('Kegiatan not found');
  }

  return kegiatan;
};

const createKegiatan = async (newKegiatanData) => {
  const kegiatan = await insertKegiatan(newKegiatanData);

  return kegiatan;
};

const deleteKegiatanById = async (id) => {
  const kegiatan = await getKegiatanById(id);

  deleteKegiatan(kegiatan.id);
};

const editKegiatanById = async (id, kegiatanData) => {
  const kegiatan = await editKegiatan(id, kegiatanData);

  return kegiatan;
};

module.exports = {
  getAllKegiatans,
  getKegiatanById,
  createKegiatan,
  deleteKegiatanById,
  editKegiatanById,
};
