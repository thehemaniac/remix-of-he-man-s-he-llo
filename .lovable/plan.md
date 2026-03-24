
## Strategic Pivot Analysis

The user has made a clear strategic decision:
- **Stop positioning against other productions** (no more Revelation vs Revolution vs Resurrection comparisons)
- **Act like a studio** — Warner Bros doesn't justify their Batman by attacking other Batmans
- **Present The Resurrection as its own universe** — inspired by the original 1983 Filmation series and Mattel's creation
- **Credits, not complaints** — honor original creators, don't mention MGM, Netflix, Kevin Smith
- **he-maniac.com + GitHub + Netlify** = the deployment stack

## What Must Change

**REMOVE entirely (they only exist to compare/attack):**
1. `NoCommissionSection` — entire section is built around criticizing Revelation, Revolution, Kevin Smith. Completely incompatible with the new positioning.
2. `CanonTableSection` — the entire table scores other productions. Directly contradicts the "we don't mention other productions" philosophy.

**UPDATE (contains comparison language to strip out):**
3. `HeroSection` — has "Revelation · Revolution · Resurrection" trio at the bottom + "Canon Decoded · 1982 — Present" pre-title. Strip those references.
4. `ManifestoSection` — "We are not creating a new story. We are following the clues..." contradicts the new framing of presenting an original universe. Update to universe declaration language.
5. `TaylorSection` — mostly good (credits the original creator, which fits) but has "What Corporate Did" framing. Soften slightly — credit Mattel/Filmation as inspiration, don't position against them.
6. `NavBar` — remove "Authority" link (NoCommissionSection) and "Canon" link (CanonTableSection). Update remaining section labels to fit universe framing.
7. `Index.tsx` — remove the two sections, update footer (currently says "No invention. No fabrication. Only retrieval." — this contradicts presenting a new universe).

**KEEP (all valid in new framing):**
- `HeroSection` (after cleanup)
- `TheNameSection` — decoding the name is universe lore
- `TrinitySection` — the three-state soul model is universe mythology
- `OriginSection` — origin story fits perfectly
- `BloodlineSection` — keeps, it's character mythology
- `GrayskullSection` — keeps, sacred space of the universe
- `EpisodesSection` — frame as "the source material that inspired this universe" rather than "canon proof"
- `TaylorSection` — keep, credits original creator
- `ManifestoSection` — keep, update tone

## Files to Change

### 1. `src/pages/Index.tsx`
- Remove `NoCommissionSection` import and `<section id="authority">`
- Remove `CanonTableSection` import and `<section id="canon">`
- Update footer text: remove "No invention. No fabrication. Only retrieval." → replace with "An original universe inspired by the 1983 Filmation series. Characters created by Mark Taylor for Mattel."

### 2. `src/components/resurrection/NavBar.tsx`
- Remove "Authority" link
- Remove "Canon" link
- Remaining nav: Name · Trinity · Origin · Bloodline · Grayskull · Episodes · Manifesto

### 3. `src/components/resurrection/HeroSection.tsx`
- Remove "Canon Decoded · 1982 — Present" pre-title → replace with universe positioning line
- Remove the "Revelation · Revolution · Resurrection" trio at the bottom
- Replace with creative universe statement: "An original universe" or "He-Man: The Resurrection"

### 4. `src/components/resurrection/ManifestoSection.tsx`
- Remove "We are not creating a new story. We are following the clues..." → this contradicts presenting a universe
- Replace with: "We built a universe. Inspired by the truth that was always there."
- Update the three stats boxes: remove "4 Key Canon Sources" → replace with universe credits (Filmation 1983, Mark Taylor, Mattel)
- Keep "I HAVE THE POWER." — this is universe language, not comparison language

### 5. `src/components/resurrection/TaylorSection.tsx`
- Remove "What Corporate Did" column heading and the adversarial framing
- Keep the Taylor quotes (they're crediting the creator)
- Replace "The Resurrection is not a reboot. It is not a reimagining. It is the retrieval..." → "The Resurrection is an original universe, built in honor of what Taylor always envisioned."

## Deployment Plan (separate from site changes)
The user wants: GitHub → Netlify → he-maniac.com

This is a discussion item, not a code change. Quick guidance:
- Connect to GitHub via Settings → GitHub
- Netlify: connect GitHub repo, deploy as static site (`npm run build` → `dist/`)
- he-maniac.com: point DNS to Netlify (CNAME `id.netlify.app`) rather than Lovable's IP

## Summary of Changes
- 2 sections removed (NoCommission, CanonTable)
- 5 files updated (Index, NavBar, Hero, Manifesto, Taylor)
- Net result: The site becomes a clean universe presentation — no comparisons, no positioning against other productions, credits to original creators
