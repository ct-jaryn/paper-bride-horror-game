/**
 * 《阴阳簿》渲染引擎
 * 负责状态栏、物品栏、打字机、场景与界面切换
 */

import { Huimen } from './namespace.js';
import { emit } from './eventBus.js';
import { screens, ui } from './dom.js';
import * as SaveManager from './saveManager.js';
import { escapeHtml } from './utils.js';
import { getShichen, checkCondition, applyEffects } from './effectEngine.js';
import { saveStoryState, patchGameState, pushToArray } from './state.js';
import { makeChoice } from './recordManager.js';
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
    temp.innerHTML = html;
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

    let text = scene.text;
    if (typeof text === 'function') {
        text = text(Huimen.GameState);
    }

    if (Huimen.GameState.sanity < 40 && scene.hallucination) {
        text += '\n\n' + scene.hallucination;
    }

    const processedText = processText(text);
    if (ui.choices) ui.choices.innerHTML = '';

    typeText(processedText, () => {
        renderChoices(scene.choices);
    });

    emit('sceneRender', { sceneId, scene });

    if (Huimen.CurrentStory) {
        saveStoryState(Huimen.CurrentStory.id);
    }
}

/**
 * 渲染选择按钮
 */
export function renderChoices(choices) {
    if (!choices || !ui.choices) return;

    choices.forEach((choice, index) => {
        if (choice.condition && !checkCondition(choice.condition)) {
            return;
        }

        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        if (choice.danger) btn.classList.add('danger');
        if (choice.hidden) btn.classList.add('hidden-choice');
        btn.textContent = choice.text;
        btn.style.setProperty('--order', String(index));

        btn.addEventListener('click', () => {
            makeChoice(choice, index);
        });

        ui.choices.appendChild(btn);
    });
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

    Huimen.StoryManifest.forEach(story => {
        const hasSave = SaveManager.loadStorySave(story.id);

        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <div class="story-card-header">
                <h3 class="story-card-title">${escapeHtml(story.title)}</h3>
                <span class="story-card-subtitle">${escapeHtml(story.subtitle)}</span>
            </div>
            <p class="story-card-desc">${escapeHtml(story.description)}</p>
            <div class="story-card-meta">
                <span>难度: ${escapeHtml(story.difficulty)}</span>
                <span>恐怖度: ${'★'.repeat(story.horrorLevel)}</span>
                <span>${escapeHtml(story.playTime)}</span>
            </div>
            <div class="story-card-tags">
                ${story.tags.map(tag => `<span class="story-tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
            <div class="story-card-actions">
                <button class="horror-btn story-start-btn" data-story="${escapeHtml(story.id)}">${hasSave ? '继续' : '开始'}</button>
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
