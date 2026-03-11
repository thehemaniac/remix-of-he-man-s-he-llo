
## What We're Building

A new **Canon Comparison Table** section — a scholarly, data-driven record comparing every official production against the original 1982 canon. No shade, no editorial attacks — just the facts, scored against a fixed set of criteria.

## The 6 Versions (columns)

Based on the HTML table + the user's addition of Revolution and Revelation:

| # | Version | Year |
|---|---------|------|
| 1 | Filmation Series | 1983 |
| 2 | Live Action Film | 1987 |
| 3 | 200X Series (MYP) | 2002 |
| 4 | Masters: Revelation | 2021 |
| 5 | He-Man & The Masters: Revolution | 2024 |
| 6 | MGM Film | 2026 |

## The 4 Criteria Categories (rows)

Drawn directly from the HTML table, with "The Resurrection" as the gold standard reference column on the right:

**Character Accuracy**
- Adam has light skin (the disguise, the privilege)
- He-Man has dark skin (the transformation detail, 130 episodes)
- Skin visibly transforms during the change
- Same body — Adam and He-Man (Clark Kent model)
- Skeletor — cold blue skin / skull

**Transformation Integrity**
- Sword raised — it's a deliberate choice, not an accident
- Transformation carries weight / costs something

**Story Integrity**
- Adam is a Prince — born privileged (sacrifice has meaning)
- Castle Grayskull as sacred space, not a set piece
- Earth bloodline — Adam as hybrid (Queen Marlena)

**Mythology & Deep Canon**
- Maccabean subtext (Halperin's buried code)
- The Trinity — three states, one soul
- Genesis parallel (the sword as return, not exile)

## Scoring Legend
```
✓  Canon Accurate
~  Partially Accurate
✗  Removed / Incorrect
?  Unknown / Unconfirmed
```

## Canon Scores (from the HTML table, extended for Rev/Revolution)
- 1983 Filmation: 16/16
- 1987 Film: 7/16
- 2002 Series: 12/16
- Revelation 2021: 3/16
- Revolution 2024: 5/16 (estimate, similar to Revelation)
- 2026 MGM Film: TBD (shown as partially known)

## Visual Design

Matches the existing site system — void/ash background, gold headers, Cinzel/Garamond fonts, border-based grid. The table will use:
- **Section label**: `Layer V.I — The Record`
- **Header row**: gold text, Cinzel font, each version year beneath
- **Criteria rows**: Garamond body text with icon badges (✓ gold, ~ muted, ✗ blood/red, ? dim)
- **Score row**: bottom of table, large Cinzel numbers in gold
- **Closing statement**: the canon score totals + the closing line from the HTML: *"Every studio had a budget. Every reboot had consultants... One stayed up until 6:30am..."*

The table will be horizontally scrollable on mobile with a sticky first column (criteria labels).

## Files to Create / Modify

1. **Create** `src/components/resurrection/CanonTableSection.tsx` — full new component
2. **Edit** `src/pages/Index.tsx` — insert `<CanonTableSection />` between `NoCommissionSection` and `ManifestoSection`, with `id="canon"`
3. **Edit** `src/components/resurrection/NavBar.tsx` — add "Canon" nav link pointing to `#canon`
