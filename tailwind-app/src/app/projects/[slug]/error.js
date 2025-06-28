'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // 记录错误到错误报告服务
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-rose-50 p-8 rounded-xl shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="text-rose-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-rose-700 mb-2">⚠️ 加载失败</h2>
          <p className="text-rose-600 mb-6">
            很抱歉，加载项目详情时出现了问题。
          </p>
          <div className="space-y-3 w-full">
            <button
              onClick={reset}
              className="w-full py-2 px-4 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-md transition-colors"
            >
              重试
            </button>
            <Link href="/" className="block w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md text-center transition-colors">
              返回首页
            </Link>
          </div>
          <div className="mt-6 p-4 bg-rose-100 rounded-md text-sm text-rose-800 w-full">
            <p className="font-medium mb-1">错误详情：</p>
            <p className="font-mono">{error.message || '未知错误'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}