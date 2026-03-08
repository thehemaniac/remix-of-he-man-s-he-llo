import NavBar from "@/components/resurrection/NavBar";
import HeroSection from "@/components/resurrection/HeroSection";
import TheNameSection from "@/components/resurrection/TheNameSection";
import TrinitySection from "@/components/resurrection/TrinitySection";
import OriginSection from "@/components/resurrection/OriginSection";
import BloodlineSection from "@/components/resurrection/BloodlineSection";
import GrayskullSection from "@/components/resurrection/GrayskullSection";
import EpisodesSection from "@/components/resurrection/EpisodesSection";
import TaylorSection from "@/components/resurrection/TaylorSection";
import NoCommissionSection from "@/components/resurrection/NoCommissionSection";
import ManifestoSection from "@/components/resurrection/ManifestoSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <NavBar />

      <main className="pt-[57px]">
        {/* Hero */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* The Name — HE vs MAN */}
        <section id="name">
          <TheNameSection />
        </section>

        {/* The Trinity — Three faces, one body */}
        <section id="trinity">
          <TrinitySection />
        </section>

        {/* The Origin — Series Bible clues */}
        <section id="origin">
          <OriginSection />
        </section>

        {/* The Bloodline — Half Earth human */}
        <section id="bloodline">
          <BloodlineSection />
        </section>

        {/* Castle Grayskull — The testament */}
        <section id="grayskull">
          <GrayskullSection />
        </section>

        {/* Key Episodes — Canon sources */}
        <section id="episodes">
          <EpisodesSection />
        </section>

        {/* Mark Taylor — The original creator */}
        <section id="taylor">
          <TaylorSection />
        </section>

        {/* The Authority — No Commission */}
        <section id="authority">
          <NoCommissionSection />
        </section>

        {/* The Manifesto */}
        <section id="manifesto">
          <ManifestoSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 text-center bg-void">
        <p className="font-cinzel text-[9px] tracking-[0.5em] text-muted-foreground uppercase mb-2">
          He-Man: The Resurrection
        </p>
        <p className="font-garamond italic text-muted-foreground text-sm">
          Grounded entirely in canon. No invention. No fabrication. Only retrieval.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="gold-line w-24 opacity-30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold opacity-40" style={{ background: "hsl(var(--gold))" }} />
          <div className="gold-line w-24 opacity-30" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
