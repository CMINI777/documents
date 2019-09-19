# 有点追求不好吗？

::: tip

在希望中欢呼，在苦难中坚持

Rejoicing in Hope, Patient in Tribulation

:::

## 一、 PWA插件

### 1. 安装

```
yarn add -D @vuepress/plugin-pwa@next
# OR npm install -D @vuepress/plugin-pwa@next
```

### 2. 部署一个 manifest

```
head: [
  ['link', {rel: 'manifest', href: '/manifest.json'}]
]
```

manifest 范例
```
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "A simply readable Hacker News app.",
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }]
}
```

### 3. 使用

更新弹出窗口
```
module.exports = {
  themeConfig: {
-   serviceWorker: {
-     updatePopup: {
-        message: "New content is available.",
-        buttonText: "Refresh"
-     }
-   }
  },
+  plugins: {
+   '@vuepress/pwa': {
+      serviceWorker: true,
+      updatePopup: {
+        message: "New content is available.",
+        buttonText: "Refresh"
+      }
+    }
+ }
}
```

## 二、 回到顶部插件

### 1. 安装

```
yarn add -D @vuepress/plugin-back-to-top@next
# OR npm install -D @vuepress/plugin-back-to-top@next
```

### 2. 使用

```
module.exports = {
  plugins: {
    '@vuepress/back-to-top': true
  }
}
```
::: danger

~~back-to-top不生效~~ .io 的项目只有在 master 分支 pages 才可以生效

:::