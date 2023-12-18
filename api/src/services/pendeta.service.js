const { insertPendeta } = require("../data/pendeta.data");

const createPendeta = async (newKegiatanData) => {
  const kegiatan = await insertPendeta(newKegiatanData);

  return kegiatan;
};

module.exports = {
  createPendeta,
};
