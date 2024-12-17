"use client"

import { motion } from 'framer-motion'

interface MatchRateProps {
  value: number
}

export function MatchRate({ value }: MatchRateProps) {
  const circumference = 2 * Math.PI * 45 // 圆的周长

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        {/* 背景圆环 */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#F5F5F5"
            strokeWidth="10"
          />
          {/* 进度圆环 */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ strokeDasharray: `0 ${circumference}` }}
            whileInView={{ strokeDasharray: `${(value / 100) * circumference} ${circumference}` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        {/* 渐变定义 */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8BA7" />
              <stop offset="100%" stopColor="#4A90E2" />
            </linearGradient>
          </defs>
        </svg>

        {/* 中间的数字 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative"
          >
            <motion.span 
              className="text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              {value}
            </motion.span>
            <motion.span
              className="absolute -right-5 text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            >
              %
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h3 
        className="mt-4 text-xl font-semibold text-text-primary"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        匹配度
      </motion.h3>
    </div>
  )
} 