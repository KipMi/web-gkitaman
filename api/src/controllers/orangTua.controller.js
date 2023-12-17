const express = require('express');
const prisma = require('../db');
const {
  getAllOrangTua,
  getOrangTuaById,
  createOrangTua,
  deleteOrangTuaById,
} = require('../services/orangTua.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const orangTua = await getAllOrangTua();

  res.status(201).send(orangTua);
});

router.get('/:id', async (req, res) => {
  try {
    const orangTuaId = req.params.id;
    const orangTua = await getOrangTuaById(orangTuaId);

    res.status(201).send(orangTua);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newOrangTuaData = req.body;

    const orangTua = await createOrangTua(newOrangTuaData);

    res.status(201).send({
      data: orangTua,
      message: 'New orangTua created',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const orangTuaId = req.params.id;

    await deleteOrangTuaById(orangTuaId);

    res.send('orangTua deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
