/**
 * recordManager 复活逻辑单元测试
 * 验证 reviveAtCheckpoint 不会让玩家复活后立即再次死亡
 */

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

// 模拟 DOM 环境
const globalJsdomPath = '/usr/local/lib/node_modules/jsdom/lib/api.js';
const { JSDOM } = await import(globalJsdomPath);
const dom = new JSDOM(`<!DOCTYPE html><html><body>
  <div id="title-screen" class="screen"></div>
  <div id="story-select-screen" class="screen"></div>
  <div id="game-screen" class="screen"></div>
  <div id="ending-screen" class="screen"></div>
  <div id="achievements-screen" class="screen"></div>
  <div id="shop-screen" class="screen"></div>
  <div id="story-text"></div>
  <div id="typing-cursor"></div>
  <div id="skip-hint"></div>
  <div id="choices"></div>
  <div id="time-display"></div>
  <div id="sanity-bar"></div>
  <div id="sanity-value"></div>
  <div id="yin-bar"></div>
  <div id="yin-value"></div>
  <div id="inventory" class="hidden"><div id="inventory-items"></div></div>
</body></html>`);
global.window = dom.window;
global.document = dom.window.document;
global.Node = dom.window.Node;
global.requestAnimationFrame = (cb) => cb();

const { reviveAtCheckpoint, saveReviveCheckpoint } = await import('../js/engine/recordManager.js');

// 准备初始状态
Huimen.GameState.sanity = 50;
Huimen.GameState.yin = 40;
Huimen.GameState.time = 1500;
Huimen.GameState.inventory = ['打火机'];
Huimen.GameState.flags = { someFlag: true };
Huimen.GameState.history = [];
Huimen.GameState.choiceLog = [];
Huimen.GameState.reviveCheckpoints = [];
Huimen.GameState.currentScene = 'test_scene';

// 准备一个测试场景
Huimen.StoryData = {
    test_scene: {
        id: 'test_scene',
        title: '测试场景',
        text: '测试文本',
        choices: [{ text: '继续', next: 'test_scene' }]
    }
};

console.log('测试复活逻辑');

// 测试1: 濒死状态下保存检查点，复活后 sanity 不应仍在死亡线
Huimen.GameState.sanity = 5;   // 濒死
Huimen.GameState.yin = 95;     // 濒死
Huimen.GameState.time = 1890;  // 已过永夜
saveReviveCheckpoint();

// 模拟死亡后复活
const result = reviveAtCheckpoint('test_story');
assert('复活返回 true', result === true);
assert('复活后 yin 清零', Huimen.GameState.yin === 0);
assert('复活后 sanity 不低于安全底线(30)', Huimen.GameState.sanity >= 30);
assert('复活后 time 不超过永夜阈值(1800)', Huimen.GameState.time <= 1800);
assert('复活后检查点已消耗', Huimen.GameState.reviveCheckpoints.length === 0);

// 测试2: 正常状态下复活，sanity 应保持检查点值（不低于底线时不提升）
Huimen.GameState.sanity = 60;
Huimen.GameState.yin = 20;
Huimen.GameState.time = 1200;
saveReviveCheckpoint();
reviveAtCheckpoint('test_story');
assert('正常 sanity(60) 复活后保持 60', Huimen.GameState.sanity === 60);

// 测试3: 无检查点时返回 true（走重开逻辑）
Huimen.GameState.reviveCheckpoints = [];
Huimen.loadStory = () => {}; // mock
const noCheckpointResult = reviveAtCheckpoint('test_story');
assert('无检查点时返回 true', noCheckpointResult === true);

// 测试4: 物品和 flag 正确恢复
Huimen.GameState.sanity = 70;
Huimen.GameState.yin = 10;
Huimen.GameState.time = 1300;
Huimen.GameState.inventory = ['铜钥匙', '红绳'];
Huimen.GameState.flags = { knowsTruth: true, foundBones: true };
saveReviveCheckpoint();
// 改变状态
Huimen.GameState.inventory = ['无'];
Huimen.GameState.flags = {};
reviveAtCheckpoint('test_story');
assert('复活后物品正确恢复', Huimen.GameState.inventory.includes('铜钥匙') && Huimen.GameState.inventory.includes('红绳'));
assert('复活后 flag 正确恢复', Huimen.GameState.flags.knowsTruth === true);

console.log(`\n测试完成: 通过 ${passed}, 失败 ${failed}`);
if (failed > 0) process.exit(1);
