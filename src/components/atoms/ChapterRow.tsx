import { Link } from "react-router-dom";

interface ChapterRowProps {
  index: string;
  title: string;
  to?: string;
  status?: "active" | "upcoming" | "closed";
  meta?: string;
}

export default function ChapterRow({ index, title, to, status = "active", meta }: ChapterRowProps) {
  const isActive = status === "active";
  const Inner = (
    <div
      className={`group flex items-baseline justify-between gap-6 py-6 border-b border-border/60 transition-colors ${
        to ? "hover:border-gold-dim cursor-pointer" : ""
      }`}
    >
      <div className="flex items-baseline gap-6 min-w-0">
        <span
          className={`font-cinzel text-[10px] tracking-[0.4em] uppercase shrink-0 ${
            isActive ? "text-gold" : "text-muted-foreground"
          }`}
        >
          {index}
        </span>
        <h3
          className={`font-cinzel text-base md:text-lg tracking-wide truncate ${
            isActive ? "text-bone group-hover:text-gold transition-colors" : "text-muted-foreground"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="flex items-baseline gap-4 shrink-0">
        {meta && (
          <span className="font-garamond italic text-sm text-muted-foreground hidden md:inline">
            {meta}
          </span>
        )}
        {to && (
          <span className="font-cinzel text-[10px] tracking-[0.4em] text-gold/70 group-hover:text-gold transition-colors">
            →
          </span>
        )}
      </div>
    </div>
  );
  return to ? <Link to={to}>{Inner}</Link> : Inner;
}
