import requests
from bs4 import BeautifulSoup
print("我要写爬虫程序了，哈哈哈哈！")
url="https://www.xbmu.edu.cn/"
#print(url)
r=requests.get(url)
r.encoding="utf-8"
#抓取url地址中的内容
#print(r.text)
x=r.text
soup=BeautifulSoup(x,"html.parser")
#print(soup.find_all("li",class_="sub-item i1-1"))
for i in soup.find_all("li",class_="sub-item i1-1"):
    print(i.find_all("a")[0].text)
print("程序执行完毕，哈哈哈！！！")