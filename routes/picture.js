import express from "express";
import pictureController from "../controllers/pictureController.js";

import upload from "../config/multer.js";

const router = express.Router();

router.post('/', upload.single("file"), pictureController.create);
router.get('/', pictureController.getAll);
router.get('/:id', pictureController.get);
router.put('/:id', pictureController.update);
router.delete('/:id', pictureController.delete);

export default router;