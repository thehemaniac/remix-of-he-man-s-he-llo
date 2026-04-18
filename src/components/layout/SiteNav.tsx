import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Disclaimer", to: "/disclaimer" },
];

export default function SiteNav() {
  useLocation();
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-sm"
      style={{ background: "hsl(var(--void) / 0.92)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="font-cinzel-deco font-black text-sm text-gold glow-gold-sm tracking-widest shrink-0"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          HE — MANIAC
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-cinzel text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                  isActive ? "text-gold" : "text-muted-foreground hover:text-gold"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
