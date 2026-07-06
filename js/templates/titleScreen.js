/**
 * 《阴阳簿》titleScreen 模板
 * 由 index.html 自动生成
 */

export const titleScreenTemplate = `<div class="screen active" id="title-screen">
<div class="paper-texture"></div>
<div aria-hidden="true" class="title-vignette"></div>
<div aria-hidden="true" class="title-fog"></div>
<div aria-hidden="true" class="title-lantern left">
<div class="lantern-glow"></div>
</div>
<div aria-hidden="true" class="title-lantern right">
<div class="lantern-glow"></div>
</div>
<!-- 飘落的纸灰/纸钱粒子层 -->
<div aria-hidden="true" class="paper-ash-layer"></div>
<div aria-hidden="true" class="title-blood-drip"></div>
<div class="title-content">
<h1 class="game-title">阴阳簿</h1>
<p class="subtitle">红烛照幽冥，白幡引亡魂</p>
<p class="subtitle-en">Tales from the Nether</p>
<div class="title-actions">
<button class="horror-btn primary hidden" id="continue-btn">续读命簿</button>
<button class="horror-btn primary" id="start-btn">翻开簿册</button>
</div>
<p class="title-hint" id="title-hint">轻触画面以开启阴阳之门</p>
</div>
<!-- 印章式装饰 -->
<div aria-hidden="true" class="paper-seal-decoration">
<span class="paper-seal-text">阴阳簿</span>
</div>
<!-- 底部工具栏 -->
<nav aria-label="标题页功能" class="title-toolbar">
<button aria-label="成就" class="toolbar-btn" id="achievements-btn">
<span aria-hidden="true" class="toolbar-icon">录</span>
<span class="toolbar-label">阴阳全录</span>
</button>
<button aria-label="图鉴" class="toolbar-btn" data-open-cg-gallery="" id="cg-gallery-title-btn">
<span aria-hidden="true" class="toolbar-icon">卷</span>
<span class="toolbar-label">残卷图鉴</span>
</button>
<button aria-label="商店" class="toolbar-btn shop-open-btn" id="shop-title-btn">
<span aria-hidden="true" class="toolbar-icon">市</span>
<span class="toolbar-label">阴市</span>
</button>
<button aria-label="历程" class="toolbar-btn" id="journey-title-btn">
<span aria-hidden="true" class="toolbar-icon">程</span>
<span class="toolbar-label">阴阳历程</span>
</button>
<button aria-label="结局图鉴" class="toolbar-btn" id="ending-gallery-title-btn">
<span aria-hidden="true" class="toolbar-icon">局</span>
<span class="toolbar-label">结局图鉴</span>
</button>
<button aria-label="切换音效" class="toolbar-btn" id="sound-toggle-title">
<span aria-hidden="true" class="toolbar-icon sound-toggle-icon">音</span>
<span class="toolbar-label sound-toggle-label">音效</span>
</button>
</nav>
</div>`;
