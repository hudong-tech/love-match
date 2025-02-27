"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Section } from '@/components/common/Section'
import { expectedResult } from '../../data/testData'
import type { ResultData } from '../../types'

export function ResultView() {
  const router = useRouter()
  const [result, setResult] = useState<ResultData | null>(null)
  const [improvement, setImprovement] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // 检查是否是测试模式
    const isTestMode = localStorage.getItem('quiz_answers') !== null
    
    // 从localStorage获取结果
    const savedResult = localStorage.getItem('quiz_result')
    
    if (!savedResult) {
      // 如果没有结果，重定向到测评页
      router.replace('/quiz/info')
      return
    }

    try {
      // 如果是测试模式，使用测试数据
      if (isTestMode && process.env.NODE_ENV === 'development') {
        setResult(expectedResult)
      } else {
        // 否则使用API返回的数据
        setResult(JSON.parse(savedResult))
      }
    } catch (e) {
      console.error('Failed to parse result:', e)
      router.replace('/quiz/info')
    }
  }, [router])

  const handleSubmitImprovement = async () => {
    if (!improvement.trim()) return
    
    setIsSubmitting(true)
    try {
      // 可以发送到后端保存
      await fetch('/api/quiz/improvement', {
        method: 'POST',
        body: JSON.stringify({ improvement })
      })
      
      // 显示成功提示
      alert('感谢您的反馈！')
      setImprovement('')
    } catch (error) {
      console.error('提交失败:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!result) return null

  return (
    <main>
      <Section background="primary" className="min-h-screen pt-20">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            {/* 总体匹配度 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl font-bold mb-4">测评结果</h1>
              <div className="relative w-40 h-40 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-primary/10" />
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {result.overall}%
                  </span>
                </div>
              </div>
              <p className="text-lg text-text-secondary">
                整体契合度
              </p>
            </motion.div>

            {/* 维度分析 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 mb-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-6">维度分析</h2>
              <div className="space-y-4">
                {Object.entries(result.dimensions).map(([key, value], index) => (
                  <div key={key}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-secondary">
                        {key === 'daily' && '日常相处'}
                        {key === 'values' && '价值观'}
                        {key === 'communication' && '沟通方式'}
                        {key === 'lifestyle' && '生活方式'}
                        {key === 'overall' && '综合评价'}
                      </span>
                      <span className="font-medium">{value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 建议 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-6">个性化建议</h2>
              <div className="space-y-6">
                {result.suggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <h3 className="font-medium text-lg mb-2">{suggestion.title}</h3>
                    <p className="text-text-secondary">{suggestion.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 改进建议输入区域 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm mt-8"
            >
              <h2 className="text-xl font-semibold mb-4">
                你希望对方可以改变什么？
              </h2>
              <div className="space-y-4">
                <textarea
                  value={improvement}
                  onChange={(e) => setImprovement(e.target.value)}
                  placeholder="请描述你希望对方改变的地方..."
                  className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmitImprovement}
                    disabled={isSubmitting || !improvement.trim()}
                    className="px-6 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
                  >
                    {isSubmitting ? '提交中...' : '提交建议'}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 操作按钮 */}
            <div className="mt-8 flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg bg-primary text-white"
                onClick={() => router.push('/quiz/info')}
              >
                重新测评
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg bg-gray-100 text-text-secondary"
                onClick={() => router.push('/')}
              >
                返回首页
              </motion.button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
} 