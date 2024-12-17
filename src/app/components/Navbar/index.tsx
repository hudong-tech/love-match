"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100/50">
      <div className="container-page">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* 左侧 Logo 和导航链接 */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-rose-400 to-pink-400 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-xl">心</span>
              </motion.div>
              <span className="text-xl font-semibold bg-gradient-to-br from-amber-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                心缘 AI
              </span>
            </Link>

            {/* 导航链接 */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/about">关于我们</NavLink>
              <NavLink href="/service">服务介绍</NavLink>
              <NavLink href="/success">成功案例</NavLink>
              <NavLink href="/help">帮助中心</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="text-gray-600 hover:text-amber-600 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 transition-all group-hover:w-full" />
    </Link>
  )
} 