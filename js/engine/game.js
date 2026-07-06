/**
 * 《阴阳簿》游戏主控
 * 负责初始化、结局展示、标题页交互
 */

import { Huimen } from './namespace.js';
import { emit } from './eventBus.js';
import { ui } from './dom.js';
import * as SaveManager from './saveManager.js';
import { resetState } from './state.js';
import { isTouchDevice } from './utils.js';
import { showScreen, renderScene, renderStorySelect, renderAchievements, updateStatus, updateInventory } from './renderer.js';
import { loadStory } from './storyLoader.js';
import { Platform } from './platform.js';
import { initPause } from './pauseManager.js';

/**
 * 初始化游戏
 */
export function initGame() {
    // 加载跨卷世界状态（SaveManager 与 AchievementEngine 已由 main.js 初始化）
    Huimen.GlobalFlags = SaveManager.loadGlobalFlags();

    // 绑定标题画面按钮
    document.getElementById('start-btn').addEventListener('click', () => {
        showScreen('storySelect');
        renderStorySelect();
    });

    const continueBtn = document.getElementById('continue-btn');
    if (continueBtn) {
        const lastSave = getMostRecentStorySave();
        if (lastSave) {
            continueBtn.classList.remove('hidden');
            continueBtn.textContent = `续读 · ${lastSave.story.title}`;
            continueBtn.addEventListener('click', () => {
                loadStory(lastSave.story.id, false);
            });
        }
    }

    const achievementsBtn = document.getElementById('achievements-btn');
    if (achievementsBtn) {
        achievementsBtn.addEventListener('click', () => {
            renderAchievements();
            showScreen('achievements');
        });
    }

    const backFromAchievementsBtn = document.getElementById('back-from-achievements-btn');
    if (backFromAchievementsBtn) {
        backFromAchievementsBtn.addEventListener('click', () => {
            showScreen('title');
        });
    }

    document.getElementById('back-to-title-btn').addEventListener('click', () => {
        showScreen('title');
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
        if (Huimen.CurrentStory) {
            resetGame();
            showScreen('game');
            renderScene('prologue');
        } else {
            showScreen('storySelect');
            renderStorySelect();
        }
    });

    const reviveBtn = document.getElementById('revive-btn');
    if (reviveBtn) {
        reviveBtn.addEventListener('click', () => {
            if (Huimen.CurrentStory && typeof Huimen.reviveAtCheckpoint === 'function') {
                Huimen.reviveAtCheckpoint(Huimen.CurrentStory.id);
            }
        });
    }

    // 结局显示时决定是否展示“借命还阳”按钮
    if (typeof Huimen.GameEvents !== 'undefined') {
        Huimen.GameEvents.on('endingShown', () => {
            const checkpoints = (Huimen.GameState && Huimen.GameState.reviveCheckpoints) || [];
            if (reviveBtn) {
                reviveBtn.classList.toggle('hidden', checkpoints.length === 0);
            }
        });
    }

    const endingToTitleBtn = document.getElementById('ending-to-title-btn');
    if (endingToTitleBtn) {
        endingToTitleBtn.addEventListener('click', () => showScreen('title'));
    }

    const endingToSelectBtn = document.getElementById('ending-to-select-btn');
    if (endingToSelectBtn) {
        endingToSelectBtn.addEventListener('click', () => {
            showScreen('storySelect');
            renderStorySelect();
        });
    }

    // 绑定游戏内「记录」按钮
    const recordBtn = document.getElementById('record-btn');
    if (recordBtn) {
        recordBtn.addEventListener('click', () => {
            if (Huimen.openRecordOverlay) Huimen.openRecordOverlay();
        });
    }

    // 绑定「暂停」按钮与暂停浮层
    initPause();

    const recordClose = document.getElementById('record-close');
    if (recordClose) {
        recordClose.addEventListener('click', () => {
            if (Huimen.closeRecordOverlay) Huimen.closeRecordOverlay();
        });
    }

    const recordExport = document.getElementById('record-export');
    if (recordExport) {
        recordExport.addEventListener('click', () => {
            if (Huimen.exportCurrentRecord) Huimen.exportCurrentRecord();
        });
    }

    const recordReplay = document.getElementById('record-replay');
    if (recordReplay) {
        recordReplay.addEventListener('click', () => {
            if (Huimen.replayCurrentStory) Huimen.replayCurrentStory();
        });
    }

    const recordOverlay = document.getElementById('record-overlay');
    if (recordOverlay) {
        recordOverlay.addEventListener('click', (e) => {
            if (e.target === recordOverlay && Huimen.closeRecordOverlay) Huimen.closeRecordOverlay();
        });
    }

    // 绑定「阴阳历程」按钮
    const journeyTitleBtn = document.getElementById('journey-title-btn');
    if (journeyTitleBtn) journeyTitleBtn.addEventListener('click', () => {
        if (Huimen.openJourneyOverlay) Huimen.openJourneyOverlay();
    });

    const endingGalleryTitleBtn = document.getElementById('ending-gallery-title-btn');
    if (endingGalleryTitleBtn) endingGalleryTitleBtn.addEventListener('click', () => {
        if (Huimen.openEndingGallery) Huimen.openEndingGallery();
    });

    const journeySelectBtn = document.getElementById('journey-select-btn');
    if (journeySelectBtn) journeySelectBtn.addEventListener('click', () => {
        if (Huimen.openJourneyOverlay) Huimen.openJourneyOverlay();
    });

    const journeyClose = document.getElementById('journey-close');
    if (journeyClose) journeyClose.addEventListener('click', () => {
        if (Huimen.closeJourneyOverlay) Huimen.closeJourneyOverlay();
    });

    const journeyEndingGalleryBtn = document.getElementById('journey-ending-gallery-btn');
    if (journeyEndingGalleryBtn) {
        journeyEndingGalleryBtn.addEventListener('click', () => {
            if (Huimen.closeJourneyOverlay) Huimen.closeJourneyOverlay();
            if (Huimen.openEndingGallery) Huimen.openEndingGallery();
        });
    }

    const journeyOverlay = document.getElementById('journey-overlay');
    if (journeyOverlay) {
        journeyOverlay.addEventListener('click', (e) => {
            if (e.target === journeyOverlay && Huimen.closeJourneyOverlay) Huimen.closeJourneyOverlay();
        });
    }

    // 标题页交互增强：点击任意处解锁音频、键盘导航、动态提示
    initTitleScreenInteraction();

    // 点击跳过打字机
    if (ui.storyText) {
        ui.storyText.addEventListener('click', () => {
            if (Huimen.skipTyping) Huimen.skipTyping();
        });
    }

    emit('gameInit', {});
}

