export default function TaylorSection() {
  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Vertical gold accent */}
      <div
        className="absolute right-0 top-0 w-1 h-full"
        style={{ background: "linear-gradient(180deg, transparent, hsl(var(--gold) / 0.3), transparent)" }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">Layer V — The Original Creator</span>
          <div className="gold-line flex-1" />
        </div>

        <h2 className="font-cinzel font-bold text-3xl md:text-5xl text-center text-foreground mb-20 leading-tight">
          Before Mattel. Before Adam.<br />
          <span className="text-gold glow-gold-sm">There Was Torak.</span>
        </h2>

        {/* Mark Taylor's testimony */}
        <div className="space-y-12">
          {/* Quote 1 */}
          <div className="border-l-2 border-gold pl-8 py-2">
            <p className="font-garamond italic text-foreground text-xl md:text-2xl leading-relaxed mb-4">
              "All the answers are in clues in Castle Grayskull, where they should be — like a puzzle."
            </p>
            <p className="font-cinzel text-[10px] tracking-[0.4em] text-gold uppercase">
              — Mark Taylor, Original Creator & Designer of He-Man
            </p>
          </div>

          {/* The burial */}
          <div
            className="border border-border p-8 md:p-12 relative"
          >
            <div className="absolute top-0 left-8 -translate-y-1/2 px-4 bg-background">
              <span className="font-cinzel text-[9px] tracking-[0.4em] text-muted-foreground uppercase">What Was Buried</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-cinzel font-bold text-muted-foreground text-sm tracking-widest mb-4 uppercase">
                  The Original: Torak
                </h3>
                <ul className="space-y-3 font-garamond text-muted-foreground text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-border">—</span>
                    <span>Hero of Prehistory. Serious. Ancient. A defender of the weak against all bullies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-border">—</span>
                    <span>Designed by Taylor from childhood — "the little guy who could strike back."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-border">—</span>
                    <span>Battle Cat was always meant to be serious. A true war mount. Ancient and powerful.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-gold text-sm tracking-widest mb-4 uppercase glow-gold-sm">
                  The Vision That Endures
                </h3>
                <ul className="space-y-3 font-garamond text-foreground text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-gold">—</span>
                    <span>The warrior beneath Adam was always Torak — the original name, the original soul.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">—</span>
                    <span>Taylor's original concept is the foundation upon which this universe is built.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">—</span>
                    <span>Mark Taylor is now writing the original Torak prequel himself. The vision lives on.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quote 2 — the emotional core */}
          <div
            className="p-10 md:p-14 text-center relative"
            style={{
              background: "linear-gradient(135deg, hsl(var(--ash)) 0%, hsl(var(--background)) 100%)",
              border: "1px solid hsl(var(--gold) / 0.25)",
            }}
          >
            <p className="font-garamond italic text-foreground text-xl md:text-3xl leading-relaxed mb-8">
              "Everybody pushes us little guys around, we secretly want to strike back at all the bullies.
              With He-Man we have the power! <span className="text-gold">We have a chance.</span>"
            </p>
            <p className="font-cinzel text-[10px] tracking-[0.4em] text-gold uppercase opacity-80">
              — Mark Taylor
            </p>
          </div>

          {/* The resurrection thesis */}
          <div className="text-center">
            <p className="font-garamond text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              The Resurrection is an original universe — built in honor of what Taylor always envisioned.
              The <span className="text-gold">original signal</span>, carried forward with the full weight of 
              the mythology it always deserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
