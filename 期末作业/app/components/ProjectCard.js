'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className={`group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ${isHovered ? 'shadow-xl' : ''}`}
        style={{
          transform: isHovered ? 'perspective(1000px) rotateY(5deg) translateY(-5px)' : 'perspective(1000px) rotateY(0) translateY(0)',
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
            </div>
          </div>

          {/* GitHub标识 */}
          <div className="absolute top-2 right-2">
            <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              项目文件夹
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            路径: {project.path}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              点击查看GitHub
            </span>
            <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
              查看详情
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* 装饰性元素，增强3D效果 */}
        <div
          className="absolute inset-0 z-[-1] bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            transform: 'translateZ(-10px)',
          }}
        />
      </div>
    </Link>
  );
}