# Changelog

## 0.13.0 - 2026-10-15

- Comparison B: change common white fills to 20% opacity / 80% transparency.
- Keep A's full Projects and Plugins page veils and artwork-aligned sticky
  header materials, which occlude scrolled text without blur or stacked white.
- Preserve explicit chat alpha 0.78, output alpha 0.70, semantic icon/switch
  whites, hover highlights, native controls and layout.
- Retain A's separately pushed v0.12.0 packages for comparison.

## 0.12.0 - 2026-10-15

- Comparison A: keep common white surfaces at 80% opacity / 20% transparency.
- Extend the white veil across the full Projects and Plugins page bodies,
  including empty space, without adding another white layer at their headings.
- Preserve chat/output fills, native controls, hover glass and layout.

## 0.11.0 - 2026-10-15

- Use one 80% white page fill for Codex++ settings, including its inline token
  island, navigation and cards; keep switch, selection and focus states intact.
- Hide only the covered native page while the Codex++ page is open so artwork
  shows through instead of underlying text; closing restores its layout.
- Make native settings pages translucent and clear their nested card paint.
- Remove DreamSkin's additional sticky-header backdrop blur while preserving
  native headings, search, actions and sticky behavior.
- Clear the verified 4px outer right inset so file panes reach the window edge
  without overriding pane dimensions or resizing.
- Give independent menus, action tooltips, notifications and the scroll-to-bottom
  button the same 80% white material.

## 0.10.0 - 2026-10-14

- Paint the home input body rather than its layout root, so the glass filter
  no longer covers the attached project/plugin rail.
- Replace the attached rail's native tuck and overlap with an 8px gap while
  preserving its layout padding and animations; translucent input and rail
  edges no longer paint over each other.
- Remove the embedded font-face data, WOFF2 asset and bundled font license.
  Typography uses installed system fonts with local Consolas priority.

## 0.9.0 - 2026-10-14

- Clear the actual sticky spacer gradient above the composer in addition to
  the footer paint; preserve the native compositor scroll boundary.
- Use single white fills: 80% for the sidebar, composer and floating/file
  panels, 78% for both user and assistant chat surfaces, and 70% for tool cards.
- Make sidebar text black and retain native hidden-action and disabled states.
- Clear duplicated white backgrounds in file tabs and the Shadow DOM editor
  without changing syntax highlighting or editor geometry.
- Use blue backgrounds and white icons for send, stop, pause, resume and abort
  controls, preserving ordinary attachment, permissions and edit controls.

## 0.8.0 - 2026-10-14

- Replace frame-based transcript clipping with a native compositor viewport
  boundary above the absolute composer footer; fast reversed scrolling no longer
  lets history briefly show through transparent glass.
- Remove both native footer white paint variants and the compact task-rail
  white layer; keep the rail translucent with a static glass edge.
- Keep user message bubbles translucent instead of opaque white and darken
  secondary text and sidebar icons with scoped semantic tokens.
- Clear stale composer references when routes unmount the input, and make the
  extension marker version derive from the package manifest during generation.
- Remove unsupported DreamSkin `box-shadow` declarations from the base Safe CSS;
  the companion extension owns the subtle composer shadow.

## 0.7.0 - 2026-10-13

- Replace hovered-choice blur with cached SDF/SVG edge refraction adapted from
  shuding/liquid-glass; add the full upstream MIT license.
- Clear the composer's empty white footer paint; use a transparent glass input.
- Clip only the transcript above the input, preserving native scroll and footer
  geometry so historical messages do not show through the composer.
- Darken top menu text and running-status shimmer text.
- Fill the sidebar to the application bottom; give its content panel four
  16px corners and remove stacked white materials.
- Bound refraction maps to 16, pin active maps, and release obsolete hover
  nodes. Pointer changes and size changes build maps; scrolling does not.
- Pass live readability, scroll-overlap and refraction pixel checks in Codex++,
  plus the existing offline lifecycle and performance matrix.

## 0.6.0 - 2026-10-13

- Add an iOS-inspired glass companion through the official Codex++ extension API.
  History, navigation and menu candidates receive local glass on pointer hover
  and keyboard highlight.
- Clear blur from reading, reasoning, tools, unmarked nested articles, detail
  panels, composer and old home utility bars.
- Keep the input's soft shadow; idle history rows and menu shells remain unfiltered.
- Guard the companion against theme switches and pause; clean up its single
  stylesheet and root-only observer on hot reload.
- Pass 18 functional/lifecycle/performance fixture checks before and after
  compacting generated CSS.
- Deliver a Safe CSS ZIP separately from the complete ZIP plus user extension.

## 0.5.0 - 2026-10-13

- Enable one continuous full-window background with `art.taskMode: full`.
- Remove the sidebar-wide 18px blur, whole-sidebar hover shadow and animated shadows.
- Keep the sidebar's native row hover and selected state; use small static 4-6px
  glass filters for the project selector, composer and dialog.
- Give the composer a soft 3px-offset, 12px-blur shadow.
- Keep long messages readable on translucent surfaces without message-wide filters.
- Add an explicit five-file ZIP builder that regenerates manifest hashes from
  the actual packaged bytes.
- Validate the ZIP through the upstream Rust importer and Safe CSS compiler.

The native Codex version retains embedded LXGW WenKai GB. The DreamSkin ZIP
continues to use generic system fonts because its Safe CSS API cannot embed fonts.
