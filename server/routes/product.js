import express from "express";
import {
  getAllProduct,
  addProduct,
  deletProduct,
  updateProduct,
  findProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", addProduct);
router.delete("/:_id", deletProduct);
router.put("/:_id", updateProduct);
router.get("/findProduct", findProduct);

export default router;
