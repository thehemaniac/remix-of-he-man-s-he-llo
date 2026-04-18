
The user wants a downloadable single-file HTML version of the current site. Since this is a React + Vite + Tailwind app with many components, the cleanest way to deliver a true static HTML file is to build the project (`npm run build`) and then inline the generated CSS and JS into the resulting `dist/index.html` so it works as a single self-contained file.

## Plan

1. Run `npm run build` to produce the production `dist/` output.
2. Inline the built CSS and JS bundles into `dist/index.html` so it works offline as one file (no external asset requests, except Google Fonts which stay as a CDN link).
3. Update the `<title>` and meta tags to "He-Man: The Resurrection" so the downloaded file is properly branded.
4. Save the final file to `/mnt/documents/he-man-resurrection.html`.
5. QA: open the file, verify size is reasonable, and spot-check that markup contains the expected sections (Hero, Trinity, Origin, Bloodline, Grayskull, Source, Creator, Manifesto).
6. Deliver via `<lov-artifact>` so the user can download it.

## Notes / Caveats

- The result is a single `.html` file the user can double-click to open in any browser.
- Google Fonts (Cinzel, EB Garamond) will load from the CDN when online. Offline, the site falls back to system serif fonts but stays readable.
- Images referenced from `/public` (placeholder.svg etc.) will be inlined as base64 if used; otherwise the file remains fully self-contained.
- This is a static snapshot — smooth-scroll nav links and CSS animations work, but it is not connected to the live project, so future site edits will not update this file (we can regenerate on request).

## Files Touched

- None in the project repo. Output goes to `/mnt/documents/he-man-resurrection.html`.
