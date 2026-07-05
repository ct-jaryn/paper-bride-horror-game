/**
 * 《阴阳簿》DOM 引用集中管理
 * 所有 getElementById 集中在此，避免各模块重复查询。
 *
 * 采用 getter 惰性获取，避免模块在 DOM 尚未就绪时加载导致拿到 null。
 */

const SCREEN_IDS = {
    title: 'title-screen',
    storySelect: 'story-select-screen',
    game: 'game-screen',
    ending: 'ending-screen',
    achievements: 'achievements-screen',
    shop: 'shop-screen'
};

const UI_IDS = {
    storyText: 'story-text',
    cursor: 'typing-cursor',
    skipHint: 'skip-hint',
    choices: 'choices',
    timeDisplay: 'time-display',
    sanityBar: 'sanity-bar',
    sanityValue: 'sanity-value',
    yinBar: 'yin-bar',
    yinValue: 'yin-value',
    inventory: 'inventory',
    inventoryItems: 'inventory-items',
    endingTitle: 'ending-title',
    endingText: 'ending-text',
    storyGrid: 'story-grid',
    effectsLayer: 'effects-layer',
    achievementList: 'achievement-list',
    achievementCount: 'achievement-count'
};

const OVERLAY_IDS = {
    record: 'record-overlay',
    journey: 'journey-overlay'
};

function defineLazyProperties(obj, idMap) {
    Object.keys(idMap).forEach(key => {
        let cache = null;
        let cached = false;
        Object.defineProperty(obj, key, {
            get() {
                if (!cached) {
                    cache = document.getElementById(idMap[key]);
                    cached = true;
                }
                return cache;
            },
            set(value) {
                cache = value;
                cached = true;
            },
            enumerable: true,
            configurable: true
        });
    });
}

export const screens = {};
export const ui = {};
export const overlayElements = {};

defineLazyProperties(screens, SCREEN_IDS);
defineLazyProperties(ui, UI_IDS);
defineLazyProperties(overlayElements, OVERLAY_IDS);

/**
 * 强制刷新所有缓存的 DOM 引用（例如 DOM 被重新创建后）
 */
export function refreshDomCache() {
    [screens, ui, overlayElements].forEach(obj => {
        Object.keys(obj).forEach(key => {
            obj[key] = null;
        });
    });
}

/**
 * 安全的 DOM 元素访问：若元素不存在则返回 null 并打印警告（可选）
 */
export function safeElement(id, silent = false) {
    const el = document.getElementById(id);
    if (!el && !silent) {
        console.warn('DOM 元素未找到:', id);
    }
    return el;
}
