/**
 * 死场景检测脚本
 *
 * 从 prologue 出发，沿着 next/ending/npc 等引用做可达性分析，
 * 找出没有任何路径可达的场景。
 */

import { StoryManifest } from '../stories/manifest.js';

const storyIds = StoryManifest.map(s => s.id);
let hasDead = false;

function getReferences(scene) {
    const refs = [];
    if (!scene) return refs;

    // 场景自身的跳转
    if (scene.next) refs.push(scene.next);

    // choices 中的跳转
    if (Array.isArray(scene.choices)) {
        for (const c of scene.choices) {
            if (!c) continue;
            if (c.next) refs.push(c.next);
            if (c.npcNode) refs.push(c.npcNode); // NPC 节点暂按 id 处理
            // ending/npc/event/action/exit 不算场景跳转
        }
    }

    return refs;
}

for (const storyId of storyIds) {
    const module = await import(`../stories/${storyId}/index.js`);
    const StoryData = module.StoryData;
    const sceneIds = Object.keys(StoryData);

    const reachable = new Set();
    const queue = ['prologue'];
    reachable.add('prologue');

    while (queue.length > 0) {
        const id = queue.shift();
        const scene = StoryData[id];
        if (!scene) continue;

        for (const ref of getReferences(scene)) {
            if (StoryData[ref] && !reachable.has(ref)) {
                reachable.add(ref);
                queue.push(ref);
            }
        }
    }

    const dead = sceneIds.filter(id => !reachable.has(id));
    if (dead.length > 0) {
        hasDead = true;
        console.error(`[${storyId}] DEAD SCENES (${dead.length}):`);
        for (const id of dead) console.error(`  - ${id}`);
    } else {
        console.log(`[${storyId}] OK: no dead scenes (${sceneIds.length} total)`);
    }
}

if (hasDead) {
    console.error('\n存在死场景，请检查是否需要清理或补全引用。');
    process.exit(1);
} else {
    console.log('\n所有场景均可从 prologue 到达。');
}
