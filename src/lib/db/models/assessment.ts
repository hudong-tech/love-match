import mongoose, { Document, Schema } from 'mongoose'
import type { PersonInfo, Answer, ResultData } from '@/app/quiz/types'

// 测评记录文档接口定义
export interface AssessmentDocument extends Document {
  assessmentId: string        // 测评唯一标识
  createdAt: Date            // 创建时间
  personA: PersonInfo        // 测评人A信息
  personB: PersonInfo        // 测评人B信息
  answers: Answer[]          // 问卷答案
  result: ResultData         // 分析结果
  feedback?: {               // 用户反馈
    rating: number          // 评分
    comment: string        // 评论
    createdAt: Date       // 反馈时间
  }
  metadata: {                // 元数据
    source: string         // 来源
    version: string       // 版本
    processingTime: number // 处理时间
  }
}

// 用户信息模型
const PersonSchema = new Schema<PersonInfo>({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  birthDate: {
    date: { type: Date, required: true },
    isLunar: { type: Boolean, default: false }
  },
  education: { type: String, required: true },
  occupation: { type: String, required: true },
  location: { type: String }
})

// 答案模型
const AnswerSchema = new Schema<Answer>({
  questionId: { type: Number, required: true },
  selectedOption: { type: String, required: true }
})

// 维度得分模型
const DimensionsSchema = new Schema({
  daily: { type: Number, required: true },
  values: { type: Number, required: true },
  communication: { type: Number, required: true },
  lifestyle: { type: Number, required: true },
  overall: { type: Number, required: true }
})

// 建议模型
const SuggestionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
})

// 测评记录模型
const AssessmentSchema = new Schema<AssessmentDocument>({
  // 基本信息
  assessmentId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  createdAt: {
    type: Date,
    default: () => {
      // 创建北京时间的日期对象
      const now = new Date()
      return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    },
    index: true
  },
  
  // 用户信息
  personA: PersonSchema,
  personB: PersonSchema,
  
  // 测评数据
  answers: [AnswerSchema],
  
  // 分析结果
  result: {
    overall: Number,
    dimensions: DimensionsSchema,
    suggestions: [SuggestionSchema]
  },
  
  // 用户反馈
  feedback: {
    rating: Number,
    comment: String,
    createdAt: Date
  },
  
  // 元数据
  metadata: {
    source: { type: String, required: true },
    version: { type: String, required: true },
    processingTime: { type: Number, default: 0 }
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (_, ret) => {
      if (ret.createdAt) {
        // 格式化为北京时间
        const date = new Date(ret.createdAt)
        ret.createdAt = date.toLocaleString('zh-CN', {
          timeZone: 'Asia/Shanghai',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        })
      }
      return ret
    }
  }
})

// 添加索引以优化查询性能
AssessmentSchema.index({ 'personA.name': 1, 'personB.name': 1 })
AssessmentSchema.index({ 'result.overall': 1 })
AssessmentSchema.index({ createdAt: -1 })

export const Assessment = mongoose.models.Assessment || mongoose.model<AssessmentDocument>('Assessment', AssessmentSchema)