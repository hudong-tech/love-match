import type { PersonInfo, Answer } from '../types'
import { questions } from '../data/questions'
import { OpenAIManager } from '@/lib/openai/apiManager'
import { matchAnalysisPrompt } from '@/lib/openai/prompts'
import { suggestionTemplates } from '@/lib/openai/prompts'

interface Suggestion {
  title: string;
  content: string;
}

// 基本信息匹配度计算
function calculateBasicMatch(personA: PersonInfo, personB: PersonInfo) {
  let score = 100
  
  // 年龄匹配度
  const ageA = new Date().getFullYear() - new Date(personA.birthDate.date).getFullYear()
  const ageB = new Date().getFullYear() - new Date(personB.birthDate.date).getFullYear()
  const ageDiff = Math.abs(ageA - ageB)
  
  if (ageDiff > 10) score -= 20
  else if (ageDiff > 5) score -= 10
  
  // 学历匹配度
  const eduLevels = ['高中', '大专', '本科', '硕士', '博士']
  const eduDiff = Math.abs(
    eduLevels.indexOf(personA.education) - 
    eduLevels.indexOf(personB.education)
  )
  
  if (eduDiff > 2) score -= 15
  else if (eduDiff > 1) score -= 5
  
  // 地域匹配度
  if (personA.location !== personB.location) {
    score -= 10
  }
  
  return score
}

// 问卷答案评分
function calculateAnswerScore(answers: Answer[]) {
  const scores: Record<string, number[]> = {
    daily: [],
    values: [],
    communication: [],
    lifestyle: [],
    overall: []
  }
  
  // 根据答案选项计算分数
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId)
    if (!question) return
    
    // 根据选项序号计算分数(0-100)
    const optionIndex = question.options.indexOf(answer.selectedOption)
    const score = 100 - (optionIndex * (100 / (question.options.length - 1)))
    
    scores[question.category].push(score)
  })
  
  // 计算各维度平均分
  const dimensions = Object.entries(scores).reduce((acc, [key, scores]) => {
    acc[key] = scores.length ? 
      Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) :
      0
    return acc
  }, {} as Record<string, number>)
  
  return dimensions
}

// 生成建议
function generateSuggestions(dimensions: Record<string, number>): Suggestion[] {
  const suggestions: Suggestion[] = []
  
  // 根据维度得分选择建议
  if (dimensions.communication < 80) {
    suggestions.push(suggestionTemplates.communication)
  }
  
  if (dimensions.lifestyle < 80) {
    suggestions.push(suggestionTemplates.activities)
  }
  
  if (dimensions.values < 80) {
    suggestions.push(suggestionTemplates.goals)
  }
  
  // 确保至少返回3条建议
  while (suggestions.length < 3) {
    const remaining = Object.values(suggestionTemplates)
      .filter(t => !suggestions.includes(t))
    
    if (remaining.length === 0) break
    suggestions.push(remaining[0])
  }
  
  return suggestions
}

// AI分析
async function aiAnalysis(
  personA: PersonInfo, 
  personB: PersonInfo, 
  answers: Answer[]
) {
  try {
    const manager = OpenAIManager.getInstance()
    
    // 添加prompt构建日志
    console.log('Building prompt for:', {
      personA: personA.name,
      personB: personB.name
    })
    
    const prompt = matchAnalysisPrompt
      .replace('[个人信息]', `
人物A：${personA.name}(${personA.gender}, ${personA.education}, ${personA.occupation})
人物B：${personB.name}(${personB.gender}, ${personB.education}, ${personB.occupation})
      `)
      .replace('[问卷数据]', answers.map(answer => {
        const question = questions.find(q => q.id === answer.questionId)
        return `${question?.title}: ${answer.selectedOption}`
      }).join('\n'))

    // 添加prompt日志
    console.log('Generated prompt:', prompt)

    const clientId = `${personA.name}_${personB.name}_${Date.now()}`
    
    // 添加API调用前日志
    console.log('Calling OpenAI manager with clientId:', clientId)
    
    const result = await manager.analyze(prompt, clientId)
    
    // 添加结果日志
    console.log('OpenAI analysis result:', result)
    
    return result

  } catch (error) {
    console.error('AI analysis failed:', {
      error: error instanceof Error ? error.message : '未知错误',
      stack: error instanceof Error ? error.stack : undefined
    })
    return fallbackAnalysis(personA, personB, answers)
  }
}

// 规则引擎分析（作为fallback）
function fallbackAnalysis(
  personA: PersonInfo,
  personB: PersonInfo,
  answers: Answer[]
) {
  // 1. 计算基本信息匹配度
  const basicScore = calculateBasicMatch(personA, personB)
  
  // 2. 计算问卷维度得分
  const dimensions = calculateAnswerScore(answers)
  
  // 3. 计算总分(基本信息占20%,问卷占80%)
  const overallScore = Math.round(
    basicScore * 0.2 + 
    Object.values(dimensions).reduce((sum, score) => sum + score, 0) / 
    Object.keys(dimensions).length * 0.8
  )
  
  // 4. 生成建议
  const suggestions = generateSuggestions(dimensions)
  
  return {
    overall: overallScore,
    dimensions,
    suggestions
  }
}

// 主分析函数
export async function analyzeMatch(
  personA: PersonInfo,
  personB: PersonInfo,
  answers: Answer[]
) {
  try {
    // 优先使用AI分析
    const aiResult = await aiAnalysis(personA, personB, answers)
    return aiResult
  } catch (error) {
    console.error('AI analysis failed, using fallback:', error)
    // AI分析失败时使用规则引擎
    return fallbackAnalysis(personA, personB, answers)
  }
} 