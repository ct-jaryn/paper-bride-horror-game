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
  cg: 'cg_prologue',        // 可选：进入场景时展示 CG
  onEnter: function() {     // 可选：进入时执行副作用
    adjustNumber('sanity', -5, 0, 100);
  },
  choices: [
    {
      text: '进村',
      next: 'village_gate',
      condition: null,
      effect: null,
      consume: null,
      setFlag: { key: 'enteredVillage', value: true }
    }
  ]
}
```

### 字段说明

| 字段 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `id` | `string` | 是 | 场景唯一标识 |
| `title` | `string` | 是 | 场景标题 |
| `text` | `string` | 是 | 场景正文 |
| `cg` | `string` | 否 | CG 图片/占位 id |
| `onEnter` | `function` | 否 | 进入场景时调用 |
| `choices` | `Choice[]` | 否 | 玩家可选项 |

## 选择（Choice）结构

```javascript
{
  text: '检查纸人',
  next: 'paper_doll_inspect',
  condition: (state) => state.flags.hasMirror === true,
  effect: (state) => {
    state.sanity -= 10;
    state.inventory.push('paper_eye');
  },
  consume: 'talisman',
  setFlag: { key: 'inspectedDoll', value: true, target: 'game' },
  hideIf: (state) => state.flags.inspectedDoll
}
```

### 字段说明

| 字段 | 类型 | 描述 |
|------|------|------|
| `text` | `string` | 按钮文本 |
| `next` | `string` | 跳转目标场景 id 或结局 id |
| `condition` | `(state) => boolean` | 满足条件才显示 |
| `hideIf` | `(state) => boolean` | 满足条件则隐藏（不显示但可能触发） |
| `effect` | `(state) => void` | 选择后立即执行的副作用 |
| `consume` | `string` | 消耗的物品 id |
| `setFlag` | `object` | 设置 game/global/both flag |

## 结局（Ending）结构

```javascript
{
  id: 'ending_burn',
  title: '纸人替身',
  text: '你被纸人代替，成了灶膛里的一捧灰……',
  unlockCondition: null,
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
| `unlockCondition` | `(state) => boolean` | 结局图鉴中显示的解锁条件 |
| `hidden` | `boolean` | 是否在未解锁时隐藏 |
| `cg` | `string` | 结局 CG id |

## NPC 结构

```javascript
{
  id: 'xiulan',
  name: '秀兰',
  description: '三十年前被活埋的新娘',
  affinity: 0,              // 好感度，-100 到 100
  maxAffinity: 100,
  minAffinity: -100
}
```

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
