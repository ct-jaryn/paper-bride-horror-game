/**
 * 《阴阳簿》游戏状态管理
 * 负责 GameState / GlobalFlags 的维护与持久化
 *
 * 设计原则：所有对 GameState 的写入应通过本模块提供的 API 完成，
 * 避免各引擎模块直接修改 Huimen.GameState，以降低隐式耦合。
 */

import { Huimen } from './namespace.js';
import * as SaveManager from './saveManager.js';

export const GameState = Huimen.GameState;
export const GlobalFlags = Huimen.GlobalFlags;

const DEFAULT_STATE = {
    storyId: null,
    sanity: 100,
    yin: 0,
    time: 1140,
    inventory: [],
    flags: {},
    currentScene: 'prologue',
    history: [],
    choiceLog: [],
    reviveCheckpoints: [],
    npcState: {}
};

const ALLOWED_UPDATE_KEYS = ['sanity', 'yin', 'time', 'inventory', 'flags', 'currentScene', 'history', 'choiceLog', 'lastSaveAt', 'reviveCheckpoints', 'npcState'];

function cloneState() {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

/**
 * 合并允许的键到 GameState
 */
export function updateState(updates) {
    if (!updates || typeof updates !== 'object') return;
    ALLOWED_UPDATE_KEYS.forEach(key => {
        if (key in updates) {
            Huimen.GameState[key] = clone(updates[key]);
        }
    });
}

/**
 * 设置单个 GameState 键值
 */
export function patchGameState(key, value) {
    if (!ALLOWED_UPDATE_KEYS.includes(key)) {
        console.warn('patchGameState: 不允许写入的键:', key);
        return;
    }
    Huimen.GameState[key] = clone(value);
}

/**
 * 对数值型状态做增量并裁剪到 [min, max]
 */
export function adjustNumber(key, delta, min = -Infinity, max = Infinity) {
    if (!['sanity', 'yin', 'time'].includes(key)) {
        console.warn('adjustNumber: 仅支持 sanity/yin/time:', key);
        return;
    }
    const current = typeof Huimen.GameState[key] === 'number' ? Huimen.GameState[key] : 0;
    Huimen.GameState[key] = Math.max(min, Math.min(max, current + delta));
}

/**
 * 向数组型状态追加元素（自动去重，可选最大长度限制）
 */
export function pushToArray(key, item, options = {}) {
    const { unique = false, maxLength = null } = options;
    const arr = Huimen.GameState[key];
    if (!Array.isArray(arr)) {
        console.warn('pushToArray: 目标不是数组:', key);
        return false;
    }
    if (unique && arr.includes(item)) return false;
    arr.push(item);
    if (maxLength && arr.length > maxLength) {
        Huimen.GameState[key] = arr.slice(-maxLength);
    }
    return true;
}

/**
 * 从数组型状态移除元素
 */
export function removeFromArray(key, item) {
    const arr = Huimen.GameState[key];
    if (!Array.isArray(arr)) {
        console.warn('removeFromArray: 目标不是数组:', key);
        return;
    }
    Huimen.GameState[key] = arr.filter(i => i !== item);
}

/**
 * 设置对象型状态中的某个键
 */
export function setFlag(key, value = true, target = 'game') {
    if (target === 'game' || target === 'both') {
        Huimen.GameState.flags[key] = value;
    }
    if (target === 'global' || target === 'both') {
        Huimen.GlobalFlags[key] = value;
    }
}

/**
 * 清除对象型状态中的某个键
 */
export function clearFlag(key, target = 'game') {
    if (target === 'game' || target === 'both') {
        delete Huimen.GameState.flags[key];
    }
    if (target === 'global' || target === 'both') {
        delete Huimen.GlobalFlags[key];
    }
}

/**
 * 重置 GameState 到默认值
 */
export function resetState(storyId = null, keepGlobalFlags = true) {
    const fresh = cloneState();
    Object.keys(Huimen.GameState).forEach(key => delete Huimen.GameState[key]);
    Object.assign(Huimen.GameState, fresh);

    if (storyId !== null) {
        Huimen.GameState.storyId = storyId;
    }
    if (keepGlobalFlags) {
        Huimen.GameState.flags = { ...Huimen.GlobalFlags };
    }
    if (Huimen.StoryConfig && Huimen.StoryConfig.defaultState) {
        Object.entries(Huimen.StoryConfig.defaultState).forEach(([key, value]) => {
            if (ALLOWED_UPDATE_KEYS.includes(key)) {
                Huimen.GameState[key] = clone(value);
            }
        });
    }
    if (Huimen.StoryConfig && Array.isArray(Huimen.StoryConfig.defaultItems)) {
        Huimen.GameState.inventory = [...new Set([...(Huimen.GameState.inventory || []), ...Huimen.StoryConfig.defaultItems])];
    }
}

/**
 * 设置全局 flag，并同步持久化
 */
export function setGlobalFlag(key, value = true) {
    setFlag(key, value, 'both');
    SaveManager.saveGlobalFlags(Huimen.GlobalFlags);
}

/**
 * 清除全局 flag，并同步持久化
 */
export function clearGlobalFlag(key) {
    clearFlag(key, 'both');
    SaveManager.saveGlobalFlags(Huimen.GlobalFlags);
}

/**
 * 加载单故事存档，校验字段后写入 GameState
 */
export function loadStoryState(storyId, storyData, globalFlags) {
    const data = SaveManager.loadStorySave(storyId);
    if (!data) {
        resetState(storyId, true);
        return;
    }

    const clean = {};
    const allowed = ['sanity', 'yin', 'time', 'inventory', 'flags', 'currentScene', 'history', 'choiceLog', 'lastSaveAt', 'npcState'];
    allowed.forEach(key => {
        if (key in data) clean[key] = clone(data[key]);
    });

    if (typeof clean.sanity !== 'number') clean.sanity = 100;
    if (typeof clean.yin !== 'number') clean.yin = 0;
    if (typeof clean.time !== 'number') clean.time = 1140;
    if (!Array.isArray(clean.inventory)) clean.inventory = [];
    if (typeof clean.flags !== 'object' || clean.flags === null) clean.flags = {};
    if (typeof clean.npcState !== 'object' || clean.npcState === null) clean.npcState = {};
    if (typeof clean.currentScene !== 'string' || !storyData[clean.currentScene]) {
        clean.currentScene = 'prologue';
    }
    if (!Array.isArray(clean.history)) clean.history = [];
    if (!Array.isArray(clean.choiceLog)) clean.choiceLog = [];

    Object.keys(Huimen.GameState).forEach(key => delete Huimen.GameState[key]);
    Object.assign(Huimen.GameState, cloneState(), clean);
    Huimen.GameState.storyId = storyId;
    Huimen.GameState.flags = { ...(globalFlags || Huimen.GlobalFlags), ...(Huimen.GameState.flags || {}) };
}

/**
 * 保存当前 GameState
 */
export function saveStoryState(storyId) {
    Huimen.GameState.storyId = storyId;
    Huimen.GameState.lastSaveAt = Date.now();
    SaveManager.saveStorySave(storyId, clone(Huimen.GameState));
}
