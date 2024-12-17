import { motion } from 'framer-motion'
import { StepCard } from './StepCard'

const steps = [
  {
    icon: 'form' as const,
    title: '填写测评问卷',
    description: '完成个性化测评问卷,了解自己的性格特征',
    time: '约10分钟',
    color: 'professional' as const,
  },
  {
    icon: 'analysis' as const,
    title: 'AI智能分析',
    description: 'AI系统对测评数据进行多维度分析',
    time: '约3分钟',
    color: 'primary' as const,
  },
  {
    icon: 'report' as const,
    title: '获取匹配报告',
    description: '查看详细的个性化匹配分析报告',
    time: '即时生成',
    color: 'success' as const,
  },
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

export function Timeline() {
  return (
    <motion.div 
      className="relative max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* 步骤卡片 */}
      <div className="space-y-12 md:space-y-24">
        {steps.map((step, index) => (
          <StepCard 
            key={step.title}
            {...step}
            index={index + 1}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </motion.div>
  )
} 