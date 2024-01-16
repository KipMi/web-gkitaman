const express = require("express");
const prisma = require("../db");
const {
  getAllIbadah,
  getKegiatanById,
  createIbadah,
  editIbadahByCategory,
  getIbadahById,
} = require("../services/ibadah.service");

const router = express.Router();

const errorHandler = (res, error) => {
  console.error(error);
  res.status(500).send("Internal server error");
};

router.get("/", async (req, res) => {
  const ibadah = await getAllIbadah();

  res.send(ibadah);
});

router.get("/:id", async (req, res) => {
  try {
    const ibadahId = parseInt(req.params.id);
    const ibadah = await getIbadahById(ibadahId);

    res.send(ibadah);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newIbadahData = req.body;

    const ibadah = await createIbadah(newIbadahData);

    res.status(201).send({
      data: ibadah,
      message: "New ibadah created",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:category", async (req, res) => {
  try {
    const ibadahCategory = req.params.category;
    const ibadahData = req.body;

    if (
      !(
        ibadahData.temaIbadah &&
        ibadahData.pemimpin &&
        ibadahData.linkVideo &&
        ibadahData.infoTambahan &&
        ibadahData.waktuMulai &&
        ibadahData.waktuSelesai
      )
    ) {
      res.status(400).send("Some fields are missing");
    }

    const ibadah = await editIbadahByCategory(ibadahCategory, ibadahData);

    res.send({
      data: ibadah,
      message: "Ibadah updated",
    });
  } catch (error) {
    return errorHandler(res, error);
  }
});

router.patch("/:category", async (req, res) => {
  const ibadahCategory = req.params.category;
  const ibadahData = req.body;

  const ibadah = await editIbadahByCategory(ibadahCategory, ibadahData);

  res.send({
    data: ibadah,
    message: "Ibadah updated",
  });
});

module.exports = router;
