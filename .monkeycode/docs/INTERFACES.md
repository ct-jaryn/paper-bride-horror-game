# 阴阳簿 接口文档

本文档定义《阴阳簿》引擎与故事模块之间的数据契约，以及引擎暴露给故事数据和外部 UI 的公共 API。

## 故事模块导出契约

每个 `stories/{id}/index.js` 必须导出以下对象：

```javascript
export const StoryData = { /* sceneId -> Scene */ };
export const Endings = { /* endingId -> Ending */ };
export const NPCs = { /* npcId -> NPC */ };           // 可选
export const StoryConfig = { /* 故事级配置 */ };      // 可选
```

### StoryConfig 结构

```javascript
{
  title: '回门',
  defaultState: {
    // 覆盖 DEFAULT_STATE 中的默认值
    sanity: 80,
    time: 1200,
    // 故事特有初始 flag
    flags: { knowsTruth: false }
  },
  timePhases: [
    { name: '戌时三刻', start: 1140, end: 1200 },
    { name: '亥时', start: 1200, end: 1320 }
    // ...
  ]
}
```

## 场景（Scene）结构

```javascript
{
  id: 'prologue',           // 唯一标识
  title: '归乡',            // 场景标题，显示在选择记录与调试中
  text: '祖母病逝……',      // 场景正文（支持 HTML）
  effects: {                // 可选：进入场景时生效的数值/物品效果
    sanity: -5,
    addItem: '纸人碎片'
  },
  choices: [                // 可选：玩家可选项
    createChoice({ text: '进村', next: 'village_gate' })
  ],
  condition: { hasItem: '灯笼' }, // 可选：场景显示/进入条件
  hallucination: '幻觉文本', // 可选：低理智时展示的幻觉文本
  cg: 'cg_prologue',        // 可选：进入场景时展示 CG
  onEnter: function() {     // 可选：进入时执行副作用
    adjustNumber('sanity', -5, 0, 100);
  },
  ending: 'ending_id'       // 可选：进入该场景直接触发结局
}
```

### 字段说明

| 字段 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `id` | `string` | 是 | 场景唯一标识 |
| `title` | `string` | 是 | 场景标题 |
| `text` | `string` | 是 | 场景正文 |
| `effects` | `object` | 否 | 进入场景时生效的数值/物品效果 |
| `choices` | `Choice[]` | 否 | 玩家可选项 |
| `condition` | `object/function` | 否 | 场景显示/进入条件 |
| `hallucination` | `string` | 否 | 低理智时替换或追加的幻觉文本 |
| `cg` | `string` | 否 | CG 图片/占位 id |
| `onEnter` | `function` | 否 | 进入场景时调用 |
| `ending` | `string` | 否 | 进入后直接触发的结局 id |

## 选择（Choice）结构

```javascript
{
  text: '检查纸人',
  next: 'paper_doll_inspect',
  ending: 'ending_burn',
  condition: (state) => state.flags.hasMirror === true,
  effect: (state) => {
    state.sanity -= 10;
    state.inventory.push('paper_eye');
  },
  effects: { sanity: -10, addItem: 'paper_eye' },
  consume: 'talisman',
  setFlag: { key: 'inspectedDoll', value: true, target: 'game' },
  hideIf: (state) => state.flags.inspectedDoll,
  hidden: true,
  npc: 'yun_po',
  npcNode: 'start',
  danger: true,
  exit: false,
  custom: true
}
```

### 字段说明

| 字段 | 类型 | 描述 |
|------|------|------|
| `text` | `string` | 按钮文本 |
| `next` | `string` | 跳转目标场景 id |
| `ending` | `string` | 触发的结局 id（与 `next` 互斥） |
| `condition` | `(state) => boolean` / `object` | 满足条件才显示 |
| `hideIf` | `(state) => boolean` / `object` | 满足条件则隐藏（不显示但可能触发） |
| `effect` | `(state) => void` | 选择后立即执行的副作用函数 |
| `effects` | `object` | 选择后立即执行的数值/物品效果 |
| `consume` | `string` | 消耗的物品 id |
| `setFlag` | `object` | 设置 game/global/both flag |
| `hidden` | `boolean` | 是否以隐藏选项形式存在 |
| `npc` | `string` | 进入的 NPC 对话 id |
| `npcNode` | `string` | NPC 对话入口节点 |
| `danger` | `boolean` | 是否为危险选项（UI 标红） |
| `exit` | `boolean` | 是否为退出选项 |
| `custom` | `boolean` | 是否自定义处理（不执行默认跳转） |

