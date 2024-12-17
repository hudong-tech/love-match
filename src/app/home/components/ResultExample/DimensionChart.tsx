"use client"

import { motion } from 'framer-motion'

interface DimensionChartProps {
  data: {
    personality: number
    values: number
    lifestyle: number
    interests: number
    emotions: number
  }
}

const labels = [
  { text: '性格特征', x: 100, y: 20 },
  { text: '价值观', x: 180, y: 100 },
  { text: '生活方式', x: 140, y: 180 },
  { text: '兴趣爱好', x: 60, y: 180 },
  { text: '情感需求', x: 20, y: 100 },
]

export function DimensionChart({ data }: DimensionChartProps) {
  // 计算多边形的点
  const points = calculatePolygonPoints(data)
  // 计算背景网格的点
  const gridPoints = [100, 80, 60, 40, 20].map(value => 
    calculatePolygonPoints({
      personality: value,
      values: value,
      lifestyle: value,
      interests: value,
      emotions: value
    })
  )

  return (
    <div className="w-full aspect-square max-w-[300px] mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 背景网格 */}
        {gridPoints.map((points, index) => (
          <motion.polygon
            key={index}
            points={points}
            fill="none"
            stroke="#E8E8E8"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}

        {/* 数据多边形 */}
        <motion.polygon
          points={points}
          fill="rgba(74,144,226,0.1)"
          stroke="#4A90E2"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          style={{ transformOrigin: "center" }}
        />

        {/* 维度标签 */}
        {labels.map((label, index) => (
          <motion.g
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            <text 
              x={label.x} 
              y={label.y} 
              className="text-sm" 
              textAnchor={label.x < 100 ? "end" : label.x > 100 ? "start" : "middle"}
            >
              {label.text}
            </text>
            {/* 数值标签 */}
            <motion.text
              x={calculateValuePosition(index, data).x}
              y={calculateValuePosition(index, data).y}
              className="text-xs fill-primary"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
            >
              {Object.values(data)[index]}%
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

// 计算多边形的点
function calculatePolygonPoints(data: DimensionChartProps['data']) {
  const center = { x: 100, y: 100 }
  const radius = 80
  const angleStep = (2 * Math.PI) / 5

  const dimensions = [
    data.personality,
    data.values,
    data.lifestyle,
    data.interests,
    data.emotions
  ]

  return dimensions
    .map((value, index) => {
      const angle = index * angleStep - Math.PI / 2
      const distance = (value / 100) * radius
      const x = center.x + distance * Math.cos(angle)
      const y = center.y + distance * Math.sin(angle)
      return `${x},${y}`
    })
    .join(' ')
}

// 计算数值标签位置
function calculateValuePosition(index: number, data: DimensionChartProps['data']) {
  const center = { x: 100, y: 100 }
  const radius = 90 // 稍微比图形大一点
  const angleStep = (2 * Math.PI) / 5
  const value = Object.values(data)[index]
  const angle = index * angleStep - Math.PI / 2
  const distance = (value / 100) * radius

  return {
    x: center.x + distance * Math.cos(angle),
    y: center.y + distance * Math.sin(angle)
  }
} 