import express from "express";

import { addUsuario, updateUsuario, getUsuarios, getUsuario, deleteUsuario } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/add", addUsuario);

router.get("/getOne/:id", getUsuario);

router.get("/getAll", getUsuarios);

router.put("/update/:id", updateUsuario);

router.delete("/delete/:id", deleteUsuario);

export default router