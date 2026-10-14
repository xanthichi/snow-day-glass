# v0.10.0 Verification

## Design And Acceptance

Keep the native immersive light workspace, 80%/78%/70% reading fills, black
sidebar labels, blue actions and existing artwork. The bounded geometry change
replaces the attached rail's tuck into the composer with an 8px gap. Native controls,
animations, input growth, attachment layout, keyboard focus and scroll clipping
remain invariants.

Checks cover home and thread composer paint boundaries, single/multiline
input, above/below rails, native overlap variants, resizing, tool clicks, local
filter ownership, route cleanup, and absence of embedded/font-file resources.
Desktop and narrow views use 1440x900 and 980x760.

## Results

- **105/105 isolated browser checks passed**, with zero page errors.
  The tested companion SHA-256 is
  `06263c89d0a8750f08aa0dfc186f2891628679f7efd72a7ae14ec89f3c145750`.
- Home input and below rail: 8px gap and 0px painted intersection at desktop
  and narrow widths, before and after multiline input growth.
- Thread ordinary, queued and expanded rails: 8px gaps, 0px painted
  intersection and 0px scroll-boundary error. The native baseline showed
  4px overlap, or 16px for its expanded overlap variant.
- Pointer hits, keyboard focus, rail button clicks, send controls, resizing,
  route cleanup, filter cache and the prior regression matrix passed.
  Attachment upload is not claimed: the fixture checks attachment-control
  appearance and hit targets without selecting a user file.
- Refraction is owned only by the home input body. Its layout root is
  transparent and unfiltered; the attached toolbar has its own white fill.
- Five distribution source checks found no font-face declaration, embedded
  font data or font files. The native theme CSS shrank from 10,676,153 bytes
  to about 32KB; the WOFF2 and font-license resources were removed.
- Live Codex++ at 1187x803 confirmed the 8px home gap, transparent layout
  root, body-only refraction, keyboard focus and zero horizontal overflow.
  Conversation input and scroll clipping remained usable.
- Canonical static validation passed with no errors or warnings. The live
  screenshot-pixel readability gate passed on the home and conversation views.
- A separately styled relay plugin dialog keeps its native dark background
  and white text when DreamSkin assigns it a dialog part marker.
- Synthetic previews include desktop and narrow home composers, and ordinary,
  queued and expanded thread rails. Private real-window screenshots are not
  distributed.

The import and complete ZIPs are rebuilt from this exact companion. The
import ZIP is checked with the upstream Rust parser and Safe CSS compiler.
The final import ZIP is 2,212,319 bytes with SHA-256
`b631e92e8e6d218a703ca39ca5af942dfd516fef767eeac5cbe31aa183d8cd03`;
the complete ZIP is 2,223,911 bytes. Both have no font resources.

## Limits

The companion is required for precise native component styling. Private live
screenshots and user conversation data are not included in distributed files.
No application restart is performed during live QA.
