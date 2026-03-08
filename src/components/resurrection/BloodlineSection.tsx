export default function BloodlineSection() {
  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Gold top bar */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "hsl(var(--gold) / 0.2)" }} />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">Layer III — The Bloodline</span>
          <div className="gold-line flex-1" />
        </div>

        <h2 className="font-cinzel font-bold text-3xl md:text-5xl text-center text-foreground mb-6 leading-tight">
          The Upgrade Was Not Sorcery.<br />
          <span className="text-gold glow-gold-sm">It Was His Blood.</span>
        </h2>

        <p className="font-garamond italic text-muted-foreground text-xl text-center max-w-3xl mx-auto mb-20">
          Queen Marlena was an Earth astronaut. She crash-landed on Eternia. She fell in love with a king. 
          Their son — Adam — grew up to be smarter, more agile, stronger, and more muscular than any 
          full-blooded Eternian. The Earth blood was the upgrade the planet had never seen.
        </p>

        {/* Two worlds diagram */}
        <div className="grid md:grid-cols-3 gap-0 mb-20">
          {/* Eternia */}
          <div className="p-10 border border-border text-center group hover:bg-ash transition-colors duration-500">
            <div
              className="w-16 h-16 mx-auto mb-6 border border-border flex items-center justify-center"
              style={{ borderColor: "hsl(var(--muted-foreground))" }}
            >
              <span className="font-cinzel font-bold text-muted-foreground text-xs tracking-widest">ETR</span>
            </div>
            <h3 className="font-cinzel font-bold text-foreground text-sm tracking-widest mb-4 uppercase">Eternia</h3>
            <p className="font-garamond text-muted-foreground text-base leading-relaxed">
              Ancient planet. Magical heritage. A world of warriors, sorcerers, and kings.
              His father's line: royalty. Power through lineage and status.
            </p>
          </div>

          {/* The child */}
          <div
            className="p-10 border-y md:border border-gold flex flex-col items-center justify-center text-center relative animate-border-pulse"
          >
            <div
              className="w-20 h-20 mx-auto mb-6 rotate-45 border-2 border-gold flex items-center justify-center"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <span
                className="font-cinzel-deco font-black text-gold -rotate-45 text-2xl glow-gold-sm"
              >
                A
              </span>
            </div>
            <h3 className="font-cinzel font-bold text-gold text-sm tracking-widest mb-4 uppercase glow-gold-sm">Adam</h3>
            <p className="font-garamond italic text-foreground text-base leading-relaxed">
              The meeting point of two worlds. Neither fully Eternian. Neither fully Terran.
              Something entirely new. Something the universe had been waiting for.
            </p>
          </div>

          {/* Earth */}
          <div className="p-10 border border-border text-center group hover:bg-ash transition-colors duration-500">
            <div
              className="w-16 h-16 mx-auto mb-6 border border-border flex items-center justify-center"
              style={{ borderColor: "hsl(var(--muted-foreground))" }}
            >
              <span className="font-cinzel font-bold text-muted-foreground text-xs tracking-widest">TRN</span>
            </div>
            <h3 className="font-cinzel font-bold text-foreground text-sm tracking-widest mb-4 uppercase">Earth</h3>
            <p className="font-garamond text-muted-foreground text-base leading-relaxed">
              His mother's origin. The crashed astronaut. The outsider who became a queen.
              Her blood gave Adam what no Eternian was born with.
            </p>
          </div>
        </div>

        {/* The canon quote */}
        <div
          className="border border-border p-10 md:p-14 text-center relative"
          style={{ borderColor: "hsl(var(--gold) / 0.3)" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-background"
          >
            <span className="font-cinzel text-[9px] tracking-[0.5em] text-gold uppercase">Canon Confirmation</span>
          </div>
          <p className="font-garamond italic text-foreground text-xl md:text-2xl leading-relaxed mb-6">
            "Adam grew up to be smarter, more agile, stronger, and more muscular than any Eternian."
          </p>
          <p className="font-cinzel text-[10px] tracking-[0.4em] text-gold opacity-70 uppercase">
            Series Bible — Michael Halperin, 1982 · Confirmed in Episode: Teela's Quest, Season 1
          </p>
        </div>

        {/* The deeper truth */}
        <div className="mt-16 text-center">
          <p className="font-garamond text-foreground text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            The man who appears weak to the world carries the genetic fusion of two civilizations. 
            The disguise is a <span className="text-gold">biological fact</span>. 
            The power is also a <span className="text-gold">biological fact</span>. 
            The same body holds both truths simultaneously.
          </p>
        </div>
      </div>
    </section>
  );
}
