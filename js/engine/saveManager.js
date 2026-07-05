/**
 * 《阴阳簿》统一持久化层
 * 集中管理所有 localStorage 读写、版本控制、旧存档迁移
 */

import { Huimen } from './namespace.js';
import { safeMergeSave } from './utils.js';
import { Platform } from './platform.js';

const SAVE_VERSION = 2;
const STORAGE_KEY = 'huimen_save_v2';

// 旧版 key 清单，用于迁移
const LEGACY_KEYS = {
    globalFlags: 'huimen_global_flags',
    achievements: 'huimen_achievements',
    currency: 'huimen_currency',
    freeReviveUsed: 'huimen_free_revive_used',
    cgPurchased: 'huimen_currency_cg_purchased',
    hintTokens: 'huimen_hint_tokens',
    reviveTokens: 'huimen_revive_tokens',
    cg: 'huimen_cg_unlocked',
    sound: 'huimen_sound_settings'
};

let cache = null;
let dirty = false;

/**
 * 读取原始存储数据
 */
function readRaw() {
    try {
        const saved = Platform.storage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
    } catch (e) {
        console.error('读取统一存档失败:', e);
    }
    return null;
}

/**
 * 写入原始存储数据
 */
function writeRaw(data) {
    try {
        Platform.storage.setItem(STORAGE_KEY, JSON.stringify(data));
        cache = JSON.parse(JSON.stringify(data));
        dirty = false;
        return true;
    } catch (e) {
        console.error('写入统一存档失败:', e);
        return false;
    }
}

/**
 * 获取默认存档结构
 */
function getDefaultSave() {
    return {
        version: SAVE_VERSION,
        globalFlags: {},
        achievements: {
            unlocked: [],
            endingsReached: {}
        },
        currency: {
            balance: 0,
            hintTokens: 0,
            reviveTokens: 0,
            freeReviveUsed: [],
            cgUnlocked: []
        },
        cg: {
            unlocked: []
        },
        sound: {
            muted: false,
            volume: 0.7
        },
        stories: {}
    };
}

/**
 * 读取旧版单个 key
 */
function readLegacy(key) {
    try {
        const saved = Platform.storage.getItem(key);
        if (saved) return JSON.parse(saved);
    } catch (e) {
        console.warn(`读取旧存档 key 失败: ${key}`, e);
    }
    return null;
}

/**
 * 从旧版 key 迁移数据
 */
function migrateFromLegacy() {
    const save = getDefaultSave();

    // 全局 flag
    const globalFlags = readLegacy(LEGACY_KEYS.globalFlags);
    if (globalFlags) safeMergeSave(save.globalFlags, globalFlags);

    // 成就
    const achievements = readLegacy(LEGACY_KEYS.achievements);
    if (achievements) {
        if (Array.isArray(achievements.unlocked)) save.achievements.unlocked = achievements.unlocked;
        if (achievements.endingsReached) safeMergeSave(save.achievements.endingsReached, achievements.endingsReached);
        // 兼容旧版 achievements 直接是数组的情况
        if (Array.isArray(achievements)) {
            save.achievements.unlocked = achievements;
        }
    }

    // 货币
    const currencyBalance = readLegacy(LEGACY_KEYS.currency);
    if (typeof currencyBalance === 'number') save.currency.balance = currencyBalance;

    const freeReviveUsed = readLegacy(LEGACY_KEYS.freeReviveUsed);
    if (Array.isArray(freeReviveUsed)) save.currency.freeReviveUsed = freeReviveUsed;

    const cgPurchased = readLegacy(LEGACY_KEYS.cgPurchased);
    if (Array.isArray(cgPurchased)) save.currency.cgUnlocked = cgPurchased;

    const hintTokens = readLegacy(LEGACY_KEYS.hintTokens);
    if (typeof hintTokens === 'number') save.currency.hintTokens = hintTokens;

    const reviveTokens = readLegacy(LEGACY_KEYS.reviveTokens);
    if (typeof reviveTokens === 'number') save.currency.reviveTokens = reviveTokens;

    // CG
    const cg = readLegacy(LEGACY_KEYS.cg);
    if (Array.isArray(cg)) save.cg.unlocked = cg;

    // 音效设置
    const sound = readLegacy(LEGACY_KEYS.sound);
    if (sound) {
        if (sound.muted === true) save.sound.muted = true;
        if (typeof sound.volume === 'number') save.sound.volume = sound.volume;
    }

    // 各故事存档
    try {
        Platform.storage.keys().forEach(key => {
            if (key && key.startsWith('huimen_save_')) {
                const storyId = key.replace('huimen_save_', '');
                const data = readLegacy(key);
                if (data) save.stories[storyId] = data;
            }
        });
    } catch (e) {
        console.warn('迁移故事存档失败:', e);
    }

    return save;
}

/**
 * 清理旧版 key
 */
