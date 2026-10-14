# Snow Day Glass v0.9.0

1. Import `snow-day-glass-theme-v0.9.0.zip` in DreamSkin and apply it.
2. Run `pwsh -File extensions/Install-Glass.ps1`.
3. Use **Hot Reload Extensions** in Codex++.

The complete distribution ZIP contains the import ZIP, the companion and its
installer. Extract it first; the complete ZIP itself is not a DreamSkin package.

White fills use alpha 0.80 for the sidebar, composer and panels, 0.78 for chat
bubbles, and 0.70 for tool output. Text and native hidden/disabled controls keep
their own opacity. The companion also supplies liquid hover refraction, removes
the footer glow and uses blue backgrounds with white icons for action controls.

Disable with `pwsh -File extensions/Install-Glass.ps1 -Disable`, then use
**Hot Reload Extensions** again.

Artwork source: https://www.pixiv.net/artworks/139476242.
SDF refraction attribution: `licenses/shuding-liquid-glass-MIT.txt`.
