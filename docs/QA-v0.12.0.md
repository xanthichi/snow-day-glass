# v0.12.0 Verification

## Design And Acceptance

Comparison A keeps the shared white fill at alpha 0.80: 80% opacity and 20%
transparency. Add that fill to the complete native Projects and Plugins page
body, including empty space to the bottom of the pane. The existing header
reconstructs the viewport-aligned wallpaper with the same white fill so it
occludes scrolled text without stacking two white fills or adding blur.

Keep native-immersive, balanced decoration, the explicitly requested full-app
winter artwork, centered focal point, light palette, black sidebar labels,
dark body text, blue actions and local system fonts. Preserve native page
geometry, sticky/search controls, hover actions, scrolling, file pane edge,
8px composer/rail gap and bounded glass filters.

Compare desktop 1440x900 and narrow 980x760, plus the user's live window.
Check Projects search and row actions, Plugins search and tabs, complete white
body coverage, header alpha, route transitions, contrast and the existing
regression suite. Preserve the explicit alpha 0.78 chat and 0.70 tool materials.

After validation, commit and push A before changing the common fill. Comparison
B will use alpha 0.20 for the shared white fill (80% transparency), with the same
page coverage and layout, in a separate subsequent commit.

## Results

- 221/221 isolated checks passed at 1440x900 and 980x760 with zero browser
  errors. The tested companion is 32,326 bytes, SHA-256
  `248947ede0d055b164c9e8c80fb653037ae92bb4bd44a4cea847e9b58342747d`.
- Both page bodies and their empty bottom areas use alpha 0.80 white fill.
  Header artwork and its white veil use the same viewport alignment and alpha.
- Four pixel occlusion checks compared the header with scrolled rows visible
  and hidden: header pixels were unchanged, while the body positive-control
  image changed. No row text bleeds through the heading during scrolling.
- Native scrolling, search/actions, focus, geometry, input/rail separation,
  native page restoration, file pane edge, filters and no-font regressions passed.
- Live Projects and Plugins at approximately 1199x815 confirmed whole-page
  coverage, usable search and zero horizontal overflow. Screenshot-pixel
  readability checks passed on each page with zero failures or warnings.
- Canonical static validation has zero errors. Its one warning requires
  header-gradient contrast evidence; the gradient is a constant-alpha white
  veil, and the live route checks above satisfy that check.
- The marketplace validator and upstream Rust importer/Safe CSS compiler passed.
  The import ZIP is 2,212,321 bytes, SHA-256
  `494b82bfda6bfefee86905a3d200b99bc5aac02fef579818aecac02d40eae5fc`.

## Limits

Live pages have short lists; long scroll and header occlusion were verified
in the separate native-structure browser fixture. Previews are synthetic
design previews, not private real-window screenshots. No app restart was made.
