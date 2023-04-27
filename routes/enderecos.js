import express from "express";

import { addEndereco, getEndereco, getEnderecos, updateEndereco, deleteEndereco} from "../controllers/enderecoController.js";

const router = express.Router();

router.post("/add", addEndereco);

router.get("/getOne/:id", getEndereco);

router.get("/getAll", getEnderecos);

router.put("/update/:id", updateEndereco);

router.delete("/delete/:id", deleteEndereco);

export default router;