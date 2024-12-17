"use client"

import { motion } from 'framer-motion'
import { StepIcon } from './StepIcon'

interface StepCardProps {
  icon: 'form' | 'analysis' | 'report'
  title: string
  description: string
  time: string
  color: 'primary' | 'professional' | 'success'
  index: number
  isLast: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
      ease: "easeOut"
    }
  })
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
}

const numberVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.2
    }
  }
}

export function StepCard({ 
  icon, 
  title, 
  description, 
  time, 
  color, 
  index,
  isLast 
}: StepCardProps) {
  return (
    <motion.div 
      className="relative flex items-start gap-8 md:even:flex-row-reverse"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      {/* 节点 */}
      <div className="flex-none">
        <motion.div 
          className={`
            w-20 h-20 rounded-full bg-${color}-lightest
            flex items-center justify-center
            relative z-10
          `}
          variants={iconVariants}
        >
          <StepIcon name={icon} color={color} />
          <motion.div 
            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md
              flex items-center justify-center text-lg font-semibold text-text-primary"
            variants={numberVariants}
          >
            {index}
          </motion.div>
        </motion.div>
      </div>

      {/* 内容 */}
      <motion.div 
        className="flex-1 pt-2"
        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-secondary mb-4">
          {description}
        </p>
        <div className={`
          text-sm text-${color}
          flex items-center gap-2
          opacity-0 animate-fade-in
          animation-delay-${index * 300}
        `}>
          <svg 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          预计耗时: {time}
        </div>
      </motion.div>

      {/* 连接线 */}
      {!isLast && (
        <motion.div 
          className="absolute left-[39px] top-[88px] w-0.5 h-[calc(100%+48px)] bg-background-divider 
            md:left-1/2 md:-translate-x-px hidden md:block"
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% + 48px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
      )}
    </motion.div>
  )
} 