import { createScene, createChoice } from '../js/engine/sceneFactory.js';

function assertEqual(actual, expected, message) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error('FAIL:', message);
        console.error('  expected:', JSON.stringify(expected));
        console.error('  actual:  ', JSON.stringify(actual));
        process.exit(1);
    }
}

// createScene
const scene = createScene('test_scene', {
    title: '测试场景',
    text: '这是测试文本',
    effects: { sanity: -5 },
    choices: [{ text: '选择', next: 'next_scene' }],
    condition: { hasItem: 'coin' },
    hallucination: '幻觉文本',
    cg: 'test_cg'
});
assertEqual(scene.id, 'test_scene', 'scene should have id');
assertEqual(scene.title, '测试场景', 'scene should have title');
assertEqual(scene.text, '这是测试文本', 'scene should have text');
assertEqual(scene.effects, { sanity: -5 }, 'scene should have effects');
assertEqual(scene.choices.length, 1, 'scene should have choices');
assertEqual(scene.condition, { hasItem: 'coin' }, 'scene should have condition');
assertEqual(scene.hallucination, '幻觉文本', 'scene should have hallucination');
assertEqual(scene.cg, 'test_cg', 'scene should have cg');
assertEqual(scene.onEnter, undefined, 'scene should not have onEnter if not provided');

// createScene with ending
const endingScene = createScene('ending_scene', {
    title: '结局场景',
    text: '文本',
    ending: 'some_ending'
});
assertEqual(endingScene.ending, 'some_ending', 'scene should have ending');
assertEqual(endingScene.choices, undefined, 'ending scene should not have choices');

// createScene minimal
const minimalScene = createScene('minimal', { title: '最小', text: '文本' });
assertEqual(Object.keys(minimalScene), ['id', 'title', 'text'], 'minimal scene should only have required fields');

// createChoice
const choice = createChoice({
    text: '测试选择',
    next: 'next',
    condition: { flag: 'test' },
    effects: { yin: 5 },
    npc: 'npc_id',
    npcNode: 'start',
    custom: true,
    hidden: true,
    danger: true,
    exit: true
});
assertEqual(choice.text, '测试选择', 'choice should have text');
assertEqual(choice.next, 'next', 'choice should have next');
assertEqual(choice.condition, { flag: 'test' }, 'choice should have condition');
assertEqual(choice.effects, { yin: 5 }, 'choice should have effects');
assertEqual(choice.npc, 'npc_id', 'choice should have npc');
assertEqual(choice.npcNode, 'start', 'choice should have npcNode');
assertEqual(choice.custom, true, 'choice should have custom');
assertEqual(choice.hidden, true, 'choice should have hidden');
assertEqual(choice.danger, true, 'choice should have danger');
assertEqual(choice.exit, true, 'choice should have exit');
assertEqual(choice.ending, undefined, 'choice should not have ending if not provided');

console.log('sceneFactory tests passed');
