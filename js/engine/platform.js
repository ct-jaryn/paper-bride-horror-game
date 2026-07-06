/**
 * 《阴阳簿》跨平台兼容抽象层
 *
 * 目标运行时：
 * 1. 浏览器（GitHub Pages / 本地 HTTP 服务器）
 * 2. 微信小程序（使用 web-view 组件加载 H5）
 * 3. 微信小游戏（Canvas 运行时，无 DOM/CSS）
 *
 * 本层把存储、分享、剪贴板、弹窗、脚本加载等差异点收敛，
 * 上层引擎通过 Platform.xxx 调用，不必直接判断运行环境。
 */

const memoryStore = new Map();

// ---- 环境探测 ----
function detectEnv() {
    // 微信小游戏全局对象
    if (typeof GameGlobal !== 'undefined' && typeof wx !== 'undefined' && wx.getSystemInfoSync) {
        return 'minigame';
    }
    // 微信小程序 web-view（加载了 JSSDK）
    if (typeof wx !== 'undefined' && wx.miniProgram && wx.miniProgram.getEnv) {
        return 'weapp';
    }
    return 'browser';
}

export const ENV = detectEnv();

export function isBrowser() { return ENV === 'browser'; }
export function isWeapp() { return ENV === 'weapp'; }
export function isMinigame() { return ENV === 'minigame'; }

// ---- 日志 ----
function warn(name, e) {
    // eslint-disable-next-line no-console
    console.warn(`[Platform.${name}] 失败:`, e && e.message ? e.message : e);
}

// ---- 存储 ----
function createBrowserStorage() {
    const ls = typeof localStorage !== 'undefined' ? localStorage : null;
    return {
        getItem(key) {
            try {
                return ls ? ls.getItem(key) : memoryStore.get(key) || null;
            } catch (e) { warn('storage.getItem', e); return null; }
        },
        setItem(key, value) {
            try {
                if (ls) ls.setItem(key, String(value));
                else memoryStore.set(key, String(value));
                return true;
            } catch (e) { warn('storage.setItem', e); return false; }
        },
        removeItem(key) {
            try {
                if (ls) ls.removeItem(key);
                else memoryStore.delete(key);
                return true;
            } catch (e) { warn('storage.removeItem', e); return false; }
        },
        clear() {
            try {
                if (ls) ls.clear();
                else memoryStore.clear();
                return true;
            } catch (e) { warn('storage.clear', e); return false; }
        },
        keys() {
            try {
                if (ls) return Object.keys(ls);
                return Array.from(memoryStore.keys());
            } catch (e) { warn('storage.keys', e); return []; }
        }
    };
}

function createWeappStorage() {
    return {
        getItem(key) {
            try {
                // web-view 中优先尝试 localStorage，失败再转 wx.miniProgram
                if (typeof localStorage !== 'undefined') {
                    return localStorage.getItem(key);
                }
            } catch (e) {}
            try {
                if (wx && wx.miniProgram && wx.miniProgram.getStorageSync) {
                    const v = wx.miniProgram.getStorageSync(key);
                    return v === '' ? null : v;
                }
            } catch (e) { warn('storage.getItem', e); }
            return memoryStore.get(key) || null;
        },
        setItem(key, value) {
            try {
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem(key, String(value));
                    return true;
                }
            } catch (e) {}
            try {
                if (wx && wx.miniProgram && wx.miniProgram.setStorageSync) {
                    wx.miniProgram.setStorageSync(key, String(value));
                    return true;
                }
            } catch (e) { warn('storage.setItem', e); }
            memoryStore.set(key, String(value));
            return false;
        },
        removeItem(key) {
            try {
                if (typeof localStorage !== 'undefined') localStorage.removeItem(key);
            } catch (e) {}
            try {
                if (wx && wx.miniProgram && wx.miniProgram.removeStorageSync) {
                    wx.miniProgram.removeStorageSync(key);
                }
            } catch (e) { warn('storage.removeItem', e); }
            memoryStore.delete(key);
            return true;
        },
        clear() {
            try {
                if (typeof localStorage !== 'undefined') localStorage.clear();
            } catch (e) {}
            try {
                if (wx && wx.miniProgram && wx.miniProgram.clearStorageSync) {
                    wx.miniProgram.clearStorageSync();
                }
            } catch (e) { warn('storage.clear', e); }
            memoryStore.clear();
            return true;
        },
        keys() {
            const set = new Set();
            try {
                if (typeof localStorage !== 'undefined') {
                    for (let i = 0; i < localStorage.length; i++) {
                        const k = localStorage.key(i);
                        if (k) set.add(k);
                    }
                }
            } catch (e) {}
            return Array.from(set);
        }
    };
}

function createMinigameStorage() {
    return {
        getItem(key) {
            try {
                if (wx && wx.getStorageSync) {
                    const v = wx.getStorageSync(key);
                    return v === '' ? null : v;
                }
            } catch (e) { warn('storage.getItem', e); }
            return memoryStore.get(key) || null;
        },
        setItem(key, value) {
            try {
                if (wx && wx.setStorageSync) {
                    wx.setStorageSync(key, String(value));
                    return true;
                }
            } catch (e) { warn('storage.setItem', e); }
            memoryStore.set(key, String(value));
            return false;
        },
        removeItem(key) {
            try {
                if (wx && wx.removeStorageSync) wx.removeStorageSync(key);
            } catch (e) { warn('storage.removeItem', e); }
            memoryStore.delete(key);
            return true;
        },
        clear() {
            try {
                if (wx && wx.clearStorageSync) wx.clearStorageSync();
            } catch (e) { warn('storage.clear', e); }
            memoryStore.clear();
            return true;
        },
        keys() {
            try {
                if (wx && wx.getStorageInfoSync) {
                    const info = wx.getStorageInfoSync();
                    return info.keys || [];
                }
            } catch (e) { warn('storage.keys', e); }
            return Array.from(memoryStore.keys());
        }
    };
}

