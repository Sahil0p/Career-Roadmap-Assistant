import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ES module workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load skills.json manually (avoids Node 22 JSON import issues)
const skillsData = JSON.parse(
  readFileSync(path.join(__dirname, "../data/skills.json"), "utf8")
);

export const analyzeSkillGap = (req, res) => {
  const { targetRole, currentSkills } = req.body;

  if (!targetRole || !currentSkills) {
    return res
      .status(400)
      .json({ error: "targetRole and currentSkills are required" });
  }

  const requiredSkills = skillsData[targetRole];

  if (!requiredSkills) {
    return res
      .status(404)
      .json({ error: "Role not found in predefined skill mapping" });
  }

  // Normalize strings
  const current = currentSkills.map((s) => s.trim().toLowerCase());
  const required = requiredSkills.map((s) => s.trim().toLowerCase());

  const matched = requiredSkills.filter((skill) =>
    current.includes(skill.toLowerCase())
  );
  const missing = requiredSkills.filter(
    (skill) => !current.includes(skill.toLowerCase())
  );

  const recommendations = missing.map(
    (skill) => `Learn ${skill} next to improve your profile.`
  );
  const learningOrder = [...missing];

  res.json({
    targetRole,
    matchedSkills: matched,
    missingSkills: missing,
    recommendations,
    suggestedLearningOrder: learningOrder,
  });
};

