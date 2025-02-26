import mongoose from 'mongoose'

// 用户信息模型
const PersonSchema = new mongoose.Schema({
  name: String,
  gender: String,
  birthDate: {
    date: Date,
    isLunar: Boolean
  },
  education: String,
  occupation: String,
  location: String
})

// 答案模型
const AnswerSchema = new mongoose.Schema({
  questionId: String,
  selectedOption: String
})

// 维度得分模型
const DimensionsSchema = new mongoose.Schema({
  daily: Number,
  values: Number,
  communication: Number,
  lifestyle: Number,
  overall: Number
})

// 建议模型
const SuggestionSchema = new mongoose.Schema({
  title: String,
  content: String
})

// 测评记录模型
const AssessmentSchema = new mongoose.Schema({
  // 基本信息
  assessmentId: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
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
    source: String,
    version: String,
    processingTime: Number
  }
})

export const Assessment = mongoose.model('Assessment', AssessmentSchema) 