# 首页模块

本目录包含AI婚恋匹配分析系统的首页实现。

## 设计目标

- 清晰展示产品价值
- 引导用户开始测评
- 提供简单的使用说明
- 确保良好的用户体验



## 目录结构
```
home/
  ├── components/          # 首页专业组件
  │   ├── HeroSection/     # 首屏展示区
  │   │   ├── Title.tsx    # 主标题组件
  │   │   ├── Subtitle.tsx # 副标题组件
  │   │   └── CTA.tsx      # 行动按钮组件
  │   ├── ProductIntro/    # 价值主张区
  │   │   ├── FeatureCard.tsx  # 特性卡片
  │   │   └── FeatureGrid.tsx  # 特性网格
  │   ├── GuideSection/    # 操作指引区
  │   │   ├── StepCard.tsx     # 步骤卡片
  │   │   └── Timeline.tsx     # 时间轴
  │   └── ResultExample/   # 示例展示区
  │       ├── ExampleCard.tsx  # 示例卡片
  │       └── Carousel.tsx     # 轮播组件
  ├── hooks/              
  │   ├── useIntersectionObserver.ts # 视图交叉检测
  │   └── useAnimation.ts            # 动画控制
  ├── store/              # 状态管理
  │   └── homeStore.ts    # 首页状态
  ├── utils/             
  │   ├── animation.ts    # 动画工具
  │   └── metrics.ts      # 性能标
  └── page.tsx            # 页面入口
```

## 视觉设计

### 1. 色彩系统

#### 1.1 主色板
- 品牌主色：#FF8BA7 (成熟玫瑰粉)
  * 浅色变体：#FFC4D6, #FFE4ED, #FFF5F8
  * 深色变体：#E66A89, #CC4D6B, #B33351
- 专业蓝：#4A90E2
  * 浅色变体：#7CB3FF, #B3D4FF, #E6F0FF
  * 深色变体：#2B7CD4, #1B5699, #0D3B66

#### 1.2 文字颜色
- 主要文字：#333333
- 次要文字：#666666
- 辅助文字：#999999
- 占位文字：#CCCCCC
- 反白文字：#FFFFFF

#### 1.3 背景色
- 页面背景：#FFFFFF
- 卡片背景：#FAFAFA
- 浮层背景：#F5F5F5
- 分割线：#EEEEEE
- 遮罩层：rgba(0, 0, 0, 0.45)

#### 1.4 功能色
- 成功：#52C41A
- 警告：#FAAD14
- 错误：#FF4D4F
- 链接：#1890FF

