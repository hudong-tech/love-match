"use client"

import { Section } from '@/components/common/Section'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export function CTASection() {
  const router = useRouter()

  return (
    <Section 
      background="secondary"
      fullScreen
      className="snap-start"
      id="cta"
    >
      <div className="container-page relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
          </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl" />
          </div>
        </div>

        {/* 内容区域 */}
        <div className="relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              开启你的寻爱之旅
            </h2>
            <p className="text-xl text-text-secondary mb-12">
              让AI助你找到命中注定的那个人，现在开始免费测评
            </p>
            
            <motion.button
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                router.push('/quiz/info')
              }}
            >
              立即开始测评
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </motion.button>

            <p className="mt-6 text-sm text-text-secondary/80">
              已有超过10000位用户找到了心仪的对象
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  )
} 