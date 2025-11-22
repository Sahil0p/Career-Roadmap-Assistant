import express from "express";
import { fetchLatestNews } from "../controllers/newsController.js";

const router = express.Router();

router.get("/", fetchLatestNews);

export default router;
