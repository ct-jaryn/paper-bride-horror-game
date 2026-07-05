/**
 * 微信小游戏入口集成测试
 *
 * 用 mock 的 wx 与 Canvas 验证小游戏主控能正常初始化、
 * 进入标题、选卷并开始游戏。
 */

import { strict as assert } from 'assert';

// 标记当前为微信小游戏环境
if (typeof globalThis.GameGlobal === 'undefined') {
    globalThis.GameGlobal = globalThis;
}

const audioInstances = [];
const writtenFiles = [];

function createMockFS() {
    const dirs = new Set();
    const files = new Map();
    return {
        accessSync(path) {
            if (!files.has(path) && !dirs.has(path)) throw new Error('not exist');
        },
        mkdirSync(path, recursive) {
            dirs.add(path);
        },
        writeFileSync(path, data, encoding) {
            files.set(path, data);
            writtenFiles.push(path);
        },
        readFileSync(path) {
            return files.get(path);
        }
    };
}

function createMockAudio() {
    const ctx = {
        src: '',
        volume: 1,
        loop: false,
        autoplay: false,
        play() {},
        stop() {},
        pause() {},
        destroy() {},
        onEnded() {},
        onError() {},
        onPlay() {}
    };
    audioInstances.push(ctx);
    return ctx;
}

const touchHandlers = {
    start: [],
    move: [],
    end: []
};

globalThis.wx = {
    getSystemInfoSync() {
        return { windowWidth: 375, windowHeight: 812, pixelRatio: 2, platform: 'devtools' };
    },
    createCanvas() {
        return {
            width: 750,
            height: 1624,
            getContext(type) {
                if (type !== '2d') return null;
                return createMockCtx();
            }
        };
    },
    getFileSystemManager: createMockFS,
    createInnerAudioContext: createMockAudio,
    onTouchStart(fn) { touchHandlers.start.push(fn); },
    onTouchMove(fn) { touchHandlers.move.push(fn); },
    onTouchEnd(fn) { touchHandlers.end.push(fn); },
    offTouchStart() {},
    onAudioInterruptionBegin() {},
    onAudioInterruptionEnd() {},
    env: { USER_DATA_PATH: 'mock/huimen' },
    getStorageSync(key) { return ''; },
    setStorageSync(key, value) {},
    removeStorageSync(key) {},
    clearStorageSync() {},
    getStorageInfoSync() { return { keys: [] }; }
};

function createMockCtx() {
    const measureCache = new Map();
    return {
        fillRect() {},
        clearRect() {},
        strokeRect() {},
        fillText() {},
        strokeText() {},
        beginPath() {},
        closePath() {},
        moveTo() {},
        lineTo() {},
        rect() {},
        quadraticCurveTo() {},
        arc() {},
        fill() {},
        stroke() {},
        clip() {},
        save() {},
        restore() {},
        scale() {},
        setTransform() {},
        measureText(text) {
            if (!measureCache.has(text)) {
                measureCache.set(text, { width: text.length * 14 });
            }
            return measureCache.get(text);
        }
    };
}

function triggerTouch(type, x, y) {
    const list = type === 'start' ? touchHandlers.start : type === 'move' ? touchHandlers.move : touchHandlers.end;
    list.forEach(fn => fn({ touches: [{ clientX: x, clientY: y }], changedTouches: [{ clientX: x, clientY: y }] }));
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 让 namespace.js 能把 Huimen 注册到全局
globalThis.window = globalThis;

const { start } = await import('../minigame/js/minigame-main.js');

const canvas = {
    width: 750,
    height: 1624,
    getContext: () => createMockCtx()
};
const ctx = createMockCtx();
const sysInfo = { windowWidth: 375, windowHeight: 812, pixelRatio: 2 };

try {
    start(canvas, ctx, sysInfo);
} catch (err) {
    console.error('start 失败:', err);
    throw err;
}

assert.strictEqual(globalThis.Huimen.StoryManifest.length, 7, '故事清单应为 7 个');
assert.strictEqual(typeof globalThis.Huimen.showScreen, 'function', 'Huimen.showScreen 应存在');
assert.strictEqual(typeof globalThis.Huimen.SoundManager.play, 'function', '小游戏音频适配器应注册');

// 模拟点击标题页的“翻开簿册”
triggerTouch('start', 187, 450);
triggerTouch('end', 187, 450);
await delay(50);

// 模拟点击《回门》的“开始”按钮（第一张卡片底部按钮约在 y=170 附近）
triggerTouch('start', 187, 170);
triggerTouch('end', 187, 170);
await delay(50);

// 等待打字机推进（或让它完成）
await delay(300);

assert.strictEqual(globalThis.Huimen.CurrentStory.id, 'huimen', '应进入回门故事');
assert.ok(globalThis.Huimen.GameState.currentScene, '应存在当前场景');
assert.ok(globalThis.Huimen.GameState.choiceLog.length === 0, '尚未选择');

console.log('✓ 微信小游戏入口集成测试通过');
