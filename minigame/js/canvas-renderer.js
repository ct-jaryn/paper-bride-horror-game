/**
 * 微信小游戏 Canvas 渲染器
 *
 * 用 Canvas 2D 实现原本由 DOM/CSS 承担的界面：
 * 标题、选卷、游戏（状态栏/文本/选项）、结局、成就、商店、记录。
 */

import { Huimen } from '../../js/engine/namespace.js';
import * as SaveManager from '../../js/engine/saveManager.js';
import { resetState, loadStoryState, patchGameState, pushToArray, saveStoryState } from '../../js/engine/state.js';
import { applyEffects, checkGameOver, getShichen, checkCondition } from '../../js/engine/effectEngine.js';
import { applyEasterEggs } from '../../js/engine/storyExtensions.js';
import { StoryManifest } from '../../stories/manifest.js';
import { Platform } from '../../js/engine/platform.js';

const COLORS = {
    bg: '#1a1a1a',
    paper: '#2a2520',
    text: '#d8d0c8',
    muted: '#8a8078',
    red: '#c0392b',
    faded: '#7f8c8d',
    whisper: '#a0a0a0',
    border: '#5c2118',
    button: '#3e2723',
    buttonActive: '#5d3528',
    sanity: '#c0392b',
    yin: '#8e44ad',
    gold: '#d4af37'
};

const FONTS = {
    title: 'bold 36px sans-serif',
    subtitle: '16px sans-serif',
    body: '16px sans-serif',
    small: '13px sans-serif',
    button: '16px sans-serif',
    status: '14px sans-serif'
};

function polyfillRoundRect(ctx) {
    if (typeof ctx.roundRect === 'function') return;
    ctx.roundRect = function(x, y, w, h, r) {
        const radius = Math.min(r, w / 2, h / 2);
        this.beginPath();
        this.moveTo(x + radius, y);
        this.lineTo(x + w - radius, y);
        this.quadraticCurveTo(x + w, y, x + w, y + radius);
        this.lineTo(x + w, y + h - radius);
        this.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
        this.lineTo(x + radius, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - radius);
        this.lineTo(x, y + radius);
        this.quadraticCurveTo(x, y, x + radius, y);
        this.closePath();
    };
}

function stripTags(text) {
    return String(text)
        .replace(/\[(red|faded|whisper|scream)\]/g, '')
        .replace(/\[\/(red|faded|whisper|scream)\]/g, '')
        .replace(/\n+/g, '\n')
        .trim();
}

export class CanvasRenderer {
    constructor(canvas, ctx, systemInfo) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = systemInfo.windowWidth;
        this.height = systemInfo.windowHeight;
        this.pixelRatio = systemInfo.pixelRatio || 1;

        this.currentScreen = 'title';
        this.overlay = null;
        this.hitRegions = [];
        this.activeRegion = null;
        this.touchStart = null;
        this.scrollY = 0;
        this.maxScroll = 0;
        this.scrollable = false;

        this.typing = false;
        this.typedText = '';
        this.fullText = '';
        this.typingIndex = 0;
        this.typingTimer = null;
        this.typingOnComplete = null;

        this.currentScene = null;
        this.currentChoices = [];
        this.currentStory = null;
        this.storyBundles = null;
        this.audio = null;

        this.toast = null;
        this.toastTimer = null;

        polyfillRoundRect(this.ctx);

