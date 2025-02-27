import { Assessment } from '@/lib/db/models/assessment'
import dbConnect from '@/lib/db/connect'

export async function GET() {
  try {
    await dbConnect()
    
    // 获取基础统计
    const totalCount = await Assessment.countDocuments()
    
    // 获取平均分数
    const averageScores = await Assessment.aggregate([
      {
        $group: {
          _id: null,
          avgOverall: { $avg: '$result.overall' },
          avgDaily: { $avg: '$result.dimensions.daily' },
          avgValues: { $avg: '$result.dimensions.values' },
          avgCommunication: { $avg: '$result.dimensions.communication' },
          avgLifestyle: { $avg: '$result.dimensions.lifestyle' }
        }
      }
    ])
    
    // 获取分数分布
    const scoreDistribution = await Assessment.aggregate([
      {
        $bucket: {
          groupBy: '$result.overall',
          boundaries: [0, 60, 70, 80, 90, 100],
          default: 'other',
          output: {
            count: { $sum: 1 }
          }
        }
      }
    ])
    
    return Response.json({
      data: {
        totalAssessments: totalCount,
        averageScores: averageScores[0],
        scoreDistribution
      }
    })
    
  } catch (error) {
    console.error('Failed to get statistics:', error)
    return Response.json(
      { error: '获取统计数据失败' },
      { status: 500 }
    )
  }
} 