# v0.9.0 Verification

## Design Contract

- Native immersive layout, workspace artwork, balanced decoration, light mode.
- Preserve the supplied winter artwork at 50% 50%.
- One white fill per surface: sidebar/composer/panels 0.80, chat bubbles 0.78,
  tool cards 0.70. Sidebar text is black; action buttons are blue with white icons.
- Preserve native geometry, hover-only actions, disabled state, editor behavior,
  syntax colors, scroll clipping, bottom anchor and input hit targets.
- Target desktop and narrow windows: 1440x900 and 980x760, plus the live split
  file-pane window.

## Acceptance Inventory

| Requirement | Check |
| --- | --- |
| No white band above the input | Real sticky spacer gradient and footer paint are transparent |
| 80% panel fill | File pane, selected tab, menu and summary panel use one white material |
| Black sidebar text | Labels, titles and icons remain readable and hidden actions stay hidden |
| Matching chat bubbles | User and assistant surfaces use 0.78; nested wrappers do not add white |
| 70% tool fill | Tool/output cards use 0.70 |
| Blue action buttons | Send/stop/pause/resume/abort have white icons; ordinary controls stay native |
| Native interactions | Fast scroll, bottom anchor, input, menu keyboard focus, editor and narrow fit |
| Performance and lifecycle | No scroll listener, RAF or polling; bounded map cache and cleanup |
| Import compatibility | Upstream Rust package parser and Safe CSS compiler |

## Results

- **64/64 isolated browser checks passed**, zero page errors. Evidence covers
  actual SVG paths on send/stop controls, all fill levels, editor Shadow DOM,
  disabled buttons, pointer and keyboard states, cleanup, cache limits and
  desktop/narrow geometry.
- The tested companion SHA-256 is
  `4c6874256e90d9a6f8b23af8df769c2c6a9b087e391f584144957119fb530f51`.
- Fast forward/reverse scrolling with and without the composer rail showed
  0px fixture error between the scroll viewport bottom and footer top. No
  stylesheet writes or part rescans occurred in isolated scroll tests.
- Live Codex++ at 1187x803: sidebar labels are `rgb(0,0,0)` over white alpha
  0.80; composer, menus, selected file tabs and the file pane use alpha 0.80;
  chat bubbles use alpha 0.78 and standalone tools use alpha 0.70.
- The file-pane wrapper owns its white fill. Its `diffs-container` host and
  internal Shadow DOM file background are transparent; red/green syntax and
  diff highlighting remain visible.
- Both live footer paint and sticky-spacer background images are `none`.
  Real mouse-wheel scrolling reached offset -2600 and returned to the bottom.
  The scroll/footer boundary error was 0.01px; the editor remains focusable and
  the page has zero horizontal overflow.
- Live homepage send and running conversation stop controls are blue
  `rgb(47,111,237)` with white SVG paths. Goal pause controls match. Edit,
  attachment, permissions and reasoning controls retain their original form.
- Canonical `validate-theme.ts` passed with zero errors or warnings.
  Canonical `qa-contrast.ts --port 9229` passed on home, conversation and the
  split file-pane view with zero computed or screenshot-pixel failures.
- Desktop and narrow synthetic previews are included in `previews/` and are
  labeled as design previews. Private live captures remain outside the repo.

- Both distribution ZIPs were generated. The import ZIP passed the upstream
  Rust `validate_and_read_package` and `compile_safe_css` checks for Windows,
  theme `snow-day-glass`, version 0.9.0. It contains exactly the supported
  five package entries, totals 2,212,319 bytes, and has SHA-256
  `64c89d1400d76ee5ffc901b8235cad533d612f70bc2edfa026fbf2cd61319eb4`.
- The complete ZIP contains that import ZIP plus the matching companion,
  installer, documentation and upstream MIT attribution. It is a distribution
  archive and must be extracted before importing the nested theme ZIP.

## Limits

The DreamSkin ZIP contains Safe CSS and the supplied image. The companion is
required for precise component hooks, local SDF refraction and blue controls.
Live screenshots and conversation contents are kept private. Synthetic
previews are labeled as design previews. A cold restart is not needed to
apply the companion, and is not performed during live QA.
