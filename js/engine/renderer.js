/**
 * 《阴阳簿》渲染引擎
 * 负责状态栏、物品栏、打字机、场景与界面切换
 */

import { Huimen } from './namespace.js';
import { emit } from './eventBus.js';
import { screens, ui } from './dom.js';
import * as SaveManager from './saveManager.js';
import { escapeHtml } from './utils.js';
import { getShichen, checkCondition, applyEffects, checkGameOver } from './effectEngine.js';
import { saveStoryState, patchGameState, pushToArray } from './state.js';
import { makeChoice } from './recordManager.js';
import { showEnding } from './endingManager.js';
import { loadStory } from './storyLoader.js';
import { Platform } from './platform.js';

// 打字机状态
let typingInterval = null;
let typingActive = false;
let pendingFullHtml = null;
let pendingOnComplete = null;

// Toast 容器
let toastContainer = null;

function ensureToastContainer() {
    if (toastContainer) return toastContainer;
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
    return toastContainer;
}

export const ToastManager = {
    show(options) {
        const { icon, title, description, duration = 4000, className = '' } = options;
        const container = ensureToastContainer();

        const toast = document.createElement('div');
        toast.className = `toast ${className}`;
        toast.innerHTML = `
            ${icon ? `<div class="toast-icon">${icon}</div>` : ''}
            <div class="toast-info">
                ${title ? `<div class="toast-name">${title}</div>` : ''}
                ${description ? `<div class="toast-desc">${description}</div>` : ''}
            </div>
        `;
        container.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('show'));

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, duration);
    }
};

Huimen.ToastManager = ToastManager;

/**
 * 切换屏幕
 */
export function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    if (screens[name]) {
        screens[name].classList.add('active');
        emit('screenChange', { screen: name });
    }
}

Huimen.showScreen = showScreen;

/**
 * 更新状态栏
 */
export function updateStatus() {
    if (!ui.timeDisplay || !ui.sanityBar || !ui.sanityValue || !ui.yinBar || !ui.yinValue) return;

    ui.timeDisplay.textContent = getShichen(Huimen.GameState.time);
    ui.sanityBar.style.width = `${Math.max(0, Huimen.GameState.sanity)}%`;
    ui.sanityValue.textContent = Math.floor(Huimen.GameState.sanity);
    ui.yinBar.style.width = `${Math.max(0, Huimen.GameState.yin)}%`;
    ui.yinValue.textContent = Math.floor(Huimen.GameState.yin);

    const sanityItem = document.getElementById('sanity-item');
    const yinItem = document.getElementById('yin-item');
    if (sanityItem) sanityItem.classList.toggle('danger', Huimen.GameState.sanity <= 30);
    if (yinItem) yinItem.classList.toggle('danger', Huimen.GameState.yin >= 70);

    if (Huimen.GameState.sanity < 30) {
        document.body.style.filter = 'contrast(1.2) saturate(0.6)';
    } else {
        document.body.style.filter = '';
    }
}

/**
 * 更新物品栏
 */
export function updateInventory() {
    if (!ui.inventory || !ui.inventoryItems) return;

    if (Huimen.GameState.inventory.length === 0) {
        ui.inventory.classList.add('hidden');
        return;
    }
    ui.inventory.classList.remove('hidden');
    ui.inventoryItems.innerHTML = '';
    Huimen.GameState.inventory.forEach(item => {
        const span = document.createElement('span');
        span.className = 'inventory-item';
        span.textContent = String(item);
        ui.inventoryItems.appendChild(span);
    });
}

/**
 * 处理文本中的标记
 */
export function processText(text) {
    return text
        .replace(/\[red\](.*?)\[\/red\]/g, '<span class="red">$1</span>')
        .replace(/\[faded\](.*?)\[\/faded\]/g, '<span class="faded">$1</span>')
        .replace(/\[whisper\](.*?)\[\/whisper\]/g, '<span class="whisper">$1</span>')
        .replace(/\[scream\](.*?)\[\/scream\]/g, '<span class="scream">$1</span>');
}

function getTypingDelay() {
    const base = 22;
    if (Huimen.GameState.sanity < 30) return base * 1.5;
    if (Huimen.GameState.yin > 70) return base * 0.8;
    return base;
}

export function isTyping() {
    return typingActive;
}

/**
 * 打字机效果显示文本
 */
