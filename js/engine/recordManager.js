/**
 * 《阴阳簿》选择与历程记录管理
 * 处理玩家选择、记录面板与阴阳历程面板
 */

import { Huimen } from './namespace.js';
import { emit } from './eventBus.js';
import { overlayElements } from './dom.js';
import { escapeHtml, formatGameTime } from './utils.js';
import { skipTyping, renderScene, isTyping } from './renderer.js';
import { applyEffects, checkGameOver, getShichen } from './effectEngine.js';
import * as SaveManager from './saveManager.js';
import { saveStoryState, pushToArray, patchGameState, updateState } from './state.js';
import { showEnding } from './endingManager.js';
import { Platform } from './platform.js';

/**
 * 执行选择：记录、生效、推进
 */
export function makeChoice(choice, choiceIndex) {
    if (isTyping()) skipTyping();

    // 在做选择前存档，用于死亡后复活回退
    saveReviveCheckpoint();

    const sceneId = Huimen.GameState.currentScene;

    emit('choiceMade', { choice, sceneId });

    setTimeout(() => {
        const before = {
            sanity: Huimen.GameState.sanity,
            yin: Huimen.GameState.yin,
            time: Huimen.GameState.time
        };

        if (choice.effects) {
            applyEffects(choice.effects);
        }

        // 记录本次选择
        pushToArray('choiceLog', {
            sceneId,
            choiceText: choice.text,
            choiceIndex: choiceIndex || 0,
            timestamp: Date.now(),
            gameTime: before.time,
            effects: choice.effects || {},
            before
        });

        // 限制记录长度，防止存档过大
        if (Huimen.GameState.choiceLog.length > 500) {
            patchGameState('choiceLog', Huimen.GameState.choiceLog.slice(-300));
        }

        if (Huimen.CurrentStory) {
            saveStoryState(Huimen.CurrentStory.id);
        }

        const endingId = checkGameOver();
        if (endingId) {
            showEnding(endingId);
            return;
        }

        // NPC 对话分支
        if (choice.npc && typeof Huimen.startNPCDialogue === 'function') {
            Huimen.startNPCDialogue(choice.npc, choice.npcNode || 'start');
            return;
        }

        if (choice.next) {
            renderScene(choice.next);
        } else if (choice.ending) {
            showEnding(choice.ending);
        }
    }, 200);
}

/**
 * 保存复活检查点：记录当前状态到 reviveCheckpoints
 */
export function saveReviveCheckpoint() {
    const state = Huimen.GameState;
    const checkpoint = {
        sanity: state.sanity,
        yin: state.yin,
        time: state.time,
        inventory: [...state.inventory],
        flags: { ...state.flags },
        currentScene: state.currentScene,
        history: [...state.history],
        choiceLog: JSON.parse(JSON.stringify(state.choiceLog))
    };
    pushToArray('reviveCheckpoints', checkpoint, { maxLength: 20 });
}

/**
 * 借命还阳：回到上一个关键选择，并将阴气清零
 */
export function reviveAtCheckpoint(storyId) {
    const checkpoints = Huimen.GameState.reviveCheckpoints || [];
    if (checkpoints.length === 0) {
        // 没有检查点时退回完整重开
        if (typeof Huimen.loadStory === 'function') {
            Huimen.loadStory(storyId, true);
        }
        return true;
    }

    const checkpoint = checkpoints[checkpoints.length - 1];

    // 恢复状态到该选择之前，但确保脱离死亡线
    const SAFE_SANITY_FLOOR = 30;
    const SAFE_TIME_CEILING = 1800;
    updateState({
        sanity: Math.max(checkpoint.sanity, SAFE_SANITY_FLOOR),
        yin: 0,
        time: Math.min(checkpoint.time, SAFE_TIME_CEILING),
        inventory: checkpoint.inventory,
        flags: checkpoint.flags,
        currentScene: checkpoint.currentScene,
        history: checkpoint.history,
        choiceLog: checkpoint.choiceLog
    });

    // 移除已使用的检查点
    patchGameState('reviveCheckpoints', checkpoints.slice(0, -1));

    if (Huimen.CurrentStory) {
        saveStoryState(Huimen.CurrentStory.id);
    }

    if (typeof Huimen.showScreen === 'function') {
        Huimen.showScreen('game');
    }
    renderScene(checkpoint.currentScene);

    if (Huimen.ToastManager) {
        Huimen.ToastManager.show({
            icon: '阳',
            title: '借命还阳',
            description: '阴气散尽，你回到了上一个关键选择',
            duration: 3500,
            className: 'revive-toast'
        });
    }

    return true;
}

/**
 * 获取选择记录副本
 */
export function getChoiceLog() {
    return (Huimen.GameState.choiceLog || []).slice();
}

/**
 * 导出选择记录为文本
 */
