import { analyzeMatch } from '@/app/quiz/services/analysis'
import { logger } from '@/lib/services/logger'
import dbConnect from '@/lib/db/connect'
import { Assessment } from '@/lib/db/models/assessment'

export async function POST(request: Request) {
  try {
    await dbConnect()
    
    console.log('API route started')
    
    // 添加环境变量日志
    console.log('Environment:', {
      baseURL: process.env.OPENAI_API_BASEURL,
      model: process.env.OPENAI_API_MODEL,
      hasKey: !!process.env.OPENAI_API_KEY
    })

    const body = await request.json()
    console.log('Request body parsed')
    
    const { answers, personA, personB } = body
    
    // 记录请求日志
    await logger.log('request', {
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
      answersCount: answers.length
    })
    
    // 验证数据
    if (!answers?.length || !personA?.name || !personB?.name) {
      console.log('Missing data:', { answers, personA, personB })
      return Response.json(
        { error: '缺少必要数据' },
        { status: 400 }
      )
    }

    // 创建测评记录
    const assessment = new Assessment({
      assessmentId: `${Date.now()}_${personA.name}_${personB.name}`,
      personA,
      personB,
      answers,
      metadata: {
        source: 'web',
        version: '1.0',
        processingTime: 0
      }
    })
    
    // 记录开始时间
    const startTime = Date.now()
    
    // 添加分析前日志
    console.log('Calling analyzeMatch with:', {
      personA: personA.name,
      personB: personB.name,
      answersCount: answers.length
    })

    // 进行AI分析
    const result = await analyzeMatch(personA, personB, answers)
    
    // 验证结果
    if (!result?.overall || !result?.dimensions || !result?.suggestions) {
      throw new Error('分析结果格式错误')
    }
    
    // 更新测评记录
    assessment.result = result
    assessment.metadata.processingTime = Date.now() - startTime
    
    // 保存记录
    await assessment.save()
    
    // 记录结果日志
    await logger.log('result', {
      personA: personA.name,
      personB: personB.name,
      overall: result.overall,
      dimensions: result.dimensions,
      suggestions: result.suggestions.map(s => ({
        title: s.title,
        content: s.content
      }))
    })
    
    return Response.json({ data: result })
    
  } catch (error) {
    // 记录错误日志
    await logger.log('error', {
      error: error instanceof Error ? error.message : '未知错误',
      stack: error instanceof Error ? error.stack : undefined
    })
    
    return Response.json(
      { error: '分析失败，请稍后重试' },
      { status: 500 }
    )
  }
} 