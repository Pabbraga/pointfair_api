import express from "express";

import { addEndereco, getEndereco, getEnderecos, updateEndereco, deleteEndereco} from "../controllers/enderecoController.js";

const router = express.Router();

router.post("/", addEndereco);

router.get("/", getEndereco);

router.get("/", getEnderecos);

router.put("/", updateEndereco);

router.delete("/", deleteEndereco);

export default router;