#### 1.5 渐变方案
- 主要渐变：linear-gradient(135deg, #FF8BA7 0%, #4A90E2 100%)
- 背景渐变：linear-gradient(180deg, #FFF5F8 0%, #FFFFFF 100%)
- 卡片渐变：linear-gradient(45deg, #FFE4ED 0%, #E6F0FF 100%)

### 2. 布局系统

#### 2.1 响应式断点
```scss
// 移动端优先
$breakpoints: (
  'sm': 640px,   // 小屏手机
  'md': 768px,   // 大屏手机/平板
  'lg': 1024px,  // 笔记本
  'xl': 1280px,  // 桌面显示器
  '2xl': 1536px  // 大屏显示器
);
```

#### 2.2 间距规范
- 基础间距单位：4px
- 内容内间距：
  * 移动端：16px
  * 平板：24px
  * 桌面：32px
- 区块间距：
  * 移动端：32px
  * 平板：48px
  * 桌面：64px
- 组件内间距：
  * 小组件：8px
  * 中等组件：16px
  * 大组件：24px

#### 2.3 栅格系统
- 列数：24列
- 槽宽：
  * 移动端：16px
  * 平板：24px
  * 桌面：32px
- 容器最大宽度：1200px

### 3. 投影系统

#### 3.1 基础投影
```scss
// 浮层投影
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
// 卡片投影
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
// 弹窗投影
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

#### 3.2 交互投影
```scss
// hover状态
$shadow-hover: 0 12px 20px -8px rgba(0, 0, 0, 0.15);
// active状态
$shadow-active: 0 2px 4px -1px rgba(0, 0, 0, 0.06);
```

### 4. 动效系统

#### 4.1 过渡曲线
```scss
// 标准过渡
$ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
// 进入过渡
$ease-in: cubic-bezier(0.4, 0, 1, 1);
// 退出过渡
$ease-out: cubic-bezier(0, 0, 0.2, 1);
```

#### 4.2 动画时长
```scss
// 极快速过渡
$duration-xs: 100ms;
// 快速过���
$duration-sm: 200ms;
// 标准过渡
$duration-md: 300ms;
// 复杂过渡
$duration-lg: 400ms;
```

#### 4.3 常用动画
```scss
// 渐显动画
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

// 上移渐显
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 缩放动画
@keyframes scale {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}
```

### 5. 组件视觉规范

#### 5.1 按钮规范
- 圆角：6px
- 高度：
  * 小型：28px
  * 中型：36px
  * 大型：44px
- 内间距：
  * 小型：0 12px
  * 中型：0 16px
  * 大型：0 20px

#### 5.2 卡片规范
- 圆角：12px
- 内间距：24px
- 背景色：#FFFFFF
- 边框：1px solid #EEEEEE
- 投影：$shadow-md

#### 5.3 输入框规范
- 圆角：6px
- 高度：36px
- 内间距：0 12px
- 边框：1px solid #D9D9D9
- 聚焦边框：2px solid #4A90E2

### 6. 图标规范

#### 6.1 尺寸规范
- 小图标：16x16px
- 常规图标：24x24px
- 大图标：32x32px
- 特大图标：48x48px

#### 6.2 样式规范
- 线条粗细：2px
- 圆角：2px
- 颜色：继承文字颜色
- 统一风格：线性图标

### 7. 特殊状态规范

#### 7.1 加载状态
- 骨架屏：
  * 背景：#F5F5F5
  * 动画：loading-pulse 1.5s ease-in-out infinite
- Loading图标：
  * 尺寸：24px
  * 颜色：主色
  * 动画：rotate 1s linear infinite

#### 7.2 空状态
- 插图尺寸：120px
- 文字大小：14px
- 文字颜色：#999999
- 按钮样式：次要按钮

#### 7.3 错误状态
- 错误图标：24px
- 错误文字：14px
- 文字颜色：#FF4D4F
- 背景色：#FFF1F0


## 功能模块

### 1. Hero Section

#### 1.1 布局设计
- 结构布局
  * 左文右图布局(桌面端)
  * 上文下图布局(移动端)
  * 最大宽度1200px
  * 上下内边距: 桌面端120px, 平板80px, 移动端60px

#### 1.2 内容设计
- 主标题
  * 默认文案: "AI智能婚恋匹配,为你找到最适合的Ta"
  * 备选文案: 
    - "遇见对的人,让爱更简单"
    - "科技赋能婚恋,精准匹配真爱"
  * 字体: 桌面端48px, 平板36px, 移动端32px
  * 字重: 600
  * 颜色: #333333

- 副标题
  * 默认文案: "基于AI算法的多维度个性化匹配,助你找到灵魂伴侣"
  * 备选文案:
    - "多维度分析,精准匹配,让缘分不再靠运气"
    - "科学的婚恋观,智能的匹配系统"
  * 字体: 桌面端24px, 平板20px, 移动端18px
  * 字重: 400
  * 颜色: #666666
  * 行高: 1.6

- CTA按钮
  * 文案: "开始测评"
  * 尺寸: 桌面端180x52px, 平板160x48px, 移动端140x44px
  * 背景色: 主色#FF8BA7
  * 文字颜色: #FFFFFF
  * 字体: 18px
  * 字重: 500
  * 圆角: 8px
  * hover效果: 
    - 背景色加深10%
    - 轻微上浮动画
  * 点击效果:
    - 背景色加深20%
    - 轻微缩放

#### 1.3 背景设计
- 主背景
  * 渐变色: linear-gradient(135deg, #FFF5F8 0%, #FFFFFF 100%)
  * 可选装饰:
    - 右上角几何图形
    - 左下角柔和曲线
    - 随机分布的小圆点

- 图片区域
  * 主图尺寸: 桌面端600x500px
  * 图片内容: 展示匹配成功的情侣
  * 处理效果: 
    - 柔和阴影
    - 圆角: 20px
    - 边框: 8px solid #FFFFFF

#### 1.4 动效设计
- 页面载入动效
  * 主标题: 上移渐显(300ms)
  * 副标题: 上移渐显(400ms)
  * 按钮: 上移渐显(500ms)
  * 主图: 右移渐显(600ms)

- 交互动效
  * 按钮hover: 上移4px(200ms)
  * 按钮点击: 缩放0.95(100ms)
  * 主图hover: 轻微放大1.02(300ms)

### 2. 价值主张区

#### 2.1 布局设计
- 整体布局
  * 最大宽度: 1200px
  * 内边距: 桌面端80px, 平板60px, 移动端40px
  * 背景色: #FFFFFF

- 栅格布局
  * 桌面端: 2x2网格
  * 平板端: 2x2网格
  * 移动端: 1列排布

#### 2.2 内容设计

##### 2.2.1 AI智能匹配
- 图标设计
  * 尺寸: 48x48px
  * 风格: 线性图标
  * 主色: #4A90E2
  * 动效: 载入时旋转渐显

- 文案设计
  * 标题: "AI智能匹配"
  * 描述: "基于深度学习算法,多维度分析用户特征,实现精准匹配推荐"
  * 标题字体: 24px
  * 描述字体: 16px
  * 行高: 1.6

##### 2.2.2 多维度分析
- 图标设计
  * 尺寸: 48x48px
  * 风格: 数据图表风格
  * 主色: #FF8BA7
  * 动效: 载入时数据增长动画

- 文案设计
  * 标题: "多维度分析"
  * 描述: "从性格、价值观、生活方式等多个维度进行全方位分析"
  * 标题字体: 24px
  * 描述字体: 16px
  * 行高: 1.6

##### 2.2.3 专业建议
- 图标设计
  * 尺寸: 48x48px
  * 风格: 对话气泡风格
  * 主色: #52C41A
  * 动效: 载入时气泡弹出动画

- 文案设计
  * 标题: "专业建议"
  * 描述: "基于分析结果提供个性化的专业建议和改善方向"
  * 标题字体: 24px
  * 描述字体: 16px
  * 行高: 1.6

##### 2.2.4 简单快速
- 图标设计
  * 尺寸: 48x48px
  * 风格: 闪电图标风格
  * 主色: #FAAD14
  * 动效: 载入时闪电动画

- 文案设计
  * 标题: "简单快速"
  * 描述: "15分钟完成测评,获取专业的匹配分析报告"
  * 标题字体: 24px
  * 描述字体: 16px
  * 行高: 1.6

#### 2.3 卡片设计
- 视觉风格
  * 背景色: #FFFFFF
  * 圆角: 12px
  * 阴影: 0 4px 12px rgba(0,0,0,0.1)
  * 内边距: 24px
  * hover效果:
    - 轻微上浮
    - 阴影加深

- 响应式适配
  * 桌面端: 宽度280px
  * 平板端: 宽度240px
  * 移动端: 100%宽度

### 3. 操作指引区

#### 3.1 布局设计
- 整体布局
  * 最大宽度: 1200px
  * 背景色: #FAFAFA
  * 内边距: 桌面端100px, 平板80px, 移动端60px

- 时间轴布局
  * 桌面端: 水平时间轴
  * 平板/移动端: 垂直时间轴

#### 3.2 步骤设计

##### 3.2.1 填写测评问卷
- 图标设计
  * 类型: 表单图标
  * 尺寸: 32x32px
  * 颜色: #4A90E2
  * 动效: 填写动画

- 文案设计
  * 步骤标题: "填写测评问卷"
  * 步骤描述: "完成个性化测评问卷,了解自己的性格特征"
  * 预计时间: "约10分钟"

##### 3.2.2 AI智能分析
- 图标设计
  * 类型: 数据处理图标
  * 尺寸: 32x32px
  * 颜色: #FF8BA7
  * 动效: 数据流动画

- 文案设计
  * 步骤标题: "AI智能分析"
  * 步骤描述: "AI系统对测评数据进行多维度分析"
  * 预计时间: "约3分钟"

##### 3.2.3 获取匹配报告
- 图标设计
  * 类型: 报告文档图标
  * 尺寸: 32x32px
  * 颜色: #52C41A
  * 动效: 生成动画

- 文案设计
  * 步骤标题: "获取匹配报告"
  * 步骤描述: "查看详细的个性化匹配分析报告"
  * 预计时间: "即时生成"

#### 3.3 时间轴设计
- 视觉风格
  * 线条颜色: #E8E8E8
  * 线条粗细: 2px
  * 节点大小: 12px
  * 节点颜色: 对应步骤主色
  * 完成状态: 绿色对勾

- 交互设计
  * hover效果: 节点放大
  * 点击效果: 显示步骤详情
  * 进度展示: 已完成步骤高亮

### 4. 示例展示区

#### 4.1 布局设计
- 整体布局
  * 最大宽度: 1200px
  * 内边距: 桌面端80px, 平板60px, 移动端40px
  * 背景色: #FFFFFF

- 轮播布局
  * 桌面端: 并排显示2个
  * 平板端: 显示1个
  * 移动端: 显示1个

#### 4.2 示例报告设计

##### 4.2.1 匹配度展示
- 视觉设计
  * 环形进度条
    - 尺寸: 120px
    - 粗细: 8px
    - 颜色: 主色渐变
    - 动效: 进度加载动画
  * 百分比数字
    - 字体: 36px
    - 字重: 600
    - 颜色: #333333

##### 4.2.2 维度分析
- 雷达图展示
  * 维度项:
    - 性格特征
    - 价值观
    - 生活习惯
    - 兴趣爱好
    - 情感需求
  * 样式:
    - 尺寸: 300x300px
    - 线条颜色: #E8E8E8
    - 填充色: rgba(74,144,226,0.1)
    - 数据点: #4A90E2

- 文字说明
  * 标题字体: 18px
  * 描述字体: 14px
  * 行高: 1.6

##### 4.2.3 核心建议
- 卡片设计
  * 背景色: #F8F8F8
  * 圆角: 8px
  * 内边距: 16px
  * 最大宽度: 400px

- 内容设计
  * 建议标题
    - 字体: 16px
    - 字重: 500
    - 颜色: #333333
  * 建议描述
    - 字体: 14px
    - 颜色: #666666
    - 行高: 1.6

#### 4.3 轮播控制
- 切换按钮
  * 位置: 两侧居中
  * 尺寸: 40x40px
  * 背景色: rgba(0,0,0,0.1)
  * 图标颜色: #FFFFFF
  * hover效果: 背景色加深

- 指示器
  * 位置: 底部居中
  * 样式: 圆点
  * 尺寸: 8px
  * 间距: 8px
  * 当前页: 主色
  * 其他页: #E8E8E8

- 自动播放
  * 间隔: 5000ms
  * 过渡: 300ms
  * hover暂停

#### 4.4 响应式适配
- 桌面端(>1024px)
  * 显示数量: 2个
  * 卡片宽度: 560px
  * 卡片间距: 24px

- 平板端(768px-1024px)
  * 显示数量: 1个
  * 卡片宽度: 100%
  * 左右边距: 40px

- 移动端(<768px)
  * 显示数量: 1个
  * 卡片宽度: 100%
  * 左右边距: 20px

## 技术实现

### 技术栈选型
- 框架: Next.js 13+ (App Router)
- UI框架: React 18+
- 样式方案: Tailwind CSS
- 状态管理: Zustand
- 构建工具: Turbopack
- 包管理器: pnpm

### 组件架构
1. 页面组件 (Pages)
```typescript
// page.tsx
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductIntro />
      <GuideSection />
      <ResultExample />
    </main>
  )
}
```

2. 布局组件 (Layouts)
```typescript
// layout.tsx
export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
```

3. 功能组件
- HeroSection: 首屏展示
- ProductIntro: 产品介绍
- GuideSection: 使用指南
- ResultExample: 结果展示

4. 通用组件
- Button: 按钮组件
- Card: 卡片组件
- Icon: 图标组件
- Modal: 弹窗组件

### 状态管理

#### 1. 状态设计
- 全局状态
  * 用户信息
  * 系统配置
  * 主题设置
- UI状态
  * 页面滚动位置
  * 弹窗/抽屉状态
  * 活动区块
- 表单状态
  * 测评进度
  * 答案数据
  * 临时存储

#### 2. 状态实现
使用Zustand进行状态管理:

```typescript
// store/homeStore.ts
import create from 'zustand'

interface HomeState {
  currentSection: string
  setCurrentSection: (section: string) => void
  isModalOpen: boolean
  toggleModal: () => void
}

export const useHomeStore = create<HomeState>((set) => ({
  currentSection: 'hero',
  setCurrentSection: (section) => set({ currentSection: section }),
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen }))
}))
```

#### 3. 状态使用
- 组件中使用状态:
```typescript
function HeroSection() {
  const { currentSection, setCurrentSection } = useHomeStore()
  
  return (
    <section 
      className={currentSection === 'hero' ? 'active' : ''}
      onClick={() => setCurrentSection('hero')}
    >
      {/* 组件内容 */}
    </section>
  )
}
```

#### 4. 最佳实践
- 状态粒度适中,避免过度集中或分散
- 使用选择器优化性能
- 关键状态持久化存储
- 遵循单向数据流
- 保持状态同步和一致性

#### 5. 开发工具
- Redux DevTools支持
- 状态变更日志
- 开发环境调试功能
- 性能监控集成

### 性能优化

1. 图片优化
```typescript
import Image from 'next/image'

