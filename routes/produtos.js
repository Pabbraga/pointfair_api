import express from "express";

import { addProduto, getProduto, getProdutos, updateProduto, deleteProduto} from "../controllers/produtoController.js";

const router = express.Router();

router.post("/", addProduto);

router.get("/", getProduto);

router.get("/", getProdutos);

router.put("/", updateProduto);

router.delete("/", deleteProduto);

export default router;