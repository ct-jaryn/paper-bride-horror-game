/**
 * saveManager 单元测试
 * 使用 Platform.storage 的内存回退（node 环境无 localStorage）
 */

import * as SaveManager from '../js/engine/saveManager.js';

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

// 每个测试前清空
SaveManager.clearAll();

console.log('测试全局 flags');
const flags = { xiulanMercy: true, hujia_to_zhou: false };
SaveManager.saveGlobalFlags(flags);
const loadedFlags = SaveManager.loadGlobalFlags();
assert('保存并读取全局 flags', JSON.stringify(loadedFlags) === JSON.stringify(flags));

console.log('测试故事存档');
const storyState = {
    storyId: 'huimen',
    sanity: 80,
    yin: 20,
    currentScene: 'prologue',
    inventory: ['铜钱'],
    flags: { met_xiulan: true }
};
SaveManager.saveStorySave('huimen', storyState);
const loadedStory = SaveManager.loadStorySave('huimen');
assert('保存并读取故事存档', loadedStory.currentScene === 'prologue' && loadedStory.inventory[0] === '铜钱');
assert('不同故事无存档', SaveManager.loadStorySave('shouye') === null);

console.log('测试成就');
SaveManager.saveAchievements({
    unlocked: ['first_blood'],
    endingsReached: { huimen: ['ending_1'] }
});
const achievements = SaveManager.loadAchievements();
assert('成就解锁列表', achievements.unlocked[0] === 'first_blood');
assert('结局达成记录', achievements.endingsReached.huimen[0] === 'ending_1');

console.log('测试货币');
SaveManager.saveCurrency({ balance: 100, hintTokens: 2, reviveTokens: 1 });
const currency = SaveManager.loadCurrency();
assert('货币余额', currency.balance === 100);
assert('提示令牌', currency.hintTokens === 2);

console.log('测试音效设置');
SaveManager.saveSoundSettings({ muted: true, volume: 0.5 });
const sound = SaveManager.loadSoundSettings();
assert('静音状态', sound.muted === true);
assert('音量裁剪', sound.volume === 0.5);

console.log('测试 CG');
SaveManager.saveCG({ unlocked: ['cg_1', 'cg_2'] });
const cg = SaveManager.loadCG();
assert('CG 解锁数量', cg.unlocked.length === 2);

console.log('测试快照');
const snapshot = SaveManager.getSnapshot();
assert('快照包含故事存档', snapshot.stories.huimen !== undefined);
assert('快照是深拷贝', snapshot.stories.huimen !== loadedStory);

console.log('测试删除存档');
SaveManager.removeStorySave('huimen');
assert('删除后故事存档为空', SaveManager.loadStorySave('huimen') === null);

console.log('测试清空');
SaveManager.saveCurrency({ balance: 999 });
SaveManager.clearAll();
const clearedCurrency = SaveManager.loadCurrency();
assert('清空后货币归零', clearedCurrency.balance === 0);
const clearedFlags = SaveManager.loadGlobalFlags();
assert('清空后全局 flags 为空', Object.keys(clearedFlags).length === 0);

console.log(`\n测试完成: 通过 ${passed}, 失败 ${failed}`);
if (failed > 0) process.exit(1);
