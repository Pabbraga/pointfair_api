import express from "express";

import { addProduto, getProduto, getProdutos, updateProduto, deleteProduto} from "../controllers/produtoController.js";

const router = express.Router();

router.post("/", addProduto);

router.get("/:id", getProduto);

router.get("/", getProdutos);

router.put("/:id", updateProduto);

router.delete("/:id", deleteProduto);

export default router;