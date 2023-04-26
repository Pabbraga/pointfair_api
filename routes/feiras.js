import express from "express";

import { addFeira, getFeira, getFeiras, updateFeira, deleteFeira } from "../controllers/feiraController.js";

const router = express.Router();

router.post("/", addFeira);

router.get("/", getFeira);

router.get("/", getFeiras);

router.put("/", updateFeira);

router.delete("/", deleteFeira);

export default router;