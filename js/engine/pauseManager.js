/**
 * 《阴阳簿》暂停管理器
 * 提供游戏内暂停浮层：继续此局 / 返回选卷 / 返回封面。
 */

import { Huimen } from './namespace.js';
import { emit } from './eventBus.js';
import { showScreen, renderStorySelect } from './renderer.js';

function getOverlay() {
    return document.getElementById('pause-overlay');
}

function isOpen() {
    const overlay = getOverlay();
    return !!overlay && overlay.classList.contains('active');
}

/**
 * 仅隐藏浮层 DOM（不触发恢复事件）
 */
function hideOverlay() {
    const overlay = getOverlay();
    if (!overlay) return;
    overlay.classList.remove('active');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

/**
 * 打开暂停浮层
 */
export function openPause() {
    const overlay = getOverlay();
    if (!overlay) return;
    // 停止正在进行的打字机动画，避免恢复后状态残留
    if (Huimen.skipTyping) Huimen.skipTyping();
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
    emit('gamePaused', {});
}

/**
 * 关闭暂停浮层并恢复游戏
 */
export function closePause() {
    if (!isOpen()) return;
    hideOverlay();
    emit('gameResumed', {});
}

/**
 * 暂停后返回选卷（管理界面）
 */
export function pauseBackToSelect() {
    hideOverlay();
    showScreen('storySelect');
    renderStorySelect();
}

/**
 * 暂停后返回封面（开始界面）
 */
export function pauseBackToTitle() {
    hideOverlay();
    showScreen('title');
}

/**
 * 绑定暂停相关按钮与快捷键
 */
export function initPause() {
    const pauseBtn = document.getElementById('pause-btn');
    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => openPause());
    }

    const resumeBtn = document.getElementById('pause-resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => closePause());
    }

    const toSelectBtn = document.getElementById('pause-to-select-btn');
    if (toSelectBtn) {
        toSelectBtn.addEventListener('click', () => pauseBackToSelect());
    }

    const toTitleBtn = document.getElementById('pause-to-title-btn');
    if (toTitleBtn) {
        toTitleBtn.addEventListener('click', () => pauseBackToTitle());
    }

    // ESC 关闭暂停（继续此局）
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen()) {
            closePause();
        }
    });
}

Huimen.openPause = openPause;
Huimen.closePause = closePause;
