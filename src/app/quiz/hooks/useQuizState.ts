import { useState, useEffect } from 'react'
import type { Answer, QuizState } from '../types'

const STORAGE_KEY = 'quiz_state'

export function useQuizState() {
  // 初始化状态
  const [state, setState] = useState<QuizState>(() => {
    // 如果在服务器端，返回默认值
    if (typeof window === 'undefined') {
      return {
        currentStep: 1,
        answers: []
      }
    }
    
    // 尝试从 localStorage 读取状态
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse saved quiz state:', e)
      }
    }
    
    // 默认值
    return {
      currentStep: 1,
      answers: []
    }
  })

  // 当状态改变时保存到 localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  // 更新步骤
  const setStep = (step: number) => {
    setState(prev => ({
      ...prev,
      currentStep: step
    }))
  }

  // 更新答案
  const setAnswer = (questionId: number, selectedOption: string) => {
    setState(prev => {
      const newAnswers = [...prev.answers]
      const existingIndex = newAnswers.findIndex(a => a.questionId === questionId)
      
      if (existingIndex > -1) {
        newAnswers[existingIndex] = { questionId, selectedOption }
      } else {
        newAnswers.push({ questionId, selectedOption })
      }
      
      return {
        ...prev,
        answers: newAnswers
      }
    })
  }

  // 清除状态
  const clearState = () => {
    setState({
      currentStep: 1,
      answers: []
    })
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    currentStep: state.currentStep,
    answers: state.answers,
    setStep,
    setAnswer,
    clearState
  }
} 