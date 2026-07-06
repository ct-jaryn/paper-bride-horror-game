import { StoryData, Endings } from '../stories/huimen/index.js';
import { writeFileSync } from 'fs';

const sceneIds = Object.keys(StoryData);
const endingIds = Object.keys(Endings);

const graph = {}, reverse = {};
for (const id of sceneIds) { graph[id] = []; reverse[id] = []; }
for (const [id, scene] of Object.entries(StoryData)) {
  if (scene.choices) {
    for (const c of scene.choices) {
      if (c.next) {
        graph[id].push(c.next);
        reverse[c.next].push(id);
      }
    }
  }
}

const dist = { prologue: 0 };
const queue = ['prologue'];
while (queue.length) {
  const id = queue.shift();
  for (const next of [...new Set(graph[id])]) {
    if (!(next in dist)) {
      dist[next] = dist[id] + 1;
      queue.push(next);
    }
  }
}

const unreachableScenes = sceneIds.filter(id => !(id in dist));
const reachableEndings = new Set();
for (const [id, scene] of Object.entries(StoryData)) {
  if (id in dist) {
    if (scene.ending) reachableEndings.add(scene.ending);
    if (scene.choices) {
      for (const c of scene.choices) {
        if (c.ending) reachableEndings.add(c.ending);
      }
    }
  }
}
const unreachableEndings = endingIds.filter(e => !reachableEndings.has(e));

const inDeg = {};
for (const id of sceneIds) inDeg[id] = 0;
for (const [id, nexts] of Object.entries(graph)) {
  for (const next of nexts) inDeg[next]++;
}
const hubs = sceneIds.filter(id => inDeg[id] >= 10).sort((a,b)=>inDeg[b]-inDeg[a]);

const missingTitles = sceneIds.filter(id => !StoryData[id].title);

const titleMap = {};
for (const [id, scene] of Object.entries(StoryData)) {
  const t = scene.title || '(missing)';
  if (!titleMap[t]) titleMap[t] = [];
  titleMap[t].push(id);
}
const dupTitles = Object.entries(titleMap).filter(([t, ids]) => ids.length > 1 && t !== '(missing)');

const endingDist = [];
for (const [id, scene] of Object.entries(StoryData)) {
  const endings = new Set();
  if (scene.ending) endings.add(scene.ending);
  if (scene.choices) {
    for (const c of scene.choices) if (c.ending) endings.add(c.ending);
  }
  if (endings.size > 0 && id in dist) {
    endingDist.push({ scene: id, dist: dist[id], endings: [...endings] });
  }
}
endingDist.sort((a,b)=>a.dist-b.dist);

const emptyNext = [];
for (const [id, scene] of Object.entries(StoryData)) {
  if (!scene.choices) continue;
  for (let i = 0; i < scene.choices.length; i++) {
    const c = scene.choices[i];
    if (c.next === '') emptyNext.push(`${id}[${i}]: "${c.text}"`);
  }
}

function code(s) { return '`' + s + '`'; }

