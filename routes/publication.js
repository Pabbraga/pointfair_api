import express from "express";
import publicationController from "../controllers/publicationController.js";

const router = express.Router();

router.post('/', publicationController.create);
router.get('/', publicationController.getAll);
router.get("/:id", publicationController.get);
router.put("/:id", publicationController.update);
router.delete("/:id", publicationController.delete);

export default router;