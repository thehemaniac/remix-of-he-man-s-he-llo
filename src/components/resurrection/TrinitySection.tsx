import trio from "@/assets/trio.png";

export default function TrinitySection() {
  const columns = [
    {
      id: "adam",
      name: "ADAM",
      role: "The Social Self",
      layer: "Neocortex · The Human Face",
      description:
        "Warm. Dismissible. The civilian the world accepts without question. The disguise built so perfectly that even Adam believed it. The prince who could not fight. The boy who was afraid.",
      proof: "He is who we pretend to be.",
      traits: ["Human skin", "Royal title", "Known to all", "Accepted without question"],
      colorClass: "bone",
      borderStyle: { borderColor: "hsl(var(--bone) / 0.3)" },
      labelStyle: { color: "hsl(var(--bone))", opacity: 0.6 },
      tagStyle: { color: "hsl(var(--muted-foreground))" },
      dim: true,
    },
    {
      id: "heman",
      name: "HE-MAN",
      role: "The Integrated Warrior",
      layer: "The Ascended Self · The Yes",
      description:
        "The truth that was always underneath. The warrior who held the sword and did not flinch. Warm-blooded. Vital. The same body as Skeletor — but with the choice made. The power that was always there, finally claimed.",
      proof: "He is who we are capable of becoming.",
      traits: ["Warm vital skin", "No title", "Known to none", "Chosen by the sword"],
      colorClass: "gold",
      borderStyle: { borderColor: "hsl(var(--gold) / 0.6)" },
      labelStyle: { color: "hsl(var(--gold))" },
      tagStyle: { color: "hsl(var(--gold))", opacity: 0.7 },
      dim: false,
      glow: true,
    },
    {
      id: "skeletor",
      name: "SKELETOR",
      role: "The Reptilian Shadow",
      layer: "Brain Stem · The Denied Sword",
      description:
        "Cold-blooded. Clawed. Blue. The same armor. The same boots. The same build. The same height. Every desire he carries, you recognize — because it lives in you too. He is not the enemy outside. He is what happens when the warrior inside is permanently suppressed.",
      proof: "He is who we become when the sword is never given.",
      traits: ["Cold blue skin", "Clawed hands", "Identical armor", "Denied the sword"],
      colorClass: "reptile",
      borderStyle: { borderColor: "hsl(var(--reptile) / 0.5)" },
      labelStyle: { color: "hsl(var(--reptile))" },
      tagStyle: { color: "hsl(var(--reptile))", opacity: 0.8 },
      dim: false,
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: "hsl(var(--ash))" }}>
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.2), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.15), transparent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1 opacity-40" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase opacity-70">
            Layer I.IV — The Three Faces
          </span>
          <div className="gold-line flex-1 opacity-40" />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="font-cinzel-deco font-black text-3xl md:text-5xl text-gold glow-gold mb-4">
            Three Names. One Body.
          </h2>
          <p className="font-garamond italic text-xl md:text-2xl text-foreground opacity-70 max-w-3xl mx-auto leading-relaxed">
            They dressed them identically. Same armor. Same boots. Same build. Same height.
            Only the skin is different. That was the message.
          </p>
        </div>

        {/* Visual proof: identical costume */}
        <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
          {["Chest Armor", "Boots", "Loincloth", "Build", "Height"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: "hsl(var(--gold))", opacity: 0.5 }} />
              <span className="font-cinzel text-[9px] tracking-[0.3em] text-muted-foreground uppercase">{item}</span>
            </div>
          ))}
          <div className="w-full h-px opacity-20 gold-line mt-2" />
          <span className="font-garamond italic text-muted-foreground text-sm w-full text-center -mt-2">
            Identical in every detail. The only variable: the skin, the claws, and the sword.
          </span>
        </div>

        {/* Trinity image panel */}
        <div className="grid grid-cols-3 gap-0 mb-20 relative overflow-hidden" style={{ borderColor: "hsl(var(--border))" }}>
          {/* ADAM */}
          <div className="relative group" style={{ borderRight: "1px solid hsl(var(--border))" }}>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={trio}
                alt="Adam — The Social Self"
                className="w-full h-full object-cover"
                style={{ objectPosition: "15% center", filter: "saturate(0.6) brightness(0.75)" }}
              />
              {/* Bone dim overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 40%, hsl(var(--void) / 0.85) 100%)" }}
              />
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "hsl(var(--bone) / 0.5)" }} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <p className="font-cinzel-deco font-black text-2xl md:text-3xl" style={{ color: "hsl(var(--bone))", opacity: 0.7 }}>
                ADAM
              </p>
              <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase" style={{ color: "hsl(var(--bone))", opacity: 0.4 }}>
                The Social Self
              </p>
            </div>
          </div>

          {/* HE-MAN */}
          <div className="relative group" style={{ borderRight: "1px solid hsl(var(--border))" }}>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={trio}
                alt="He-Man — The Integrated Warrior"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% center" }}
              />
              {/* Gold glow overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 40%, hsl(var(--void) / 0.85) 100%)" }}
              />
              {/* Gold glow top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "hsl(var(--gold) / 0.9)", boxShadow: "0 0 12px hsl(var(--gold) / 0.6)" }} />
              {/* Subtle gold vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px hsl(var(--gold) / 0.08)" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <p className="font-cinzel-deco font-black text-2xl md:text-3xl glow-gold" style={{ color: "hsl(var(--gold))" }}>
                HE-MAN
              </p>
              <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase" style={{ color: "hsl(var(--gold))", opacity: 0.6 }}>
                The Integrated Warrior
              </p>
            </div>
          </div>

          {/* SKELETOR */}
          <div className="relative group">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={skeletor}
                alt="Skeletor — The Reptilian Shadow"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center center" }}
              />
              {/* Blue cold overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 40%, hsl(var(--void) / 0.85) 100%)" }}
              />
              {/* Reptile top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "hsl(var(--reptile) / 0.8)" }} />
              {/* Blue cold vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px hsl(var(--reptile) / 0.12)" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <p className="font-cinzel-deco font-black text-2xl md:text-3xl" style={{ color: "hsl(var(--reptile))" }}>
                SKELETOR
              </p>
              <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase" style={{ color: "hsl(var(--reptile))", opacity: 0.6 }}>
                The Reptilian Shadow
              </p>
            </div>
          </div>

          {/* Bottom caption */}
          <div className="col-span-3 pt-4 pb-2 text-center border-t" style={{ borderColor: "hsl(var(--border))" }}>
            <span className="font-garamond italic text-muted-foreground text-sm">
              Same body. Same fire. Three skins. The only variable is the choice.
            </span>
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Vertical dividers */}
          <div
            className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px pointer-events-none"
            style={{ background: "linear-gradient(180deg, transparent, hsl(var(--border)), transparent)" }}
          />
          <div
            className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px pointer-events-none"
            style={{ background: "linear-gradient(180deg, transparent, hsl(var(--border)), transparent)" }}
          />

          {columns.map((col) => (
            <div
              key={col.id}
              className="relative p-8 md:p-10 border-t-2 md:border-t-0 md:border-l-0 first:border-t-0"
              style={col.borderStyle}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-16 mb-8" style={col.borderStyle} />

              {/* Layer tag */}
              <p className="font-cinzel text-[9px] tracking-[0.4em] uppercase mb-4" style={col.tagStyle}>
                {col.layer}
              </p>

              {/* Name */}
              <h3
                className={`font-cinzel-deco font-black text-4xl md:text-5xl mb-2 ${col.glow ? "glow-gold" : ""}`}
                style={{ ...col.labelStyle, opacity: col.dim ? 0.45 : 1 }}
              >
                {col.name}
              </h3>

              {/* Role */}
              <p className="font-cinzel text-xs tracking-[0.25em] uppercase mb-8 text-muted-foreground">
                {col.role}
              </p>

              {/* Description */}
              <p
                className="font-garamond text-lg leading-relaxed mb-8"
                style={{ color: "hsl(var(--foreground))", opacity: col.dim ? 0.55 : 0.85 }}
              >
                {col.description}
              </p>

              {/* Traits */}
              <div className="space-y-2 mb-8">
                {col.traits.map((trait) => (
                  <div key={trait} className="flex items-center gap-3">
                    <div className="w-1 h-1 rotate-45 shrink-0" style={col.borderStyle} />
                    <span
                      className="font-cinzel text-[10px] tracking-[0.25em] uppercase"
                      style={{ color: "hsl(var(--muted-foreground))", opacity: col.dim ? 0.5 : 0.7 }}
                    >
                      {trait}
                    </span>
                  </div>
                ))}
              </div>

              {/* Proof statement */}
              <div className="border-t pt-6" style={col.borderStyle}>
                <p
                  className="font-garamond italic text-base"
                  style={{ ...col.labelStyle, opacity: col.dim ? 0.4 : 0.8 }}
                >
                  {col.proof}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central mirror thesis */}
        <div
          className="mt-20 p-10 md:p-14 border text-center relative"
          style={{ borderColor: "hsl(var(--gold) / 0.2)", background: "hsl(var(--void) / 0.8)" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-gold"
            style={{ background: "hsl(var(--ash))", borderColor: "hsl(var(--gold) / 0.5)" }}
          />

          <p className="font-cinzel font-bold text-sm tracking-[0.3em] text-gold uppercase mb-6 opacity-60">
            The Mirror Proof
          </p>

          <blockquote className="font-garamond text-xl md:text-2xl text-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Skeletor is not He-Man's enemy.{" "}
            <span className="text-gold">He is He-Man's warning.</span>
          </blockquote>

          <div className="gold-line opacity-20 max-w-xs mx-auto mb-8" />

          <p className="font-garamond italic text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Same body. Same armor. Same height. One chose the sword. One was never given it.
            Cold-blooded. Clawed. Blue. The reptilian brain does not disappear.
            It either gets the sword — or it takes control.
          </p>

          <div className="gold-line opacity-20 max-w-xs mx-auto mb-8" />

          <p className="font-garamond text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
            Every human carries all three.{" "}
            <span className="text-gold font-bold">The film is about the choice between them.</span>
          </p>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 flex items-center gap-4">
          <div className="gold-line flex-1 opacity-30" />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: "hsl(var(--gold))", opacity: 0.4 }} />
          <div className="gold-line flex-1 opacity-30" />
        </div>
      </div>
    </section>
  );
}
