# achao.us.ci

Achao 的个人数字花园。使用 Astro + TypeScript + Tailwind CSS 构建的静态站点，部署在 Cloudflare Pages 上。

## 项目结构

```text
/
├── public/                  静态资源（favicon、robots.txt、og 图）
├── src/
│   ├── components/
│   │   ├── layout/          Header、Footer
│   │   ├── ui/               Icon、IconTile、SectionCard、ThemeToggle
│   │   └── seo/               SEO meta 组件
│   ├── content/
│   │   ├── blog/              博客 Markdown
│   │   └── projects/          项目 Markdown
│   ├── content.config.ts      Content Collections schema
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   ├── site-config.ts     站点文案、导航、联系方式等集中配置
│   │   └── format.ts
│   ├── pages/
│   │   ├── index.astro        Home
│   │   ├── about.astro
│   │   ├── blog/
│   │   ├── projects/
│   │   └── fitness/
│   └── styles/global.css      深浅色主题 tokens
└── package.json
```

## 常用命令

| 命令               | 作用                              |
| ------------------ | --------------------------------- |
| `npm install`       | 安装依赖                          |
| `npm run dev`       | 启动本地开发服务器（localhost:4321） |
| `npm run build`     | 构建到 `./dist/`                  |
| `npm run preview`   | 本地预览构建产物                   |
| `npm run check`     | TypeScript 类型检查               |

## 更新内容

- 新增博客文章：在 `src/content/blog/` 下新建一个 `.md` 文件
- 新增项目：在 `src/content/projects/` 下新建一个 `.md` 文件
- 修改身份标签 / Current Focus / 联系方式 / 导航：编辑 `src/lib/site-config.ts`

## 部署

Push 到 GitHub 的 `main` 分支后，Cloudflare Pages 会自动构建并部署。
