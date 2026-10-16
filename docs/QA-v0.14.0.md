# v0.14.0 Verification

## Design And Acceptance

Set the common white fill to alpha 0.50: 50% opacity and 50% transparency.
Keep A v0.12.0 and B v0.13.0 available. Preserve their full Projects/Plugins
body veils, aligned clear sticky headers, whole-app artwork, native-immersive
light layout, balanced glass materials, dark text, blue actions and local fonts.
Chat alpha 0.78 and tool alpha 0.70 remain explicit exceptions.
Audit remaining opaque/near-opaque white chrome before final performance QA:
the native thread titlebar's independent alpha 0.90 plus 14px blur must be
replaced with alpha 0.20 material per the user's latest titlebar request
(80% transparency). Other common materials remain alpha 0.50. Nested summary section headers
must not add white paint over their panel. Inspect every mounted route rather
than assuming a root color reaches native component paint.
The current native settings build uses `bg-primary-soft-alpha` select triggers
with a separate alpha 0.96 white token; clear that nested paint under the
single settings page fill while preserving hover/open, disabled and focus.

Reduce actual SDF work without changing the displacement image or glass:
skip gradient/normal computations for pixels whose displacement is zero.
Reuse the composer's measured rectangle during resize preparation and avoid
duplicate initial observation/preparation. Keep bounded caches, native scroll
clipping, 8px input/rail spacing and cleanup/restore behavior.

Check 1440x900 and 980x760 plus the live window. Compare exact map bytes against
the previous algorithm, measure map-generation CPU separately from GPU or app
frame rate, and rerun existing functional, pixel-occlusion, resize, lifecycle
and zero-scroll-write checks. Verify live readability immediately after apply.

## Results

- **231/231 isolated checks passed**, with zero browser errors at 1440x900
  and 980x760 in Chromium 147.0.7727.15.
- Exact companion SHA-256:
  `6372c1c9c82f35d2169658b0c43d82ef15cbd8d7575ad7a8d69fcad651fc5091`.
  Its size is 33,937 bytes.
- Application titlebar background is alpha 0.20 with no backdrop filter.
  Common panels/input are alpha 0.50. The settings select/search/input/footer
  tests verify transparent nested paint under that one alpha 0.50 page.
- Summary section headings no longer add white. Native composer suggestions
  without menu/listbox roles use the common fill. Settings sticky headings
  retain aligned artwork plus the alpha 0.50 veil, with no blur.
- Projects/Plugins body coverage and header pixel-occlusion comparisons,
  native control states, sidebar hover, input/rail 8px gap, clipping, resizing,
  restoration and cache limits passed. Sidebar scrolling caused zero style
  writes, repairs, part writes or part passes.
- A true multiline input resize performs one runtime layout read. Rebinding
  performs two reads (initial bind and initial ResizeObserver notification),
  with one map and one active owner; duplicate preparation is removed.
- Independent old/new SDF comparison covered 180 dimensions with byte-identical
  output. Warmed five-round CPU microbenchmark medians were 50.8ms versus
  24.5ms for 100 map pixel calculations, about 52% less. This excludes PNG
  encoding/GPU and is not an application frame-rate claim.
- Live window approximately 1201x817: thread titlebar alpha 0.20/filter none,
  composer alpha 0.50, one active cached map and horizontal overflow 0px.
  Immediate screenshot-pixel readability gates passed after each application.
- Read-only navigation scanned General, Appearance, Voice, Storage,
  Configuration, Personalization, Keyboard shortcuts, Plugins, Computer use,
  Browser, Hooks, Git, Environments and Worktrees. The discovered independent
  white settings select/search/input/footer/heading paints were fixed and
  rescanned. No preferences were changed. A solid fallback color behind the
  opaque wallpaper in sticky headings is intentional; the displayed material
  contains the same 50% white veil rather than a white block.
- Live profile menus, Codex++ settings, conversation and native input candidates
  were checked. Screenshot-pixel readability gates reported zero failures.
  Private screenshots are not included in distribution.
- Canonical static validation has zero errors; its constant-white-gradient
  warning is covered by the live readability and header pixel-occlusion checks.
  Marketplace validation passed.

## Distribution

- The upstream Rust importer and Safe CSS compiler accepted the final import
  ZIP. It contains exactly five allowed files and matching manifest hashes.
- Import ZIP: 2,212,317 bytes, SHA-256
  `3dc47b0fde5077fabe9ef89375d236a14bfe014db7571d54f63d58f0f7273aa4`.
- Complete ZIP SHA-256:
  `1372e24579029b359075ea39a5234748ae93384325bc71a0a3c3adff09e8d053`.
  Its seven entries include the exact import ZIP and tested companion.
- Persistent companion installation retains the prior-file backup. Its hash
  matches the tested runtime; current live marker is v0.14.0 and loaded.
- Managed native source and the portable export were refreshed. Native package
  validation is separate from the live Codex++ companion checks above.

## Limits

The current app exposed settings-based Plugins navigation rather than the older
directory layout. Existing Projects/Plugins directory shapes and long scrolling
were verified in the upstream browser fixture. An exhaustive claim for every
possible external plugin, terminal state or file content is not made.
No desktop restart was performed. The live application uses the existing
DreamSkin base with the full companion overrides; ZIP import compatibility is
verified separately with the upstream Rust parser.
