const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
} = require("../controllers/Users.js");


const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
