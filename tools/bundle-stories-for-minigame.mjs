/**
 * 为微信小游戏打包剧情数据
 *
 * 扫描 stories/story_*.js，生成 minigame/js/stories-bundle.js，
 * 让小游戏可以通过静态 import 一次性加载全部故事。
 */

import { readdirSync, writeFileSync, mkdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const storiesDir = join(root, 'stories');
const manifestFile = join(root, 'stories', 'manifest.js');
const outDir = join(root, 'minigame', 'js');
const outFile = join(outDir, 'stories-bundle.js');

// 读取 manifest 中的 story id → scriptPath 映射
function loadManifestMapping() {
    const source = readFileSync(manifestFile, 'utf-8');
    const mapping = {};
    // 简单正则提取 id 与 scriptPath，不依赖动态 import
    const idRegex = /id:\s*'([^']+)'/g;
    const pathRegex = /scriptPath:\s*'([^']+)'/g;
    const ids = [];
    let m;
    while ((m = idRegex.exec(source)) !== null) ids.push(m[1]);
    const paths = [];
    while ((m = pathRegex.exec(source)) !== null) paths.push(m[1]);
    ids.forEach((id, i) => {
        if (paths[i]) mapping[id] = paths[i];
    });
    return mapping;
}

const manifestMapping = loadManifestMapping();

const files = readdirSync(storiesDir)
    .filter(name => /^story_[a-z0-9_]+\.js$/.test(name))
    .sort();

// 只打包 manifest 中实际引用的故事，使用 manifest 中的 id 作为键
const ids = [];
Object.entries(manifestMapping).forEach(([storyId, scriptPath]) => {
    const fileName = scriptPath.replace(/^stories\//, '');
    if (files.includes(fileName)) {
        ids.push({ id: storyId, file: fileName });
    }
});

const imports = ids.map(({ id, file }) => `import * as ${id} from '../../stories/${file}';`).join('\n');
const entries = ids.map(({ id }) => `    ${id}`).join(',\n');

const content = `/**\n * 微信小游戏剧情数据包\n * 由 tools/bundle-stories-for-minigame.mjs 自动生成，请勿手动修改。\n */\n\n${imports}\n\nexport const StoryBundles = {\n${entries}\n};\n\nexport default StoryBundles;\n`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, content, 'utf-8');

console.log(`✓ 已生成小游戏剧情包：minigame/js/stories-bundle.js（${ids.length} 个故事）`);
ids.forEach(({ id, file }) => console.log(`  - ${id} → ${file}`));
