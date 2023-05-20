const express = require("express");
const {
  getUsers,
  getUserById,
  editUser,
  createUser,
  deleteUser,
} = require("../controllers/Users.js");

const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.post("/users", createUser);
router.get("/users", verifyUser, getUsers);
router.get("/users/:id", verifyUser, getUserById);
router.patch("/users/:id",verifyUser, editUser);
router.delete("/users/:id", verifyUser, deleteUser);

module.exports = router;
