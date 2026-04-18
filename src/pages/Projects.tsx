import SiteLayout from "@/components/layout/SiteLayout";
import ChapterRow from "@/components/atoms/ChapterRow";

const projects = [
  {
    index: "I",
    title: "Making of Castle Grayskull",
    to: "/projects/castle-grayskull",
    status: "active" as const,
    meta: "Active",
  },
  {
    index: "II",
    title: "Making of Granamyr",
    to: "/projects/granamyr",
    status: "upcoming" as const,
    meta: "Single entry",
  },
  {
    index: "III",
    title: "Making of Skytree",
    to: "/projects/skytree",
    status: "upcoming" as const,
    meta: "Not opened",
  },
  {
    index: "IV",
    title: "Making of the Witches of Fire",
    to: "/projects/witches-of-fire",
    status: "upcoming" as const,
    meta: "Not opened",
  },
];

export default function Projects() {
  return (
    <SiteLayout>
      <header className="mb-16 space-y-4">
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
          The Record
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl text-bone">Projects</h1>
        <p className="font-garamond italic text-muted-foreground text-lg max-w-xl">
          Four entries. One in motion.
        </p>
      </header>

      <div>
        {projects.map((p) => (
          <ChapterRow key={p.to} {...p} />
        ))}
      </div>
    </SiteLayout>
  );
}
