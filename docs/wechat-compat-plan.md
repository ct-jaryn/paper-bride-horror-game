# 《阴阳簿》微信小程序 / 小游戏兼容性方案

## 目标

在保持现有 H5 版本（GitHub Pages / 本地服务器）可正常运行的前提下，
让项目具备在微信生态发布的能力：

1. **微信小程序**：通过 `web-view` 组件复用现有 H5，改动最小。
2. **微信小游戏**：基于 Canvas 重新实现渲染与输入，复用剧情数据与核心引擎。

## 运行环境差异

| 能力 | H5 浏览器 | 微信小程序 web-view | 微信小游戏 |
|------|-----------|---------------------|------------|
| DOM / CSS | 完整支持 | 完整支持（H5 内部） | 不支持 |
| 脚本格式 | ESM `import()` | ESM `import()` | ESM `import()` / `require` |
| 本地存储 | `localStorage` | `localStorage` 或 `wx.miniProgram` 存储 | `wx.getStorageSync` |
| 音效 | Web Audio API | Web Audio API | `wx.createInnerAudioContext` |
| 分享 | Web Share / 链接 | `wx.miniProgram.postMessage` | `wx.shareAppMessage` |
| 弹窗 | `alert` / `confirm` | `wx.showModal` | `wx.showModal` |
| 剪贴板 | `navigator.clipboard` | `wx.setClipboardData` | `wx.setClipboardData` |

## 总体架构

```text
┌──────────────────────────────────────────────────────────────┐
│                        上层业务                               │
│  game.js / renderer.js / recordManager.js / sound.js ...     │
├──────────────────────────────────────────────────────────────┤
│                    跨平台抽象层                               │
│              js/engine/platform.js                           │
│   环境探测 · 存储 · 剪贴板 · 分享 · 弹窗 · 脚本加载            │
├──────────────────┬──────────────────┬────────────────────────┤
│   H5 浏览器       │  微信小程序       │  微信小游戏             │
│  localStorage     │  web-view 外壳    │  Canvas 渲染器          │
│  Web Audio        │  wx.miniProgram   │  wx InnerAudio          │
└──────────────────┴──────────────────┴────────────────────────┘
```

## 已落地的改动

### 1. 新增 `js/engine/platform.js`

提供统一 API，屏蔽浏览器 / 小程序 web-view / 小游戏的环境差异：

- `Platform.ENV`：`'browser' | 'weapp' | 'minigame'`
- `Platform.storage`：`.getItem / .setItem / .removeItem / .clear / .keys`
- `Platform.setClipboard(text)`：返回 Promise
- `Platform.alert(msg)` / `Platform.confirm(msg)`：`confirm` 返回 Promise
- `Platform.share(payload)`：触发小程序/小游戏分享
- `Platform.loadScript(path)`：浏览器用 ESM 动态导入，小游戏用 `require`
- `Platform.onUserInteraction(callback)`：用于解锁音频上下文

### 2. 核心模块接入抽象层

| 文件 | 改动点 |
|------|--------|
| `js/engine/saveManager.js` | 所有 `localStorage` 读写改为 `Platform.storage` |
| `js/engine/dom.js` | DOM 引用在缺失 document 时返回 null，避免小游戏/Node 崩溃 |
| `js/engine/effectEngine.js` | 视觉特效在缺少 DOM 时安全跳过 |
| `currency.js` | 小游戏环境下自动跳过 DOM UI 初始化 |
| `sound.js` | 音频上下文解锁改为 `Platform.onUserInteraction` |
| `js/engine/storyLoader.js` | 动态加载改为 `Platform.loadScript` |
| `js/engine/recordManager.js` | 导出记录改为 `Platform.setClipboard` |
| `js/engine/renderer.js` | 重新开始确认改为 `Platform.confirm` |
| `js/main.js` | 在微信 web-view 中自动加载 JSSDK 后再启动 |

这些改动对浏览器版本完全透明，Node 测试环境也能继续通过。

### 3. 微信小游戏完整 Canvas 版本

已实现可运行的小游戏版本：

| 文件 | 说明 |
|------|------|
| `minigame/game.js` | 入口，创建 Canvas 并启动主控 |
| `minigame/js/minigame-main.js` | 初始化引擎、存档、成就、货币、音频、渲染器 |
| `minigame/js/canvas-renderer.js` | Canvas 标题/选卷/游戏/结局/成就/商店/记录面板 |
| `minigame/js/audio-adapter.js` | 程序化生成 WAV 并写入小游戏本地缓存，支持全部音效 |
| `minigame/js/stories-bundle.js` | 静态 import 全部 7 个故事的数据包 |
| `tools/bundle-stories-for-minigame.mjs` | 自动生成/更新上述故事包 |
| `minigame/game.json` / `project.config.json` | 小游戏工程配置 |

