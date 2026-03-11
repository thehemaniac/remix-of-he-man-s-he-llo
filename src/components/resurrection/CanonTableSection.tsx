const VERSIONS = [
  { short: "Filmation", year: "1983", full: "Filmation Series" },
  { short: "1987 Film", year: "1987", full: "Live Action Film" },
  { short: "200X / MYP", year: "2002", full: "200X Series" },
  { short: "Revelation", year: "2021", full: "Masters: Revelation" },
  { short: "Revolution", year: "2024", full: "He-Man & The Masters" },
  { short: "MGM Film", year: "2026", full: "MGM Film" },
];

// ✓ = canon accurate | ~ = partially | ✗ = removed/wrong | ? = unknown
type Mark = "✓" | "~" | "✗" | "?";

interface Row {
  label: string;
  sub?: string;
  scores: Mark[];
}

interface Category {
  title: string;
  rows: Row[];
}

const CATEGORIES: Category[] = [
  {
    title: "Character Accuracy",
    rows: [
      {
        label: "Adam — light skin",
        sub: "The disguise, the privilege",
        scores: ["✓", "✗", "✓", "✗", "✗", "✗"],
      },
      {
        label: "He-Man — dark skin",
        sub: "130 episodes of transformation detail",
        scores: ["✓", "✗", "~", "✗", "✗", "✗"],
      },
      {
        label: "Skin visibly transforms",
        sub: "The change is visible, not implied",
        scores: ["✓", "✗", "~", "✗", "✗", "✗"],
      },
      {
        label: "Same body — Adam is He-Man",
        sub: "The Clark Kent model — one soul",
        scores: ["✓", "✓", "✓", "✓", "~", "✗"],
      },
      {
        label: "Skeletor — blue skin / skull",
        sub: "Cold supernatural design intact",
        scores: ["✓", "~", "✓", "✓", "✓", "~"],
      },
    ],
  },
  {
    title: "Transformation Integrity",
    rows: [
      {
        label: "Sword raised — deliberate choice",
        sub: "Power is chosen, not bestowed",
        scores: ["✓", "✓", "✓", "~", "~", "?"],
      },
      {
        label: "Transformation carries weight",
        sub: "The change costs something",
        scores: ["✓", "~", "✓", "✗", "✗", "?"],
      },
    ],
  },
  {
    title: "Story Integrity",
    rows: [
      {
        label: "Adam is a Prince",
        sub: "Born privileged — sacrifice has meaning",
        scores: ["✓", "✗", "✓", "✓", "✓", "~"],
      },
      {
        label: "Castle Grayskull — sacred space",
        sub: "Not a set piece or battle stage",
        scores: ["✓", "✗", "✓", "~", "~", "?"],
      },
      {
        label: "Earth bloodline — Queen Marlena",
        sub: "Adam as hybrid: two worlds, one body",
        scores: ["✓", "✗", "✓", "✗", "✗", "✗"],
      },
    ],
  },
  {
    title: "Mythology & Deep Canon",
    rows: [
      {
        label: "Maccabean subtext",
        sub: "Halperin's buried code, confirmed 2025",
        scores: ["✓", "✗", "✓", "✗", "✗", "✗"],
      },
      {
        label: "The Trinity — three states, one soul",
        sub: "Adam / He-Man / The Power unified",
        scores: ["✓", "~", "✓", "~", "~", "✗"],
      },
      {
        label: "Genesis parallel",
        sub: "The sword as return, not exile",
        scores: ["✓", "✗", "~", "✗", "✗", "✗"],
      },
    ],
  },
];

// Canon scores per version (out of 13 criteria)
const SCORES = ["13/13", "4/13", "11/13", "4/13", "4/13", "1/13"];

function MarkBadge({ mark }: { mark: Mark }) {
  const styles: Record<Mark, string> = {
    "✓": "text-gold border-gold-dim bg-gold/5",
    "~": "text-muted-foreground border-border bg-muted/20",
    "✗": "text-blood border-blood/30 bg-blood/5",
    "?": "text-bone/40 border-border/40 bg-transparent",
  };
  return (
    <span
      className={`inline-flex items-center justify-center w-7 h-7 rounded-sm border font-cinzel text-sm font-bold ${styles[mark]}`}
    >
      {mark}
    </span>
  );
}

