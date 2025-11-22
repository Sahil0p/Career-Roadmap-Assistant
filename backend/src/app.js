import express from "express";
import cors from "cors";

import skillGapRoutes from "./routes/skillGapRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/news", newsRoutes);

export default app;
