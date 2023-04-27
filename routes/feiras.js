import express from "express";

import { addFeira, getFeira, getFeiras, updateFeira, deleteFeira } from "../controllers/feiraController.js";

const router = express.Router();

router.post("/add", addFeira);

router.get("/getOne/:id", getFeira);

router.get("/getAll", getFeiras);

router.put("/update", updateFeira);

router.delete("/delete/:id", deleteFeira);

export default router;