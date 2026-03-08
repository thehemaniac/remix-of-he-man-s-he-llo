
## What the User Is Asking

The uploaded image shows Adam (left, light skin, pink vest) and He-Man (right, dark warm skin, blue armor with red cross). The user wants to generate a **third character image — Skeletor** — with the exact same physique as He-Man in the image, blue skin tone, no clothes/armor. This trio (Adam · He-Man · Skeletor) becomes the visual proof for the Trinity thesis.

The final goal: a **three-image panel** in the `TrinitySection` — one photo per character — sitting above or within the three-column framework, making the "same body, different skin" argument visually undeniable.

## What Needs to Be Built

### Step 1 — Generate the Skeletor image via AI
Using the image generation API with the uploaded image as reference, generate:
- Same exact muscular physique and proportions as He-Man in the photo
- Solid blue skin (the cold, reptilian blue — matching `--reptile: 210 80% 45%`)
- No clothing, no armor — bare blue skin only
- Same fiery atmospheric background as the original image
- Same framing, same camera angle, same style

### Step 2 — Copy uploaded image to assets
- Copy `user-uploads://FirstLook-HeMan-2.png` → `src/assets/adam-heman.png`
- Save the generated Skeletor image → `src/assets/skeletor.png`

### Step 3 — Add a visual proof panel to `TrinitySection.tsx`
Insert a **cinematic three-image row** between the title/costume proof block and the three text columns:

```text
┌─────────────────┬─────────────────┬─────────────────┐
│                 │                 │                 │
│   ADAM          │   HE-MAN        │   SKELETOR      │
│  (from left     │  (from right    │  (generated)    │
│   of image)     │   of image)     │                 │
│                 │                 │                 │
│  bone border    │  gold border    │  blue border    │
│  dim overlay    │  glow           │  cold overlay   │
└─────────────────┴─────────────────┴─────────────────┘
```

Each image panel:
- The uploaded image will be used as a two-panel source for Adam + He-Man (crop left half for Adam, right half for He-Man using CSS `object-position`)
- The generated Skeletor image fills the third panel
- Small label beneath each: name + "The [role]"
- The images are the visual proof — no caption needed other than the name

### Files to Change

1. **Copy** `user-uploads://FirstLook-HeMan-2.png` → `src/assets/adam-heman.png`
2. **Generate + save** Skeletor image → `src/assets/skeletor.png`
3. **Edit** `src/components/resurrection/TrinitySection.tsx` — add a three-panel image row using the assets, showing Adam (cropped left), He-Man (cropped right), and Skeletor side by side with their respective color treatments

### Visual Treatment Per Panel

- **Adam panel**: `object-position: left` on the shared image, bone/dim overlay (`opacity-40`), bone border
- **He-Man panel**: `object-position: right` on the shared image, gold glow border, no overlay
- **Skeletor panel**: generated blue-skin image, cold blue border (`--reptile`), slight desaturating overlay

The three images together — without a single word — prove the thesis: same body, same physique, only the skin differs.
