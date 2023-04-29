import express from "express";

import { addEndereco, getEndereco, getEnderecos, updateEndereco, deleteEndereco} from "../controllers/enderecoController.js";

const router = express.Router();

router.post("/", addEndereco);

router.get("/:id", getEndereco);

router.get("/", getEnderecos);

router.put("/:id", updateEndereco);

router.delete("/:id", deleteEndereco);

export default router;