## 结局（Ending）结构

```javascript
{
  id: 'ending_burn',
  title: '纸人替身',
  text: '你被纸人代替，成了灶膛里的一捧灰……',
  description: '被纸人取代的坏结局',
  unlockCondition: null,
  condition: { flag: 'replacedByPaperDoll' },
  hidden: false,
  cg: 'ending_burn_cg'
}
```

### 字段说明

| 字段 | 类型 | 描述 |
|------|------|------|
| `id` | `string` | 结局唯一标识 |
| `title` | `string` | 结局标题 |
| `text` | `string` | 结局描述文本 |
| `description` | `string` | 结局简述，用于图鉴列表 |
| `unlockCondition` | `(state) => boolean` | 结局图鉴中显示的解锁条件提示 |
| `condition` | `object` | 触发/解锁该结局的条件对象 |
| `hidden` | `boolean` | 是否在未解锁时隐藏 |
| `cg` | `string` | 结局 CG id |

## NPC 结构

```javascript
{
  id: 'xiulan',
  name: '秀兰',
  title: '三十年前被活埋的新娘',
  description: '井底红衣女子',
  affinity: 0,              // 好感度，-100 到 100
  maxAffinity: 100,
  minAffinity: -100,
  dialogue: {
    start: {
      id: 'start',
      text: '你来了。',
      choices: [
        { text: '你是谁', next: 'who_are_you' },
        { text: '离开', exit: true }
      ]
    }
  },
  effects: { sanity: 5 }
}
```

### 字段说明

| 字段 | 类型 | 描述 |
|------|------|------|
| `id` | `string` | NPC 唯一标识 |
| `name` | `string` | NPC 名称 |
| `title` | `string` | NPC 称号 |
| `description` | `string` | NPC 描述 |
| `affinity` | `number` | 初始好感度 |
| `maxAffinity` | `number` | 最大好感度 |
| `minAffinity` | `number` | 最小好感度 |
| `dialogue` | `object` | 对话节点图，`nodeId -> DialogueNode` |
| `effects` | `object` | 交互效果 |

## 对话节点（DialogueNode）结构

```javascript
{
  id: 'start',
  text: '节点文本',
  choices: [
    { text: '继续', next: 'node_2' },
    { text: '退出', exit: true }
  ],
  effects: { yin: 5 },
  next: 'next_scene',
  exit: false
}
```

### 字段说明

| 字段 | 类型 | 描述 |
|------|------|------|
| `id` | `string` | 节点唯一标识 |
| `text` | `string` | 节点文本 |
| `choices` | `DialogueChoice[]` | 对话选项 |
| `effects` | `object` | 进入节点时生效的效果 |
| `next` | `string` | 退出对话后跳转的场景 id |
| `exit` | `boolean` | 是否直接退出对话 |

## 对话选项（DialogueChoice）结构

```javascript
{
  text: '询问真相',
  next: 'truth_node',
  exit: true,
  condition: { flag: 'met' },
  effects: { sanity: 10 }
}
```

### 字段说明

| 字段 | 类型 | 描述 |
|------|------|------|
| `text` | `string` | 按钮文本 |
| `next` | `string` | 跳转节点 id |
| `exit` | `boolean` | 是否退出对话 |
| `condition` | `object/function` | 显示条件 |
| `effects` | `object` | 选择后效果 |

## 工厂函数 API

### sceneFactory.js

```javascript
import { createScene, createChoice } from '../js/engine/sceneFactory.js';

const scene = createScene('new_scene', {
  title: '新场景',
  text: '场景正文',
  effects: { sanity: -5, addItem: '铜镜碎片' },
  choices: [createChoice({ text: '前进', next: 'next_scene' })],
  condition: { hasItem: '灯笼' },
  hallucination: '幻觉文本',
  cg: 'cg_id',
  onEnter: (state) => { /* ... */ },
  ending: 'ending_id'
});
```

