import { getTopTechNews } from "../utils/fetchNews.js";

export const fetchLatestNews = async (req, res) => {
  try {
    const news = await getTopTechNews();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tech news" });
  }
};
