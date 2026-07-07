# 阴阳簿 开发者指南

## 项目目的

《阴阳簿》是一个面向 Web 与微信小程序的中式文字恐怖游戏集。核心职责是为玩家提供多分支、多结局的叙事体验，同时让内容创作者能够以模块化方式新增故事章节和结局，而不必修改引擎代码。

**核心职责**：
- 管理七卷故事的生命周期（加载、状态、渲染、存档）
- 提供跨卷全局 flag 与成就联动
- 支持选择记录、复盘、结局图鉴等元游戏功能
- 保持纯前端、无构建、可静态部署

**相关系统**：
- GitHub Pages - 静态托管主站点
- 微信小程序 - `weapp/` 目录下的移植版本

## 环境搭建

### 前置条件

- 现代浏览器（Chrome / Firefox / Safari / Edge）
- Python 3 或任意静态文件服务器
- Node.js 18+（仅用于验证与测试脚本）

### 安装

```bash
# 克隆仓库
git clone https://github.com/ct-jaryn/paper-bride-horror-game.git
cd paper-bride-horror-game
```

项目无 npm 依赖，无需 `npm install`。

### 运行

```bash
# 本地开发服务器
python3 -m http.server 8765

# 访问
open http://localhost:8765
```

在线预览地址：https://ct-jaryn.github.io/paper-bride-horror-game/

## 开发工作流

### 代码质量与验证

| 工具 | 命令 | 目的 |
|------|------|------|
| 故事数据验证 | `node tools/validate_stories.mjs` | 检查故事数据引用完整性 |
| 场景标题验证 | `node tools/validate_scene_titles.mjs` | 检查场景标题是否重复/为空 |
| 死场景检测 | `node tools/detect_dead_scenes.mjs` | 从 prologue 出发找出不可达场景 |
| 场景定义重复检测 | `node tools/detect_duplicate_scenes.mjs` | 检测场景 id 或内容重复 |
| 选项条件合法性检查 | `node tools/validate_choice_conditions.mjs` | 校验 choice.condition 字段类型与场景引用 |
| flag/item 引用检查 | `node tools/validate_item_flag_usage.mjs` | 检查条件引用的 flag/item 是否在全剧有定义 |
| NPC 引用检查 | `node tools/validate_npc_references.mjs` | 检查 choice.npc 指向存在的 NPC，choice.npcNode 指向该 NPC 对话中存在的节点（缺省 start） |
| 结局可达性测试 | `node tools/test_all_endings_reachability.mjs` | 从 prologue 出发计算可达结局 |
| 场景工厂测试 | `node tools/test_scene_factory.mjs` | 验证 createScene / createChoice |
| 效果引擎单元测试 | `node tools/test_effect_engine.mjs` | 验证时辰、条件、游戏结束判定 |
| 结局工厂单元测试 | `node tools/test_ending_factory.mjs` | 验证 createEnding / createNPC / 对话节点 |
| renderer 单元测试 | `node tools/test_renderer.mjs` | 使用 jsdom 验证 DOM 渲染 |
| 存档管理单元测试 | `node tools/test_save_manager.mjs` | 验证 SaveManager 持久化 API |
| 随机 walkthrough | `node tools/playthrough_test.mjs` | 随机路径冒烟测试 |
| 隐藏结局测试 | `node tools/test_hidden_endings.mjs` | 检查全局 flag 触发的隐藏路径 |
| 浏览器 DOM 冒烟测试 | `NODE_PATH=$(npm root -g) node tools/test_browser_boot.cjs` | 验证浏览器启动流程 |
| 小游戏打包 | `node tools/bundle-stories-for-minigame.mjs` | 将故事打包为小游戏 bundle |

### 提交前检查

1. 运行 `node tools/validate_stories.mjs` 确保没有坏引用
2. 运行 `node tools/validate_npc_references.mjs` 确认 NPC 引用合法（choice.npc / choice.npcNode 指向存在的 NPC 与对话节点）
3. 运行 `node tools/detect_dead_scenes.mjs` 确认没有新增死场景
4. 运行 `node tools/validate_choice_conditions.mjs` 确认选项条件合法
5. 运行 `node tools/test_all_endings_reachability.mjs` 确认新增结局可达
6. 运行 `node tools/test_scene_factory.mjs`、`test_effect_engine.mjs`、`test_ending_factory.mjs`、`test_renderer.mjs`、`test_save_manager.mjs` 确认引擎单元测试通过
7. 在浏览器中打开本地服务器，手动走通关键路径

### CI 流程

项目使用 `.github/workflows/ci.yml`，在 `push` / `pull_request` 到 `main` 分支时触发，共 15 项检查：

1. `tools/validate_stories.mjs` — 故事数据引用完整性
2. `tools/validate_scene_titles.mjs` — 场景标题合法性
3. `tools/test_all_endings_reachability.mjs` — 结局可达性
4. `tools/test_scene_factory.mjs` — 场景工厂
5. `tools/test_effect_engine.mjs` — 效果引擎
6. `tools/test_ending_factory.mjs` — 结局/NPC 工厂
7. `tools/test_renderer.mjs` — 渲染器（jsdom）
8. `tools/test_save_manager.mjs` — 存档管理器
9. `tools/test_browser_boot.cjs` — 浏览器 DOM 冒烟测试
10. `tools/validate_choice_conditions.mjs` — 选项条件合法性
11. `tools/validate_npc_references.mjs` — NPC 引用合法性（阻塞级别）
12. `tools/detect_duplicate_scenes.mjs` — 场景定义重复检测
13. `tools/detect_dead_scenes.mjs` — 死场景检测（`continue-on-error: true`）
14. `tools/validate_item_flag_usage.mjs` — flag/item 引用检查（`continue-on-error: true`）

