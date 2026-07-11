/**
 * 《阴阳簿》overlayScreens 模板
 * 由 index.html 自动生成
 */

export const overlayScreensTemplate = `<div class="cg-overlay hidden" id="cg-overlay">
<div class="paper-texture"></div>
<button aria-label="关闭" class="cg-close" id="cg-close">×</button>
<div class="cg-frame">
<img alt="CG" class="cg-image" id="cg-image"/>
<div class="cg-placeholder hidden" id="cg-placeholder">
<span class="cg-placeholder-mark">囍</span>
</div>
</div>
<div class="cg-title" id="cg-title"></div>
</div>

<div class="cg-overlay hidden" id="cg-gallery-overlay">
<div class="paper-texture"></div>
<div class="cg-gallery-content">
<div class="achievements-header">
<h2 class="section-title">残卷图鉴</h2>
<p class="section-subtitle">已解锁 CG：<span id="cg-unlock-count">0</span></p>
</div>
<div class="cg-gallery-list" id="cg-gallery-list"></div>
<button class="horror-btn secondary cg-gallery-close">返回</button>
</div>
</div>

<div class="screen" id="shop-screen">
<div class="paper-texture"></div>
<div class="shop-content">
<div class="shop-header">
<h2 class="section-title">阴市</h2>
<p class="section-subtitle">阴钱余额：<span id="shop-balance">0</span></p>
</div>
<div class="shop-grid">
<div class="shop-item">
<div class="shop-item-name">通灵符</div>
<div class="shop-item-desc">购买一张通灵符，下次求签不扣阴钱。</div>
<div class="shop-item-price"><span id="shop-hint-cost">10</span> 阴钱</div>
<button class="horror-btn" id="shop-buy-hint">购买</button>
</div>
<div class="shop-item">
<div class="shop-item-name">窥梦图</div>
<div class="shop-item-desc">解锁一张珍藏插图，收入残卷图鉴。</div>
<div class="shop-item-price"><span id="shop-cg-cost">50</span> 阴钱</div>
<button class="horror-btn" data-cg-id="dream_1" id="shop-buy-cg">购买</button>
</div>
<div class="shop-item">
<div class="shop-item-name">续命香</div>
<div class="shop-item-desc">购买一柱续命香，死亡结局时可借命还阳一次。</div>
<div class="shop-item-price"><span id="shop-revive-cost">50</span> 阴钱</div>
<button class="horror-btn" id="shop-buy-revive">购买</button>
</div>
<div class="shop-item">
<div class="shop-item-name">定神茶</div>
<div class="shop-item-desc">饮下一杯定神茶，恢复 15 点理智。仅在故事中有效。</div>
<div class="shop-item-price"><span id="shop-sanity-cost">80</span> 阴钱</div>
<button class="horror-btn" id="shop-buy-sanity">购买</button>
</div>
<div class="shop-item">
<div class="shop-item-name">驱邪铃</div>
<div class="shop-item-desc">摇响驱邪铃，降低 15 点阴气。仅在故事中有效。</div>
<div class="shop-item-price"><span id="shop-yin-cost">80</span> 阴钱</div>
<button class="horror-btn" id="shop-buy-yin">购买</button>
</div>
</div>
<div class="shop-recharge">
<h3>开发者测试入口（模拟充值）</h3>
<p class="shop-recharge-note">此处仅供开发/演示，不会发起任何真实支付，也不会保存到服务端。</p>
<div class="shop-recharge-row">
<label class="visually-hidden" for="shop-recharge-input">模拟充值阴钱数量</label>
<input id="shop-recharge-input" max="9999" min="1" placeholder="输入阴钱数量（1-9999）" type="number" aria-describedby="shop-recharge-hint"/>
<button class="horror-btn secondary" id="shop-recharge-btn">模拟充值</button>
</div>
<p class="shop-recharge-note" id="shop-recharge-hint">输入 1 到 9999 的整数。</p>
</div>
<button class="horror-btn secondary" id="shop-close-btn">返回</button>
</div>
</div>

<div class="record-overlay hidden" id="npc-dialogue-overlay">
<div class="paper-texture"></div>
<div class="npc-dialogue-panel">
<div class="npc-dialogue-header">
<div aria-hidden="true" class="npc-portrait">
<span id="npc-portrait-text">?</span>
</div>
<div class="npc-info">
<h2 class="npc-name" id="npc-name"></h2>
<p class="npc-title" id="npc-title"></p>
</div>
<div class="npc-affinity-wrap">
<span class="npc-affinity-label">关系</span>
<span class="npc-affinity" id="npc-affinity">萍水相逢</span>
</div>
<button aria-label="关闭" class="record-close" id="npc-dialogue-close">×</button>
</div>
<div class="npc-dialogue-body">
<p class="npc-dialogue-text" id="npc-dialogue-text"></p>
</div>
<div class="npc-dialogue-choices" id="npc-dialogue-choices"></div>
</div>
</div>

<div class="record-overlay hidden" id="record-overlay">
<div class="paper-texture"></div>
<div class="record-content">
<div class="record-header">
<div>
<h2 class="section-title">命簿记录</h2>
<p class="section-subtitle">每一次选择，皆成定数</p>
<p class="record-story-title" id="record-story-title"></p>
</div>
<div class="record-actions">
<button class="horror-btn secondary tiny" id="record-export" title="导出记录">导出</button>
<button class="horror-btn secondary tiny" id="record-replay" title="复盘此局">复盘</button>
<button aria-label="关闭" class="record-close" id="record-close">×</button>
</div>
</div>
<div class="record-stats" id="record-stats"></div>
<div class="record-list" id="record-list"></div>
</div>
</div>

<div class="record-overlay hidden" id="pause-overlay">
<div class="paper-texture"></div>
<div class="pause-content">
<h2 class="section-title">暂停</h2>
<p class="section-subtitle">阴阳暂停，因果待续</p>
<div class="pause-actions">
<button class="horror-btn" id="pause-resume-btn">继续此局</button>
<button class="horror-btn secondary" id="pause-to-select-btn">返回选卷</button>
<button class="horror-btn secondary" id="pause-to-title-btn">返回封面</button>
</div>
</div>
</div>

<div class="record-overlay hidden" id="ending-gallery-overlay">
<div class="paper-texture"></div>
<div class="record-content">
<div class="record-header">
<div>
<h2 class="section-title">结局图鉴</h2>
<p class="section-subtitle">已解锁结局：<span id="ending-gallery-total">0 / 0</span></p>
</div>
<button aria-label="关闭" class="record-close" id="ending-gallery-close">×</button>
</div>
<div class="ending-gallery-list" id="ending-gallery-list"></div>
</div>
</div>

<div class="record-overlay hidden" id="ending-detail-overlay">
<div class="paper-texture"></div>
<div class="record-content">
<div class="record-header">
<div>
<h2 class="section-title" id="ending-detail-title"></h2>
</div>
<button aria-label="关闭" class="record-close" id="ending-detail-close">×</button>
</div>
<p class="ending-detail-text" id="ending-detail-text"></p>
</div>
</div>

<div class="record-overlay hidden" id="journey-overlay">
<div class="paper-texture"></div>
<div class="record-content">
<div class="record-header">
<div>
<h2 class="section-title">阴阳历程</h2>
<p class="section-subtitle">七卷故事，皆是因果</p>
</div>
<div class="record-actions">
<button class="horror-btn secondary tiny" id="journey-ending-gallery-btn" title="结局图鉴">结局图鉴</button>
<button aria-label="关闭" class="record-close" id="journey-close">×</button>
</div>
</div>
<div class="journey-list" id="journey-list"></div>
</div>
</div>`;
