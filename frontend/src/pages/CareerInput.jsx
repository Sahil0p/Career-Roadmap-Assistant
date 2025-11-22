import { useState } from "react";

const PREDEFINED_ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
];

export default function CareerInput({ onAnalyze }) {
  const [targetRole, setTargetRole] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setError("");

    if (!targetRole) {
      setError("Please select or enter a target role.");
      return;
    }

    const skills = skillsInput
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    if (skills.length === 0) {
      setError("Please enter at least one current skill.");
      return;
    }

    onAnalyze({
      targetRole,
      currentSkills: skills,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">

      {/* LEFT CARD (FORM) */}
      <section
        className="
          rounded-2xl p-6 shadow-sm transition-colors
          bg-slate-90 border border-slate-300 text-slate-800
          dark:bg-gradient-to-br dark:from-indigo-500/20 dark:via-slate-900 dark:to-slate-900
          dark:border-slate-800 dark:text-slate-200
          dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100
        "
      >
        <h2 className="text-xl font-semibold mb-1">Define your career goal</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Choose a target role and tell us what skills you already have.
        </p>

        {error && (
          <div
            className="
              mb-3 text-sm 
              text-red-700 bg-red-100 border border-red-300 
              dark:text-red-300 dark:bg-red-950/40 dark:border-red-900/60 
              px-3 py-2 rounded-lg
            "
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* TARGET ROLE */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Target Role
            </label>

            <select
              className="
                w-full bg-white border border-slate-300 
                dark:bg-slate-900 dark:border-slate-700
                rounded-lg px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
              "
              value={targetRole}
              onChange={e => setTargetRole(e.target.value)}
            >
              <option value="">Select a predefined role</option>
              {PREDEFINED_ROLES.map(role => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <p className="text-[11px] text-slate-500">
              Options: Frontend Developer, Backend Developer, Data Analyst.
            </p>
          </div>

          {/* CURRENT SKILLS */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Current Skills (comma-separated)
            </label>

            <textarea
              className="
                w-full min-h-[90px]
                bg-white border border-slate-300
                dark:bg-slate-900 dark:border-slate-700
                rounded-lg px-3 py-2 text-sm focus:outline-none
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                resize-y
              "
              placeholder="Example: HTML, CSS, JavaScript, SQL, Git"
              value={skillsInput}
              onChange={e => setSkillsInput(e.target.value)}
            />

            <p className="text-[11px] text-slate-500">
              We’ll compare these skills to your target role’s requirements.
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
              w-full md:w-auto mt-2 inline-flex items-center justify-center 
              gap-2 px-4 py-2.5 rounded-lg 
              bg-indigo-600 hover:bg-indigo-500 text-white 
              text-sm font-medium shadow
              transition
            "
          >
            Analyze My Career Path <span className="text-xs">→</span>
          </button>
        </form>
      </section>

      {/* RIGHT SIDE (INFO CARDS) */}
      <section className="hidden md:flex flex-col gap-4">

        {/* CARD 1 */}
        <div
          className="
            rounded-2xl p-5 transition-colors shadow-sm
            bg-slate-100 border border-slate-200 text-slate-700
            dark:bg-gradient-to-br dark:from-indigo-500/20 dark:via-slate-900 dark:to-slate-900
            dark:border-slate-800 dark:text-slate-200
            dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-200
          "
        >
          <h3 className="text-sm font-semibold mb-2">What you’ll see</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
            <li>• Matched vs missing skills</li>
            <li>• A 3-phase learning roadmap</li>
            <li>• Latest HackerNews tech stories</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div
          className="
            rounded-2xl p-5 transition-colors shadow-sm
            bg-slate-100 border border-slate-200 text-slate-700
            dark:bg-gradient-to-br dark:from-indigo-500/20 dark:via-slate-900 dark:to-slate-900
            dark:border-slate-800 dark:text-slate-200
            dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-200
          "
        >
          <h3 className="text-sm font-semibold mb-1">Pro tip</h3>
          <p className="text-sm mb-2">
            Use the results page in interviews to explain your learning plan.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            This assignment focuses on structure, clarity, and clean API usage.
          </p>
        </div>
      </section>
    </div>
  );
}
