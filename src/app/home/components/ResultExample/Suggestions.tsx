"use client"

import { motion } from 'framer-motion'

interface SuggestionsProps {
  items: Array<{
    title: string
    content: string
  }>
}

export function Suggestions({ items }: SuggestionsProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          className="p-4 bg-background-secondary rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h4 className="text-lg font-medium text-text-primary mb-2">
            {item.title}
          </h4>
          <p className="text-text-secondary">
            {item.content}
          </p>
        </motion.div>
      ))}
    </div>
  )
} 