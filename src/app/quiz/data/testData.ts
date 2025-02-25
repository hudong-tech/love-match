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
export const expectedResult = {
  overall: 85,
  dimensions: {
    daily: 88,
    values: 85,
    communication: 82,
    lifestyle: 80,
    overall: 85
  },
  suggestions: [
    {
      title: "沟通方式",
      content: "建议多创造独处时间，增进彼此了解。"
    },
    {
      title: "生活习惯",
      content: "可以一起制定一些共同的生活计划。"
    },
    {
      title: "价值观",
      content: "在重要决定上多交流，寻求共识。"
    }
  ]
} 