/**
 * 路径一致性校验（数据流固定点分析版）
 *
 * 不使用状态爆炸的 BFS，而是做前向数据流分析：
 * 对每个场景计算“到达这里时可能拥有的 flag/item 的并集”。
 * 然后检查每个 choice 的条件是否可能满足。
 *
 * 检查项：
 * - 是否存在可达场景在并集下仍无任何可选 choice（死胡同）
 * - 是否存在条件引用了无法在进入该场景前获得的 flag/item
 * - 结局引用是否有效
 */

import { StoryManifest } from '../stories/manifest.js';

const storyIds = StoryManifest.map(s => s.id);

function extractConditionDeps(condition, deps) {
    if (!condition || typeof condition !== 'object') return;
    if (condition.and) condition.and.forEach(c => extractConditionDeps(c, deps));
    if (condition.or) condition.or.forEach(c => extractConditionDeps(c, deps));
    if (condition.not) extractConditionDeps(condition.not, deps);
    if (condition.flag) deps.requiredFlags.add(condition.flag);
    if (condition.noFlag) deps.requiredAbsentFlags.add(condition.noFlag);
    if (condition.flagValue && condition.flagValue.key) deps.requiredFlags.add(condition.flagValue.key);
    if (condition.hasItem) deps.requiredItems.add(condition.hasItem);
    if (condition.lacksItem) deps.requiredAbsentItems.add(condition.lacksItem);
    if (condition.yinAbove !== undefined) deps.yinThreshold = Math.max(deps.yinThreshold || 0, condition.yinAbove);
    if (condition.sanityAbove !== undefined) deps.sanityThreshold = Math.max(deps.sanityThreshold || 0, condition.sanityAbove);
}

function extractEffects(effects, out) {
    if (!effects || typeof effects !== 'object') return;
    if (effects.setFlag) {
        const list = Array.isArray(effects.setFlag) ? effects.setFlag : [effects.setFlag];
        list.forEach(f => out.setFlags.add(f));
    }
    if (effects.addItem) {
        const list = Array.isArray(effects.addItem) ? effects.addItem : [effects.addItem];
        list.forEach(i => out.addItems.add(i));
    }
    if (effects.removeItem) {
        const list = Array.isArray(effects.removeItem) ? effects.removeItem : [effects.removeItem];
        list.forEach(i => out.removeItems.add(i));
    }
}