        this._setupTouch();
    }

    setAudio(audio) {
        this.audio = audio;
    }

    setStoryBundles(bundles) {
        this.storyBundles = bundles;
    }

    start() {
        Huimen.showScreen = (name) => this.showScreen(name);
        Huimen.showEnding = (endingId) => this.showEnding(endingId);
        Huimen.skipTyping = () => this.skipTyping();
        Huimen.ToastManager = { show: (opts) => this.showToast(opts) };
        this.showScreen('title');
    }

    // ---- 触摸输入 ----
    _setupTouch() {
        wx.onTouchStart((e) => this._onTouchStart(e));
        wx.onTouchMove((e) => this._onTouchMove(e));
        wx.onTouchEnd((e) => this._onTouchEnd(e));
    }

    _touchPoint(e) {
        const t = e.touches[0] || e.changedTouches[0];
        return t ? { x: t.clientX, y: t.clientY } : { x: 0, y: 0 };
    }

    _onTouchStart(e) {
        const p = this._touchPoint(e);
        this.touchStart = { x: p.x, y: p.y, time: Date.now() };
        const region = this._hitRegion(p.x, p.y);
        if (region) {
            this.activeRegion = region;
            this.render();
        }
    }

    _onTouchMove(e) {
        if (!this.touchStart) return;
        const p = this._touchPoint(e);
        if (this.scrollable) {
            const dy = p.y - this.touchStart.y;
            this.scrollY = Math.max(0, Math.min(this.maxScroll, this.scrollY - dy));
            this.touchStart.y = p.y;
            this.render();
        } else {
            const region = this._hitRegion(p.x, p.y);
            if (!region || !this.activeRegion || region.id !== this.activeRegion.id) {
                this.activeRegion = null;
                this.render();
            }
        }
    }

    _onTouchEnd(e) {
        const p = this._touchPoint(e);
        const region = this._hitRegion(p.x, p.y);
        if (region && this.activeRegion && region.id === this.activeRegion.id) {
            this._triggerRegion(region);
        }
        this.activeRegion = null;
        this.touchStart = null;
    }

    _hitRegion(x, y) {
        for (let i = this.hitRegions.length - 1; i >= 0; i--) {
            const r = this.hitRegions[i];
            if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) {
                return r;
            }
        }
        return null;
    }

    _triggerRegion(region) {
        if (region && typeof region.action === 'function') {
            region.action(region.data);
        }
    }

    _addRegion(x, y, w, h, action, data, id) {
        this.hitRegions.push({ x, y, w, h, action, data, id });
    }

    // ---- 渲染入口 ----
    render() {
        const ctx = this.ctx;
        this.hitRegions = [];
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.fillStyle = COLORS.bg;
        ctx.fillRect(0, 0, this.width, this.height);

        switch (this.currentScreen) {
            case 'title':
                this._renderTitle();
                break;
            case 'storySelect':
                this._renderStorySelect();
                break;
            case 'game':
                this._renderGame();
                break;
            case 'ending':
                this._renderEnding();
                break;
            case 'achievements':
                this._renderAchievements();
                break;
            case 'shop':
                this._renderShop();
                break;
        }

        if (this.overlay) {
            this._renderOverlay();
        }

        this._renderToast();
    }

    // ---- 通用绘制工具 ----
    _drawText(text, x, y, options = {}) {
        const ctx = this.ctx;
        ctx.font = options.font || FONTS.body;
        ctx.fillStyle = options.color || COLORS.text;
        ctx.textAlign = options.align || 'left';
        ctx.textBaseline = options.baseline || 'top';
        ctx.fillText(text, x, y);
    }

    _textWidth(text, font) {
        this.ctx.font = font;
        return this.ctx.measureText(text).width;
    }

    _wrapText(text, maxWidth, font) {
        this.ctx.font = font;
        const lines = [];
        let line = '';
        for (const char of text) {
            const test = line + char;
            if (char === '\n') {
                lines.push(line);
                line = '';
            } else if (this.ctx.measureText(test).width > maxWidth && line) {
                lines.push(line);
                line = char;
            } else {
                line = test;
            }
        }
        if (line) lines.push(line);
        return lines;
    }

    _drawButton(rect, text, active, options = {}) {
        const ctx = this.ctx;
        const r = options.radius || 6;
        ctx.beginPath();
        ctx.roundRect(rect.x, rect.y, rect.w, rect.h, r);
        ctx.fillStyle = active ? COLORS.buttonActive : (options.fill || COLORS.button);
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = options.border || COLORS.border;
        ctx.stroke();

        ctx.font = options.font || FONTS.button;
        ctx.fillStyle = options.color || COLORS.text;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, rect.x + rect.w / 2, rect.y + rect.h / 2);
    }

    _drawBar(x, y, w, h, value, color) {
        const ctx = this.ctx;
        ctx.fillStyle = '#333';
        ctx.fillRect(x, y, w, h);
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w * Math.max(0, Math.min(1, value / 100)), h);
        ctx.strokeStyle = '#555';
        ctx.strokeRect(x, y, w, h);
    }

    // ---- 标题画面 ----
    _renderTitle() {
        const ctx = this.ctx;
        const cx = this.width / 2;

        ctx.fillStyle = COLORS.text;
        ctx.font = FONTS.title;
        ctx.textAlign = 'center';
        ctx.fillText('阴阳簿', cx, this.height * 0.22);

        ctx.font = FONTS.subtitle;
        ctx.fillStyle = COLORS.red;
        ctx.fillText('红烛照幽冥，白幡引亡魂', cx, this.height * 0.32);

        ctx.fillStyle = COLORS.muted;
        ctx.fillText('Tales from the Nether', cx, this.height * 0.38);

        const btnW = 180;
        const btnH = 48;
        const btnX = (this.width - btnW) / 2;
        let btnY = this.height * 0.52;

        const startRect = { x: btnX, y: btnY, w: btnW, h: btnH };
        this._drawButton(startRect, '翻开簿册', this.activeRegion?.id === 'start');
        this._addRegion(startRect.x, startRect.y, startRect.w, startRect.h,
            () => this.showScreen('storySelect'), null, 'start');

        const recent = this._getMostRecentSave();
        if (recent) {
            btnY += 64;
            const contRect = { x: btnX, y: btnY, w: btnW, h: btnH };
            this._drawButton(contRect, `续读 · ${recent.story.title}`, this.activeRegion?.id === 'continue', { border: COLORS.gold });
            this._addRegion(contRect.x, contRect.y, contRect.w, contRect.h,
                () => this.startStory(recent.story.id, false), null, 'continue');
        }

        // 底部工具栏
        const tools = [
            { id: 'ach-title', label: '阴阳全录', action: () => this.showScreen('achievements') },
            { id: 'shop-title', label: '阴市', action: () => this.showScreen('shop') },
            { id: 'journey-title', label: '阴阳历程', action: () => this.openOverlay('journey') },
            { id: 'sound-title', label: '音效', action: () => this._toggleSound() }
        ];
        const toolW = (this.width - 32) / tools.length;
        const toolY = this.height - 70;
        tools.forEach((t, i) => {
            const tx = 16 + i * toolW;
            this._drawButton({ x: tx + 4, y: toolY, w: toolW - 8, h: 44 }, t.label,
                this.activeRegion?.id === t.id, { font: FONTS.small });
            this._addRegion(tx + 4, toolY, toolW - 8, 44, t.action, null, t.id);
        });
    }

    // ---- 故事选择 ----
    _renderStorySelect() {
        const ctx = this.ctx;
        const top = 56;
        const pad = 16;

        // 顶部
        ctx.fillStyle = COLORS.text;
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('请选择一卷', pad, 34);

        const balance = Huimen.CurrencyManager ? Huimen.CurrencyManager.getBalance() : 0;
        ctx.font = FONTS.small;
        ctx.fillStyle = COLORS.gold;
        ctx.textAlign = 'right';
        ctx.fillText(`阴钱 ${balance}`, this.width - pad, 34);

        // 返回按钮
        const backRect = { x: this.width - 80, y: this.height - 56, w: 64, h: 40 };
        this._drawButton(backRect, '返回', this.activeRegion?.id === 'select-back', { font: FONTS.small });
        this._addRegion(backRect.x, backRect.y, backRect.w, backRect.h,
            () => this.showScreen('title'), null, 'select-back');

        // 卡片列表（可滚动）
        const cardW = this.width - pad * 2;
        const cardH = 150;
        const cardGap = 12;
        const listH = this.height - top - 80;
        const contentH = StoryManifest.length * (cardH + cardGap);
        this.scrollable = contentH > listH;
        this.maxScroll = Math.max(0, contentH - listH);
        this.scrollY = Math.min(this.scrollY, this.maxScroll);

        ctx.save();
        ctx.beginPath();
        ctx.rect(pad, top, cardW, listH);
        ctx.clip();

        let y = top - this.scrollY;
        StoryManifest.forEach((story, idx) => {
            const save = SaveManager.loadStorySave(story.id);
            const hasSave = !!save;
            const reachedEndings = (Huimen.AchievementEngine?.endingsReached[story.id] || []).length;

            ctx.fillStyle = COLORS.paper;
            ctx.strokeStyle = COLORS.border;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.roundRect(pad, y, cardW, cardH, 8);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = COLORS.text;
            ctx.font = 'bold 18px sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillText(story.title, pad + 12, y + 10);

            ctx.fillStyle = COLORS.red;
            ctx.font = FONTS.small;
            ctx.fillText(story.subtitle, pad + 12, y + 34);

            ctx.fillStyle = COLORS.muted;
            ctx.font = FONTS.small;
            const descLines = this._wrapText(story.description, cardW - 24, FONTS.small);
            descLines.slice(0, 2).forEach((line, i) => ctx.fillText(line, pad + 12, y + 56 + i * 18));

            // 难度 / 标签
            ctx.fillStyle = COLORS.gold;
            ctx.fillText(`${story.difficulty} · 恐怖度${'★'.repeat(story.horrorLevel)}`, pad + 12, y + 100);

            // 操作按钮
            const btnY = y + cardH - 44;
            const startW = hasSave ? 80 : cardW - 24;
            const startRect = { x: pad + 12, y: btnY, w: startW, h: 36 };
            this._drawButton(startRect, hasSave ? '继续' : '开始',
                this.activeRegion?.id === `start-${story.id}`, { font: FONTS.small });
            this._addRegion(startRect.x, startRect.y, startRect.w, startRect.h,
                () => this.startStory(story.id, false), null, `start-${story.id}`);

            if (hasSave) {
                const resetRect = { x: pad + 100, y: btnY, w: 80, h: 36 };
                this._drawButton(resetRect, '重开', this.activeRegion?.id === `reset-${story.id}`,
                    { font: FONTS.small, border: COLORS.red });
                this._addRegion(resetRect.x, resetRect.y, resetRect.w, resetRect.h,
                    () => Platform.confirm('确定删除存档并重新开始吗？').then(ok => {
                        if (ok) this.startStory(story.id, true);
                    }), null, `reset-${story.id}`);
            }

            y += cardH + cardGap;
        });

        ctx.restore();

        // 滚动条
        if (this.scrollable) {
            const barH = Math.max(30, listH * (listH / contentH));
            const barY = top + (listH - barH) * (this.scrollY / this.maxScroll);
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            ctx.fillRect(this.width - 6, barY, 4, barH);
        }
    }

    // ---- 游戏主界面 ----
    _renderGame() {
        const pad = 16;
        const topH = 56;
        const bottomH = 140;
        const textTop = topH + pad;
        const textH = this.height - textTop - bottomH;

        this._renderStatusBar(topH);

        const ctx = this.ctx;
        const textW = this.width - pad * 2;

        // 物品栏
        const inv = Huimen.GameState.inventory || [];
        let invH = 0;
        if (inv.length > 0) {
            invH = 32;
            ctx.fillStyle = COLORS.paper;
            ctx.fillRect(pad, textTop, textW, invH);
            ctx.fillStyle = COLORS.gold;
            ctx.font = FONTS.small;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillText(`物品：${inv.join(' · ')}`, pad + 8, textTop + 8);
        }

        // 文本区
        const areaY = textTop + invH + pad;
        const areaH = textH - invH - pad;
        ctx.fillStyle = COLORS.paper;
        ctx.beginPath();
        ctx.roundRect(pad, areaY, textW, areaH, 8);
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(pad + 4, areaY + 4, textW - 8, areaH - 8, 6);
        ctx.clip();

        ctx.fillStyle = COLORS.text;
        ctx.font = FONTS.body;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        const lines = this._wrapText(this.typedText, textW - 24, FONTS.body);
        const lineH = 24;
        const contentH = lines.length * lineH;
        this.scrollable = contentH > areaH - 16;
        this.maxScroll = Math.max(0, contentH - (areaH - 16));
        this.scrollY = Math.min(this.scrollY, this.maxScroll);

        lines.forEach((line, i) => ctx.fillText(line, pad + 12, areaY + 12 + i * lineH - this.scrollY));

        // 打字光标
        if (this.typing) {
            const lastLine = lines[lines.length - 1] || '';
            const cursorX = pad + 12 + this._textWidth(lastLine, FONTS.body);
            const cursorY = areaY + 12 + (lines.length - 1) * lineH - this.scrollY;
            ctx.fillStyle = COLORS.red;
            ctx.fillRect(cursorX, cursorY, 2, lineH);
        }

        ctx.restore();

        // 选项区
        const choiceTop = this.height - bottomH + 10;
        const choiceW = textW;
        const btnH = 40;
        const btnGap = 10;
        this.currentChoices.forEach((choice, idx) => {
            const rect = { x: pad, y: choiceTop + idx * (btnH + btnGap), w: choiceW, h: btnH };
            const active = this.activeRegion?.id === `choice-${idx}`;
            this._drawButton(rect, choice.text, active,
                { font: FONTS.small, border: choice.danger ? COLORS.red : COLORS.border });
            this._addRegion(rect.x, rect.y, rect.w, rect.h,
                () => this._makeChoice(choice, idx), null, `choice-${idx}`);
        });

        // 点击文本跳过打字
        this._addRegion(pad, areaY, textW, areaH, () => this.skipTyping(), null, 'skip-text');
    }

    _renderStatusBar(h) {
        const ctx = this.ctx;
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, this.width, h);
        ctx.strokeStyle = '#333';
        ctx.beginPath();
        ctx.moveTo(0, h);
        ctx.lineTo(this.width, h);
        ctx.stroke();

        const state = Huimen.GameState;
        const pad = 12;
        let x = pad;

        // 时辰
        ctx.font = FONTS.status;
        ctx.fillStyle = COLORS.muted;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(getShichen(state.time), x, h / 2);
        x += 64;

        // 理智
        ctx.fillStyle = COLORS.text;
        ctx.fillText('理智', x, h / 2 - 8);
        this._drawBar(x, h / 2 + 2, 60, 8, state.sanity, COLORS.sanity);
        x += 72;

        // 阴气
        ctx.fillText('阴气', x, h / 2 - 8);
        this._drawBar(x, h / 2 + 2, 60, 8, state.yin, COLORS.yin);
        x += 72;

        // 阴钱
        const balance = Huimen.CurrencyManager ? Huimen.CurrencyManager.getBalance() : 0;
        ctx.fillStyle = COLORS.gold;
        ctx.fillText(`阴钱 ${balance}`, x, h / 2);

        // 记录按钮
        const recW = 40;
        const recRect = { x: this.width - recW - pad, y: 10, w: recW, h: h - 20 };
        this._drawButton(recRect, '记', this.activeRegion?.id === 'record-btn', { font: FONTS.small });
        this._addRegion(recRect.x, recRect.y, recRect.w, recRect.h,
            () => this.openOverlay('record'), null, 'record-btn');
    }

    // ---- 结局界面 ----
    _renderEnding() {
        const ctx = this.ctx;
        const pad = 24;
        const cx = this.width / 2;

        ctx.fillStyle = COLORS.red;
        ctx.font = 'bold 28px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(this._endingTitle || '结局', cx, 80);

        ctx.fillStyle = COLORS.text;
        ctx.font = FONTS.body;
        const lines = this._wrapText(this._endingText || '', this.width - pad * 2, FONTS.body);
        lines.forEach((line, i) => ctx.fillText(line, cx, 140 + i * 24));

        const btnW = 140;
        const btnH = 44;
        const btnY = this.height - 180;
        const gap = 16;

        const restartRect = { x: cx - btnW - gap, y: btnY, w: btnW, h: btnH };
        this._drawButton(restartRect, '重来一世', this.activeRegion?.id === 'ending-restart');
        this._addRegion(restartRect.x, restartRect.y, restartRect.w, restartRect.h,
            () => {
                if (this.currentStory) {
                    this.startStory(this.currentStory.id, true);
                } else {
                    this.showScreen('storySelect');
                }
            }, null, 'ending-restart');

        const selectRect = { x: cx + gap, y: btnY, w: btnW, h: btnH };
        this._drawButton(selectRect, '返回选卷', this.activeRegion?.id === 'ending-select', { border: COLORS.gold });
        this._addRegion(selectRect.x, selectRect.y, selectRect.w, selectRect.h,
            () => this.showScreen('storySelect'), null, 'ending-select');

        const titleRect = { x: cx - btnW / 2, y: btnY + 64, w: btnW, h: btnH };
        this._drawButton(titleRect, '返回封面', this.activeRegion?.id === 'ending-title', { font: FONTS.small });
        this._addRegion(titleRect.x, titleRect.y, titleRect.w, titleRect.h,
            () => this.showScreen('title'), null, 'ending-title');
    }

    // ---- 成就 / 商店 / 历程 / 记录 ----
    _renderAchievements() {
        this._renderSimpleList('阴阳全录', Huimen.AchievementEngine?.getAll().map(a => ({
            title: a.unlocked ? a.name : (a.hidden ? '未解之谜' : a.name),
            desc: a.unlocked ? a.description : (a.hidden ? '继续探索阴阳簿，或许能揭开这个秘密。' : a.description),
            unlocked: a.unlocked
        })) || []);
    }

    _renderShop() {
        const items = [
            { name: '通灵符', price: 10, action: () => Huimen.CurrencyManager?.buyHintToken?.() },
            { name: '窥梦图', price: 50, action: () => Huimen.CurrencyManager?.unlockCG?.('dream_1') },
            { name: '续命香', price: 50, action: () => Huimen.CurrencyManager?.buyReviveToken?.() }
        ];
        this._renderItemList('阴市', items);
    }

    _renderOverlay() {
        const ctx = this.ctx;
        ctx.fillStyle = 'rgba(0,0,0,0.85)';
        ctx.fillRect(0, 0, this.width, this.height);

        const pad = 20;
        const panelY = 60;
        const panelH = this.height - 120;
        ctx.fillStyle = COLORS.paper;
        ctx.beginPath();
        ctx.roundRect(pad, panelY, this.width - pad * 2, panelH, 10);
        ctx.fill();
        ctx.strokeStyle = COLORS.border;
        ctx.stroke();

        if (this.overlay === 'record') this._renderRecordContent(pad + 16, panelY + 50, this.width - pad * 2 - 32, panelH - 80);
        else if (this.overlay === 'journey') this._renderJourneyContent(pad + 16, panelY + 50, this.width - pad * 2 - 32, panelH - 80);

        // 关闭按钮
        const closeRect = { x: this.width - 70, y: panelY + 10, w: 50, h: 34 };
        this._drawButton(closeRect, '×', this.activeRegion?.id === 'overlay-close', { font: 'bold 20px sans-serif' });
        this._addRegion(closeRect.x, closeRect.y, closeRect.w, closeRect.h,
            () => this.closeOverlay(), null, 'overlay-close');
    }

    _renderRecordContent(x, y, w, h) {
        const ctx = this.ctx;
        ctx.fillStyle = COLORS.text;
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText('命簿记录', x, y - 36);

        const log = (Huimen.GameState.choiceLog || []).slice();
        ctx.font = FONTS.small;
        ctx.fillStyle = COLORS.muted;
        if (log.length === 0) {
            ctx.fillText('尚无选择记录。', x, y);
            return;
        }
        const lineH = 22;
        const lines = [];
        log.forEach((entry, idx) => {
            lines.push(`${idx + 1}. ${entry.choiceText}`);
            lines.push(`   理智 ${entry.before.sanity} → ${entry.before.sanity + (entry.effects.sanity || 0)}`);
        });
        lines.forEach((line, i) => ctx.fillText(line, x, y + i * lineH));
    }

    _renderJourneyContent(x, y, w, h) {
        const ctx = this.ctx;
        ctx.fillStyle = COLORS.text;
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText('阴阳历程', x, y - 36);

        ctx.font = FONTS.small;
        StoryManifest.forEach((story, idx) => {
            const save = SaveManager.loadStorySave(story.id);
            const endings = (Huimen.AchievementEngine?.endingsReached[story.id] || []).length;
            const yy = y + idx * 30;
            ctx.fillStyle = endings > 0 ? COLORS.gold : COLORS.muted;
            ctx.fillText(`${story.title} · ${save ? '有存档' : '未开始'} · 结局 ${endings}`, x, yy);
        });
    }

    _renderSimpleList(title, items) {
        const ctx = this.ctx;
        const pad = 16;
        ctx.fillStyle = COLORS.text;
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(title, pad, 30);

        const backRect = { x: this.width - 80, y: this.height - 56, w: 64, h: 40 };
        this._drawButton(backRect, '返回', this.activeRegion?.id === 'list-back', { font: FONTS.small });
        this._addRegion(backRect.x, backRect.y, backRect.w, backRect.h,
            () => this.showScreen('title'), null, 'list-back');

        const listY = 70;
        const lineH = 54;
        const contentH = items.length * lineH;
        const listH = this.height - listY - 80;
        this.scrollable = contentH > listH;
        this.maxScroll = Math.max(0, contentH - listH);
        this.scrollY = Math.min(this.scrollY, this.maxScroll);

        ctx.save();
        ctx.beginPath();
        ctx.rect(pad, listY, this.width - pad * 2, listH);
        ctx.clip();

        items.forEach((item, idx) => {
            const yy = listY + idx * lineH - this.scrollY;
            ctx.fillStyle = item.unlocked ? 'rgba(192,57,43,0.15)' : COLORS.paper;
            ctx.fillRect(pad, yy, this.width - pad * 2, lineH - 6);
            ctx.fillStyle = item.unlocked ? COLORS.gold : COLORS.text;
            ctx.font = FONTS.small;
            ctx.textAlign = 'left';
            ctx.fillText(item.title, pad + 10, yy + 8);
            ctx.fillStyle = COLORS.muted;
            ctx.fillText(item.desc, pad + 10, yy + 28);
        });

        ctx.restore();
    }

    _renderItemList(title, items) {
        const ctx = this.ctx;
        const pad = 16;
        ctx.fillStyle = COLORS.text;
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(title, pad, 30);
        ctx.fillStyle = COLORS.gold;
        ctx.font = FONTS.small;
        ctx.fillText(`阴钱 ${Huimen.CurrencyManager?.getBalance() || 0}`, this.width - pad, 30);

        const backRect = { x: this.width - 80, y: this.height - 56, w: 64, h: 40 };
        this._drawButton(backRect, '返回', this.activeRegion?.id === 'shop-back', { font: FONTS.small });
        this._addRegion(backRect.x, backRect.y, backRect.w, backRect.h,
            () => this.showScreen(Huimen.CurrentStory ? 'game' : 'title'), null, 'shop-back');

        const itemH = 80;
        const gap = 12;
        const startY = 70;
        items.forEach((item, idx) => {
            const y = startY + idx * (itemH + gap);
            ctx.fillStyle = COLORS.paper;
            ctx.fillRect(pad, y, this.width - pad * 2, itemH);
            ctx.strokeStyle = COLORS.border;
            ctx.strokeRect(pad, y, this.width - pad * 2, itemH);

            ctx.fillStyle = COLORS.text;
            ctx.font = 'bold 16px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(item.name, pad + 12, y + 12);
            ctx.fillStyle = COLORS.gold;
            ctx.font = FONTS.small;
            ctx.fillText(`${item.price} 阴钱`, pad + 12, y + 38);

            const buyRect = { x: this.width - pad - 70, y: y + 20, w: 60, h: 36 };
            this._drawButton(buyRect, '购买', this.activeRegion?.id === `buy-${idx}`, { font: FONTS.small });
            this._addRegion(buyRect.x, buyRect.y, buyRect.w, buyRect.h,
                () => { item.action(); this.render(); }, null, `buy-${idx}`);
        });
    }

    // ---- Toast ----
    showToast(options = {}) {
        this.toast = options;
        if (this.toastTimer) clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => {
            this.toast = null;
            this.render();
        }, options.duration || 2500);
        this.render();
    }

    _renderToast() {
        if (!this.toast) return;
        const ctx = this.ctx;
        const text = this.toast.title || this.toast.description || '';
        const w = Math.min(this.width - 40, this._textWidth(text, FONTS.small) + 32);
        const h = 40;
        const x = (this.width - w) / 2;
        const y = 80;
        ctx.fillStyle = 'rgba(40,30,30,0.95)';
        ctx.strokeStyle = COLORS.border;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 6);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = COLORS.text;
        ctx.font = FONTS.small;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + w / 2, y + h / 2);
    }

    // ---- 屏幕切换 ----
    showScreen(name) {
        this.currentScreen = name;
        this.overlay = null;
        this.scrollY = 0;
        this.scrollable = false;
        this.activeRegion = null;
        if (name === 'title' || name === 'game') {
            if (this.audio) this.audio.playAmbient();
        } else {
            if (this.audio) this.audio.stopAmbient();
        }
        this.render();
    }

    openOverlay(name) {
        this.overlay = name;
        this.scrollY = 0;
        this.activeRegion = null;
        this.render();
    }

    closeOverlay() {
        this.overlay = null;
        this.activeRegion = null;
        this.render();
    }

    _toggleSound() {
        const muted = this.audio ? this.audio.toggleMute() : false;
        this.showToast({ title: muted ? '已静音' : '音效已开启', duration: 1500 });
    }

    // ---- 故事流程 ----
    startStory(storyId, forceReset = false) {
        const bundle = this.storyBundles[storyId];
        if (!bundle || !bundle.StoryData || !bundle.Endings) {
            Platform.alert('故事数据缺失：' + storyId);
            return;
        }
        const story = StoryManifest.find(s => s.id === storyId);
        if (!story) return;

        Huimen.CurrentStory = story;
        Huimen.StoryData = bundle.StoryData;
        Huimen.Endings = bundle.Endings;
        this.currentStory = story;
        applyEasterEggs();

        if (forceReset) {
            resetState(storyId, true);
            SaveManager.removeStorySave(storyId);
        } else {
            loadStoryState(storyId, Huimen.StoryData, Huimen.GlobalFlags);
        }

        this.showScreen('game');
        this.renderScene(Huimen.GameState.currentScene || 'prologue');
    }

    renderScene(sceneId) {
        const scene = Huimen.StoryData[sceneId];
        if (!scene) return;

        this.currentScene = scene;
        patchGameState('currentScene', sceneId);
        pushToArray('history', sceneId);
        if (Huimen.GameState.history.length > 200) {
            patchGameState('history', Huimen.GameState.history.slice(-100));
        }

        applyEffects(scene.effects);

        let text = scene.text;
        if (typeof text === 'function') text = text(Huimen.GameState);
        if (Huimen.GameState.sanity < 40 && scene.hallucination) {
            text += '\n\n' + scene.hallucination;
        }

        this.currentChoices = (scene.choices || []).filter(c => {
            if (!c.condition) return true;
            return checkCondition(c.condition, Huimen.GameState);
        });

        this.typedText = '';
        this.fullText = stripTags(text);
        this.scrollY = 0;
        this.typeText(this.fullText, () => {
            // 选项已在 renderGame 中绘制
        });

        if (this.currentStory) {
            saveStoryState(this.currentStory.id);
        }
    }

    typeText(text, onComplete) {
        this.fullText = text;
        this.typingIndex = 0;
        this.typing = true;
        this.typingOnComplete = onComplete;
        if (this.typingTimer) clearTimeout(this.typingTimer);
        this._typeNext();
    }

    _typeNext() {
        if (!this.typing) return;
        if (this.typingIndex >= this.fullText.length) {
            this.typing = false;
            this.render();
            if (this.typingOnComplete) this.typingOnComplete();
            return;
        }
        this.typedText = this.fullText.slice(0, this.typingIndex + 1);
        this.typingIndex++;
        this.render();

        let delay = 22;
        if (Huimen.GameState.sanity < 30) delay *= 1.5;
        if (Huimen.GameState.yin > 70) delay *= 0.8;
        this.typingTimer = setTimeout(() => this._typeNext(), delay);
    }

    skipTyping() {
        if (!this.typing) return;
        if (this.typingTimer) clearTimeout(this.typingTimer);
        this.typing = false;
        this.typedText = this.fullText;
        this.render();
        if (this.typingOnComplete) this.typingOnComplete();
    }

    _makeChoice(choice, index) {
        if (this.typing) {
            this.skipTyping();
            return;
        }
        if (this.audio) this.audio.play('click');
        setTimeout(() => {
            if (this.audio) this.audio.play('rustle');
        }, 90);

        const before = {
            sanity: Huimen.GameState.sanity,
            yin: Huimen.GameState.yin,
            time: Huimen.GameState.time
        };

        if (choice.effects) applyEffects(choice.effects);

        pushToArray('choiceLog', {
            sceneId: Huimen.GameState.currentScene,
            choiceText: choice.text,
            choiceIndex: index,
            timestamp: Date.now(),
            gameTime: before.time,
            effects: choice.effects || {},
            before
        });

        if (this.currentStory) saveStoryState(this.currentStory.id);

        const endingId = checkGameOver();
        if (endingId) {
            this.showEnding(endingId);
            return;
        }

        if (choice.next) this.renderScene(choice.next);
        else if (choice.ending) this.showEnding(choice.ending);
    }

    showEnding(endingId) {
        const ending = Huimen.Endings[endingId];
        if (!ending) return;

        this._endingTitle = ending.title || '结局';
        this._endingText = stripTags(ending.text || '');
        this.showScreen('ending');

        const storyId = this.currentStory ? this.currentStory.id : null;
        if (storyId) {
            const engine = Huimen.AchievementEngine;
            const currency = Huimen.CurrencyManager;
            if (engine) {
                const previousEndings = engine.endingsReached[storyId] || [];
                engine.recordEnding(storyId, endingId);
                const newlyUnlocked = engine.checkAll({
                    storyId,
                    endingId,
                    currentEndingId: endingId,
                    globalFlags: Huimen.GlobalFlags,
                    flags: Huimen.GameState.flags,
                    inventory: Huimen.GameState.inventory
                });
                newlyUnlocked.forEach(ach => {
                    this.showToast({ icon: ach.icon, title: ach.name, description: ach.description, duration: 4000 });
                    Huimen.GameEvents.emit('achievementUnlocked', { achievement: ach });
                });
                if (previousEndings.length === 0 && currency) {
                    currency.add(30, '完成故事《' + this.currentStory.title + '》');
                }
            }
            if (currency) currency.add(20, '抵达结局');
        }

        Huimen.GameEvents.emit('endingShown', {
            storyId,
            endingId,
            ending,
            newlyUnlocked: [],
            isFirstCompletion: false
        });
    }

    _getMostRecentSave() {
        if (!StoryManifest) return null;
        let best = null;
        StoryManifest.forEach(story => {
            const save = SaveManager.loadStorySave(story.id);
            if (!save || !save.lastSaveAt) return;
            if (!best || save.lastSaveAt > best.save.lastSaveAt) {
                best = { story, save };
            }
        });
        return best;
    }
}

export default CanvasRenderer;
