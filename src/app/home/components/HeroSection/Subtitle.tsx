"use client"

import { motion } from 'framer-motion'

export function Subtitle() {
  return (
    <motion.div
      className="text-lg sm:text-xl text-text-secondary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <p>
        基于AI算法的多维度个性化匹配，
        <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-medium">
          助你找到灵魂伴侣
        </span>
      </p>
    </motion.div>
  )
} 