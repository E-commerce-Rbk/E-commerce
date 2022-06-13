import express from "express";
import {
  getAllProduct,
  addProduct,
  deletProduct,
  updateProduct,
  findProduct,
  getOneProdById
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", addProduct);
router.delete("/:_id", deletProduct);
router.put("/:_id", updateProduct);
router.get("/findProduct", findProduct);
router.get("/:_id", getOneProdById);

export default router;
