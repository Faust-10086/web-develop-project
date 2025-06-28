import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';
import MarkdownRenderer from '../../components/MarkdownRenderer';

// 模拟从GitHub API获取数据的函数
async function getProjectData(slug) {
  // 这里应该是从GitHub API获取数据
  // 为了演示，我们使用模拟数据
  const projects = {
    'css-practice': {
      title: 'CSS 练习',
      description: '使用CSS实现各种布局和动画效果',
      imageUrl: '/vercel.svg',
      date: '2023-03-19',
      content: `# CSS 练习项目

## 项目概述
这是一个CSS练习项目，包含了各种布局和动画效果的实现。通过这个项目，我学习了CSS的基本概念和高级技巧。

## 学习内容

### 布局技术
* Flexbox布局
* Grid布局
* 响应式设计
* 媒体查询

### 动画效果
* CSS过渡（Transitions）
* CSS动画（Animations）
* 变换（Transforms）

## 代码示例

```css
/* Flexbox布局示例 */
.container {
      display: flex;
  justify - content: space - between;
  align - items: center;
  flex - wrap: wrap;
}

/* 动画示例 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animated - element {
  animation: fadeIn 1s ease -in -out;
}
```

## 项目收获
通过这个项目，我深入理解了CSS的工作原理，掌握了现代网页布局技术，能够创建美观且响应式的用户界面。`,
  githubUrl: 'https://github.com/Faust-10086/Web-develop/tree/main/3.19练习',
    tags: ['CSS', 'HTML', '前端开发']
    },
'html-tables': {
  title: 'HTML 表格练习',
    description: '创建复杂的HTML表格结构',
      imageUrl: '/file.svg',
        date: '2023-04-16',
          content: `# HTML 表格练习

## 项目概述
这是一个HTML表格练习项目，包含了各种复杂表格结构的实现。通过这个项目，我学习了HTML表格的基本概念和高级技巧。

## 学习内容

### 基础表格结构
* 表格标签（table, tr, td, th）
* 表格标题（caption）
* 表头、表体、表尾（thead, tbody, tfoot）

### 高级表格特性
* 单元格合并（colspan, rowspan）
* 表格样式（CSS）
* 响应式表格

## 代码示例

```html
    < !--基本表格结构 -->
      <table border="1">
        <caption>学生成绩表</caption>
        <thead>
          <tr>
            <th>姓名</th>
            <th>数学</th>
            <th>语文</th>
            <th>英语</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>张三</td>
            <td>85</td>
            <td>92</td>
            <td>78</td>
          </tr>
          <tr>
            <td>李四</td>
            <td>90</td>
            <td>86</td>
            <td>92</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>平均分</td>
            <td>87.5</td>
            <td>89</td>
            <td>85</td>
          </tr>
        </tfoot>
      </table>
  ```

## 项目收获
通过这个项目，我掌握了HTML表格的创建和样式设计技巧，能够构建复杂的数据展示界面，提高了前端开发能力。`,
    githubUrl: 'https://github.com/Faust-10086/Web-develop/tree/main/4.16',
      tags: ['HTML', '表格', '前端开发']
},
'next-app': {
  title: 'Next.js 应用',
    description: '使用Next.js框架构建现代Web应用',
      imageUrl: '/next.svg',
        date: '2023-05-10',
          content: `# Next.js 应用开发

## 项目概述
这是一个使用Next.js框架构建的现代Web应用。通过这个项目，我学习了Next.js的基本概念和高级技巧，包括路由、数据获取、服务器组件等。

## 技术栈
* Next.js 14
* React
* Tailwind CSS
* Vercel部署

## 主要功能

### 路由系统
* 基于文件系统的路由
* 动态路由
* 嵌套路由

### 数据获取
* 服务器组件
* 静态生成（SSG）
* 服务器端渲染（SSR）
* 增量静态再生（ISR）

## 代码示例

```jsx
  // 页面组件示例
  export default function Page({ data }) {
    return (
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600">{data.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {data.items.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </main>
    );
  }

  // 数据获取
  export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return {
      props: { data },
      revalidate: 60 // 每分钟重新验证
    };
  }
  ```

## 项目收获
通过这个项目，我掌握了Next.js框架的核心概念和最佳实践，能够构建高性能、SEO友好的现代Web应用，提升了全栈开发能力。`,
    githubUrl: 'https://github.com/Faust-10086/Web-develop/tree/main/my-next-app',
      tags: ['Next.js', 'React', '前端开发']
},
'python-snake': {
  title: '贪吃蛇游戏',
    description: '使用Python实现经典的贪吃蛇游戏',
      imageUrl: '/globe.svg',
        date: '2023-05-20',
          content: `# Python贪吃蛇游戏

## 项目概述
这是一个使用Python实现的经典贪吃蛇游戏。通过这个项目，我学习了Python的基本语法和游戏开发的基本概念。

## 技术栈
* Python 3
* Pygame库

## 游戏功能

### 核心机制
* 蛇的移动控制
* 食物生成
* 碰撞检测
* 分数计算

### 游戏界面
* 游戏主界面
* 计分板
* 游戏结束界面

## 代码示例

```python
  import pygame
import random

# 初始化游戏
  pygame.init()

# 设置游戏窗口
  window_width = 800
  window_height = 600
  game_window = pygame.display.set_mode((window_width, window_height))
  pygame.display.set_caption('贪吃蛇游戏')

# 定义颜色
  BLACK = (0, 0, 0)
  WHITE = (255, 255, 255)
  GREEN = (0, 255, 0)
  RED = (255, 0, 0)

# 蛇的初始位置和大小
  snake_block = 20
  snake_speed = 15

# 游戏主循环
def gameLoop():
  game_over = False
  game_close = False
    
    # 蛇的初始位置
  x1 = window_width / 2
  y1 = window_height / 2
    
    # 蛇的移动方向
  x1_change = 0
  y1_change = 0
    
    # 蛇的身体
  snake_body = []
  length_of_snake = 1
    
    # 食物位置
  foodx = round(random.randrange(0, window_width - snake_block) / snake_block) * snake_block
  foody = round(random.randrange(0, window_height - snake_block) / snake_block) * snake_block
    
    # 游戏循环
  while not game_over:
        # 游戏逻辑...
  pass
        
# 启动游戏
  gameLoop()
    ```

## 项目收获
通过这个项目，我掌握了Python编程的基础知识，学习了游戏开发的核心概念，如游戏循环、事件处理和碰撞检测，提高了编程和问题解决能力。`,
    githubUrl: 'https://github.com/Faust-10086/Web-develop/blob/main/第四周练习与作业/贪吃蛇.py',
      tags: ['Python', '游戏开发', '后端开发']
}
  };

// 如果找不到项目，返回null
if (!projects[slug]) {
  return null;
}

return {
  slug,
  ...projects[slug]
};
}

// 获取相关项目
function getRelatedProjects(currentSlug) {
  const allProjects = [
    {
      id: 1,
      slug: 'css-practice',
      title: 'CSS 练习',
      description: '使用CSS实现各种布局和动画效果',
      imageUrl: '/vercel.svg',
      date: '2023-03-19'
    },
    {
      id: 2,
      slug: 'html-tables',
      title: 'HTML 表格练习',
      description: '创建复杂的HTML表格结构',
      imageUrl: '/file.svg',
      date: '2023-04-16'
    },
    {
      id: 3,
      slug: 'next-app',
      title: 'Next.js 应用',
      description: '使用Next.js框架构建现代Web应用',
      imageUrl: '/next.svg',
      date: '2023-05-10'
    },
    {
      id: 4,
      slug: 'python-snake',
      title: '贪吃蛇游戏',
      description: '使用Python实现经典的贪吃蛇游戏',
      imageUrl: '/globe.svg',
      date: '2023-05-20'
    },
  ];

  // 过滤掉当前项目
  return allProjects.filter(project => project.slug !== currentSlug).slice(0, 3);
}

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const project = await getProjectData(slug);

  // 如果找不到项目，返回404
  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug);

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 面包屑导航 */}
        <Breadcrumb
          items={[
            { label: '项目', href: '/#projects' },
            { label: project.title }
          ]}
        />

        {/* 项目标题和描述 */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-600 text-lg">{project.description}</p>

          {/* 项目元数据 */}
          <div className="flex flex-wrap items-center mt-4 text-sm text-gray-500">
            <span className="mr-4">
              <time dateTime={project.date}>{project.date}</time>
            </span>
          </div>
        </div>

        {/* 项目图片 */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 项目标签 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* 项目内容 */}
        <div className="prose prose-lg max-w-none mb-12">
          <MarkdownRenderer content={project.content} />
        </div>

        {/* GitHub链接 */}
        {project.githubUrl && (
          <div className="mb-12">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              在GitHub上查看源代码
            </a>
          </div>
        )}

        {/* 相关项目 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">相关项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.slug}`}
                className="block group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={relatedProject.imageUrl}
                      alt={relatedProject.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{relatedProject.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// 启用ISR增量静态再生，每24小时重新生成
export const revalidate = 86400; // 24小时，单位为秒