> 注：前 12 步为阻塞检查，失败将中断 CI；最后 2 步为非阻塞提示。

CI 默认安装全局 `jsdom` 以支持浏览器环境冒烟测试与 renderer 单元测试。

### 分支策略

- `main` - 生产就绪代码，触发 GitHub Pages 自动部署
- `fix/*` - Bug 修复
- `feat/*` - 新功能或新故事章节

## 常见任务

### 修改现有场景文本

1. 找到对应故事目录，例如 `stories/huimen/scenes/`
2. 根据文件名或 `title` 定位场景模块
3. 修改 `text` 或 `choices` 字段
4. 运行验证脚本

### 添加新场景

**需修改的文件**：
1. `stories/{id}/scenes/[theme].js` - 在新文件或现有主题模块中定义场景
2. `stories/{id}/index.js` - 导入并合并新场景

**步骤**：
1. 按主题选择或新建 `scenes/[theme].js`
2. 使用工厂函数或对象字面量定义场景：

```javascript
import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
  new_scene: createScene('new_scene', {
    title: '新场景',
    text: '场景正文……',
    choices: [
      createChoice({ text: '前进', next: 'next_scene' }),
      createChoice({ text: '隐藏', next: 'secret_scene', condition: { flag: 'found_key' }, hidden: true })
    ]
  })
};
```

3. 确保至少有一个已有场景的 `next` 指向新场景 id
4. 运行 `node tools/validate_stories.mjs`
5. 运行 `node tools/detect_dead_scenes.mjs`
6. 运行 `node tools/test_all_endings_reachability.mjs` 检查可达性

### 添加新结局

**需修改的文件**：
1. `stories/{id}/endings/index.js` - 添加结局定义
2. 触发场景 - 将某个场景的 `next` 设为结局 id，或让 `onEnter` 触发结局

**示例**：

```javascript
import { createEnding } from '../../../js/engine/endingFactory.js';

export const Endings = {
  ending_new: createEnding('ending_new', {
    title: '新结局',
    text: '结局描述……',
    hidden: false,
    cg: 'ending_new_cg'
  })
};
```

**示例提交**：`feat(huimen): add hidden ending for Qing Shi Town discovery`

### 添加跨卷彩蛋

**需修改的文件**：
1. `js/engine/storyExtensions.js` - 在对应故事的处理函数中注入条件选择
2. 源故事 - 确保会写入对应的 `GlobalFlag`

跨卷 flag 保存在 `localStorage` 的 `huimen_global_flags` 中。

### 修复 Bug

**流程**：
1. 在浏览器控制台复现问题
2. 定位相关引擎文件或场景数据
3. 用最小改动修复
4. 运行验证脚本
5. 手动复测

## 编码规范

### 文件组织

- 引擎：每个文件负责一个子系统，如 `state.js`、`renderer.js`
- 故事：按主题/地点拆分为 `scenes/*.js`， endings 与 npcs 单独目录
- 样式：通用样式在 `css/`，组件样式文件名与组件对应
- **文件行数上限 200 行**：单个 `.js` 文件超过 200 行时必须拆分。NPC 文件按 NPC 拆为独立文件 + `index.js` 聚合；场景聚合文件按前缀分组为子聚合文件（如 `_base.js`、`_exp.js`）

### 命名

| 类型 | 约定 | 示例 |
|------|------|------|
| 引擎文件 | kebab-case | `story-loader.js`（实际使用 `storyLoader.js`） |
| 场景模块 | snake_case | `exp_village_street_core.js` |
| 场景 ID | camelCase / snake_case | `inspectPaperDolls`, `exp_village_street_core` |
| 常量 | SCREAMING_SNAKE | `DEFAULT_STATE` |
| 导出 | camelCase | `StoryData`, `Endings`, `NPCs` |

### 错误处理

引擎代码倾向于在控制台警告并降级，避免阻塞玩家：

```javascript
// 推荐
console.warn('patchGameState: 不允许写入的键:', key);
return;

// 避免
throw new Error('Something went wrong');
```

故事数据中的无效引用应通过 `tools/validate_stories.mjs` 提前发现。

### 日志

- 开发时使用 `console.warn` 标记状态写入越界
- 避免在生产代码中保留高频 `console.log`

## 调试技巧

1. 浏览器控制台输入 `Huimen` 可查看完整命名空间
2. `Huimen.GameState` 实时查看当前状态
3. `Huimen.StoryData` 查看当前故事全部场景
4. `Huimen.GlobalFlags` 查看跨卷 flag
5. 本地服务器运行时可在 Sources 面板直接调试 ES 模块

## 发布部署

### GitHub Pages

仓库已配置 `.github/workflows/static.yml`：

1. 推送代码到 `main`
2. GitHub Actions 自动部署到 Pages
3. 等待 1–3 分钟后访问 https://ct-jaryn.github.io/paper-bride-horror-game/

### 微信小程序

1. 使用微信开发者工具打开 `weapp/` 目录
2. 进行真机调试与上传
3. 注意小程序环境对 ES Modules 与 `localStorage` 的限制由 `js/weapp-bridge.js` 处理