| 函数 | 签名 | 说明 |
|------|------|------|
| `createScene` | `(id, options) => Scene` | 创建场景对象，仅写入非空字段 |
| `createChoice` | `(options) => Choice` | 创建选择对象，支持 `next`/`ending`/`npc`/`danger`/`exit` 等字段 |

### endingFactory.js

```javascript
import {
  createEnding,
  createNPC,
  createDialogueNode,
  createDialogueChoice
} from '../js/engine/endingFactory.js';

const ending = createEnding('ending_new', {
  title: '新结局',
  text: '结局正文',
  description: '结局简述',
  hidden: true,
  condition: { flag: 'unlocked' },
  cg: 'ending_cg'
});

const npc = createNPC('npc_id', {
  name: 'NPC 名称',
  title: '称号',
  dialogue: {
    start: createDialogueNode('start', {
      text: '节点文本',
      choices: [createDialogueChoice({ text: '继续', next: 'node_2' })]
    })
  },
  affinity: 0,
  effects: { sanity: 5 }
});
```

| 函数 | 签名 | 说明 |
|------|------|------|
| `createEnding` | `(id, options) => Ending` | 创建结局对象，`id` 不会被 `options` 覆盖 |
| `createNPC` | `(id, options) => NPC` | 创建 NPC 对象，包含对话节点图 |
| `createDialogueNode` | `(nodeId, options) => DialogueNode` | 创建 NPC 对话节点 |
| `createDialogueChoice` | `(options) => DialogueChoice` | 创建 NPC 对话选项 |

## 引擎公共 API

以下 API 挂在 `window.Huimen` 命名空间上：

### 故事与状态

| API | 签名 | 说明 |
|------|------|------|
| `Huimen.loadStory` | `(storyId, forceReset = false) => void` | 加载指定故事 |
| `Huimen.showScreen` | `(screenId) => void` | 切换显示屏幕 |
| `Huimen.GameState` | `object` | 当前游戏状态（只读建议） |
| `Huimen.GlobalFlags` | `object` | 跨卷全局 flag |
| `Huimen.StoryData` | `object` | 当前故事场景字典 |
| `Huimen.Endings` | `object` | 当前故事结局字典 |
| `Huimen.NPCs` | `object` | 当前故事 NPC 字典 |

### 记录与历程

| API | 签名 | 说明 |
|------|------|------|
| `Huimen.getChoiceLog` | `() => array` | 获取本局选择日志 |
| `Huimen.exportChoiceLog` | `() => string` | 导出选择记录文本 |
| `Huimen.openRecordOverlay` | `() => void` | 打开命簿记录浮层 |
| `Huimen.closeRecordOverlay` | `() => void` | 关闭命簿记录浮层 |
| `Huimen.openJourneyOverlay` | `() => void` | 打开阴阳历程浮层 |
| `Huimen.closeJourneyOverlay` | `() => void` | 关闭阴阳历程浮层 |
| `Huimen.openEndingGallery` | `() => void` | 打开结局图鉴 |

### 事件系统

```javascript
Huimen.GameEvents.on('gameInit', (data) => { /* ... */ });
Huimen.GameEvents.on('endingShown', (ending) => { /* ... */ });
Huimen.GameEvents.emit('someEvent', payload);
```

### 状态操作（推荐通过 state.js 导入）

```javascript
import {
  updateState,
  adjustNumber,
  setFlag,
  setGlobalFlag,
  pushToArray
} from './engine/state.js';

adjustNumber('sanity', -10, 0, 100);
setFlag('knowsTruth', true, 'both');
pushToArray('inventory', 'copper_mirror', { unique: true });
```

## 屏幕 ID

```javascript
'title'            // 标题画面
'storySelect'      // 故事选择
'game'             // 游戏主画面
'ending'           // 结局画面
'achievements'     // 成就面板
```

## 状态键白名单

`state.js` 只允许更新以下键：

```javascript
['sanity', 'yin', 'time', 'inventory', 'flags', 'currentScene', 'history', 'choiceLog', 'lastSaveAt', 'reviveCheckpoints', 'npcState']
```

故事数据通过 `effect` 回调直接修改 `state` 对象时不受白名单限制，但建议只操作 `flags`、`inventory`、`sanity`、`yin`、`time`。
