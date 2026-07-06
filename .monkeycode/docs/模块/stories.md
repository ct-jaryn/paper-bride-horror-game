# stories

故事数据目录，包含《阴阳簿》全部七卷故事。每卷按新模块化架构拆分为 `scenes/`、`endings/`、`npcs/` 与配置文件。

## 结构

```
stories/
├── manifest.js         # 七卷故事清单
├── huimen/             # 《回门》
│   ├── index.js        # 聚合所有子模块
│   ├── config.js       # 故事配置
│   ├── scenes/         # 场景模块（按主题分组）
│   ├── endings/        # 结局数据
│   └── npcs/           # NPC 数据
├── shouye/             # 《守夜》
├── xitai/              # 《戏台》
├── tishen/             # 《替身》
├── heniang/            # 《河娘》
├── hujia/              # 《狐嫁》
└── ganshi/             # 《赶尸》
```

## 关键文件

| 文件 | 目的 |
|------|------|
| `manifest.js` | 注册所有可玩故事，供 `storyLoader.js` 读取 |
| `{id}/index.js` | 故事入口，聚合 `StoryData`、`Endings`、`NPCs`、`StoryConfig` |
| `{id}/config.js` | 故事级配置：默认状态、时辰阶段、特殊规则 |
| `{id}/scenes/*.js` | 按主题/地点拆分的场景模块 |
| `{id}/endings/index.js` | 结局字典 |
| `{id}/npcs/index.js` | NPC 字典 |

## 依赖

**本模块依赖**：
- `js/engine/storyLoader.js` - 加载并解析故事模块
- `js/engine/renderer.js` - 渲染场景与结局
- `js/engine/storyExtensions.js` - 注入跨卷彩蛋

**依赖本模块的**：
- `js/engine/storyLoader.js` - 动态 import
- `tools/validate_stories.mjs` - 验证引用完整性
- `tools/test_all_endings_reachability.mjs` - 测试结局可达性

## 规范

### 文件命名
- 场景模块：snake_case，如 `exp_village_street_core.js`
- 结局/NPC 入口：`index.js`
- 故事目录名：拼音小写，如 `huimen`、`shouye`

### 代码模式

**场景模块标准导出（推荐工厂函数）**：

```javascript
import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
  scene_id: createScene('scene_id', {
    id: 'scene_id',
    title: '场景标题',
    text: '场景正文',
    choices: [
      createChoice({ text: '选择文本', next: 'next_scene_id' })
    ]
  })
};
```

**对象字面量仍然兼容**：

```javascript
export const scenes = {
  scene_id: {
    id: 'scene_id',
    title: '场景标题',
    text: '场景正文',
    choices: [
      { text: '选择文本', next: 'next_scene_id' }
    ]
  }
};
```

**故事入口聚合**：

```javascript
import { scenes as mainScenes } from './scenes/main.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';
import { StoryConfig } from './config.js';

export const StoryData = { ...mainScenes };
export { Endings, NPCs, StoryConfig };
```

### 错误处理
- 场景 id 冲突由 `index.js` 展开时后覆盖前，需作者自行保证唯一
- 坏引用通过 `tools/validate_stories.mjs` 在提交前捕获

### 测试
- `node tools/validate_stories.mjs`：引用完整性
- `node tools/validate_scene_titles.mjs`：场景标题合法性
- `node tools/detect_dead_scenes.mjs`：死场景检测
- `node tools/validate_choice_conditions.mjs`：选项条件合法性
- `node tools/validate_item_flag_usage.mjs`：flag/item 引用检查
- `node tools/test_all_endings_reachability.mjs`：结局可达性
- `node tools/playthrough_test.mjs`：随机路径冒烟

## 添加新文件

### 添加新故事

1. 在 `stories/` 下新建目录，如 `stories/xinxiang/`
2. 创建 `config.js`、`scenes/`、`endings/index.js`、`npcs/index.js`
3. 创建 `index.js` 聚合所有数据
4. 在 `stories/manifest.js` 中注册
5. 运行 `node tools/validate_stories.mjs`

### 添加新场景模块

1. 在 `stories/{id}/scenes/` 下新建文件
2. 定义并导出 `scenes` 对象
3. 在 `stories/{id}/index.js` 中导入并展开到 `StoryData`
4. 确保至少有一个现有 `next` 指向新场景
5. 运行验证脚本

**检查清单**：
- [ ] 所有场景有 `id`、`title`、`text`
- [ ] 所有 `next` 指向有效场景或结局
- [ ] 结局在 `endings/index.js` 中定义
- [ ] 新增模块已在 `index.js` 中导入
- [ ] 验证脚本通过