export function exportChoiceLog() {
    const storyTitle = Huimen.CurrentStory ? Huimen.CurrentStory.title : '未知故事';
    const log = Huimen.GameState.choiceLog || [];
    let text = `《${storyTitle}》选择记录\n`;
    text += `==================\n\n`;
    log.forEach((entry, index) => {
        text += `${index + 1}. [${getSceneDisplayName(entry.sceneId)}] ${entry.choiceText}\n`;
        text += `   时间：${formatGameTime(entry.gameTime)} · 理智：${entry.before.sanity} → ${entry.before.sanity + (entry.effects.sanity || 0)} · 阴气：${entry.before.yin} → ${entry.before.yin + (entry.effects.yin || 0)}\n\n`;
    });
    return text;
}

/**
 * 打开选择记录面板
 */
export function openRecordOverlay() {
    const overlay = overlayElements.record;
    if (!overlay) return;

    renderRecordContent();
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
}

/**
 * 关闭选择记录面板
 */
export function closeRecordOverlay() {
    const overlay = overlayElements.record;
    if (!overlay) return;
    overlay.classList.remove('active');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

/**
 * 渲染记录面板内容
 */
export function renderRecordContent() {
    const list = document.getElementById('record-list');
    const title = document.getElementById('record-story-title');
    const stats = document.getElementById('record-stats');
    if (!list) return;

    const storyTitle = Huimen.CurrentStory ? Huimen.CurrentStory.title : '当前故事';
    if (title) title.textContent = storyTitle;

    if (stats) {
        const log = Huimen.GameState.choiceLog || [];
        stats.innerHTML = `
            <span>已选择 ${log.length} 次</span>
            <span>理智 ${Huimen.GameState.sanity}</span>
            <span>阴气 ${Huimen.GameState.yin}</span>
            <span>时辰 ${getShichenDisplay()}</span>
        `;
    }

    list.innerHTML = '';
    const log = Huimen.GameState.choiceLog || [];

    if (log.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'record-empty';
        empty.textContent = '尚无选择记录。翻开簿册，命运自会留下痕迹。';
        list.appendChild(empty);
        return;
    }

    log.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'record-item';

        const sceneName = getSceneDisplayName(entry.sceneId);
        const effectsText = formatChoiceEffects(entry.effects);

        item.innerHTML = `
            <div class="record-step">${index + 1}</div>
            <div class="record-body">
                <div class="record-scene">${escapeHtml(sceneName)}</div>
                <div class="record-choice">→ ${escapeHtml(entry.choiceText)}</div>
                ${effectsText ? `<div class="record-effects">${effectsText}</div>` : ''}
            </div>
            <div class="record-time">${formatGameTime(entry.gameTime)}</div>
        `;
        list.appendChild(item);
    });

    list.scrollTop = list.scrollHeight;
}

function getShichenDisplay() {
    return getShichen(Huimen.GameState.time);
}

/**
 * 获取场景显示名
 */
export function getSceneDisplayName(sceneId) {
    if (!sceneId) return '未知场景';
    const scene = Huimen.StoryData[sceneId];
    if (scene && scene.title) return scene.title;
    return sceneId;
}

/**
 * 格式化选择效果文本
 */
export function formatChoiceEffects(effects) {
    if (!effects) return '';
    const parts = [];
    if (effects.sanity) parts.push(`理智 ${effects.sanity > 0 ? '+' : ''}${effects.sanity}`);
    if (effects.yin) parts.push(`阴气 ${effects.yin > 0 ? '+' : ''}${effects.yin}`);
    if (effects.time) parts.push(`时间 +${effects.time} 分`);
    if (effects.addItem) parts.push(`获得 ${effects.addItem}`);
    if (effects.removeItem) parts.push(`失去 ${effects.removeItem}`);
    if (effects.setFlag) parts.push(`触发 ${effects.setFlag}`);
    return parts.join(' · ');
}

/**
 * 打开阴阳历程面板
 */
export function openJourneyOverlay() {
    const overlay = overlayElements.journey;
    if (!overlay) return;

    renderJourneyContent();
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
}

/**
 * 关闭阴阳历程面板
 */
