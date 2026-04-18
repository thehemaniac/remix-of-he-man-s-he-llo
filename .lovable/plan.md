

## Plan: Restructure He-Maniac as a Multi-Page Creative Record

The user wants a fundamental restructure: from a single long-scroll manifesto into a quiet, multi-page creative logbook. Keep the existing theme (Cinzel + EB Garamond, gold/void/blood palette, dark cinematic feel) — only the structure, content, and routing change.

## New Site Architecture

```text
/                              Home (minimal gateway)
/projects                      List of 4 projects
/projects/castle-grayskull     Active project — 3 parts
  /part-1-reference-images
  /part-2-structure-mapping    (placeholder)
  /part-3-final-build          (placeholder)
/projects/granamyr             Single-episode record
/projects/skytree              "Not opened yet."
/projects/witches-of-fire      "Not opened yet."
/disclaimer                    3-line legal note
```

## What to Build

**1. Routes** — add all routes above to `src/App.tsx` above the catch-all.

**2. Shared layout** — new `SiteLayout.tsx` with a slim top nav (Home · Projects · Disclaimer) reusing the existing `NavBar` styling (Cinzel small caps, gold hover) and a minimal footer.

**3. New pages** (all under `src/pages/` — replace current `Index.tsx` content):
- `Home.tsx` — title, subline, one paragraph, "Current Focus" card, single Enter button → `/projects/castle-grayskull`. No other sections.
- `Projects.tsx` — 4 entries; Castle Grayskull marked active (gold accent), others muted/secondary.
- `CastleGrayskull.tsx` — chapter intro + 3 part rows linking onward.
- `Part1ReferenceImages.tsx` — full entry with Structure / Detail / The Problem sections, image placeholder blocks (1×6 grid, 3 structural, 3 detail), Next link to Part 2.
- `Part2StructureMapping.tsx` / `Part3FinalBuild.tsx` — minimal placeholder chapter pages.
- `Granamyr.tsx` — full single-episode record (Problem / Testing / Selection / Final / All Outputs) with image placeholders.
- `Skytree.tsx` / `WitchesOfFire.tsx` — title + "Not opened yet."
- `Disclaimer.tsx` — 3 lines, centered.

**4. Reusable atoms**:
- `ImagePlaceholder.tsx` — bordered gold-dim box with caption slot.
- `EntryBlock.tsx` — short prose block, generous spacing.
- `ChapterRow.tsx` — list-row link with Roman numeral / part number, title, subtle arrow.

**5. Retire (but keep files for now)** — current `resurrection/*` section components are no longer routed; safe to leave on disk in case of future reuse. The old long-scroll Index becomes obsolete and is replaced by the new `Home.tsx`.

## Visual Language (unchanged theme, refined application)

- Keep `--gold`, `--void`, `--bone`, `--blood` tokens and Cinzel / EB Garamond fonts.
- Pages breathe: max-width ~720px for prose, ~960px for project lists.
- Entries use first-person, present-tense, single-sentence paragraphs (per the prompt's example tone).
- Image placeholders: thin gold-dim border, aspect-ratio boxes, tiny Cinzel caption underneath.
- Transitions: simple fade-in on route change (existing `fade-in-up` utility).
- No new colors needed — the existing palette already matches "gold, parchment, stone, muted" (bone = parchment, ash = stone; we'll lean on these more).

## Homepage Layout (lean)

```text
        HE-MANIAC                          ← Cinzel Decorative, gold glow
   Inspired by He-Man and the
   Masters of the Universe (1983–1985)     ← italic Garamond, muted

   [single paragraph — 4–5 lines, centered, max 640px]

         ─── gold line ───

         CURRENT FOCUS                     ← tiny tracked caps
       Making of Castle Grayskull          ← Cinzel, gold

            [ Enter ]                      ← outlined gold button
```

Nothing else above the fold. No hero image, no stats, no trinity.

## Files Touched

- **Edit**: `src/App.tsx` (routes), `src/index.css` (no changes likely; reuse tokens)
- **Create**: `src/components/layout/SiteLayout.tsx`, `src/components/layout/SiteNav.tsx`, `src/components/layout/SiteFooter.tsx`, `src/components/atoms/ImagePlaceholder.tsx`, `src/components/atoms/EntryBlock.tsx`, `src/components/atoms/ChapterRow.tsx`
- **Create pages**: `Home.tsx`, `Projects.tsx`, `Disclaimer.tsx`, `projects/CastleGrayskull.tsx`, `projects/Part1ReferenceImages.tsx`, `projects/Part2StructureMapping.tsx`, `projects/Part3FinalBuild.tsx`, `projects/Granamyr.tsx`, `projects/Skytree.tsx`, `projects/WitchesOfFire.tsx`
- **Replace**: `src/pages/Index.tsx` becomes the new minimal `Home` (or import Home from new location)
- **Leave on disk** (unrouted): `src/components/resurrection/*` — preserved for reference, no longer rendered.

## Out of Scope

- No CMS, no markdown loader — content is inline JSX (easy to hand-edit, swap images later).
- No animations beyond existing fade-in utilities.
- No real images yet — all placeholders, swap-ready.

