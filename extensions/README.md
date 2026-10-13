# Liquid Glass Companion

`snow-day-liquid-glass.js` uses the official Codex++ user extension API v1.
It supplies the per-row and per-candidate hover styles that a DreamSkin ZIP
cannot express. It also clears the upstream reasoning/tool/sticky blur.

Import the separate `snow-day-glass-theme-v0.6.0.zip` through DreamSkin first.
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

Select **Hot Reload Extensions** again. Only this companion's CSS is removed.

The generated extension contains one style node and one observer restricted to
three root attributes for theme switching and pause/resume. It has no subtree
observer, polling, pointer tracking, animation loop or backend calls.
The idle history rows and all reading surfaces have no blur; only the current
hover/focus/highlighted choices receive a small 7px glass backdrop.

`liquid-glass.css` is the readable source. Regenerate the companion with
`node scripts/build-liquid-extension.mjs`.
