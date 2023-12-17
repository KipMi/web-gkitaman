const express = require('express');
const upload = require('../middlewares/multer.config');
const prisma = require('../db');
const {
  getAllKegiatans,
  getKegiatanById,
  createKegiatan,
} = require('../services/kegiatan.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const kegiatans = await getAllKegiatans();

  res.send(kegiatans);
});

router.get('/latest', async (req, res) => {
  try {
    const kegiatans = await prisma.kegiatan.findMany({
      take: 4,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.send(kegiatans);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const kegiatanId = req.params.id;
    const kegiatans = await getKegiatanById(kegiatanId);

    res.send(kegiatans);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/', upload.single('imageURL'), async (req, res) => {
  console.log(req.body);
  try {
    const newKegiatanData = req.body;
    const imageFile = req.file;

    newKegiatanData.imageURL = imageFile.filename;

    const kegiatan = createKegiatan(newKegiatanData);

    res.status(201).send({
      data: kegiatan,
      message: 'New kegiatan created',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
