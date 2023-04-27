import express from "express";

import { addProduto, getProduto, getProdutos, updateProduto, deleteProduto} from "../controllers/produtoController.js";

const router = express.Router();

router.post("/add", addProduto);

router.get("/getOne/:id", getProduto);

router.get("/getAll", getProdutos);

router.put("/update/:id", updateProduto);

router.delete("/delete/:id", deleteProduto);

export default router;