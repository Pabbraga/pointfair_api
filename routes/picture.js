import express from "express";
import pictureController from "../controllers/pictureController.js";

const router = express.Router();

router.post('/upload', pictureController.upload);
router.post('/', pictureController.create);
router.get('/', pictureController.getAll);
router.get('/:id', pictureController.get);
router.delete('/:id', pictureController.delete);

export default router;