/**
 * 《阴阳簿》通用工具函数
 */

/**
 * HTML 转义
 */
export function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * 安全合并对象，过滤危险键
 */
export function safeMergeSave(target, source) {
    if (!source || typeof source !== 'object') return;
    Object.keys(source).forEach(key => {
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') return;
        target[key] = source[key];
    });
}

/**
 * 将游戏内分钟数格式化为 HH:MM
 */
export function formatGameTime(minutes) {
    if (typeof minutes !== 'number') return '';
    const hour = Math.floor(minutes / 60) % 24;
    const min = minutes % 60;
    return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
}

/**
 * 简单判断是否为触摸设备
 */
export function isTouchDevice() {
    return window.matchMedia('(pointer: coarse)').matches;
}
