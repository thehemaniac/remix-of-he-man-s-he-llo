interface ImagePlaceholderProps {
  caption?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  label?: string;
  tone?: "primary" | "secondary";
  index?: number;
}

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export default function ImagePlaceholder({
  caption,
  aspect = "video",
  label = "image",
  tone = "primary",
  index,
}: ImagePlaceholderProps) {
  const isSecondary = tone === "secondary";

  return (
    <figure className={`space-y-2 ${isSecondary ? "opacity-70" : ""}`}>
      <div
        className={`relative ${aspectMap[aspect]} w-full border ${
          isSecondary ? "border-border bg-ash/60" : "border-gold-dim/40 bg-ash"
        } flex items-center justify-center`}
      >
        {typeof index === "number" && (
          <span
            className={`absolute top-2 left-2 font-cinzel text-[9px] tracking-[0.3em] uppercase ${
              isSecondary ? "text-muted-foreground/70" : "text-gold/80"
            }`}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        <span
          className={`font-cinzel text-[9px] tracking-[0.4em] uppercase ${
            isSecondary
              ? "text-muted-foreground/60 opacity-60"
              : "text-muted-foreground opacity-60"
          }`}
        >
          {label}
        </span>
      </div>
      {caption && (
        <figcaption
          className={`font-cinzel text-[9px] tracking-[0.3em] uppercase ${
            isSecondary ? "text-muted-foreground/70" : "text-muted-foreground"
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
