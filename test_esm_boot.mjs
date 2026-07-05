/**
 * ESM 启动测试：用最小 DOM mock 验证 main.js 能正确初始化
 */

import { setupDomMock } from './test/dom-mock.mjs';

setupDomMock();

try {
    await import('./js/main.js');

    if (!globalThis.Huimen) {
        throw new Error('globalThis.Huimen 未创建');
    }
    if (!Array.isArray(globalThis.Huimen.StoryManifest)) {
        throw new Error('Huimen.StoryManifest 不是数组');
    }
    if (globalThis.Huimen.StoryManifest.length !== 7) {
        throw new Error(`故事数量错误: ${globalThis.Huimen.StoryManifest.length}`);
    }
    if (typeof globalThis.Huimen.showScreen !== 'function') {
        throw new Error('Huimen.showScreen 未注册');
    }
    if (typeof globalThis.Huimen.showEnding !== 'function') {
        throw new Error('Huimen.showEnding 未注册');
    }
    if (typeof globalThis.Huimen.skipTyping !== 'function') {
        throw new Error('Huimen.skipTyping 未注册');
    }
    if (typeof globalThis.Huimen.SoundManager?.dispose !== 'function') {
        throw new Error('Huimen.SoundManager.dispose 未注册');
    }
    console.log(`✓ main.js 启动成功，${globalThis.Huimen.StoryManifest.length} 个故事已注册`);
} catch (err) {
    console.error('✗ ESM 启动测试失败:', err.message);
    console.error(err.stack);
    throw err;
}