// 首屏关键图片 - 不使用懒加载
<Image
  src="/hero.jpg"
  alt="Hero Banner"
  width={1200}
  height={600}
  priority  // 先加载
  placeholder="blur" // 加载时显示模糊效果
/>

// 非首屏图片 - 使用懒加载
<Image
  src="/example-report.jpg"
  alt="Report Example"
  width={800}
  height={400}
  loading="lazy" // 懒加载
  placeholder="blur"
/>

// 小图标等资源 - 直接加载
<Image
  src="/icons/feature.svg"
  alt="Feature Icon"
  width={24}
  height={24}
  // 小图标无需懒加载
/>
```

2. 组件加载优化
```typescript
// 动态导入大型组件
const ResultExample = dynamic(() => import('./ResultExample'), {
  loading: () => <LoadingSpinner />
})
```

3. 路由预加载
```typescript
// 预加载可能的下一个页面
<Link href="/assessment" prefetch>
  开始测评
</Link>
```

4. 性能监控
```typescript
// utils/metrics.ts
export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      // 处理首次内容绘制
      break
    case 'LCP':
      // 处理最大内容绘制
      break
    case 'CLS':
      // 处理累积布局偏移
      break
    case 'FID':
      // 处理首次输入延迟
      break
    case 'TTFB':
      // 处理首字节时间
      break
  }
}
```

### 开发规范

1. 代码质量
- ESLint配置
- Prettier格式化
- TypeScript严格模式
- Git提���规范

2. 测试策略
- 单元测试: Jest + React Testing Library
- E2E测试: Cypress
- 性能测试: Lighthouse

3. CI/CD
- GitHub Actions自动化流程
- 自动化测试
- 自动化部署

4. 监控告警
- 错误监控
- 性能监控
- 用户行为分析

这样的技术实现部分更加完整和具体,能够为开发团队提供更清晰的指导。

## 开发规范





### 组件开发规范
- 使用TypeScript
- 函数组件
- Props类型声明
- 组件注释完整

### 样式管理
- 优先使用Tailwind类
- 遵循移动优先原则
- 保持视觉一致性
- 主题变量统一

## 注意事项

1. 性能考虑
- 首屏加载优化
- 图片资源优化
- 动画性能

2. 可访问性
- 语义化HTML
- 键盘操作支持
- 屏幕阅读器支持

3. 响应式设计
- 移动端优先
- 断点适配
- 内容布局自适应

4. 用户体验
- 清晰的视觉层级
- 直观的操作路径
- 适当的反馈机制
