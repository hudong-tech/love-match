"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroImage() {
  return (
    <motion.div 
      className="relative w-full max-w-[600px] mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
      <div className="relative aspect-[6/5]">
        <Image
          src="/images/hero-illustration.png"
          alt="AI婚恋匹配"
          width={1200}
          height={1000}
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </div>
    </motion.div>
  )
} 