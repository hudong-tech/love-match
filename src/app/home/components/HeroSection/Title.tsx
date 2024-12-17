import { motion } from 'framer-motion'

export function Title() {
  return (
    <motion.h1 
      className="text-[32px] md:text-[36px] lg:text-[48px] font-semibold text-text-primary leading-[1.2]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      为你找到最适合的Ta
    </motion.h1>
  )
} 