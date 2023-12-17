const express = require('express');
const prisma = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const renungan = await prisma.renungan.findMany();

  res.send(renungan);
});

router.get('/:id', async (req, res) => {
  const renunganId = req.params.id;

  const renungan = await prisma.renungan.findUnique({
    where: {
      id: parseInt(renunganId),
    },
  });

  res.send(renungan);
});

router.post('/', async (req, res) => {
  try {
    const renunganData = req.body;

    const renungan = await prisma.renungan.create({
      data: {
        title: renunganData.title,
        kitab: renunganData.kitab,
        ayat: renunganData.ayat,
        content: renunganData.content,
      },
    });

    res.send({
      data: renungan,
      message: 'Successfully added new data',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch('/:id', async (req, res) => {
  const renunganData = req.body;
  const renunganId = req.params.id;

  try {
    const renungan = await prisma.renungan.update({
      where: {
        id: parseInt(renunganId),
      },
      data: {
        title: renunganData.title,
        kitab: renunganData.kitab,
        ayat: renunganData.ayat,
        content: renunganData.content,
      },
    });

    res.send({
      data: renungan,
      message: 'Success!',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
