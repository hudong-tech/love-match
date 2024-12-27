"use client"

import { motion } from 'framer-motion'

interface QuestionProps {
  question: {
    id: number
    title: string
    options: string[]
  }
  selectedOption?: string
  onSelect: (option: string) => void
}

export function Question({ question, selectedOption, onSelect }: QuestionProps) {
  return (
    <div>
      <h3 className="text-xl font-medium text-text-primary mb-6">
        {question.title}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelect(option)}
            className={`
              w-full p-4 rounded-xl text-left transition-colors
              ${selectedOption === option 
                ? 'bg-primary/10 text-primary border-2 border-primary' 
                : 'bg-gray-50 text-text-secondary hover:bg-gray-100'
              }
            `}
            whileTap={{ scale: 0.98 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  )
} 