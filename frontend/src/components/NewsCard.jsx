import { formatDistanceToNowStrict } from "date-fns";

export default function NewsCard({ item }) {
  const { title, url, score, time, by, type } = item;
  const createdAt = time ? new Date(time * 1000) : null;
  const relativeTime = createdAt
    ? formatDistanceToNowStrict(createdAt, { addSuffix: true })
    : "Unknown time";

  return (
    <article
      className="
        flex flex-col gap-1 pb-2 border-b 
        border-slate-200 dark:border-slate-800 last:border-none
      "
    >
      <a
        href={url || "#"}
        target="_blank"
        rel="noreferrer"
        className="
          text-xs font-medium 
          text-slate-700 hover:text-indigo-600
          dark:text-slate-100 dark:hover:text-indigo-300
          transition line-clamp-2
        "
      >
        {title}
      </a>

      <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span
          className="
            px-1.5 py-0.5 rounded-full border text-[10px]
            border-slate-300 text-slate-600
            dark:border-slate-700 dark:text-slate-400
          "
        >
          {type}
        </span>
        <span>Score: {score}</span>
        <span>By: {by}</span>
        <span>{relativeTime}</span>
      </div>
    </article>
  );
}

