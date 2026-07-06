/**
 * 《阴阳簿》屏幕模板聚合
 * 负责将各屏幕 HTML 渲染到 #game-container
 */

import { titleScreenTemplate } from './titleScreen.js';
import { storySelectScreenTemplate } from './storySelectScreen.js';
import { gameScreenTemplate } from './gameScreen.js';
import { endingScreenTemplate } from './endingScreen.js';
import { achievementsScreenTemplate } from './achievementsScreen.js';
import { overlayScreensTemplate } from './overlayScreens.js';

const ALL_TEMPLATES = [
    titleScreenTemplate,
    storySelectScreenTemplate,
    gameScreenTemplate,
    endingScreenTemplate,
    achievementsScreenTemplate,
    overlayScreensTemplate
];

/**
 * 将所有屏幕模板插入到 #game-container
 */
export function renderScreens() {
    const container = document.getElementById('game-container');
    if (!container) {
        console.error('renderScreens: #game-container 未找到');
        return;
    }
    try {
        container.innerHTML = ALL_TEMPLATES.join('\n');
    } catch (e) {
        console.error('renderScreens: 模板渲染失败', e);
        container.innerHTML = '<div style="padding:20px;color:#c00;">界面渲染失败，请刷新页面重试。</div>';
    }
}
