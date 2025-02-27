"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Section } from '@/components/common/Section'
import type { UserInfo } from '../../types'
import { PersonForm } from './PersonForm'
import Link from 'next/link'
import { testPersonA, testPersonB, testAnswers } from '../../data/testData'

export function InfoForm() {
  const router = useRouter()
  const [info, setInfo] = useState<UserInfo>({
    self: {
      name: '',
      gender: 'male',
      birthDate: { date: '', isLunar: false },
      education: '',
      occupation: '',
    },
    partner: {
      name: '',
      gender: 'female',
      birthDate: { date: '', isLunar: false },
      education: '',
      occupation: '',
    }
  })

  const handleSubmit = () => {
    const validatePerson = (person: typeof info.self) => {
      return person.name && 
             person.birthDate.date &&
             person.education &&
             person.occupation
    }

    if (!validatePerson(info.self) || !validatePerson(info.partner)) {
      alert('请完善所有必填信息')
      return
    }
    
    try {
      // 同时使用两种存储方式确保兼容性
      localStorage.setItem('user_info', JSON.stringify(info))
      localStorage.setItem('person_a', JSON.stringify(info.self))
      localStorage.setItem('person_b', JSON.stringify(info.partner))
      router.push('/quiz/quiz')
    } catch (error) {
      console.error('保存用户信息失败:', error)
      alert('保存信息失败，请重试')
    }
  }

  // 添加测试功能
  const handleTestMode = () => {
    // 存储个人信息
    localStorage.setItem('person_a', JSON.stringify(testPersonA))
    localStorage.setItem('person_b', JSON.stringify(testPersonB))
    
    // 存储测试答案
    localStorage.setItem('quiz_answers', JSON.stringify(testAnswers))
    
    // 存储当前步骤为最后一题
    localStorage.setItem('quiz_step', '19') // 更新为实际的问题总数
    
    // 跳转到问卷页面
    router.push('/quiz/quiz')
  }

  return (
    <Section 
      background="secondary"
      className="h-screen overflow-hidden flex items-center"
    >
      <div className="container-page w-full">
        <div className="max-w-4xl mx-auto">
          {/* Logo和返回按钮区域 */}
          <div className="flex">
            <div className="w-[calc(50%-12px)]">
              <div className="-ml-[33%]">
                <Link
                  href="/"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-3
                    text-lg font-medium text-white
                    bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400
                    rounded-full
                    shadow-lg shadow-amber-500/20
                    hover:shadow-xl hover:shadow-rose-500/30
                    transform transition-all duration-300
                  "
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                    />
                  </svg>
                  返回首页
                </Link>
              </div>
            </div>
          </div>

          {/* 标题区域 - 减少间距 */}
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold mb-2">
              基本信息
            </h1>
            <div className="w-24 h-1 mx-auto mb-2 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400" />
            <p className="text-lg text-text-secondary">
              请填写双方的基本信息，帮助我们更好地了解你们
            </p>
          </div>

          {/* 表单区域 - 移除固定高度和滚动 */}
          <div className="grid md:grid-cols-2 gap-6">
            <PersonForm
              title="我的信息"
              info={info.self}
              onChange={(data) => setInfo(prev => ({ ...prev, self: data }))}
            />
            <PersonForm
              title="TA的信息"
              info={info.partner}
              isPartner
              onChange={(data) => setInfo(prev => ({ ...prev, partner: data }))}
            />
          </div>

          {/* 按钮 - 减少上边距 */}
          <div className="flex justify-center mt-4">
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 text-white rounded-full text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
            >
              下一步
              <svg 
                className="ml-2 w-5 h-5 inline-block" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </motion.button>
          </div>

          {/* 添加测试按钮 - 仅在开发环境显示 */}
          {process.env.NODE_ENV === 'development' && (
            <button
              onClick={handleTestMode}
              className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
            >
              使用测试数据
            </button>
          )}
        </div>
      </div>
    </Section>
  )
} 