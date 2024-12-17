"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Title } from './Title'
import { Subtitle } from './Subtitle'
import { CTAButton } from './CTAButton'
import { HeroImage } from './HeroImage'
import { Section } from '@/components/common/Section'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function HeroSection() {
  return (
    <Section 
      background="primary"
      fullScreen
      className="snap-start"
    >
      <div className="container-page relative py-20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 左侧文案区 */}
          <motion.div 
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={itemVariants}
          >
            <Title />
            <Subtitle />
            <CTAButton />
          </motion.div>
          
          {/* 右侧图片区 */}
          <motion.div 
            className="relative order-1 lg:order-2"
            variants={itemVariants}
          >
            <HeroImage />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
} 