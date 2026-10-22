# Snow Day Glass v0.18.0

Text follows unskinned Codex light appearance. The theme no longer forces
Consolas, Microsoft YaHei, pure-black labels, font sizes or text colors.
Wallpaper and glass surfaces remain.

1. Extract the complete ZIP.
2. Import `snow-day-glass-theme-v0.18.0.zip` in DreamSkin.
3. Run `pwsh -File extensions/Install-Glass.ps1` from this extracted package.
4. Use **Hot Reload Extensions** in Codex++.

Both steps 2 and 3 are necessary. Importing a theme ZIP alone cannot update the
installed companion. The companion owns the 32px scroll-fade cleanup and
reversibly removes DreamSkin typography declarations, allowing Codex's native
text cascade to take over. Disabling it restores the engine stylesheet.

This revision was saved only, without automatic import/application.
Use Codex's native light appearance for the requested light text palette.

Artwork: https://www.pixiv.net/artworks/139476242.
SDF license: `licenses/shuding-liquid-glass-MIT.txt`.