function clearLegacyKeys() {
    try {
        Object.values(LEGACY_KEYS).forEach(key => {
            Platform.storage.removeItem(key);
        });

        const toRemove = Platform.storage.keys().filter(key => key && key.startsWith('huimen_save_'));
        toRemove.forEach(key => Platform.storage.removeItem(key));
    } catch (e) {
        console.warn('清理旧存档失败:', e);
    }
}

/**
 * 初始化持久化层
 */
export function init() {
    if (cache) return cache;

    let data = readRaw();
    if (!data || data.version !== SAVE_VERSION) {
        data = migrateFromLegacy();
        writeRaw(data);
        clearLegacyKeys();
    }

    cache = JSON.parse(JSON.stringify(data));

    // 同步到 Huimen.GlobalFlags
    if (cache.globalFlags) {
        Huimen.GlobalFlags = { ...cache.globalFlags };
    }

    return cache;
}

/**
 * 获取完整存档数据（只读副本）
 */
export function getSnapshot() {
    if (!cache) init();
    return JSON.parse(JSON.stringify(cache));
}

/**
 * 立即持久化当前 cache
 */
export function flush() {
    if (!dirty || !cache) return true;
    return writeRaw(cache);
}

/**
 * 全局 Flags
 */
export function loadGlobalFlags() {
    if (!cache) init();
    return { ...cache.globalFlags };
}

export function saveGlobalFlags(flags) {
    if (!cache) init();
    cache.globalFlags = { ...flags };
    dirty = true;
    Huimen.GlobalFlags = cache.globalFlags;
    return flush();
}

/**
 * 成就数据
 */
export function loadAchievements() {
    if (!cache) init();
    return {
        unlocked: [...cache.achievements.unlocked],
        endingsReached: JSON.parse(JSON.stringify(cache.achievements.endingsReached))
    };
}

export function saveAchievements(data) {
    if (!cache) init();
    cache.achievements = {
        unlocked: Array.isArray(data.unlocked) ? [...data.unlocked] : cache.achievements.unlocked,
        endingsReached: data.endingsReached ? JSON.parse(JSON.stringify(data.endingsReached)) : cache.achievements.endingsReached
    };
    dirty = true;
    return flush();
}

/**
 * 货币数据
 */
export function loadCurrency() {
    if (!cache) init();
    return JSON.parse(JSON.stringify(cache.currency));
}

export function saveCurrency(data) {
    if (!cache) init();
    cache.currency = {
        balance: typeof data.balance === 'number' ? data.balance : cache.currency.balance,
        hintTokens: typeof data.hintTokens === 'number' ? data.hintTokens : cache.currency.hintTokens,
        reviveTokens: typeof data.reviveTokens === 'number' ? data.reviveTokens : cache.currency.reviveTokens,
        freeReviveUsed: Array.isArray(data.freeReviveUsed) ? [...data.freeReviveUsed] : cache.currency.freeReviveUsed,
        cgUnlocked: Array.isArray(data.cgUnlocked) ? [...data.cgUnlocked] : cache.currency.cgUnlocked
    };
    dirty = true;
    return flush();
}

/**
 * CG 数据
 */
export function loadCG() {
    if (!cache) init();
    return JSON.parse(JSON.stringify(cache.cg));
}

export function saveCG(data) {
    if (!cache) init();
    cache.cg = {
        unlocked: Array.isArray(data.unlocked) ? [...data.unlocked] : cache.cg.unlocked
    };
    dirty = true;
    return flush();
}

/**
 * 音效设置
 */
export function loadSoundSettings() {
    if (!cache) init();
    return JSON.parse(JSON.stringify(cache.sound));
}

export function saveSoundSettings(data) {
    if (!cache) init();
    cache.sound = {
        muted: data.muted === true,
        volume: typeof data.volume === 'number' ? Math.max(0, Math.min(1, data.volume)) : cache.sound.volume
    };
    dirty = true;
    return flush();
}

/**
 * 单故事存档
 */
export function loadStorySave(storyId) {
    if (!cache) init();
    return cache.stories[storyId] ? JSON.parse(JSON.stringify(cache.stories[storyId])) : null;
}

export function saveStorySave(storyId, state) {
    if (!cache) init();
    cache.stories[storyId] = JSON.parse(JSON.stringify(state));
    dirty = true;
    return flush();
}

export function removeStorySave(storyId) {
    if (!cache) init();
    if (cache.stories[storyId]) {
        delete cache.stories[storyId];
        dirty = true;
        return flush();
    }
    return true;
}

/**
 * 检查是否存在任意故事存档
 */
export function hasAnyStorySave(storyManifest) {
    if (!cache) init();
    if (!Array.isArray(storyManifest)) return false;
    return storyManifest.some(story => cache.stories[story.id]);
}

/**
 * 清空所有存档（慎用）
 */
export function clearAll() {
    cache = getDefaultSave();
    dirty = true;
    Platform.storage.removeItem(STORAGE_KEY);
    clearLegacyKeys();
    Huimen.GlobalFlags = {};
    return true;
}
