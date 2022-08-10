const User = require("../models/users");

const getAllUsers = (req, res) => {
  User.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createNewUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
};

const editUserById = (req, res) => {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(err);
    });
};

const deleteUserById = (req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/users" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllUsers,
  createNewUser,
  getUserById,
  editUserById,
  deleteUserById,
};
