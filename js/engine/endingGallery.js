/**
 * 《阴阳簿》结局图鉴
 * 集中展示各卷已解锁结局，支持查看结局文本。
 */

import { Huimen } from './namespace.js';
import { escapeHtml } from './utils.js';
import { Platform } from './platform.js';

const GALLERY_OVERLAY_ID = 'ending-gallery-overlay';
const DETAIL_OVERLAY_ID = 'ending-detail-overlay';

let endingsCache = new Map(); // storyId -> { total, unlocked, endings }

function getOverlay(id) {
    return document.getElementById(id);
}

function showOverlay(id) {
    const el = getOverlay(id);
    if (!el) return;
    el.classList.remove('hidden');
    el.classList.add('active');
}

function hideOverlay(id) {
    const el = getOverlay(id);
    if (!el) return;
    el.classList.remove('active');
    setTimeout(() => el.classList.add('hidden'), 300);
}

/**
 * 异步加载某个故事的 Endings 数据（不切换当前游戏）
 */
async function loadStoryEndings(story) {
    if (endingsCache.has(story.id)) {
        return endingsCache.get(story.id);
    }

    try {
        const url = Platform.isMinigame()
            ? story.scriptPath
            : new URL(story.scriptPath, document.baseURI).href;
        const module = await Platform.loadScript(url);
        const endings = module.Endings || {};
        const reached = Huimen.AchievementEngine?.endingsReached[story.id] || [];
        const result = {
            total: Object.keys(endings).length,
            unlocked: reached.length,
            endings,
            reached
        };
        endingsCache.set(story.id, result);
        return result;
    } catch (e) {
        console.warn('加载结局图鉴数据失败:', story.id, e);
        return { total: 0, unlocked: 0, endings: {}, reached: [] };
    }
}

/**
 * 渲染结局图鉴内容
 */
export async function renderEndingGallery() {
    const list = document.getElementById('ending-gallery-list');
    const totalEl = document.getElementById('ending-gallery-total');
    if (!list || !Huimen.StoryManifest) return;

    list.innerHTML = '<p class="record-empty">正在载入幽冥簿册……</p>';

    let grandTotal = 0;
    let grandUnlocked = 0;

    list.innerHTML = '';

    for (const story of Huimen.StoryManifest) {
        const data = await loadStoryEndings(story);
        grandTotal += data.total;
        grandUnlocked += data.unlocked;

        const card = document.createElement('div');
        card.className = 'ending-gallery-card';

        const header = document.createElement('div');
        header.className = 'ending-gallery-card-header';
        header.innerHTML = `
            <div>
                <h3 class="ending-gallery-story">${escapeHtml(story.title)}</h3>
                <p class="ending-gallery-subtitle">${escapeHtml(story.subtitle)}</p>
            </div>
            <div class="ending-gallery-ratio">${data.unlocked} / ${data.total}</div>
        `;
        card.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'ending-gallery-grid';

        if (data.total === 0) {
            grid.innerHTML = '<p class="record-empty">暂无结局数据</p>';
        } else {
            Object.entries(data.endings).forEach(([endingId, ending]) => {
                const isUnlocked = data.reached.includes(endingId);
                const item = document.createElement('button');
                item.className = `ending-gallery-item ${isUnlocked ? 'unlocked' : 'locked'}`;
                item.type = 'button';
                item.innerHTML = `
                    <span class="ending-gallery-status">${isUnlocked ? '●' : '?'}</span>
                    <span class="ending-gallery-name">${isUnlocked ? escapeHtml(ending.title || endingId) : '未解之谜'}</span>
                `;
                if (isUnlocked) {
                    item.addEventListener('click', () => showEndingDetail(ending.title || endingId, ending.text || ''));
                }
                grid.appendChild(item);
            });
        }

        card.appendChild(grid);
        list.appendChild(card);
    }

    if (totalEl) {
        totalEl.textContent = `${grandUnlocked} / ${grandTotal}`;
    }
}

/**
 * 显示单条结局详情
 */
export function showEndingDetail(title, text) {
    const titleEl = document.getElementById('ending-detail-title');
    const textEl = document.getElementById('ending-detail-text');
    if (titleEl) titleEl.textContent = title;
    if (textEl) textEl.textContent = text;
    showOverlay(DETAIL_OVERLAY_ID);
}

/**
 * 打开结局图鉴
 */
export function openEndingGallery() {
    renderEndingGallery();
    showOverlay(GALLERY_OVERLAY_ID);
}

/**
 * 关闭结局图鉴
 */
export function closeEndingGallery() {
    hideOverlay(GALLERY_OVERLAY_ID);
}

/**
 * 关闭结局详情
 */
export function closeEndingDetail() {
    hideOverlay(DETAIL_OVERLAY_ID);
}

/**
 * 清除缓存（切换存档或重置后调用）
 */
export function clearEndingCache() {
    endingsCache.clear();
}

// 绑定关闭按钮
function bindOnce() {
    const galleryClose = document.getElementById('ending-gallery-close');
    if (galleryClose) galleryClose.addEventListener('click', closeEndingGallery);

    const detailClose = document.getElementById('ending-detail-close');
    if (detailClose) detailClose.addEventListener('click', closeEndingDetail);

    const galleryOverlay = getOverlay(GALLERY_OVERLAY_ID);
    if (galleryOverlay) {
        galleryOverlay.addEventListener('click', (e) => {
            if (e.target === galleryOverlay) closeEndingGallery();
        });
    }

    const detailOverlay = getOverlay(DETAIL_OVERLAY_ID);
    if (detailOverlay) {
        detailOverlay.addEventListener('click', (e) => {
            if (e.target === detailOverlay) closeEndingDetail();
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindOnce);
} else {
    bindOnce();
}

// 导出公共 API
Huimen.openEndingGallery = openEndingGallery;
Huimen.closeEndingGallery = closeEndingGallery;
Huimen.clearEndingCache = clearEndingCache;
