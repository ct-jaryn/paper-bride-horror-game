/**
 * 基于真实渲染引擎的游玩模拟测试
 *
 * 使用 js/engine 的 renderer / effectEngine / state，模拟玩家点击选项，
 * 检查在实际运行中是否会出现无选项卡死。
 *
 * 用法：
 *   node /workspace/tools/real_playthrough_test.mjs [storyId] [--runs N]
 */

import { setupDomMock } from '../test/dom-mock.mjs';
setupDomMock();

import { StoryManifest } from '../stories/manifest.js';
import { Huimen } from '../js/engine/namespace.js';
import { resetState, updateState } from '../js/engine/state.js';
import { renderScene } from '../js/engine/renderer.js';
import { checkCondition } from '../js/engine/effectEngine.js';
import { applyEasterEggs } from '../js/engine/storyExtensions/index.js';
import * as dom from '../js/engine/dom.js';

const args = process.argv.slice(2);
let target = '--all';
let runs = 20;
for (let i = 0; i < args.length; i++) {
    if (args[i] === '--runs') {
        runs = parseInt(args[i + 1] || '20', 10);
        i++;
    } else if (!args[i].startsWith('--')) {
        target = args[i];
    }
}

const storyIds = target === '--all'
    ? StoryManifest.map(s => s.id)
    : [target];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function playthrough(storyId, seed) {
    // 重置引擎状态
    resetState(storyId, true);
    Huimen.StoryData = {};
    Huimen.Endings = {};
    Huimen.CurrentStory = null;
    Huimen.StoryConfig = null;

    const story = StoryManifest.find(s => s.id === storyId);
    if (!story) return { error: `故事不存在 ${storyId}` };

    const module = await import(`../${story.scriptPath}`);
    if (!module.StoryData || !module.Endings) {
        return { error: `故事 ${storyId} 数据结构错误` };
    }

    Huimen.CurrentStory = story;
    Huimen.StoryData = module.StoryData;
    Huimen.Endings = module.Endings;
    Huimen.NPCs = module.NPCs || {};
    Huimen.StoryConfig = module.StoryConfig || null;
    applyEasterEggs();

    if (Huimen.StoryConfig && Huimen.StoryConfig.defaultState) {
        updateState(Huimen.StoryConfig.defaultState);
    }

    renderScene('prologue');

    const StoryData = Huimen.StoryData;
    const Endings = Huimen.Endings;

    if (!StoryData.prologue) {
        return { error: '缺少 prologue' };
    }

    const visited = new Set();
    const path = [];
    const stateLog = [];
    let ending = null;
    let steps = 0;
    const maxSteps = 300;

    function recordState(label) {
        stateLog.push({
            step: steps,
            scene: Huimen.GameState.currentScene,
            label,
            sanity: Huimen.GameState.sanity,
            yin: Huimen.GameState.yin,
            time: Huimen.GameState.time,
            inventory: [...Huimen.GameState.inventory]
        });
    }

    recordState('start');

    while (steps < maxSteps) {
        await sleep(0);

        const current = Huimen.GameState.currentScene;
        if (!current) {
            return { error: 'currentScene 丢失', path, ending, visited: visited.size, stateLog };
        }

        visited.add(current);
        path.push(current);

        const scene = StoryData[current];
        if (!scene) {
            return { error: `场景不存在 ${current}`, path, ending, visited: visited.size, stateLog };
        }

        if (scene.ending) {
            ending = scene.ending;
            recordState(`ending:${ending}`);
            break;
        }

        // 从 DOM 中读取实际渲染的按钮
        const buttons = dom.ui.choices ? dom.ui.choices.children : [];
        const visibleChoices = [];
        for (let i = 0; i < buttons.length; i++) {
            const btn = buttons[i];
            if (btn.className && btn.className.includes('dead-end-btn')) {
                return { error: `场景 ${current} 触发了死胡同兜底`, path, ending, visited: visited.size, stateLog };
            }
            visibleChoices.push(btn);
        }

        if (visibleChoices.length === 0) {
            return { error: `场景 ${current} 无可见选项`, path, ending, visited: visited.size, stateLog };
        }

        // 根据场景数据匹配按钮，确保点击的是有效选择
        const sceneChoices = scene.choices || [];
        const clickable = [];
        for (let i = 0; i < sceneChoices.length; i++) {
            const c = sceneChoices[i];
            if (c.condition && !checkCondition(c.condition)) continue;
            if (!c.next && !c.ending && !c.npc) continue;
            clickable.push(c);
        }

        if (clickable.length === 0) {
            return { error: `场景 ${current} 没有可前进的数据选项`, path, ending, visited: visited.size, stateLog };
        }

        const unvisited = clickable.filter(c => c.next && !visited.has(c.next));
        const choice = unvisited.length > 0 ? randomItem(unvisited) : randomItem(clickable);

        if (choice.ending) {
            ending = choice.ending;
            recordState(`choice_ending:${ending}`);
            path.push(`-> ${ending}`);
            break;
        }

        if (choice.npc && typeof Huimen.startNPCDialogue === 'function') {
            Huimen.startNPCDialogue(choice.npc, choice.npcNode || 'start');
        } else if (choice.next) {
            renderScene(choice.next);
        }

        recordState(`after_choice:${choice.text.slice(0, 20)}`);
        steps++;
    }

    return {
        ending,
        endingTitle: ending ? (Endings[ending]?.title || ending) : null,
        steps: path.length,
        visited: visited.size,
        error: steps >= maxSteps ? '超过最大步数' : null,
        path: path.slice(0, 15).join(' -> ') + (path.length > 15 ? ' ...' : ''),
        stateLog
    };
}

