'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // 记录错误到错误报告服务
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">系统错误</h1>
              <p className="text-gray-600 mb-8">
                很抱歉，应用程序遇到了意外错误。我们的技术团队已经收到通知。
              </p>
              <button
                onClick={reset}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                尝试恢复
              </button>
              <div className="mt-6 p-4 bg-gray-100 rounded-md text-sm text-gray-800 w-full">
                <p className="font-medium mb-1">错误详情：</p>
                <p className="font-mono">{error.message || '未知错误'}</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}