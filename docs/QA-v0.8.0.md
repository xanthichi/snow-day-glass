# v0.8.0 Verification

## Acceptance Inventory

| Requirement | Check | Evidence |
| --- | --- | --- |
| Fast history scrolling never appears through the input | Reverse scroll with mouse wheel and a stalled main thread; native viewport bottom stays at footer top | Live geometry and private screenshots |
| Footer and user-message white layers are removed | Verify both footer paints, user bubbles, compact task rail and home utility bar | Computed styles and screenshot review |
| Text and sidebar icons stay clear | Route-local contrast, idle and selected icons, hidden row actions | Contrast report and private screenshot |
| Native input and scrolling still work | Click input, return to bottom, short/long content, resize | Playwright interaction and geometry |
| Local glass still works | Pointer hover, keyboard focus, disabled choices, cache limit | Isolated fixture regression |
| No new scroll-script overhead | No scroll listener or RAF in runtime; no filter generation while scrolling | Source audit and runtime metrics |
| Upgrade and lifecycle | Hot reload, theme pause/resume, route unmount/rebind and cleanup | Fixture and live markers |
| ZIP is importable | Rust Safe CSS compiler and package parser; exact file inventory | Native validation output |

## Results

- Codex++ isolated Chromium fixture: **39/39 checks passed**, with zero page
  errors. The fixture covered home utility glass, user-message translucency,
  menu and history hover, keyboard focus, disabled choices, route cleanup,
  rebind, cache limits, click targets, scrolling, and narrow viewport fit.
- Fast forward/reverse wheel checks with and without the composer rail kept the
  scroller bottom aligned to the absolute footer top with **0px measured
  difference** at 1440x900; the 980x760 view had no overflow or clipped input.
- Route-unmount regression: after entering settings, the old composer was
  disconnected, its `data-snow-refraction` was cleared, and runtime owners
  returned to zero. Returning to a thread binds the new composer.
- Append-only streaming fixture: adding 50 DOM nodes without removing the
  composer leaves its filter and owner count unchanged.
- Cache stress: 26 generated maps stayed within the 16-map limit while keeping
  the active composer and hovered choice filters.
- Live Codex++ after loading v0.8.0: the 614x44 home project/plugin rail has a
  translucent gradient and 14px corners; sidebar labels and icons use the
  darker tokens; the conversation composer remained clickable with SDF
  refraction active.
- Live native baseline without the skin: the scroll viewport spans y=96..793
  while the absolute footer begins at y=647. With v0.8.0, the scroll viewport
  ends at y=650.68 and the footer begins at y=650.67; the footer paint layer is
  transparent. The original theme was restored immediately after the baseline
  comparison.
- `node scripts/validate.mjs` passed, and the upstream Rust package parser plus
  Safe CSS compiler accepted the generated Windows ZIP (v0.8.0, 2,212,308
  bytes).
- Private live and synthetic QA screenshots remain outside the repository.
  The fixture report is `C:\Users\youyi\.codexthemes\themes\snow-day-glass\previews\isolated-private-v0.8.0\isolated-report.json`.

## Limits

The base ZIP uses DreamSkin's supported Safe CSS surface contract. Per-row
SDF refraction and native scroll clipping require the companion extension.
This is browser glass material, not Apple's native renderer. Private live
screenshots and conversation content are not shipped or uploaded.
