/**
 * 重复场景定义检测
 *
 * 同一个 scene id 在多个模块文件中被定义时，后加载的会覆盖前者。
 * 本工具列出所有重复定义的场景，帮助发现拆分残留或冲突。
 */

import { StoryManifest } from '../stories/manifest.js';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const storyIds = StoryManifest.map(s => s.id);
let hasDuplicate = false;

for (const storyId of storyIds) {
    const sceneDir = `/workspace/stories/${storyId}/scenes`;
    const sceneMap = new Map(); // id -> [files]

    try {
        const files = readdirSync(sceneDir).filter(f => f.endsWith('.js'));
        for (const f of files) {
            const content = readFileSync(join(sceneDir, f), 'utf-8');
            // 匹配 createScene('id', ... ) 或 id: createScene('id', ...)
            const regex = /createScene\(['"`]([^'"`]+)['"`]/g;
            let match;
            while ((match = regex.exec(content)) !== null) {
                const id = match[1];
                if (!sceneMap.has(id)) sceneMap.set(id, []);
                sceneMap.get(id).push(f);
            }
        }
    } catch (e) {
        console.error(`[${storyId}] 无法读取 scenes 目录: ${e.message}`);
        continue;
    }

    const duplicates = Array.from(sceneMap.entries()).filter(([id, files]) => files.length > 1);
    if (duplicates.length > 0) {
        hasDuplicate = true;
        console.error(`[${storyId}] DUPLICATE SCENES (${duplicates.length}):`);
        for (const [id, files] of duplicates) {
            console.error(`  - ${id}: ${files.join(', ')}`);
        }
    } else {
        console.log(`[${storyId}] OK: no duplicate scene definitions`);
    }
}

if (hasDuplicate) {
    console.error('\n存在重复场景定义，请清理。');
    process.exit(1);
} else {
    console.log('\n所有故事均无重复场景定义。');
}
