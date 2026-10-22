# v0.18.0 Verification

## Design And Acceptance

Restore text from the unskinned Codex light appearance, not any previous
Snow Day Glass version. Remove custom font families, weights, sizes, spacing,
foreground/caret/text-shadow rules and text-token overrides from the theme.
The DreamSkin engine also adds typography; reversibly suppress those
declarations only in its registered stylesheet so native author rules win.
Do not edit application files or other extensions' stylesheets.

Keep existing wallpaper, translucent materials, blue action backgrounds,
refraction, geometry and native scroll clipping. Keep native semantic text,
disabled states, placeholders, code fonts and syntax colors. Use the app's
native light appearance; do not substitute a hardcoded black/font theme.

The white glow is the 32px native scroll-spacer fade documented in v0.17.0.
Read-only inspection still finds an active v0.14.0 companion and the installed
script has that version too. Importing a ZIP does not replace a user script.
Verify both the package and companion version during manual installation.

Check desktop 1440x900 and narrow 980x760: compare typography with the same
fixture without skin markers, test late-mounted controls, text restoration on
disable/re-enable, unchanged geometry/materials and no scroll work. Exercise
zero-height spacer fades and quick bidirectional scrolling. Save/package/push
without applying or restarting the user's app.

## Results

- **237/237 isolated checks passed**, with zero browser errors at 1440x900 and
  980x760 in Chromium 147.0.7727.15.
- **19/19 native-light reference checks passed**, with zero page errors and
  zero typography differences at both viewports. The isolated reference uses
  author CSS read from the real Codex app, without changing the running app.
  Unskinned and
  themed values matched for font family, size, weight, style, variant, line
  height, letter/word spacing, color, caret, text shadow, decoration and
  opacity on sidebar, headings, prose, links, code, inputs, menus and composer.
  Newly mounted menu/input content also matched. Placeholder pseudo text,
  input placeholders and native UI/code font tokens were compared as well.
- Engine-owned text/opacity declarations are released only in the registered
  DreamSkin stylesheet. Disabling the companion restored all declarations and
  priorities; reapplying restored native typography with no cumulative changes.
- Native font tokens match Codex unskinned light: UI uses native
  Segoe/system sans (`--default-font-family`) and code uses native
  ui-monospace/Consolas. The full HTML `body, body *` font-family override is
  removed. No app stylesheets or app files are changed. The engine-sheet release
  reuses the existing scope observer and processes each sheet once; no observer,
  listener or timer is added. Scroll checks record zero stylesheet writes,
  attribute repairs and part rescans.
- The exact v0.17 32px chat spacer fade has no paint, its geometry unchanged;
  the v0.17 no-rail/rail screenshot-pixel, scroll, fade and composer checks pass.
- Wallpaper/surface materials, titlebar alpha 0.20, common alpha 0.50, chat
  alpha 0.78, tool alpha 0.70 and blue action backgrounds are preserved.
  Composer/sidebar text, action foregrounds and icon fonts use native styles;
  the previous forced-black/forced-white rules are removed.
- Static theme validation and marketplace validation pass. The upstream Rust
  importer and Safe CSS compiler accept the ZIP. The native-theme validator has
  one existing constant-header-gradient warning, retained for the requested
  translucent header material. It is not a real-app visual acceptance result.
- Import ZIP: 2,212,280 bytes, SHA-256
  `be0d43a177755ea3695b668dae310641a0c6f2ba699a94a2e65e6a2f8e1a7ba5`.
- Complete ZIP: 2,226,178 bytes, SHA-256
  `9b6e82b0986be46c3d4139d6e669266d74965efde88190f46db6eec46f1bbcb6`.
- Companion: 33,479 bytes, SHA-256
  `5b27742638ac12bf73fa86968826e571b0b282b15e97d7eff7018342c55d582f`.
- Saved only. No current app import, application, user-script replacement,
  hot reload or restart was performed. No private screenshots are packaged.
- Public workspace previews are synthetic design previews. Full live-app
  visual acceptance, cold launch and native dark startup were not tested for
  this revision. Private native CSS references and detailed fixture reports
  remain outside the published repository and packages.
