# Dragon Ace 隐私政策页面

纯静态双语网站，英文入口为 `index.html`，中文入口为 `zh.html`。共享样式与交互位于 `assets/`，无需安装依赖或构建。

## 本地预览

在项目目录执行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 <http://127.0.0.1:8000/>，中文页为 <http://127.0.0.1:8000/zh.html>。按 `Ctrl+C` 停止服务。也可以直接用浏览器打开 HTML 文件。

## 修改文案

- 英文内容：`index.html`。
- 中文内容：`zh.html`。
- 同步修改两个版本，保留相同的章节 `id`，以便直接链接章节和语言切换定位。
- 责任人和邮箱现在均为原始占位文本；填入实际邮箱后，可使用 `mailto:` 链接。
- 当前是草稿：页面保留了原文中的全部 `【…】` 占位内容和核实说明，以及草稿提示和 `noindex, nofollow` 元信息。

## 正式发布到 GitHub Pages

1. 补齐并确认两种语言中的日期、责任人、邮箱及所有 `【…】` 内容。
2. 移除两个页面中的 `.draft-badge` 元素，以及 `meta name="robots"` 标签。将已确认的编辑说明替换为正式正文，并移除其 `editorial-note` 样式。
3. 将项目提交并推送至 GitHub 默认分支。
4. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
5. 在 **Actions → Deploy privacy policy to GitHub Pages → Run workflow** 中手动运行发布。
6. 以成功的工作流输出的页面 URL 为准。中文页位于同一路径下的 `zh.html`。

发布工作流只打包两个 HTML 页面和 `assets/`，不发布 README、术语表等工程文件。工作流仅允许手动触发，不会因普通推送自动发布草稿。

配置方式参考 [GitHub Pages 官方工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 页面行为

- 标准单栏文档布局，包含政策标题、日期、责任人、联系邮箱和分节正文。
- 语言切换保留 URL 中的章节锚点。
- 正文与锚点无需 JavaScript 即可阅读和使用。
- 使用系统字体和本地静态资源；没有外部字体或脚本依赖。
- 支持手机阅读、键盘焦点、跳过导航和打印布局。
