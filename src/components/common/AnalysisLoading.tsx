import { motion } from 'framer-motion'

const steps = [
  { id: 1, text: '正在提交数据...' },
  { id: 2, text: '正在进行匹配分析...' },
  { id: 3, text: '生成个性化建议...' },
  { id: 4, text: '准备完整报告...' }
]

interface Props {
  currentStep: number
}

export function AnalysisLoading({ currentStep }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="space-y-8">
          {/* 进度条 */}
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute h-full bg-primary"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* 步骤列表 */}
          <div className="space-y-4">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: currentStep >= step.id ? 1 : 0.5,
                  y: 0 
                }}
                className="flex items-center space-x-3"
              >
                <div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm
                    ${currentStep >= step.id ? 'bg-primary text-white' : 'bg-gray-100'}`}
                >
                  {step.id}
                </div>
                <span className={currentStep >= step.id ? 'text-black' : 'text-gray-400'}>
                  {step.text}
                </span>
                {currentStep === step.id && (
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 1,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* 提示文本 */}
          <p className="text-sm text-center text-gray-500">
            分析过程需要一些时间，请耐心等待...
          </p>
        </div>
      </div>
    </div>
  )
} 