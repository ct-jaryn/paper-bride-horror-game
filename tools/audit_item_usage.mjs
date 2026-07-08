/**
 * 道具/物品使用审计
 *
 * 扫描每个故事中 addItem/defaultItems 与 hasItem 的对应关系，输出：
 * - 只获得但从未被 hasItem 使用的物品
 * - 只被使用过一次、设计过于简单的物品
 * - 被引用但从未定义的物品
 * - 每个物品的完整使用位置
 */

import { StoryManifest } from '../stories/manifest.js';

const storyIds = StoryManifest.map(s => s.id);

function scanEffects(effects, sink, sceneId, context) {
    if (!effects || typeof effects !== 'object') return;
    const add = effects.addItem;
    if (add) {
        const list = Array.isArray(add) ? add : [add];
        for (const item of list) {
            if (!sink.produce.has(item)) sink.produce.set(item, []);
            sink.produce.get(item).push({ sceneId, context, type: 'addItem' });
        }
    }
    const remove = effects.removeItem;
    if (remove) {
        const list = Array.isArray(remove) ? remove : [remove];
        for (const item of list) {
            if (!sink.consume.has(item)) sink.consume.set(item, []);
            sink.consume.get(item).push({ sceneId, context, type: 'removeItem' });
        }
    }
}

function scanCondition(condition, sink, sceneId, context) {
    if (!condition || typeof condition !== 'object') return;
    if (condition.hasItem) {
        if (!sink.consume.has(condition.hasItem)) sink.consume.set(condition.hasItem, []);
        sink.consume.get(condition.hasItem).push({ sceneId, context, type: 'hasItem', condition });
    }
    if (condition.and) condition.and.forEach(c => scanCondition(c, sink, sceneId, context));
    if (condition.or) condition.or.forEach(c => scanCondition(c, sink, sceneId, context));
    if (condition.not) scanCondition(condition.not, sink, sceneId, context);
}

function scanNPCs(NPCs, sink) {
    if (!NPCs || typeof NPCs !== 'object') return;
    for (const [npcId, npc] of Object.entries(NPCs)) {
        if (!npc || !npc.dialogue) continue;
        for (const [nodeId, node] of Object.entries(npc.dialogue)) {
            if (!node) continue;
            scanEffects(node.effects, sink, `${npcId}:${nodeId}`, 'npc.effects');
            if (Array.isArray(node.choices)) {
                for (const choice of node.choices) {
                    if (!choice) continue;
                    const label = choice.text || choice.label || '(无文本)';
                    scanEffects(choice.effects, sink, `${npcId}:${nodeId}`, `npc choice: ${label}`);
                    scanCondition(choice.condition, sink, `${npcId}:${nodeId}`, `npc choice: ${label}`);
                }
            }
        }
    }
}

async function auditStory(storyId) {
    const module = await import(`../stories/${storyId}/index.js`);
    const StoryData = module.StoryData;
    const StoryConfig = module.StoryConfig || {};
    const NPCs = module.NPCs || {};

    const produce = new Map();
    const consume = new Map();
    const ensure = (map, key) => { if (!map.has(key)) map.set(key, []); };
    const sink = { produce, consume };

    // 默认物品
    if (Array.isArray(StoryConfig.defaultItems)) {
        for (const item of StoryConfig.defaultItems) {
            ensure(produce, item);
            produce.get(item).push({ sceneId: '<config>', context: 'defaultItems', type: 'default' });
        }
    }

    for (const [sceneId, scene] of Object.entries(StoryData)) {
        if (!scene) continue;
        scanEffects(scene.effects, sink, sceneId, 'scene.effects');
        if (Array.isArray(scene.choices)) {
            for (const choice of scene.choices) {
                if (!choice) continue;
                const label = choice.text || choice.label || '(无文本)';
                scanEffects(choice.effects, sink, sceneId, `choice: ${label}`);
                scanCondition(choice.condition, sink, sceneId, `choice: ${label}`);
            }
        }
    }

    scanNPCs(NPCs, sink);

    const allItems = new Set([...produce.keys(), ...consume.keys()]);
    const neverUsed = [];
    const onlyOnce = [];
    const neverDefined = [];

    for (const item of produce.keys()) {
        const usages = consume.get(item) || [];
        if (usages.length === 0) neverUsed.push(item);
        else if (usages.filter(u => u.type === 'hasItem').length === 1) onlyOnce.push(item);
    }

    for (const item of consume.keys()) {
        if (!produce.has(item)) neverDefined.push(item);
    }

    return {
        storyId,
        produce,
        consume,
        allItems,
        neverUsed,
        onlyOnce,
        neverDefined,
    };
}

function printStoryReport(report) {
    console.log(`\n## ${report.storyId}`);
    console.log(`物品总数: ${report.allItems.size}`);

    if (report.neverDefined.length > 0) {
        console.log('\n[错误] 被引用但从未定义的物品:');
        for (const item of report.neverDefined) {
            console.log(`  - ${item}`);
            for (const loc of report.consume.get(item)) {
                console.log(`      使用于 ${loc.sceneId} / ${loc.context}`);
            }
        }
    }

    if (report.neverUsed.length > 0) {
        console.log('\n[待改进] 可获得但从未被使用的物品:');
        for (const item of report.neverUsed) {
            console.log(`  - ${item}`);
            for (const loc of report.produce.get(item)) {
                console.log(`      获得于 ${loc.sceneId} / ${loc.context}`);
            }
        }
    }

    if (report.onlyOnce.length > 0) {
        console.log('\n[待改进] 只被使用过一次（过于简单）的物品:');
        for (const item of report.onlyOnce) {
            const usage = report.consume.get(item).find(u => u.type === 'hasItem');
            console.log(`  - ${item}`);
            console.log(`      使用于 ${usage.sceneId} / ${usage.context}`);
            for (const loc of report.produce.get(item)) {
                console.log(`      获得于 ${loc.sceneId} / ${loc.context}`);
            }
        }
    }

    console.log('\n[完整清单]');
    const sorted = [...report.allItems].sort();
    for (const item of sorted) {
        const prod = report.produce.get(item) || [];
        const cons = report.consume.get(item) || [];
        const used = cons.filter(c => c.type === 'hasItem').length;
        console.log(`  ${item}: 获得${prod.length}次 / hasItem使用${used}次 / removeItem${cons.filter(c => c.type === 'removeItem').length}次`);
    }
}

console.log('# 道具/物品使用审计报告');

const reports = [];
for (const storyId of storyIds) {
    const report = await auditStory(storyId);
    reports.push(report);
    printStoryReport(report);
}

console.log('\n# 汇总');
let totalNeverUsed = 0;
let totalOnlyOnce = 0;
let totalNeverDefined = 0;
for (const r of reports) {
    totalNeverUsed += r.neverUsed.length;
    totalOnlyOnce += r.onlyOnce.length;
    totalNeverDefined += r.neverDefined.length;
}
console.log(`可获得但从未使用: ${totalNeverUsed}`);
console.log(`只使用过一次: ${totalOnlyOnce}`);
console.log(`引用但未定义: ${totalNeverDefined}`);

if (totalNeverDefined > 0) process.exit(1);
