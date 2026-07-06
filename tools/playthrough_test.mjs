/**
 * 自动化通关测试脚本
 *
 * 对每个故事执行一次随机走查：
 * - 从 prologue 出发
 * - 每轮随机选择第一个可前进的 choice
 * - 遇到 ending 或死胡同时停止
 * - 记录访问过的场景和结局
 *
 * 用法：
 *   node /workspace/tools/playthrough_test.mjs [storyId]
 * 示例：
 *   node /workspace/tools/playthrough_test.mjs shouye
 *   node /workspace/tools/playthrough_test.mjs --all
 */

import { StoryManifest } from '../stories/manifest.js';

const args = process.argv.slice(2);
const target = args[0] || '--all';

function isReachableChoice(choice) {
    return choice.next || choice.ending;
}

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function playthrough(storyId, seedMode = 'random') {
    const module = await import(`/workspace/stories/${storyId}/index.js`);
    const StoryData = module.StoryData;
    const Endings = module.Endings;

    if (!StoryData.prologue) {
        return { error: '缺少 prologue' };
    }

    const visited = new Set();
    const path = [];
    let current = 'prologue';
    let ending = null;
    let steps = 0;
    const maxSteps = 500;

    while (steps < maxSteps) {
        if (steps >= maxSteps) {
            return { error: '超过最大步数', path, ending, visited: visited.size };
        }
        visited.add(current);
        path.push(current);

        const scene = StoryData[current];
        if (!scene) {
            return { error: `场景不存在 ${current}`, path, ending, visited: visited.size };
        }

        if (scene.ending) {
            ending = scene.ending;
            break;
        }

        const choices = (scene.choices || []).filter(isReachableChoice);
        if (choices.length === 0) {
            return { error: `场景 ${current} 无可用选择`, path, ending, visited: visited.size };
        }

        let nextChoice;
        if (seedMode === 'first') {
            nextChoice = choices.find(c => c.next && !visited.has(c.next)) || choices[0];
        } else {
            const unvisited = choices.filter(c => c.next && !visited.has(c.next));
            nextChoice = unvisited.length > 0 ? randomItem(unvisited) : randomItem(choices);
        }

        if (nextChoice.ending) {
            ending = nextChoice.ending;
            path.push(`-> ${ending}`);
            break;
        }
        current = nextChoice.next;
        steps++;
    }

    return {
        ending,
        endingTitle: ending ? (Endings[ending]?.title || ending) : null,
        steps: path.length,
        visited: visited.size,
        error: steps >= maxSteps ? '超过最大步数' : null,
        path: path.slice(0, 15).join(' -> ') + (path.length > 15 ? ' ...' : '')
    };
}

async function main() {
    const runs = parseInt(process.env.RUNS || '10', 10);
    const stories = target === '--all'
        ? StoryManifest.map(s => s.id)
        : [target];

    console.log(`测试故事: ${stories.join(', ')}`);
    console.log(`每故事随机走查 ${runs} 次\n`);

    for (const storyId of stories) {
        const module = await import(`/workspace/stories/${storyId}/index.js`);
        const totalEndings = Object.keys(module.Endings).length;
        const reached = new Set();
        const errors = [];
        let maxVisited = 0;
        let totalSteps = 0;

        for (let i = 0; i < runs; i++) {
            const result = await playthrough(storyId, i === 0 ? 'first' : 'random');
            if (result.error) {
                errors.push(result.error);
            } else {
                reached.add(result.ending);
                maxVisited = Math.max(maxVisited, result.visited);
                totalSteps += result.steps;
            }
        }

        const coverage = totalEndings > 0 ? ((reached.size / totalEndings) * 100).toFixed(1) : '0.0';
        console.log(`[${storyId}] ${errors.length ? 'ERRORS:' + errors.length : 'OK'} | reachable_endings=${reached.size}/${totalEndings} (${coverage}%) | max_visited=${maxVisited} | avg_steps=${(totalSteps / runs).toFixed(1)}`);
        if (errors.length > 0) {
            console.error(`  errors: ${[...new Set(errors)].join('; ')}`);
        }
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
