import type { ResultData } from '../types'

// 测试用户A的信息
export const testPersonA = {
  name: "张小明",
  gender: "male",
  birthDate: {
    date: "1995-06-15",
    isLunar: false
  },
  education: "本科",
  occupation: "软件工程师",
  location: "上海",
  height: 175,
  income: "15-25万",
  requirements: {
    ageRange: {
      min: 23,
      max: 30
    },
    height: {
      min: 160,
      max: 170
    },
    education: ["大专", "本科", "硕士"],
    location: "上海"
  }
}

// 测试用户B的信息
export const testPersonB = {
  name: "李小红",
  gender: "female", 
  birthDate: {
    date: "1997-08-20",
    isLunar: false
  },
  education: "硕士",
  occupation: "产品经理",
  location: "上海",
  height: 165,
  income: "15-25万",
  requirements: {
    ageRange: {
      min: 25,
      max: 32
    },
    height: {
      min: 170,
      max: 185
    },
    education: ["本科", "硕士"],
    location: "上海"
  }
}

// 添加符合user_info格式的测试用户数据
export const testUserInfo = {
  self: testPersonA,
  partner: testPersonB
}

// 测试答案数据
export const testAnswers = [
  // 日常相处体验
  {
    questionId: 1,
    selectedOption: "很贴心，能理解我的需求"
  },
  {
    questionId: 2,
    selectedOption: "对方更主动，我通常配合"
  },
  {
    questionId: 3,
    selectedOption: "有些不同，但可以接受"
  },
  {
    questionId: 4,
    selectedOption: "能察觉并及时安慰我"
  },

  // 价值观与目标一致性
  {
    questionId: 5,
    selectedOption: "大体一致，但细节上有分歧"
  },
  {
    questionId: 6,
    selectedOption: "非常一致，花钱和储蓄的态度相同"
  },
  {
    questionId: 7,
    selectedOption: "部分一致，有些地方需要调整"
  },
  {
    questionId: 8,
    selectedOption: "一定程度支持，但不会主动参与"
  },

  // 情感与沟通方式
  {
    questionId: 9,
    selectedOption: "需要我解释几次才会明白"
  },
  {
    questionId: 10,
    selectedOption: "积极解决，愿意沟通"
  },
  {
    questionId: 11,
    selectedOption: "偶尔有分歧，但可以克服"
  },
  {
    questionId: 12,
    selectedOption: "中等，有时会忽略我"
  },

  // 兴趣与生活方式
  {
    questionId: 13,
    selectedOption: "部分融入，但还有一些不一致"
  },
  {
    questionId: 14,
    selectedOption: "一般，需要我主动引导"
  },
  {
    questionId: 15,
    selectedOption: "有些差异，但可以相互调整"
  },
  {
    questionId: 16,
    selectedOption: "部分支持，但有时会干扰"
  },

  // 综合与主观评价
  {
    questionId: 17,
    selectedOption: "一般，有些地方需要改进"
  },
  {
    questionId: 18,
    selectedOption: "充满激情"
  },
  {
    questionId: 19,
    selectedOption: "中等，需要更多努力和磨合"
  }
]

// 更新预期的匹配结果以匹配更真实的答案
export const expectedResult: ResultData = {
  overall: 85,
  dimensions: {
    daily: 82,        // 日常相处
    values: 88,        // 价值观
    communication: 79, // 沟通方式
    lifestyle: 84,     // 生活方式
    overall: 92        // 综合评价
  },
  suggestions: [
    {
      title: "加强沟通的深度",
      content: "尝试定期安排一对一的深度交流时间，分享各自内心真实的想法和感受，而不仅仅是日常事务的沟通。"
    },
    {
      title: "培养共同兴趣爱好",
      content: "发现并培养更多共同的兴趣爱好，这将增加你们相处的乐趣和默契，创造更多美好的共同回忆。"
    },
    {
      title: "平衡个人空间与亲密关系",
      content: "在亲密关系中保持适当的个人空间和独立性，尊重彼此的个人边界，这有助于保持关系的新鲜感和可持续性。"
    }
  ],
  // 添加命理分析字段
  destinyAnalysis: {
    summary: "从命理学角度看，你们的八字有较好的相合性，但也存在一些需要注意的地方。",
    compatibility: "你们的日柱五行相生，显示出日常生活中能相互支持；年柱关系较为中和，家庭背景契合度适中。",
    strengths: "命中桃花线相交，感情基础稳固；男方命中财星旺，有利于家庭经济稳定。",
    challenges: "女方命中有太多水元素，男方火元素较强，需要在情绪管理上相互理解和包容。"
  }
} 