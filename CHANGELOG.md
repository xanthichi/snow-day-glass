# Changelog

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
