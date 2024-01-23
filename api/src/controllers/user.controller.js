const express = require("express");
const bcrypt = require("bcrypt");
const prisma = require("../db");
const jwt = require("jsonwebtoken");
const { authenticate } = require("../middlewares/authMiddleware");
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  editUserById,
  patchUserById,
  getUserByUsername,
} = require("../services/user.service");
const secretKey = process.env.SECRET_KEY;

const router = express.Router();

router.get("/", async (req, res) => {
  const user = await getAllUsers();

  res.send(user);
});

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);

    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserData = req.body;

    const user = await createUser(newUserData);

    res.status(201).send({
      data: user,
      message: "New user created",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await getUserByUsername(username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .json({ error: "Invalid credentials", user: user.password });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        password: user.password,
        role: user.role,
      },
      secretKey,
      { expiresIn: "24h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: none,
      secure: true,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

router.get("/get/user", authenticate, (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  const userData = {
    username: req.user.username,
    password: req.user.password,
    role: req.user.role,
  };

  res.json(req.user);
});

router.get("/token", (req, res) => {
  // const token = req.cookies.token;
  res.json({ message: "hello" });
  // console.log(token);
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await deleteUserById(userId);
    res.send("User deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  if (!(userData.username && userData.password)) {
    res.status(400).send("Some fields are missing");
  }

  const user = await editUserById(userId, userData);

  res.send({
    data: user,
    message: "User updated",
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;

    const user = await editUserById(userId, userData);

    res.send({
      data: user,
      message: "User updated",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
