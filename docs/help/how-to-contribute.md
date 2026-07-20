本文档站的持续更新离不开开源社区。**HUTACM Docs** 欢迎各位同学参与编辑。

这篇文章主要叙述参与 **HUTACM Docs** 的写作过程和规范。请您在编辑本站内容前仔细阅读，以便于您完成高质量的内容。

## 参与前必备

本项目需要在 GitHub 上编辑，您可以在右上角（移动端位于折叠菜单）找到 HUTACM Docs 的仓库：[inqwq23/HUTACM-Docs](https://github.com/inqwq23/HUTACM-Docs)。所以，参与编辑需要注册一个 GitHub 账号。

我们建议参与者具有一定的 git 使用经验，但不是必备项，即使您是一位新手，在本教程和相关视频链接的引导下，也能够出色地完成编辑。

对于具体的条目内容创作，我们建议各位作者：

1. **选择自己熟悉的领域进行创作**：请优先编辑与自己专业知识、所在部门相关的条目。
2. **查阅相关资料**：为条目添加内容或进行修订时，建议您先查阅权威文献和资料，确保信息准确无误。
3. **熟悉排版标准**：请熟悉 MarkDown 编写语法、本站其他文章编写习惯和 [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)官方文档，以便您编写的条目清晰易读且不造成渲染出错。

## 新增 Issue

???+ warning
    
    请关闭所有对 GitHub 网页的翻译功能。机器翻译的 GitHub 网页可能对您阅读接下来的内容造成困扰，更容易打乱编辑器中的内容。

在开始编写一段内容之前，请查阅 [Issues](https://github.com/inqwq23/HUTACM-Docs/issues)，确认没有别人在做相同的工作之后，开个新 issue 记录待编写的内容。

## 在 GitHub 上修改现有条目

??? tip "相关视频"
    
    <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=114040793730850&bvid=BV1oZAdeHEKx&cid=28502396843&p=1" width="100%" height="600" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

### 在仓库中找到条目位置

**HUTACM Docs** 的条目存放在 `docs` 目录下。要在仓库中找到需要编辑的条目，首先要打开 `docs` 目录。

假设我们想修改“学习指南 :material-arrow-right: 学习 C 语言 :material-arrow-right: 代码编辑器（IDE）”这个条目。打开该条目后观察浏览器地址栏得知，该页面的路径为 `/guide/learn-c/devcpp`。随后转到 GitHub 仓库，找到该条目的位置为 `/docs/guide/learn-c/devcpp.md`，打开它。

### 创建分支并编辑条目

在预览框的右上角可以看到编辑（:octicons-pencil-16:）图标，点击它，然后跟随引导创建分支（fork），此时可以对文档进行修改。编辑文档时，请遵循 Markdown 和 Material for MkDocs 的语法规范和本站的编排习惯。

完成编辑后，点击右上角的提交更改（Commit changes...）按钮，提交到自己的分支仓库。对更改写合适的信息。

### 创建 PR

先前您对条目的修改仅位于自己创建的分支仓库，提交更改后，需要创建 PR（Create pull request）以尝试推送到原始仓库。

点击 Create pull request 按钮，然后为您的修改做完整的描述。

请等待我们审核您的 PR，确认 PR 符合要求后将合并您的修改。

???+ note
    
    本站服务器暂时不会自动从仓库拉取更新，您的修改合并后，还需要等待我们定期更新网站内容。

## 使用 Git 进行更多修改

如果您认为本站需要新增条目、修改目录层次，推荐使用 [Git](https://git-scm.com/) 在本地编辑。

大致流程如下：

1. 将主仓库创建分支（fork）到自己的仓库中；
2. 将分支仓库克隆（clone）到本地；
3. 在本地进行修改，确认无报错后提交（commit）更改；
4. 将这些更改推送（push）到您 clone 的分支仓库；
5. 提交 PR 至主仓库。

如果您更改了目录结构（如新增条目），请相对应地修改 `mkdocs.yml` 的 `nav` 部分。

请在本地创建虚拟环境并安装 [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)（点击查看官方文档）以进行本地测试，确保您做的修改能通过构建且正常显示。

## 格式规范

### Commit 信息规范

对于提交时需要填写的 commit 信息，请遵守以下几点基本要求：

1. commit 摘要请简要描述这一次 commit 改动的内容。注意 commit 摘要的长度不要超过 50 字符，超出的部分会自动置于正文中；
2. 如果需要进一步描述本次 commit 内容，请在正文中详细说明。

### Pull Request 信息规范

对于 Pull Request，请遵守以下几点要求：

1. 标题请写明本次 PR 的目的（做了什么工作，修复了什么问题）；
2. 内容请简要叙述修改的内容。如果修复了一个 issue 的问题，请在内容中添加 fix #xxxx 字段，其中 xxxx 代表 issue 的编号。

### 条目内容编辑规范

**一般文本编辑规范**

编辑一般的文本，请注意以下几点：

1. 全角符号和半角符号之间要用空格隔开（标点符号除外）；
2. 自然段之间要额外空一行，否则在渲染时不会分段；
3. 不要使用 Markdown 和 MkDocs 以外的语法；
4. 注意英文大小写规范，善用 ``` `` ``` 和 `$$` 等标记符号。

**图片插入规范**

???+ note
    
    由于服务器带宽有限，不要插入大小超过 1M 的照片。

将图片放在条目同一目录下的 `images` 文件夹中。引用时不要使用 `![]()`，建议使用以下格式（以 `docs/intro/groups.md` 为例）：

```html
<figure markdown="span">
  ![“贪心肯定队”获 ACM-ICPC 亚洲区域赛银奖](images/ICPC_Silver_Medel_txkdd.png)
  <figcaption>“贪心肯定队”获 ACM-ICPC 亚洲区域赛银奖</figcaption>
  ![ACM 组所获各类奖项](images/Medels_of_ACM_Group.jpg){ width="75%" }
  <figcaption>ACM 组所获各类奖项</figcaption>
</figure>
```

注意不要使图片占据太大高度，像上面用 `{ width="75%" }` 限制图片宽度。

如果不需要写图注，将 `figcaption` 删掉即可。