async function main() {
    console.log(`真实渲染游玩模拟：${storyIds.join(', ')}`);
    console.log(`每个故事随机走查 ${runs} 次\n`);

    let globalErrors = 0;

    for (const storyId of storyIds) {
        const module = await import(`../stories/${storyId}/index.js`);
        const totalEndings = Object.keys(module.Endings).length;
        const reached = new Set();
        const errors = [];
        let maxVisited = 0;
        let totalSteps = 0;

        for (let i = 0; i < runs; i++) {
            const result = await playthrough(storyId, i);
            if (result.error) {
                errors.push({ seed: i, ...result });
            } else {
                reached.add(result.ending);
                maxVisited = Math.max(maxVisited, result.visited);
                totalSteps += result.steps;
            }
        }

        const coverage = totalEndings > 0 ? ((reached.size / totalEndings) * 100).toFixed(1) : '0.0';
        const status = errors.length > 0 ? `ERRORS:${errors.length}` : 'OK';
        console.log(`[${storyId}] ${status} | reachable_endings=${reached.size}/${totalEndings} (${coverage}%) | max_visited=${maxVisited} | avg_steps=${(totalSteps / runs).toFixed(1)}`);

        if (errors.length > 0) {
            globalErrors += errors.length;
            const byError = {};
            for (const e of errors) {
                byError[e.error] = (byError[e.error] || 0) + 1;
            }
            for (const [msg, count] of Object.entries(byError)) {
                console.error(`  × ${count} 次: ${msg}`);
            }
            const sample = errors[0];
            console.error(`  示例路径: ${sample.path}`);
            if (sample.stateLog) {
                console.error('  数值变化:');
                for (const s of sample.stateLog.slice(-5)) {
                    console.error(`    ${s.step}:${s.label} 理智=${s.sanity} 阴气=${s.yin} 时间=${s.time}`);
                }
            }
        }
    }

    console.log('');
    if (globalErrors > 0) {
        console.error(`共发现 ${globalErrors} 个问题`);
        process.exit(1);
    } else {
        console.log('全部故事在真实渲染下均未出现卡死');
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
