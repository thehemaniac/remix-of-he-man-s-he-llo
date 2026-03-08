const trilogy = [
  {
    title: "REVELATION",
    year: "2021",
    studio: "Netflix · Kevin Smith",
    verdict: "He-Man died in Episode 1. The story became Teela's.",
    sub: "He-Man revealed as a lie. Then killed.",
    variant: "blood",
  },
  {
    title: "REVOLUTION",
    year: "2024",
    studio: "Netflix · Sequel Series",
    verdict: "He-Man remained the vehicle. Still not his story.",
    sub: "A new direction. Still not his story.",
    variant: "blood",
  },
  {
    title: "RESURRECTION",
    year: "—",
    studio: "No Studio · No Commission",
    verdict: "He-Man is the destination. Canon. Only canon.",
    sub: "The word that ends the trilogy. The retrieval.",
    variant: "gold",
  },
];

export default function NoCommissionSection() {
  const studios = [
    {
      label: "Revelation (2021)",
      tag: "Netflix / Kevin Smith",
      items: [
        "Story built around He-Man",
        "He-Man dies in Episode 1",
        "Teela becomes the protagonist",
        "Commissioned. Paid. Motivated.",
      ],
      accent: "blood",
    },
    {
      label: "He-Man (2021 CGI)",
      tag: "Netflix / CGI Reboot",
      items: [
        "Character redesigned for new audience",
        "Origin story invented",
        "New mythology imposed",
        "IP licensed. Budget approved. Delivered.",
      ],
      accent: "blood",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-ash overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, hsl(var(--blood) / 0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, hsl(var(--gold) / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
            The Authority
          </span>
          <div className="gold-line flex-1" />
        </div>

        <h2 className="font-cinzel font-bold text-3xl md:text-5xl text-center text-foreground mb-6 leading-tight">
          They named it. They named it again.
          <br />
          <span className="text-gold glow-gold-sm">Then we named it.</span>
        </h2>

        <p className="font-garamond text-center text-muted-foreground text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
          Two studios. Two titles. Forty years of burial. One word ends it.
        </p>

        {/* Trilogy block */}
        <div className="mb-20 space-y-px">
          {trilogy.map((entry, i) => (
            <div
              key={entry.title}
              className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-0 px-8 py-7 overflow-hidden"
              style={{
                background:
                  entry.variant === "gold"
                    ? "linear-gradient(135deg, hsl(var(--void)) 0%, hsl(var(--ash)) 100%)"
                    : "hsl(var(--void))",
                borderLeft: `3px solid ${
                  entry.variant === "gold"
                    ? "hsl(var(--gold))"
                    : "hsl(var(--blood) / 0.5)"
                }`,
              }}
            >
              {/* Top shimmer */}
              {entry.variant === "gold" && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.6), transparent)" }}
                />
              )}

              {/* Step number */}
              <span
                className="font-cinzel text-[10px] tracking-[0.4em] uppercase shrink-0 md:w-6 md:mr-8 opacity-40"
                style={{
                  color: entry.variant === "gold" ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <div className="shrink-0 md:w-64 md:mr-10">
                <span
                  className={`font-cinzel-deco font-black text-2xl md:text-3xl tracking-wider leading-none ${entry.variant === "gold" ? "glow-gold" : ""}`}
                  style={{
                    color:
                      entry.variant === "gold"
                        ? "hsl(var(--gold))"
                        : "hsl(var(--blood-bright) / 0.6)",
                  }}
                >
                  {entry.title}
                </span>
                <p
                  className="font-cinzel text-[9px] tracking-[0.4em] uppercase mt-1"
                  style={{
                    color:
                      entry.variant === "gold"
                        ? "hsl(var(--gold) / 0.5)"
                        : "hsl(var(--muted-foreground) / 0.6)",
                  }}
                >
                  {entry.studio}
                </p>
              </div>

              {/* Divider */}
              <div
                className="hidden md:block shrink-0 mx-6 h-8 w-px"
                style={{
                  background:
                    entry.variant === "gold"
                      ? "hsl(var(--gold) / 0.25)"
                      : "hsl(var(--border))",
                }}
              />

              {/* Verdict */}
              <p
                className="font-garamond italic text-base md:text-lg flex-1"
                style={{
                  color:
                    entry.variant === "gold"
                      ? "hsl(var(--foreground))"
                      : "hsl(var(--muted-foreground))",
                }}
              >
                {entry.verdict}
              </p>

              {/* Year badge */}
              <span
                className="shrink-0 md:ml-8 font-cinzel text-xs tracking-widest"
                style={{
                  color:
                    entry.variant === "gold"
                      ? "hsl(var(--gold))"
                      : "hsl(var(--muted-foreground) / 0.5)",
                }}
              >
                {entry.year}
              </span>
            </div>
          ))}
        </div>

        {/* Every Studio Had a Motive sub-heading */}
        <div className="flex items-center gap-4 mb-10">
          <div className="gold-line flex-1 opacity-40" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-muted-foreground uppercase">
            The Pattern
          </span>
          <div className="gold-line flex-1 opacity-40" />
        </div>

        <h3 className="font-cinzel font-bold text-2xl md:text-4xl text-center text-foreground mb-6 leading-tight">
          Every Studio Had a Motive.
          <br />
          <span className="text-gold glow-gold-sm">We Have None.</span>
        </h3>

        <p className="font-garamond text-center text-muted-foreground text-lg md:text-xl mb-20 max-w-2xl mx-auto leading-relaxed">
          That is not a weakness. That is the only credential that matters.
        </p>

        {/* Two-column contrast */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {studios.map((studio) => (
            <div
              key={studio.label}
              className="border border-border p-8 relative"
              style={{ background: "hsl(var(--void) / 0.6)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--blood) / 0.5), transparent)" }}
              />
              <div className="mb-6">
                <p className="font-cinzel text-[9px] tracking-[0.4em] text-muted-foreground uppercase mb-1">
                  {studio.tag}
                </p>
                <h3
                  className="font-cinzel font-bold text-base tracking-widest"
                  style={{ color: "hsl(var(--blood-bright))" }}
                >
                  {studio.label}
                </h3>
              </div>
              <ul className="space-y-3">
                {studio.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 shrink-0 rotate-45"
                      style={{ background: "hsl(var(--blood) / 0.6)", display: "inline-block" }}
                    />
                    <span className="font-garamond text-muted-foreground text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* The central statement */}
        <div
          className="p-10 md:p-14 text-center mb-16 relative"
          style={{
            background: "linear-gradient(135deg, hsl(var(--void)) 0%, hsl(var(--ash)) 100%)",
            border: "1px solid hsl(var(--gold) / 0.3)",
            boxShadow: "0 0 60px hsl(var(--gold) / 0.06)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.6), transparent)" }}
          />
          <p className="font-garamond italic text-foreground text-xl md:text-3xl leading-relaxed mb-6">
            "When you are paid to make entertainment,
            the character is a vehicle.
            <br className="hidden md:block" />
            <span className="text-gold"> When you have no motive, the character is the destination."</span>
          </p>
          <p className="font-garamond text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Kevin Smith was hired. We were not.
            A studio has shareholders. A license has conditions. A motive has a direction.{" "}
            <span className="text-foreground">We have none of these. That is why we can go where they cannot.</span>
          </p>
        </div>

        {/* Three-column comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden">
          {[
            {
              title: "Revelation (2021)",
              sub: "Netflix · Kevin Smith",
              lines: ["Story built around He-Man", "He-Man dies — Episode 1", "Entertainment over essence"],
              variant: "dim",
            },
            {
              title: "He-Man (2021 CGI)",
              sub: "Netflix · CGI Series",
              lines: ["Character redesigned", "New origin invented", "Audience over author"],
              variant: "dim",
            },
            {
              title: "The Resurrection",
              sub: "No Studio · No Commission",
              lines: ["Character decoded", "No invention. Retrieval.", "Canon. Only canon."],
              variant: "gold",
            },
          ].map((col) => (
            <div
              key={col.title}
              className="p-8 text-center"
              style={{
                background:
                  col.variant === "gold"
                    ? "linear-gradient(180deg, hsl(var(--void)) 0%, hsl(var(--ash)) 100%)"
                    : "hsl(var(--void))",
              }}
            >
              <p
                className="font-cinzel text-[9px] tracking-[0.4em] uppercase mb-1"
                style={{
                  color:
                    col.variant === "gold"
                      ? "hsl(var(--gold))"
                      : "hsl(var(--muted-foreground))",
                }}
              >
                {col.sub}
              </p>
              <h4
                className={`font-cinzel font-bold text-sm tracking-widest mb-6 ${
                  col.variant === "gold" ? "text-gold glow-gold-sm" : ""
                }`}
                style={col.variant !== "gold" ? { color: "hsl(var(--blood-bright) / 0.7)" } : {}}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.lines.map((line) => (
                  <li
                    key={line}
                    className="font-garamond text-base"
                    style={{
                      color:
                        col.variant === "gold"
                          ? "hsl(var(--foreground))"
                          : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
              {col.variant === "gold" && (
                <div className="mt-8">
                  <div
                    className="h-px w-full"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.5), transparent)" }}
                  />
                  <p className="font-cinzel text-[9px] tracking-[0.4em] text-gold uppercase mt-4 opacity-70">
                    No Commission. No Fabrication.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
