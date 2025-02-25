
// OpenAI配置
export const openaiConfig = {
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.OPENAI_API_MODEL || 'gpt-3.5-turbo',
  temperature: Number(process.env.OPENAI_API_TEMPERATURE) || 0.7,
  maxTokens: Number(process.env.OPENAI_API_MAX_TOKENS) || 2000,
}

// 速率限制配置
export const rateLimitConfig = {
  maxRequests: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 50,
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60000,
}

// 缓存配置
export const cacheConfig = {
  ttl: Number(process.env.CACHE_TTL_SECONDS) || 3600,
} 