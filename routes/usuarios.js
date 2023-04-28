import express from "express";

import { addUsuario, updateUsuario, getUsuarios, getUsuario, deleteUsuario } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/", addUsuario);

router.get("/:id", getUsuario);

router.get("/", getUsuarios);

router.put("/:id", updateUsuario);

router.delete("/:id", deleteUsuario);

export default router