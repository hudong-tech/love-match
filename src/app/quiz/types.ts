export interface Question {
  id: number
  title: string
  options: string[]
  category: 'daily' | 'values' | 'communication' | 'lifestyle' | 'overall'
}

export interface Answer {
  questionId: number
  selectedOption: string
}

export interface QuizState {
  currentStep: number
  answers: Answer[]
}

export interface PersonInfo {
  name: string
  gender: 'male' | 'female'
  birthDate: {
    date: string
    isLunar: boolean
  }
  education: string
  occupation: string
  location?: string
  height?: number
  income?: string
  requirements?: {
    ageRange?: {
      min: number
      max: number
    }
    height?: {
      min: number
      max: number
    }
    education?: string[]
    occupation?: string[]
    income?: string[]
    location?: string
  }
}

export interface UserInfo {
  self: PersonInfo
  partner: PersonInfo
}

export interface ResultData {
  overall: number
  dimensions: {
    daily: number        // 日常相处
    values: number       // 价值观
    communication: number // 沟通方式
    lifestyle: number    // 生活方式
    overall: number      // 综合评价
  }
  suggestions: {
    title: string
    content: string
  }[]
} 