# v0.6.0 Verification

Date: 2026-10-13. The package, companion and installer were verified separately.

## Protocol

- Native Rust `validate_and_read_package` and `compile_safe_css` passed.
- Validator source: unmodified CodexPlusPlus
  `45f1c1516ea208434731917690932be05c4a0586`.
- The relevant package validator and official extension API sources are identical
  to the installed app's v1.7.1 tag, commit
  `5fe25892eb312abbc091512565a8dc2621a8c999`.
- The DreamSkin ZIP contains exactly five allowed files.
- The user extension is a separate artifact; it is not smuggled into Safe CSS.

## Behavior

The following 18 checks passed with the upstream renderer in an offline
fixture, before and after compacting the generated CSS:

1. Main, messages, reasoning, tools, nested article, detail panel, old utility
   bar and disabled suggestion have no backdrop filter.
2. All 120 idle history rows have no backdrop filter.
3. Only one companion stylesheet exists; desktop has no horizontal overflow.
4. The hovered history row has gloss and `blur(7px) saturate(1.18)`.
5. Hover does not change the row's bounding box.
6. The hovered row's action appears; another row's hidden action stays hidden.
7. The menu shell has no stacked backdrop filter.
8. The hovered candidate is glass; the disabled candidate remains unfiltered.
9. Keyboard highlight is glass with a visible focus outline and skips disabled.
10. Reduced motion removes transitions.
11. 980x760 has no horizontal overflow or clipped composer.
12. 180-frame sidebar scrolling produces zero stylesheet writes, repairs or
    part rescans.
13. Hovering 12 history rows produces zero stylesheet writes, repairs or part
    rescans.
14. Switching away from the theme removes the companion's scope.
15. Pausing the theme removes the companion's scope.
16. Repeated extension loading keeps exactly one stylesheet.
17. Cleanup removes the stylesheet and its root marker.
18. Reapplying after cleanup works.

The installer was checked in an isolated temporary directory for initial
install, repeat install with a backup, and disable. AppData was not changed.

The canonical screenshot-pixel readability checker sampled 47 text elements
with the candidate menu open: zero failures at its 2.5:1 threshold. This is a
readability guard, not a full WCAG conformance audit.
The live window was inspected read-only and exposes extension API v1 with
cleanup, and the expected history, navigation and candidate selectors.

## Cost

- No polling, animation loop, pointer tracking, subtree observer or backend call.
- One root-only observer watches `style`, `data-dream-skin` and
  `data-codexthemes-theme`; it does not observe its own marker.
- Blur and shadow are never animated.
- Reading and input surfaces have no blur. Only hovered/focused/highlighted
  small controls allocate glass surfaces.
- Generated CSS is compacted; the readable source remains in the repository.
  The generated companion is 9,281 bytes, down from 11,330 bytes.

## Limits

These are offline fixture and protocol checks, not a guarantee of every Codex
build or GPU. The new companion has not been installed or measured in the user's
live window. Codex++ does not guarantee every native DOM selector remains stable.
The material is an iOS-inspired CSS approximation, not Apple's native optics.

Importing only the DreamSkin ZIP does not supply per-row hover or remove the
upstream internal tool blur. Install the companion and hot reload to get the
full effect. DreamSkin still uses cover sizing for its background.
