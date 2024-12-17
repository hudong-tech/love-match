"use client"

import { motion } from 'framer-motion'
import { ExampleCard } from './ExampleCard'
import { Carousel } from './Carousel'
import type { ExampleData } from './types'

const examples: ExampleData[] = [
  {
    matchRate: 85,
    dimensions: {
      personality: 90,
      values: 85,
      lifestyle: 80,
      interests: 85,
      emotions: 85,
    },
    suggestions: [
      {
        title: '性格互补',
        content: '你们的性格特征形成良好互补,可以在生活中相互促进成长。'
      },
      {
        title: '沟通方式',
        content: '建议多使用积极倾听的方式,增进彼此理解。'
      }
    ]
  },
  {
    matchRate: 92,
    dimensions: {
      personality: 95,
      values: 90,
      lifestyle: 88,
      interests: 92,
      emotions: 95,
    },
    suggestions: [
      {
        title: '共同成长',
        content: '你们有很高的价值观契合度,可以制定共同的人生目标。'
      },
      {
        title: '兴趣培养',
        content: '可以多尝试对方感兴趣的活动,拓展共同话题。'
      }
    ]
  }
] as const

export function ResultExample() {
  return (
    <section className="bg-background-primary section-padding">
      <div className="container-page">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            匹配报告示例
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            科学的分析方法，全面的维度评估，让你更了解彼此的契合度
          </p>
        </motion.div>

        <Carousel>
          {examples.map((example, index) => (
            <ExampleCard 
              key={index}
              {...example}
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
} 