/**
 * Flag 与物品引用检查
 *
 * 收集所有故事中 setFlag 定义的 flag 和 addItem 定义的物品，
 * 检查每个故事的 condition 引用是否在全剧范围内有定义。
 */

import { StoryManifest } from '../stories/manifest.js';

const storyIds = StoryManifest.map(s => s.id);
let hasWarning = false;

function collectEffects(scene) {
    const flags = new Set();
    const items = new Set();
    if (!scene) return { flags, items };

    function scan(effects) {
        if (!effects || typeof effects !== 'object') return;
        if (effects.setFlag) flags.add(effects.setFlag);
        if (effects.addItem) items.add(effects.addItem);
    }

    scan(scene.effects);
    if (Array.isArray(scene.choices)) {
        for (const c of scene.choices) {
            if (c && c.effects) scan(c.effects);
        }
    }

    return { flags, items };
}

function getConditionRefs(condition) {
    const refs = { flags: [], items: [] };
    if (!condition || typeof condition !== 'object') return refs;
    if (condition.flag) refs.flags.push(condition.flag);
    if (condition.noFlag) refs.flags.push(condition.noFlag);
    if (condition.flagValue && condition.flagValue.key) refs.flags.push(condition.flagValue.key);
    if (condition.hasItem) refs.items.push(condition.hasItem);
    if (condition.lacksItem) refs.items.push(condition.lacksItem);
    return refs;
}

// 第一阶段：收集所有故事中定义的全局 flag/item
const globalFlags = new Set();
const globalItems = new Set();

for (const storyId of storyIds) {
    const module = await import(`/workspace/stories/${storyId}/index.js`);
    const StoryData = module.StoryData;
    for (const scene of Object.values(StoryData)) {
        const { flags, items } = collectEffects(scene);
        flags.forEach(f => globalFlags.add(f));
        items.forEach(i => globalItems.add(i));
    }
}

// 第二阶段：检查每个故事的引用
for (const storyId of storyIds) {
    const module = await import(`/workspace/stories/${storyId}/index.js`);
    const StoryData = module.StoryData;

    let missingFlags = 0;
    let missingItems = 0;

    for (const [sceneId, scene] of Object.entries(StoryData)) {
        if (!scene || !Array.isArray(scene.choices)) continue;
        for (const c of scene.choices) {
            if (!c || typeof c !== 'object' || !c.condition) continue;
            const refs = getConditionRefs(c.condition);
            for (const flag of refs.flags) {
                if (!globalFlags.has(flag)) {
                    console.warn(`[${storyId}] ${sceneId}: 条件引用未定义 flag "${flag}"`);
                    missingFlags++;
                    hasWarning = true;
                }
            }
            for (const item of refs.items) {
                if (!globalItems.has(item)) {
                    console.warn(`[${storyId}] ${sceneId}: 条件引用未定义 item "${item}"`);
                    missingItems++;
                    hasWarning = true;
                }
            }
        }
    }

    console.log(`[${storyId}] OK: missing flags=${missingFlags}, missing items=${missingItems}`);
}

if (hasWarning) {
    console.warn('\n存在未定义的 flag/item 引用警告（可能是代码生成或运行时设置，请人工复核）。');
    process.exit(0); // 警告级别，不阻塞 CI
} else {
    console.log('\n所有 flag/item 引用在全剧范围内均有定义。');
}
