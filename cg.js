/**
 * 《阴阳簿》CG / 插画节点系统
 *
 * 功能：
 * 1. 监听 Huimen.GameEvents.sceneRender，当场景数据包含 cg 字段时自动全屏展示。
 * 2. 提供 CGManager.show(imageUrl, title) / hide() 手动调用。
 * 3. 已解锁 CG 持久化由 SaveManager 集中管理。
 * 4. 标题画面与故事选择页提供「残卷图鉴」按钮，展示已解锁 CG 列表。
 * 5. 无真实图片时以中式恐怖风格渐变 / 文字占位。
 */

import { Huimen } from './js/engine/namespace.js';
import { loadCG, saveCG } from './js/engine/saveManager.js';

let unlockedCGs = [];
let overlay = null;
let imageEl = null;
let placeholderEl = null;
let titleEl = null;
let galleryOverlay = null;
let galleryList = null;
let galleryCount = null;

/**
 * 从 SaveManager 读取已解锁 CG
 */
function loadUnlocked() {
    try {
        const data = loadCG();
        if (data && Array.isArray(data.unlocked)) {
            unlockedCGs = data.unlocked;
        } else {
            unlockedCGs = [];
        }
    } catch (e) {
        console.error('读取 CG 图鉴失败:', e);
        unlockedCGs = [];
    }
}

/**
 * 保存已解锁 CG
 */
function saveUnlocked() {
    try {
        saveCG({ unlocked: unlockedCGs });
    } catch (e) {
        console.error('保存 CG 图鉴失败:', e);
    }
}

/**
 * 记录一张 CG 为已解锁
 */
function unlockCG(id, url, title, storyId) {
    if (!unlockedCGs.some(item => item.id === id)) {
        unlockedCGs.push({
            id: id || url,
            url: url,
            title: title || '',
            storyId: storyId || ''
        });
        saveUnlocked();
    }
}

/**
 * 更新图鉴计数
 */
function updateGalleryCount() {
    if (galleryCount) {
        galleryCount.textContent = unlockedCGs.length;
    }
}

/**
 * 场景渲染事件回调：检测 cg 字段
 */
function onSceneRender(data) {
    const scene = data && data.scene;
    if (!scene || !scene.cg) return;

    const url = scene.cg;
    const title = scene.cgTitle || scene.title || '';
    const id = scene.cgId || url;
    const storyId = (typeof Huimen.CurrentStory !== 'undefined' && Huimen.CurrentStory)
        ? Huimen.CurrentStory.id
        : (data.sceneId ? data.sceneId.split('_')[0] : '');

    unlockCG(id, url, title, storyId);
    CGManager.show(url, title);
}

/**
 * CG 管理器全局对象
 */
const CGManager = {
    /**
     * 将外部系统提供的插图写入图鉴。
     */
    unlock(id, url, title, storyId) {
        const normalizedId = id || url;
        const wasUnlocked = this.isUnlocked(normalizedId);
        unlockCG(normalizedId, url, title, storyId);
        updateGalleryCount();
        return !wasUnlocked;
    },

    /**
     * 展示一张 CG
     * @param {string} imageUrl - 图片路径或占位标识
     * @param {string} [title] - CG 标题
     */
    show(imageUrl, title) {
        if (!overlay || !imageEl || !placeholderEl || !titleEl) return;

        titleEl.textContent = title || '';
        imageEl.classList.add('hidden');
        placeholderEl.classList.add('hidden');

        imageEl.onload = () => {
            imageEl.classList.remove('hidden');
            placeholderEl.classList.add('hidden');
        };
        imageEl.onerror = () => {
            imageEl.classList.add('hidden');
            placeholderEl.classList.remove('hidden');
        };
        imageEl.src = imageUrl;

        overlay.classList.remove('hidden');
        overlay.classList.add('active');
    },

    /**
     * 隐藏 CG 展示层
     */
    hide() {
        if (!overlay) return;
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.classList.add('hidden');
            imageEl.src = '';
        }, 300);
    },

    /**
     * 获取所有已解锁 CG
     * @returns {Array}
     */
    getUnlocked() {
        return unlockedCGs.slice();
    },

    /**
     * 判断某张 CG 是否已解锁
     * @param {string} id
     * @returns {boolean}
     */
    isUnlocked(id) {
        return unlockedCGs.some(item => item.id === id);
    }
};

Huimen.CGManager = CGManager;
if (typeof window !== 'undefined') {
    window.CGManager = CGManager;
}

/**
 * 打开 CG 图鉴
 */
function openGallery() {
    if (!galleryOverlay || !galleryList) return;

    galleryList.innerHTML = '';
    const items = CGManager.getUnlocked();

    if (items.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'cg-empty';
        empty.textContent = '尚无 CG 解锁。继续探索阴阳簿，或许会遇见那些被遗忘的画面。';
        galleryList.appendChild(empty);
    } else {
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'cg-gallery-card';

            const thumb = document.createElement('div');
            thumb.className = 'cg-gallery-thumb';

            const img = document.createElement('img');
            img.className = 'hidden';
            img.alt = '';
            img.src = item.url;
            img.onload = function () {
                this.classList.remove('hidden');
                this.nextElementSibling.classList.add('hidden');
            };
            img.onerror = function () {
                this.classList.add('hidden');
                this.nextElementSibling.classList.remove('hidden');
            };

            const placeholder = document.createElement('div');
            placeholder.className = 'cg-gallery-placeholder hidden';
            const mark = document.createElement('span');
            mark.className = 'cg-gallery-placeholder-mark';
            mark.textContent = '囍';
            placeholder.appendChild(mark);

            thumb.appendChild(img);
            thumb.appendChild(placeholder);

            const name = document.createElement('div');
            name.className = 'cg-gallery-name';
            name.textContent = item.title || '无名 CG';

            card.appendChild(thumb);
            card.appendChild(name);
            galleryList.appendChild(card);
        });
    }

    updateGalleryCount();
    galleryOverlay.classList.remove('hidden');
    galleryOverlay.classList.add('active');
}

/**
 * 关闭 CG 图鉴
 */
function closeGallery() {
    if (!galleryOverlay) return;
    galleryOverlay.classList.remove('active');
    setTimeout(() => {
        galleryOverlay.classList.add('hidden');
    }, 300);
}

/**
 * 初始化 CG 系统
 */
function init() {
    loadUnlocked();

    overlay = document.getElementById('cg-overlay');
    imageEl = document.getElementById('cg-image');
    placeholderEl = document.getElementById('cg-placeholder');
    titleEl = document.getElementById('cg-title');
    galleryOverlay = document.getElementById('cg-gallery-overlay');
    galleryList = document.getElementById('cg-gallery-list');
    galleryCount = document.getElementById('cg-unlock-count');

    // 注册事件监听
    if (typeof Huimen.GameEvents !== 'undefined') {
        Huimen.GameEvents.on('sceneRender', onSceneRender);
    }

    // CG 展示层关闭
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.closest('#cg-close')) {
                CGManager.hide();
            }
        });
    }

    // 图鉴按钮
    document.querySelectorAll('[data-open-cg-gallery]').forEach(btn => {
        btn.addEventListener('click', openGallery);
    });

    // 图鉴层关闭
    if (galleryOverlay) {
        galleryOverlay.addEventListener('click', (e) => {
            if (e.target === galleryOverlay || e.target.closest('.cg-gallery-close')) {
                closeGallery();
            }
        });
    }
}

export { init };
