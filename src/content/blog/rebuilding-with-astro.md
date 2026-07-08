---
title: "用 Astro 重建这个网站"
description: "技术选型笔记：Astro、TypeScript、Tailwind CSS 与 Cloudflare Pages。"
pubDate: 2026-07-08
tags: ["astro", "infra"]
---

这次重建，技术栈选得比较克制：

- **Astro**：默认输出静态站点，几乎零 JS，加载快，非常适合内容为主的个人网站
- **TypeScript**：全站类型安全
- **Tailwind CSS v4**：原子化样式，深浅色主题用 CSS 变量驱动
- **Content Collections**：Blog 和 Projects 都用 Markdown + Zod schema 管理，加内容不用改代码
- **Cloudflare Pages**：连接 GitHub 仓库后自动构建部署，免费额度对个人站完全够用

没有引入数据库、没有引入后端框架——内容全部是文件，简单、可控、方便备份。