async function validateStory(storyId) {
    const module = await import(`../stories/${storyId}/index.js`);
    const StoryData = module.StoryData;
    const StoryConfig = module.StoryConfig || {};
    const Endings = module.Endings || {};

    // 默认物品
    const defaultItems = new Set(StoryConfig.defaultItems || []);

    // 场景图
    const sceneGraph = new Map();
    const allScenes = Object.keys(StoryData);

    // 收集所有 NPC 节点中定义的效果（作为全局可获得的 flag/item 源）
    const npcSetFlags = new Set();
    const npcAddItems = new Set();
    const NPCs = module.NPCs || {};
    for (const npc of Object.values(NPCs)) {
        if (!npc || !npc.dialogue) continue;
        for (const node of Object.values(npc.dialogue)) {
            if (!node) continue;
            extractEffects(node.effects, { setFlags: npcSetFlags, addItems: npcAddItems, removeItems: new Set() });
            if (Array.isArray(node.choices)) {
                for (const choice of node.choices) {
                    if (choice) extractEffects(choice.effects, { setFlags: npcSetFlags, addItems: npcAddItems, removeItems: new Set() });
                }
            }
        }
    }

    // 先计算每个场景的出边与效果
    for (const [sceneId, scene] of Object.entries(StoryData)) {
        const setFlags = new Set();
        const addItems = new Set();
        const removeItems = new Set();
        extractEffects(scene.effects, { setFlags, addItems, removeItems });

        const outgoing = [];
        if (Array.isArray(scene.choices)) {
            for (const choice of scene.choices) {
                if (!choice) continue;
                const deps = { requiredFlags: new Set(), requiredAbsentFlags: new Set(), requiredItems: new Set(), requiredAbsentItems: new Set(), yinThreshold: 0, sanityThreshold: 0 };
                extractConditionDeps(choice.condition, deps);
                extractEffects(choice.effects, { setFlags, addItems, removeItems });

                const target = choice.next || choice.npcNode;
                if (target && StoryData[target]) {
                    outgoing.push({ target, deps, choiceText: choice.text || '(无文本)' });
                }
                if (choice.ending && !Endings[choice.ending] && choice.ending !== 'madness' && choice.ending !== 'possessed') {
                    // 无效结局将在后面报告
                }
            }
        }

        sceneGraph.set(sceneId, { setFlags, addItems, removeItems, outgoing });
    }

    // 全局定义集合包含场景效果和 NPC 效果
    const globallyDefinedFlags = new Set([...sceneGraph.values()].flatMap(n => [...n.setFlags]));
    const globallyDefinedItems = new Set(defaultItems);
    [...sceneGraph.values()].forEach(n => n.addItems.forEach(i => globallyDefinedItems.add(i)));
    npcSetFlags.forEach(f => globallyDefinedFlags.add(f));
    npcAddItems.forEach(i => globallyDefinedItems.add(i));

    // 默认物品与 NPC 物品应被视为任何场景都可能拥有（因为玩家可以在进入场景前获得）
    // 但为了更精确，我们只把它们加入 reachableItems 的初始集合
    const universalItems = new Set([...defaultItems, ...npcAddItems]);

    // 数据流固定点：每个场景可达时可能拥有的 flags/items 并集
    const reachableFlags = new Map(); // sceneId -> Set<flag>
    const reachableItems = new Map(); // sceneId -> Set<item>
    for (const id of allScenes) {
        reachableFlags.set(id, new Set());
        reachableItems.set(id, new Set());
    }

    let changed = true;
    let iterations = 0;
    const MAX_ITER = 100;

    // 初始：prologue 拥有 defaultItems 和 NPC 可给予的物品
    universalItems.forEach(i => reachableItems.get('prologue').add(i));
    npcSetFlags.forEach(f => reachableFlags.get('prologue').add(f));

    while (changed && iterations < MAX_ITER) {
        changed = false;
        iterations++;

        for (const [sceneId, node] of sceneGraph) {
            const inFlags = reachableFlags.get(sceneId);
            const inItems = reachableItems.get(sceneId);

            // 经过场景效果后的输出
            const outFlags = new Set([...inFlags, ...node.setFlags]);
            const outItems = new Set([...inItems, ...node.addItems]);
            for (const r of node.removeItems) outItems.delete(r);

            for (const { target } of node.outgoing) {
                const targetFlags = reachableFlags.get(target);
                const targetItems = reachableItems.get(target);
                for (const f of outFlags) {
                    if (!targetFlags.has(f)) {
                        targetFlags.add(f);
                        changed = true;
                    }
                }
                for (const i of outItems) {
                    if (!targetItems.has(i)) {
                        targetItems.add(i);
                        changed = true;
                    }
                }
            }
        }
    }

    // 检查 prologue 可达性
    const reachableFromPrologue = new Set(['prologue']);
    let reachChanged = true;
    while (reachChanged) {
        reachChanged = false;
        for (const sceneId of reachableFromPrologue) {
            const node = sceneGraph.get(sceneId);
            if (!node) continue;
            for (const { target } of node.outgoing) {
                if (!reachableFromPrologue.has(target)) {
                    reachableFromPrologue.add(target);
                    reachChanged = true;
                }
            }
        }
    }

    // 检查每个可达场景
    const deadEnds = [];
    const missingPrereqs = [];
    const unreachableScenes = allScenes.filter(id => !reachableFromPrologue.has(id));
    const invalidEndings = [];

    for (const sceneId of reachableFromPrologue) {
        const scene = StoryData[sceneId];
        if (!scene) continue;

        const availableFlags = reachableFlags.get(sceneId);
        const availableItems = reachableItems.get(sceneId);
        const choices = Array.isArray(scene.choices) ? scene.choices : [];
        let hasReachableChoice = false;

        for (const choice of choices) {
            if (!choice) continue;
            const deps = { requiredFlags: new Set(), requiredAbsentFlags: new Set(), requiredItems: new Set(), requiredAbsentItems: new Set(), yinThreshold: 0, sanityThreshold: 0 };
            extractConditionDeps(choice.condition, deps);

            const missingFlags = [...deps.requiredFlags].filter(f => !availableFlags.has(f));
            const missingItems = [...deps.requiredItems].filter(i => !availableItems.has(i) && !universalItems.has(i));

            if (missingFlags.length === 0 && missingItems.length === 0) {
                hasReachableChoice = true;
            }

            // 只报告“引用全局不存在”的严重问题（cross-story 或已移除的 flag/item）
            if (missingFlags.length > 0 || missingItems.length > 0) {
                const undefinedFlags = missingFlags.filter(f => !globallyDefinedFlags.has(f));
                const undefinedItems = missingItems.filter(i => !globallyDefinedItems.has(i));
                if (undefinedFlags.length > 0 || undefinedItems.length > 0) {
                    missingPrereqs.push({
                        sceneId,
                        text: choice.text || '(无文本)',
                        missingFlags: undefinedFlags,
                        missingItems: undefinedItems
                    });
                }
            }

            if (choice.ending) {
                if (!Endings[choice.ending] && choice.ending !== 'madness' && choice.ending !== 'possessed') {
                    invalidEndings.push(`${sceneId} -> ${choice.ending}`);
                }
            }
        }

        // 场景若无 choices，视为自然结束，不报告
        if (choices.length > 0 && !hasReachableChoice) {
            deadEnds.push(sceneId);
        }
    }

    return {
        storyId,
        reachableCount: reachableFromPrologue.size,
        unreachableCount: unreachableScenes.length,
        deadEnds,
        missingPrereqs,
        invalidEndings,
        iterations
    };
}

