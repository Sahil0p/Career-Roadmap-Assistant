export const generateRoadmap = (req, res) => {
  const { targetRole } = req.body;

  if (!targetRole) {
    return res.status(400).json({ error: "targetRole is required" });
  }

  const roadmapTemplates = {
    "Backend Developer": [
      {
        phase: "Phase 1 (1–2 months)",
        items: ["Java Basics", "OOP", "Git"]
      },
      {
        phase: "Phase 2 (2 months)",
        items: ["Spring Boot", "SQL", "APIs"]
      },
      {
        phase: "Phase 3 (1–2 months)",
        items: ["Deployment", "Projects", "System Design Basics"]
      }
    ],
    "Frontend Developer": [
      {
        phase: "Phase 1 (1–2 months)",
        items: ["HTML", "CSS", "JavaScript"]
      },
      {
        phase: "Phase 2 (2 months)",
        items: ["React", "Git", "Responsive Design"]
      },
      {
        phase: "Phase 3 (1–2 months)",
        items: ["Advanced React", "Projects", "Optimization"]
      }
    ],
    "Data Analyst": [
      {
        phase: "Phase 1 (1–2 months)",
        items: ["Excel", "SQL", "Python Basics"]
      },
      {
        phase: "Phase 2 (2 months)",
        items: ["Dashboards", "Pandas", "Data Cleaning"]
      },
      {
        phase: "Phase 3 (1–2 months)",
        items: ["Statistics", "Projects", "Visualization"]
      }
    ]
  };

  const roadmap = roadmapTemplates[targetRole];

  if (!roadmap) {
    return res.status(404).json({ error: "No roadmap available for this role" });
  }

  res.json({
    targetRole,
    roadmap
  });
};

