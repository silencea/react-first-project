
## 引入antd
yarn add antd

## 实现组件的按需打包
1， yarn add react-app-rewired customize-cra babel-plugin-import
2，根目录定义加载配置的 js 模块: config-overrides.js
3，修改配置: package.json
"scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-scripts eject"
}

## 自定义antd主题
yarn add less less-loader@5.0.0

## 引入路由
yarn add react-router-dom

## 安装请求插件
yarn add axios


