/**
 * 《阴阳簿》音效系统
 * 通过 Huimen.GameEvents 监听游戏事件并触发对应音效。
 * 使用 Web Audio API 程序化生成，无需外部音频文件。
 */

import { Huimen } from './js/engine/namespace.js';
import { loadSoundSettings, saveSoundSettings } from './js/engine/saveManager.js';

let audioCtx = null;
let masterGain = null;
let isMuted = false;
let volume = 0.7;
let ambientSource = null;
let ambientLfo = null;
let ambientGain = null;
let isAmbientPlaying = false;

// 已注册的事件清理句柄
const cleanupHandlers = [];

function loadSettings() {
    try {
        const s = loadSoundSettings();
        isMuted = s.muted === true;
        volume = typeof s.volume === 'number' ? Math.max(0, Math.min(1, s.volume)) : 0.7;
    } catch (e) {
        console.warn('读取音效设置失败:', e);
    }
}

function saveSettings() {
    try {
        saveSoundSettings({ muted: isMuted, volume });
    } catch (e) {
        console.warn('保存音效设置失败:', e);
    }
}

function ensureContext() {
    if (audioCtx) return audioCtx;
    try {
        const AC = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AC();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = isMuted ? 0 : volume;
        masterGain.connect(audioCtx.destination);
    } catch (e) {
        console.error('Web Audio API 初始化失败:', e);
    }
    return audioCtx;
}

function unlockAudio() {
    const ctx = ensureContext();
    if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
    }
}

function createNoiseBuffer(duration) {
    const ctx = ensureContext();
    if (!ctx) return null;
    const sampleRate = ctx.sampleRate;
    const length = Math.floor(sampleRate * duration);
    const buffer = ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    return buffer;
}

function stopCurrentAmbient() {
    if (ambientSource) {
        try { ambientSource.stop(); } catch (e) {}
        ambientSource = null;
    }
    if (ambientLfo) {
        try { ambientLfo.stop(); } catch (e) {}
        ambientLfo = null;
    }
    ambientGain = null;
    isAmbientPlaying = false;
}

// 风声 / 环境背景音（循环）
function playWindAmbient() {
    const ctx = ensureContext();
    if (!ctx || isMuted || isAmbientPlaying) return;
    stopCurrentAmbient();

    const buffer = createNoiseBuffer(4);
    if (!buffer) return;

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    source.onended = () => {
        isAmbientPlaying = false;
    };

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 280;
    filter.Q.value = 0.4;

    ambientGain = ctx.createGain();
    ambientGain.gain.value = 0.06;

    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.2;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.035;
    lfo.connect(lfoGain);
    lfoGain.connect(ambientGain.gain);
    lfo.start();

    source.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(masterGain);
    source.start();

    ambientSource = source;
    ambientLfo = lfo;
    isAmbientPlaying = true;
}

// 纸人 / 惊吓人声效
function playScream() {
    const ctx = ensureContext();
    if (!ctx || isMuted) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(900, t);
    osc.frequency.exponentialRampToValueAtTime(110, t + 0.85);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.28, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(t);
    osc.stop(t + 0.95);
}

// 铜钱 / 铃铛音效
function playBell() {
    const ctx = ensureContext();
    if (!ctx || isMuted) return;
    const t = ctx.currentTime;
    const fundamental = 523.25;
    [1, 2.7, 5.1].forEach((ratio, i) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = fundamental * ratio;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.22 / (i + 1), t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.4 + i * 0.08);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 1.8);
    });
}

// 按钮点击音
function playClick() {
    const ctx = ensureContext();
    if (!ctx || isMuted) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1300, t);
    osc.frequency.exponentialRampToValueAtTime(500, t + 0.05);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(t);
    osc.stop(t + 0.1);
}

// 结局低语
function playWhisper() {
    const ctx = ensureContext();
    if (!ctx || isMuted) return;
    const t = ctx.currentTime;
    const buffer = createNoiseBuffer(2.5);
    if (!buffer) return;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = 0.55;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 720;
    filter.Q.value = 1.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.1, t + 0.4);
    gain.gain.linearRampToValueAtTime(0, t + 2.5);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    source.start(t);
    source.stop(t + 2.5);
}

// 场景切换 / 翻页沙沙声
function playRustle() {
    const ctx = ensureContext();
    if (!ctx || isMuted) return;
    const t = ctx.currentTime;
    const buffer = createNoiseBuffer(0.45);
    if (!buffer) return;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 900;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.06, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    source.start(t);
    source.stop(t + 0.45);
}

