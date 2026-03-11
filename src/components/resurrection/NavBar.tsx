export default function NavBar() {
  const sections = [
    { label: "The Name", href: "#name" },
    { label: "Trinity", href: "#trinity" },
    { label: "Origin", href: "#origin" },
    { label: "Bloodline", href: "#bloodline" },
    { label: "Grayskull", href: "#grayskull" },
    { label: "Episodes", href: "#episodes" },
    { label: "Authority", href: "#authority" },
    { label: "Canon", href: "#canon" },
    { label: "Manifesto", href: "#manifesto" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-sm"
      style={{ background: "hsl(var(--void) / 0.92)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a
          href="#"
          className="font-cinzel-deco font-black text-sm text-gold glow-gold-sm tracking-widest shrink-0"
        >
          HE — MAN
        </a>

        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="font-cinzel text-[10px] tracking-[0.3em] text-muted-foreground hover:text-gold transition-colors duration-300 uppercase"
            >
              {s.label}
            </a>
          ))}
        </div>

        <span className="font-cinzel text-[9px] tracking-[0.3em] text-gold opacity-50 uppercase shrink-0">
          The Resurrection
        </span>
      </div>
    </nav>
  );
}
