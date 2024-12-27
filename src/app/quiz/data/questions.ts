import { Question } from '../types'

export const questions: Question[] = [
  // 性格特征
  {
    id: 1,
    title: "在社交场合，你通常会：",
    options: [
      "主动与他人交谈，享受社交",
      "等待他人来搭话，保持适度社交",
      "倾向于与熟悉的人交谈",
      "更喜欢安静的角落，避免太多社交"
    ],
    category: "personality"
  },
  {
    id: 2,
    title: "面对问题时，你通常的处理方式是：",
    options: [
      "迅速做出决定并采取行动",
      "仔细分析后再做决定",
      "征求他人意见后再决定",
      "需要时间慢慢思考"
    ],
    category: "personality"
  },
  {
    id: 3,
    title: "在感情中，你会表达情感的方式是：",
    options: [
      "直接表达，经常说爱",
      "通过行动表达关心",
      "适度表达，保持克制",
      "含蓄表达，不擅长言辞"
    ],
    category: "personality"
  },

  // 价值观
  {
    id: 4,
    title: "你认为婚姻中最重要的是：",
    options: [
      "相互理解与支��",
      "共同的目标和理想",
      "经济基础与生活品质",
      "个人空间与自由"
    ],
    category: "values"
  },
  {
    id: 5,
    title: "对于未来的规划，你更看重：",
    options: [
      "事业发展与个人成就",
      "家庭生活与情感稳定",
      "生活品质与兴趣发展",
      "自我提升与成长"
    ],
    category: "values"
  },
  {
    id: 6,
    title: "在处理金钱问题时，你倾向于：",
    options: [
      "统筹规划，合理储蓄",
      "及时享受，适度消费",
      "随遇而安，不过分计较",
      "谨慎理财，注重投资"
    ],
    category: "values"
  },

  // 生活习惯
  {
    id: 7,
    title: "你平时的作息时间是：",
    options: [
      "早睡早起，规律作息",
      "晚睡晚起，但规律",
      "不固定，看情况调整",
      "经常熬夜，无规律"
    ],
    category: "lifestyle"
  },
  {
    id: 8,
    title: "周末休息时，你更喜欢：",
    options: [
      "外出旅行，体验生活",
      "宅在家中，享受安静",
      "约朋友聚会交际",
      "学习或发展兴趣爱好"
    ],
    category: "lifestyle"
  },
  {
    id: 9,
    title: "对于家务分工，你的态度是：",
    options: [
      "平均分配，共同承担",
      "各自擅长的事各自做",
      "谁有时间谁来做",
      "愿意承担更多"
    ],
    category: "lifestyle"
  },

  // 感情经历
  {
    id: 10,
    title: "你期望的恋爱节奏是：",
    options: [
      "循序渐进，慢慢了解",
      "顺其自然，水到渠成",
      "把握机会，适度推进",
      "快速确定关系"
    ],
    category: "experience"
  },
  {
    id: 11,
    title: "在感情中遇到分歧时，你会：",
    options: [
      "及时沟通，寻求共识",
      "冷静思考后再讨论",
      "先退让，等待合适时机",
      "坚持自己的观点"
    ],
    category: "experience"
  },
  {
    id: 12,
    title: "你认为维持感情最重要的是：",
    options: [
      "真诚的沟通与理解",
      "共同的兴趣与话题",
      "适度的关心与空间",
      "稳定的陪伴与支持"
    ],
    category: "experience"
  },

  // 期望
  {
    id: 13,
    title: "在择偶时，哪些特质最重要？",
    options: [
      "性格相投，能够互相理解",
      "三观一致，有共同理想",
      "生活习惯相似，易于相处",
      "兴趣爱好相近，有共同话题"
    ],
    category: "expectation"
  },
  {
    id: 14,
    title: "你能接受的性格差异是：",
    options: [
      "性格完全互补，但能相互理解",
      "大体相似，小有差异",
      "关键点一致，其他可包容",
      "只要真心相爱，差异不重要"
    ],
    category: "expectation"
  },
  {
    id: 15,
    title: "你期望的另一半的工作状态是：",
    options: [
      "事业上进，追求发展",
      "工作稳定，注重生活",
      "自由职业，追求兴趣",
      "平衡事业与家庭"
    ],
    category: "expectation"
  }
] 