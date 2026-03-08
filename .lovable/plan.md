
## What Needs to Change

The current `skeletor.png` is a full-body shot (head to feet) while the `adam-heman.png` source is a tight portrait (head to upper thigh/groin). When all three panels share the same `aspect-[3/4]` container, Skeletor appears shrunken and full-body while Adam and He-Man appear large and intimate — destroying the mirror illusion.

### The Fix: Regenerate skeletor.png with matching framing

Generate a new Skeletor image with:

- **Framing**: Same tight portrait crop as He-Man — head at top, frame cuts off at approximately the groin/upper thigh (same as the He-Man right half of the source image)
- **Pose**: Standing front-facing, arms at sides or slightly forward — matching He-Man's relaxed powerful stance
- **Body**: Exact same muscular build and proportions as He-Man in the existing image
- **Skin**: Pure cold blue — no warmth, no orange tones
- **Nothing on the body**: No sword, no loincloth, no armor, no accessories — bare blue skin only
- **Hair**: Same orange/rust hair as He-Man (same character, different skin)
- **Background**: Same fiery orange/red atmospheric fire background as the source image
- **Style**: Same cinematic realistic 3D render style

### The CSS Fix: Align object-position

Currently Skeletor panel uses `objectPosition: "center top"`. Once the new image is framed identically to the He-Man crop, this should become `objectPosition: "center center"` — since the image will already be the right crop, no CSS repositioning needed.

### Files to Change

1. **Regenerate** `src/assets/skeletor.png` — new image with tight portrait framing, matching He-Man's crop, pure blue skin, no clothing, no sword
2. **Edit** `src/components/resurrection/TrinitySection.tsx` — fix the `objectPosition` on the Skeletor panel from `"center top"` to `"center center"`

### What Stays the Same

- The three-panel grid layout
- All color overlays and border treatments
- Adam and He-Man panels (untouched)
- All text content below

### Visual Result

```text
┌─────────────────┬─────────────────┬─────────────────┐
│  HEAD           │  HEAD           │  HEAD (blue)    │
│                 │                 │                 │
│  TORSO (dim)    │  TORSO (gold)   │  TORSO (blue)   │
│                 │                 │                 │
│  ~GROIN CUT     │  ~GROIN CUT     │  ~GROIN CUT     │
│  [bone border]  │  [gold glow]    │  [reptile blue] │
└─────────────────┴─────────────────┴─────────────────┘
Same frame. Same body height. Same scale. Only the skin differs.
```
