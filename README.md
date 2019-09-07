# documents(vuepress-blog)

## 欢迎访问 [minichn's blog](https://cmini777.github.io/documents/)

### Usage
---

一、 安装初始化

1. 全局安装

```
npm install -g vuepress
```

2. 创建一个文件夹作为目录

```
mkdir vuepress-blog
```

3. 项目初始化（初始化后会生成一个package.json文件）

```
cd vuepress-blog
npm init -y
```

4. 在当前目录中创建一个docs目录

```
mkdir docs
```

5. 首页内容书写(默认主题提供)

```
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

二、 核心配置

1. 在docs目录下创建.vuepress目录

```
cd docs
mkdir .vuepress
# 主要存放配置
```

2. 新建总配置文件config.js

```
cd .vuepress
touch config.js
# config是整个项目的核心配置文件，所有菜单、栏目相关的配置均配置在该模块中
```

3. 在config.js中加入内容

```
module.exports = {
    title: 'MiniCHN',
    description: '迷你中华',
    dest: './dist',
    port: '7777',
	base: '/documents/',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
```

4. 运行

```
vuepress dev docs
```

-----
