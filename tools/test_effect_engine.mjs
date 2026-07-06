/**
 * effectEngine 条件与时辰判定单元测试
 * 纯 Node 环境运行，不依赖浏览器 API
 */

import { getShichen, checkCondition, checkGameOver, applyEffects, SHICHEN } from '../js/engine/effectEngine.js';
import { Huimen } from '../js/engine/namespace.js';

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

function makeState(overrides = {}) {
    return {
        inventory: [],
        flags: {},
        sanity: 100,
        yin: 0,
        time: 1140,
        history: [],
        ...overrides
    };
}

console.log('测试 getShichen');
assert('戌时1刻 (1140)', getShichen(1140) === '戌时1刻');
assert('戌时8刻 (1259)', getShichen(1259) === '戌时8刻');
assert('亥时1刻 (1260)', getShichen(1260) === '亥时1刻');
assert('子时3刻 (1410)', getShichen(1410) === '子时3刻');
assert('永夜1刻 (1860)', getShichen(1860) === '永夜1刻');
assert('未知时辰默认返回子时', getShichen(0) === '子时');

console.log('测试 checkCondition');
assert('无条件返回 true', checkCondition(null, makeState()) === true);
assert('空条件返回 true', checkCondition({}, makeState()) === true);

const itemState = makeState({ inventory: ['铜钱', '红线'] });
assert('hasItem 命中', checkCondition({ hasItem: '铜钱' }, itemState) === true);
assert('hasItem 未命中', checkCondition({ hasItem: '纸人' }, itemState) === false);
assert('lacksItem 命中', checkCondition({ lacksItem: '纸人' }, itemState) === true);
assert('lacksItem 未命中', checkCondition({ lacksItem: '铜钱' }, itemState) === false);

const flagState = makeState({ flags: { rescued: true, seen: false, count: 3 } });
assert('flag 为 true 命中', checkCondition({ flag: 'rescued' }, flagState) === true);
assert('flag 不存在未命中', checkCondition({ flag: 'missing' }, flagState) === false);
assert('flagValue 命中', checkCondition({ flagValue: { key: 'count', value: 3 } }, flagState) === true);
assert('flagValue 未命中', checkCondition({ flagValue: { key: 'count', value: 2 } }, flagState) === false);
assert('noFlag 命中', checkCondition({ noFlag: 'missing' }, flagState) === true);
assert('noFlag 未命中', checkCondition({ noFlag: 'rescued' }, flagState) === false);

const statState = makeState({ sanity: 30, yin: 70, time: 1500 });
assert('sanityBelow 命中', checkCondition({ sanityBelow: 40 }, statState) === true);
assert('sanityAbove 命中', checkCondition({ sanityAbove: 20 }, statState) === true);
assert('yinAbove 命中', checkCondition({ yinAbove: 60 }, statState) === true);
assert('yinBelow 命中', checkCondition({ yinBelow: 80 }, statState) === true);
assert('timeAfter 命中', checkCondition({ timeAfter: 1400 }, statState) === true);
assert('timeBefore 命中', checkCondition({ timeBefore: 1600 }, statState) === true);

const histState = makeState({ history: ['sceneA', 'sceneB'] });
assert('hasVisited 命中', checkCondition({ hasVisited: 'sceneA' }, histState) === true);
assert('hasNotVisited 命中', checkCondition({ hasNotVisited: 'sceneC' }, histState) === true);

assert('custom 函数命中', checkCondition({ custom: (s) => s.sanity === 30 }, statState) === true);
assert('custom 函数未命中', checkCondition({ custom: (s) => s.sanity === 100 }, statState) === false);

console.log('测试 checkGameOver');
const originalSanity = Huimen.GameState.sanity;
const originalYin = Huimen.GameState.yin;
const originalTime = Huimen.GameState.time;

Huimen.GameState.sanity = 0;
assert('sanity <= 0 -> madness', checkGameOver() === 'madness');
Huimen.GameState.sanity = 50;
Huimen.GameState.yin = 100;
assert('yin >= 100 -> possessed', checkGameOver() === 'possessed');
Huimen.GameState.yin = 50;
Huimen.GameState.time = 1860;
assert('time >= 1860 -> eternalNight', checkGameOver() === 'eternalNight');
Huimen.GameState.time = 1200;
assert('未触发结局 -> null', checkGameOver() === null);

Huimen.GameState.sanity = originalSanity;
Huimen.GameState.yin = originalYin;
Huimen.GameState.time = originalTime;

console.log('测试 applyEffects');
Huimen.GameState.sanity = 80;
Huimen.GameState.yin = 20;
Huimen.GameState.inventory = [];
Huimen.GameState.flags = {};

applyEffects({ sanity: -10, yin: 5 });
assert('applyEffects: sanity 减少', Huimen.GameState.sanity === 70);
assert('applyEffects: yin 增加', Huimen.GameState.yin === 25);

applyEffects({ addItem: '铜钱' });
assert('applyEffects: 单个 addItem', Huimen.GameState.inventory.includes('铜钱'));

applyEffects({ addItem: ['红线', '铜镜碎片'] });
assert('applyEffects: 数组 addItem 第一项', Huimen.GameState.inventory.includes('红线'));
assert('applyEffects: 数组 addItem 第二项', Huimen.GameState.inventory.includes('铜镜碎片'));

applyEffects({ addItem: '铜钱' });
assert('applyEffects: 重复 addItem 不重复', Huimen.GameState.inventory.filter(i => i === '铜钱').length === 1);

applyEffects({ removeItem: '铜钱' });
assert('applyEffects: removeItem', !Huimen.GameState.inventory.includes('铜钱'));

applyEffects({ setFlag: 'met_xiulan' });
assert('applyEffects: 单个 setFlag', Huimen.GameState.flags.met_xiulan === true);

applyEffects({ setFlag: ['rescued', 'forgiven'] });
assert('applyEffects: 数组 setFlag 第一项', Huimen.GameState.flags.rescued === true);
assert('applyEffects: 数组 setFlag 第二项', Huimen.GameState.flags.forgiven === true);

applyEffects({ clearFlag: 'met_xiulan' });
assert('applyEffects: clearFlag', Huimen.GameState.flags.met_xiulan === undefined);

applyEffects(null);
assert('applyEffects: null 安全', true);

console.log(`\n测试完成: 通过 ${passed}, 失败 ${failed}`);
if (failed > 0) process.exit(1);
