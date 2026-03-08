export default function ManifestoSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-void">
      {/* Full background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(43 96% 48% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">The Manifesto</span>
          <div className="gold-line flex-1" />
        </div>

        {/* The cross symbol */}
        <div className="mb-16 flex items-center justify-center">
          <div className="relative w-16 h-16">
            <div
              className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
              style={{ background: "hsl(var(--gold))", boxShadow: "0 0 10px hsl(43 96% 48% / 0.6)" }}
            />
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "hsl(var(--gold))", boxShadow: "0 0 10px hsl(43 96% 48% / 0.6)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border-2 border-gold bg-void pulse-gold"
            />
          </div>
        </div>

        <h2 className="font-cinzel-deco font-black text-4xl md:text-6xl text-gold glow-gold mb-12 leading-tight">
          The Resurrection
        </h2>

        <div className="space-y-8 font-garamond text-foreground text-xl md:text-2xl leading-relaxed">
          <p>
            For 40 years, the most powerful being in the universe was hidden inside a coward.
          </p>
          <div className="gold-line opacity-30" />
          <p>
            His birth was foretold in ancient legends. His power was forged before he was born.
            The castle waited centuries for him. The sword was already there.
          </p>
          <div className="gold-line opacity-30" />
          <p>
            He was not the prince the world saw. He was the warrior the world was not ready for.
          </p>
          <div className="gold-line opacity-30" />
          <p>
            <span className="text-gold font-bold">We are not creating a new story.</span><br />
            We are following the clues the creators buried — and making the truth they always intended, 
            finally, undeniably, irrevocably real.
          </p>
          <div className="gold-line opacity-30" />
          <p className="font-cinzel font-bold text-2xl md:text-3xl text-gold glow-gold tracking-widest">
            I HAVE THE POWER.
          </p>
          <div className="gold-line opacity-30" />
          <p className="font-garamond italic text-xl md:text-2xl leading-relaxed" style={{ color: "hsl(var(--bone))", opacity: 0.85 }}>
            If you were 8 years old in 1983, you understood something your parents did not explain.
            You felt the weight of the transformation. You felt the choice it represented.
          </p>
          <div className="gold-line opacity-30" />
          <p className="font-garamond text-xl md:text-2xl leading-relaxed">
            You were right.{" "}
            <span className="text-gold font-bold">This is that film — finally made for who you are now.</span>
          </p>
        </div>

        {/* Bottom rule */}
        <div className="mt-20 flex items-center gap-4">
          <div className="gold-line flex-1" />
          <div className="w-2 h-2 rotate-45 bg-gold" style={{ background: "hsl(var(--gold))" }} />
          <div className="gold-line flex-1" />
        </div>

        {/* Canon foundation */}
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            { label: "Series Bible", date: "1982" },
            { label: "Episodes Analyzed", date: "4 Key Canon Sources" },
            { label: "Mark Taylor's Vision", date: "Original Creator" },
          ].map((item) => (
            <div key={item.label} className="border border-border p-4 hover:border-gold transition-colors duration-500">
              <p className="font-cinzel font-bold text-gold text-xs tracking-widest mb-1">{item.date}</p>
              <p className="font-garamond text-muted-foreground text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
