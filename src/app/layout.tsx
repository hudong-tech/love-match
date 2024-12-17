import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "心缘 AI - AI智能婚恋匹配平台",
  description: "基于AI算法的智能婚恋匹配平台，让寻找真爱更简单",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="zh-CN" 
      suppressHydrationWarning
    >
      <body 
        className={inter.className}
        suppressHydrationWarning
      >
        <div className="snap-container custom-scrollbar">
          {children}
        </div>
      </body>
    </html>
  )
}
