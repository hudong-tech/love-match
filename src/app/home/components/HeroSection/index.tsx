"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Title } from './Title'
import { Subtitle } from './Subtitle'
import { CTAButton } from './CTAButton'
import { HeroImage } from './HeroImage'

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
    <section className="relative bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 section-padding pt-32 sm:pt-36 overflow-hidden">
      {/* 装饰元素 */}
      <motion.div 
        className="absolute right-0 top-0 w-32 md:w-48 lg:w-64 opacity-20"
        initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
        animate={{ opacity: 0.2, rotate: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/decorations/geometric.svg"
          alt=""
          width={256}
          height={256}
          className="w-full h-auto [filter:hue-rotate(30deg)]"
        />
      </motion.div>
      <motion.div 
        className="absolute left-0 bottom-0 w-32 md:w-48 lg:w-64 opacity-10"
        initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
        animate={{ opacity: 0.1, rotate: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/decorations/curve.svg"
          alt=""
          width={256}
          height={256}
          className="w-full h-auto"
        />
      </motion.div>

      <div className="container-page">
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
    </section>
  )
} 