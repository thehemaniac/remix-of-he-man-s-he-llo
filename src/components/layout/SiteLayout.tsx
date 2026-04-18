import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

interface SiteLayoutProps {
  children: ReactNode;
  narrow?: boolean;
}

export default function SiteLayout({ children, narrow = false }: SiteLayoutProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SiteNav />
      <main
        key={pathname}
        className={`pt-[57px] flex-1 fade-in-up ${
          narrow ? "max-w-2xl" : "max-w-4xl"
        } mx-auto px-6 md:px-10 w-full`}
      >
        <div className="py-16 md:py-24">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
