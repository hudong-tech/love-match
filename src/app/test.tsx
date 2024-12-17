import { motion } from 'framer-motion'

export function TestAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hello Framer Motion!
    </motion.div>
  )
} 