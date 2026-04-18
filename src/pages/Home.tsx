import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";

export default function Home() {
  return (
    <SiteLayout narrow>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-12">
        <div className="space-y-4">
          <h1
            className="text-5xl md:text-7xl text-gold glow-gold pulse-gold tracking-[0.15em]"
            style={{ fontFamily: "'Cinzel Decorative', serif", fontWeight: 900 }}
          >
            HE-MANIAC
          </h1>
          <p className="font-garamond italic text-muted-foreground text-base md:text-lg">
            A personal record from the Filmation universe (1983–1985)
          </p>
        </div>

        <div className="font-garamond text-foreground/85 text-lg md:text-xl leading-relaxed max-w-xl space-y-4">
          <p>
            The original Filmation series ran for 130 episodes,
            introducing Eternia and its characters to a generation.
          </p>
          <p>He-Man, Skeletor, Man-At-Arms, Teela.</p>
          <p>A world where fantasy, science, and myth coexisted.</p>
          <p className="italic text-gold/80">This is where it started.</p>
        </div>

        <div className="flex items-center gap-4 w-full max-w-sm">
          <div className="gold-line flex-1 opacity-40" />
          <div
            className="w-1.5 h-1.5 rotate-45 opacity-60"
            style={{ background: "hsl(var(--gold))" }}
          />
          <div className="gold-line flex-1 opacity-40" />
        </div>

        <div className="space-y-3">
          <p className="font-cinzel text-[10px] tracking-[0.5em] text-muted-foreground uppercase">
            Current Focus
          </p>
          <p className="font-cinzel text-xl md:text-2xl text-gold tracking-wide">
            Making of Castle Grayskull
          </p>
        </div>

        <Link
          to="/projects/castle-grayskull"
          className="inline-block border border-gold px-12 py-3 font-cinzel text-xs tracking-[0.5em] text-gold uppercase hover:bg-gold hover:text-primary-foreground transition-colors duration-500"
        >
          Enter
        </Link>
      </div>
    </SiteLayout>
  );
}
