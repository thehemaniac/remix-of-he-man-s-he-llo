

Refine **Part 1 — Reference Images** so the existing (final) text lands as a finished chapter. No text changes. No site-wide redesign. Only this single page's layout, rhythm, and image presentation are touched.

## Scope

- File rewritten: `src/pages/projects/Part1ReferenceImages.tsx`
- Small additive prop on `src/components/atoms/ImagePlaceholder.tsx` (a `tone` variant: `primary | secondary` and an optional `index` number) — purely visual, default behavior unchanged so no other page breaks.
- No edits to Home, Projects, Castle Grayskull index, footer, nav, theme, or routing.

## Page Structure (matches the required order exactly)

```text
← Castle Grayskull           (back link, unchanged)

PART 1
Reference Images             (chapter header)
— gold hairline —

§ Opening
  "I start by going through the first 33 episodes…"
  ends on: "Here are the screenshots."

[ 6 IMAGE GRID ]             3-col on md+, 2-col mobile, square,
                             numbered 01–06, even gutters, framed block

§ Observations
  "The front holds…"
  "I split them."

— gold hairline divider with centered label "STRUCTURE / DETAIL" —

┌─ Structure ──────────────┐    ┌─ Detail ─────────────────┐
│ section label (gold)     │    │ section label (muted)    │
│ "Three hold the body…"   │    │ "Three stay aside…"      │
│ [3 portrait images]      │    │ [3 portrait images]      │
│ tone = primary           │    │ tone = secondary,        │
│ (gold border, full opac) │    │ dimmed, smaller,         │
│                          │    │ "set aside" feel         │
└──────────────────────────┘    └──────────────────────────┘
On mobile they stack; on md+ they sit side-by-side so the
split is visually obvious at a glance.

§ Bridge
  "These define the direction."
  "I move forward with these."

— gold hairline —

§ First Pass
  "I change the style…"
  ends on: "It appears across them."

[ MODEL OUTPUT GRID ]        even 3-col grid on md+, 2-col mobile,
                             square tiles, labelled
                             "model 01 · output 01" etc.,
                             uniform spacing — designed to compare at a glance.

§ Record
  "I keep all outputs…"

[ SEQUENCE / SLIDESHOW SECTION ]
  Per-model rows: REF tile → arrow → row of OUTPUT tiles.
  Static layout (no JS carousel) — reads as a visual record / contact sheet.
  Three rows, one per model, each:
     [ ref ]  →  [ out 1 ] [ out 2 ] [ out 3 ] [ out 4 ]
  Tiny gold caption above each row: "MODEL 01" etc.

— generous spacing —

§ Ending
  "The structure isn't resolved yet."
  "It has to be forced."
  "Not guessed."

— gold hairline, extra top padding —

→ Next: Structure Mapping     (existing next-link block, unchanged)
```

## Visual Refinements

- **Chapter header**: add a thin `gold-line` divider directly under the title so Part 1 reads as a chapter opening.
- **6-image grid**: square tiles, 3 columns on md+, even `gap-3` gutters, wrapped in a subtle bordered container so it reads as a deliberate set rather than loose images. Numbered `01`–`06`.
- **Structure vs Detail split**: presented as two adjacent columns on md+ (was sequential). Structure column uses the existing gold-bordered placeholder at full opacity; Detail column uses the new `tone="secondary"` variant — dimmer border, `opacity-60`, slightly smaller scale — so "set aside" is felt visually, not just stated.
- **First Pass model output grid**: uniform square tiles in a 3-col grid with consistent gutters and uniform labels, so outputs can be compared at a glance (the chapter's payoff).
- **Sequence section**: a contact-sheet style row per model — one ref tile, an arrow, then the output tiles in a row. Reads as a record. Pure CSS grid, no carousel.
- **Spacing**: increase the section gap from `space-y-20` to `space-y-24` and add `pt-16` before the next-link so the ending lands.
- **Hairlines**: reuse the existing `gold-line` utility (already in `index.css`) between major movements (after header, before First Pass, before Next).

## Technical Notes

- Text content rendered character-for-character as supplied. Each line stays its own `<p>` to preserve the staccato cadence already used elsewhere on the site.
- `ImagePlaceholder` gets two optional props (`tone?: "primary" | "secondary"`, `index?: number`). Defaults preserve current look — no other page is affected.
- All styling uses existing Tailwind tokens (`gold`, `gold-dim`, `bone`, `ash`, `muted-foreground`, `border`) and existing fonts (`font-cinzel`, `font-garamond`). No new colors, no new fonts, no new dependencies.
- Fully responsive: grids collapse cleanly to 2-col / 1-col on mobile; Structure/Detail stacks vertically below `md`.

## Files Touched

- `src/pages/projects/Part1ReferenceImages.tsx` (rewrite layout + place final text)
- `src/components/atoms/ImagePlaceholder.tsx` (additive `tone` + `index` props, backward compatible)

