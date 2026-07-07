/**
 * renderer 单元测试
 * 使用 jsdom 模拟浏览器 DOM
 */

const globalJsdomPath = '/usr/local/lib/node_modules/jsdom/lib/api.js';
const { JSDOM } = await import(globalJsdomPath);

// 在导入 renderer 前初始化 DOM
const dom = new JSDOM(`<!DOCTYPE html>
<html>
<body>
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
</body>
</html>`);

global.window = dom.window;
global.document = dom.window.document;
global.Node = dom.window.Node;
global.requestAnimationFrame = (cb) => cb();

// 重置 Huimen 命名空间状态
const { Huimen } = await import('../js/engine/namespace.js');
Huimen.GameState.sanity = 100;
Huimen.GameState.yin = 0;
Huimen.GameState.time = 1140;
Huimen.GameState.inventory = [];

const { screens, ui } = await import('../js/engine/dom.js');
const { processText, showScreen, updateStatus, updateInventory, renderChoices, renderScene, typeText } = await import('../js/engine/renderer.js');

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

console.log('测试 processText');
assert('处理 [red] 标签', processText('[red]危险[/red]').includes('<span class="red">危险</span>'));
assert('处理 [whisper] 标签', processText('[whisper]低语[/whisper]').includes('<span class="whisper">低语</span>'));
assert('处理 [scream] 标签', processText('[scream]尖叫[/scream]').includes('<span class="scream">尖叫</span>'));
assert('处理 [faded] 标签', processText('[faded]褪色[/faded]').includes('<span class="faded">褪色</span>'));

console.log('测试 showScreen');
showScreen('game');
assert('game screen 被激活', screens.game.classList.contains('active'));
assert('title screen 未激活', !screens.title.classList.contains('active'));

console.log('测试 updateStatus');
Huimen.GameState.sanity = 50;
Huimen.GameState.yin = 80;
Huimen.GameState.time = 1500;
updateStatus();
assert('timeDisplay 更新为丑时', ui.timeDisplay.textContent === '丑时1刻');
assert('sanityBar 宽度为 50%', ui.sanityBar.style.width === '50%');
assert('sanityValue 显示 50', ui.sanityValue.textContent === '50');
assert('yinBar 宽度为 80%', ui.yinBar.style.width === '80%');
assert('yinValue 显示 80', ui.yinValue.textContent === '80');

console.log('测试 updateInventory');
Huimen.GameState.inventory = ['铜钱', '红线'];
updateInventory();
assert('inventory 显示', !ui.inventory.classList.contains('hidden'));
assert('inventory items 数量为 2', ui.inventoryItems.children.length === 2);
assert('第一个 item 文本正确', ui.inventoryItems.children[0].textContent === '铜钱');

Huimen.GameState.inventory = [];
updateInventory();
assert('空 inventory 隐藏', ui.inventory.classList.contains('hidden'));

console.log('测试 renderChoices');
const choices = [
    { text: '选项 A', next: 'scene_a' },
    { text: '选项 B', next: 'scene_b', condition: { flag: 'unlocked' } },
    { text: '选项 C', next: 'scene_c', condition: { flag: 'locked' } },
    { text: '危险选项', next: 'scene_d', danger: true }
];
Huimen.GameState.flags = { unlocked: true };
renderChoices(choices);
assert('渲染可见选项', ui.choices.children.length === 3);
assert('危险选项有 danger class', ui.choices.children[2].classList.contains('danger'));
assert('第一个按钮文本正确', ui.choices.children[0].textContent === '选项 A');

console.log('测试 renderScene textVariants');

Huimen.GameState.sanity = 100;
Huimen.GameState.yin = 0;
Huimen.GameState.inventory = [];
Huimen.GameState.flags = {};
Huimen.GameState.history = [];

Huimen.StoryData = {
    variant_test: {
        id: 'variant_test',
        title: '变体测试',
        text: '基础文本。',
        textVariants: [
            { condition: { flag: 'knowsTruth' }, text: '[whisper]你已经知道真相了。[/whisper]' },
            { condition: { hasItem: '铜钥匙' }, text: '口袋里的铜钥匙在发烫。' }
        ],
        choices: [{ text: '继续', next: 'variant_test' }]
    }
};

// 测试 textVariants 逻辑：模拟 renderScene 的条件匹配
const { checkCondition } = await import('../js/engine/effectEngine.js');
Huimen.GameState.flags = {};
Huimen.GameState.inventory = [];
let testText = '基础文本。';
const variants = Huimen.StoryData.variant_test.textVariants;
for (const v of variants) {
    if (checkCondition(v.condition)) {
        testText += '\n\n' + v.text;
    }
}
assert('无 flag/物品时 textVariants 不追加', !testText.includes('真相') && !testText.includes('铜钥匙'));

Huimen.GameState.flags = { knowsTruth: true };
Huimen.GameState.inventory = ['铜钥匙'];
testText = '基础文本。';
for (const v of variants) {
    if (checkCondition(v.condition)) {
        testText += '\n\n' + v.text;
    }
}
assert('有 flag 时追加变体文本', testText.includes('真相'));
assert('有物品时追加变体文本', testText.includes('铜钥匙'));

console.log('测试折叠阈值响应式');
Huimen.StoryData = {
    collapse_test: {
        id: 'collapse_test',
        title: '折叠测试',
        text: '测试',
        choices: Array.from({ length: 7 }, (_, i) => ({ text: `选项 ${i + 1}`, next: 'collapse_test' }))
    }
};

// 直接测试 renderChoices，跳过异步 typeText
const collapseChoices = Huimen.StoryData.collapse_test.choices;

// 桌面宽度：阈值应为 8，7 个选项不折叠
dom.window.innerWidth = 1200;
renderChoices(collapseChoices);
assert('桌面宽度 7 个选项不折叠', ui.choices.children.length === 7);

// 移动宽度：阈值应为 5，7 个选项折叠为 5+toggle
ui.choices.innerHTML = '';
dom.window.innerWidth = 375;
renderChoices(collapseChoices);
assert('移动宽度 7 个选项折叠为 5+1', ui.choices.children.length === 6);

console.log(`\n测试完成: 通过 ${passed}, 失败 ${failed}`);
if (failed > 0) process.exit(1);
