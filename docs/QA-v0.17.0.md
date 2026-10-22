# v0.17.0 Verification

## Design And Acceptance

Base: v0.16.0, commit `1076d7b`. Remove only the remaining white glow above
the thread composer. Keep all fonts, colors, materials, shadows, refraction,
layout, scrolling and performance logic unchanged.

Read-only live inspection found the current native paint:

```text
.thread-scroll-container
  [aria-hidden=true].sticky.bottom-0
    [aria-hidden=true].pointer-events-none.absolute.from-surface
```

The child is a 32px `linear-gradient(to top, white, transparent)` even when
the spacer's height is zero. Unlike the old variant, it has neither `-top-8`
nor `bg-gradient-to-t`, so v0.16.0's existing paint cleanup does not match.
Extend only the existing transparent-decoration rule to this exact variant.

Keep native-immersive light mode, balanced materials and full-workspace artwork
as already requested; no redesign or new artwork. Verify the newer fade loses
paint, the legacy cleanup still works, and footer/composer/spacer rectangles,
input hit targets, 8px rail separation and scroll clipping remain unchanged at
1440x900 and 980x760.

Two edge cases: the new fade over a zero-height spacer, and repeated fast
scrolling with an attached rail. Save/package/push only; do not import, apply
or restart the user's app.

## Results

- **250/250 isolated browser checks passed**, with zero page errors at
  1440x900 and 980x760 in Chromium 147.0.7727.15.
- The new native class variant was reproduced without either old matching
  class. Its 32px gradient was visibly present in the baseline, and its computed
  background image becomes `none` after cleanup. Screenshot pixels in the glow
  region change in both ordinary and attached-rail cases.
- Fade, zero-height spacer, composer and footer rectangles are identical before
  and after the paint change. Native scroll clipping, fast bidirectional
  scrolling, input clicks and rail separation passed.
- The prior v0.16.0 font, pure-black text, material, hover, settings, geometry,
  lifecycle, cache and performance checks passed unchanged.
- Source comparison confirms `extensions/liquid-runtime.js`, base Safe CSS,
  base theme config and marketplace theme palette are unchanged from v0.16.0.
  The only behavioral source change is one selector added to the existing
  transparent-decoration rule.
- Exact companion: 36,177 bytes, SHA-256
  `496fa081a3c92d18757b4840eca09f79696413294ac2ce9d2047ba78247d8f08`.
- Canonical validation has zero errors. Its pre-existing page-header gradient
  warning remains; this revision makes no change to that header. Marketplace
  validation and the upstream Rust ZIP importer/Safe CSS compiler passed.
- Import ZIP: 2,212,308 bytes, SHA-256
  `365cce67904a874554541359881b93c45d6d51270c1f0713e08cf7ba8e3f9655`.
- Complete ZIP SHA-256:
  `e449b4e88b2d6477059bcf31dcda5a9e9c3f87746e13bef0f53e107cfd1e2e32`.

## Application Status

The app DOM was inspected read-only to locate the current native layer.
No application, import, user-script replacement, hot reload or restart was
performed. The exact new layer and the fix were visually checked in the
isolated native-structure fixture. No private screenshots are distributed.
Update the companion from the complete ZIP as well as the base import ZIP:
an older installed companion cannot include this new selector.
