interface ImagePlaceholderProps {
  caption?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  label?: string;
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
}: ImagePlaceholderProps) {
  return (
    <figure className="space-y-2">
      <div
        className={`${aspectMap[aspect]} w-full border border-gold-dim/40 bg-ash flex items-center justify-center`}
      >
        <span className="font-cinzel text-[9px] tracking-[0.4em] text-muted-foreground uppercase opacity-60">
          {label}
        </span>
      </div>
      {caption && (
        <figcaption className="font-cinzel text-[9px] tracking-[0.3em] text-muted-foreground uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
