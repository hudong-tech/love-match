import { openaiConfig, rateLimitConfig, cacheConfig } from './config'
import OpenAI from 'openai'

// 简单的内存缓存实现
class MemoryCache {
  private cache: Map<string, { value: any, expiry: number }> = new Map()

  async set(key: string, value: any, ttl: number) {
    this.cache.set(key, {
      value,
      expiry: Date.now() + ttl * 1000
    })
  }

  async get(key: string) {
    const item = this.cache.get(key)
    if (!item) return null
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key)
      return null
    }
    
    return item.value
  }
}

const cache = new MemoryCache()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASEURL
})

console.log('OpenAI client initialized with:', {
  baseURL: process.env.OPENAI_API_BASEURL,
  model: process.env.OPENAI_API_MODEL
})

export class OpenAIManager {
  private static instance: OpenAIManager
  private requestCount: number = 0
  private lastReset: number = Date.now()
  private requestLog: Array<{ timestamp: number, clientId: string }> = []

  private constructor() {
    // 验证环境变量
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('Missing OPENAI_API_KEY')
    }

    if (!process.env.OPENAI_API_BASEURL) {
      throw new Error('Missing OPENAI_API_BASEURL')
    }

    console.log('OpenAI manager initialized with:', {
      baseURL: process.env.OPENAI_API_BASEURL,
      model: process.env.OPENAI_API_MODEL
    })
  }

  static getInstance(): OpenAIManager {
    if (!OpenAIManager.instance) {
      OpenAIManager.instance = new OpenAIManager()
    }
    return OpenAIManager.instance
  }

  // 简化版速率限制
  private async checkRateLimit(clientId: string): Promise<boolean> {
    const now = Date.now()
    
    // 清理过期请求
    this.requestLog = this.requestLog.filter(req => 
      now - req.timestamp < rateLimitConfig.windowMs
    )
    
    // 检查请求数量
    const clientRequests = this.requestLog.filter(req => 
      req.clientId === clientId
    ).length
    
    if (clientRequests >= rateLimitConfig.maxRequests) {
      return false
    }
    
    // 记录新请求
    this.requestLog.push({ timestamp: now, clientId })
    return true
  }

  // 使用内存缓存
  private async getCache(key: string) {
    return await cache.get(key)
  }

  private async setCache(key: string, value: any) {
    await cache.set(key, value, cacheConfig.ttl)
  }

  // 简化日志记录
  private async logAnalysis(logData: any) {
    console.log('Analysis Log:', logData)
  }

  // 生成缓存key
  private generateCacheKey(prompt: string): string {
    return `cache:${Buffer.from(prompt).toString('base64')}`
  }

  // 验证AI响应
  private validateResponse(response: any): boolean {
    try {
      // 检查必要字段
      if (!response.overall || !response.dimensions || !response.suggestions) {
        return false
      }
      
      // 检查分数范围
      if (response.overall < 0 || response.overall > 100) {
        return false
      }
      
      // 检查维度完整性
      const requiredDimensions = ['daily', 'values', 'communication', 'lifestyle', 'overall']
      for (const dim of requiredDimensions) {
        if (!(dim in response.dimensions)) {
          return false
        }
      }
      
      // 检查建议格式
      if (!Array.isArray(response.suggestions) || response.suggestions.length < 3) {
        return false
      }
      
      return true
    } catch (error) {
      return false
    }
  }

  // 主要API调用方法
  async analyze(prompt: string, clientId: string) {
    try {
      // 添加配置日志
      console.log('OpenAI configuration:', {
        baseURL: process.env.OPENAI_API_BASEURL,
        model: openaiConfig.model,
        temperature: openaiConfig.temperature,
        maxTokens: openaiConfig.maxTokens
      })

      // 1. 检查速率限制
      if (!(await this.checkRateLimit(clientId))) {
        throw new Error('Rate limit exceeded')
      }

      // 2. 检查缓存
      const cacheKey = this.generateCacheKey(prompt)
      const cachedResult = await this.getCache(cacheKey)
      if (cachedResult) {
        return JSON.parse(cachedResult as string)
      }

      // 添加请求日志
      console.log('OpenAI request:', {
        model: openaiConfig.model,
        prompt: prompt.substring(0, 100) + '...',
        clientId
      })

      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: openaiConfig.model,
        temperature: openaiConfig.temperature,
        max_tokens: openaiConfig.maxTokens,
        response_format: { type: "json_object" },
      })

      // 添加响应详情日志
      console.log('OpenAI response details:', {
        status: completion.choices[0].finish_reason,
        content: completion.choices[0].message.content?.substring(0, 100) + '...'
      })

      const result = JSON.parse(completion.choices[0].message.content!)

      // 4. 验证响应
      if (!this.validateResponse(result)) {
        throw new Error('Invalid AI response')
      }

      // 5. 缓存结果
      await this.setCache(cacheKey, result)

      // 6. 记录日志
      await this.logAnalysis({
        clientId,
        prompt,
        result,
        timestamp: new Date(),
        success: true
      })

      return result

    } catch (error) {
      // 添加详细错误信息
      console.error('OpenAI API error details:', {
        name: error instanceof Error ? error.name : undefined,
        message: error instanceof Error ? error.message : '未知错误',
        code: error instanceof Error ? (error as any).code : undefined,
        type: error instanceof Error ? (error as any).type : undefined,
        stack: error instanceof Error ? error.stack : undefined,
        config: {
          baseURL: process.env.OPENAI_API_BASEURL,
          model: openaiConfig.model
        }
      })
      // 记录错误
      await this.logAnalysis({
        clientId,
        prompt,
        error: error instanceof Error ? error.message : '未知错误',
        timestamp: new Date(),
        success: false
      })
      throw error
    }
  }
} 