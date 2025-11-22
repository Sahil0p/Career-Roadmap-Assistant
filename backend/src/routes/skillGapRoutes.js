import express from "express";
import { analyzeSkillGap } from "../controllers/skillGapController.js";

const router = express.Router();

router.post("/", analyzeSkillGap);

export default router;
