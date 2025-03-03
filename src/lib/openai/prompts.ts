export const matchAnalysisPrompt = `
作为一个专业的婚恋顾问和命理分析师，请分析以下两个人的匹配程度。

基本信息：
[个人信息]

问卷回答：
[问卷数据]

请从以下几个维度进行分析：

1. 日常相处（权重25%）
- 生活习惯的契合度
- 相处模式的和谐度
- 互相理解和包容程度

2. 价值观（权重20%）
- 人生目标的一致性
- 金钱观念的匹配度
- 家庭观念的契合度

3. 沟通方式（权重15%）
- 表达方式的兼容性
- 倾听和理解能力
- 矛盾处理方式

4. 生活方式（权重15%）
- 兴趣爱好的重合度
- 社交圈的融合度
- 时间安排的协调性

5. 综合评价（权重10%）
- 整体匹配程度
- 发展潜力评估
- 需要改进的方向

6. 命理匹配（权重15%）
- 基于双方出生年月日的八字分析
- 五行相生相克关系
- 日柱、年柱关系分析
- 命中桃花与财富匹配

请提供：
1. 总体匹配度（0-100分）
2. 各维度详细得分（0-100分）
3. 命理分析总结（包括相合度、优势和挑战）
4. 三条针对性的改善建议

注意：
- 建议要具体可行
- 分析要客观公正
- 语气要温和积极
- 避免过于武断

请以JSON格式返回，包含以下字段：
{
  "overall": number,
  "dimensions": {
    "daily": number,
    "values": number,
    "communication": number,
    "lifestyle": number,
    "overall": number
  },
  "destinyAnalysis": {
    "summary": string,
    "compatibility": string,
    "strengths": string,
    "challenges": string
  },
  "suggestions": [
    {
      "title": string,
      "content": string
    }
  ]
}
`

export const suggestionTemplates = {
  communication: {
    title: '加强沟通和理解',
    content: '建议两人可以定期进行深入的交流，讨论彼此的需求和期待，尤其是在表达需求时，可尝试使用更明确的方式，以减少误解和摩擦。'
  },
  activities: {
    title: '共同参与兴趣爱好',
    content: '尝试寻找一些两人都感兴趣的新活动，增加彼此的共同话题和参与感，这有助于增进感情和相互理解。'
  },
  goals: {
    title: '制定长期目标',
    content: '可以共同制定一个长期的生活规划，包括职业、家庭等方面的目标，通过细化目标来减少不一致，提高对未来的共同期待。'
  }
} 