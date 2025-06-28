'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeworkCard({ imageSrc, title, description, href = '#', tags = [] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} className="block">
      <div
        className={`group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ${isHovered ? 'shadow-xl' : ''}`}
        style={{
          transform: isHovered ? 'perspective(1000px) rotateY(10deg) translateY(-5px)' : 'perspective(1000px) rotateY(0) translateY(0)',
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image
            src={imageSrc || '/next.svg'} // 使用提供的imageSrc或默认图片
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* 标签显示 */}
          {tags && tags.length > 0 && (
            <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-2 py-1 bg-black/60 text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 flex justify-end">
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

        {/* 额外的装饰元素 */}
        <div
          className={`absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-5' : 'opacity-0'}`}
          style={{
            transform: 'translateZ(-20px)',
            filter: 'blur(30px)',
          }}
        />
      </div>
    </Link>
  );
}