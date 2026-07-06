/**
 * NPC 引用合法性检查
 *
 * 检查 choice 中的 NPC 引用是否合法：
 * - choice.npc 应指向该故事中存在的 NPC ID
 * - choice.npcNode 应指向该 NPC dialogue 中存在的节点 ID
 * - 若 npcNode 缺省，默认 'start'，应存在
 *
 * 阻塞级别：错误（CI 阻塞）
 */

import { StoryManifest } from '../stories/manifest.js';

const storyIds = StoryManifest.map(s => s.id);
let hasError = false;

function report(storyId, sceneId, choiceText, detail) {
    console.error(`[${storyId}] ${sceneId} "${choiceText}": ${detail}`);
    hasError = true;
}

for (const storyId of storyIds) {
    const module = await import(`/workspace/stories/${storyId}/index.js`);
    const StoryData = module.StoryData;
    const NPCs = module.NPCs || {};
    const npcIdSet = new Set(Object.keys(NPCs));
    let checked = 0;
    let npcRefs = 0;

    for (const [sceneId, scene] of Object.entries(StoryData)) {
        if (!scene || !Array.isArray(scene.choices)) continue;
        for (const c of scene.choices) {
            if (!c || typeof c !== 'object') continue;
            if (c.npc === undefined && c.npcNode === undefined) continue;
            checked++;
            npcRefs++;
            const choiceText = c.text || '(无文本)';
            const npcId = c.npc;
            const nodeId = c.npcNode || 'start';

            if (npcId === undefined) {
                report(storyId, sceneId, choiceText, `设置了 npcNode 但缺少 npc 字段`);
                continue;
            }
            if (typeof npcId !== 'string' || npcId.length === 0) {
                report(storyId, sceneId, choiceText, `npc 应为非空字符串，得到 ${JSON.stringify(npcId)}`);
                continue;
            }
            if (!npcIdSet.has(npcId)) {
                report(storyId, sceneId, choiceText, `npc 引用不存在的 NPC ID "${npcId}"，可用：${[...npcIdSet].join(', ') || '(无)'}`);
                continue;
            }
            const npc = NPCs[npcId];
            if (!npc || !npc.dialogue || typeof npc.dialogue !== 'object') {
                report(storyId, sceneId, choiceText, `npc "${npcId}" 缺少 dialogue 对象`);
                continue;
            }
            const nodeIds = new Set(Object.keys(npc.dialogue));
            if (!nodeIds.has(nodeId)) {
                report(storyId, sceneId, choiceText, `npcNode "${nodeId}" 在 NPC "${npcId}" 中不存在，可用：${[...nodeIds].join(', ')}`);
            }
        }
    }

    const npcCount = npcIdSet.size;
    console.log(`[${storyId}] OK: npcs=${npcCount}, npc_refs=${npcRefs}, checked=${checked}`);
}

if (hasError) {
    console.error('\n存在非法 NPC 引用，请修复。');
    process.exit(1);
} else {
    console.log('\n所有 NPC 引用合法。');
}
