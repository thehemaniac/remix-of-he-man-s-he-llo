

Update homepage subline and body copy.

## Changes

**`src/pages/Home.tsx`**

1. Subline → `A personal record from the Filmation universe (1983–1985)`

2. Replace the single body paragraph with four short stanzas, each on its own line, preserving the existing `font-garamond text-foreground/85 text-lg md:text-xl leading-relaxed max-w-xl` styling. Use `space-y-4` on a wrapping container so each line breathes:

```
The original Filmation series ran for 130 episodes,
introducing Eternia and its characters to a generation.

He-Man, Skeletor, Man-At-Arms, Teela.

A world where fantasy, science, and myth coexisted.

This is where it started.
```

Render as four separate `<p>` elements inside a `div` with `space-y-4`, keeping the centered layout. The final line ("This is where it started.") will use a slightly emphasized treatment — italic + gold/80 — to act as a quiet closing beat before the divider.

## Files Touched

- `src/pages/Home.tsx`

