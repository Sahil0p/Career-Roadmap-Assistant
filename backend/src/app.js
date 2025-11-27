// import express from "express";
// import cors from "cors";

// import skillGapRoutes from "./routes/skillGapRoutes.js";
// import roadmapRoutes from "./routes/roadmapRoutes.js";
// import newsRoutes from "./routes/newsRoutes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/skill-gap", skillGapRoutes);
// app.use("/api/roadmap", roadmapRoutes);
// app.use("/api/news", newsRoutes);

// export default app;


import express from "express";
import cors from "cors";

import skillGapRoutes from "./routes/skillGapRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";

const app = express();

// Enable JSON parsing
app.use(express.json());

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // Vite dev server
  "https://careerroadmapanalysis.vercel.app/" // Replace with your Vercel frontend URL
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true, // if you use cookies
}));

// Routes
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/news", newsRoutes);

export default app;
