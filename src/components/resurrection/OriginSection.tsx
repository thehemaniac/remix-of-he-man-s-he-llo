export default function OriginSection() {
  const steps = [
    {
      number: "I",
      label: "The Walk",
      text: "Adam walked through the Wind Forest alone. A falcon circled overhead — screeching, calling. He followed it through an adventurous path to a clearing he had never seen.",
      source: "Series Bible, 1982",
    },
    {
      number: "II",
      label: "The Castle",
      text: "He looked up. Castle Grayskull. The Jaw Bridge had not opened for centuries. It opened for him. Not for a king. Not for a warrior. For a prince the world had written off.",
      source: "Series Bible, 1982",
    },
    {
      number: "III",
      label: "The Prophecy",
      text: "The Sorceress — the falcon transformed — told him: \"YOUR BIRTH HAD BEEN FORETOLD IN ANCIENT LEGENDS. THE SPIRITS HAD CHOSEN YOU.\" He was selected before he was born.",
      source: "Series Bible, 1982 · Episode 73 — Origin of the Sorceress",
    },
    {
      number: "IV",
      label: "The Sword",
      text: "The Power Sword was already waiting inside Grayskull. It was not forged for him. It was forged in the ancient era — in Preternia — and left there. The castle held it across centuries for this moment.",
      source: "Episode 73 — Origin of the Sorceress",
    },
    {
      number: "V",
      label: "The Strike",
      text: "\"Strike the sword against stone. Say the words.\" He struck. \"By the power of Grayskull... I HAVE THE POWER.\" The transformation was not a gift. It was a reclamation.",
      source: "Series Bible, 1982 · 2002 Reboot — The Beginning",
    },
    {
      number: "VI",
      label: "The Burden",
      text: "The Sorceress told him immediately: tell no one. Not his enemies. Not his friends. Not his father. If Skeletor ever learned — all those he loved would be destroyed. He carried it alone.",
      source: "Series Bible, 1982",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-ash overflow-hidden">
      {/* Left blood line */}
      <div
        className="absolute left-0 top-0 w-1 h-full"
        style={{ background: "linear-gradient(180deg, transparent, hsl(var(--gold) / 0.4), transparent)" }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">Layer II — The Origin</span>
          <div className="gold-line flex-1" />
        </div>

        <h2 className="font-cinzel font-bold text-3xl md:text-5xl text-center text-foreground mb-6 leading-tight">
          What the Creators Left Inside<br />
          <span className="text-gold glow-gold-sm">the Castle</span>
        </h2>

        <p className="font-garamond italic text-muted-foreground text-xl text-center max-w-2xl mx-auto mb-20">
          "All the answers are in clues in Castle Grayskull, where they should be — like a puzzle."
          <br />
          <span className="text-gold text-base not-italic">— Mark Taylor, Original Creator of He-Man</span>
        </p>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical spine */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, transparent, hsl(var(--gold) / 0.4) 10%, hsl(var(--gold) / 0.4) 90%, transparent)" }}
          />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"} pl-16 md:pl-0`}>
                  <div
                    className="inline-block border border-border p-6 md:p-8 bg-background hover:border-gold transition-colors duration-500"
                    style={{ borderColor: "hsl(var(--border))" }}
                  >
                    <p className="font-cinzel text-[9px] tracking-[0.5em] text-muted-foreground uppercase mb-2">
                      {step.label}
                    </p>
                    <p className="font-garamond text-foreground text-lg leading-relaxed mb-4">
                      {step.text}
                    </p>
                    <p className="font-cinzel text-[9px] tracking-[0.3em] text-gold opacity-70 uppercase">
                      {step.source}
                    </p>
                  </div>
                </div>

                {/* Spine node */}
                <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 flex flex-col items-center">
                  <div
                    className="w-8 h-8 flex items-center justify-center font-cinzel font-bold text-xs text-primary border border-gold bg-background pulse-gold"
                    style={{ color: "hsl(var(--gold))" }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Empty side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
