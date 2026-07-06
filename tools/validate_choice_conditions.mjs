/**
 * 选项条件合法性检查
 *
 * 检查 choice.condition 中的字段是否合法：
 * - hasItem / lacksItem 应为字符串
 * - flag / noFlag 应为字符串
 * - flagValue.key / flagValue.value 应存在
 * - hasVisited / hasNotVisited 应指向存在的场景
 * - sanityBelow/Above / yinBelow/Above / timeAfter/Before 应为数字
 */

import { StoryManifest } from '../stories/manifest.js';

const storyIds = StoryManifest.map(s => s.id);
let hasError = false;

function report(storyId, sceneId, choiceText, detail) {
    console.error(`[${storyId}] ${sceneId} "${choiceText}": ${detail}`);
    hasError = true;
}

function isString(value) {
    return typeof value === 'string' && value.length > 0;
}

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function validateCondition(storyId, sceneId, choiceText, condition, sceneSet) {
    if (!condition || typeof condition !== 'object') return;

    if ('hasItem' in condition && !isString(condition.hasItem)) {
        report(storyId, sceneId, choiceText, `hasItem 应为非空字符串，得到 ${JSON.stringify(condition.hasItem)}`);
    }
    if ('lacksItem' in condition && !isString(condition.lacksItem)) {
        report(storyId, sceneId, choiceText, `lacksItem 应为非空字符串，得到 ${JSON.stringify(condition.lacksItem)}`);
    }
    if ('flag' in condition && !isString(condition.flag)) {
        report(storyId, sceneId, choiceText, `flag 应为非空字符串，得到 ${JSON.stringify(condition.flag)}`);
    }
    if ('noFlag' in condition && !isString(condition.noFlag)) {
        report(storyId, sceneId, choiceText, `noFlag 应为非空字符串，得到 ${JSON.stringify(condition.noFlag)}`);
    }
    if ('flagValue' in condition) {
        if (!condition.flagValue || typeof condition.flagValue !== 'object') {
            report(storyId, sceneId, choiceText, `flagValue 应为对象`);
        } else {
            if (!isString(condition.flagValue.key)) {
                report(storyId, sceneId, choiceText, `flagValue.key 应为非空字符串`);
            }
            if (!('value' in condition.flagValue)) {
                report(storyId, sceneId, choiceText, `flagValue 缺少 value`);
            }
        }
    }
    if ('hasVisited' in condition && !sceneSet.has(condition.hasVisited)) {
        report(storyId, sceneId, choiceText, `hasVisited 引用不存在场景 ${condition.hasVisited}`);
    }
    if ('hasNotVisited' in condition && !sceneSet.has(condition.hasNotVisited)) {
        report(storyId, sceneId, choiceText, `hasNotVisited 引用不存在场景 ${condition.hasNotVisited}`);
    }
    if ('sanityBelow' in condition && !isNumber(condition.sanityBelow)) {
        report(storyId, sceneId, choiceText, `sanityBelow 应为数字`);
    }
    if ('sanityAbove' in condition && !isNumber(condition.sanityAbove)) {
        report(storyId, sceneId, choiceText, `sanityAbove 应为数字`);
    }
    if ('yinBelow' in condition && !isNumber(condition.yinBelow)) {
        report(storyId, sceneId, choiceText, `yinBelow 应为数字`);
    }
    if ('yinAbove' in condition && !isNumber(condition.yinAbove)) {
        report(storyId, sceneId, choiceText, `yinAbove 应为数字`);
    }
    if ('timeAfter' in condition && !isNumber(condition.timeAfter)) {
        report(storyId, sceneId, choiceText, `timeAfter 应为数字`);
    }
    if ('timeBefore' in condition && !isNumber(condition.timeBefore)) {
        report(storyId, sceneId, choiceText, `timeBefore 应为数字`);
    }
    if ('custom' in condition && typeof condition.custom !== 'function') {
        report(storyId, sceneId, choiceText, `custom 应为函数`);
    }
}

for (const storyId of storyIds) {
    const module = await import(`/workspace/stories/${storyId}/index.js`);
    const StoryData = module.StoryData;
    const sceneSet = new Set(Object.keys(StoryData));
    let checked = 0;

    for (const [sceneId, scene] of Object.entries(StoryData)) {
        if (!scene || !Array.isArray(scene.choices)) continue;
        for (const c of scene.choices) {
            if (!c || typeof c !== 'object') continue;
            checked++;
            validateCondition(storyId, sceneId, c.text || '(无文本)', c.condition, sceneSet);
        }
    }

    console.log(`[${storyId}] OK: checked ${checked} choice conditions`);
}

if (hasError) {
    console.error('\n存在非法选项条件，请修复。');
    process.exit(1);
} else {
    console.log('\n所有选项条件合法。');
}