export function typeText(html, onComplete) {
    if (!ui.storyText) return;

    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }
    typingActive = true;
    pendingFullHtml = html;
    pendingOnComplete = onComplete;
    ui.storyText.innerHTML = '';
    if (ui.cursor) ui.cursor.style.display = 'inline-block';
    if (ui.skipHint) ui.skipHint.classList.add('visible');

    const temp = document.createElement('div');
    temp.innerHTML = html || '';
    const nodes = Array.from(temp.childNodes);

    let nodeIndex = 0;
    let charIndex = 0;
    let currentContainer = ui.storyText;

    function typeNext() {
        if (nodeIndex >= nodes.length) {
            finishTyping();
            return;
        }

        const node = nodes[nodeIndex];

        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            if (charIndex < text.length) {
                currentContainer.appendChild(document.createTextNode(text[charIndex]));
                charIndex++;
                typingInterval = setTimeout(typeNext, getTypingDelay());
            } else {
                nodeIndex++;
                charIndex = 0;
                typingInterval = setTimeout(typeNext, getTypingDelay());
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const clone = node.cloneNode(true);
            currentContainer.appendChild(clone);
            nodeIndex++;
            charIndex = 0;
            typingInterval = setTimeout(typeNext, getTypingDelay() * 3);
        }
    }

    function finishTyping() {
        typingActive = false;
        ui.cursor.style.display = 'none';
        if (ui.skipHint) ui.skipHint.classList.remove('visible');
        pendingFullHtml = null;
        const cb = pendingOnComplete;
        pendingOnComplete = null;
        if (cb) cb();
    }

    typeNext();
}

/**
 * 跳过打字机
 */
export function skipTyping() {
    if (!typingActive) return;
    if (typingInterval) {
        clearTimeout(typingInterval);
        typingInterval = null;
    }
    typingActive = false;
    if (ui.cursor) ui.cursor.style.display = 'none';
    if (ui.skipHint) ui.skipHint.classList.remove('visible');
    if (pendingFullHtml !== null && ui.storyText) {
        ui.storyText.innerHTML = pendingFullHtml;
        pendingFullHtml = null;
    }
    const cb = pendingOnComplete;
    pendingOnComplete = null;
    if (cb) cb();
}

Huimen.skipTyping = skipTyping;

/**
 * 渲染场景
 */
export function renderScene(sceneId) {
    const scene = Huimen.StoryData[sceneId];
    if (!scene) {
        console.error('场景不存在:', sceneId);
        return;
    }

    patchGameState('currentScene', sceneId);
    pushToArray('history', sceneId);
    if (Huimen.GameState.history.length > 200) {
        patchGameState('history', Huimen.GameState.history.slice(-100));
    }

    applyEffects(scene.effects);

    // 场景效果可能导致死亡，需检查
    const forcedEnding = checkGameOver();
    if (forcedEnding) {
        showEnding(forcedEnding);
        return;
    }

    let text = scene.text;
    if (typeof text === 'function') {
        text = text(Huimen.GameState);
    }

    if (scene.textVariants) {
        for (const variant of scene.textVariants) {
            if (checkCondition(variant.condition)) {
                text = (text || '') + '\n\n' + variant.text;
            }
        }
    }

    if (Huimen.GameState.sanity < 40 && scene.hallucination) {
        text = (text || '') + '\n\n' + scene.hallucination;
    }

    const processedText = processText(text || '');
    if (ui.choices) ui.choices.innerHTML = '';

    typeText(processedText, () => {
        renderChoices(scene.choices);
    });

    emit('sceneRender', { sceneId, scene });

    if (Huimen.CurrentStory) {
        saveStoryState(Huimen.CurrentStory.id);
    }
}

const CHOICE_COLLAPSE_THRESHOLD = 8;
const MOBILE_COLLAPSE_THRESHOLD = 5;
const MAX_REACHABILITY_DEPTH = 5;

/**
 * 根据当前视口宽度获取折叠阈值
 */
function getCollapseThreshold() {
    if (typeof window === 'undefined') return CHOICE_COLLAPSE_THRESHOLD;
    return window.innerWidth <= 768 ? MOBILE_COLLAPSE_THRESHOLD : CHOICE_COLLAPSE_THRESHOLD;
}

/**
 * 模拟应用一组效果后的状态（不修改真实 GameState）
 */
function simulateEffects(baseState, effects) {
    if (!effects) return baseState;
    const state = {
        ...baseState,
        inventory: [...baseState.inventory],
        flags: { ...baseState.flags }
    };
    if (typeof effects.sanity === 'number') {
        state.sanity = Math.max(0, Math.min(100, state.sanity + effects.sanity));
    }
    if (typeof effects.yin === 'number') {
        state.yin = Math.max(0, Math.min(100, state.yin + effects.yin));
    }
    if (typeof effects.time === 'number') {
        state.time += effects.time;
    }
    if (effects.addItem) {
        const items = Array.isArray(effects.addItem) ? effects.addItem : [effects.addItem];
        for (const item of items) {
            if (!state.inventory.includes(item)) state.inventory.push(item);
        }
    }
    if (effects.removeItem) {
        state.inventory = state.inventory.filter(i => i !== effects.removeItem);
    }
    if (effects.setFlag) {
        const flags = Array.isArray(effects.setFlag) ? effects.setFlag : [effects.setFlag];
        for (const flag of flags) state.flags[flag] = true;
    }
    if (effects.clearFlag) {
        delete state.flags[effects.clearFlag];
    }
    return state;
}

