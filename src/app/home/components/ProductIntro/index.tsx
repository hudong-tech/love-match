"use client"

import { motion } from 'framer-motion'
import { FeatureGrid } from './FeatureGrid'
import { Section } from '@/components/common/Section'

export function ProductIntro() {
  return (
    <Section 
      background="secondary"
      fullScreen
      className="snap-start"
    >
      <div className="container-page relative py-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            为什么选择我们
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            科学的匹配算法，专业的分析体系，让寻找真爱不再困难
          </p>
        </motion.div>
        <FeatureGrid />
      </div>
    </Section>
  )
} 