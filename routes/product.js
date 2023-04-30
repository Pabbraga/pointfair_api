import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.post('/', productController.create);
router.get('/', productController.getAll);
router.get("/:id", productController.get);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

export default router;