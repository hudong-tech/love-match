import fs from 'fs/promises'
import path from 'path'

interface LogData {
  timestamp: string
  type: 'request' | 'result' | 'error'
  data: any
}

class Logger {
  private static instance: Logger
  private logPath: string

  private constructor() {
    // 日志文件路径
    this.logPath = path.join(process.cwd(), 'logs', 'quiz.log')
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  async log(type: LogData['type'], data: any) {
    const logEntry: LogData = {
      timestamp: new Date().toISOString(),
      type,
      data
    }

    try {
      // 确保日志目录存在
      await fs.mkdir(path.dirname(this.logPath), { recursive: true })
      
      // 追加日志
      await fs.appendFile(
        this.logPath,
        JSON.stringify(logEntry) + '\n',
        'utf-8'
      )
    } catch (error) {
      console.error('Failed to write log:', error)
    }
  }
}

export const logger = Logger.getInstance() 