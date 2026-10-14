# Changelog

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
