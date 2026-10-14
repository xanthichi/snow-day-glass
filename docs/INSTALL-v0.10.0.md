# Snow Day Glass v0.10.0

1. Import `snow-day-glass-theme-v0.10.0.zip` in DreamSkin and apply it.
2. Run `pwsh -File extensions/Install-Glass.ps1`.
3. Use **Hot Reload Extensions** in Codex++.

Extract the complete distribution ZIP first. Its nested theme ZIP is the
importable package; the outer distribution is not a DreamSkin import ZIP.

The home input and attached tool rail no longer overlap. Reading materials,
blue action controls and native scroll clipping remain in place. No font
files or embedded font data are included; typography uses installed fonts.

Disable with `pwsh -File extensions/Install-Glass.ps1 -Disable`, then use
**Hot Reload Extensions** again.

Artwork source: https://www.pixiv.net/artworks/139476242.
SDF refraction attribution: `licenses/shuding-liquid-glass-MIT.txt`.
