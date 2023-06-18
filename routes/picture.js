import express from "express";
import pictureController from "../controllers/pictureController.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post('/upload', upload.single("file"), pictureController.upload);

export default router;