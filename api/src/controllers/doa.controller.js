const express = require('express');
const prisma = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const doa = await prisma.doa.findMany();

    res.send(doa);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  const doaId = req.params.id;

  try {
    const doa = await prisma.doa.findUnique({
      where: {
        id: doaId,
      },
    });

    res.send(doa);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const newDoaData = req.body;

    const newDoa = await prisma.doa.create({
      data: {
        category: newDoaData.category,
        tema: newDoaData.tema,
        pemimpin: newDoaData.pemimpin,
        infoTambahan: newDoaData.infoTambahan,
        waktuMulai: newDoaData.waktuMulai,
        waktuSelesai: newDoaData.waktuSelesai,
      },
    });

    res.status(201).send({
      data: newDoa,
      message: 'Data Successfully created',
    });
  } catch (error) {}
});

router.put('/:category', async (req, res) => {
  try {
    const doaCategory = req.params.category;
    const doaData = req.body;

    if (
      !(
        doaData.category &&
        doaData.tema &&
        doaData.pemimpin &&
        doaData.infoTambahan &&
        doaData.waktuMulai &&
        doaData.waktuSelesai
      )
    ) {
      res.status(400).send('Some fields are missing');
    }

    const doa = await prisma.doa.update({
      where: {
        category: doaCategory,
      },
      data: {
        tema: doaData.tema,
        pemimpin: doaData.pemimpin,
        infoTambahan: doaData.infoTambahan,
        waktuMulai: doaData.waktuMulai,
        waktuSelesai: doaData.waktuSelesai,
      },
    });

    res.send({
      data: doa,
      message: 'Data successfully updated',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch('/:category', async (req, res) => {
  try {
    const doaCategory = req.params.category;
    const doaData = req.body;

    const doa = await prisma.doa.update({
      where: {
        category: doaCategory,
      },
      data: {
        tema: doaData.tema,
        pemimpin: doaData.pemimpin,
        infoTambahan: doaData.infoTambahan,
        waktuMulai: doaData.waktuMulai,
        waktuSelesai: doaData.waktuSelesai,
      },
    });

    res.send({
      data: doa,
      message: 'Data successfully updated',
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
