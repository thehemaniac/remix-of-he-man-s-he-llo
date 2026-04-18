import SiteLayout from "@/components/layout/SiteLayout";

export default function Disclaimer() {
  return (
    <SiteLayout narrow>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8">
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
          Disclaimer
        </p>
        <div className="font-garamond text-lg md:text-xl text-foreground/85 leading-relaxed space-y-4">
          <p>He-Maniac is an independent creative project.</p>
          <p>Inspired by He-Man and the Masters of the Universe (1983–1985).</p>
          <p>Not affiliated with the rights holders.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
