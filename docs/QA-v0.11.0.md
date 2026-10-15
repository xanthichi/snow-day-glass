# v0.11.0 Verification

## Design And Acceptance

- Layout mode: native-immersive; background scope: the whole application as
  explicitly requested; decoration density: balanced.
- Keep the existing light winter artwork, centered focal point, dark readable
  text, blue actions, local system fonts and bounded hover refraction.
- Replace remaining opaque white page surfaces with a single white fill of
  alpha 0.80. Codex++ settings and native settings must not stack an opaque
  page, an 80% dialog and another opaque card over the artwork.
- Preserve the existing 78% chat and 70% output materials. Foreground opacity,
  switch thumbs, selected/disabled states, syntax colors and dark relay-plugin
  dialogs are not white page backgrounds.
- Remove the extra DreamSkin sticky-header backdrop blur without hiding the
  native heading, search, actions or sticky layout.
- Clear the verified 4px outer-shell right inset so the right file pane meets
  the application's outer border. Keep native pane widths and resize behavior.
- Preserve native scrolling, clipping, composer/rail 8px separation, keyboard
  focus, attachments, controls and lifecycle cleanup.
- Target desktop and narrow viewports: 1440x900 and 980x760; also inspect the
  user's existing Windows desktop window without restarting it.

## QA Inventory

| Claim or state | Check and evidence |
| --- | --- |
| Codex++ home/settings page | Outer alpha 0.80; inner modal/card/nav clear; screenshot and composed alpha |
| Overlay over populated page | Covered native content does not ghost through; navigation rail stays visible; closing restores content and geometry |
| Extensions page and focused search | Late-mounted local tokens; focused input; readable install/action text |
| Native settings | Page alpha 0.80; section cards do not add an opaque white layer |
| Menus and independent dialogs | Separate alpha 0.80 surface; visible labels, focus and disabled controls |
| Plugins sticky header | Pseudo-element backdrop filter none; heading/search/actions usable before and after scroll |
| Right file pane | Right edge equals outer frame right edge; pointer resizing preserves edge and avoids overflow |
| Home and conversation | Existing glass, 8px rail gap, scroll clipping, blue buttons and local fonts preserved |
| Restore/reapply and late mounts | Native baseline restored; no extra styles, observers or filter-cache growth |
| Narrow/off-path states | Small viewport, focused search, quick scroll reversal and route changes |
| Packaging | Matching versions, upstream ZIP/Safe CSS acceptance, hashes and no embedded fonts/private screenshots |

## Results

- **195/195 isolated browser checks passed**, with zero page errors in
  Chromium 147.0.7727.15 at 1440x900 and 980x760.
- The tested companion is 31,216 bytes, SHA-256
  `0dbb459cae304474626607003cc372f489dd8a2068b800426f1ea2d0871a4233`.
  The repository, fixture runtime copy and report all match.
- Codex++ home and extension pages compose one alpha 0.80 white fill.
  The inner modal, cards and navigation remain transparent after local token
  updates. White switch thumbs, disabled opacity, install-button foregrounds,
  selected states and focus remain distinct.
- Native settings page and section cards follow the same single-owner rule.
  Actual native select triggers use `--color-surface`; their idle paint is
  transparent while hover/open, disabled and keyboard focus remain native.
- Opening Codex++ over populated native settings and an open sibling file pane
  hides covered native content and preserves the navigation rail. Measured
  geometry is unchanged; closing, cleanup and reapply restore the correct state.
- Sticky-header pseudo-elements use alpha 0.80 white fill with no backdrop blur.
  Heading, search and actions remain mounted and clickable during fixture
  scrolling; composer-containing sticky regions retain their own filters.
- File panes meet the outer frame exactly at both widths, including after a
  pointer divider drag. Native baseline evidence reproduces the original 4px
  inset; themed horizontal overflow is zero.
- Existing native scroll clipping, fast scroll reversal, 8px composer/rail gap,
  blue action buttons, bounded filter cache, lifecycle cleanup and no-font
  checks passed with the new artifact.
- Live Codex++ at approximately 1199x815 confirmed native and Codex++ settings,
  no covered-page text ghosting, native select menus, Plugins search and clear
  header, file pane right gap 0px, divider dragging and page restoration.
- The live screenshot-pixel readability gate passed on settings, Codex++
  settings, Plugins and the populated conversation/file view with zero failures.
  The native Appearance page retained a warning for its small blue `Aa` sample
  glyph (2.86:1); its actual labels had no failures. No app settings were changed.
- Canonical theme validation passed with no errors or warnings; the marketplace
  manifest validator passed. Distribution ZIP results are recorded below.

## Distribution

- The upstream Rust importer and Safe CSS compiler accepted the final import
  ZIP using `validate_and_read_package + compile_safe_css`.
- Import ZIP: 2,212,335 bytes, SHA-256
  `3c67d5527193767af10d82973a15f009976d20ff8ddf8bbf32ca9068b5489f53`.
- Complete ZIP: 2,224,644 bytes, SHA-256
  `12d43e7a0df8e154cb3d28b250e5f8789016f08d69916434da0c1e6c7fea8aea`.
- The import ZIP contains exactly the five supported files; each payload size
  and SHA-256 matches its manifest. The complete ZIP contains the same import
  ZIP and the tested companion byte for byte, installer, instructions and
  licenses. Neither archive includes fonts, private screenshots or local paths.
- The persistent companion was installed with its prior-file backup retained.
  The current window reports v0.11.0 loaded. No desktop restart was required.
- Managed native source and the portable `.codex-theme` export were refreshed
  to v0.11.0. The native package is statically validated; this revision's live
  checks use the user's existing Codex++/DreamSkin runtime and companion.

## Limits

Live Plugins had too few visible entries to exercise a long list; scrolling
and sticky states were tested in the separate upstream-based fixture.
Cold application launch and a full desktop restart were not performed. This
revision uses CSS only and does not add JavaScript observers, scroll listeners,
pointer-move tracking or frame loops. Private live screenshots and conversation
data are not distributed; public previews are labeled synthetic design previews.
