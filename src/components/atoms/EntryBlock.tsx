import { ReactNode } from "react";

interface EntryBlockProps {
  label?: string;
  title?: string;
  children: ReactNode;
}

export default function EntryBlock({ label, title, children }: EntryBlockProps) {
  return (
    <section className="space-y-6">
      {label && (
        <p className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase opacity-80">
          {label}
        </p>
      )}
      {title && (
        <h2 className="font-cinzel text-2xl md:text-3xl text-bone">{title}</h2>
      )}
      <div className="font-garamond text-lg md:text-xl text-foreground/85 space-y-4 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
