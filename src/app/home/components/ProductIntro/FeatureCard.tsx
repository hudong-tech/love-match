"use client"

import { motion } from 'framer-motion'
import { FeatureIcon } from './FeatureIcon'

interface FeatureCardProps {
  icon: 'ai' | 'analysis' | 'advice' | 'fast'
  title: string
  description: string
  color: 'primary' | 'professional' | 'success' | 'warning'
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <motion.div 
      className="card p-6 sm:p-8 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <FeatureIcon name={icon} color={color} />
        </motion.div>
        <div className="flex-1 text-center sm:text-left">
          <motion.h3 
            className="text-xl font-semibold text-text-primary mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
} 