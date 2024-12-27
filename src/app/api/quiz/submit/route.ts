import { NextResponse } from 'next/server'
import type { Answer } from '@/app/quiz/types'

// 简单的匹配度计算函数
function calculateMatchRate(answers: Answer[]) {
  // TODO: 实现更复杂的匹配算法
  return {
    overall: Math.round(Math.random() * 20 + 80), // 80-100之间
    dimensions: {
      personality: Math.round(Math.random() * 20 + 75),
      values: Math.round(Math.random() * 20 + 75),
      lifestyle: Math.round(Math.random() * 20 + 75),
      experience: Math.round(Math.random() * 20 + 75),
      expectation: Math.round(Math.random() * 20 + 75),
    },
    suggestions: [
      {
        title: '性格特征',
        content: '你是一个善于表达、重视情感的人。建议寻找一个能够理解并欣赏你这些特质的伴侣。'
      },
      {
        title: '生活方式',
        content: '你的生活节奏规律，注重生活品质。建议寻找一个有相似生活习惯的伴侣，这样更容易培养共同的生活方式。'
      },
      {
        title: '情感建议',
        content: '你在感情中注重沟通和理解。建议在未来的感情中保持这种开放和真诚的态度，这将帮助你建立更深层的情感连接。'
      }
    ]
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { answers } = body as { answers: Answer[] }

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return NextResponse.json(
        { error: '无效的答案数据' },
        { status: 400 }
      )
    }

    // 计算匹配结果
    const result = calculateMatchRate(answers)

    return NextResponse.json({
      success: true,
      data: result
    })

  } catch (error) {
    console.error('提交测评失败:', error)
    return NextResponse.json(
      { error: '提交失败，请稍后重试' },
      { status: 500 }
    )
  }
} 