/**
 * 故事模块化架构验证脚本
 *
 * 检查项：
 * 1. 每个故事的 index.js 能正常导入
 * 2. StoryData / Endings / NPCs 结构正确
 * 3. 所有 choices 中的 next 指向存在的场景
 * 4. 所有 choices/scene.ending 指向存在的结局
 * 5. config.js 存在且导出 StoryConfig
 * 6. 场景文件按大小排序，标记超大模块
 *
 * 用法：
 *   node /workspace/tools/validate_stories.mjs
 */

import { StoryManifest } from '../stories/manifest.js';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const storyIds = StoryManifest.map(s => s.id);
let hasError = false;

function report(storyId, type, detail) {
    console.error(`[${storyId}] ${type}: ${detail}`);
    hasError = true;
}

function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)}MB`;
}

for (const storyId of storyIds) {
    const base = `/workspace/stories/${storyId}`;
    let module;
    try {
        module = await import(`${base}/index.js`);
    } catch (e) {
        report(storyId, 'IMPORT', e.message);
        continue;
    }

    const { StoryData, Endings, NPCs, StoryConfig } = module;

    if (!StoryData || typeof StoryData !== 'object' || Array.isArray(StoryData)) {
        report(storyId, 'STRUCT', 'StoryData 不是对象');
        continue;
    }
    if (!Endings || typeof Endings !== 'object' || Array.isArray(Endings)) {
        report(storyId, 'STRUCT', 'Endings 不是对象');
        continue;
    }
    if (!StoryConfig || StoryConfig.id !== storyId) {
        report(storyId, 'CONFIG', `config.js 缺失或 id 不匹配 (${StoryConfig?.id})`);
    }

    const sceneIds = Object.keys(StoryData);
    const endingIds = Object.keys(Endings);
    const sceneSet = new Set(sceneIds);
    const endingSet = new Set(endingIds);

    // 检查每个场景
    for (const [sceneId, scene] of Object.entries(StoryData)) {
        if (!scene || typeof scene !== 'object') {
            report(storyId, 'SCENE', `场景 ${sceneId} 不是对象`);
            continue;
        }
        if (typeof scene.text !== 'string' || scene.text.length === 0) {
            report(storyId, 'SCENE', `场景 ${sceneId} 缺少 text`);
        }

        // scene 级别的 ending
        if (scene.ending && !endingSet.has(scene.ending)) {
            report(storyId, 'ENDING_REF', `场景 ${sceneId} 引用不存在结局 ${scene.ending}`);
        }

        // choices
        if (scene.choices) {
            if (!Array.isArray(scene.choices)) {
                report(storyId, 'CHOICE', `场景 ${sceneId} 的 choices 不是数组`);
                continue;
            }
            for (let i = 0; i < scene.choices.length; i++) {
                const c = scene.choices[i];
                if (!c || typeof c !== 'object') {
                    report(storyId, 'CHOICE', `场景 ${sceneId} choices[${i}] 不是对象`);
                    continue;
                }
                if (typeof c.text !== 'string' || c.text.length === 0) {
                    report(storyId, 'CHOICE', `场景 ${sceneId} choices[${i}] 缺少 text`);
                }
                if (c.next && !sceneSet.has(c.next)) {
                    report(storyId, 'NEXT_REF', `场景 ${sceneId} choices[${i}] 引用不存在场景 ${c.next}`);
                }
                if (c.ending && !endingSet.has(c.ending)) {
                    report(storyId, 'ENDING_REF', `场景 ${sceneId} choices[${i}] 引用不存在结局 ${c.ending}`);
                }
                if (!c.next && !c.ending && !c.event && !c.action && !c.npc && !c.npcNode && !c.exit) {
                    report(storyId, 'CHOICE', `场景 ${sceneId} choices[${i}] 既无 next 也无 ending 也无 npc/event/action/exit`);
                }
            }
        }
    }

    // 检查起始场景
    if (!sceneSet.has('prologue')) {
        report(storyId, 'PROLOGUE', '缺少 prologue 场景');
    }

    // 检查模块文件大小
    try {
        const sceneDir = `${base}/scenes`;
        const files = readdirSync(sceneDir).filter(f => f.endsWith('.js'));
        const oversized = [];
        for (const f of files) {
            const size = statSync(join(sceneDir, f)).size;
            if (size > 30 * 1024) oversized.push(`${f} ${formatBytes(size)}`);
        }
        if (oversized.length > 0) {
            console.warn(`[${storyId}] OVERSIZED: ${oversized.join(', ')}`);
        }
    } catch (e) {
        report(storyId, 'DIR', `无法读取 scenes 目录: ${e.message}`);
    }

    console.log(`[${storyId}] OK: scenes=${sceneIds.length}, endings=${endingIds.length}, npcs=${Object.keys(NPCs || {}).length}`);
}

if (hasError) {
    console.error('\n验证失败，请修复上述错误。');
    process.exit(1);
} else {
    console.log('\n所有故事验证通过。');
}
