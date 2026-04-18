import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import EntryBlock from "@/components/atoms/EntryBlock";
import ImagePlaceholder from "@/components/atoms/ImagePlaceholder";

export default function Granamyr() {
  return (
    <SiteLayout>
      <Link
        to="/projects"
        className="font-cinzel text-[10px] tracking-[0.4em] text-muted-foreground hover:text-gold uppercase transition-colors"
      >
        ← Projects
      </Link>

      <header className="mt-12 mb-16 space-y-6">
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
          Project II
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl text-bone">
          Making of Granamyr
        </h1>
        <p className="font-garamond italic text-foreground/80 text-lg md:text-xl pt-4">
          The weight comes first.
        </p>
      </header>

      <div className="space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ImagePlaceholder aspect="square" caption="Filmation reference" label="reference" />
          <EntryBlock label="The Problem">
            <p>The dragon is old.</p>
            <p>Heavier than fire.</p>
            <p>The source gives little.</p>
            <p>I work from the weight.</p>
          </EntryBlock>
        </div>

        <EntryBlock label="Testing" title="Four passes.">
          <p>I run four.</p>
          <p>Each shifts one thing.</p>
        </EntryBlock>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ImagePlaceholder key={i} aspect="square" label={`output ${i + 1}`} />
          ))}
        </div>

        <EntryBlock label="Selection">
          <p>One holds the weight.</p>
          <p>I keep it.</p>
        </EntryBlock>

        <ImagePlaceholder aspect="wide" caption="Selected — final" label="final" />

        <EntryBlock label="All Outputs">
          <p>I leave the others.</p>
          <p>They stay in the record.</p>
        </EntryBlock>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <ImagePlaceholder key={i} aspect="square" label={`pass ${i + 1}`} />
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
