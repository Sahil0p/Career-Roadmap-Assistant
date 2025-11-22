import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const fetchRoadmap = async targetRole => {
  const res = await axios.post(`${API_BASE_URL}/api/roadmap`, {
    targetRole,
  });
  return res.data;
};
