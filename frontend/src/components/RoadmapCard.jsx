export default function RoadmapCard({ data }) {
  if (!data || !data.roadmap) {
    return (
      <section
        className="
          rounded-2xl p-5 transition-colors
          bg-white border border-slate-200 text-slate-800 shadow-sm
          dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100
        "
      >
        <h3 className="text-sm font-semibold mb-2">Career Roadmap</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          No roadmap available for this role yet.
        </p>
      </section>
    );
  }

  const { roadmap } = data;

  return (
    <section
      className="
        rounded-2xl p-5 flex flex-col gap-3 transition-colors
        bg-white border border-slate-200 text-slate-800 shadow-sm
        dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100
      "
    >
      <div>
        <h3 className="text-sm font-semibold">Career Roadmap (3 Phases)</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          A structured learning path.
        </p>
      </div>

      <div className="space-y-3">
        {roadmap.map((phase, idx) => (
          <div
            key={idx}
            className="
              rounded-xl px-3 py-2.5 transition-colors
              bg-slate-100 border border-slate-300 text-slate-800
              dark:bg-slate-900/60 dark:border-slate-700 dark:text-slate-200
            "
          >
            <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-1">
              {phase.phase}
            </h4>
            <ul className="text-[11px] space-y-0.5">
              {phase.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

