# v0.16.0 Verification

## Design And Acceptance

Keep the v0.14.0 materials and optimized runtime, with the v0.15.0 local font
pairing: Consolas for supported Latin/digits and Microsoft YaHei for Chinese.
Apply the font to global HTML text, including explicitly styled descendants,
menus, settings, prose, form controls and code. Preserve SVG/icon-font glyphs
and mathematical typesetting; bridge the existing diff editor font variable.
Do not embed, download or distribute fonts.

Make sidebar neutral text, marquee labels and composer editable text pure
black. Cover native primary-ghost alpha tokens as well as inherited colors.
Keep disabled opacity, hidden hover actions, semantic statuses, blue action
buttons/white icons and code syntax colors unchanged.

Preserve titlebar alpha 0.20, common fill alpha 0.50, message alpha 0.78 and
tool alpha 0.70, full-app artwork, native-immersive light layout and balanced
materials. No unselected-sidebar white-layer change.

Check 1440x900 and 980x760, actual local font glyphs, descendants that override
fonts/colors, late-mounted menus, editor placeholders, black text, preserved
semantic colors, native geometry/scrolling and zero added runtime observers.
The user previously requested save only; do not apply/import/restart Codex++.

## Initial Read-Only Diagnosis

The live app still reports companion v0.14.0 and generic ui-monospace, so the
saved-only v0.15.0 font stack has not been applied there. Separately, native
sidebar labels inherit an explicit primary-ghost color with alpha 0.85 even
when their row is black. The ProseMirror editor explicitly uses ds-text,
whose old value is #141a20. Fix those owners in the saved v0.16.0 sources.

## Results

- **244/244 isolated checks passed**, with zero browser errors at 1440x900
  and 980x760 in Chromium 147.0.7727.15.
- Global typography tests cover explicit serif component declarations, nested
  font-token islands, sidebar marquee text, editable paragraphs/spans and a
  diff Shadow DOM consuming its own native font variable. All use the intended
  Consolas/Microsoft YaHei stack.
- Platform font evidence confirms local Consolas for all 18 sampled Latin/digit
  glyphs and local Microsoft YaHei for all six Chinese glyphs. No custom font
  resource is used.
- Sidebar primary-ghost and marquee labels, and composer editable descendants,
  compute to rgb(0,0,0). Blue action text remains white; red syntax and green
  status text remain unchanged. Disabled opacity remains 0.4.
- Icon-font, SVG and mathematical-renderer font declarations remain intact.
  Existing page materials, hover, focus, scroll clipping, pane geometry,
  composer spacing, lifecycle, performance and no-font-payload checks passed.
- Exact companion: 35,936 bytes, SHA-256
  `bc1c8f0fbfe794bbc58fc27eb0975f57ffc6cf382094aa7e1d4ce9602c7c169d`.
- Runtime JavaScript and base Safe CSS are unchanged from v0.15.0/v0.14.0.
  This update adds no observer, polling, scroll or pointer-move work.
- Canonical static validation has zero errors. The pre-existing gradient
  contrast warning remains; no v0.16.0 live-application/readability pass is
  claimed under the save-only instruction. The live diagnosis above was
  read-only. Public previews are synthetic design previews.
- Marketplace validation and upstream Rust ZIP import/Safe CSS compilation
  passed. Import ZIP: 2,212,337 bytes, SHA-256
  `f3d84f97c76b894a190415dc8aed1320b719267bcc8dfee1a3c03efe53860b21`.
- Complete ZIP SHA-256:
  `d684c014afba5041874d8f611d65c121c9879b38e124d064cfbd4dc64074a6a2`.

## Application Status

Saved and packaged only. The active companion remains v0.14.0. Installing the
same-version companion is required to activate named global fonts; the Safe CSS
ZIP itself supports only generic font families. No live application, import,
hot reload or persistent user-script replacement was performed.
