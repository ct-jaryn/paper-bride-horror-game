/**
 * 《阴阳簿》结局管理器
 * 负责结局展示、结局成就检查与相关全局状态更新。
 * 从 game.js 独立出来，以打破 game.js ↔ recordManager.js 的循环依赖。
 */

import { Huimen } from './namespace.js';
import { emit } from './eventBus.js';
import * as SaveManager from './saveManager.js';
import { ui } from './dom.js';

/**
 * 显示结局画面并触发成就检查
 */
export function showEnding(endingId) {
    const ending = Huimen.Endings[endingId];
    if (!ending) {
        console.error('结局不存在:', endingId);
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
    if (typeof Huimen.showScreen === 'function') {
        Huimen.showScreen('ending');
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
