import express from "express";

import { addVendedor, getVendedor, getVendedores, updateVendedor, deleteVendedor} from "../controllers/vendedorController.js";

const router = express.Router();

router.post("/add", addVendedor);

router.get("/getOne/:id", getVendedor);

router.get("/getAll", getVendedores);

router.put("/update/:id", updateVendedor);

router.delete("/delete/:id", deleteVendedor);

export default router;