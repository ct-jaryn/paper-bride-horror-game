# 阴阳簿 · 微信小游戏

本目录是《阴阳簿》的微信小游戏（WeChat Mini Game）版本。
小游戏没有 DOM/CSS，因此使用 Canvas 2D 重新实现了全部 UI，
并复用了原有的状态、效果、成就、货币与剧情数据。

## 已提供的模块

| 文件 | 说明 |
|------|------|
| `game.js` | 小游戏入口，创建 Canvas 并启动主控 |
| `game.json` | 小游戏配置（竖屏、音频中断等） |
| `project.config.json` | 微信开发者工具项目配置 |
| `js/minigame-main.js` | 初始化引擎、存档、成就、货币、音频、渲染器 |
| `js/canvas-renderer.js` | Canvas 标题/选卷/游戏/结局/成就/商店/记录面板 |
| `js/audio-adapter.js` | 程序化生成 WAV 音效，使用 `wx.createInnerAudioContext` 播放 |
| `js/stories-bundle.js` | 全部 7 个故事的数据包（由工具自动生成） |

## 功能覆盖

- 标题画面与续读最近存档
- 故事选择（滚动卡片、继续/重开）
- 游戏主界面：时辰、理智/阴气条、阴钱、物品栏、文本打字机、选项
- 点击文本跳过打字机
- 结局画面与成就/货币结算
- 成就列表、阴市商店、命簿记录、阴阳历程浮层
- 自动存档
- 风声环境音效与事件音效

## 开发流程

### 1. 更新剧情包

当 `stories/` 下的剧情文件修改后，重新生成小游戏故事包：

```bash
node tools/bundle-stories-for-minigame.mjs
```

这会更新 `minigame/js/stories-bundle.js`。

### 2. 微信开发者工具导入

1. 打开微信开发者工具，选择「小游戏」。
2. 项目目录选择本仓库根目录下的 `minigame/` 文件夹。
3. 在 `project.config.json` 中配置你的 `appid`。
4. 点击「预览」或「真机调试」。

### 3. 调试

小游戏版本的关键变量挂在 `Huimen` 命名空间下：

```js
// 在开发者工具控制台查看
console.log(Huimen.GameState);
console.log(Huimen.CurrentStory);
console.log(Huimen.AchievementEngine.getAll());
```

## 注意事项

- 小游戏音效通过动态生成 WAV 文件并写入 `wx.env.USER_DATA_PATH` 实现，
  首次生成可能需要几十毫秒，已在 `AudioAdapter.init()` 中预生成常用音效。
- Canvas 渲染器使用逻辑像素布局，`game.js` 已根据 `pixelRatio` 设置 Canvas 实际尺寸。
- 存档、成就、货币均通过 `js/engine/saveManager.js` 的 `Platform.storage` 写入小游戏本地存储。

## 参考

- [微信小游戏官方文档](https://developers.weixin.qq.com/minigame/dev/guide/)
- 项目通用兼容性方案：`docs/wechat-compat-plan.md`
