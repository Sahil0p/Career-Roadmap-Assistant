import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const fetchSkillGap = async (targetRole, currentSkills) => {
  const res = await axios.post(`${API_BASE_URL}/api/skill-gap`, {
    targetRole,
    currentSkills,
  });
  return res.data;
};
