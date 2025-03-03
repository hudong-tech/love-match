import { Question } from '../types'

export const questions: Question[] = [
  // 1. 日常相处体验
  {
    id: 1,
    title: "你觉得对方在日常相处中给你的整体感觉是：",
    options: [
      "很贴心，能理解我的需求",
      "一般，需要时好时坏",
      "不太贴心，经常有矛盾"
    ],
    category: "daily"
  },
  {
    id: 2,
    title: "当你和对方一起做决定时，通常是：",
    options: [
      "双方共同讨论，容易达成共识",
      "对方更主动，我通常配合",
      "我更主动，对方一般跟随"
    ],
    category: "daily"
  },
  {
    id: 3,
    title: "你觉得对方的生活习惯和你的契合度是：",
    options: [
      "非常契合，几乎没有冲突",
      "有些不同，但可以接受",
      "很多地方都需要调整"
    ],
    category: "daily"
  },
  {
    id: 4,
    title: "当你感到压力或情绪低落时，对方通常：",
    options: [
      "能察觉并及时安慰我",
      "偶尔会关心，但不够敏感",
      "很少关注到我的情绪"
    ],
    category: "daily"
  },

  // 2. 价值观与目标一致性
  {
    id: 5,
    title: "你觉得你们在对未来的规划（如职业、家庭、孩子）上是否一致？",
    options: [
      "非常一致，我们有相同的目标",
      "大体一致，但细节上有分歧",
      "差异很大，需要进一步沟通"
    ],
    category: "values"
  },
  {
    id: 6,
    title: "在金钱观方面，你觉得你们的看法：",
    options: [
      "非常一致，花钱和储蓄的态度相同",
      "有些不同，但可以通过沟通解决",
      "差别很大，经常为此产生矛盾"
    ],
    category: "values"
  },
  {
    id: 7,
    title: "你觉得对方对待家庭（父母、亲戚）的态度与你的期望：",
    options: [
      "完全一致，能很好地处理家庭关系",
      "部分一致，有些地方需要调整",
      "有明显不同，我感到不太满意"
    ],
    category: "values"
  },
  {
    id: 8,
    title: "你认为对方是否支持你的个人目标和梦想？",
    options: [
      "非常支持，能为我提供帮助和鼓励",
      "一定程度支持，但不会主动参与",
      "很少支持，甚至会质疑我的选择"
    ],
    category: "values"
  },

  // 3. 情感与沟通方式
  {
    id: 9,
    title: "当你表达需求时，对方通常：",
    options: [
      "立即理解并回应",
      "需要我解释几次才会明白",
      "很难回应，甚至忽略我的需求"
    ],
    category: "communication"
  },
  {
    id: 10,
    title: "你觉得对方在处理矛盾时的态度是：",
    options: [
      "积极解决，愿意沟通",
      "偶尔冷战，需要我主动推动解决",
      "回避问题，不愿意面对"
    ],
    category: "communication"
  },
  {
    id: 11,
    title: "你觉得你们之间的沟通效率：",
    options: [
      "非常顺畅，几乎没有误解",
      "偶尔有分歧，但可以克服",
      "经常出现误解，需要更多努力"
    ],
    category: "communication"
  },
  {
    id: 12,
    title: "你认为对方在感情中对你的关注度是：",
    options: [
      "很高，时刻关心我的想法",
      "中等，有时会忽略我",
      "很低，常常让我觉得被忽视"
    ],
    category: "communication"
  },

  // 4. 兴趣与生活方式
  {
    id: 13,
    title: "在日常活动中，你觉得对方能否融入你的兴趣爱好？",
    options: [
      "非常融入，我们一起享受很多活动",
      "部分融入，但还有一些不一致",
      "很难融入，我们兴趣差异很大"
    ],
    category: "lifestyle"
  },
  {
    id: 14,
    title: "你觉得对方对尝试新事物的态度是：",
    options: [
      "很积极，愿意一起探索",
      "一般，需要我主动引导",
      "不感兴趣，不愿尝试新事物"
    ],
    category: "lifestyle"
  },
  {
    id: 15,
    title: "在闲暇时间，你觉得你们的生活节奏是否一致？",
    options: [
      "非常一致，我们喜欢相同的节奏",
      "有些差异，但可以相互调整",
      "差异较大，经常因为节奏不同而不协调"
    ],
    category: "lifestyle"
  },
  {
    id: 16,
    title: "对方是否支持你的独处时间或个人兴趣？",
    options: [
      "非常支持，给予我充分的自由",
      "部分支持，但有时会干扰",
      "不支持，总希望我和他/她在一起"
    ],
    category: "lifestyle"
  },

  // 5. 综合与主观评价
  {
    id: 17,
    title: "你觉得你们的感情目前状态是：",
    options: [
      "很稳固，充满信任和爱",
      "一般，有些地方需要改进",
      "比较脆弱，经常有问题"
    ],
    category: "overall"
  },
  {
    id: 18,
    title: "如果要用一个词形容你们的关系，你会选：",
    options: [
      "和谐",
      "充满激情",
      "波折不断"
    ],
    category: "overall"
  },
  {
    id: 19,
    title: "你认为你们的感情在未来的可持续性是：",
    options: [
      "很高，我对未来很有信心",
      "中等，需要更多努力和磨合",
      "较低，我对未来感到不确定"
    ],
    category: "overall"
  }
] 