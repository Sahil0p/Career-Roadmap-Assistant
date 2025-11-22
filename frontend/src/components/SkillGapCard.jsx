export default function SkillGapCard({ data }) {
  if (!data) {
    return (
      <section
        className="
          rounded-2xl p-5 transition-colors
          bg-slate-50 border border-slate-300 text-slate-800 shadow-sm         
          dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100
        "
      >
        <h3 className="text-sm font-semibold mb-2">Skill Gap Analysis</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          No data available yet. Please try analyzing again.
        </p>
      </section>
    );
  }

  const {
    matchedSkills = [],
    missingSkills = [],
    recommendations = [],
    suggestedLearningOrder = [],
  } = data;

  return (
    <section
      className="
        rounded-2xl p-5 flex flex-col gap-3 transition-colors
        bg-slate-90 border border-slate-300 text-slate-800 shadow-sm
        dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100
      "
    >
      <div>
        <h3 className="text-sm font-semibold">Skill Gap Analysis</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Matching your current skills against the target role.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {/* Matched */}
        <div>
          <h4 className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
            Matched Skills
          </h4>
          {matchedSkills.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {matchedSkills.map(skill => (
                <span
                  key={skill}
                  className="
                    px-2 py-1 rounded-full text-[11px]
                    bg-emerald-100 text-emerald-700 border border-emerald-300
                    dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-500/40
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-[11px] text-slate-500">
              No direct matches yet — we’ll build a path.
            </p>
          )}
        </div>

        {/* Missing */}
        <div>
          <h4 className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-1">
            Missing Skills
          </h4>
          {missingSkills.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {missingSkills.map(skill => (
                <span
                  key={skill}
                  className="
                    px-2 py-1 rounded-full text-[11px]
                    bg-rose-100 text-rose-700 border border-rose-300
                    dark:bg-rose-500/10 dark:text-rose-200 dark:border-rose-500/40
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-[11px] text-emerald-600 dark:text-emerald-300">
              You already cover all core skills — great job!
            </p>
          )}
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold">Recommendations</h4>
          <ul className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
            {recommendations.map((rec, idx) => (
              <li key={idx}>• {rec}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Learning Order */}
      {suggestedLearningOrder.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold">Suggested Learning Order</h4>
          <ol className="list-decimal list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-0.5">
            {suggestedLearningOrder.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}

