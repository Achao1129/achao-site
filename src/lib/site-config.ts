export const SITE = {
  name: "Achao",
  title: "Achao's Digital Garden",
  description:
    "Achao 的个人数字花园 —— 记录 AI、代码、基础设施与长期思考，还有跑步和饮食。",
  url: "https://achao.us.ci",
  locale: "zh-CN",
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Fitness", href: "/fitness" },
  { label: "About", href: "/about" },
] as const;

export const HERO = {
  headingLines: ["Achao's", "digital garden"],
  subtitle: "AI、代码、基础设施，还有跑步与长期思考。",
  primaryCta: { label: "阅读最新文章", href: "/blog" },
  secondaryCta: { label: "查看项目", href: "/projects" },
};

/** "我是谁" —— 长期不变的身份标签 */
export const IDENTITY = [
  {
    icon: "sparkles",
    title: "AI 学习者与构建者",
    description: "折腾 AI 工具与工作流，边用边记录。",
  },
  {
    icon: "server",
    title: "基础设施爱好者",
    description: "Cloudflare、自建服务、网络这些事。",
  },
  {
    icon: "activity",
    title: "在路上的跑者",
    description: "比起追求配速，更在意长期坚持。",
  },
  {
    icon: "book-open",
    title: "长期主义者",
    description: "把想法写下来，方便未来的自己回看。",
  },
] as const;

/** "我在做什么" —— 近期状态，手动维护 */
export const CURRENT_FOCUS = [
  {
    icon: "hammer",
    title: "重建这个网站",
    description: "用 Astro、TypeScript、Tailwind 从零开始。",
  },
  {
    icon: "footprints",
    title: "规律跑步",
    description: "先把基础打好，再谈配速。",
  },
  {
    icon: "brain",
    title: "深入了解 AI 工具",
    description: "Claude、Codex 等，边用边记笔记。",
  },
  {
    icon: "package",
    title: "打磨小项目",
    description: "做一些解决实际问题的小工具。",
  },
] as const;

export const CONTACT_LINKS = [
  { icon: "mail", label: "hello@achao.us.ci", href: "mailto:hello@achao.us.ci" },
  { icon: "github", label: "github.com/Achao1129", href: "https://github.com/Achao1129" },
  { icon: "link", label: "achao.us.ci", href: "https://achao.us.ci" },
] as const;
