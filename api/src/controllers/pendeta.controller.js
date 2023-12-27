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
        id: parseInt(karyawanId),
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

router.patch("/:id", async (req, res) => {
  try {
    const pendetaId = req.params.id;
    const pendetaData = req.body;

    const pendeta = await prisma.pendeta.update({
      where: {
        id: parseInt(pendetaId),
      },
      data: {
        namaDepan: pendetaData.namaDepan,
        namaTengah: pendetaData.namaTengah,
        namaKeluarga: pendetaData.namaKeluarga,
        imageURL: pendetaData.imageURL,
        status: pendetaData.status,
      },
    });

    res.send({
      data: pendeta,
      message: "Data updated successfully",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const pendetaId = req.params.id;

  try {
    await prisma.pendeta.delete({
      where: {
        id: parseInt(pendetaId),
      },
    });
    res.send("Data deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
