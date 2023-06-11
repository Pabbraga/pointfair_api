import express from "express";
import followController from "../controllers/followController.js";

const router = express.Router();

router.put('/follow/:id/:follow', followController.follow);
router.put('/unfollow/:id/:follow', followController.unfollow);

export default router;