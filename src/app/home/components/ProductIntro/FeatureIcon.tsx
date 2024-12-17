"use client"

import { IconAI, IconAnalysis, IconAdvice, IconFast } from './icons'

interface FeatureIconProps {
  name: 'ai' | 'analysis' | 'advice' | 'fast'
  className?: string
}

export function FeatureIcon({ name, className = "" }: FeatureIconProps) {
  const icons = {
    ai: IconAI,
    analysis: IconAnalysis,
    advice: IconAdvice,
    fast: IconFast
  }

  const Icon = icons[name]
  
  return (
    <div className={`
      w-12 h-12 rounded-xl
      bg-primary/10
      flex items-center justify-center
      ${className}
    `}>
      <Icon className="w-6 h-6 text-primary" />
    </div>
  )
} 