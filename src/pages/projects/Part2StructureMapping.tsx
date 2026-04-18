import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";

export default function Part2StructureMapping() {
  return (
    <SiteLayout narrow>
      <Link
        to="/projects/castle-grayskull"
        className="font-cinzel text-[10px] tracking-[0.4em] text-muted-foreground hover:text-gold uppercase transition-colors"
      >
        ← Castle Grayskull
      </Link>

      <header className="mt-12 mb-12 space-y-4">
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">
          Part 2
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl text-bone">
          Structure Mapping
        </h1>
      </header>

      <p className="font-garamond italic text-muted-foreground text-lg">
        Not opened yet.
      </p>
    </SiteLayout>
  );
}
