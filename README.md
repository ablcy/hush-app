# Hush App - 移动端即时通讯

Hush 阅后即焚聊天应用的 Cordova 混合移动端封装，可将 Web 应用打包为 Android APK。

## 功能

- 将 Hush Web 应用封装为原生 Android 应用
- 支持 Firebase 推送通知
- 相机与麦克风权限（用于视频通话）
- 文件访问权限

## 技术栈

- Apache Cordova
- Android 平台适配
- Firebase Cloud Messaging（推送）
- WebView 容器

## 构建

```bash
npm install
cordova platform add android
cordova build android
```

## 版本

v5.9.23
