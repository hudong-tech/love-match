import { FeatureCard } from './FeatureCard'

const features = [
  {
    icon: 'ai',
    title: 'AI智能匹配',
    description: '基于更先进的大模型算法,多维度分析用户特征,实现精准匹配推荐',
    color: 'professional' as const,
  },
  {
    icon: 'analysis',
    title: '多维度分析',
    description: '从性格、价值观、生活方式等多个维度进行全方位分析',
    color: 'primary' as const,
  },
  {
    icon: 'advice',
    title: '专业建议',
    description: '基于分析结果提供个性化的专业建议和改善方向',
    color: 'success' as const,
  },
  {
    icon: 'fast',
    title: '简单快速',
    description: '15分钟完成测评,获取专业的匹配分析报告',
    color: 'warning' as const,
  },
] as const

export function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  )
} 