export default function CanonTableSection() {
  return (
    <section className="py-24 px-6 bg-ash relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--gold)) 0px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold/60 uppercase mb-4">
            Layer VI
          </p>
          <div className="gold-line w-24 mx-auto mb-6 opacity-40" />
          <h2 className="font-cinzel-deco text-2xl md:text-3xl text-gold glow-gold-sm tracking-wider mb-4">
            The Record
          </h2>
          <p className="font-garamond italic text-muted-foreground text-lg max-w-2xl mx-auto">
            Every production measured against the same fixed canon. No
            subjectivity. No opinion. Only what the original source material
            contains.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {(
            [
              { mark: "✓", label: "Canon Accurate" },
              { mark: "~", label: "Partially Accurate" },
              { mark: "✗", label: "Removed / Incorrect" },
              { mark: "?", label: "Unknown / Unconfirmed" },
            ] as { mark: Mark; label: string }[]
          ).map(({ mark, label }) => (
            <div key={mark} className="flex items-center gap-2">
              <MarkBadge mark={mark} />
              <span className="font-garamond text-sm text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Scrollable table wrapper */}
        <div className="overflow-x-auto rounded-sm border border-border">
          <table className="w-full min-w-[780px] border-collapse">
            {/* Column headers */}
            <thead>
              <tr className="border-b border-border">
                <th className="sticky left-0 z-10 bg-ash p-4 text-left min-w-[200px] border-r border-border">
                  <span className="font-cinzel text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
                    Criterion
                  </span>
                </th>
                {VERSIONS.map((v) => (
                  <th
                    key={v.year}
                    className="p-4 text-center min-w-[100px] border-r border-border last:border-r-0"
                  >
                    <span className="block font-cinzel text-[10px] tracking-[0.2em] text-gold leading-tight">
                      {v.short}
                    </span>
                    <span className="block font-garamond italic text-muted-foreground text-xs mt-0.5">
                      {v.year}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {CATEGORIES.map((cat, ci) => (
                <>
                  {/* Category divider row */}
                  <tr
                    key={`cat-${ci}`}
                    className="border-b border-border"
                    style={{ background: "hsl(var(--void))" }}
                  >
                    <td
                      colSpan={VERSIONS.length + 1}
                      className="sticky left-0 px-4 py-2"
                      style={{ background: "hsl(var(--void))" }}
                    >
                      <span className="font-cinzel text-[9px] tracking-[0.4em] text-gold/70 uppercase">
                        {cat.title}
                      </span>
                    </td>
                  </tr>

                  {/* Criterion rows */}
                  {cat.rows.map((row, ri) => (
                    <tr
                      key={`row-${ci}-${ri}`}
                      className="border-b border-border hover:bg-muted/10 transition-colors"
                    >
                      <td className="sticky left-0 z-10 bg-ash p-4 border-r border-border">
                        <span className="block font-garamond text-sm text-foreground leading-snug">
                          {row.label}
                        </span>
                        {row.sub && (
                          <span className="block font-garamond italic text-xs text-muted-foreground mt-0.5">
                            {row.sub}
                          </span>
                        )}
                      </td>
                      {row.scores.map((mark, vi) => (
                        <td
                          key={vi}
                          className="p-4 text-center border-r border-border last:border-r-0"
                        >
                          <MarkBadge mark={mark} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}

              {/* Score totals row */}
              <tr style={{ background: "hsl(var(--void))" }}>
                <td className="sticky left-0 z-10 p-4 border-r border-border"
                  style={{ background: "hsl(var(--void))" }}>
                  <span className="font-cinzel text-[9px] tracking-[0.4em] text-gold/70 uppercase">
                    Canon Score
                  </span>
                </td>
                {SCORES.map((score, i) => (
                  <td
                    key={i}
                    className="p-4 text-center border-r border-border last:border-r-0"
                  >
                    <span
                      className={`font-cinzel text-sm font-bold tracking-wider ${
                        score === "13/13"
                          ? "text-gold glow-gold-sm"
                          : score.startsWith("11")
                          ? "text-gold/70"
                          : score.startsWith("1/")
                          ? "text-blood"
                          : "text-muted-foreground"
                      }`}
                    >
                      {score}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Closing statement */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="gold-line w-16 opacity-30" />
            <div
              className="w-1.5 h-1.5 rotate-45 opacity-40"
              style={{ background: "hsl(var(--gold))" }}
            />
            <div className="gold-line w-16 opacity-30" />
          </div>
          <blockquote className="font-garamond italic text-foreground/80 text-lg leading-relaxed mb-4">
            "Every studio had a budget. Every reboot had consultants. Every
            production had lawyers, executives, and market research. One stayed
            up until 6:30am with a source document and a question:{" "}
            <em className="text-gold">what does the original actually say?</em>"
          </blockquote>
          <p className="font-cinzel text-[9px] tracking-[0.5em] text-muted-foreground uppercase">
            The Resurrection — grounded entirely in canon
          </p>
        </div>
      </div>
    </section>
  );
}
