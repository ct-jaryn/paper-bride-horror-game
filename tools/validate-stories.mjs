/**
 * 剧情数据静态校验脚本
 *
 * 检查每个故事的 StoryData 与 Endings：
 * - 场景与结局结构是否完整
 * - choices 中的 next 是否指向存在的场景
 * - choices 中的 ending 是否指向存在的结局
 * - effects 中的数值字段是否合理
 * - 从 prologue 出发的可达性（孤立场景仅警告）
 *
 * 可作为模块导入使用，也可直接运行：
 *   node tools/validate-stories.mjs
 */

import { readdirSync } from 'fs';
import { join, resolve, basename } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const storiesDir = join(__dirname, '..', 'stories');

export const FORCED_ENDINGS = new Set(['madness', 'possessed', 'eternalNight']);

// 由 storyExtensions.js 动态注入的彩蛋场景，不参与可达性检查
export const EASTER_EGG_SCENES = new Set([
    'huimen_easter_qingshi_paper',
    'huimen_easter_paper_doll',
    'shouye_easter_paper_ash',
    'xitai_easter_river_voice',
    'tishen_easter_fox_mark',
    'heniang_easter_opera_dress',
    'hujia_easter_zhou_debt',
    'ganshi_easter_paper_name'
]);

function validateEffects(storyId, sceneId, effects, path, report) {
    if (!effects || typeof effects !== 'object') return;

    const numericFields = ['sanity', 'yin', 'time'];
    numericFields.forEach(field => {
        if (field in effects && typeof effects[field] !== 'number') {
            report.error(storyId, `${path} effects.${field} 不是数字 (${sceneId})`);
        }
    });

    if ('addItem' in effects && typeof effects.addItem !== 'string') {
        report.error(storyId, `${path} effects.addItem 不是字符串 (${sceneId})`);
    }
    if ('removeItem' in effects && typeof effects.removeItem !== 'string') {
        report.error(storyId, `${path} effects.removeItem 不是字符串 (${sceneId})`);
    }
    if ('setFlag' in effects && typeof effects.setFlag !== 'string') {
        report.error(storyId, `${path} effects.setFlag 不是字符串 (${sceneId})`);
    }
    if ('clearFlag' in effects && typeof effects.clearFlag !== 'string') {
        report.error(storyId, `${path} effects.clearFlag 不是字符串 (${sceneId})`);
    }
}

export function validateStory(storyId, StoryData, Endings, report = createConsoleReport()) {
    if (!StoryData || typeof StoryData !== 'object') {
        report.error(storyId, 'StoryData 不存在或不是对象');
        return;
    }
    if (!Endings || typeof Endings !== 'object') {
        report.error(storyId, 'Endings 不存在或不是对象');
        return;
    }

    const sceneIds = Object.keys(StoryData);
    const endingIds = Object.keys(Endings);

    if (!sceneIds.includes('prologue')) {
        report.error(storyId, '缺少 prologue 场景');
    }

    // 检查每个场景
    sceneIds.forEach(sceneId => {
        const scene = StoryData[sceneId];
        if (!scene || typeof scene !== 'object') {
            report.error(storyId, `场景 ${sceneId} 不是对象`);
            return;
        }

        if (typeof scene.text !== 'string' && typeof scene.text !== 'function') {
            report.error(storyId, `场景 ${sceneId} 的 text 既不是字符串也不是函数`);
        }

        validateEffects(storyId, sceneId, scene.effects, `场景 ${sceneId}`, report);

        if (scene.choices) {
            if (!Array.isArray(scene.choices)) {
                report.error(storyId, `场景 ${sceneId} 的 choices 不是数组`);
                return;
            }

            scene.choices.forEach((choice, idx) => {
                if (!choice || typeof choice !== 'object') {
                    report.error(storyId, `场景 ${sceneId} 的选择 ${idx} 不是对象`);
                    return;
                }

                if (typeof choice.text !== 'string') {
                    report.error(storyId, `场景 ${sceneId} 的选择 ${idx} 缺少 text 字符串`);
                }

                if (choice.next && !sceneIds.includes(choice.next)) {
                    report.error(storyId, `场景 ${sceneId} 的选择 ${idx} 指向不存在的场景: ${choice.next}`);
                }

                if (choice.ending && !endingIds.includes(choice.ending)) {
                    report.error(storyId, `场景 ${sceneId} 的选择 ${idx} 指向不存在的结局: ${choice.ending}`);
                }

                if (!choice.next && !choice.ending && !scene.ending && !choice.custom) {
                    report.warning(storyId, `场景 ${sceneId} 的选择 ${idx} 既没有 next 也没有 ending（可能是死胡同）`);
                }

                validateEffects(storyId, sceneId, choice.effects, `场景 ${sceneId} 选择 ${idx}`, report);
            });
        }
    });

    // 可达性检查（BFS）：带有场景级 ending 的节点也视为终止
    const reachable = new Set();
    const queue = ['prologue'];
    while (queue.length > 0) {
        const current = queue.shift();
        if (reachable.has(current)) continue;
        reachable.add(current);

        const scene = StoryData[current];
        if (!scene || scene.ending) continue;
        if (!Array.isArray(scene.choices)) continue;

        scene.choices.forEach(choice => {
            if (choice.next && sceneIds.includes(choice.next)) {
                queue.push(choice.next);
            }
        });
    }

    sceneIds.forEach(sceneId => {
        if (EASTER_EGG_SCENES.has(sceneId)) return;
        if (!reachable.has(sceneId)) {
            report.warning(storyId, `场景 ${sceneId} 从 prologue 不可达`);
        }
    });

    // 结局是否被引用（场景级 ending 与选择级 ending 都计入；强制结局与隐藏结局不警告）
    const referencedEndings = new Set();
    sceneIds.forEach(sceneId => {
        const scene = StoryData[sceneId];
        if (!scene) return;
        if (scene.ending) referencedEndings.add(scene.ending);
        if (!Array.isArray(scene.choices)) return;
        scene.choices.forEach(choice => {
            if (choice.ending) referencedEndings.add(choice.ending);
        });
    });

    endingIds.forEach(endingId => {
        if (FORCED_ENDINGS.has(endingId)) return;
        if (endingId.startsWith('hidden_')) return;
        if (!referencedEndings.has(endingId)) {
            report.warning(storyId, `结局 ${endingId} 未被任何选择引用`);
        }
    });
}

