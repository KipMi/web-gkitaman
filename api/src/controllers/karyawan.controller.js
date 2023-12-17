const express = require('express');
const prisma = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const karyawans = await prisma.karyawan.findMany();

  res.send(karyawans);
});

router.get(':/id', async (req, res) => {
  try {
    const karyawanId = req.params.id;
    const karyawan = await prisma.karyawan.findUnique({
      where: {
        id: karyawanId,
      },
    });

    res.send(karyawan);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