function createStorage() {
    if (isMinigame()) return createMinigameStorage();
    if (isWeapp()) return createWeappStorage();
    return createBrowserStorage();
}

// ---- 系统信息 ----
function getSystemInfo() {
    try {
        if (isMinigame() && wx.getSystemInfoSync) return wx.getSystemInfoSync();
        if (isWeapp() && wx.getSystemInfoSync) return wx.getSystemInfoSync();
    } catch (e) { warn('getSystemInfo', e); }
    return {
        platform: 'unknown',
        screenWidth: typeof window !== 'undefined' ? window.innerWidth : 750,
        screenHeight: typeof window !== 'undefined' ? window.innerHeight : 1334,
        windowWidth: typeof window !== 'undefined' ? window.innerWidth : 750,
        windowHeight: typeof window !== 'undefined' ? window.innerHeight : 1334,
        pixelRatio: typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1
    };
}

// ---- 剪贴板 ----
function setClipboard(text) {
    return new Promise((resolve, reject) => {
        if (isMinigame() || isWeapp()) {
            if (wx.setClipboardData) {
                wx.setClipboardData({
                    data: String(text),
                    success: () => resolve(true),
                    fail: reject
                });
                return;
            }
        }
        if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(String(text)).then(() => resolve(true)).catch(reject);
            return;
        }
        reject(new Error('当前环境不支持剪贴板'));
    });
}

// ---- 弹窗 ----
function alert(message, title = '提示') {
    if (isMinigame() || isWeapp()) {
        if (wx.showModal) {
            wx.showModal({ title, content: String(message), showCancel: false });
            return;
        }
    }
    if (typeof window !== 'undefined') window.alert(String(message));
}

function confirm(message, title = '请确认') {
    return new Promise((resolve) => {
        if (isMinigame() || isWeapp()) {
            if (wx.showModal) {
                wx.showModal({
                    title,
                    content: String(message),
                    showCancel: true,
                    success: (res) => resolve(!!res.confirm),
                    fail: () => resolve(false)
                });
                return;
            }
        }
        if (typeof window !== 'undefined') {
            resolve(window.confirm(String(message)));
            return;
        }
        resolve(false);
    });
}

// ---- 脚本加载 ----
async function loadScript(path) {
    if (isMinigame()) {
        // 小游戏通过 require 加载已打包的 CommonJS/AMD 模块
        if (typeof require !== 'undefined') {
            try {
                // 若请求的是 stories/{id}/index.js，映射到小游戏 bundle
                const bundleMatch = path.match(/^stories\/([^/]+)\/index\.js$/);
                if (bundleMatch) {
                    const storyId = bundleMatch[1];
                    const bundle = require('./js/stories-bundle.js');
                    const mod = bundle.StoryBundles ? bundle.StoryBundles[storyId] : bundle[storyId];
                    if (mod) return mod;
                    throw new Error(`小游戏 bundle 中找不到故事: ${storyId}`);
                }
                return require(path);
            } catch (e) {
                warn('loadScript.require', e);
                throw e;
            }
        }
        throw new Error('小游戏环境缺少 require');
    }
    // 浏览器 / 小程序 web-view：使用原生 ESM 动态导入
    return import(/* @vite-ignore */ path);
}

// ---- 分享 ----
function share(payload = {}) {
    if (isMinigame()) {
        if (wx.shareAppMessage) {
            wx.shareAppMessage({
                title: payload.title || '《阴阳簿》中式文字恐怖游戏集',
                imageUrl: payload.imageUrl || '',
                query: payload.query || ''
            });
        }
        return;
    }
    if (isWeapp()) {
        // web-view 通过 postMessage 通知小程序宿主页面触发分享
        if (wx.miniProgram && wx.miniProgram.postMessage) {
            wx.miniProgram.postMessage({
                data: { event: 'share', payload }
            });
        }
        return;
    }
    if (typeof navigator !== 'undefined' && navigator.share) {
        navigator.share({
            title: payload.title || '《阴阳簿》',
            text: payload.text || '',
            url: payload.url || window.location.href
        }).catch(() => {});
    }
}

// ---- 用户交互监听（用于解锁音频、首屏点击等） ----
function onUserInteraction(callback, options = { once: true }) {
    if (isMinigame()) {
        // 小游戏监听触摸事件
        if (wx.onTouchStart) {
            const handler = () => {
                callback();
                if (options.once) wx.offTouchStart(handler);
            };
            wx.onTouchStart(handler);
        }
        return;
    }
    if (typeof document === 'undefined') return;
    const types = ['click', 'touchstart'];
    const handler = () => {
        callback();
        if (options.once) {
            types.forEach(t => document.removeEventListener(t, handler));
        }
    };
    types.forEach(t => document.addEventListener(t, handler, { passive: true }));
}

// ---- 导出 ----
export const Platform = {
    ENV,
    isBrowser,
    isWeapp,
    isMinigame,
    storage: createStorage(),
    getSystemInfo,
    setClipboard,
    alert,
    confirm,
    loadScript,
    share,
    onUserInteraction
};

export default Platform;
