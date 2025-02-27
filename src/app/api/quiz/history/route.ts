import { Assessment } from '@/lib/db/models/assessment'
import dbConnect from '@/lib/db/connect'

export async function GET(request: Request) {
  try {
    await dbConnect()
    
    // 获取查询参数
    const { searchParams } = new URL(request.url)
    const personName = searchParams.get('name')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    
    // 构建查询条件
    const query = personName ? {
      $or: [
        { 'personA.name': personName },
        { 'personB.name': personName }
      ]
    } : {}
    
    // 执行查询
    const total = await Assessment.countDocuments(query)
    const records = await Assessment.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
    
    return Response.json({
      data: {
        records,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      }
    })
    
  } catch (error) {
    console.error('Failed to fetch history:', error)
    return Response.json(
      { error: '获取历史记录失败' },
      { status: 500 }
    )
  }
} 