export default function EpisodesSection() {
  const episodes = [
    {
      code: "S1·E15",
      title: "Prince Adam No More",
      year: "1983",
      signal: "The Duality Crisis",
      clue: "Adam questions whether to give up the power entirely. He nearly does. The weight of carrying the truth alone — while his own father calls him a disappointment — is explored directly. This episode names the central wound.",
    },
    {
      code: "S1 Special",
      title: "Teela's Quest",
      year: "1983",
      signal: "The Earth Blood Revelation",
      clue: "Adam's mother Queen Marlena is confirmed as a Terran astronaut from Earth who crash-landed on Eternia. The hybrid bloodline is established as canon. The upgrade that makes Adam more powerful than any Eternian is his mother's heritage.",
    },
    {
      code: "S2·E73",
      title: "Origin of the Sorceress",
      year: "1984",
      signal: "The Two Swords",
      clue: "The previous Sorceress entrusts Teela Na with both the Sword of Power AND the Sword of Protection before Adam was born. Two swords. Two destinies. Twin warriors. The castle was holding them both across centuries.",
    },
    {
      code: "Feature Film",
      title: "The Secret of the Sword",
      year: "1985",
      signal: "The Missing Twin",
      clue: "Adam's twin sister Adora was stolen at birth by Hordak. His entire life — his identity, his power, his destiny — was incomplete without knowing she existed. He-Man's resurrection cannot be complete without She-Ra's.",
    },
    {
      code: "2002·E1-3",
      title: "The Beginning",
      year: "2002",
      signal: "The First Transformation on Screen",
      clue: "The only version that shows the first transformation in cinematic detail. Adam flees the battlefield — the coward narrative is live — runs to Grayskull, receives the sword, says the words for the first time. Witnessed by Cringer and Orko. The birth of He-Man is shown, not told.",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-ash overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="gold-line flex-1" />
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">Layer VI — The Canon Clues</span>
          <div className="gold-line flex-1" />
        </div>

        <h2 className="font-cinzel font-bold text-3xl md:text-5xl text-center text-foreground mb-6 leading-tight">
          Five Episodes That Hold<br />
          <span className="text-gold glow-gold-sm">The Full Truth</span>
        </h2>

        <p className="font-garamond italic text-muted-foreground text-xl text-center max-w-2xl mx-auto mb-20">
          We are not writing fiction. We are reading the signal that was always present. 
          These episodes are not source material to adapt — they are testimony to decode.
        </p>

        {/* Episode cards */}
        <div className="space-y-4">
          {episodes.map((ep, i) => (
            <div
              key={ep.title}
              className="border border-border bg-background hover:border-gold transition-all duration-500 group"
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-0">
                {/* Left — metadata */}
                <div
                  className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border md:w-48 flex md:flex-col justify-between md:justify-start gap-4 md:gap-2"
                >
                  <div>
                    <p className="font-cinzel font-bold text-gold text-xs tracking-widest group-hover:glow-gold-sm transition-all">
                      {ep.code}
                    </p>
                    <p className="font-cinzel text-muted-foreground text-[10px] tracking-widest mt-1">{ep.year}</p>
                  </div>
                  <div
                    className="hidden md:block w-full gold-line opacity-20 group-hover:opacity-60 transition-opacity my-3"
                  />
                  <p className="font-cinzel text-[9px] tracking-[0.3em] text-gold opacity-60 uppercase">
                    {ep.signal}
                  </p>
                </div>

                {/* Right — content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-cinzel font-bold text-foreground text-base md:text-lg mb-4 group-hover:text-gold transition-colors duration-300">
                    {ep.title}
                  </h3>
                  <p className="font-garamond text-muted-foreground text-base md:text-lg leading-relaxed">
                    {ep.clue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
