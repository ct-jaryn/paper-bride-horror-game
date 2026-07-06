# js/engine

游戏引擎核心目录，负责《阴阳簿》的全部运行时逻辑：状态管理、场景渲染、故事加载、音效、结局、成就、跨卷联动等。

## 结构

```
js/engine/
├── namespace.js        # 全局命名空间 Huimen
├── state.js            # GameState / GlobalFlags 管理
├── storyLoader.js      # 动态加载故事 ES 模块
├── renderer.js         # 场景渲染、选择 UI、屏幕切换
├── game.js             # 标题/结局/按钮事件绑定
├── effectEngine.js     # sanity/yin 特效与游戏结束检测
├── sceneFactory.js     # 场景/选择工厂函数
├── endingFactory.js    # 结局/NPC/对话工厂函数
├── saveManager.js      # localStorage 读写与迁移
├── recordManager.js    # 选择记录、复盘、导出
├── endingManager.js    # 结局处理与借命还阳
├── endingGallery.js    # 结局图鉴
├── npcSystem.js        # NPC 好感与交互
├── pauseManager.js     # 暂停浮层
├── storyExtensions.js  # 跨卷彩蛋选项注入
├── eventBus.js         # 轻量事件总线
├── dom.js              # DOM 元素引用
├── utils.js            # 通用工具函数
└── platform.js         # 浏览器/小程序/小游戏跨平台抽象
```

## 关键文件

| 文件 | 目的 |
|------|------|
| `namespace.js` | 定义 `window.Huimen` 命名空间，所有子系统在此注册 |
| `state.js` | 提供 GameState/GlobalFlags 读写 API，含白名单校验 |
| `storyLoader.js` | 根据 manifest 动态 import 故事模块并初始化状态 |
| `renderer.js` | 渲染场景文本、状态栏、物品栏、选择与结局画面 |
| `game.js` | 绑定标题页、游戏内、结局页的所有按钮事件 |
| `sceneFactory.js` | 提供 `createScene` / `createChoice` 工厂函数 |
| `endingFactory.js` | 提供 `createEnding` / `createNPC` / 对话节点工厂 |
| `platform.js` | 浏览器/小程序/小游戏跨平台抽象层，支持小游戏 bundle 映射 |

## 依赖

**本模块依赖**：
- `js/main.js` - 负责启动顺序
- `stories/manifest.js` - 故事清单
- `stories/{id}/index.js` - 故事数据

**依赖本模块的**：
- `js/main.js` - 初始化引擎
- `index.html` - UI 屏幕 DOM

## 规范

### 文件命名
- 子系统文件使用 camelCase，如 `storyLoader.js`
- 数据/配置相关文件使用 camelCase，如 `saveManager.js`

### 代码模式

**状态操作模式**：
```javascript
import { adjustNumber, setFlag } from './state.js';

adjustNumber('sanity', -10, 0, 100);
setFlag('knowsTruth', true, 'both');
```

**事件监听模式**：
```javascript
import { Huimen } from './namespace.js';

Huimen.GameEvents.on('gameInit', () => {
  // 初始化逻辑
});
```

### 错误处理
- 数据错误优先 `console.error` 并降级，避免阻塞玩家
- 关键状态写入越界时 `console.warn`

### 测试

- `tools/test_scene_factory.mjs`：验证 `createScene` / `createChoice`
- `tools/test_effect_engine.mjs`：验证时辰、条件、游戏结束判定
- `tools/test_ending_factory.mjs`：验证 `createEnding` / `createNPC` / 对话节点
- `tools/test_renderer.mjs`：使用 jsdom 验证 DOM 渲染
- `tools/test_save_manager.mjs`：验证 `SaveManager` 持久化 API
- `tools/test_browser_boot.cjs`：浏览器 DOM 冒烟测试
- 手动在浏览器中走通关键路径

## 添加新文件

### 添加新引擎子系统

1. 在 `js/engine/` 下创建新文件
2. 导入 `namespace.js` 并将公共 API 挂到 `Huimen`
3. 在 `js/main.js` 中按正确顺序初始化
4. 更新本 README

**检查清单**：
- [ ] 遵循命名约定
- [ ] 公共 API 挂到 `Huimen`
- [ ] 不直接修改 `Huimen.GameState`，优先通过 `state.js` API
- [ ] 从 `index.js` 或 `main.js` 正确导出/初始化
