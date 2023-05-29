import express from "express";
import TesteController from "../controllers/testeController.js";

const router = express.Router();

router.get('/', TesteController.teste);

export default router;