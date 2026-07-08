/**
 * 最小 DOM / Browser API mock，用于在 Node 环境中运行前端模块测试
 */

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const elements = new Map();

export class MockElement {
    constructor(tag) {
        this.tagName = tag;
        this.children = [];
        this.style = {
            _props: new Map(),
            setProperty(k, v) { this._props.set(k, v); },
            getPropertyValue(k) { return this._props.get(k) || ''; }
        };
        this._attrs = new Map();
        this.dataset = {};
        this.classList = {
            add() {},
            remove() {},
            contains() { return false; },
            toggle() {}
        };
    }
    get id() { return this._attrs.get('id') || ''; }
    set id(v) { this._attrs.set('id', v); }
    setAttribute(k, v) { this._attrs.set(k, v); }
    getAttribute(k) { return this._attrs.get(k) || null; }
    addEventListener() {}
    removeEventListener() {}
    focus() {}
    blur() {}
    click() {}
    get childNodes() {
        return this.children.slice();
    }
    appendChild(c) { this.children.push(c); return c; }
    append(c) { this.children.push(c); }
    querySelector() { return new MockElement('div'); }
    querySelectorAll() { return []; }
    remove() {}
    get textContent() { return this._text || ''; }
    set textContent(v) { this._text = v; }
    get innerHTML() { return this._html || ''; }
    set innerHTML(v) {
        this._html = v;
        this.children = [];
    }
    className = '';
}

export function setupDomMock() {
    const document = {
        readyState: 'complete',
        baseURI: 'file:///Users/huohuo/kimipro3/paper-bride-horror-game/',
        body: new MockElement('body'),
        createElement(tag) { return new MockElement(tag); },
        addEventListener() {},
        removeEventListener() {},
        querySelector(sel) { return elements.get(sel) || new MockElement('div'); },
        querySelectorAll() { return []; },
        getElementById(id) { return elements.get('#' + id) || new MockElement('div'); }
    };

    const localStorage = {
        store: new Map(),
        getItem(k) { return this.store.has(k) ? this.store.get(k) : null; },
        setItem(k, v) { this.store.set(k, String(v)); },
        removeItem(k) { this.store.delete(k); },
        clear() { this.store.clear(); }
    };

    const sessionStorage = { ...localStorage };

    globalThis.document = document;
    globalThis.localStorage = localStorage;
    globalThis.sessionStorage = sessionStorage;
    globalThis.window = globalThis;
    globalThis.location = { href: 'http://localhost/' };
    globalThis.alert = console.log;
    globalThis.confirm = () => true;

    // 预置关键 DOM 节点
    [
        '#game-container', '#title-screen', '#story-select-screen', '#game-screen',
        '#ending-screen', '#achievements-screen', '#cg-overlay', '#cg-gallery-overlay',
        '#shop-screen', '#record-overlay', '#journey-overlay',
        '#start-btn', '#story-grid', '#story-text', '#choices', '#time-display',
        '#sanity-bar', '#sanity-value', '#yin-bar', '#yin-value', '#inventory',
        '#inventory-items', '#typing-cursor', '#skip-hint', '#effects-layer',
        '#record-btn', '#record-list', '#record-stats', '#journey-list',
        '#ending-title', '#ending-text', '#achievement-list', '#achievement-count',
        '#cg-image', '#cg-placeholder', '#cg-title', '#cg-gallery-list', '#cg-unlock-count',
        '#shop-balance', '#shop-buy-hint', '#shop-buy-cg', '#shop-buy-revive',
        '#currency-display-select'
    ].forEach(sel => {
        const el = new MockElement('div');
        el.id = sel.replace(/^#/, '');
        elements.set(sel, el);
    });

    if (!globalThis.matchMedia) {
        globalThis.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
    }
}

export function resetDomMock() {
    elements.clear();
}

export { __dirname };
