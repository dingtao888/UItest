# language: zh-CN
功能: bing网址搜索
通过搜索关键字检索返回的结果

  场景大纲: 网址关键字搜索
    假如浏览到搜索网站 "<网址>"
    当在搜索栏输入"<搜索栏输入的内容>"并点击搜索按钮
    那么搜索结果中应该包含'<搜索栏输入的内容>'的关键字
    例子: 
      | 网址                   | 搜索栏输入的内容 |
      | https://cn.bing.com/ | CukeTest |
      | https://cn.bing.com/ | cucumber |
      | https://cn.bing.com/ | BDD      |