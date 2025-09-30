下面是一份示例 **README.md**，你可以直接使用或在此基础上调整：

------

# Rabbit-Tea Blog Demo

一个使用 **[rabbit-tea](https://moonbitlang.github.io/)** 前端框架开发的多页面博客示例项目，支持 **Markdown** 内容渲染。
 该项目演示了如何基于 **MoonBit** 生态构建可运行的多页应用。

## ✨ 项目简介

- **框架**：基于 MoonBit 生态的前端框架 **rabbit-tea**
- **功能**：
  - 多页面路由
  - Markdown 文件解析与渲染
  - 简洁的页面结构与样式示例

项目展示站点（已上线）：[个人博客展示](http://buildbyte.top/html/index.html)
## 仓库动态内容说明

该博客示例 内容来源于 Git 仓库：

文章存储
Markdown 文件 (.md) 存放在仓库的特定目录（如 articles/）。

自动同步
提交或更新仓库文件后，网站会通过 Git API / fetch 请求 自动获取最新内容并展示，无需手动更新前端代码。

展示方式
页面会根据仓库文件生成文章列表，用户点击即可查看对应 Markdown 内容。

换句话说，你只需向仓库提交新的文章或修改内容，网站会实时同步更新，无需重新部署前端。

## 📦 环境要求

- Node.js ≥ 18
- [MoonBit](https://moonbitlang.github.io/) 开发环境
- npm 或 pnpm / yarn

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/yourname/rabbit-tea-blog-demo.git
cd rabbit-tea-blog-demo

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

启动后，在浏览器中访问 [http://localhost:5173](http://localhost:5173/) 即可查看博客 demo。

## 📝 项目结构

```
Rabbit-Tea Blog Demo

一个使用 rabbit-tea
 前端框架开发的博客示例项目，演示如何在 MoonBit 生态中构建并部署多页面站点。
本项目通过 moon build --target js 将 .mbt 源码编译为 JavaScript 并放入 public 目录，从而实现直接静态部署。

✨ 项目简介

框架：MoonBit 语言 + rabbit-tea 前端框架

特点：

多页面路由示例

支持 Markdown 内容渲染

结构简洁，便于扩展

示例站点参考：rabbit-tea 官方示例

📦 环境要求

Node.js ≥ 18

MoonBit 编译工具链（已安装 moon 命令）

包管理器：npm / pnpm / yarn 任一

🚀 快速开始
# 克隆项目
git clone https://github.com/yourname/rabbit-tea-blog-demo.git
cd rabbit-tea-blog-demo

# 安装依赖
npm install

开发调试
# 1. 编译 .mbt 源码为 JS
moon build --target js --out public

# 2. 启动开发服务器
npm run dev


访问 http://localhost:5173
 查看效果。

生产构建
# 编译 MoonBit 源码
moon build --target js --out public

# 打包静态站点
npm run build


生成的 dist/ 目录即可直接部署到任意静态服务器或 CDN。

🗂️ 项目结构
project/
├─ public/         # MoonBit 编译后的 JS 及公共静态资源
├─ index.html      # 应用入口 HTML
├─ src/
│   └─ main.mbt    # rabbit-tea 主入口源码
└─ package.json

💡 开发说明

新增页面
在 src/ 下添加新的 .mbt 文件，并在 main.mbt 中导入或注册，即可扩展新的路由/页面。

Markdown 内容
将 .md 文件放入 public 目录（或自建子目录），在组件中通过 fetch + Markdown 解析库（如 marked）加载渲染。

🛠 技术要点

MoonBit → JavaScript：通过 moon build --target js 完成源码到浏览器可执行 JS 的转换。

rabbit-tea：MoonBit 官方前端框架，天然支持多页面模式。

Markdown 渲染：可选用 marked、markdown-it 等库解析文章内容。

📚 学习资源

MoonBit 官方文档

rabbit-tea GitHub

Marked 文档

🏁 目标

通过本示例你将学会：

使用 MoonBit + rabbit-tea 搭建多页面前端应用

将 .mbt 源码编译为 JavaScript 并部署到静态服务器

本项目仅用于学习与示例，欢迎二次开发和功能扩展。
```

## 💡 开发说明

1. **新增页面**
    在 `src/pages/` 下新增 `.mbt` 文件即可自动注册为多页应用的一个页面。
2. **添加 Markdown 文章**
    将 `.md` 文件放入 `src/markdown/` 目录并在对应页面通过 markdown 渲染组件引用。

## 🛠 技术要点

- **rabbit-tea**：MoonBit 官方前端框架，适合构建多页应用。
- **Markdown 渲染**：基于 `marked` 或 `markdown-it`（可根据需要选择）进行解析。
- **多页路由**：无需复杂配置，直接按照文件结构生成路由。

## 📚 学习资源

- [MoonBit 官方文档](https://docs.moonbitlang.com/en/latest/)
- [rabbit-tea GitHub](https://github.com/moonbit-community/rabbit-tea)
- [Marked (Markdown 解析)](https://marked.js.org/)

## 🏁 任务目标

完成该 demo 即可展示：

- 使用 **rabbit-tea** 构建多页面前端应用的完整流程
- Markdown 内容渲染的实现方式

------

> 该项目主要用于学习与示例，欢迎二次开发与功能扩展。