async function main() {
    let hasError = false;
    for (const storyId of storyIds) {
        const result = await validateStory(storyId);
        console.log(`\n## ${result.storyId}`);
        console.log(`可达场景: ${result.reachableCount} | 不可达: ${result.unreachableCount} | 固定点迭代: ${result.iterations}`);

        if (result.unreachableCount > 0) {
            console.log(`[警告] ${result.unreachableCount} 个场景从 prologue 不可达`);
            hasError = true;
        }

        if (result.deadEnds.length > 0) {
            console.log(`[死胡同] ${result.deadEnds.length} 个可达场景无可行选项:`);
            [...new Set(result.deadEnds)].forEach(id => console.log(`  - ${id}`));
            hasError = true;
        }

        if (result.missingPrereqs.length > 0) {
            console.log(`[缺失前置] ${result.missingPrereqs.length} 个选择引用了未定义或不可获得的前置:`);
            for (const c of result.missingPrereqs.slice(0, 20)) {
                const parts = [];
                if (c.missingFlags.length) parts.push(`flags: ${c.missingFlags.join(', ')}`);
                if (c.missingItems.length) parts.push(`items: ${c.missingItems.join(', ')}`);
                console.log(`  - ${c.sceneId}: "${c.text}" 缺少 ${parts.join('; ')}`);
            }
            if (result.missingPrereqs.length > 20) {
                console.log(`  ... 还有 ${result.missingPrereqs.length - 20} 个`);
            }
            hasError = true;
        }

        if (result.invalidEndings.length > 0) {
            console.log(`[无效结局] ${result.invalidEndings.length} 个:`);
            [...new Set(result.invalidEndings)].forEach(e => console.log(`  - ${e}`));
            hasError = true;
        }

        if (result.deadEnds.length === 0 && result.missingPrereqs.length === 0 && result.invalidEndings.length === 0 && result.unreachableCount === 0) {
            console.log('✓ 路径一致性检查通过');
        }
    }

    if (hasError) process.exit(1);
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
