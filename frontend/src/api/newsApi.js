import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const fetchNews = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/news`);
  return res.data;
};
