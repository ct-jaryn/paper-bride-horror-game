/**
 * 《阴阳簿》gameScreen 模板
 * 由 index.html 自动生成
 */

export const gameScreenTemplate = `<div class="screen" id="game-screen">
<div class="paper-texture"></div>
<!-- 顶部状态栏 -->
<header class="status-bar">
<div class="status-item">
<span aria-hidden="true" class="status-icon">时</span>
<span class="status-label">时辰</span>
<span class="status-value" id="time-display">戌时三刻</span>
</div>
<div class="status-item" id="sanity-item">
<span aria-hidden="true" class="status-icon">神</span>
<span class="status-label">理智</span>
<div class="meter">
<div class="meter-fill sanity" id="sanity-bar"></div>
</div>
<span class="status-value" id="sanity-value">100</span>
</div>
<div class="status-item" id="yin-item">
<span aria-hidden="true" class="status-icon">阴</span>
<span class="status-label">阴气</span>
<div class="meter">
<div class="meter-fill yin" id="yin-bar"></div>
</div>
<span class="status-value" id="yin-value">0</span>
</div>
<div class="status-item currency-display">
<span aria-hidden="true" class="status-icon">钱</span>
<span class="status-label">阴钱</span>
<span class="currency-value status-value">0</span>
<button class="shop-open-btn horror-btn secondary tiny">阴市</button>
</div>
<button aria-label="选择记录" class="record-btn" id="record-btn" title="选择记录">
<span aria-hidden="true">记</span>
</button>
<button aria-label="暂停" class="record-btn" id="pause-btn" title="暂停">
<span aria-hidden="true">停</span>
</button>
</header>
<!-- 主文本区 -->
<main class="story-area">
<div class="story-text" id="story-text"></div>
<div class="cursor" id="typing-cursor">▌</div>
<div class="skip-hint" id="skip-hint">点击文本跳过打字 ▌</div>
</main>
<!-- 物品栏 -->
<div class="inventory hidden" id="inventory">
<span class="inventory-label">物品：</span>
<div class="inventory-items" id="inventory-items"></div>
</div>
<!-- 选择区 -->
<div class="choices-area" id="choices"></div>
<!-- 特效层 -->
<div class="effects-layer" id="effects-layer">
<div class="flicker-overlay" id="flicker-overlay"></div>
<div class="blood-splatter hidden" id="blood-splatter"></div>
<div class="ghost-whisper hidden" id="ghost-whisper"></div>
<div class="paper-doll hidden" id="paper-doll"></div>
</div>
</div>`;