/**
 * 判断应用一组效果后是否可能触发强制结局
 */
function couldEffectsTriggerEnding(effects, state) {
    if (!effects) return false;
    const s = state || Huimen.GameState;
    if (typeof effects.sanity === 'number' && s.sanity + effects.sanity <= 0) return true;
    if (typeof effects.yin === 'number' && s.yin + effects.yin >= 100) return true;
    if (typeof effects.time === 'number' && s.time + effects.time >= 1860) return true;
    return false;
}

/**
 * 判断一个选择点击后是否能最终推进游戏（避免死胡同）。
 * 用于过滤掉那些进入后没有选项、也无法触发结局的隐藏/条件分支。
 */
function isChoiceReachable(choice, visited = new Set(), depth = 0, stateOverride = null) {
    // 直接触发结局或 NPC 对话，总是可达
    if (choice.ending) return true;
    if (choice.npc && typeof Huimen.startNPCDialogue === 'function') return true;

    // 没有后续跳转，不可达
    if (!choice.next) return false;

    const nextScene = Huimen.StoryData && Huimen.StoryData[choice.next];
    if (!nextScene) return false;

    // 场景本身是结局
    if (nextScene.ending) return true;

    // 防止循环和过深递归：保守视为可达，避免误杀正常分支
    if (depth >= MAX_REACHABILITY_DEPTH || visited.has(choice.next)) return true;
    visited.add(choice.next);

    const simulatedState = simulateEffects(stateOverride || Huimen.GameState, nextScene.effects);

    // 进入场景的效果可能触发强制结局，也算可达
    if (couldEffectsTriggerEnding(nextScene.effects, simulatedState)) return true;

    // 场景有至少一个当前可见且可达的选择
    if (Array.isArray(nextScene.choices) && nextScene.choices.length > 0) {
        return nextScene.choices.some(c => {
            if (c.condition && !checkCondition(c.condition, simulatedState)) return false;
            return isChoiceReachable(c, visited, depth + 1, simulatedState);
        });
    }

    // 无选择、无结局、无效果致死，判定为死胡同
    return false;
}

/**
 * 渲染选择按钮（支持折叠）
 */
export function renderChoices(choices) {
    if (!choices || !ui.choices) return [];

    const visibleChoices = choices.filter((choice) => {
        if (choice.condition && !checkCondition(choice.condition)) return false;
        return isChoiceReachable(choice);
    });

    const threshold = getCollapseThreshold();
    const shouldCollapse = visibleChoices.length > threshold;
    const initialChoices = shouldCollapse ? visibleChoices.slice(0, threshold) : visibleChoices;
    const remainingChoices = shouldCollapse ? visibleChoices.slice(threshold) : [];

    function createButton(choice, index, order) {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        if (choice.danger) btn.classList.add('danger');
        if (choice.hidden) btn.classList.add('hidden-choice');
        btn.textContent = choice.text;
        btn.style.setProperty('--order', String(order));

        btn.addEventListener('click', () => {
            makeChoice(choice, index);
        });

        return btn;
    }

    ui.choices.innerHTML = '';

    initialChoices.forEach((choice, i) => {
        ui.choices.appendChild(createButton(choice, choices.indexOf(choice), i));
    });

    if (shouldCollapse) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'choice-btn choice-toggle-btn';
        toggleBtn.textContent = `显示其余 ${remainingChoices.length} 个选择`;
        toggleBtn.style.setProperty('--order', String(initialChoices.length));
        toggleBtn.addEventListener('click', () => {
            toggleBtn.remove();
            remainingChoices.forEach((choice, i) => {
                ui.choices.appendChild(createButton(choice, choices.indexOf(choice), initialChoices.length + i));
            });
        });
        ui.choices.appendChild(toggleBtn);
    }

    // 死胡同兜底：过滤后无任何可用选项时，给玩家一个返回出口
    if (visibleChoices.length === 0) {
        console.warn('[死胡同兜底] 当前场景无可用选项');
        const btn = document.createElement('button');
        btn.className = 'choice-btn dead-end-btn';
        btn.textContent = '前路已尽（返回故事选择）';
        btn.style.setProperty('--order', '0');
        btn.addEventListener('click', () => {
            showScreen('storySelect');
        });
        ui.choices.appendChild(btn);
    }

    return visibleChoices;
}

