import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import EntryBlock from "@/components/atoms/EntryBlock";
import ImagePlaceholder from "@/components/atoms/ImagePlaceholder";

export default function Part1ReferenceImages() {
  return (
    <SiteLayout>
      <Link
        to="/projects/castle-grayskull"
        className="font-cinzel text-[10px] tracking-[0.4em] text-muted-foreground hover:text-gold uppercase transition-colors"
      >
        ← Castle Grayskull
      </Link>

      <header className="mt-12 mb-16 space-y-4">
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
          Part 1
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl text-bone">
          Reference Images
        </h1>
        <div className="font-garamond italic text-foreground/80 text-lg md:text-xl space-y-2 pt-4">
          <p>Six images.</p>
          <p>What they hold, and what they don't.</p>
        </div>
      </header>

      <div className="space-y-20">
        <EntryBlock>
          <p>I start with six images.</p>
          <p>All from the Filmation series.</p>
          <p>The front holds.</p>
          <p>The sides don't.</p>
          <p>I split them.</p>
        </EntryBlock>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <ImagePlaceholder
              key={i}
              aspect="square"
              label={`ref ${String(i + 1).padStart(2, "0")}`}
            />
          ))}
        </div>

        <EntryBlock label="Structure" title="Three hold.">
          <p>Three go here first.</p>
          <p>These hold.</p>
          <p>The proportions stay.</p>
          <p>The silhouette doesn't shift.</p>
        </EntryBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <ImagePlaceholder
              key={i}
              aspect="portrait"
              label={`structure ${i + 1}`}
            />
          ))}
        </div>

        <EntryBlock label="Detail" title="Three set aside.">
          <p>Three go aside.</p>
          <p>These come later.</p>
          <p>After the structure is standing.</p>
        </EntryBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <ImagePlaceholder
              key={i}
              aspect="portrait"
              label={`detail ${i + 1}`}
            />
          ))}
        </div>

        <EntryBlock label="The Problem" title="What the source gives, and what it withholds.">
          <p>The castle was drawn fast.</p>
          <p>Reused.</p>
          <p>The front stays consistent.</p>
          <p>The sides appear less.</p>
          <p>Some angles don't exist.</p>
          <p>I note the contradictions.</p>
          <p>I don't resolve them yet.</p>
        </EntryBlock>

        <div className="pt-12 border-t border-border">
          <Link
            to="/projects/castle-grayskull/part-2-structure-mapping"
            className="group flex items-baseline justify-between gap-6"
          >
            <div>
              <p className="font-cinzel text-[10px] tracking-[0.5em] text-muted-foreground uppercase mb-2">
                Next
              </p>
              <p className="font-cinzel text-xl md:text-2xl text-bone group-hover:text-gold transition-colors">
                Part 2 — Structure Mapping
              </p>
            </div>
            <span className="font-cinzel text-gold text-lg">→</span>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
