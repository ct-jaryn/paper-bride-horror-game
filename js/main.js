/**
 * 《阴阳簿》ES Module 入口
 * 负责按正确顺序初始化所有子系统
 */

import { Huimen } from './engine/namespace.js';
import * as SaveManager from './engine/saveManager.js';
import { StoryManifest } from '../stories/manifest.js';
import '../achievements.js';
import { init as initSound } from '../sound.js';
import { init as initCG } from '../cg.js';
import { init as initCurrency } from '../currency.js';
import { initGame } from './engine/game.js';
import { renderScreens } from './templates/index.js';
import './engine/endingManager.js';
import './engine/endingGallery.js';
import './engine/npcSystem.js';
import './engine/pauseManager.js';
import { initWeappBridge, isWechatWebview } from './weapp-bridge.js';

// 注入故事清单（成就、货币等子系统会在自身模块加载时注册到 Huimen）
Huimen.StoryManifest = StoryManifest;

/**
 * 启动所有子系统
 */
function boot() {
    try {
        // 1. 先初始化统一持久化层
        SaveManager.init();

        // 2. 成就引擎读取已解锁数据
        if (typeof Huimen.AchievementEngine !== 'undefined' && Huimen.AchievementEngine.init) {
            Huimen.AchievementEngine.init();
        }

        // 3. 渲染屏幕模板到 DOM（必须在音效/CG/货币系统之前）
        renderScreens();

        // 4. 音效 / CG / 阴钱系统初始化
        initSound();
        initCG();
        initCurrency();

        // 5. 游戏引擎绑定 UI 并触发 gameInit 事件
        initGame();
    } catch (e) {
        const err = document.createElement('div');
        err.id = 'boot-error';
        err.style.cssText = 'position:fixed;top:0;left:0;background:#fff;color:#c00;z-index:99999;font-size:20px;padding:20px;white-space:pre-wrap;';
        err.textContent = 'BOOT ERROR: ' + e.message + '\n' + e.stack;
        document.body.appendChild(err);
        throw e;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', maybeBoot);
} else {
    maybeBoot();
}

function maybeBoot() {
    if (isWechatWebview()) {
        initWeappBridge().then(boot).catch(boot);
    } else {
        boot();
    }
}
