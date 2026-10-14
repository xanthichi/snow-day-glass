# Snow Day Glass v0.8.0

先解压完整分发包，不能把它直接导入 DreamSkin。

1. 在 Codex++ 中导入里面的 `snow-day-glass-theme-v0.8.0.zip`，应用该主题。
2. 运行 `pwsh -File extensions/Install-Glass.ps1`。
3. 在管理页点“热重载拓展”。Codex++ 可能因其他拓展的清理能力而刷新页面。

增强层使用 Codex++ 官方用户扩展接口，不修改应用本体。
输入框和悬停项使用 `shuding/liquid-glass` 思路的圆角边缘折射，不模糊正文文字。
消息滚到输入框上沿后会被裁剪，不会透过玻璃输入框重叠。
侧栏延伸到底，四角为圆角矩形，顶部菜单文字更深。

关闭增强效果：`pwsh -File extensions/Install-Glass.ps1 -Disable`，
随后点“热重载拓展”。主题包仍保留。

参考项目的 MIT 许可见 `licenses/shuding-liquid-glass-MIT.txt`。
背景图片来源：https://www.pixiv.net/artworks/139476242。
