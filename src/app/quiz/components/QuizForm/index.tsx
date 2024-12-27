"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Section } from '@/components/common/Section'
import { Question } from './Question'
import { questions } from '../../data/questions'
import { useQuizState } from '../../hooks/useQuizState'

export function QuizForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    currentStep: step,
    answers,
    setStep,
    setAnswer,
    clearState
  } = useQuizState()
  
  const currentQuestion = questions[step - 1]
  const totalSteps = questions.length
  
  const handleSelect = (option: string) => {
    setAnswer(currentQuestion.id, option)
    
    // 自动进入下一题
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }
  
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id)

  const handleSubmit = async () => {
    if (answers.length < totalSteps) return
    
    try {
      setIsSubmitting(true)
      
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers })
      })

      if (!response.ok) {
        throw new Error('提交失败')
      }

      const result = await response.json()
      
      // 清除本地存储
      clearState()
      
      // 将结果保存到 localStorage，供结果页面使用
      localStorage.setItem('quiz_result', JSON.stringify(result.data))
      
      // 跳转到结果页
      router.push('/quiz/result')
      
    } catch (error) {
      console.error('提交测评失败:', error)
      alert('提交失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <Section 
        background="primary"
        className="min-h-screen pt-20"
      >
        <div className="container-page">
          {/* 进度指示器 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-text-secondary">
                测评进度
              </span>
              <span className="text-sm font-medium">
                {step}/{totalSteps}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* 问题区域 */}
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <Question
                  question={currentQuestion}
                  selectedOption={currentAnswer?.selectedOption}
                  onSelect={handleSelect}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 导航按钮 */}
          <div className="flex justify-between mt-8 max-w-2xl mx-auto">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-6 py-2 rounded-lg bg-gray-100 text-text-secondary disabled:opacity-50"
            >
              上一题
            </button>
            {step === totalSteps ? (
              <button
                onClick={handleSubmit}
                disabled={answers.length < totalSteps || isSubmitting}
                className="px-6 py-2 rounded-lg bg-primary text-white disabled:opacity-50"
              >
                {isSubmitting ? '提交中...' : '完成测评'}
              </button>
            ) : (
              <button
                onClick={() => setStep(Math.min(totalSteps, step + 1))}
                className="px-6 py-2 rounded-lg bg-primary text-white"
              >
                下一题
              </button>
            )}
          </div>
        </div>
      </Section>
    </main>
  )
}