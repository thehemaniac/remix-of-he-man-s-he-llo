
## What the User Uploaded

`user-uploads://Trio.png` is a single cinematic image showing all three characters side by side — Adam (left, blonde, pink vest), He-Man (center, orange hair, chest armor, sword), Skeletor (right, blue skin, skull face, hood/cape) — all against the same fiery orange/red atmospheric background.

This is the perfect source: one image, three characters, already composed together.

## The Plan

### Step 1 — Copy the image to assets
- Copy `user-uploads://Trio.png` → `src/assets/trio.png`
- Remove old `src/assets/adam-heman.png` and `src/assets/skeletor.png` references (they're no longer needed)

### Step 2 — Update TrinitySection.tsx

Replace the two separate image imports with a single `trio` import, then update each panel to use `object-position` to crop the correct character from the one image:

```text
┌────────────────────┬────────────────────┬────────────────────┐
│   Adam (left 33%)  │  He-Man (mid 33%)  │ Skeletor (right 33%)│
│  objectPos: 15%    │  objectPos: 50%    │  objectPos: 85%    │
│  same src: trio    │  same src: trio    │  same src: trio    │
└────────────────────┴────────────────────┴────────────────────┘
```

- **Adam panel**: `objectPosition: "15% center"`, desaturated/dim bone overlay
- **He-Man panel**: `objectPosition: "50% center"`, gold glow border, no dim
- **Skeletor panel**: `objectPosition: "85% center"`, reptile blue border + cold vignette

All three panels share `aspect-[3/4]` — the same tight portrait framing, same scale, same background fire. Since it's one image, the atmospheric continuity is perfect.

### Files to Change

1. Copy `user-uploads://Trio.png` → `src/assets/trio.png`
2. `src/components/resurrection/TrinitySection.tsx` — swap both imports to `import trio from "@/assets/trio.png"`, update all three `src` props to `{trio}`, and tune `objectPosition` per panel
