import express from "express";
import addressController from "../controllers/addressController.js";

const router = express.Router();

router.post('/', addressController.create);
router.get('/', addressController.getAll);
router.get('/:id', addressController.get);
router.put('/:id', addressController.update);
router.delete('/:id', addressController.delete);

export default router;