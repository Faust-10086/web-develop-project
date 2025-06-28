/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用图片优化
  images: {
    domains: ['raw.githubusercontent.com'], // 允许从GitHub加载图片
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/Faust-10086/Web-develop/**',
      },
    ],
  },
  // 启用实验性功能
  experimental: {
    // 启用服务器组件
    serverComponents: true,
    // 启用应用目录
    appDir: true,
  },
  // 启用严格模式
  reactStrictMode: true,
  // 启用SWC编译器
  swcMinify: true,
  // 配置输出目录
  distDir: '.next',
  // 配置环境变量
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
};

export default nextConfig;
