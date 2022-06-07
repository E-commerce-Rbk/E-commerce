import express from "express";
import {
  getAllCarts,
  createCart,
  updateCart,
  getUserCart,
  deleteCart,
} from "../controllers/cart.js";
const router = express.Router();
router.get("/", getAllCarts);
router.get("/:userId", getUserCart);
router.delete("/:_id", deleteCart);
router.put("/:_id", updateCart);
router.post("/", createCart);
export default router;
