/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 在生产构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 可选：也忽略TypeScript错误
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 