/**
 * 死胡同预防测试
 * 验证 renderChoices 会过滤掉进入后无选项、无结局、无法推进的选择，
 * 并在极端死胡同场景下给出兜底出口。
 */

import { setupDomMock } from './dom-mock.mjs';
setupDomMock();

import { Huimen } from '../js/engine/namespace.js';
import { ui } from '../js/engine/dom.js';
import { renderChoices } from '../js/engine/renderer.js';
import { updateState } from '../js/engine/state.js';

function assert(condition, message) {
    if (!condition) {
        throw new Error(`断言失败: ${message}`);
    }
}

function reset() {
    Huimen.StoryData = {};
    updateState({
        sanity: 50,
        yin: 0,
        time: 1380,
        inventory: [],
        flags: {},
        history: [],
        currentScene: null,
        choiceLog: [],
        reviveCheckpoints: []
    });
    if (ui.choices) ui.choices.innerHTML = '';
}

function scene(id, options = {}) {
    Huimen.StoryData[id] = { id, text: id, ...options };
}

function runTests() {
    // 1. 正常可达选择应显示
    reset();
    scene('start', {
        choices: [
            { text: '前进', next: 'hall' }
        ]
    });
    scene('hall', {
        choices: [
            { text: '开门', next: 'end' }
        ]
    });
    scene('end', { ending: 'good' });
    let visible = renderChoices(Huimen.StoryData.start.choices);
    assert(visible.length === 1 && visible[0].text === '前进', '正常可达选择应被渲染');

    // 2. 死胡同选择（目标无 choices、无 ending）应被过滤
    reset();
    scene('start', {
        choices: [
            { text: '进入暗室', next: 'dead' },
            { text: '离开', next: 'leave' }
        ]
    });
    scene('dead', { text: '这里什么都没有。' });
    scene('leave', { choices: [{ text: '结束', ending: 'leave' }] });
    visible = renderChoices(Huimen.StoryData.start.choices);
    assert(visible.length === 1 && visible[0].text === '离开', '死胡同选择应被过滤');

    // 3. 直接触发结局的选择应显示
    reset();
    scene('start', {
        choices: [
            { text: '自尽', ending: 'suicide' },
            { text: '继续', next: 'dead' }
        ]
    });
    scene('dead', { text: '无路可走' });
    visible = renderChoices(Huimen.StoryData.start.choices);
    assert(visible.length === 1 && visible[0].text === '自尽', '直接结局选择应被渲染，死胡同被过滤');

    // 4. 目标场景 effects 可能触发强制结局时应显示
    reset();
    updateState({ sanity: 5 });
    scene('start', {
        choices: [
            { text: '凝视深渊', next: 'abyss' },
            { text: '离开', next: 'leave' }
        ]
    });
    scene('abyss', { text: '你疯了', effects: { sanity: -10 } });
    scene('leave', { choices: [{ text: '结束', ending: 'leave' }] });
    visible = renderChoices(Huimen.StoryData.start.choices);
    assert(visible.length === 2, '可能触发强制结局的选择应被渲染');

    // 5. 隐藏场景入口：子选项均不满足条件导致死胡同，应被过滤
    reset();
    Huimen.GameState.flags.hasKey = false;
    scene('start', {
        choices: [
            { text: '秘密通道', next: 'secret' },
            { text: '离开', next: 'leave' }
        ]
    });
    scene('secret', {
        text: '秘密通道',
        choices: [
            { text: '用钥匙开门', next: 'treasure', condition: { flag: 'hasKey' } }
        ]
    });
    scene('treasure', { ending: 'rich' });
    scene('leave', { choices: [{ text: '结束', ending: 'leave' }] });
    visible = renderChoices(Huimen.StoryData.start.choices);
    assert(visible.length === 1 && visible[0].text === '离开', '隐藏场景子选项条件不满足时应被过滤');

    // 6. 目标场景的 effects 会解锁子选项，不应被误杀
    reset();
    scene('start', {
        choices: [
            { text: '搜索房间', next: 'search' },
            { text: '离开', next: 'leave' }
        ]
    });
    scene('search', {
        text: '你找到了钥匙',
        effects: { addItem: 'key' },
        choices: [
            { text: '用钥匙开门', next: 'treasure', condition: { hasItem: 'key' } }
        ]
    });
    scene('treasure', { ending: 'rich' });
    scene('leave', { choices: [{ text: '结束', ending: 'leave' }] });
    visible = renderChoices(Huimen.StoryData.start.choices);
    assert(visible.length === 2, 'effects 解锁子选项的选择应被渲染');

    // 7. 兜底：当前场景无任何可见选择时，应生成 dead-end-btn
    reset();
    scene('start', {
        text: '死胡同',
        choices: [
            { text: '进入暗室', next: 'dead' }
        ]
    });
    scene('dead', { text: '无路可走' });
    visible = renderChoices(Huimen.StoryData.start.choices);
    assert(visible.length === 0, '死胡同场景应无可见选项');
    assert(ui.choices.children.length === 1, '应生成死胡同兜底按钮');
    assert(ui.choices.children[0].className.includes('dead-end-btn'), '兜底按钮应带 dead-end-btn 类');

    console.log('✓ 死胡同预防测试通过');
}

runTests();
