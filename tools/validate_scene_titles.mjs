/**
 * 验证所有故事的每个场景都有 title
 */

import { StoryManifest } from '../stories/manifest.js';

let hasError = false;

for (const story of StoryManifest) {
    const module = await import(`/workspace/stories/${story.id}/index.js`);
    const missing = [];
    for (const [id, scene] of Object.entries(module.StoryData)) {
        if (!scene.title) missing.push(id);
    }
    if (missing.length > 0) {
        console.error(`[${story.id}] 缺少 title 的场景:`, missing);
        hasError = true;
    } else {
        console.log(`[${story.id}] OK: 所有 ${Object.keys(module.StoryData).length} 个场景都有 title`);
    }
}

if (hasError) {
    process.exit(1);
} else {
    console.log('\n所有故事的所有场景都有 title。');
}
