/**
 * 《阴阳簿》跨卷彩蛋与隐藏分支扩展
 *
 * 设计原则：
 * - 每卷故事仍独立成篇，不破坏首次游玩体验。
 * - 彩蛋只在玩家已经历过其他故事后，以“似曾相识”“旧报纸”“路人低语”
 *   等模糊方式出现，不直接点明“阴阳世界”。
 * - 新增选择均带有 condition/hidden，不影响主线流程。
 */

import { Huimen } from '../namespace.js';
import * as huimen from './huimen.js';
import * as shouye from './shouye.js';
import * as xitai from './xitai.js';
import * as tishen from './tishen.js';
import * as heniang from './heniang.js';
import * as hujia from './hujia.js';
import * as ganshi from './ganshi.js';

const STORY_EXTENSIONS = { huimen, shouye, xitai, tishen, heniang, hujia, ganshi };
const OMITTED_EXTENSION_BRANCHES = new Set([
    // 这是旧的“结局展示选择器”，会在巡夜场景一次性暴露大量互相重复的彩蛋结局。
    'shouye:patrol_corridor'
]);

/**
 * 在当前加载的故事数据中注入彩蛋
 */
export function applyEasterEggs() {
    if (!Huimen.StoryData || !Huimen.CurrentStory) return;

    const storyId = Huimen.CurrentStory.id;
    const ext = STORY_EXTENSIONS[storyId];
    if (!ext) return;

    // 注入新场景
    if (ext.scenes) {
        Object.entries(ext.scenes).forEach(([sceneId, scene]) => {
            if (!Huimen.StoryData[sceneId]) {
                Huimen.StoryData[sceneId] = scene;
            }
        });
    }

    // 注入额外选择
    if (ext.choices) {
        Object.entries(ext.choices).forEach(([key, choices]) => {
            if (OMITTED_EXTENSION_BRANCHES.has(key)) return;
            const [, sceneId] = key.split(':');
            const scene = Huimen.StoryData[sceneId];
            if (!scene) return;

            // 若场景没有 choices 数组且不是结局场景，则创建一个
            if (!Array.isArray(scene.choices) && !scene.ending) {
                scene.choices = [];
            }
            if (!Array.isArray(scene.choices)) return;

            choices.forEach(choice => {
                const exists = scene.choices.some(c => c.text === choice.text && (c.next === choice.next || c.ending === choice.ending));
                if (!exists) {
                    scene.choices.push(choice);
                }
            });
        });
    }
}
