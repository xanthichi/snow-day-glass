# Liquid Glass Companion

`snow-day-liquid-glass.js` uses the official Codex++ user extension API v1.
It supplies per-row and per-candidate SVG refraction that a DreamSkin ZIP cannot
express, and clears upstream reasoning/tool/sticky blur.

v0.18.0 restores typography from unskinned Codex light appearance. It removes
the theme's custom font stacks, forced-black labels and other text overrides.
Native UI/code font differences, foregrounds, placeholders and disabled states
remain under Codex's own styles. No fonts are downloaded or embedded.
Use Codex's native light appearance for the requested text palette.

DreamSkin itself supplies text overrides. This companion reversibly releases
text declarations only in the engine's registered stylesheets, leaving their
materials and layout unchanged. Disabling or cleaning up the companion restores
those declarations and priorities. Other extensions' sheets and application
stylesheets are not changed.

The native 32px bottom-spacer white fade is cleared without changing its
geometry. Its newer class no longer includes `bg-gradient-to-t`.
Importing a theme ZIP does not replace an installed user extension: update
both the ZIP and companion, then hot reload. Read-only inspection during this
revision found the live and installed companion still at v0.14.0.

Import the separate `snow-day-glass-theme-v0.18.0.zip` through DreamSkin first.
Then run:

```powershell
pwsh -File extensions/Install-Glass.ps1
```

In Codex++, select **Hot Reload Extensions**. A page refresh may occur if other
extensions cannot clean up synchronously. This script does not launch or restart
Codex, modify its application files, read conversations, or access the network.

To disable and restore the underlying theme styles:

```powershell
pwsh -File extensions/Install-Glass.ps1 -Disable
```

Select **Hot Reload Extensions** again. The companion removes its owned CSS and
SVG resources and restores the engine text declarations it released.

The generated extension contains bounded SVG definitions and owned stylesheets.
It observes three root attributes and engine part markers. Resize observers
watch only the input geometry. Text release reuses the existing scope observer
and visits each registered sheet once; it adds no observer or timer.
The transcript boundary is native CSS, so the
extension has no scroll listener, frame callback, polling, or pointer-move
tracking. Child-list records are ignored unless a removed subtree contains the
active composer; only then does it look up the replacement node and release the
old resize observation and refraction map.
Delegated pointer entry and focus changes prepare the current small target.
The home composer binds refraction to its body only; its layout root stays clear.
Attached tool rails have an 8px gap from the input paint instead of tucking
under its rounded edge.

The current common white fill uses 50% opacity / 50% transparency.
The top application titlebar separately uses 20% opacity / 80% transparency.
B v0.13.0 uses 20% opacity; A v0.12.0 uses 80% opacity. Switch both the theme
ZIP and companion together to compare them. Codex++ and native settings own
a single common white fill. Projects and
Plugins page bodies also have a complete single white veil. Nested page,
card and navigation paint is clear; local control states and white switch
thumbs stay native. Additional sticky-header blur is removed without hiding
headings, search or actions. The outer shell's 4px right inset is cleared so
file panes meet the window border without changing their sizing rules.
While a Codex++ page is open, covered native content is hidden without changing
its geometry; closing the page restores it, avoiding text ghosting through glass.

Maps are cached with a limit of 16. The input is pinned and old hover references
are released. The center is undisplaced; only rounded edges refract the backdrop.
The native footer and scroll spacer gradients are transparent. Reading
surfaces use single 50%, 78% or 70% white fills, and action controls keep blue
backgrounds with native foregrounds. The file pane owns its white fill while its Shadow DOM
editor background stays clear. The
native scroll viewport ends above the absolute footer so old messages cannot
show through the glass input during fast scrolling.

Zero-displacement pixels skip SDF gradient/normal work while retaining exactly
the same map bytes. Resize preparation reuses its measured rectangle and does
not prepare the initial composer twice. Map dimensions, strength, cache limits
and event/observer architecture remain unchanged.
The independent native 90% titlebar paint and blur, newer 96% settings control
paint, settings search/input/footer paint and nested summary-header white are
cleared at their owning component roots. Sticky settings headings reconstruct
the same wallpaper and veil so scrolled text remains occluded.

`liquid-glass.css` and `liquid-runtime.js` are the readable sources. Regenerate with
`node scripts/build-liquid-extension.mjs`.

The SDF/SVG technique is adapted from shuding/liquid-glass. Its complete MIT
license is in `licenses/shuding-liquid-glass-MIT.txt`.
