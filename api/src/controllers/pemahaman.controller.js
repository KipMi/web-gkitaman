const express = require("express");
const prisma = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  const renungan = await prisma.pemahamanAlkitab.findMany();

  res.send(renungan);
});

router.get("/:id", async (req, res) => {
  const pemahamanId = req.params.id;

  const pemahaman = await prisma.pemahamanAlkitab.findUnique({
    where: {
      id: parseInt(pemahamanId),
    },
  });

  res.send(pemahaman);
});

router.post("/", async (req, res) => {
  try {
    const renunganData = req.body;

    const renungan = await prisma.pemahamanAlkitab.create({
      data: {
        tema: renunganData.tema,
        pendeta: renunganData.pendeta,
      },
    });

    res.send({
      data: renungan,
      message: "Successfully added new data",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const renunganData = req.body;
  const renunganId = req.params.id;

  try {
    const renungan = await prisma.pemahamanAlkitab.update({
      where: {
        id: parseInt(renunganId),
      },
      data: {
        tema: renunganData.tema,
        pendeta: renunganData.pendeta,
      },
    });

    res.send({
      data: renungan,
      message: "Success!",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
