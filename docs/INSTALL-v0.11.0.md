# Snow Day Glass v0.11.0

1. Import `snow-day-glass-theme-v0.11.0.zip` in DreamSkin and apply it.
2. Run `pwsh -File extensions/Install-Glass.ps1`.
3. Use **Hot Reload Extensions** in Codex++.

Extract the complete distribution ZIP first. Its nested theme ZIP is the
importable package; the outer distribution is not a DreamSkin import ZIP.

Update the companion along with the theme ZIP. The companion replaces opaque
Codex++ and native settings backgrounds with one 80% white fill, removes the
extra sticky-header blur, and closes the file pane's outer right gutter.
Existing hover glass, blue actions, native scroll clipping and the 8px gap
between the input and its attached rail remain in place. No fonts are bundled.

For an AI-assisted installation, send the AI the repository URL and the
installation prompt in its README:
https://github.com/xanthichi/snow-day-glass

Disable with `pwsh -File extensions/Install-Glass.ps1 -Disable`, then use
**Hot Reload Extensions** again.

Artwork source: https://www.pixiv.net/artworks/139476242.
SDF refraction attribution: `licenses/shuding-liquid-glass-MIT.txt`.
