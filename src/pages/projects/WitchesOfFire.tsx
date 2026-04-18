import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";

export default function WitchesOfFire() {
  return (
    <SiteLayout narrow>
      <Link
        to="/projects"
        className="font-cinzel text-[10px] tracking-[0.4em] text-muted-foreground hover:text-gold uppercase transition-colors"
      >
        ← Projects
      </Link>

      <header className="mt-12 mb-12 space-y-4">
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
          Project IV
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl text-bone">
          Making of the Witches of Fire
        </h1>
      </header>

      <p className="font-garamond italic text-muted-foreground text-lg">
        Not opened yet.
      </p>
    </SiteLayout>
  );
}