/**
 * 标题页交互增强
 */
export function initTitleScreenInteraction() {
    const titleScreen = document.getElementById('title-screen');
    const startBtn = document.getElementById('start-btn');
    const titleHint = document.getElementById('title-hint');

    if (!titleScreen) return;

    // 根据是否有存档动态调整提示文案
    if (titleHint) {
        const hasAnySave = SaveManager.hasAnyStorySave(Huimen.StoryManifest);
        titleHint.textContent = hasAnySave
            ? '选择一卷以继续你的记录'
            : '轻触画面以开启阴阳之门';
    }

    // 点击/触摸标题页任意位置：解锁音频上下文并播放环境音
    const unlockAudioOnce = () => {
        if (typeof Huimen.SoundManager !== 'undefined' && Huimen.SoundManager.playAmbient) {
            Huimen.SoundManager.playAmbient();
        }
    };
    titleScreen.addEventListener('click', unlockAudioOnce, { once: true });
    titleScreen.addEventListener('touchstart', unlockAudioOnce, { once: true });

    // 主按钮自动聚焦（桌面端）
    if (startBtn && !isTouchDevice()) {
        setTimeout(() => startBtn.focus(), 300);
    }

    // 标题区鼠标视差：随指针轻微偏移，营造阴森空间感
    const titleContent = titleScreen.querySelector('.title-content');
    if (titleContent && !isTouchDevice()) {
        let rafId = null;
        titleScreen.addEventListener('mousemove', (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 12;
                const y = (e.clientY / window.innerHeight - 0.5) * 8;
                titleContent.style.transform = `translate(${x}px, ${y}px)`;
                rafId = null;
            });
        }, { passive: true });

        titleScreen.addEventListener('mouseleave', () => {
            titleContent.style.transform = '';
        });
    }

    // 为标题页按钮统一添加键盘支持
    titleScreen.querySelectorAll('button').forEach(btn => {
        if (btn.hasAttribute('tabindex')) return;
        btn.setAttribute('tabindex', '0');
    });
}

/**
 * 重置当前故事
 */
export function resetGame() {
    resetState(Huimen.CurrentStory ? Huimen.CurrentStory.id : null, true);

    if (Huimen.CurrentStory) {
        SaveManager.removeStorySave(Huimen.CurrentStory.id);
    }

    updateStatus();
    updateInventory();
}

/**
 * 获取最近有存档的故事
 */
function getMostRecentStorySave() {
    if (!Huimen.StoryManifest) return null;

    let best = null;
    Huimen.StoryManifest.forEach(story => {
        const save = SaveManager.loadStorySave(story.id);
        if (!save || !save.lastSaveAt) return;
        if (!best || save.lastSaveAt > best.save.lastSaveAt) {
            best = { story, save };
        }
    });

    return best;
}

// 导出公共 API 到 Huimen
Huimen.loadStory = loadStory;