小游戏功能覆盖：

- 标题画面（续读最近存档）
- 故事选择（滚动卡片、继续/重开）
- 游戏主界面（时辰、理智/阴气条、阴钱、物品栏、文本打字机、选项）
- 点击文本跳过打字机
- 结局画面（重来/返回）
- 成就列表、阴市商店、命簿记录、阴阳历程浮层
- 自动存档与成就/货币结算
- 风声环境音效与事件音效

### 4. 微信小程序 web-view 外壳

| 文件 | 说明 |
|------|------|
| `weapp/app.js` | 小程序入口，配置 H5 地址 |
| `weapp/app.json` | 页面与导航栏配置 |
| `weapp/pages/index/` | web-view 页面，处理分享消息与加载错误 |
| `weapp/project.config.json` / `sitemap.json` | 开发者工具配置 |
| `js/weapp-bridge.js` | H5 端动态加载微信 JSSDK，支持 `wx.miniProgram.postMessage` |

## Phase 1：微信小程序（web-view）

### 方案

直接用微信小程序的 `web-view` 组件加载已部署的 H5 地址，
核心游戏逻辑、UI、存档均复用现有代码。

### 发布步骤

1. 将 H5 部署到 HTTPS 域名（如 GitHub Pages）。
2. 修改 `weapp/app.js` 中的 `h5Url` 为实际地址。
3. 登录微信公众平台，配置业务域名（H5 域名必须加入小程序业务域名白名单）。
4. 在微信开发者工具中导入 `weapp/` 目录并上传。

### 可选增强

- H5 页面引入微信 JSSDK 后，`js/engine/platform.js` 会自动识别 `wx.miniProgram`，
  支持 `postMessage` 触发小程序原生分享。
- 如需接入微信登录、云存档，可在 `weapp/pages/index/index.js` 的 `onMessage` 中处理。

## Phase 2：微信小游戏（Canvas）

### 方案

小游戏没有 DOM，使用 Canvas 重新实现渲染与输入，复用剧情数据与核心引擎。

### 已完成功能

- `minigame/js/canvas-renderer.js`：完整 Canvas UI
- `minigame/js/audio-adapter.js`：程序化生成 WAV 音效
- `minigame/js/minigame-main.js`：启动流程
- `tools/bundle-stories-for-minigame.mjs`：故事数据打包

### 发布步骤

1. 运行 `node tools/bundle-stories-for-minigame.mjs` 更新剧情包。
2. 在微信开发者工具导入 `minigame/` 目录。
3. 配置 appid 并上传。

## 测试验证

```bash
node test/run-all.mjs
```

当前所有测试通过：

- `test_esm_boot.mjs`：H5 引擎启动
- `test/state-engine-integration.mjs`：状态与效果引擎
- `test/minigame-integration.mjs`：小游戏入口与 Canvas 流程
- `test/stories-integration.mjs`：剧情数据校验

## 后续建议

1. **真机测试**：`web-view` 在微信内置浏览器与开发者工具中的 localStorage 行为可能不同，
   建议重点在真机验证存档持久化。
2. **敏感数据**：当前存档、成就、货币均为客户端存储，
   若接入真实支付或排行榜，必须服务端校验。
3. **小游戏分包**：若剧情数据打包后体积较大，可按卷分包加载，
   参考微信小游戏分包加载能力。
4. **H5 视觉还原**：小游戏 Canvas 版已实现核心交互，但特效、CG、复杂动画可继续打磨。

## 文件变更清单

```
js/engine/platform.js                新增
js/engine/saveManager.js             接入 Platform.storage
js/engine/dom.js                     兼容无 document 环境
js/engine/effectEngine.js            Canvas 环境安全跳过视觉特效
sound.js                             接入 Platform.onUserInteraction
js/engine/storyLoader.js             接入 Platform.loadScript
js/engine/recordManager.js           接入 Platform.setClipboard
js/engine/renderer.js                接入 Platform.confirm
js/weapp-bridge.js                   新增
js/main.js                           微信 web-view 自动加载 JSSDK
weapp/                               微信小程序 web-view 外壳
minigame/                            微信小游戏完整 Canvas 版本
tools/bundle-stories-for-minigame.mjs 新增
tools/validate-stories.mjs           修复 Windows 绝对路径导入
test/minigame-integration.mjs        新增
test/run-all.mjs                     纳入小游戏测试
docs/wechat-compat-plan.md           本文档
```
