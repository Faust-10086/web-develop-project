'use client';

import { useEffect, useState } from 'react';

// 简单的Markdown渲染函数
function renderMarkdown(markdown) {
  if (!markdown) return '';

  // 处理标题
  let html = markdown
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-6 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-3">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-10 mb-4">$1</h1>');

  // 处理粗体和斜体
  html = html
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

  // 处理链接
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // 处理列表
  html = html
    .replace(/^\* (.+)$/gm, '<li class="ml-6 list-disc">$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-6 list-decimal">$1</li>');

  // 将连续的列表项包装在ul或ol中
  html = html
    .replace(/(<li class="ml-6 list-disc">.*?<\/li>\s*)+/g, '<ul class="my-4">$&</ul>')
    .replace(/(<li class="ml-6 list-decimal">.*?<\/li>\s*)+/g, '<ol class="my-4">$&</ol>');

  // 处理代码块，支持语言标识
  html = html.replace(/```([a-z]*)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang ? ` language-${lang}` : '';
    return `<pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4"><code class="${language}">${code.trim()}</code></pre>`;
  });

  // 处理行内代码
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">$1</code>');

  // 处理段落
  html = html.replace(/^(?!<[h|u|o|p|l]|$)(.+)$/gm, '<p class="my-4">$1</p>');

  // 处理换行
  html = html.replace(/\n\n/g, '<br />');

  return html;
}

export default function MarkdownRenderer({ content }) {
  const [renderedContent, setRenderedContent] = useState('');

  useEffect(() => {
    setRenderedContent(renderMarkdown(content));
  }, [content]);

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
}