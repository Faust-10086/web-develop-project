import pygame
import random
import sys

# 初始化pygame
pygame.init()

# 定义颜色
黑色 = (0, 0, 0)
白色 = (255, 255, 255)
红色 = (255, 0, 0)
绿色 = (0, 255, 0)
蓝色 = (0, 0, 255)

# 设置游戏窗口
窗口宽度 = 800
窗口高度 = 600
游戏窗口 = pygame.display.set_mode((窗口宽度, 窗口高度))
pygame.display.set_caption('贪吃蛇游戏')

# 设置游戏时钟
时钟 = pygame.time.Clock()

# 设置蛇的大小和速度
蛇块大小 = 20
蛇速度 = 15

# 设置字体
字体 = pygame.font.SysFont('SimHei', 25)  # 使用黑体显示中文
大字体 = pygame.font.SysFont('SimHei', 50)

# 显示文字函数
def 显示文字(文本, 字体, 颜色, x, y):
    文字表面 = 字体.render(文本, True, 颜色)
    文字矩形 = 文字表面.get_rect()
    文字矩形.center = (x, y)
    游戏窗口.blit(文字表面, 文字矩形)

# 绘制蛇函数
def 绘制蛇(蛇块大小, 蛇身):
    for i, 位置 in enumerate(蛇身):
        # 红黑相间的蛇身
        颜色 = 红色 if i % 2 == 0 else 黑色
        pygame.draw.rect(游戏窗口, 颜色, [位置[0], 位置[1], 蛇块大小, 蛇块大小])

# 游戏主函数
def 游戏主循环():
    游戏结束 = False
    游戏退出 = False
    
    # 初始化蛇的位置和方向
    x = 窗口宽度 / 2
    y = 窗口高度 / 2
    x变化 = 0
    y变化 = 0
    
    # 初始化蛇身
    蛇身 = []
    蛇长度 = 1
    
    # 初始化食物位置
    食物x = round(random.randrange(0, 窗口宽度 - 蛇块大小) / 蛇块大小) * 蛇块大小
    食物y = round(random.randrange(0, 窗口高度 - 蛇块大小) / 蛇块大小) * 蛇块大小
    
    # 游戏循环
    while not 游戏退出:
        
        # 游戏结束处理
        while 游戏结束:
            游戏窗口.fill(白色)
            显示文字("游戏结束！按Q退出或C重新开始", 大字体, 红色, 窗口宽度/2, 窗口高度/2)
            pygame.display.update()
            
            # 处理游戏结束事件
            for 事件 in pygame.event.get():
                if 事件.type == pygame.QUIT:
                    游戏退出 = True
                    游戏结束 = False
                if 事件.type == pygame.KEYDOWN:
                    if 事件.key == pygame.K_q:
                        游戏退出 = True
                        游戏结束 = False
                    if 事件.key == pygame.K_c:
                        游戏主循环()
        
        # 处理游戏事件
        for 事件 in pygame.event.get():
            if 事件.type == pygame.QUIT:
                游戏退出 = True
            if 事件.type == pygame.KEYDOWN:
                if 事件.key == pygame.K_LEFT:
                    x变化 = -蛇块大小
                    y变化 = 0
                elif 事件.key == pygame.K_RIGHT:
                    x变化 = 蛇块大小
                    y变化 = 0
                elif 事件.key == pygame.K_UP:
                    y变化 = -蛇块大小
                    x变化 = 0
                elif 事件.key == pygame.K_DOWN:
                    y变化 = 蛇块大小
                    x变化 = 0
        
        # 检查是否撞墙
        if x >= 窗口宽度 or x < 0 or y >= 窗口高度 or y < 0:
            游戏结束 = True
        
        # 更新蛇的位置
        x += x变化
        y += y变化
        
        # 填充背景
        游戏窗口.fill(白色)
        
        # 绘制食物
        pygame.draw.rect(游戏窗口, 绿色, [食物x, 食物y, 蛇块大小, 蛇块大小])
        
        # 更新蛇身
        蛇头 = []
        蛇头.append(x)
        蛇头.append(y)
        蛇身.append(蛇头)
        
        # 如果蛇身长度超过蛇长度，删除多余的部分
        if len(蛇身) > 蛇长度:
            del 蛇身[0]
        
        # 检查是否撞到自己
        for 部分 in 蛇身[:-1]:
            if 部分 == 蛇头:
                游戏结束 = True
        
        # 绘制蛇
        绘制蛇(蛇块大小, 蛇身)
        
        # 显示分数
        显示文字(f"得分: {蛇长度-1}", 字体, 黑色, 70, 20)
        
        # 在顶部显示"汤兴伟"三个字
        显示文字("汤兴伟", 大字体, 蓝色, 窗口宽度/2, 30)
        
        # 更新屏幕
        pygame.display.update()
        
        # 检查是否吃到食物
        if x == 食物x and y == 食物y:
            食物x = round(random.randrange(0, 窗口宽度 - 蛇块大小) / 蛇块大小) * 蛇块大小
            食物y = round(random.randrange(0, 窗口高度 - 蛇块大小) / 蛇块大小) * 蛇块大小
            蛇长度 += 1
        
        # 控制游戏速度
        时钟.tick(蛇速度)
    
    # 退出游戏
    pygame.quit()
    sys.exit()

# 启动游戏
游戏主循环()