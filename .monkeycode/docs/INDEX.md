# 阴阳簿 项目文档

《阴阳簿》是一个基于纯前端技术栈的中式文字恐怖游戏集，七卷独立故事共享同一个阴阳世界观。本文档面向希望理解、维护或扩展该项目的开发者与内容创作者。

**快速链接**：[架构](./ARCHITECTURE.md) | [接口](./INTERFACES.md) | [开发者指南](./DEVELOPER_GUIDE.md) | [模块](#模块) | [核心概念](#核心概念)

---

## 核心文档

### [架构](./ARCHITECTURE.md)
系统概述、技术栈、项目结构、子系统划分与数据流程。从这里开始了解整个游戏如何运作。

### [接口](./INTERFACES.md)
故事模块与引擎之间的数据契约、场景/选择/结局的数据结构、引擎暴露的公共 API。

### [开发者指南](./DEVELOPER_GUIDE.md)
环境搭建、开发服务器、故事创作流程、调试与测试、发布部署步骤。

---

## 模块

| 模块 | 描述 | README |
|------|------|--------|
| `js/engine/` | 游戏引擎核心：状态、渲染、加载、音效、结局等 | [README](./模块/js-engine.md) |
| `stories/` | 七卷故事数据，按新模块化架构组织 | [README](./模块/stories.md) |
| `css/` | 全局与组件级样式 | — |
| `tools/` | 故事验证、可达性测试、重构辅助脚本 | — |

---

## 核心概念

理解这些概念有助于快速导航代码与数据：

| 概念 | 描述 |
|------|------|
| [Scene（场景）](./专有概念/Scene.md) | 故事的最小叙事单元，包含文本、选择、条件与副作用 |
| [Story（故事）](./专有概念/Story.md) | 由场景、结局、NPC 与配置组成的可玩一卷 |
| [Ending（结局）](./专有概念/Ending.md) | 故事的终止状态，包含标题、文本、解锁条件 |
| [State（状态）](./专有概念/State.md) | GameState、GlobalFlags、NPCState 的构成与管理 |
| [Choice（选择）](./专有概念/Choice.md) | 场景中的可选项，支持条件、消耗、副作用与跳转 |

---

## 入门路径

### 项目新人？

1. **[架构](./ARCHITECTURE.md)** - 了解全局
2. **[核心概念](#核心概念)** - 学习领域术语
3. **[开发者指南](./DEVELOPER_GUIDE.md)** - 搭建环境
4. **[接口](./INTERFACES.md)** - 探索数据契约

### 想写新故事？

1. **[Story 概念](./专有概念/Story.md)** - 理解故事模块结构
2. **[Scene 概念](./专有概念/Scene.md)** - 学习场景字段
3. **[Choice 概念](./专有概念/Choice.md)** - 学习选择机制
4. **[stories 模块 README](./模块/stories.md)** - 按现有约定创建新卷

### 想改引擎？

1. **[js/engine 模块 README](./模块/js-engine.md)** - 了解各引擎文件职责
2. **[State 概念](./专有概念/State.md)** - 理解状态边界
3. **[接口](./INTERFACES.md)** - 查看公开 API

---

## 快速参考

### 常用命令

```bash
# 启动本地开发服务器
python3 -m http.server 8765

# 验证所有故事数据
node tools/validate_stories.mjs

# 死场景检测
node tools/detect_dead_scenes.mjs

# 场景定义重复检测
node tools/detect_duplicate_scenes.mjs

# 选项条件合法性检查
node tools/validate_choice_conditions.mjs

# flag/item 引用检查
node tools/validate_item_flag_usage.mjs

# 测试结局可达性
node tools/test_all_endings_reachability.mjs

# 引擎单元测试
node tools/test_scene_factory.mjs
node tools/test_effect_engine.mjs
node tools/test_ending_factory.mjs
node tools/test_renderer.mjs
node tools/test_save_manager.mjs

# 随机 walkthrough 冒烟测试
node tools/playthrough_test.mjs
```

### 重要文件

| 文件 | 目的 |
|------|------|
| `index.html` | 应用入口与所有 UI 屏幕 |
| `js/main.js` | ES Module 启动入口 |
| `js/engine/namespace.js` | 全局命名空间 `Huimen` |
| `stories/manifest.js` | 七卷故事清单 |
| `stories/huimen/index.js` | 模块化故事入口示例 |
