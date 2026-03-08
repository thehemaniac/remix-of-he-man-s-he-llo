export default function GrayskullSection() {
  const revelations = [
    {
      title: "Gray Was a Man",
      body: "The castle was not named for a color. It was named for a person. Gray was one of Eternia's first scientists in the ancient era known as Preternia. He built the fortress to contain and protect all magical knowledge.",
      source: "Revealed: January 2026 Comics",
      icon: "◈",
    },
    {
      title: "The Power Belongs to a Founder",
      body: "When He-Man says \"By the power of Grayskull\" he is not invoking a place. He is invoking a man — the ancient founder who built the vessel that held all knowledge across centuries, waiting for one chosen to wield it.",
      source: "Series Bible 1982 · Jan 2026 Confirmation",
      icon: "⚔",
    },
    {
      title: "Two Swords Were Always Waiting",
      body: "The Sword of Power (He-Man) and the Sword of Protection (She-Ra) were both placed inside Grayskull before Adam was born. The castle was not reacting to events. It was prepared for them. Twin destinies were already written in stone.",
      source: "Episode 73 — Origin of the Sorceress",
      icon: "✦",
    },
    {
      title: "The Bridge Had Not Opened in Centuries",
      body: "The Jaw Bridge of Grayskull had been sealed for centuries before Adam arrived. No king opened it. No warrior earned it. It opened for a prince the world called a coward — because the castle recognized what the world refused to see.",
      source: "Series Bible, 1982",
      icon: "🜃",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-ash overflow-hidden">
      {/* Skull watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cinzel-deco font-black text-[40vw] leading-none pointer-events-none select-none opacity-[0.02]"
        style={{ color: "hsl(var(--gold))" }}
        aria-hidden
      >
        G
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">Layer IV — The Castle</span>
          <div className="gold-line flex-1" />
        </div>

        <h2 className="font-cinzel font-bold text-3xl md:text-5xl text-center text-foreground mb-6 leading-tight">
          Castle Grayskull Is Not a Place.<br />
          <span className="text-gold glow-gold-sm">It Is a Testimony.</span>
        </h2>

        <p className="font-garamond italic text-muted-foreground text-xl text-center max-w-2xl mx-auto mb-20">
          Mark Taylor said it himself: all the answers are hidden inside Grayskull like a puzzle.
          He was not speaking metaphorically. He was speaking architecturally.
        </p>

        {/* Revelation cards */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {revelations.map((r) => (
            <div
              key={r.title}
              className="bg-background p-8 md:p-10 group hover:bg-ash transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <div
                  className="shrink-0 w-10 h-10 flex items-center justify-center border border-border text-gold font-bold text-lg group-hover:border-gold transition-colors duration-500"
                >
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-foreground text-base mb-3 group-hover:text-gold transition-colors duration-300">
                    {r.title}
                  </h3>
                  <p className="font-garamond text-muted-foreground text-base leading-relaxed mb-4">
                    {r.body}
                  </p>
                  <p className="font-cinzel text-[9px] tracking-[0.4em] text-gold opacity-60 uppercase">
                    {r.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The power statement */}
        <div className="mt-20 text-center">
          <div className="inline-block border border-border p-1 mb-8">
            <div
              className="px-12 py-6 font-cinzel-deco font-black text-2xl md:text-4xl text-gold glow-gold tracking-widest"
              style={{
                background: "linear-gradient(180deg, hsl(var(--ash)) 0%, hsl(var(--background)) 100%)",
              }}
            >
              BY THE POWER OF GRAYSKULL
            </div>
          </div>
          <p className="font-garamond italic text-foreground text-xl max-w-2xl mx-auto">
            This is not a catchphrase. This is an invocation of an ancient founder.
            The most powerful being in the universe does not invoke a building.
            He invokes a <span className="text-gold">man who came before</span> and built the vessel for this moment.
          </p>
        </div>
      </div>
    </section>
  );
}
