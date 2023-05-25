import express from "express";
import publicationController from "../controllers/publicationController.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post('/', upload.single("file"), publicationController.create);
router.get('/', publicationController.getAll);
router.get("/:id", publicationController.get);
router.put("/:id", publicationController.update);
router.delete("/:id", publicationController.delete);

export default router;