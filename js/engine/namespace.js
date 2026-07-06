/**
 * 《阴阳簿》核心命名空间
 * 所有引擎状态与公共 API 统一挂在此处，并导出到 window.Huimen
 */

export const Huimen = {
    // 当前加载的故事
    CurrentStory: null,

    // 当前故事数据（动态绑定）
    StoryData: {},
    Endings: {},

    // 游戏状态（由 state.js 管理）
    GameState: {
        storyId: null,
        sanity: 100,
        yin: 0,
        time: 1140,
        inventory: [],
        flags: {},
        currentScene: 'prologue',
        history: [],
        choiceLog: []
    },

    // 跨卷共享的世界状态（由 state.js / saveManager.js 管理）
    GlobalFlags: {},

    // 事件系统（由 eventBus.js 管理）
    GameEvents: {
        listeners: {},
        on(event, callback) {
            if (!this.listeners[event]) this.listeners[event] = [];
            this.listeners[event].push(callback);
        },
        off(event, callback) {
            if (!this.listeners[event]) return;
            this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
        },
        emit(event, data) {
            if (!this.listeners[event]) return;
            this.listeners[event].forEach(cb => {
                try { cb(data); } catch (e) { console.error(`事件 ${event} 回调出错:`, e); }
            });
        }
    },

    // 故事清单（由 main.js 注入）
    StoryManifest: null,

    // 当前故事配置（由 storyLoader.js 注入）
    StoryConfig: null,

    // 公共 API（由各引擎模块注入）
    loadStory: null,
    showScreen: null,
    getChoiceLog: null,
    exportChoiceLog: null,
    openRecordOverlay: null,
    closeRecordOverlay: null,
    openJourneyOverlay: null,
    closeJourneyOverlay: null,

    // 提示管理器（由 game.js 注入）
    ToastManager: null
};

// 保持浏览器控制台可访问
if (typeof window !== 'undefined') {
    window.Huimen = Huimen;
}
