"use client"

import { Section } from '@/components/common/Section'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Timeline } from './Timeline'
import { motion } from 'framer-motion'

const GUIDE_STEPS = [
  {
    title: '填写测评问卷',
    description: '完成个性化测评问卷,了解自己的性格特征',
    details: '通过精心设计的问卷，全方位了解你的性格特点、生活方式、价值观等关键维度。我们的问题经过专业团队优化，简单直观却富有洞察力。',
    icon: '📝',
    step: 1,
    duration: '10-15分钟'
  },
  {
    title: 'AI智能分析',
    description: 'AI系统对测评数据进行多维度分析',
    details: '强大的AI系统会对你的答案进行深度分析，从多个维度评估你的个性特征，并生成专业的个性画像报告。',
    icon: '🤖',
    step: 2,
    duration: '3-5分钟'
  },
  {
    title: '获取匹配报告',
    description: '查看详细的个性化匹配分析报告',
    details: '获取完整的个性化报告，包含性格分析、交友建议、潜在匹配类型等详细内容。我们的建议都基于科学的心理学理论和数据分析。',
    icon: '📊',
    step: 3,
    duration: '即时生成'
  }
];

export function GuideSection() {
  return (
    <Section background="secondary" className="min-h-screen flex items-center">
      <div className="container-page relative py-20">
        {/* 左上装饰 */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
        </motion.div>
        
        {/* 右上装饰 */}
        <motion.div
          className="absolute -top-10 right-0 w-32 h-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-xl" />
        </motion.div>
        
        <SectionHeader
          title="使用流程"
          description="简单三步，开启寻找真爱之旅"
          className="mb-20"
        />
        
        <Timeline steps={GUIDE_STEPS} />
        
        {/* 左下装饰 */}
        <motion.div
          className="absolute -bottom-10 left-20 w-48 h-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/15 to-transparent blur-2xl" />
        </motion.div>
        
        {/* 右下装饰 */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-56 h-56"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tl from-primary/20 to-transparent blur-2xl" />
        </motion.div>
      </div>
    </Section>
  )
} 