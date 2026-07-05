/**
 * 《阴阳簿》故事加载器
 * 动态加载 ES 模块形式的故事脚本
 */

import { Huimen } from './namespace.js';
import { ui } from './dom.js';
import * as SaveManager from './saveManager.js';
import { resetState, loadStoryState } from './state.js';
import { showScreen, renderScene } from './renderer.js';
import { applyEasterEggs } from './storyExtensions.js';
import { Platform } from './platform.js';

/**
 * 设置指定故事的加载状态
 */
export function setStoryLoading(storyId, loading) {
    const loader = document.querySelector(`.story-card-loading[data-loading="${storyId}"]`);
    if (loader) {
        loader.classList.toggle('active', loading);
    }
}

/**
 * 动态加载故事脚本
 */
export function loadStory(storyId, forceReset = false) {
    const story = Huimen.StoryManifest.find(s => s.id === storyId);
    if (!story) {
        console.error('故事不存在:', storyId);
        return;
    }

    Huimen.CurrentStory = story;
    setStoryLoading(storyId, true);

    const scriptUrl = Platform.isMinigame()
        ? story.scriptPath
        : new URL(story.scriptPath, document.baseURI).href;
    Platform.loadScript(scriptUrl)
        .then(module => {
            setStoryLoading(storyId, false);

            if (!module.StoryData || !module.Endings) {
                console.error('故事脚本加载后变量未找到:', story.scriptPath);
                Huimen.CurrentStory = null;
                alert('故事数据结构错误，请检查脚本。');
                showScreen('storySelect');
                return;
            }

            Huimen.StoryData = module.StoryData;
            Huimen.Endings = module.Endings;
            applyEasterEggs();
            initStoryData(forceReset);
        })
        .catch(err => {
            setStoryLoading(storyId, false);
            Huimen.CurrentStory = null;
            console.error('加载故事脚本失败:', story.scriptPath, err);
            alert('故事加载失败，请检查文件路径。');
            showScreen('storySelect');
        });
}

Huimen.loadStory = loadStory;

/**
 * 初始化故事数据
 */
export function initStoryData(forceReset) {
    if (!Huimen.StoryData || !Huimen.Endings) {
        console.error('故事数据结构错误:', Huimen.CurrentStory ? Huimen.CurrentStory.id : null);
        return;
    }

    if (forceReset) {
        resetState(Huimen.CurrentStory.id, true);
        SaveManager.removeStorySave(Huimen.CurrentStory.id);
    } else {
        loadStoryState(Huimen.CurrentStory.id, Huimen.StoryData, Huimen.GlobalFlags);
    }

    showScreen('game');
    renderScene(Huimen.GameState.currentScene);
}
