import express from "express";

import { addVendedor, getVendedor, getVendedores, updateVendedor, deleteVendedor} from "../controllers/vendedorController.js";

const router = express.Router();

router.post("/", addVendedor);

router.get("/", getVendedor);

router.get("/", getVendedores);

router.put("/", updateVendedor);

router.delete("/", deleteVendedor);

export default router;