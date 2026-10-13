# Snow Day Glass v0.6.0

此完整分发包包含两部分：可导入的 DreamSkin 主题，以及通过 Codex++ 官方扩展接口
加载的液态玻璃增强层。不要将完整分发包直接导入 DreamSkin。

1. 解压完整分发包。在 Codex++ 的 DreamSkin 导入页面选择里面的
   `snow-day-glass-theme-v0.6.0.zip`，然后应用 v0.6.0。
2. 在解压目录执行 `pwsh -File extensions/Install-Glass.ps1`。
   它会把唯一的样式扩展放入 `%APPDATA%\Codex++\user_scripts\`，不会修改应用本体。
3. 在 Codex++ 管理页面点“热重载拓展”。如果其他扩展不能同步清理，Codex++ 可能刷新页面。

安装增强层后，历史行、导航选项和菜单候选项在悬停或键盘选中时有透明渐变、高光边缘、
轻微阴影和局部玻璃效果。正文、思考、工具结果和输入框不模糊；输入框保留柔和阴影。

关闭增强层：`pwsh -File extensions/Install-Glass.ps1 -Disable`，再点“热重载拓展”。
该操作只移除增强效果，恢复基础主题的样式。

本版通过原生主题包解析和 18 项离线功能、生命周期及性能检查。
它是 iOS 风格的 CSS 材质近似，尚未在本机实际窗口应用后测量帧率；
DreamSkin 的铺满模式仍会按窗口比例裁剪背景边缘。
