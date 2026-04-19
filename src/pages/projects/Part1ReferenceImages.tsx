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

      {/* Chapter header */}
      <header className="mt-12 mb-12 space-y-5">
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
          Part 1
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl text-bone">
          Reference Images
        </h1>
        <div className="gold-line w-full mt-6" />
      </header>

      <div>
        {/* Opening */}
        <EntryBlock>
          <p>I start by going through the first 33 episodes.</p>
          <p>Certain shots repeat.</p>
          <p>The same outer views of Castle Grayskull appear again and again.</p>
          <p>After watching through them, six stand out.</p>
          <p>These are the ones that carry the structure.</p>
          <p>Here are the screenshots.</p>
        </EntryBlock>

        {/* 6 image grid */}
        <div className="mt-12 md:mt-16 border border-border/60 bg-ash/40 p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <ImagePlaceholder
                key={i}
                aspect="square"
                label="reference"
                index={i + 1}
              />
            ))}
          </div>
        </div>

        {/* Observations */}
        <div className="pt-16 md:pt-20">
          <EntryBlock>
            <p>The front holds.</p>
            <p>The face stays consistent.</p>
            <p>The entrance doesn't shift.</p>
            <p>From the sides, it changes.</p>
            <p>Some parts align.</p>
            <p>Others don't stay the same.</p>
            <p>I split them.</p>
          </EntryBlock>
        </div>

        {/* Divider with label */}
        <div className="pt-20 md:pt-28 flex items-center gap-4">
          <div className="flex-1 gold-line" />
          <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
            Structure / Detail
          </p>
          <div className="flex-1 gold-line" />
        </div>

        {/* Structure vs Detail — side by side on md+ */}
        <div className="pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Structure column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
                Structure
              </p>
              <div className="font-garamond italic text-foreground/85 text-base md:text-lg leading-relaxed space-y-1">
                <p>Three hold the body.</p>
                <p>These carry the proportions.</p>
                <p>The silhouette stays consistent.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <ImagePlaceholder
                  key={i}
                  aspect="portrait"
                  label="structure"
                  tone="primary"
                  index={i + 1}
                />
              ))}
            </div>
          </div>

          {/* Detail column */}
          <div className="space-y-6 md:pl-6 md:pt-4">
            <div className="space-y-3">
              <p className="font-cinzel text-[10px] tracking-[0.5em] text-muted-foreground uppercase">
                Detail
              </p>
              <div className="font-garamond italic text-foreground/70 text-base md:text-lg leading-relaxed space-y-1">
                <p>Three stay aside.</p>
                <p>These focus on the front.</p>
                <p>They come later.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:px-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <ImagePlaceholder
                  key={i}
                  aspect="portrait"
                  label="detail"
                  tone="secondary"
                  index={i + 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bridge */}
        <EntryBlock>
          <p>These define the direction.</p>
          <p>I move forward with these.</p>
        </EntryBlock>

        <div className="gold-line w-full" />

        {/* First Pass */}
        <EntryBlock label="First Pass">
          <p>I change the style.</p>
          <p>Not to improve them.</p>
          <p>To see them better.</p>
          <p>The same input.</p>
          <p>Different systems.</p>
          <p>Each one interprets the structure differently.</p>
          <p>Some stretch it.</p>
          <p>Some flatten it.</p>
          <p>Some lose the weight completely.</p>
        </EntryBlock>

        {/* Model output grid — uniform square tiles */}
        <div className="border border-border/60 bg-ash/40 p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 9 }).map((_, i) => {
              const model = Math.floor(i / 3) + 1;
              const output = (i % 3) + 1;
              return (
                <ImagePlaceholder
                  key={i}
                  aspect="square"
                  label={`model 0${model} · output 0${output}`}
                />
              );
            })}
          </div>
        </div>

        <EntryBlock>
          <p>They don't match.</p>
          <p>But something starts to repeat.</p>
          <p>The upper structure holds.</p>
          <p>The middle compresses.</p>
          <p>The base merges.</p>
          <p>It appears across them.</p>
        </EntryBlock>

        {/* Record */}
        <EntryBlock label="Record">
          <p>I keep all outputs.</p>
          <p>Each one shows a different reading of the same structure.</p>
        </EntryBlock>

        {/* Sequence / contact sheet — ref → outputs per model */}
        <div className="space-y-10">
          {[1, 2, 3].map((model) => (
            <div key={model} className="space-y-3">
              <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
                Model 0{model}
              </p>
              <div className="border border-border/60 bg-ash/40 p-3 md:p-4">
                <div className="grid grid-cols-[1fr_auto_3fr] gap-3 md:gap-4 items-center">
                  {/* Reference */}
                  <div>
                    <ImagePlaceholder
                      aspect="square"
                      label="reference"
                      index={model}
                    />
                  </div>
                  {/* Arrow */}
                  <div className="font-cinzel text-gold text-lg md:text-2xl px-1 md:px-2">
                    →
                  </div>
                  {/* Outputs */}
                  <div className="grid grid-cols-4 gap-2 md:gap-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <ImagePlaceholder
                        key={i}
                        aspect="square"
                        label={`out ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ending */}
        <div className="pt-8">
          <EntryBlock>
            <p>The structure isn't resolved yet.</p>
            <p>It has to be forced.</p>
            <p>Not guessed.</p>
          </EntryBlock>
        </div>

        {/* Next link */}
        <div className="pt-16 border-t border-border">
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
