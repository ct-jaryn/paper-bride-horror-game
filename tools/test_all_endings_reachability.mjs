import { StoryManifest } from '../stories/manifest.js';
import { applyEasterEggs } from '../js/engine/storyExtensions/index.js';
import { Huimen } from '../js/engine/namespace.js';

// 由 effectEngine.checkGameOver() 全局触发的结局，不通过场景图到达
const GLOBAL_TRIGGER_ENDINGS = new Set(['madness', 'eternalNight']);

const results = [];

for (const story of StoryManifest) {
    const storyId = story.id;
    const module = await import(`/workspace/stories/${storyId}/index.js`);

    // 模拟引擎加载
    Huimen.StoryData = module.StoryData;
    Huimen.Endings = module.Endings;
    Huimen.NPCs = module.NPCs || {};
    Huimen.CurrentStory = { id: storyId };
    applyEasterEggs();

    const StoryData = Huimen.StoryData;
    const Endings = Huimen.Endings;

    // 构建反向图：scene -> 哪些场景可以到达它
    const reverse = {};
    for (const id of Object.keys(StoryData)) reverse[id] = [];

    for (const [id, scene] of Object.entries(StoryData)) {
        // scene.ending 不影响反向图，因为结局是终点
        if (scene.choices) {
            for (const c of scene.choices) {
                if (c.next && reverse[c.next]) {
                    reverse[c.next].push(id);
                }
            }
        }
    }

    // 对每个 ending，找到能到达它的场景，然后从这些场景反向 BFS 到 prologue
    const unreachableEndings = [];
    const reachableEndings = [];
    const globalEndings = [];

    for (const endingId of Object.keys(Endings)) {
        if (GLOBAL_TRIGGER_ENDINGS.has(endingId)) {
            globalEndings.push({ endingId, title: Endings[endingId]?.title });
            continue;
        }
        // 找到所有能到达该 ending 的场景
        const entryScenes = [];
        for (const [id, scene] of Object.entries(StoryData)) {
            if (scene.ending === endingId) entryScenes.push(id);
            if (scene.choices) {
                for (const c of scene.choices) {
                    if (c.ending === endingId) {
                        entryScenes.push(id);
                        break;
                    }
                }
            }
        }

        let pathFound = false;
        let shortestPath = null;

        for (const entry of entryScenes) {
            const dist = { [entry]: 0 };
            const parent = { [entry]: null };
            const queue = [entry];
            while (queue.length) {
                const id = queue.shift();
                if (id === 'prologue') {
                    pathFound = true;
                    // reconstruct path
                    const path = [];
                    let cur = 'prologue';
                    while (cur) {
                        path.unshift(cur);
                        cur = parent[cur];
                    }
                    if (!shortestPath || path.length < shortestPath.length) {
                        shortestPath = path;
                    }
                    break;
                }
                for (const prev of reverse[id]) {
                    if (!(prev in dist)) {
                        dist[prev] = dist[id] + 1;
                        parent[prev] = id;
                        queue.push(prev);
                    }
                }
            }
            if (pathFound && shortestPath && shortestPath.length <= 2) break; // early stop for trivial
        }

        if (pathFound) {
            reachableEndings.push({ endingId, title: Endings[endingId]?.title, path: shortestPath });
        } else {
            unreachableEndings.push({ endingId, title: Endings[endingId]?.title, entryScenes });
        }
    }

    results.push({ storyId, total: Object.keys(Endings).length, reachable: reachableEndings.length, unreachable: unreachableEndings, global: globalEndings, reachableList: reachableEndings });
}

console.log('# 所有故事结局可达性测试报告\\n');
for (const r of results) {
    const structuralTotal = r.reachable + r.unreachable.length;
    const pct = structuralTotal > 0 ? ((r.reachable / structuralTotal) * 100).toFixed(1) : '0.0';
    console.log(`## ${r.storyId}`);
    console.log(`- 总结局数: ${r.total}`);
    console.log(`- 结构可达: ${r.reachable} (${pct}%)`);
    console.log(`- 结构不可达: ${r.unreachable.length}`);
    if (r.unreachable.length > 0) {
        console.log('  不可达结局列表:');
        for (const u of r.unreachable) {
            console.log(`    - ${u.endingId}: ${u.title || '(no title)'} (入口场景: ${u.entryScenes.join(', ') || '无'})`);
        }
    }
    if (r.global.length > 0) {
        console.log(`- 全局触发结局: ${r.global.length}`);
        for (const g of r.global) {
            console.log(`    - ${g.endingId}: ${g.title || '(no title)'}`);
        }
    }
    console.log();
}

// Global summary
const totalEndings = results.reduce((a, b) => a + b.total, 0);
const totalUnreachable = results.reduce((a, b) => a + b.unreachable.length, 0);
const totalGlobal = results.reduce((a, b) => a + b.global.length, 0);
console.log(`## 汇总`);
console.log(`- 全部结局: ${totalEndings}`);
console.log(`- 结构不可达结局: ${totalUnreachable}`);
console.log(`- 全局触发结局: ${totalGlobal}`);
console.log(`- 结构整体可达率: ${(((totalEndings - totalUnreachable - totalGlobal) / (totalEndings - totalGlobal)) * 100).toFixed(1)}%`);
