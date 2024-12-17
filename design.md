# 项目设计文档

## 目录结构

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx          # 根页面
│   │   ├── globals.css       # 全局样式
│   │   ├── fonts/            # 字体文件
│   │   └── GeistVF.woff
│   └── home/             # 主页模块
│       ├── components/   # UI组件
│       ├── hooks/        # React hooks
│       ├── utils/        # 工具函数
│       ├── styles/       # 样式文件
│       ├── types/        # TS类型定义
│       └── page.tsx      # 主页组件
├── public/               # 静态资源
└── 配置文件
    ├── next.config.ts    # Next.js配置(构建、路由、环境变量等)
    ├── tailwind.config.ts # Tailwind CSS配置(主题、样式、插件等)
    ├── tsconfig.json     # TypeScript配置(编译选项、路径别名等)
    ├── package.json      # 项目配置(依赖管理、脚本定义等)
    └── postcss.config.mjs # PostCSS配置(CSS处理插件等)
```

## 技术栈

### 架构选型对比

#### 1. 前端框架对比
- Next.js vs 其他方案
  - Next.js vs Vue(Nuxt.js)
    - Next.js生态更成熟,社区资源更丰富
    - React相比Vue有更好的TypeScript支持
    - App Router比Nuxt的文件路由更灵活
  - Next.js vs SPA框架
    - SSR对SEO更友好
    - 首屏加载更快
    - 更好的性能优化
  - Next.js vs 传统MPA
    - 更好的用户体验
    - 更高的开发效率
    - 更容易实现复杂交互

#### 2. 数据层方案对比
- MongoDB vs 其他数据库
  - MongoDB vs MySQL
    - 文档模型更适合存储非结构化的用户数据
    - Schema灵活性更高,便于快速迭代
    - 水平扩展能力更强
  - MongoDB Atlas vs 自建服务器
    - 降低运维成本
    - 内置监控和备份
    - 全球分布式部署
- API Routes vs 独立后端
  - 开发效率更高
  - 部署更简单
  - 前后端代码集中管理
  - 适合中小型项目

#### 3. 样式方案对比
- Tailwind CSS vs 其他方案
  - Tailwind vs CSS-in-JS
    - 更好的运行时性能
    - 更小的打包体积
    - 更容易维护
  - Tailwind vs 传统CSS
    - 开发效率更高
    - 更好的响应式支持
    - 更容易实现主题切换
- shadcn/ui vs 其他组件库
  - shadcn/ui vs Material-UI
    - 更高的可定制性
    - 更现代的设计风格
    - 更小的打包体积
  - shadcn/ui vs Ant Design
    - 更简单的主题定制
    - 更好的性能
    - 更适合现代Web应用

#### 4. 部署方案对比
- Vercel vs 其他平台
  - Vercel vs 传统服务器
    - 零运维成本
    - 自动化部署
    - 更好的性能
  - Vercel vs 其他云平台
    - 更好的Next.js集成
    - 更简单的配置
    - 免费额度更大

选型考虑因素:
1. 开发效率: 选择熟悉且高效的技术栈
2. 性能要求: 确保良好的用户体验
3. 可维护性: 便于长期维护和迭代
4. 成本控制: 在预算范围内最大化收益
5. 团队协作: 便于团队协作和代码管理
6. 安全性: 保护用户数据和隐私
7. 扩展性: 支持未来功能扩展

### 核心框架
- Next.js 14 (App Router)
- React 19
- TypeScript 5

### 样式解决方案
- Tailwind CSS
- shadcn/ui 组件库
- CSS变量实现主题切换

### 数据层
- MongoDB Atlas
- API Routes

### 开发工具
- ESLint
- PostCSS
- TypeScript

### 部署
- Vercel

## 技术要点

### 1. 字体处理
- 使用next/font/local加载本地字体
- 支持可变字重(100-900)
- 字体变量:
  - --font-geist-sans
  - --font-geist-mono

### 2. 主题系统
- 使用CSS变量定义主题色
- 支持亮色/暗色模式
- 响应系统主题设置

### 3. 响应式设计
- 使用Tailwind的响应式类
- 移动优先设计
- 断点: sm, md, lg, xl

### 4. 性能优化
- 图片优化(next/image)
- 字体优化
- 代码分割

### 5. 类型安全
- TypeScript严格模式
- 完整的类型定义
- ESLint TypeScript规则

## 开发规范

1. 组件开发
   - 使用TypeScript
   - 函数组件
   - Props类型声明

2. 样式规范
   - 优先使用Tailwind类
   - 遵循移动优先原则
   - 主题变量统一管理

3. 代码质量
   - ESLint检查
   - TypeScript类型检查
   - 代码格式化

## 注意事项

1. 环境变量
   - 开发环境: .env.local
   - 生产环境: Vercel环境变量

2. 数据库
   - 需配置MongoDB连接
   - 注意数据模型设计

3. 部署
   - Vercel自动部署
   - 环境变量配置
   - 域名设置 