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
- 当前为正式文案：责任人、日期、邮箱及数据处理说明均已填写，邮箱支持 `mailto:` 链接。
- 修改应用的数据处理方式时，同步更新中英文政策及 Meta 后台的相关数据使用声明。

## 正式发布到 GitHub Pages

1. 本地预览并核对两种语言的正文。
2. 将项目提交并推送至 GitHub 默认分支。
3. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
4. 在 **Actions → Deploy privacy policy to GitHub Pages → Run workflow** 中手动运行发布。
5. 以成功的工作流输出的页面 URL 为准。中文页位于同一路径下的 `zh.html`。

发布工作流只打包两个 HTML 页面和 `assets/`，不发布 README、术语表等工程文件。工作流仅允许手动触发，普通推送不会自动发布。

配置方式参考 [GitHub Pages 官方工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 页面行为

- 标准单栏文档布局，包含政策标题、日期、责任人、联系邮箱和分节正文。
- 语言切换保留 URL 中的章节锚点。
- 正文与锚点无需 JavaScript 即可阅读和使用。
- 使用系统字体和本地静态资源；没有外部字体或脚本依赖。
- 支持手机阅读、键盘焦点、跳过导航和打印布局。

## 政策中的平台依据

正文按已确认的应用行为填写。以下官方资料用于核对平台要求、年龄档位及云备份删除入口：

- [Meta 隐私政策要求](https://developers.meta.com/vr/policy/privacy-policy/)：明确数据种类、处理方式、用途及删除渠道。
- [Meta Developer Data Use Policy](https://developers.meta.com/vr/policy/data-use/)：数据使用、安全及删除要求。
- [Meta 年龄组自我认证政策](https://developers.meta.com/vr/policy/age-groups/)：Teens and Adults 对应 13+ 或用户所在地适用年龄。
- [Meta Cloud Backup](https://developers.meta.com/vr/documentation/unreal/ps-cloud-backup/)：本地存档、云备份和各设备备份的删除相互区别；用户可在 [Cloud Backups](https://secure.oculus.com/my/cloud-backup/) 中管理副本。
