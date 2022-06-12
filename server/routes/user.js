import express from "express";
import { signup, login, edit, getOneUserById } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.patch("/:_id", edit);
router.get("/:_id", getOneUserById);

export default router;
