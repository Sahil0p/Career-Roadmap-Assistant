import { useEffect, useState } from "react";
import { fetchSkillGap } from "../api/skillGapApi";
import { fetchRoadmap } from "../api/roadmapApi";
import { fetchNews } from "../api/newsApi";
import SkillGapCard from "../components/SkillGapCard";
import RoadmapCard from "../components/RoadmapCard";
import NewsCard from "../components/NewsCard";

export default function Dashboard({ targetRole, currentSkills }) {
  const [skillGapData, setSkillGapData] = useState(null);
  const [roadmapData, setRoadmapData] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!targetRole || !currentSkills?.length) return;

    const loadData = async () => {
      try {
        setLoading(true);
        setError("");

        const [skillGapRes, roadmapRes, newsRes] = await Promise.all([
          fetchSkillGap(targetRole, currentSkills),
          fetchRoadmap(targetRole),
          fetchNews(),
        ]);

        setSkillGapData(skillGapRes);
        setRoadmapData(roadmapRes);
        setNewsData(newsRes);
      } catch (err) {
        console.error(err);
        setError("Failed to load data from APIs. Try again.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [targetRole, currentSkills]);

  if (!targetRole) {
    return (
      <div
        className="
          rounded-2xl p-6 transition-colors
          bg-slate-100 border border-slate-300 text-slate-800 shadow-sm
          dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100
        "
      >
        <p className="text-sm">
          No target role selected. Please go back and enter your career goal.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">
            Career overview for{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {targetRole}
            </span>
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Based on your skills:{" "}
            <span className="text-slate-800 dark:text-slate-200">
              {currentSkills.join(", ")}
            </span>
          </p>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <div
          className="
            rounded-2xl p-6 transition-colors
            bg-slate-200 border border-slate-300 text-slate-800 shadow-sm
            dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100
          "
        >
          Loading skill gap, roadmap, and tech news...
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div
          className="
            rounded-2xl p-4 text-sm transition-colors
            bg-red-100 border border-red-300 text-red-700
            dark:bg-red-950/40 dark:border-red-900/60 dark:text-red-300
          "
        >
          {error}
        </div>
      )}

      {/* SUCCESS */}
      {!loading && !error && (
        <>
          {/* TOP ROW: Skill Gap + Roadmap */}
          <div className="grid md:grid-cols-2 gap-5">
            <SkillGapCard data={skillGapData} />
            <RoadmapCard data={roadmapData} />
          </div>

          {/* BOTTOM: Tech News */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
              Latest Tech Stories (HackerNews)
            </h3>

            <div
              className="
                rounded-2xl p-4 transition-colors shadow-sm
                bg-slate-100 border border-slate-300 text-slate-800 shadow-sm
                dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100
              "
            >
              {newsData?.length > 0 ? (
                <div className="space-y-3 max-h-[260px] overflow-y-auto custom-scrollbar">
                  {newsData.map((item, idx) => (
                    <NewsCard key={idx} item={item} />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  No news available.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
