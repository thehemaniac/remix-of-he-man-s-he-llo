
## The Problem

`aspect-[21/9]` is an ultra-wide ratio (2.33:1). The `trio.png` image is taller than that — so `object-cover` fills the width but crops the top and bottom, cutting the faces off.

The fix is to:
1. Change the aspect ratio to something taller that matches the trio image's actual proportions
2. Use `object-top` instead of `object-center` so the image anchors from the top — showing heads first, letting feet crop at the bottom

## The Fix

In `src/components/resurrection/TrinitySection.tsx`, line 105–109:

**Change:**
- `aspect-[21/9]` → `aspect-[16/9]` (or `aspect-[4/3]` if the image is squarer)
- `object-center` → `object-top` on the `<img>` tag

This ensures the faces/heads are always visible at the top, and any cropping happens at the bottom (feet/ground area) which is visually acceptable.

If `16/9` still cuts heads, fall back to `aspect-[4/3]` which is even taller and will show more of the image vertically.

## Files to Change

- `src/components/resurrection/TrinitySection.tsx` — line 105: change `aspect-[21/9]` to `aspect-[16/9]`, and line 109: change `object-center` to `object-top`
