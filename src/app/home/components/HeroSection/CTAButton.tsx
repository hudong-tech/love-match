"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTAButton() {
  return (
    <div className="flex justify-center sm:justify-start">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link 
          href="/quiz/info"
          className="
            inline-flex items-center justify-center
            px-12 py-4 sm:px-14 sm:py-5
            text-xl sm:text-2xl font-medium text-white
            bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400
            rounded-full
            shadow-lg shadow-amber-500/20
            hover:shadow-xl hover:shadow-rose-500/30
            transform transition-all duration-300
            min-w-[200px] sm:min-w-[240px]
          "
        >
          开始测评
        </Link>
      </motion.div>
    </div>
  )
} 