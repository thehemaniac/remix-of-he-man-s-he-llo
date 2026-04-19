import SiteLayout from "@/components/layout/SiteLayout";
import ChapterRow from "@/components/atoms/ChapterRow";
import { Link } from "react-router-dom";

const parts = [
  {
    index: "Part 1",
    title: "Reference Images",
    to: "/projects/castle-grayskull/part-1-reference-images",
    status: "active" as const,
  },
  {
    index: "Part 2",
    title: "Structure Mapping",
    to: "/projects/castle-grayskull/part-2-structure-mapping",
    status: "upcoming" as const,
  },
  {
    index: "Part 3",
    title: "Final Build",
    to: "/projects/castle-grayskull/part-3-final-build",
    status: "upcoming" as const,
  },
];

export default function CastleGrayskull() {
  return (
    <SiteLayout>
      <Link
        to="/projects"
        className="font-cinzel text-[10px] tracking-[0.4em] text-muted-foreground hover:text-gold uppercase transition-colors"
      >
        ← Projects
      </Link>

      <header className="mt-12 mb-20 space-y-6">
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
          Project I
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl text-bone">
          Making of Castle Grayskull
        </h1>
        <div className="font-garamond italic text-foreground/80 text-lg md:text-xl space-y-2 pt-4">
          <p>Recreating the most iconic structure from the Filmation universe.</p>
          <p>Studying what holds.</p>
          <p>Discarding what doesn't.</p>
        </div>
      </header>

      <div>
        {parts.map((p) => (
          <ChapterRow key={p.to} {...p} />
        ))}
      </div>
    </SiteLayout>
  );
}
