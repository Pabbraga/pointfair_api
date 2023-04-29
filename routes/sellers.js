import express from "express";
import sellerController from "../controllers/sellerController.js";

const router = express.Router();

router.post('/', sellerController.create);
router.get('/', sellerController.getAll);
router.get('/:id', sellerController.get);
router.put('/:id', sellerController.update);
router.delete('/:id', sellerController.delete);

export default router;