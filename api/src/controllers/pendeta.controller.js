const express = require("express");
const prisma = require("../db");
const upload = require("../middlewares/multer.config");

const router = express.Router();

router.get("/", async (req, res) => {
  const pendeta = await prisma.pendeta.findMany();

  res.send(pendeta);
});

router.get("/:id", async (req, res) => {
  try {
    const karyawanId = req.params.id;
    const karyawan = await prisma.pendeta.findUnique({
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

  console.log(imageFile.filename);
  newKaryawanData.imageURL = imageFile.filename;
  newKaryawanData.status;

  try {
    const karyawan = await prisma.pendeta.create({
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

module.exports = router;
