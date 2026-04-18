export default function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 text-center bg-void mt-24">
      <p className="font-cinzel text-[9px] tracking-[0.5em] text-muted-foreground uppercase mb-2">
        He-Maniac
      </p>
      <p className="font-garamond italic text-muted-foreground text-sm">
        Inspired by He-Man and the Masters of the Universe (1983–1985).
      </p>
      <p className="font-garamond italic text-muted-foreground text-sm">
        A private record.
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="gold-line w-24 opacity-30" />
        <div
          className="w-1.5 h-1.5 rotate-45 opacity-40"
          style={{ background: "hsl(var(--gold))" }}
        />
        <div className="gold-line w-24 opacity-30" />
      </div>
    </footer>
  );
}