export function closeJourneyOverlay() {
    const overlay = overlayElements.journey;
    if (!overlay) return;
    overlay.classList.remove('active');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

/**
 * 渲染阴阳历程内容
 */
export function renderJourneyContent() {
    const list = document.getElementById('journey-list');
    if (!list) return;

    list.innerHTML = '';

    if (!Huimen.StoryManifest || !Array.isArray(Huimen.StoryManifest)) {
        list.innerHTML = '<p class="record-empty">故事清单未加载。</p>';
        return;
    }

    // 从成就引擎或存档读取已达成结局
    let endingsReached = {};
    if (typeof Huimen.AchievementEngine !== 'undefined' && Huimen.AchievementEngine.endingsReached) {
        endingsReached = Huimen.AchievementEngine.endingsReached;
    } else {
        const data = SaveManager.loadAchievements();
        endingsReached = data.endingsReached || {};
    }

    Huimen.StoryManifest.forEach(story => {
        const saveData = SaveManager.loadStorySave(story.id);

        let hasSave = false;
        let choiceCount = 0;
        let reachedEndings = endingsReached[story.id] || [];

        if (saveData) {
            hasSave = true;
            choiceCount = saveData.choiceLog ? saveData.choiceLog.length : 0;
        }

        const card = document.createElement('div');
        card.className = 'journey-card';
        if (reachedEndings.length > 0) card.classList.add('completed');

        card.innerHTML = `
            <div class="journey-card-header">
                <h3 class="journey-card-title">${escapeHtml(story.title)}</h3>
                <span class="journey-card-subtitle">${escapeHtml(story.subtitle)}</span>
            </div>
            <p class="journey-card-desc">${escapeHtml(story.description)}</p>
            <div class="journey-card-meta">
                <span>${hasSave ? '有存档' : '未开始'}</span>
                <span>已选择 ${choiceCount} 次</span>
                <span>达成结局 ${reachedEndings.length}</span>
            </div>
            ${reachedEndings.length > 0 ? `<div class="journey-endings">
                ${reachedEndings.map(e => `<span class="journey-ending-tag">${escapeHtml(e)}</span>`).join('')}
            </div>` : ''}
        `;

        list.appendChild(card);
    });
}

/**
 * 导出当前故事的选择记录
 * 优先尝试复制到剪贴板，不支持时弹出文本
 */
export function exportCurrentRecord() {
    const text = exportChoiceLog();
    Platform.setClipboard(text).then(() => {
        if (Huimen.ToastManager) {
            Huimen.ToastManager.show({
                icon: '录',
                title: '记录已复制',
                description: '当前命簿已复制到剪贴板',
                duration: 2500
            });
        }
    }).catch(() => {
        showExportFallback(text);
    });
}

function showExportFallback(text) {
    const overlay = document.createElement('div');
    overlay.className = 'record-export-overlay';
    overlay.innerHTML = `
        <div class="record-export-dialog">
            <h3>命簿记录</h3>
            <textarea readonly>${escapeHtml(text)}</textarea>
            <button class="horror-btn">关闭</button>
        </div>
    `;
    overlay.querySelector('button').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
    document.body.appendChild(overlay);
}

/**
 * 复盘当前故事：用 history + choiceLog 重建场景路径
 */
export function replayCurrentStory() {
    const overlay = document.createElement('div');
    overlay.className = 'record-replay-overlay';

    const history = (Huimen.GameState.history || []).slice();
    const log = (Huimen.GameState.choiceLog || []).slice();
    const storyTitle = Huimen.CurrentStory ? Huimen.CurrentStory.title : '未知故事';

    let stepsHtml = '';
    history.forEach((sceneId, idx) => {
        const scene = Huimen.StoryData[sceneId];
        const sceneName = getSceneDisplayName(sceneId);
        const choiceEntry = log[idx];
        const choiceText = choiceEntry ? `→ ${choiceEntry.choiceText}` : '（结局）';
        const effectsText = choiceEntry ? formatChoiceEffects(choiceEntry.effects) : '';
        const sceneSnippet = scene ? escapeHtml(scene.text.slice(0, 80).replace(/\n+/g, ' ') + (scene.text.length > 80 ? '……' : '')) : '';

        stepsHtml += `
            <div class="replay-step">
                <div class="replay-step-header">
                    <span class="replay-step-num">${idx + 1}</span>
                    <span class="replay-step-scene">${escapeHtml(sceneName)}</span>
                </div>
                ${sceneSnippet ? `<div class="replay-step-text">${sceneSnippet}</div>` : ''}
                <div class="replay-step-choice">${escapeHtml(choiceText)}</div>
                ${effectsText ? `<div class="replay-step-effects">${effectsText}</div>` : ''}
            </div>
        `;
    });

    if (stepsHtml === '') {
        stepsHtml = '<p class="record-empty">暂无复盘数据。</p>';
    }

    overlay.innerHTML = `
        <div class="record-replay-dialog">
            <div class="record-replay-header">
                <h3>复盘 · ${escapeHtml(storyTitle)}</h3>
                <button class="record-close" aria-label="关闭">×</button>
            </div>
            <div class="record-replay-body">${stepsHtml}</div>
        </div>
    `;

    overlay.querySelector('.record-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
    document.body.appendChild(overlay);
}

// 导出公共 API 到 Huimen
Huimen.getChoiceLog = getChoiceLog;
Huimen.exportChoiceLog = exportChoiceLog;
Huimen.openRecordOverlay = openRecordOverlay;
Huimen.closeRecordOverlay = closeRecordOverlay;
Huimen.openJourneyOverlay = openJourneyOverlay;
Huimen.closeJourneyOverlay = closeJourneyOverlay;
Huimen.exportCurrentRecord = exportCurrentRecord;
Huimen.replayCurrentStory = replayCurrentStory;
Huimen.reviveAtCheckpoint = reviveAtCheckpoint;