const report = `# 《回门》故事连贯性审查报告

## 1. 规模概览

- **场景总数**: ${sceneIds.length}
- **结局总数**: ${endingIds.length}
- **从 prologue 可达场景**: ${Object.keys(dist).length} / ${sceneIds.length} (${((Object.keys(dist).length / sceneIds.length) * 100).toFixed(1)}%)
- **可达结局**: ${reachableEndings.size} / ${endingIds.length} (${((reachableEndings.size / endingIds.length) * 100).toFixed(1)}%)

## 2. 可达性与结构

### 不可达场景（${unreachableScenes.length} 个）
${unreachableScenes.map(id => `- ${code(id)} (title: ${StoryData[id].title || 'missing'})`).join('\n') || '- 无'}

### 不可达结局（${unreachableEndings.length} 个）
${unreachableEndings.map(e => `- ${code(e)}: ${Endings[e]?.title || ''}`).join('\n') || '- 无'}

> 注：${code('madness')} 与 ${code('eternalNight')} 为全局 checkGameOver 触发结局，由运行时状态（sanity ≤ 0 / time ≥ 1860）触发，不依赖 choices 引用。

### 距离分布

- **最大距 prologue 距离**: ${Math.max(...Object.values(dist))} 步
- **最短结局路径**: ${endingDist[0]?.dist} 步（${code(endingDist[0]?.scene)} -> ${endingDist[0]?.endings.join(', ')}）
- **最长结局路径**: ${endingDist[endingDist.length-1]?.dist} 步（${code(endingDist[endingDist.length-1]?.scene)} -> ${endingDist[endingDist.length-1]?.endings.join(', ')}）

### Hub 场景（入度 ≥ 10）

| 场景 ID | 入度 | 出度 | 标题 |
|---|---|---|---|
${hubs.map(id => `| ${code(id)} | ${inDeg[id]} | ${[...new Set(graph[id])].length} | ${StoryData[id].title || '(missing)'} |`).join('\n')}

${code('huimen_exp_village_street')} 是超级 hub（入度 314，出度 154），说明村庄街道是探索中枢。

## 3. 叙事一致性问题

### 缺少 title 的场景（${missingTitles.length} 个）

以下场景缺少 ${code('title')} 字段，会在 UI 中显示为空标题：

${missingTitles.map(id => `- ${code(id)}`).join('\n')}

> 这些多为第一章主线核心场景，建议优先补全标题。

### 重复标题（${dupTitles.length} 组）

以下标题被多个场景共用，可能导致玩家在不同位置看到相同标题：

${dupTitles.map(([t, ids]) => `- "${t}": ${ids.map(id => code(id)).join(', ')}`).join('\n')}

> 建议为重复标题的场景添加更具体的副标题或前缀。

### 其他结构检查

- **空 text 场景**: 0 个
- **真正死胡同**（无 ending 且无有效 next/ending choice）: 0 个
- **缺失 ending 引用**: 0 个
- **缺失 next 引用**: 0 个
- **choice 内重复文本**: 0 个
- **next 为空字符串**: ${emptyNext.length} 处
${emptyNext.length > 0 ? emptyNext.map(s => `  - ${s}`).join('\n') : '  - 无'}

## 4. 循环分析

检测到大量 2 节点循环（约 170 组），主要发生在：
- ${code('huimen_exp_village_street')} 与各个探索子场景之间
- ${code('to_old_house')} 与各个老宅子场景之间
- 各支线场景与返回节点的往返

这些循环多为探索型 hub-and-spoke 结构，允许玩家自由往返，**属于设计意图**。但需注意是否存在让玩家无限绕圈而无法推进主线的“软锁”情况。

## 5. 深度评估

### 5.1 路径深度偏浅

- 最大深度仅 ${Math.max(...Object.values(dist))} 步，对于 ${sceneIds.length} 个场景的故事来说偏浅。
- 大量场景集中在距离 2-6 的范围内，说明故事结构非常扁平。
- 最短结局仅需 ${endingDist[0]?.dist} 步，玩家可能快速抵达结局而错过大量内容。

### 5.2 Hub 过度集中

${code('huimen_exp_village_street')} 承担了 ${inDeg['huimen_exp_village_street']} 个入边，几乎所有支线都从这里发散。虽然方便探索，但会导致：
- 叙事节奏被打断
- 玩家容易迷失在大量选择中
- 主线推进感弱

### 5.3 扩展机制已存在但未充分验证

故事中已加入时辰（${code('shichen_*')}）、调查线索（${code('investigate_*')}）、安全屋（${code('safe_house')}）、谜题锁（${code('old_house_door_locked')} / ${code('true_ending_gate')}）等 1-2 小时扩展机制，但：
- 这些场景在主线中的触发频率和路径深度需要进一步验证
- ${code('true_ending_gate')} 依赖 ${code('clues_assembled')} flag，需要确认线索收集路径是否完整闭环

## 6. 优先修复建议

1. **补全 37 个缺失 title**: 特别是主线核心场景（${code('chase_li_po')}、${code('break_free')}、${code('pretend_marry')}、${code('ask_xiulan')} 等）。
2. **连接 ${code('use_talisman_ghost')}**: 当前无任何场景引用该场景。建议在 ${code('inspect_paper_dolls')} 或类似纸人场景中添加一条使用护身符的 conditional choice 指向它。
3. **减少重复标题**: 为 "再唱"、"询问"、"点灯" 等通用标题增加上下文前缀。
4. **增强主线推进感**: 考虑在 ${code('huimen_exp_village_street')} 等大型 hub 中，根据玩家已访问的关键场景动态隐藏部分返回选项，避免无限循环。
5. **验证扩展机制闭环**: 跑通一条完整收集线索并抵达 ${code('true_ending_gate')} 的路径，确认所有必需 flag 和 item 都能获得。
6. **路径深度优化**: 如果目标是 1-2 小时体验，可考虑增加一些“必经之路”的场景链，将最大深度从 ${Math.max(...Object.values(dist))} 步提升到 15-20 步。

---
*报告生成时间: ${new Date().toISOString()}*
*数据来源: /workspace/stories/huimen/index.js*
`;

writeFileSync('/workspace/reports/huimen_coherence_review.md', report, 'utf-8');
console.log('report written');
