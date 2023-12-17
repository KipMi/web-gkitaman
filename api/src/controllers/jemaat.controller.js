const express = require('express');
const prisma = require('../db');
const {
  getAllJemaat,
  getJemaatById,
  createJemaat,
  deleteJemaatById,
  editJemaatById,
  getJemaatNoAnggota,
} = require('../services/jemaat.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const jemaat = await getAllJemaat();

  res.send(jemaat);
});

router.get('/:id', async (req, res) => {
  const jemaatId = parseInt(req.params.id);

  const jemaat = await getJemaatById(jemaatId);

  res.send(jemaat);
});

// router.get('/:noAnggota', async (req, res) => {
//   const jemaatNoAnggota = parseInt(req.params.noAnggota);

//   const jemaat = await getJemaatNoAnggota(jemaatNoAnggota);

//   res.send(jemaat);
// });

router.post('/', async (req, res) => {
  try {
    const newJemaatData = req.body;

    const jemaat = await createJemaat(newJemaatData);

    res.status(201).send({
      data: jemaat,
      message: 'New jemaat created',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const jemaatId = req.params.id;
    await deleteJemaatById(jemaatId);
    res.send('Jemaat Deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put('/:id', async (req, res) => {
  const jemaatId = req.params.id;
  const jemaatData = req.body;

  if (
    !(
      jemaatData.noAnggota &&
      jemaatData.namaDepan &&
      jemaatData.namaKeluarga &&
      jemaatData.noWA &&
      jemaatData.noTelpRumah &&
      jemaatData.ayahId &&
      jemaatData.ibuId &&
      jemaatData.tempatLahir &&
      jemaatData.tanggalLahir &&
      jemaatData.golonganDarah &&
      jemaatData.alamatRumah &&
      jemaatData.wilayah
    )
  ) {
    res.status(400).send('Some required fields are missing');
  }

  const jemaat = await editJemaatById(jemaatId, jemaatData);

  res.send({
    data: jemaat,
    message: 'Jemaat updated',
  });
});

router.patch('/:id', async (req, res) => {
  try {
    const jemaatId = req.params.id;
    const jemaatData = req.body;

    const jemaat = await editJemaatById(jemaatId, jemaatData);

    res.send({
      data: jemaat,
      message: 'Jemaat updated',
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
