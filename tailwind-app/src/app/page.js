import { Suspense } from 'react';
import Link from 'next/link';
import HomeworkCard from './components/HomeworkCard';

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeworkCard from './components/HomeworkCard';

// 模拟项目数据
const PROJECTS = [
  {
    id: 1,
    slug: 'web-development-basics',
    title: 'Web开发基础',
    description: '学习HTML、CSS和JavaScript的基础知识，构建响应式网页。',
    image: '/file.svg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    date: '2023-09-15',
  },
  {
    id: 2,
    slug: 'react-fundamentals',
    title: 'React基础',
    description: '学习React组件、状态管理和生命周期方法。',
    image: '/globe.svg',
    tags: ['React', 'JSX', 'Hooks'],
    date: '2023-10-01',
  },
  {
    id: 3,
    slug: 'nextjs-introduction',
    title: 'Next.js入门',
    description: '探索Next.js框架，学习服务器端渲染和静态站点生成。',
    image: '/next.svg',
    tags: ['Next.js', 'SSR', 'ISR'],
    date: '2023-10-15',
  },
  {
    id: 4,
    slug: 'tailwind-css-mastery',
    title: 'Tailwind CSS精通',
    description: '使用Tailwind CSS创建现代、响应式的用户界面。',
    image: '/window.svg',
    tags: ['Tailwind', 'CSS', 'UI'],
    date: '2023-11-01',
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* 英雄区块 */}
      <section className="hero-gradient text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`max-w-3xl mx-auto text-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-text-gradient">
              汤兴伟的作业展示平台
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              基于Next.js和Tailwind CSS构建的个人项目展示
            </p>
            <p className="text-lg mb-12 opacity-80">
              学号：p231014812
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#projects"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-all"
              >
                浏览作业
              </Link>
              <Link
                href="#about"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-all"
              >
                关于我
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 项目展示区 */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我的作业项目</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              这些是我在Web开发课程中完成的项目作业，展示了我的学习进度和技能成长。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <HomeworkCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.image}
                href={`/projects/${project.slug}`}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
                  汤兴伟
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">关于我</h2>
              <p className="text-gray-600 mb-4">
                我是汤兴伟，一名热爱Web开发的学生。我对前端技术充满热情，特别是React和Next.js框架。
              </p>
              <p className="text-gray-600 mb-6">
                这个作业展示平台是我使用Next.js 14和Tailwind CSS构建的，旨在展示我在Web开发课程中的学习成果。
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/Faust-10086/Web-develop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="mailto:example@example.com"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                  </svg>
                  联系我
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">汤兴伟的作业展示</h2>
              <p className="text-gray-400 mt-2">基于Next.js和Tailwind CSS构建</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">首页</Link>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">项目</Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">关于</Link>
              <a
                href="https://github.com/Faust-10086/Web-develop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} 汤兴伟. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
