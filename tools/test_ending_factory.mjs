/**
 * endingFactory 单元测试
 */

import { createEnding, createNPC, createDialogueNode, createDialogueChoice } from '../js/engine/endingFactory.js';

let passed = 0;
let failed = 0;

function assert(name, condition) {
    if (condition) {
        passed++;
        console.log(`  PASS: ${name}`);
    } else {
        failed++;
        console.error(`  FAIL: ${name}`);
    }
}

console.log('测试 createEnding');
const ending = createEnding('test_ending', {
    title: '测试结局',
    text: '结局文本',
    description: '描述',
    hidden: true,
    condition: { flag: 'unlocked' },
    cg: 'ending_cg'
});
assert('ending 包含 id', ending.id === 'test_ending');
assert('ending 包含 title', ending.title === '测试结局');
assert('ending 包含 text', ending.text === '结局文本');
assert('ending 包含 description', ending.description === '描述');
assert('ending 包含 hidden', ending.hidden === true);
assert('ending 包含 condition', JSON.stringify(ending.condition) === JSON.stringify({ flag: 'unlocked' }));
assert('ending 包含 cg', ending.cg === 'ending_cg');
assert('id 不会被 options 覆盖', createEnding('a', { id: 'b', title: 't', text: 'x' }).id === 'a');

console.log('测试 createNPC');
const npc = createNPC('test_npc', {
    name: '测试 NPC',
    title: '称号',
    dialogue: { start: { text: '你好', choices: [] } },
    affinity: 10,
    effects: { sanity: 5 }
});
assert('npc 包含 id', npc.id === 'test_npc');
assert('npc 包含 name', npc.name === '测试 NPC');
assert('npc 包含 title', npc.title === '称号');
assert('npc 包含 dialogue', npc.dialogue !== undefined);
assert('npc 包含 affinity', npc.affinity === 10);
assert('npc 包含 effects', npc.effects.sanity === 5);

console.log('测试 createDialogueNode');
const node = createDialogueNode('start', {
    text: '节点文本',
    choices: [{ text: '选项' }],
    effects: { yin: 5 },
    next: 'next_node'
});
assert('node 包含 id', node.id === 'start');
assert('node 包含 text', node.text === '节点文本');
assert('node 包含 choices', Array.isArray(node.choices));
assert('node 包含 effects', node.effects.yin === 5);
assert('node 包含 next', node.next === 'next_node');

console.log('测试 createDialogueChoice');
const choice = createDialogueChoice({
    text: '选项文本',
    next: 'next_node',
    exit: true,
    condition: { flag: 'met' },
    effects: { sanity: 10 }
});
assert('choice 包含 text', choice.text === '选项文本');
assert('choice 包含 next', choice.next === 'next_node');
assert('choice 包含 exit', choice.exit === true);
assert('choice 包含 condition', JSON.stringify(choice.condition) === JSON.stringify({ flag: 'met' }));
assert('choice 包含 effects', choice.effects.sanity === 10);

console.log(`\n测试完成: 通过 ${passed}, 失败 ${failed}`);
if (failed > 0) process.exit(1);