/**
 * 渲染故事选择界面
 */
export function renderStorySelect() {
    if (!Huimen.StoryManifest || !ui.storyGrid) {
        console.error('StoryManifest 未加载或故事网格 DOM 不存在');
        return;
    }

    ui.storyGrid.innerHTML = '';

    const achievementData = SaveManager.loadAchievements();
    const endingsReached = achievementData.endingsReached || {};

    Huimen.StoryManifest.forEach((story, index) => {
        const hasSave = SaveManager.loadStorySave(story.id);
        const reached = endingsReached[story.id] || [];
        const progressText = reached.length > 0 ? `已达成 ${reached.length} 结局` : (hasSave ? '有存档' : '未开始');

        const card = document.createElement('div');
        card.className = 'story-card';
        card.style.setProperty('--order', String(index));
        card.innerHTML = `
            <div class="story-card-image">
                <img src="/${escapeHtml(story.image || '')}" alt="${escapeHtml(story.title)}" loading="lazy">
            </div>
            <div class="story-card-header">
                <div class="story-card-title-wrap">
                    <h3 class="story-card-title">${escapeHtml(story.title)}</h3>
                    <span class="story-card-progress">${escapeHtml(progressText)}</span>
                </div>
                <span class="story-card-subtitle">${escapeHtml(story.subtitle)}</span>
            </div>
            <div class="story-card-body">
                <p class="story-card-desc">${escapeHtml(story.description)}</p>
                <div class="story-card-meta">
                    <span>难度: ${escapeHtml(story.difficulty)}</span>
                    <span>恐怖度: ${'★'.repeat(story.horrorLevel)}</span>
                    <span>${escapeHtml(story.playTime)}</span>
                </div>
                <div class="story-card-tags">
                    ${story.tags.map(tag => `<span class="story-tag">${escapeHtml(tag)}</span>`).join('')}
                </div>
            </div>
            <div class="story-card-actions">
                <button class="horror-btn story-start-btn" data-story="${escapeHtml(story.id)}"${hasSave ? ' data-continue' : ''}>${hasSave ? '继续' : '开始'}</button>
                ${hasSave ? `<button class="horror-btn secondary story-reset-btn" data-story="${escapeHtml(story.id)}">重新开始</button>` : ''}
            </div>
            <div class="story-card-loading" data-loading="${escapeHtml(story.id)}">
                <span class="story-card-loading-text">载入幽冥...</span>
            </div>
        `;

        ui.storyGrid.appendChild(card);
    });

    // 绑定按钮事件
    document.querySelectorAll('.story-start-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const storyId = btn.dataset.story;
            loadStory(storyId, false);
        });
    });

    document.querySelectorAll('.story-reset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const storyId = btn.dataset.story;
            Platform.confirm('确定要删除这个故事的存档，重新开始吗？').then(confirmed => {
                if (confirmed) loadStory(storyId, true);
            });
        });
    });
}

/**
 * 渲染成就面板
 */
export function renderAchievements() {
    if (!ui.achievementList) return;

    const allAchievements = typeof Huimen.AchievementEngine !== 'undefined'
        ? Huimen.AchievementEngine.getAll()
        : [];

    ui.achievementList.innerHTML = '';

    allAchievements.forEach(ach => {
        const isHiddenLocked = ach.hidden && !ach.unlocked;
        const card = document.createElement('div');
        card.className = `achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-icon">${isHiddenLocked ? '？' : ach.icon}</div>
            <div class="achievement-info">
                <div class="achievement-name">${isHiddenLocked ? '未解之谜' : ach.name}</div>
                <div class="achievement-desc">${isHiddenLocked ? '继续探索阴阳簿，或许能揭开这个秘密。' : ach.description}</div>
            </div>
            <div class="achievement-status">${ach.unlocked ? '已解锁' : '未解锁'}</div>
        `;
        ui.achievementList.appendChild(card);
    });

    if (ui.achievementCount && typeof Huimen.AchievementEngine !== 'undefined') {
        ui.achievementCount.textContent = `${Huimen.AchievementEngine.getUnlockedCount()} / ${allAchievements.length}`;
    }
}

export function showLoading(text = '载入幽冥……') {
    const el = document.getElementById('global-loading');
    const textEl = el ? el.querySelector('.loading-text') : null;
    if (textEl) textEl.textContent = text;
    if (el) el.classList.add('active');
}

export function hideLoading() {
    const el = document.getElementById('global-loading');
    if (el) el.classList.remove('active');
}

Huimen.showLoading = showLoading;
Huimen.hideLoading = hideLoading;

// 导出公共 API 到 Huimen
Huimen.renderScene = renderScene;

