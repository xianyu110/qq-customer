# QQ 在线客服组件

一个轻量级、易于集成的 QQ 在线客服浮动按钮组件,采用清新的绿色主题设计。

## 功能特性

- 🎨 现代化 UI 设计,采用自然绿色清新风格
- 📱 完全响应式,支持移动端和桌面端
- 🚀 纯原生 JavaScript 实现,无需任何依赖
- ⚡ 轻量级,性能优秀
- 🎭 平滑的动画过渡效果
- 🔧 易于配置和定制

## 在线演示

参考效果：http://img.lrjz100.com/lrkf/

## 快速开始

### 方式一: 通过 CDN 引入(推荐)

直接在 HTML 页面中引入 CDN 链接:

```html
<script src="https://xianyu110.github.io/qq-customer/customer-service-modal.js"></script>
```

### 方式二: 本地引入

下载 `customer-service-modal.js` 文件到你的项目中,然后引入:

```html
<script src="customer-service-modal.js"></script>
```

### 配置

如果使用 CDN 方式,你需要 fork 本项目并修改配置,或者下载文件到本地修改。

在 `customer-service-modal.js` 中修改配置项:

```javascript
const config = {
    qrImageUrl: 'https://qm.qq.com/q/Q4YTVK5T6q',  // 你的 QQ 群二维码链接
    workTime: '7×24小时在线服务',                    // 工作时间说明
    buttonColor: '#52c41a'                          // 按钮主题色
};
```

### 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的网站</title>
</head>
<body>
    <!-- 你的网站内容 -->

    <!-- 引入客服组件 -->
    <script src="https://xianyu110.github.io/qq-customer/customer-service-modal.js"></script>
</body>
</html>
```

## 文件说明

- `customer-service-modal.js` - 客服组件核心代码
- `index.html` - 使用示例

## 特性详解

### 浮动按钮
- 固定在页面右下角
- 悬停时有动画效果
- 渐变背景和阴影效果

### 弹窗模态框
- 点击按钮弹出客服二维码
- 支持点击遮罩层或关闭按钮关闭
- 平滑的淡入淡出动画

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 技术栈

- 原生 JavaScript (ES6+)
- CSS3 动画和过渡效果
- SVG 图标

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request!

## 更新日志

### v1.0.0 (2025-10-17)
- 初始版本发布
- 实现基础的客服浮动按钮和弹窗功能
- 采用清新绿色主题设计
