import { IconForm, IconAnalysis, IconReport } from './icons'

const icons = {
  form: IconForm,
  analysis: IconAnalysis,
  report: IconReport,
} as const

interface StepIconProps {
  name: keyof typeof icons
  color: 'primary' | 'professional' | 'success'
}

export function StepIcon({ name, color }: StepIconProps) {
  const Icon = icons[name]
  
  return (
    <Icon className={`w-8 h-8 text-${color}`} />
  )
} 