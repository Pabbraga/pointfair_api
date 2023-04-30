import express from "express";
import fairController from "../controllers/fairController.js";

const router = express.Router();

router.post('/', fairController.create);
router.get('/', fairController.getAll);
router.get('/:id', fairController.get);
router.put('/:id', fairController.update);
router.delete('/:id', fairController.delete);

export default router;