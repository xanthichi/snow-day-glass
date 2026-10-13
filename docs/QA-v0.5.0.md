# v0.5.0 Verification

Verification date: 2026-10-13.

## Package Import

The ZIP was passed to the original Rust functions `validate_and_read_package`
and `compile_safe_css` from BigPizzaV3/CodexPlusPlus commit
`45f1c1516ea208434731917690932be05c4a0586`. The upstream source was not modified.

- Package identity: `snow-day-glass`, version `0.5.0`.
- Platform: Windows; DreamSkin compatibility version: `1.5.12`.
- Exactly five root files: `manifest.json`, `theme.json`, `theme.css`,
  `background.png`, `LICENSE.txt`.
- All file sizes, SHA-256 digests, image magic bytes and Safe CSS rules passed.
- Native Codex source also passed the canonical `validate-theme.ts` with no
  warnings and was re-exported separately.

## Rendering

The previews use the upstream Windows renderer and base styles with the actual
Rust-compiled package CSS. They are offline fixtures, not real screenshots of
the newly installed app. The fixture has 120 sidebar history rows.

| Check | Evidence |
| --- | --- |
| Full-window wallpaper | `body` contains one background image; `taskMode` is `full` on home, conversation and settings |
| Large containers | Sidebar, main, thread, header and home have no backdrop filter |
| Small glass controls | Project selector uses 4px blur; composer and dialog use 6px blur |
| Composer | `0 3px 12px rgba(43,58,73,0.09)` shadow; no clipping at 1440x900 and 980x760 |
| Sidebar hover | Native row highlight remains; whole-sidebar filter and shadow remain `none` |
| Scroll stress | 180 animation frames with 120 history rows produced zero part writes, style writes, style repairs or part passes |
| Pointer hover | Hovering 12 history rows produced zero style writes, repairs, part writes or part passes; the upstream safety check increments once |
| Geometry | No horizontal overflow at the two checked desktop/narrow viewports |
| Reduced motion | Upstream accessibility layer reduces sidebar and project transitions to `1e-05s` |
| Native font asset | Embedded LXGW WenKai GB loaded in the separate native preview |
| Native artwork fit | Computed `contain`, preserving the full image with letterboxing |

The running older theme was inspected read-only. Its sidebar really used
`blur(18px) saturate(1.6)` and shadow transitions, its main background was
opaque, and its task artwork mode was `ambient`. These findings support the
specific changes in v0.5.0.

## Limits

- v0.5.0 has not been applied to the user's live Codex++ window; actual installed
  performance, renderer reload and cold-launch behavior remain unmeasured.
- Browser fixture frame timing is not the user's Codex++ frame rate.
- DreamSkin Safe CSS cannot select individual sidebar rows or embed fonts.
  Their lightweight native hover is retained.
- DreamSkin uses `cover`; the ZIP cannot enforce an uncropped image at every
  window aspect ratio. The native Codex version uses `contain`.
- The ZIP cannot modify the upstream runtime's observer scheduling.
