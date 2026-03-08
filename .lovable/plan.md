
## The Observation

The user has spotted something devastating in its elegance:

- **Revelation** (2021) — Kevin Smith, Netflix. He-Man revealed... and then killed.
- **Revolution** (2024) — The sequel. A new direction. Still not He-Man's story.
- **Resurrection** (This project) — The third word. The only one that brings him back.

This is not a coincidence to exploit. It is a pattern to document. Two studios spent two titles defining what He-Man is NOT. The third title — ours — is the only one that restores what was always there.

This needs to be built into the site in two places:

---

## Plan

### 1. Add a "The Trilogy" block inside `NoCommissionSection.tsx`

Replace the current two-column studio grid (Revelation + CGI Reboot) with a more powerful three-row **naming trilogy**:

```
REVELATION (2021)    →  He-Man revealed as a lie. Then killed.
REVOLUTION (2024)    →  A new direction. Still not his story.
RESURRECTION (—)     →  The word that ends the trilogy. The retrieval.
```

Each row is a horizontal bar. Left: the title word in large Cinzel. Center: a one-line verdict. Right: the year or a status indicator. Blood-red for Revelation and Revolution. Gold for Resurrection.

The section heading becomes:
> "They named it. They named it again. Then we named it."

### 2. Update `HeroSection.tsx` subtitle line

Currently reads:
> "The disguise was always Adam. The truth was always He-Man."

Add a second line beneath it (small, tracking-widest, Cinzel):
> `REVELATION · REVOLUTION · RESURRECTION`

This lands the trilogy immediately at the top of the page — before anything else. The user scrolls down and the site then proves why this third word is different from the first two.

---

## Files to Change

1. **`src/components/resurrection/NoCommissionSection.tsx`** — Add a new trilogy block at the top of the section, before the existing content. The three titles presented as a descending timeline with verdict text.

2. **`src/components/resurrection/HeroSection.tsx`** — Add the subtitle line `REVELATION · REVOLUTION · RESURRECTION` beneath the existing italic subtitle, in small gold Cinzel tracking text.

---

## Key copy

- "They named it Revelation. He-Man died in Episode 1."
- "They named it Revolution. He-Man remained the vehicle."
- "We named it Resurrection. He-Man is the destination."
- "Two studios. Two titles. Forty years of burial. One word ends it."
