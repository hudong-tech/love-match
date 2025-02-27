"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Section } from '@/components/common/Section'
import { Question } from './Question'
import { questions } from '../../data/questions'
import { useQuizState } from '../../hooks/useQuizState'
import { testAnswers } from '../../data/testData'
import { AnalysisLoading } from '@/components/common/AnalysisLoading'

export function QuizForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [analysisStep, setAnalysisStep] = useState(0)
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
    try {
      setIsSubmitting(true)
      setAnalysisStep(1) // 开始提交
      
      // 从user_info中获取数据
      const userInfo = JSON.parse(localStorage.getItem('user_info') || '{}')
      const personA = userInfo.self || {}
      const personB = userInfo.partner || {}
      
      // 验证数据
      if (!personA.name || !personB.name) {
        throw new Error('用户信息不完整')
      }

      setAnalysisStep(2) // 开始分析
      
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers,
          personA,
          personB
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || '提交失败')
      }

      setAnalysisStep(3) // 生成建议

      const result = await response.json()
      
      if (!result.data) {
        throw new Error('返回数据格式错误')
      }

      setAnalysisStep(4) // 准备报告
      
      // 记录成功的测评日志
      console.log('测评完成:', {
        timestamp: new Date().toISOString(),
        personA: {
          name: personA.name,
          gender: personA.gender,
          education: personA.education,
          occupation: personA.occupation
        },
        personB: {
          name: personB.name,
          gender: personB.gender,
          education: personB.education,
          occupation: personB.occupation
        },
        answersCount: answers.length,
        result: {
          overall: result.data.overall,
          dimensions: result.data.dimensions,
          suggestionsCount: result.data.suggestions.length
        }
      })
      
      // 清除本地存储
      clearState()
      localStorage.removeItem('quiz_answers')
      
      // 保存结果
      localStorage.setItem('quiz_result', JSON.stringify(result.data))
      
      // 延迟跳转，让用户看到完成动画
      await new Promise(resolve => setTimeout(resolve, 500))
      router.push('/quiz/result')
      
    } catch (error) {
      console.error('提交测评失败:', error)
      alert(error instanceof Error ? error.message : '提交失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
      setAnalysisStep(0)
    }
  }

  // 添加测试功能
  const handleTestMode = () => {
    // 存储测试答案
    localStorage.setItem('quiz_answers', JSON.stringify(testAnswers))
    
    // 跳转到结果页
    router.push('/quiz/result')
  }

  useEffect(() => {
    // 检查用户信息是否存在
    const userInfo = localStorage.getItem('user_info')
    
    if (!userInfo) {
      // 如果信息不存在，重定向到信息页
      router.replace('/quiz/info')
    } else {
      // 检查数据有效性
      try {
        const parsedInfo = JSON.parse(userInfo)
        if (!parsedInfo.self?.name || !parsedInfo.partner?.name) {
          router.replace('/quiz/info')
        }
      } catch (e) {
        router.replace('/quiz/info')
      }
    }
  }, [router])

  return (
    <main>
      {isSubmitting && <AnalysisLoading currentStep={analysisStep} />}
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

          {/* 添加测试按钮 - 仅在开发环境显示 */}
          {process.env.NODE_ENV === 'development' && (
            <button
              onClick={handleTestMode}
              className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
            >
              使用测试答案
            </button>
          )}
        </div>
      </Section>
    </main>
  )
}