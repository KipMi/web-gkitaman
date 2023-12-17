const {
  findUserById,
  findUsers,
  insertUser,
  findUserByUsername,
  editUser,
  deleteUser,
} = require('../data/user.data');
const prisma = require('../db');

const getAllUsers = async () => {
  const users = await findUsers();

  return users;
};

const getUserById = async (id) => {
  const user = await findUserById(id);

  if (!user) {
    throw Error('User not found');
  }

  return user;
};

const getUserByUsername = async (username) => {
  const user = await findUserByUsername(username);

  if (!user) {
    throw Error('User not found');
  }

  return user;
};

const createUser = async (newUserData) => {
  const findUser = await findUserByUsername(newUserData.username);

  if (findUser) {
    throw Error('That username is already taken!');
  }

  const user = await insertUser(newUserData);

  return user;
};

const deleteUserById = async (id) => {
  const user = await getUserById(id);

  deleteUser(id);
};

const editUserById = async (id, userData) => {
  const usercheck = await getUserById(id);

  const user = editUser(id, userData);

  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  editUserById,
  getUserByUsername,
};
