/**
 * 批量为无入口结局生成触发器并写入 storyExtensions.js
 *
 * 对每个故事：
 * 1. 找出没有入口场景/choice 的结局
 * 2. 在该故事的一个关键可达场景上注入 conditional choice
 * 3. 将生成的触发器追加到 storyExtensions.js 的 EASTER_EGG_CHOICES
 */

import { StoryManifest } from '../stories/manifest.js';
import { Huimen } from '../js/engine/namespace.js';
import { applyEasterEggs } from '../js/engine/storyExtensions.js';
import { readFileSync, writeFileSync } from 'fs';

const ANCHOR_SCENES = {
    shouye: 'patrol_corridor',
    xitai: 'backstage',
    tishen: 'mirror_reveal',
    heniang: 'negotiate_xiugu',
    hujia: 'fox_mercy_path'
};

const TRIGGER_TEMPLATES = {
    hidden: '你触发了这段被隐藏的结局',
    death: '你走向了死亡结局',
    normal: '你走向了普通结局'
};

const generated = [];

for (const story of StoryManifest) {
    const storyId = story.id;
    if (storyId === 'huimen' || storyId === 'ganshi') continue;

    const module = await import(`/workspace/stories/${storyId}/index.js`);
    Huimen.StoryData = module.StoryData;
    Huimen.Endings = module.Endings;
    Huimen.NPCs = module.NPCs || {};
    Huimen.CurrentStory = { id: storyId };
    applyEasterEggs();

    const anchor = ANCHOR_SCENES[storyId];
    if (!anchor || !Huimen.StoryData[anchor]) continue;

    // 找到可达场景
    const graph = {};
    for (const id of Object.keys(Huimen.StoryData)) graph[id] = [];
    for (const [id, scene] of Object.entries(Huimen.StoryData)) {
        if (scene.choices) {
            for (const c of scene.choices) {
                if (c.next) graph[id].push(c.next);
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

    // 找到无入口的结局
    const noEntryEndings = [];
    for (const e of Object.keys(Huimen.Endings)) {
        let hasEntry = false;
        for (const [id, scene] of Object.entries(Huimen.StoryData)) {
            if (scene.ending === e) { hasEntry = true; break; }
            if (scene.choices) {
                for (const c of scene.choices) {
                    if (c.ending === e) { hasEntry = true; break; }
                }
            }
            if (hasEntry) break;
        }
        if (!hasEntry) noEntryEndings.push(e);
    }

    // 选择离 anchor 最近的可达场景作为注入点
    let injectionScene = anchor;
    if (!(anchor in dist)) {
        // 如果 anchor 不可达，选择任意一个可达的关键场景
        const candidates = Object.keys(dist).filter(id => Huimen.StoryData[id].choices?.length > 0);
        injectionScene = candidates[0] || 'prologue';
    }

    const choices = noEntryEndings.map((e, i) => {
        const title = Huimen.Endings[e]?.title || e;
        const isDeath = title.includes('死亡');
        const isNormal = title.includes('普通');
        const type = isDeath ? 'death' : (isNormal ? 'normal' : 'hidden');
        const prefix = isDeath ? '你最终' : (isNormal ? '你最终' : '你触发了隐藏结局');
        return {
            text: `${prefix}：${title.replace(/.*·\s*/, '')}`,
            ending: e,
            condition: { sanityAbove: isDeath ? -100 : 0, yinAbove: isDeath ? 50 : 0 },
            hidden: true
        };
    });

    if (choices.length > 0) {
        generated.push({ storyId, sceneId: injectionScene, choices });
    }
}

if (generated.length === 0) {
    console.log('No new triggers needed.');
    process.exit(0);
}

// 读取 storyExtensions.js 并在 EASTER_EGG_CHOICES 末尾注入
let content = readFileSync('/workspace/js/engine/storyExtensions.js', 'utf-8');
const insertMarker = "    // ganshi:ask_tian_grudge\n    'ganshi:ask_tian_grudge': [";
const insertIndex = content.indexOf(insertMarker);
if (insertIndex === -1) {
    console.error('Could not find insertion marker');
    process.exit(1);
}

const triggerBlocks = generated.map(g => {
    const choiceStrs = g.choices.map(c => {
        const condStr = c.condition ? `, condition: ${JSON.stringify(c.condition)}` : '';
        return `        {\n            text: '${c.text.replace(/'/g, "\\'")}',\n            ending: '${c.ending}'${condStr},\n            hidden: true\n        }`;
    }).join(',\n');
    return `    // 批量注入：${g.storyId} 无入口结局触发\n    '${g.storyId}:${g.sceneId}': [\n${choiceStrs}\n    ]`;
}).join(',\n\n');

const newContent = content.slice(0, insertIndex) + triggerBlocks + ',\n\n' + content.slice(insertIndex);
writeFileSync('/workspace/js/engine/storyExtensions.js', newContent, 'utf-8');
console.log(`Generated triggers for ${generated.length} stories:`);
for (const g of generated) {
    console.log(`  ${g.storyId}: ${g.choices.length} endings -> ${g.sceneId}`);
}
