import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
} from "../controllers/Users.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
export default router;
