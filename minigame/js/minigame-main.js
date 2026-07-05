/**
 * 微信小游戏主控
 *
 * 初始化引擎、存档、成就、货币、音频与 Canvas 渲染器，
 * 并加载剧情数据包，启动标题画面。
 */

import { Huimen } from '../../js/engine/namespace.js';
import * as SaveManager from '../../js/engine/saveManager.js';
import { loadSoundSettings, saveSoundSettings } from '../../js/engine/saveManager.js';
import '../../achievements.js';
import { init as initCurrency } from '../../currency.js';
import { StoryManifest } from '../../stories/manifest.js';
import { StoryBundles } from './stories-bundle.js';
import { CanvasRenderer } from './canvas-renderer.js';
import { AudioAdapter } from './audio-adapter.js';

function loadAudioSettings() {
    try {
        const s = loadSoundSettings();
        return { muted: s.muted === true, volume: typeof s.volume === 'number' ? s.volume : 0.7 };
    } catch (e) {
        return { muted: false, volume: 0.7 };
    }
}

function saveAudioSettings(adapter) {
    try {
        saveSoundSettings({ muted: adapter.isMuted(), volume: 0.7 });
    } catch (e) {}
}

export function start(canvas, ctx, systemInfo) {
    // 1. 初始化持久化层
    SaveManager.init();

    // 2. 注入故事清单
    Huimen.StoryManifest = StoryManifest;

    // 3. 成就引擎已在自身模块加载时注册到 Huimen，执行 init
    if (Huimen.AchievementEngine && Huimen.AchievementEngine.init) {
        Huimen.AchievementEngine.init();
    }

    // 4. 货币系统（小游戏下会自动跳过 DOM 操作）
    initCurrency();

    // 5. 音频适配器
    const audio = AudioAdapter.init();
    const soundSettings = loadAudioSettings();
    if (soundSettings.muted) audio.toggleMute();
    Huimen.SoundManager = audio;

    // 6. Canvas 渲染器
    const renderer = new CanvasRenderer(canvas, ctx, systemInfo);
    renderer.setAudio(audio);
    renderer.setStoryBundles(StoryBundles);

    // 监听静音切换以持久化
    const originalToggle = audio.toggleMute.bind(audio);
    audio.toggleMute = function() {
        const result = originalToggle();
        saveAudioSettings(audio);
        return result;
    };

    renderer.start();
}

export default { start };