// ===== 公共 API =====
const SoundManager = {
    play(name) {
        unlockAudio();
        switch (name) {
            case 'wind':
                playWindAmbient();
                break;
            case 'scream':
                playScream();
                break;
            case 'bell':
                playBell();
                break;
            case 'click':
                playClick();
                break;
            case 'whisper':
                playWhisper();
                break;
            case 'rustle':
                playRustle();
                break;
            default:
                console.warn('未知音效名称:', name);
        }
    },

    playAmbient() {
        playWindAmbient();
    },

    stopAmbient() {
        stopCurrentAmbient();
    },

    toggleMute() {
        isMuted = !isMuted;
        if (masterGain && audioCtx) {
            masterGain.gain.setTargetAtTime(isMuted ? 0 : volume, audioCtx.currentTime, 0.05);
        }
        updateToggleButton();
        saveSettings();
        return isMuted;
    },

    setVolume(v) {
        volume = Math.max(0, Math.min(1, v));
        if (masterGain && audioCtx && !isMuted) {
            masterGain.gain.setTargetAtTime(volume, audioCtx.currentTime, 0.05);
        }
        saveSettings();
    },

    isMuted() {
        return isMuted;
    },

    dispose() {
        stopCurrentAmbient();
        cleanupHandlers.forEach(cleanup => {
            try { cleanup(); } catch (e) {}
        });
        cleanupHandlers.length = 0;
        if (audioCtx) {
            try { audioCtx.close(); } catch (e) {}
            audioCtx = null;
            masterGain = null;
        }
    }
};

Huimen.SoundManager = SoundManager;
if (typeof window !== 'undefined') {
    window.SoundManager = SoundManager;
}

// ===== 静音按钮 =====
function getToggleButtons() {
    return [
        document.getElementById('sound-toggle-title'),
        document.getElementById('sound-toggle')
    ].filter(Boolean);
}

function updateToggleButton() {
    const buttons = getToggleButtons();
    if (!buttons.length) return;

    buttons.forEach(btn => {
        const icon = btn.querySelector('.sound-toggle-icon');
        const label = btn.querySelector('.sound-toggle-label');

        if (icon) icon.textContent = isMuted ? '静' : '音';
        if (label) label.textContent = isMuted ? '静音' : '音效';

        btn.classList.toggle('muted', isMuted);
        btn.title = isMuted ? '点击开启音效' : '点击静音';

        // 兜底：若按钮没有子元素结构，直接设置文本
        if (!icon && !label) {
            btn.textContent = isMuted ? '🔇 静音' : '🔊 音效';
        }
    });
}

function bindToggleButton(btn) {
    if (!btn || btn.dataset.soundBound === 'true') return;
    btn.dataset.soundBound = 'true';
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wasMuted = isMuted;
        SoundManager.toggleMute();
        // 从静音切回音效时播放一声提示
        if (wasMuted && !isMuted) SoundManager.play('click');
    });
}

function createToggleButton() {
    // 优先使用页面内已存在的标题栏音效按钮
    const titleBtn = document.getElementById('sound-toggle-title');
    if (titleBtn) {
        bindToggleButton(titleBtn);
        updateToggleButton();
        return;
    }

    // 兜底：创建全局浮动按钮
    if (document.getElementById('sound-toggle')) return;

    const btn = document.createElement('button');
    btn.id = 'sound-toggle';
    btn.type = 'button';
    btn.className = 'sound-toggle global-sound-toggle';
    bindToggleButton(btn);
    updateToggleButton();

    document.body.appendChild(btn);
}

// ===== 事件绑定 =====
function bindGameEvents() {
    if (typeof Huimen.GameEvents === 'undefined') {
        console.warn('Huimen.GameEvents 未定义，音效系统无法注册事件');
        return;
    }

    const on = (event, handler) => {
        Huimen.GameEvents.on(event, handler);
        cleanupHandlers.push(() => Huimen.GameEvents.off(event, handler));
    };

    on('screenChange', ({ screen }) => {
        unlockAudio();
        if (screen === 'game' || screen === 'title') {
            SoundManager.playAmbient();
        } else {
            SoundManager.stopAmbient();
        }
    });

    on('sceneRender', ({ scene }) => {
        unlockAudio();
        if (!scene) return;
        const visual = scene.effects && scene.effects.visual;
        if (visual === 'paper-doll') {
            SoundManager.play('scream');
        } else if (visual === 'whisper') {
            SoundManager.play('whisper');
        } else if (visual === 'blood' || visual === 'shake') {
            SoundManager.play('bell');
        }
    });

    on('choiceMade', () => {
        SoundManager.play('click');
        setTimeout(() => SoundManager.play('rustle'), 90);
    });

    on('endingShown', ({ endingId }) => {
        SoundManager.stopAmbient();
        if (endingId === 'madness' || endingId === 'possessed') {
            SoundManager.play('scream');
        } else {
            SoundManager.play('whisper');
        }
    });

    on('flagSet', ({ flag }) => {
        unlockAudio();
        if (flag && /Truth|Secret|Ghost/i.test(flag)) {
            SoundManager.play('whisper');
        } else {
            SoundManager.play('bell');
        }
    });

    on('itemAdd', () => {
        SoundManager.play('bell');
    });
}

// ===== 初始化 =====
function init() {
    loadSettings();
    createToggleButton();
    bindGameEvents();

    // 首次用户交互时尝试解锁音频上下文
    document.addEventListener('click', unlockAudio, { once: true });
    document.addEventListener('touchstart', unlockAudio, { once: true });
}

export { init };
