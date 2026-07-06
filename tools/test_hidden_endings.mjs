/**
 * 隐藏结局触发测试
 *
 * 模拟引擎加载故事后调用 applyEasterEggs，
 * 检查通过 storyExtensions.js 注入的隐藏结局触发选择是否生效。
 *
 * 用法：
 *   node /workspace/tools/test_hidden_endings.mjs
 */

import { StoryManifest } from '../stories/manifest.js';
import { Huimen } from '../js/engine/namespace.js';
import { applyEasterEggs } from '../js/engine/storyExtensions.js';

// 模拟加载故事
async function loadStory(storyId) {
    const module = await import(`/workspace/stories/${storyId}/index.js`);
    Huimen.StoryData = module.StoryData;
    Huimen.Endings = module.Endings;
    Huimen.NPCs = module.NPCs || {};
    Huimen.CurrentStory = { id: storyId };
    applyEasterEggs();
    return module;
}

for (const s of StoryManifest) {
    const module = await loadStory(s.id);
    const reachable = new Set();
    for (const [id, scene] of Object.entries(Huimen.StoryData)) {
        if (scene.ending && Huimen.Endings[scene.ending]) reachable.add(scene.ending);
        if (scene.choices) {
            for (const c of scene.choices) {
                if (c.ending && Huimen.Endings[c.ending]) reachable.add(c.ending);
            }
        }
    }
    const unreachable = Object.keys(Huimen.Endings).filter(e => !reachable.has(e));
    const newlyReachable = Object.keys(module.Endings).filter(e => reachable.has(e) && !wasReachable(module, e));
    console.log(`[${s.id}] reachable=${reachable.size}/${Object.keys(Huimen.Endings).length} unreachable=${unreachable.length}`);
    if (newlyReachable.length > 0) {
        console.log(`  newly reachable via easter eggs: ${newlyReachable.join(', ')}`);
    }
    if (unreachable.length > 0) {
        console.log(`  still unreachable: ${unreachable.slice(0, 5).join(', ')}${unreachable.length > 5 ? '...' : ''}`);
    }
}

function wasReachable(module, endingId) {
    for (const scene of Object.values(module.StoryData)) {
        if (scene.ending === endingId) return true;
        if (scene.choices) {
            for (const c of scene.choices) {
                if (c.ending === endingId) return true;
            }
        }
    }
    return false;
}
