const express = require("express");
const upload = require("../middlewares/multer.config");
const prisma = require("../db");
const {
  getAllKegiatans,
  getKegiatanById,
  createKegiatan,
  deleteKegiatanById,
} = require("../services/kegiatan.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const kegiatans = await getAllKegiatans();

  res.send(kegiatans);
});

router.get("/latest", async (req, res) => {
  try {
    const kegiatans = await prisma.kegiatan.findMany({
      take: 8,
      orderBy: {
        createdAt: "desc",
      },
    });

    res.send(kegiatans);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const kegiatanId = req.params.id;
    const kegiatans = await getKegiatanById(kegiatanId);

    res.send(kegiatans);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", upload.single("imageURL"), async (req, res) => {
  console.log(req.body);
  try {
    const newKegiatanData = req.body;
    const imageFile = req.file;

    newKegiatanData.imageURL = imageFile.filename;

    const kegiatan = createKegiatan(newKegiatanData);

    res.status(201).send({
      data: kegiatan,
      message: "New kegiatan created",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const kegiatanId = req.params.id;
    const kegiatanData = req.body;

    const kegiatan = await prisma.kegiatan.update({
      where: {
        id: parseInt(kegiatanId),
      },
      data: {
        judulKegiatan: kegiatanData.judulKegiatan,
        komisi: kegiatanData.komisi,
        deskripsiKegiatan: kegiatanData.deskripsiKegiatan,
      },
    });

    res.send({
      data: kegiatan,
      message: "Kegiatan added successfully",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const kegiatanId = req.params.id;
    await deleteKegiatanById(kegiatanId);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
