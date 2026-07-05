/**
 * 《阴阳簿》效果与条件引擎
 * 处理时辰、条件判断、效果应用、结局判定与视觉特效
 */

import { Huimen } from './namespace.js';
import { emit } from './eventBus.js';
import { adjustNumber, pushToArray, removeFromArray, setGlobalFlag, clearGlobalFlag } from './state.js';
import { updateStatus, updateInventory } from './renderer.js';

export const SHICHEN = [
    { name: '戌时', start: 1140, end: 1260 },
    { name: '亥时', start: 1260, end: 1380 },
    { name: '子时', start: 1380, end: 1500 },
    { name: '丑时', start: 1500, end: 1620 },
    { name: '寅时', start: 1620, end: 1740 },
    { name: '卯时', start: 1740, end: 1860 },
    { name: '永夜', start: 1860, end: 9999 }
];

/**
 * 根据分钟数获取时辰刻名
 */
export function getShichen(time) {
    for (let s of SHICHEN) {
        if (time >= s.start && time < s.end) {
            const passed = time - s.start;
            const ke = Math.floor(passed / 15) + 1;
            return `${s.name}${ke > 8 ? '末' : ke + '刻'}`;
        }
    }
    return '子时';
}

/**
 * 检查单个条件
 */
export function checkCondition(condition, stateOverride) {
    const state = stateOverride || Huimen.GameState;

    if (!condition) return true;
    if (condition.hasItem) {
        return state.inventory.includes(condition.hasItem);
    }
    if (condition.lacksItem) {
        return !state.inventory.includes(condition.lacksItem);
    }
    if (condition.flag) {
        return state.flags[condition.flag] === true;
    }
    if (condition.noFlag) {
        return !state.flags[condition.noFlag];
    }
    if (condition.flagValue) {
        return state.flags[condition.flagValue.key] === condition.flagValue.value;
    }
    if (condition.sanityBelow) {
        return state.sanity < condition.sanityBelow;
    }
    if (condition.sanityAbove) {
        return state.sanity > condition.sanityAbove;
    }
    if (condition.yinAbove) {
        return state.yin > condition.yinAbove;
    }
    if (condition.yinBelow) {
        return state.yin < condition.yinBelow;
    }
    if (condition.timeAfter) {
        return state.time >= condition.timeAfter;
    }
    if (condition.timeBefore) {
        return state.time < condition.timeBefore;
    }
    if (condition.hasVisited) {
        return state.history.includes(condition.hasVisited);
    }
    if (condition.hasNotVisited) {
        return !state.history.includes(condition.hasNotVisited);
    }
    if (condition.custom && typeof condition.custom === 'function') {
        return condition.custom(state);
    }
    console.warn('未知条件类型:', condition);
    return false;
}

/**
 * 应用一组效果
 */
export function applyEffects(effects) {
    if (!effects) return;

    if (effects.sanity) {
        adjustNumber('sanity', effects.sanity, 0, 100);
    }
    if (effects.yin) {
        adjustNumber('yin', effects.yin, 0, 100);
    }
    if (effects.time) {
        adjustNumber('time', effects.time);
    }
    if (effects.addItem) {
        const added = pushToArray('inventory', effects.addItem, { unique: true });
        if (added) emit('itemAdd', { item: effects.addItem });
    }
    if (effects.removeItem) {
        removeFromArray('inventory', effects.removeItem);
    }
    if (effects.setFlag) {
        setGlobalFlag(effects.setFlag, true);
        emit('flagSet', { flag: effects.setFlag });
    }
    if (effects.clearFlag) {
        clearGlobalFlag(effects.clearFlag);
    }
    if (effects.visual) {
        triggerEffect(effects.visual, effects.visualDuration);
    }

    updateStatus();
    updateInventory();
}

/**
 * 检查是否触发强制结局
 * 返回结局 ID 或 null
 */
export function checkGameOver() {
    if (Huimen.GameState.sanity <= 0) {
        return 'madness';
    }
    if (Huimen.GameState.yin >= 100) {
        return 'possessed';
    }
    if (Huimen.GameState.time >= 1860) {
        return 'eternalNight';
    }
    return null;
}

/**
 * 触发视觉特效
 */
export function triggerEffect(effect, duration = 2000) {
    switch (effect) {
        case 'flicker': {
            const overlay = document.getElementById('flicker-overlay');
            if (!overlay) break;
            overlay.style.animation = 'none';
            overlay.offsetHeight;
            overlay.style.animation = 'flicker 2s infinite';
            setTimeout(() => {
                overlay.style.animation = 'flicker 8s infinite';
            }, duration);
            break;
        }
        case 'blood': {
            const blood = document.getElementById('blood-splatter');
            if (!blood) break;
            blood.classList.remove('hidden');
            setTimeout(() => blood.classList.add('hidden'), duration);
            break;
        }
        case 'shake': {
            document.body.classList.add('shake');
            setTimeout(() => document.body.classList.remove('shake'), 500);
            break;
        }
        case 'whisper': {
            const whisper = document.getElementById('ghost-whisper');
            if (!whisper) break;
            const whispers = ['回来吧……', '别走……', '戏还没散……', '等着你呢……'];
            whisper.textContent = whispers[Math.floor(Math.random() * whispers.length)];
            whisper.classList.remove('hidden');
            setTimeout(() => whisper.classList.add('hidden'), 3000);
            break;
        }
        case 'paper-doll': {
            const doll = document.getElementById('paper-doll');
            if (!doll) break;
            doll.classList.remove('hidden');
            setTimeout(() => doll.classList.add('hidden'), duration);
            break;
        }
    }
}
