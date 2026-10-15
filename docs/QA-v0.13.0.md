# v0.13.0 Verification

## Design And Acceptance

Comparison B changes only the common white fill from alpha 0.80 to alpha 0.20:
**20% opacity / 80% transparency**. Projects and Plugins retain A's complete
page veils and viewport-aligned sticky-header artwork. Settings, sidebar,
composer, menus, rails and file panes use the same common fill.

Keep the existing native-immersive light layout, balanced materials, full-app
winter artwork, centered focal point, dark text, blue actions, local fonts,
hover glass, controls and geometry. The earlier explicitly chosen chat alpha
0.78 and tool alpha 0.70 remain unchanged. White text/icons, switch thumbs,
edges and highlights are not page fill and retain their native states.

A is preserved as v0.12.0, commit `60088fa`, already pushed before B edits.
Compare the same viewports, 1440x900 and 980x760, and live Projects/Plugins,
settings, composer and file pane. Check actual alpha, screenshot readability,
scrolling/header occlusion, no stacked fill, restored pages and native controls.
Do not change text opacity or add animation/scroll work.

## Results

- 225/225 isolated checks passed at 1440x900 and 980x760 with zero browser
  errors. The exact companion is 32,533 bytes, SHA-256
  `f330307aaa5269db9e8b2c286fa5b2ea7b76f125464e2b88df0b95bc166d9536`.
- All shared page/body/bottom fills are alpha 0.20. Explicit chat alpha 0.78,
  tool alpha 0.70, white switch thumbs and blue actions are preserved.
- Four screenshot comparisons prove scrolled list text cannot change header
  pixels, with changed body pixels as a positive control. Artwork alignment,
  no blur, native scrolling, search, focus and geometry checks passed.
- A legacy Safe CSS fixture explicitly reproduces old alpha 0.80 home parts:
  the companion changes both to 0.20 and retains local hover SDF refraction,
  gloss and geometry. Removing the test sheet leaves no stale paint.
- Composer/rail separation, menu and settings state, overlay cleanup/restore,
  right pane edge and drag, bounded filters and no-font regressions passed.
- Canonical validation has zero errors. Its single constant-white-gradient
  warning requires live route readability checks after application.
- Marketplace validation and the upstream Rust importer/Safe CSS compiler passed.
- Import ZIP: 2,212,330 bytes, SHA-256
  `492bf92a4b3fcd51bcd96822af2b6d4401375c300fd15b35f6f2c203e1bdd3cd`.
  Complete ZIP: 2,224,806 bytes, SHA-256
  `e32707dda3a779e55b5e603c13413aba717a679ffb854303973296a4a68ff971`.
  Both archives were independently checked against manifest bytes and hashes.
  The complete ZIP's companion matches the tested artifact exactly.

## Application

The user requested the second push before application. Live verification is
recorded in `docs/COMPARE-v0.12-v0.13.md` after the comparison commits.
