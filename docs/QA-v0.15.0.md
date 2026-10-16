# v0.15.0 Verification

## Design And Acceptance

Base: v0.14.0, commit `03db0c3`. Make a font-only revision; do not add the
subsequently requested unselected-sidebar white layer.

Use installed Consolas for Latin text and numbers, with Microsoft YaHei
(微软雅黑) for Chinese glyph fallback. Keep local system fallbacks; do not
embed, download or distribute fonts. The user's `consoles` is interpreted as
the existing Windows font Consolas.

Preserve native-immersive layout, balanced materials, the explicitly requested
full-workspace artwork, light palette, native control states, titlebar alpha
0.20, common fill alpha 0.50, chat alpha 0.78 and tool alpha 0.70. Preserve the
v0.14.0 optimized runtime byte for byte apart from the generated version/CSS.

Verify native font tokens, body/control inheritance, Chinese and Latin glyph
families, code and dynamic menus at desktop 1440x900 and narrow 980x760, plus
the existing geometry, hover, scrolling, lifecycle and no-embedded-font checks.

The latest user instruction is save only: do not import, apply, hot reload or
restart Codex++. Complete offline validation, ZIPs and GitHub push.

## Results

- **234/234 isolated browser checks passed**, with zero page errors at 1440x900
  and 980x760 in Chromium 147.0.7727.15.
- The actual platform-font inspection reports Consolas for all 18 Latin/digit
  glyphs in the probe, and Microsoft YaHei for all six Chinese glyphs. Neither
  is a custom/downloaded font. Body, prose, controls and code resolve the stack
  `Consolas, "Microsoft YaHei", "Microsoft YaHei UI", monospace`.
- Existing material, header occlusion, scroll clipping, composer spacing,
  resize, cleanup, focus, hidden actions and cache checks passed. No font
  payloads were found in the five published source/runtime surfaces.
- Exact companion: 34,487 bytes, SHA-256
  `39afc63a33b20abd5de3b27a03ee4baf40873d86b01687e2edb826aee340f4ce`.
- Canonical static validation has zero errors. Its existing header-gradient
  warning is retained; no v0.15.0 real-app application or contrast pass is
  claimed because the user requested save only. Public previews are synthetic.
- Marketplace validation and the upstream Rust package importer/Safe CSS
  compiler passed. Base Safe CSS is identical to v0.14.0.
- Import ZIP: 2,212,302 bytes, SHA-256
  `eba903c1047b72aeb9fd0891b1f752cc23a1f101c7ecd8a9d3c083f269af0d09`.
- Complete ZIP SHA-256:
  `85ef2f04e975ce5f9646e44428a6c20aa9ed2e9fd2f68e4a0c391dda0ac4e288`.
  It includes the matching font companion and installer, theme ZIP and licenses.

## Application Status

Saved and packaged only. The desktop automation was stopped by the user;
no subsequent desktop inputs were issued. v0.15.0 was not imported, applied,
hot reloaded or installed into the active user-scripts directory.
