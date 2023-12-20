const prisma = require("../db");
const bcrypt = require("bcrypt");

const findUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

const findUserByUsername = async (username) => {
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  return user;
};

const insertUser = async (newUserData) => {
  hashedPassword = await bcrypt.hash(newUserData.password, 10);
  const user = await prisma.user.create({
    data: {
      username: newUserData.username,
      password: hashedPassword,
      role: newUserData.role,
    },
  });

  return user;
};

const editUser = async (id, userData) => {
  const user = await prisma.user.update({
    where: {
      id,
    },

    data: {
      username: userData.username,
      password: userData.password,
    },
  });

  return user;
};

const deleteUser = async (id) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  findUsers,
  findUserById,
  findUserByUsername,
  insertUser,
  editUser,
  deleteUser,
};
