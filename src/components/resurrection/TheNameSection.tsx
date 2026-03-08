export default function TheNameSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-background">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, hsl(43 96% 48%) 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, hsl(43 96% 48%) 0px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">Layer I — The Name</span>
          <div className="gold-line flex-1" />
        </div>

        {/* Title */}
        <h2 className="font-cinzel font-bold text-3xl md:text-5xl text-center text-foreground mb-20 leading-tight">
          The Name Was Never One Word.<br />
          <span className="text-gold glow-gold-sm">It Was Two Truths.</span>
        </h2>

        {/* The split cards */}
        <div className="grid md:grid-cols-2 gap-0 border border-border">
          {/* HE */}
          <div className="p-10 md:p-16 border-r border-border relative group hover:bg-ash transition-colors duration-500">
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ background: "hsl(var(--bone) / 0.3)" }}
            />
            <p className="font-cinzel text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-6">The Disguise</p>
            <h3
              className="font-cinzel-deco font-black mb-8 leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 6rem)", color: "hsl(var(--bone))", opacity: 0.5 }}
            >
              HE
            </h3>
            <ul className="space-y-4 font-garamond text-muted-foreground text-lg">
              <li className="flex items-start gap-3">
                <span className="text-border text-xl leading-tight">—</span>
                <span>Prince Adam. Blonde. Soft. Cowardly to all who watched.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border text-xl leading-tight">—</span>
                <span>Built to be forgettable. Built to be dismissed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border text-xl leading-tight">—</span>
                <span>The acceptable face. The one the palace could present.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border text-xl leading-tight">—</span>
                <span>Even his father called him a disappointment.</span>
              </li>
            </ul>
            <div className="mt-10 pt-6 border-t border-border">
              <p className="font-garamond italic text-muted-foreground text-base">
                "HE" is the pronoun the world assigned before it met the man.
              </p>
            </div>
          </div>

          {/* MAN */}
          <div className="p-10 md:p-16 relative group hover:bg-ash transition-colors duration-500">
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ background: "hsl(var(--gold))", boxShadow: "0 0 12px hsl(43 96% 48% / 0.6)" }}
            />
            <p className="font-cinzel text-[10px] tracking-[0.4em] text-gold uppercase mb-6">The Truth</p>
            <h3
              className="font-cinzel-deco font-black mb-8 leading-none glow-gold"
              style={{ fontSize: "clamp(3rem, 10vw, 6rem)", color: "hsl(var(--gold))" }}
            >
              MAN
            </h3>
            <ul className="space-y-4 font-garamond text-foreground text-lg">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl leading-tight">—</span>
                <span>He-Man. The most powerful being in the universe.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl leading-tight">—</span>
                <span>Dark. Warrior. Ancient power reborn in a living body.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl leading-tight">—</span>
                <span>Chosen before birth by spirits the world had forgotten.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl leading-tight">—</span>
                <span>The identity that was always real. The rest was theater.</span>
              </li>
            </ul>
            <div className="mt-10 pt-6 border-t border-border">
              <p className="font-garamond italic text-foreground text-base">
                "MAN" is the statement. Not gentle. Not qualified. Final.
              </p>
            </div>
          </div>
        </div>

        {/* Canon source */}
        <div className="mt-8 text-center">
          <p className="font-cinzel text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
            Source: Series Bible, Michael Halperin — December 1, 1982
          </p>
        </div>
      </div>
    </section>
  );
}
