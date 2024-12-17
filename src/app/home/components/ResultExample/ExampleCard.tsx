"use client"

import { motion } from 'framer-motion'
import { MatchRate } from './MatchRate'
import { DimensionChart } from './DimensionChart'
import { Suggestions } from './Suggestions'
import type { ExampleData } from './types'

export type ExampleCardProps = ExampleData

export function ExampleCard({ matchRate, dimensions, suggestions }: ExampleCardProps) {
  return (
    <motion.div 
      className="card p-6 sm:p-8 md:p-10 mx-4 sm:mx-6 md:mx-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* 左侧 - 匹配度和维度分析 */}
        <div className="space-y-8">
          <div className="max-w-[200px] mx-auto">
            <MatchRate value={matchRate} />
          </div>
          <DimensionChart data={dimensions} />
        </div>

        {/* 右侧 - 建议 */}
        <div>
          <h3 className="text-xl font-semibold text-text-primary mb-6 text-center md:text-left">
            核心建议
          </h3>
          <Suggestions items={suggestions} />
        </div>
      </div>
    </motion.div>
  )
} 