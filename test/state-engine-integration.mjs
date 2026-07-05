/**
 * 状态与效果引擎集成测试
 * 不依赖 DOM，直接验证 state.js 与 effectEngine.js 的写入约束。
 */

import { Huimen } from '../js/engine/namespace.js';
import {
    resetState,
    adjustNumber,
    pushToArray,
    removeFromArray,
    setGlobalFlag,
    clearGlobalFlag,
    patchGameState
} from '../js/engine/state.js';
import { applyEffects, checkGameOver, getShichen } from '../js/engine/effectEngine.js';

// 提供最小 Browser API，使不涉及真实渲染的状态操作能跑通
globalThis.localStorage = {
    store: new Map(),
    getItem(k) { return this.store.has(k) ? this.store.get(k) : null; },
    setItem(k, v) { this.store.set(k, String(v)); },
    removeItem(k) { this.store.delete(k); },
    clear() { this.store.clear(); }
};

globalThis.document = {
    readyState: 'complete',
    getElementById() { return null; },
    body: { style: {} },
    addEventListener() {},
    removeEventListener() {}
};

// 初始化干净状态
resetState('test', false);

// 测试数值裁剪
adjustNumber('sanity', -150, 0, 100);
if (Huimen.GameState.sanity !== 0) {
    throw new Error(`sanity 裁剪失败: ${Huimen.GameState.sanity}`);
}

adjustNumber('yin', 150, 0, 100);
if (Huimen.GameState.yin !== 100) {
    throw new Error(`yin 裁剪失败: ${Huimen.GameState.yin}`);
}

adjustNumber('time', 120);
if (Huimen.GameState.time !== 1260) {
    throw new Error(`time 增量失败: ${Huimen.GameState.time}`);
}

// 测试数组操作
pushToArray('inventory', '铜镜', { unique: true });
pushToArray('inventory', '铜镜', { unique: true });
if (Huimen.GameState.inventory.length !== 1) {
    throw new Error('inventory 去重失败');
}

pushToArray('inventory', '护身符', { unique: true });
if (Huimen.GameState.inventory.length !== 2) {
    throw new Error('inventory 追加失败');
}

removeFromArray('inventory', '铜镜');
if (Huimen.GameState.inventory.includes('铜镜')) {
    throw new Error('inventory 移除失败');
}

// 测试全局 flag
setGlobalFlag('testFlag', true);
if (!Huimen.GameState.flags.testFlag || !Huimen.GlobalFlags.testFlag) {
    throw new Error('setGlobalFlag 未同步到 game/global');
}

clearGlobalFlag('testFlag');
if (Huimen.GameState.flags.testFlag || Huimen.GlobalFlags.testFlag) {
    throw new Error('clearGlobalFlag 未清除 flag');
}

// 测试效果引擎
Huimen.GameState.sanity = 50;
Huimen.GameState.yin = 30;
applyEffects({ sanity: -10, yin: 20, addItem: '打火机' });
if (Huimen.GameState.sanity !== 40 || Huimen.GameState.yin !== 50) {
    throw new Error('applyEffects 数值效果失败');
}
if (!Huimen.GameState.inventory.includes('打火机')) {
    throw new Error('applyEffects 添加物品失败');
}

// 测试强制结局判定
Huimen.GameState.sanity = 0;
if (checkGameOver() !== 'madness') {
    throw new Error('checkGameOver 未在 sanity=0 时返回 madness');
}

Huimen.GameState.sanity = 50;
Huimen.GameState.yin = 100;
if (checkGameOver() !== 'possessed') {
    throw new Error('checkGameOver 未在 yin=100 时返回 possessed');
}

Huimen.GameState.yin = 0;
Huimen.GameState.time = 1900;
if (checkGameOver() !== 'eternalNight') {
    throw new Error('checkGameOver 未在 time>=1860 时返回 eternalNight');
}

// 测试时辰转换
if (!getShichen(1140).includes('戌时')) {
    throw new Error('getShichen 转换失败');
}

console.log('✓ 状态与效果引擎集成测试通过');
