/**
 * 《阴阳簿》结局管理器
 * 负责结局展示、结局成就检查与相关全局状态更新。
 * 从 game.js 独立出来，以打破 game.js ↔ recordManager.js 的循环依赖。
 */

import { Huimen } from './namespace.js';
import { emit, on } from './eventBus.js';
import * as SaveManager from './saveManager.js';
import { ui } from './dom.js';
import { getForcedEnding } from './forcedEndings.js';

// 离开结局页时清除死亡氛围 class
on('screenChange', (e) => {
    if (e && e.screen !== 'ending') {
        const endingScreen = document.getElementById('ending-screen');
        if (endingScreen) endingScreen.classList.remove('death-ending');
    }
});

/**
 * 显示结局画面并触发成就检查
 */
export function showEnding(endingId) {
    const ending = Huimen.Endings[endingId] || getForcedEnding(endingId);
    if (!ending) {
        console.error('结局不存在:', endingId);
        return;
    }

    const historyLength = (Huimen.GameState.history || []).length;
    const trueEndingBlocked = ending.trueEnding && historyLength < 20;

    if (trueEndingBlocked) {
        // 不触发结局，回到当前场景继续探索，让玩家积累更多场景步数
        if (typeof Huimen.renderPrematureTrueEndingHint === 'function') {
            Huimen.renderPrematureTrueEndingHint(Huimen.GameState.currentScene);
        }
        return;
    }

    let newlyUnlocked = [];
    let isFirstCompletion = false;

    if (typeof Huimen.AchievementEngine !== 'undefined' && Huimen.CurrentStory) {
        const storyId = Huimen.CurrentStory.id;
        const previousEndings = Huimen.AchievementEngine.endingsReached[storyId] || [];
        isFirstCompletion = previousEndings.length === 0;

        Huimen.AchievementEngine.recordEnding(storyId, endingId);

        // 低理智存活标记
        if (Huimen.GameState.sanity <= 10) {
            Huimen.GlobalFlags.survivedLowSanity = true;
            SaveManager.saveGlobalFlags(Huimen.GlobalFlags);
        }

        newlyUnlocked = Huimen.AchievementEngine.checkAll({
            storyId: storyId,
            endingId: endingId,
            currentEndingId: endingId,
            globalFlags: Huimen.GlobalFlags,
            flags: Huimen.GameState.flags,
            inventory: Huimen.GameState.inventory
        });

        newlyUnlocked.forEach(ach => {
            showAchievementToast(ach);
            emit('achievementUnlocked', { achievement: ach });
        });
    }

    if (ui.endingTitle) ui.endingTitle.textContent = ending.title;
    if (ui.endingText) ui.endingText.textContent = ending.text;

    // 显示当前故事结局收集进度
    const endingCountEl = document.getElementById('ending-count');
    if (endingCountEl && Huimen.CurrentStory && Huimen.Endings) {
        const storyId = Huimen.CurrentStory.id;
        const total = Object.keys(Huimen.Endings).length;
        const unlocked = (Huimen.AchievementEngine?.endingsReached[storyId] || []).length;
        endingCountEl.textContent = `已解锁结局 ${unlocked} / ${total}`;
    } else if (endingCountEl) {
        endingCountEl.textContent = '';
    }

    if (typeof Huimen.showScreen === 'function') {
        Huimen.showScreen('ending');
    }

    // 死亡结局增加额外血色氛围
    const endingScreen = document.getElementById('ending-screen');
    if (endingScreen) {
        const isDeath = /死亡|疯狂|附身|万劫|劫|鬼|尸|替|纸人|溺|溺亡|迷失/.test(ending.title || '') ||
            ['madness', 'possessed', 'eternalNight'].includes(endingId);
        endingScreen.classList.toggle('death-ending', isDeath);
    }

    emit('endingShown', {
        storyId: Huimen.CurrentStory ? Huimen.CurrentStory.id : null,
        endingId,
        ending,
        newlyUnlocked: newlyUnlocked || [],
        isFirstCompletion
    });
}

/**
 * 显示成就解锁提示
 */
function showAchievementToast(achievement) {
    if (typeof Huimen.ToastManager !== 'undefined' && Huimen.ToastManager.show) {
        Huimen.ToastManager.show({
            icon: achievement.icon,
            title: achievement.name,
            description: achievement.description,
            duration: 4000,
            className: 'achievement-toast'
        });
    }
}

// 导出公共 API 到 Huimen
Huimen.showEnding = showEnding;
