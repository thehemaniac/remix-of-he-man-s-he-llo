

Move the "Inspired by..." attribution from the homepage subline into the footer, and replace the homepage subline with a more evocative tagline.

## Tagline options (will use #1 unless you prefer another)

1. **A deep exploration into the Filmation universe (1983–1985)**
2. A quiet study of the Filmation universe (1983–1985)
3. Notes from inside the Filmation universe (1983–1985)

## Changes

**1. `src/pages/Home.tsx`**
Replace the current subline:
```
Inspired by He-Man and the Masters of the Universe (1983–1985)
```
with:
```
A deep exploration into the Filmation universe (1983–1985)
```
Keep the same italic Garamond styling and position directly under the HE-MANIAC title.

**2. `src/components/layout/SiteFooter.tsx`**
Replace the existing footer line:
```
A private record. Inspired by the 1983 Filmation series.
```
with the full attribution:
```
Inspired by He-Man and the Masters of the Universe (1983–1985).
A private record.
```
Keep the existing footer styling (italic Garamond/Baloo, muted, centered, gold divider).

## Notes

- The homepage subline becomes about *intent* (deep exploration), the footer carries the *attribution*. This separates poetic framing from credit, which fits the logbook tone.
- No routing, layout, or component-structure changes.
- Easy to swap the tagline wording later — single line in `Home.tsx`.

## Files Touched

- `src/pages/Home.tsx`
- `src/components/layout/SiteFooter.tsx`

