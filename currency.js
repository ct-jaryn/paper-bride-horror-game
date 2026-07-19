/**
 * 《阴阳簿》虚拟货币「阴钱」系统
 * 通过 Huimen.GameEvents 与游戏引擎解耦，不侵入 game.js 核心逻辑。
 */

import { Huimen } from './js/engine/namespace.js';
import { loadCurrency, saveCurrency } from './js/engine/saveManager.js';
import { Platform } from './js/engine/platform.js';
import { adjustNumber } from './js/engine/state.js';

const CurrencyManager = (function () {
    let balance = 0;
    let freeReviveUsed = new Set();
    let cgUnlocked = new Set();
    let hintTokens = 0;
    let reviveTokens = 0;

    let currentStoryId = null;
    let currentSceneId = null;
    let currentScene = null;

    const HINT_COST = 10;
    const CG_COST = 50;
    const DREAM_CG = {
        id: 'dream_1',
        url: 'assets/images/cg/dreams/dream-one.webp',
        title: '窥梦 · 七卷同源',
        storyId: 'dreams'
    };
    const REVIVE_COST = 50;
    const SANITY_COST = 80;
    const YIN_COST = 80;
    const SANITY_RESTORE = 15;
    const YIN_REDUCE = 15;
    const ENDING_REWARD = 20;
    const STORY_COMPLETE_REWARD = 30;
    const ACHIEVEMENT_REWARD = 15;

    // 通用提示池；场景数据含 hint 字段时优先使用场景自身提示。
    const genericHints = [
        '阴气太重时，理智会加速流失。',
        '有些选择需要特定物品才会显现。',
        '重复走一走旧路，或许会触发隐藏分支。',
        '纸人怕火，亡魂怕名。',
        '子时之后，阴阳两界的规则会不一样。',
        '若某段文字颜色转红，往往是关键线索。',
        '物品栏里的旧物，可能在后续场景派上用场。'
    ];

    function load() {
        try {
            const data = loadCurrency();
            balance = typeof data.balance === 'number' ? data.balance : 0;
            hintTokens = typeof data.hintTokens === 'number' ? data.hintTokens : 0;
            reviveTokens = typeof data.reviveTokens === 'number' ? data.reviveTokens : 0;
            freeReviveUsed = Array.isArray(data.freeReviveUsed) ? new Set(data.freeReviveUsed) : new Set();
            cgUnlocked = Array.isArray(data.cgUnlocked) ? new Set(data.cgUnlocked) : new Set();
        } catch (e) {
            balance = 0;
            hintTokens = 0;
            reviveTokens = 0;
            freeReviveUsed = new Set();
            cgUnlocked = new Set();
        }
    }

    function save() {
        try {
            saveCurrency({
                balance,
                hintTokens,
                reviveTokens,
                freeReviveUsed: Array.from(freeReviveUsed),
                cgUnlocked: Array.from(cgUnlocked)
            });
        } catch (e) {
            console.error('阴钱系统存档失败:', e);
        }
    }

    function getBalance() {
        return balance;
    }

    function canSpend(amount) {
        return balance >= Math.max(0, Math.floor(amount));
    }

    function add(amount, reason) {
        amount = Math.max(0, Math.floor(amount));
        if (!amount) return balance;
        balance += amount;
        save();
        showToast(`获得 ${amount} 阴钱${reason ? ' · ' + reason : ''}`);
        renderDisplays();
        return balance;
    }

    function spend(amount, reason) {
        amount = Math.max(0, Math.floor(amount));
        if (!canSpend(amount)) return false;
        balance -= amount;
        save();
        showToast(`花费 ${amount} 阴钱${reason ? ' · ' + reason : ''}`);
        renderDisplays();
        return true;
    }

    function showToast(message) {
        if (typeof Huimen !== 'undefined' && Huimen.ToastManager) {
            Huimen.ToastManager.show({
                title: message,
                duration: 2600,
                className: 'currency-toast'
            });
            return;
        }

        if (Platform.isMinigame() || typeof document === 'undefined') return;

        const existing = document.getElementById('currency-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.id = 'currency-toast';
        toast.className = 'currency-toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 2600);
    }

    function renderDisplays() {
        if (Platform.isMinigame()) return;
        document.querySelectorAll('.currency-display .currency-value').forEach(el => {
            el.textContent = balance;
        });
        const shopBalance = document.getElementById('shop-balance');
        if (shopBalance) shopBalance.textContent = balance;
    }

    function getStoryTitle(storyId) {
        if (typeof Huimen !== 'undefined' && Huimen.StoryManifest) {
            const story = Huimen.StoryManifest.find(s => s.id === storyId);
            if (story) return story.title;
        }
        return storyId;
    }

    function getHintText() {
        if (currentScene && currentScene.hint) return currentScene.hint;
        return genericHints[Math.floor(Math.random() * genericHints.length)];
    }

    function showHintPanel(hint) {
        let panel = document.getElementById('hint-panel');
        if (!panel) {
            panel = document.createElement('div');
            panel.id = 'hint-panel';
            panel.className = 'hint-panel hidden';
            document.body.appendChild(panel);
        }
        panel.innerHTML = `
            <div class="hint-content">
                <h3>签文</h3>
                <p>${hint}</p>
                <button id="hint-close" class="horror-btn secondary">收起</button>
            </div>
        `;
        panel.classList.remove('hidden');
        document.getElementById('hint-close').addEventListener('click', () => {
            panel.classList.add('hidden');
        });
    }

    function buyHint() {
        if (!currentScene) {
            showToast('当前无可用提示');
            return;
        }
        if (hintTokens > 0) {
            hintTokens -= 1;
            save();
            showToast('消耗通灵符 ×1');
            showHintPanel(getHintText());
            return;
        }
        if (!canSpend(HINT_COST)) {
            showToast('阴钱不足，无法求签');
            return;
        }
        if (spend(HINT_COST, '求签问卜')) {
            showHintPanel(getHintText());
        }
    }

    function buyHintToken() {
        if (!canSpend(HINT_COST)) {
            showToast('阴钱不足，无法购符');
            return;
        }
        if (spend(HINT_COST, '通灵符')) {
            hintTokens += 1;
            save();
            showToast('获得通灵符 ×1');
        }
    }

    function registerDreamCG(showAfterUnlock = false) {
        if (!Huimen.CGManager || typeof Huimen.CGManager.unlock !== 'function') return;
        Huimen.CGManager.unlock(DREAM_CG.id, DREAM_CG.url, DREAM_CG.title, DREAM_CG.storyId);
        if (showAfterUnlock && typeof Huimen.CGManager.show === 'function') {
            Huimen.CGManager.show(DREAM_CG.url, DREAM_CG.title);
        }
    }

    function unlockCG(cgId) {
        cgId = cgId || 'dream_1';
        if (cgUnlocked.has(cgId)) {
            if (cgId === DREAM_CG.id) registerDreamCG();
            showToast('此图已在囊中');
            return true;
        }
        if (!canSpend(CG_COST)) {
            showToast('阴钱不足，无法购图');
            return false;
        }
        if (spend(CG_COST, '解锁插图')) {
            cgUnlocked.add(cgId);
            save();
            if (cgId === DREAM_CG.id) registerDreamCG(true);
            showToast('窥梦图已解锁');
            return true;
        }
        return false;
    }

    function isCGUnlocked(cgId) {
        return cgUnlocked.has(cgId);
    }

    function canReviveForFree(storyId) {
        return storyId && !freeReviveUsed.has(storyId);
    }

    function revive(storyId) {
        storyId = storyId || currentStoryId;
        if (!storyId) {
            showToast('无法确定当前故事，无法借命');
            return false;
        }
        if (reviveTokens > 0) {
            reviveTokens -= 1;
            freeReviveUsed.add(storyId);
            save();
            showToast('续命香已燃，借命还阳');
            if (typeof Huimen.reviveAtCheckpoint === 'function') {
                Huimen.reviveAtCheckpoint(storyId);
            } else if (typeof Huimen.loadStory === 'function') {
                Huimen.loadStory(storyId, true);
            }
            return true;
        }
        const cost = canReviveForFree(storyId) ? 0 : REVIVE_COST;
        if (!canSpend(cost)) {
            showToast('阴钱不足，无法借命还阳');
            return false;
        }
        if (cost > 0 && !spend(cost, '借命还阳')) {
            return false;
        }
        freeReviveUsed.add(storyId);
        save();
        showToast(cost === 0 ? '首命天授，借命还阳' : '借命还阳，回到关键选择');

        if (typeof Huimen.reviveAtCheckpoint === 'function') {
            Huimen.reviveAtCheckpoint(storyId);
        } else if (typeof Huimen.loadStory === 'function') {
            Huimen.loadStory(storyId, true);
        } else {
            showToast('故事引擎未就绪');
        }
        return true;
    }

    function buyReviveToken() {
        if (!canSpend(REVIVE_COST)) {
            showToast('阴钱不足，无法购香');
            return;
        }
        if (spend(REVIVE_COST, '续命香')) {
            reviveTokens += 1;
            save();
            showToast('获得续命香 ×1');
        }
    }

    function isInGame() {
        return !!(Huimen.CurrentStory && Huimen.CurrentStory.id);
    }

    function buySanity() {
        if (!isInGame()) {
            showToast('当前未进入故事，无法使用定神茶');
            return;
        }
        if (!canSpend(SANITY_COST)) {
            showToast('阴钱不足，无法购买定神茶');
            return;
        }
        if (Huimen.GameState.sanity >= 100) {
            showToast('理智已满，无需定神');
            return;
        }
        if (spend(SANITY_COST, '定神茶')) {
            adjustNumber('sanity', SANITY_RESTORE, 0, 100);
            if (typeof Huimen.updateStatus === 'function') Huimen.updateStatus();
            showToast(`定神茶生效，理智恢复 ${SANITY_RESTORE} 点`);
        }
    }

    function buyYin() {
        if (!isInGame()) {
            showToast('当前未进入故事，无法使用驱邪铃');
            return;
        }
        if (!canSpend(YIN_COST)) {
            showToast('阴钱不足，无法购买驱邪铃');
            return;
        }
        if (Huimen.GameState.yin <= 0) {
            showToast('阴气已清，无需驱邪');
            return;
        }
        if (spend(YIN_COST, '驱邪铃')) {
            adjustNumber('yin', -YIN_REDUCE, 0, 100);
            if (typeof Huimen.updateStatus === 'function') Huimen.updateStatus();
            showToast(`驱邪铃生效，阴气降低 ${YIN_REDUCE} 点`);
        }
    }

    function mockRecharge(amount) {
        amount = parseInt(amount, 10);
        if (isNaN(amount) || amount <= 0) {
            showToast('请输入有效的阴钱数量');
            return false;
        }
        const MAX_RECHARGE = 9999;
        if (amount > MAX_RECHARGE) {
            showToast(`单次模拟充值最多 ${MAX_RECHARGE} 阴钱`);
            return false;
        }
        add(amount, '模拟充值（演示）');
        return true;
    }

    function showShop() {
        updateShopUI();
        if (Platform.isMinigame()) return;
        if (typeof Huimen.showScreen === 'function') {
            Huimen.showScreen('shop');
        } else {
            const shop = document.getElementById('shop-screen');
            if (shop) shop.classList.add('active');
        }
    }

    function hideShop() {
        if (Platform.isMinigame()) return;
        if (typeof Huimen.showScreen === 'function') {
            Huimen.showScreen(Huimen.CurrentStory ? 'game' : 'title');
        } else {
            const shop = document.getElementById('shop-screen');
            if (shop) shop.classList.remove('active');
        }
    }

    function updateShopUI() {
        if (Platform.isMinigame()) return;
        const balanceEl = document.getElementById('shop-balance');
        if (balanceEl) balanceEl.textContent = balance;

        const buyCgBtn = document.getElementById('shop-buy-cg');
        if (buyCgBtn) {
            const isOwned = cgUnlocked.has(buyCgBtn.dataset.cgId || DREAM_CG.id);
            buyCgBtn.disabled = isOwned;
            buyCgBtn.textContent = isOwned ? '已收藏' : '购买';
        }

        const reviveCostEl = document.getElementById('shop-revive-cost');
        if (reviveCostEl) {
            reviveCostEl.textContent = canReviveForFree(currentStoryId) ? '首命免费' : String(REVIVE_COST);
        }
    }

    function createGameUI() {
        if (Platform.isMinigame()) return;
        const gameScreen = document.getElementById('game-screen');
        if (!gameScreen) return;

        let hintBtn = document.getElementById('hint-btn');
        if (!hintBtn) {
            hintBtn = document.createElement('button');
            hintBtn.id = 'hint-btn';
            hintBtn.className = 'horror-btn secondary hint-btn';
            hintBtn.textContent = `求签问卜 (${HINT_COST})`;
            const choicesArea = document.getElementById('choices');
            if (choicesArea && choicesArea.parentNode) {
                choicesArea.parentNode.insertBefore(hintBtn, choicesArea);
            } else {
                gameScreen.appendChild(hintBtn);
            }
            hintBtn.addEventListener('click', buyHint);
        }
    }

    function injectReviveButton(storyId, endingId) {
        const deathEndings = ['madness', 'possessed', 'eternalNight'];
        if (!deathEndings.includes(endingId)) return;

        const endingContent = document.querySelector('#ending-screen .ending-content');
        if (!endingContent) return;
        if (document.getElementById('revive-btn')) return;

        const free = canReviveForFree(storyId);
        const btn = document.createElement('button');
        btn.id = 'revive-btn';
        btn.className = 'horror-btn danger revive-btn';
        btn.textContent = free ? '借命还阳（首命免费 · 回退选择）' : `借命还阳（${REVIVE_COST} 阴钱 · 回退选择）`;
        endingContent.appendChild(btn);

        btn.addEventListener('click', () => {
            if (revive(storyId)) {
                btn.remove();
            }
        });
    }

    function bindShopButtons() {
        if (Platform.isMinigame()) return;
        document.querySelectorAll('.shop-open-btn').forEach(btn => {
            btn.addEventListener('click', showShop);
        });

        const closeBtn = document.getElementById('shop-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', hideShop);

        const buyHintBtn = document.getElementById('shop-buy-hint');
        if (buyHintBtn) {
            buyHintBtn.addEventListener('click', () => {
                buyHintToken();
                updateShopUI();
            });
        }

        const buyCgBtn = document.getElementById('shop-buy-cg');
        if (buyCgBtn) {
            buyCgBtn.addEventListener('click', () => {
                unlockCG(buyCgBtn.dataset.cgId || 'dream_1');
                updateShopUI();
            });
        }

        const buyReviveBtn = document.getElementById('shop-buy-revive');
        if (buyReviveBtn) {
            buyReviveBtn.addEventListener('click', () => {
                buyReviveToken();
                updateShopUI();
            });
        }

        const buySanityBtn = document.getElementById('shop-buy-sanity');
        if (buySanityBtn) {
            buySanityBtn.addEventListener('click', () => {
                buySanity();
                updateShopUI();
            });
        }

        const buyYinBtn = document.getElementById('shop-buy-yin');
        if (buyYinBtn) {
            buyYinBtn.addEventListener('click', () => {
                buyYin();
                updateShopUI();
            });
        }

        const rechargeBtn = document.getElementById('shop-recharge-btn');
        const rechargeInput = document.getElementById('shop-recharge-input');
        if (rechargeBtn && rechargeInput) {
            rechargeBtn.addEventListener('click', () => {
                mockRecharge(rechargeInput.value);
                updateShopUI();
            });
            rechargeInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    mockRecharge(rechargeInput.value);
                    updateShopUI();
                }
            });
        }
    }

    function trackStoryStart(e) {
        const startBtn = e.target.closest('.story-start-btn');
        if (startBtn && startBtn.dataset.story) {
            currentStoryId = startBtn.dataset.story;
        }
        const resetBtn = e.target.closest('.story-reset-btn');
        if (resetBtn && resetBtn.dataset.story) {
            currentStoryId = resetBtn.dataset.story;
        }
    }

    function registerEvents() {
        if (typeof Huimen.GameEvents === 'undefined') {
            setTimeout(registerEvents, 50);
            return;
        }

        Huimen.GameEvents.on('gameInit', () => {
            renderDisplays();
        });

        Huimen.GameEvents.on('screenChange', (data) => {
            if (data && data.screen !== 'ending') {
                const reviveBtn = document.getElementById('revive-btn');
                if (reviveBtn) reviveBtn.remove();
            }
            if (data && data.screen !== 'shop') {
                const hintPanel = document.getElementById('hint-panel');
                if (hintPanel) hintPanel.classList.add('hidden');
            }
        });

        Huimen.GameEvents.on('sceneRender', (data) => {
            if (data) {
                currentSceneId = data.sceneId;
                currentScene = data.scene;
            }
            const hintBtn = document.getElementById('hint-btn');
            if (hintBtn) {
                hintBtn.disabled = !currentScene;
                hintBtn.style.opacity = currentScene ? '1' : '0.5';
            }
        });

        Huimen.GameEvents.on('choiceMade', () => {
            const hintPanel = document.getElementById('hint-panel');
            if (hintPanel) hintPanel.classList.add('hidden');
        });

        Huimen.GameEvents.on('endingShown', (data) => {
            if (!data) return;
            currentStoryId = data.storyId || currentStoryId;
            const storyId = data.storyId;
            const endingId = data.endingId;

            add(ENDING_REWARD, '抵达结局');

            if (storyId && data.isFirstCompletion) {
                add(STORY_COMPLETE_REWARD, '完成故事《' + getStoryTitle(storyId) + '》');
            }

            injectReviveButton(storyId, endingId);
        });

        Huimen.GameEvents.on('achievementUnlocked', (data) => {
            if (data && data.achievement) {
                add(ACHIEVEMENT_REWARD, '解锁成就「' + data.achievement.name + '」');
            }
        });

        renderDisplays();
    }

    function init() {
        load();
        if (cgUnlocked.has(DREAM_CG.id)) registerDreamCG();
        createGameUI();
        bindShopButtons();

        if (typeof document !== 'undefined') {
            const storyGrid = document.getElementById('story-grid');
            if (storyGrid) storyGrid.addEventListener('click', trackStoryStart);
        }

        registerEvents();
    }

    return {
        init,
        getBalance,
        add,
        spend,
        canSpend,
        unlockCG,
        isCGUnlocked,
        revive,
        mockRecharge,
        showShop,
        hideShop
    };
})();

Huimen.CurrencyManager = CurrencyManager;

export const init = CurrencyManager.init;
export { CurrencyManager };
export default CurrencyManager;
