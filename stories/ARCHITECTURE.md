# 故事模块化架构规范

## 目标

把每个故事从单一大文件拆分为独立目录结构，支持：
- 更大体量的文字内容
- 多人协作编写不同模块
- 按需加载与维护
- 清晰的场景/结局/NPC/配置分离

## 目录结构

```
stories/
├── manifest.js                 # 故事清单
└── {story_id}/                 # 每个故事独立目录
    ├── config.js               # 故事元数据、默认状态
    ├── index.js                # 聚合导出 StoryData/Endings/NPCs/StoryConfig
    ├── scenes/                 # 场景模块
    │   ├── prologue.js
    │   ├── entry.js
    │   └── ...
    ├── endings/                # 结局集合
    │   └── index.js
    └── npcs/                   # NPC 对话
        └── index.js
```

## 文件规范

### config.js

```javascript
export const StoryConfig = {
    id: 'shouye',
    title: '守夜',
    subtitle: '灵堂 · 诈尸 · 守灵人',
    difficulty: '简单',
    horrorLevel: 8,
    playTime: '60–90 分钟',
    tags: ['诈尸', '殡仪馆', '因果'],
    defaultState: {
        sanity: 100,
        yin: 0,
        time: 1170
    }
};
```

### scenes/*.js

每个文件导出一个 `scenes` 对象：

```javascript
export const scenes = {
    scene_id: {
        title: '场景标题',
        text: `场景正文...`,
        effects: { sanity: -5, yin: 5 },
        choices: [
            { text: '选项A', next: 'another_scene' },
            { text: '选项B', ending: 'some_ending' }
        ]
    }
};
```

### endings/index.js

```javascript
export const Endings = {
    ending_id: {
        title: '结局标题',
        text: `结局正文...`
    }
};
```

### npcs/index.js

```javascript
export const NPCs = {
    npc_id: {
        name: 'NPC名字',
        title: '身份',
        dialogue: { ... }
    }
};
```

### index.js

```javascript
import { scenes as prologueScenes } from './scenes/prologue.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...prologueScenes,
    ...
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
```

## manifest.js 注册

```javascript
{
    id: 'shouye',
    title: '守夜',
    ...
    scriptPath: 'stories/shouye/index.js'
}
```

## 场景分类建议

按主题/地点/功能分模块，例如：
- `prologue.js`：开场
- `entry.js`：入口分支
- `investigation.js`：调查探索
- `escape.js`：逃跑/躲避
- `ritual.js`：仪式/战斗
- `promise.js`：承诺/结局前奏
- `npc_name.js`：特定 NPC 相关场景

## 迁移工具

### 标准故事

使用 `/workspace/tools/split_story.py`：

```bash
python3 /workspace/tools/split_story.py xitai
python3 /workspace/tools/split_story.py tishen
python3 /workspace/tools/split_story.py heniang
python3 /workspace/tools/split_story.py hujia
python3 /workspace/tools/split_story.py ganshi
```

### 《回门》

《回门》使用 `story_huimen_expansion.js` 对主线做深拷贝扩展，结构特殊，需使用专用脚本：

```bash
node /workspace/tools/split_huimen.mjs
```

迁移后需手动：
1. 检查 `scenes/` 下的分类是否合理，调整 `classify()` 函数
2. 创建 `config.js`
3. 更新 `stories/manifest.js` 的 `scriptPath`
4. 运行引用完整性验证

## 验证命令

```bash
# 语法检查
node --check /workspace/stories/<id>/index.js

# 导入统计
node -e "import('/workspace/stories/<id>/index.js').then(m => console.log(Object.keys(m.StoryData).length, Object.keys(m.Endings).length))"

# 批量验证所有故事（推荐）
node /workspace/tools/validate_stories.mjs

# 随机走查测试：验证从 prologue 能走到结局
node /workspace/tools/playthrough_test.mjs --all
RUNS=50 node /workspace/tools/playthrough_test.mjs --all
```
