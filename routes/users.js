import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.get);
router.get("/search/:search", userController.search);
router.put("/:id", userController.update);
router.put("/profile/:id", userController.updateProfile);
router.put("/schedule/:id", userController.updateSchedules);
router.delete("/:id", userController.delete);

export default router;
