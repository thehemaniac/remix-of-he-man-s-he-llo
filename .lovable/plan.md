
## What the User Is Expressing

This is a pivot moment. The user is not just building a thesis website anymore — they are building a **motion picture pitch document**. The audience is adults aged 40-60 who grew up with He-Man and have now lived enough life to understand what the deeper story is really about.

The new insight from the conversation adds a third character to the trinity analysis:

1. **Adam** = The Social Self. The human. The civilian. The person every human presents to the world.
2. **He-Man** = The Integrated Being. The warrior who said yes to the sword. The ascended self.
3. **Skeletor** = The Reptilian Brain. The cold-blooded, clawed, blue-skinned shadow. Not an enemy outside — the force inside that was suppressed, denied the sword, and turned destructive.

The visual proof:
- Same exact body, chest armor, boots, loincloth
- He-Man: warm tan/red skin — vital, living, warm-blooded
- Skeletor: cold blue skin — reptilian, cold-blooded
- Skeletor's CLAWS where He-Man has hands — the reptilian nature made manifest
- The only difference between them is the sword and the choice

This is now two things at once:
1. A **Trinity section** documenting the Adam/He-Man/Skeletor psychological framework
2. A **"Motion Picture" repositioning** of the entire site — this isn't just a fan thesis, it is a pitch for a film that a 45-year-old deserves to see

## Plan

### Change 1: Add `TrinitySection.tsx` (new section)

**Placement:** Between `TheNameSection` (id="name") and `OriginSection` (id="origin")
**Nav label:** "Trinity"

Structure:
- Section label: "Layer I.V — The Three Faces"
- Title: "Adam. He-Man. Skeletor. / Three Names. One Body."
- Opening: "They dressed them identically. Same armor. Same boots. Same build. Same height. Only the skin is different. That was the message."
- Three-column layout:
  - **ADAM** (bone/dim) — The Social Self. The human face. Warm. Dismissible. The disguise the world accepts.
  - **HE-MAN** (gold) — The Integrated Warrior. The ascended self. The yes to the sword.
  - **SKELETOR** (cold blue / blood) — The Reptilian Shadow. Clawed hands. Cold blue skin. The warrior denied the sword. Not an enemy — a warning.
- The mirror proof block: "Skeletor is not He-Man's enemy. Skeletor is what He-Man would have become if the sword had never been given. They are the same body. The difference is the choice."
- Closing: "Every human carries all three. Adam is who we pretend to be. He-Man is who we are capable of becoming. Skeletor is who we become when that capability is permanently suppressed."

Visual treatment:
- Cold blue (`hsl(210 80% 45%)`) added to CSS as `--ice` or `--reptile` for Skeletor's column
- Adam column: bone/50% opacity, muted
- He-Man column: gold glow, full
- Skeletor column: cold blue left border, blood-red accent, slightly muted

### Change 2: Reposition the HeroSection — "Full Motion Picture" framing

Add below the existing subtitle, a new block:

```
FOR THE ONES WHO GREW UP WITH HIM.
NOT A REBOOT. NOT A REIMAGINING.
A MOTION PICTURE THAT TELLS THE TRUTH
THAT WAS ALWAYS THERE.
```

Small, Cinzel, spaced — it doesn't shout. It lands quiet and devastating for a 45-year-old.

### Change 3: Update `ManifestoSection.tsx`

Add a closing paragraph specifically addressed to the audience:
> "If you were 8 years old in 1983, you understood something your parents did not explain. You felt the weight of the transformation. You felt the choice it represented. You were right. This is that film — finally made for who you are now."

### Change 4: Add `--reptile` color token to `index.css`

```css
--reptile: 210 80% 45%;
```

Needed for Skeletor column styling in TrinitySection.

---

## Files to Change

1. **Create** `src/components/resurrection/TrinitySection.tsx`
2. **Edit** `src/pages/Index.tsx` — add import + `<section id="trinity">` between name and origin
3. **Edit** `src/components/resurrection/NavBar.tsx` — add "Trinity" nav link
4. **Edit** `src/components/resurrection/HeroSection.tsx` — add "Motion Picture" framing line
5. **Edit** `src/components/resurrection/ManifestoSection.tsx` — add audience address paragraph
6. **Edit** `src/index.css` — add `--reptile` color token

---

## Key copy

- "Skeletor is not He-Man's enemy. He is He-Man's warning."
- "Same body. Same armor. Same height. One chose the sword. One was never given it."
- "Cold-blooded. Clawed. Blue. The reptilian brain does not disappear. It either gets the sword, or it takes control."
- "Every human carries all three. The film is about the choice between them."
- "For the ones who were 8 years old in 1983. This is the film you always deserved."
