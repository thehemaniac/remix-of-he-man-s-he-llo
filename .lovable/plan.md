

Spacing, hierarchy, and emphasis pass on Part 1 only. No text, no new elements, no redesign.

## Approach

Replace the uniform `space-y-24` rhythm with a deliberate, varied cadence so each phase of the chapter has its own weight. Use targeted `pt-*` / `mt-*` / `mb-*` on key blocks instead of relying on a single global gap.

## Changes — `src/pages/projects/Part1ReferenceImages.tsx`

**1. Screenshot grid reveal**
- Drop the global `space-y-24` so spacing can be tuned per-section.
- Add `pt-12 md:pt-16` above the 6-image grid container so it lands as a reveal after "Here are the screenshots."

**2. Structure section as decision point**
- Increase top spacing before the Structure/Detail divider: `pt-20 md:pt-28` on the divider row.
- Add `pt-8 md:pt-10` between the divider and the two columns.

**3. Detail column — set aside**
- Inner column gap on md+: shift Detail column with `md:pl-6` and `md:pt-4` so it sits slightly lower/inset vs Structure.
- Reduce label/text emphasis is already there via `text-muted-foreground` and `tone="secondary"` placeholders — keep as-is, just add the spacing inset.

**4. First Pass transition**
- Add `pt-28 md:pt-36` before the First Pass `EntryBlock` so it reads as a hard phase change from observation to testing.
- Add a subtle `mb-10` after the First Pass text and before the model output grid.

**5. Model output grid — comparison matrix**
- Tighten gutters: `gap-2 md:gap-3` (down from `gap-3 md:gap-4`).
- Reduce outer container padding: `p-2 md:p-3` (down from `p-4 md:p-6`).
- Keep `aspect-square` on every tile so all rows/columns line up perfectly.
- Ensure 3-col on md+, 2-col mobile (already correct).

**6. Realization block emphasis**
- Wrap the "They don't match…" `EntryBlock` with `pt-16 md:pt-20` above and `pb-8 md:pb-12` below so it has breathing room as a key beat.

**7. Record section as logged entries**
- Add `pt-24 md:pt-32` before the Record `EntryBlock`.
- On the per-model rows container, change `space-y-10` to `space-y-16 md:space-y-20` so each Model 0X row reads as its own log entry.
- Add `pt-6` between each model's caption and its contact-sheet row (small inset so the caption breathes).

**8. Final statement**
- Wrap the ending `EntryBlock` with `pt-32 md:pt-40` so it stands alone as a conclusion. Remove the existing `pt-8` wrapper.

**9. Transition to Part 2**
- Increase top spacing on the next-link block: `pt-28 md:pt-36` (up from `pt-16`).
- Keep the existing `border-t border-border` divider.

## Out of Scope

- No text edits.
- No changes to `ImagePlaceholder`, `EntryBlock`, fonts, colors, or any other page.

## Files Touched

- `src/pages/projects/Part1ReferenceImages.tsx` (spacing/emphasis only)

