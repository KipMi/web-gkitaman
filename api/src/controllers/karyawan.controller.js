const express = require("express");
const prisma = require("../db");
const upload = require("../middlewares/multer.config");

const router = express.Router();

router.get("/", async (req, res) => {
  const karyawans = await prisma.karyawan.findMany();

  res.send(karyawans);
});

router.get(":/id", async (req, res) => {
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

router.post("/", upload.single("imageURL"), async (req, res) => {
  const newKaryawanData = req.body;
  const imageFile = req.file;

  // console.log(imageFile);
  // res.send(imageFile);

  // console.log(imageFile.filename);
  // newKaryawanData.imageURL = imageFile.filename;
  // newKaryawanData.status;

  try {
    const karyawan = await prisma.karyawan.create({
      data: {
        namaDepan: newKaryawanData.namaDepan,
        namaTengah: newKaryawanData.namaTengah,
        namaKeluarga: newKaryawanData.namaKeluarga,
        status: newKaryawanData.status,
        imageURL: newKaryawanData.imageURL,
        posisi: newKaryawanData.posisi,
      },
    });

    res.send({
      data: karyawan,
      message: "Success",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const karyawanId = req.params.id;
    const karyawanData = req.body;

    const karyawan = await prisma.karyawan.update({
      where: {
        id: parseInt(karyawanId),
      },
      data: {
        namaDepan: karyawanData.namaDepan,
        namaTengah: karyawanData.namaTengah,
        namaKeluarga: karyawanData.namaKeluarga,
        status: karyawanData.status,
        imageURL: karyawanData.imageURL,
        posisi: karyawanData.posisi,
      },
    });

    res.send({
      data: karyawan,
      message: "Success",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