export function createConsoleReport() {
    return {
        errors: 0,
        warnings: 0,
        error(story, message) {
            this.errors++;
            console.error(`[错误] ${story}: ${message}`);
        },
        warning(story, message) {
            this.warnings++;
            console.warn(`[警告] ${story}: ${message}`);
        }
    };
}

export function createSilentReport() {
    return {
        errors: 0,
        warnings: 0,
        messages: [],
        error(story, message) {
            this.errors++;
            this.messages.push({ type: 'error', story, message });
        },
        warning(story, message) {
            this.warnings++;
            this.messages.push({ type: 'warning', story, message });
        }
    };
}

export async function validateAllStories(report = createConsoleReport()) {
    const files = readdirSync(storiesDir)
        .filter(name => name.startsWith('story_') && name.endsWith('.js'))
        .sort();

    for (const file of files) {
        const storyId = file.replace(/^story_/, '').replace(/\.js$/, '');
        const storyPath = join(storiesDir, file);
        try {
            const module = await import(pathToFileURL(storyPath).href);
            validateStory(storyId, module.StoryData, module.Endings, report);
        } catch (e) {
            report.error(storyId, `加载失败: ${e.message}`);
        }
    }

    return { errors: report.errors, warnings: report.warnings, report };
}

async function main() {
    const targetArg = process.argv[2];
    const report = createConsoleReport();

    if (targetArg) {
        const storyPath = resolve(targetArg);
        const file = basename(storyPath);
        if (!file.startsWith('story_') || !file.endsWith('.js')) {
            console.error(`指定的文件不是故事文件: ${targetArg}`);
            process.exit(1);
        }
        const storyId = file.replace(/^story_/, '').replace(/\.js$/, '');
        console.log(`开始校验 ${file}...\n`);
        const module = await import(pathToFileURL(storyPath).href);
        validateStory(storyId, module.StoryData, module.Endings, report);
    } else {
        console.log(`开始校验 ${readdirSync(storiesDir).filter(n => n.startsWith('story_') && n.endsWith('.js')).length} 个故事...\n`);
        await validateAllStories(report);
    }

    console.log('\n--------------------------------');
    console.log(`校验完成：错误 ${report.errors} 个，警告 ${report.warnings} 个`);

    if (report.errors > 0) {
        process.exit(1);
    }
}

const isMainModule = process.argv[1] && import.meta.url.startsWith('file:')
    && process.argv[1] === fileURLToPath(import.meta.url);
if (isMainModule) {
    main();
}
