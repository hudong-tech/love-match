export interface Question {
  id: number
  title: string
  options: string[]
  category: 'personality' | 'values' | 'lifestyle' | 'experience' | 'expectation'
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
    personality: number
    values: number
    lifestyle: number
    experience: number
    expectation: number
  }
  suggestions: Array<{
    title: string
    content: string
  }>
} 