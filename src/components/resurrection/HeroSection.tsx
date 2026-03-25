import { useEffect, useState } from "react";

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      {/* Radial background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(43 96% 48%) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64"
          style={{ background: "linear-gradient(0deg, hsl(0 0% 4%) 0%, transparent 100%)" }}
        />
      </div>

      {/* Top rule */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 gold-line opacity-50" />

      {/* Pre-title */}
      <p
        className={`font-cinzel text-xs tracking-[0.5em] text-muted-foreground uppercase mb-8 transition-all duration-700 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: "100ms" }}
      >
        An Original Universe · He-Maniac
      </p>

      {/* HE — MAN split */}
      <div
        className={`flex items-center gap-0 transition-all duration-1000 ${revealed ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "400ms" }}
      >
        {/* HE */}
        <div className="text-right">
          <span
            className="font-cinzel-deco font-black leading-none select-none"
            style={{
              fontSize: "clamp(5rem, 18vw, 14rem)",
              color: "hsl(var(--bone))",
              letterSpacing: "-0.02em",
              opacity: 0.55,
            }}
          >
            HE
          </span>
        </div>

        {/* Divider — cross */}
        <div className="flex flex-col items-center mx-4 md:mx-8 gap-2">
          <div className="w-px h-16 md:h-24" style={{ background: "hsl(var(--gold))", opacity: 0.6 }} />
          <div
            className="w-4 h-4 rotate-45 border-2 border-gold pulse-gold"
            style={{ borderColor: "hsl(var(--gold))" }}
          />
          <div className="w-px h-16 md:h-24" style={{ background: "hsl(var(--gold))", opacity: 0.6 }} />
        </div>

        {/* MAN */}
        <div className="text-left">
          <span
            className="font-cinzel-deco font-black leading-none select-none glow-gold"
            style={{
              fontSize: "clamp(5rem, 18vw, 14rem)",
              color: "hsl(var(--gold))",
              letterSpacing: "-0.02em",
            }}
          >
            MAN
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <div
        className={`mt-6 text-center transition-all duration-700 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionDelay: "700ms" }}
      >
        <p className="font-garamond italic text-muted-foreground text-lg md:text-2xl max-w-xl mx-auto px-6">
          The disguise was always Adam. The truth was always He-Man.
        </p>
        <p className="font-cinzel text-xs tracking-[0.4em] mt-4 text-gold uppercase opacity-70">
          The Resurrection
        </p>
        <div className="mt-8 border border-gold border-opacity-20 px-8 py-5 max-w-sm mx-auto" style={{ borderColor: "hsl(var(--gold) / 0.2)" }}>
          <p className="font-cinzel text-[9px] tracking-[0.45em] uppercase leading-loose" style={{ color: "hsl(var(--bone))", opacity: 0.7 }}>
            For the ones who grew up with him.<br />
            Not a reboot. Not a reimagining.<br />
            A motion picture that tells the truth<br />
            that was always there.
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 md:gap-5">
          <span
            className="font-cinzel text-[10px] md:text-xs tracking-[0.35em] uppercase"
            style={{ color: "hsl(var(--bone))", opacity: 0.5 }}
          >
            Inspired by 1983
          </span>
          <span className="text-muted-foreground opacity-30 text-xs">·</span>
          <span
            className="font-cinzel text-[10px] md:text-xs tracking-[0.35em] uppercase"
            style={{ color: "hsl(var(--bone))", opacity: 0.5 }}
          >
            Mark Taylor
          </span>
          <span className="text-muted-foreground opacity-30 text-xs">·</span>
          <span
            className="font-cinzel text-[10px] md:text-xs tracking-[0.35em] uppercase glow-gold-sm"
            style={{ color: "hsl(var(--gold))" }}
          >
            He-Maniac
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 flex flex-col items-center gap-3 transition-all duration-700 ${revealed ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "1200ms" }}
      >
        <span className="font-cinzel text-[10px] tracking-[0.4em] text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: "hsl(var(--border))" }}>
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              height: "40%",
              background: "hsl(var(--gold))",
              animation: "scrollDown 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
