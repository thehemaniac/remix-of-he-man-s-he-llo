

Swap the body font from `EB Garamond` to `Baloo 2` while keeping `Cinzel` / `Cinzel Decorative` for headings and the gold/void theme intact.

## Changes

**1. `index.html`** — replace the Google Fonts `<link>` import (currently loads Cinzel + Cinzel Decorative + EB Garamond) so it also pulls Baloo 2 weights 400/500/600/700.

**2. `tailwind.config.ts`** — in `fontFamily`, change `garamond` to fall back through Baloo 2 first:
```
garamond: ["Baloo 2", "EB Garamond", "Georgia", "serif"]
```
(keeping the key name `garamond` avoids touching every component that uses `font-garamond`.) Also add a dedicated `baloo: ["Baloo 2", "system-ui", "sans-serif"]` for clarity.

**3. `src/index.css`** — update the `@import url(...)` for Google Fonts to include Baloo 2, and update the `body` rule:
```
font-family: 'Baloo 2', 'EB Garamond', Georgia, serif;
```

## Notes

- Baloo 2 is a rounded sans-serif — visually it shifts the body away from the literary serif feel toward something warmer/softer. Headings stay Cinzel so the cinematic identity is preserved.
- All existing `font-garamond` utility classes keep working (Baloo 2 takes precedence via the stack).
- Easy to revert: restore the original font-family lines.
- No component edits required.

## Files Touched

- `index.html`
- `tailwind.config.ts`
- `src/index.css`

