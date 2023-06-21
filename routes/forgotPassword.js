import express from "express";
import passwordController from "../controllers/passwordController.js";

const router = express.Router();

router.post("/forgot-password", passwordController.generateCode);
router.post("/reset-password", passwordController.resetPassword);

export default router;
