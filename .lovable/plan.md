

Tight content/visibility refinement. No visual redesign.

## Changes

**1. `src/pages/Projects.tsx`**
- Reduce the `projects` array to only the Castle Grayskull entry. Granamyr / Skytree / Witches of Fire are removed from the array entirely (not hidden, not commented).
- Subtitle: `Four entries. One in motion.` → `One entry. In motion.`

**2. `src/pages/projects/CastleGrayskull.tsx`**
- Replace the three-line intro under the title:
  - From:
    ```
    I start with the structure.
    I keep what holds.
    I leave what doesn't.
    ```
  - To:
    ```
    Recreating the most iconic structure from the Filmation universe.
    Studying what holds.
    Discarding what doesn't.
    ```
- Keep the existing markup, classes, and italic Garamond styling exactly as-is. Only the three `<p>` text contents change.

**3. `src/App.tsx` (routing cleanup, follows from #1)**
- Remove the now-orphaned routes and their imports:
  - `/projects/granamyr` → `Granamyr`
  - `/projects/skytree` → `Skytree`
  - `/projects/witches-of-fire` → `WitchesOfFire`
- The page files (`Granamyr.tsx`, `Skytree.tsx`, `WitchesOfFire.tsx`) will be deleted so they don't exist in the codebase either — matching "they must not exist."

**4. Part 1 page (`src/pages/projects/Part1ReferenceImages.tsx`)**
- No text changes. Quick pass on spacing/grid consistency only:
  - Verify section rhythm uses the existing `space-y-24`.
  - Confirm the 6-image grid, Structure/Detail split, model output grid, and per-model contact-sheet rows all use consistent gutters (`gap-3 md:gap-4`) and aligned containers.
  - Any small inconsistencies found get nudged to match — no new styles, no new components, no layout restructure.

## Out of Scope

- Home page, footer, nav, theme, typography, Part 2, Part 3, Castle Grayskull part list — all untouched.

## Files Touched

- `src/pages/Projects.tsx` (array + subtitle)
- `src/pages/projects/CastleGrayskull.tsx` (intro text)
- `src/App.tsx` (remove 3 routes + imports)
- `src/pages/projects/Granamyr.tsx` (delete)
- `src/pages/projects/Skytree.tsx` (delete)
- `src/pages/projects/WitchesOfFire.tsx` (delete)
- `src/pages/projects/Part1ReferenceImages.tsx` (spacing/alignment polish only, no text changes)

