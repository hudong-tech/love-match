"use client"

import { motion } from 'framer-motion'
import { Timeline } from './Timeline'

export function GuideSection() {
  return (
    <section className="bg-background-secondary section-padding">
      <div className="container-page">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            使用流程
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            简单三步，开启寻找真爱之旅
          </p>
        </motion.div>
        
        <Timeline />
      </div>
    </section>
  )
} 