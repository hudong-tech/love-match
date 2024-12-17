export interface Suggestion {
  title: string
  content: string
}

export interface Dimensions {
  personality: number
  values: number
  lifestyle: number
  interests: number
  emotions: number
}

export interface ExampleData {
  matchRate: number
  dimensions: Dimensions
  suggestions: Suggestion[]
} 