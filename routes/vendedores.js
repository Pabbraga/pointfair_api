import express from "express";

import { addVendedor, getVendedor, getVendedores, updateVendedor, deleteVendedor} from "../controllers/vendedorController.js";

const router = express.Router();

router.post("/", addVendedor);

router.get("/:id", getVendedor);

router.get("/", getVendedores);

router.put("/:id", updateVendedor);

router.delete("/:id", deleteVendedor);

export default router;