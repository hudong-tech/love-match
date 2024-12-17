# Love Match 缘分预测

这是一个基于 Next.js 开发的恋爱契合度预测网站。通过输入双方的基本信息,使用特定算法计算并预测两人的缘分指数。

## 技术栈

- **前端框架:** Next.js 14 (React)
- **UI框架:** Tailwind CSS + shadcn/ui
- **数据库:** MongoDB Atlas
- **部署平台:** Vercel
- **开发语言:** TypeScript

## 功能特性

- 用户信息输入界面
- 缘分指数计算
- 详细的匹配报告
- 响应式设计,支持移动端
- 数据持久化存储

## 开始使用

首先,运行开发服务器:

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

你可以通过修改 `src/app/page.tsx` 来开始编辑页面。修改文件后页面会自动更新。

## 项目设置

1. 克隆项目:
```bash
git clone https://github.com/your-username/love-match.git
cd love-match
```

2. 安装依赖:
```bash
npm install
```

3. 配置环境变量:
- 复制 `.env.example` 为 `.env.local`
- 填入必要的环境变量

## 部署说明

推荐使用 [Vercel 平台](https://vercel.com/new) 部署,操作步骤:

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置必要的环境变量
4. 点击部署

更多部署相关信息,请参考 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 开发资源

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 特性和 API
- [Tailwind CSS 文档](https://tailwindcss.com/docs) - 了解 Tailwind CSS
- [shadcn/ui 组件](https://ui.shadcn.com) - UI 组件库文档

## 贡献指南

欢迎提交 Pull Request 和 Issue!
