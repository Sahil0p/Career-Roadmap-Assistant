import { useEffect, useState } from "react";
import CareerInput from "./pages/CareerInput";
import Dashboard from "./pages/Dashboard";
import { Home, Sun, Moon, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [view, setView] = useState("input"); // "input" | "dashboard"
  const [targetRole, setTargetRole] = useState("");
  const [currentSkills, setCurrentSkills] = useState([]);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  // Sync theme with <html> class + localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleAnalyze = ({ targetRole, currentSkills }) => {
    setTargetRole(targetRole);
    setCurrentSkills(currentSkills);
    setView("dashboard");
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.25, ease: "easeOut" },
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col transition-colors duration-300">
        {/* ===================== HEADER ===================== */}
        {/* <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-50"> */}
        <header
  className="
    sticky top-0 z-50
    backdrop-blur-xl
    border-b 
    border-slate-300 dark:border-slate-800
    bg-gradient-to-b from-slate-100/90 to-slate-200/60 
    dark:bg-gradient-to-b dark:from-slate-900/60 dark:to-slate-900/30
    shadow-sm dark:shadow-none
    transition-all duration-300
  "
>
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

            {/* Logo + title (click to go Home) */}
            <div
              onClick={() => setView("input")}
              className="
                flex items-center gap-3 cursor-pointer group
                transition-all duration-300
                hover:scale-[1.04] active:scale-[0.97]
              "
            >
              <div
                className="
                  h-9 w-9 rounded-xl 
                  flex items-center justify-center 
                  text-sm font-bold text-white
                  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                  shadow-lg shadow-indigo-700/40
                  transition-all duration-300 
                  group-hover:shadow-pink-600/60
                  group-active:scale-95
                "
              >
                <Home size={18} />
              </div>

              <div className="leading-tight">
                <h1
                  className="
                    text-lg font-semibold tracking-tight
                    group-hover:underline group-hover:underline-offset-4
                    group-hover:decoration-pink-500
                    transition-all duration-200
                  "
                >
                  Career Roadmap Assistant
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition">
                  Skill-gap analysis · Roadmap · Tech news
                </p>
              </div>
            </div>

            {/* Right: theme toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="
                  inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                  border border-slate-200 dark:border-slate-700
                  text-xs font-medium
                  bg-slate-50/80 dark:bg-slate-900
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  shadow-sm
                  transition-colors duration-200
                "
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={14} className="text-amber-400" />
                    <span>Light mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={14} className="text-indigo-500" />
                    <span>Dark mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* ===================== MAIN + PAGE TRANSITION ===================== */}
        <main className="flex-1">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <AnimatePresence mode="wait">
              {view === "input" ? (
                <motion.div key="input" {...pageTransition}>
                  <CareerInput onAnalyze={handleAnalyze} />
                </motion.div>
              ) : (
                <motion.div key="dashboard" {...pageTransition}>
                  <Dashboard
                    targetRole={targetRole}
                    currentSkills={currentSkills}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* ===================== FOOTER (enhanced) ===================== */}
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80">
          <div 
          className="max-w-6xl mx-auto px-4 py-3 flex flex-col items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Career Roadmap Assistant
              </span>
              <span className="hidden md:inline text-slate-400">·</span>
              <span>React · Node · Express · Tailwind · HackerNews API</span>
            </div>

            {/* <div className="flex items-center gap-3">
              <span className="text-slate-400">
                Demo project for assignment
              </span>
              <span className="hidden md:inline text-slate-400">·</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-indigo-500 transition"
              >
                <Github size={13} />
                <span>View source</span>
              </a>
            </div> */}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
