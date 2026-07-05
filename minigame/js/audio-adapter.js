/**
 * 微信小游戏音频适配器
 *
 * 小游戏没有 Web Audio API，使用 wx.createInnerAudioContext。
 * 为了延续 H5 版程序化音效的能力，这里动态生成 WAV 文件并写入小游戏本地缓存目录。
 */

const AUDIO_DIR = `${wx.env.USER_DATA_PATH}/huimen_audio`;
const SAMPLE_RATE = 22050;

const fs = wx.getFileSystemManager();

function ensureDir() {
    try {
        fs.accessSync(AUDIO_DIR);
    } catch (e) {
        try {
            fs.mkdirSync(AUDIO_DIR, true);
        } catch (err) {
            console.warn('创建音频缓存目录失败', err);
        }
    }
}

ensureDir();

// ---- WAV 生成 ----
function writeString(view, offset, str) {
    for (let i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
    }
}

function createWaveHeader(sampleLength) {
    const buffer = new ArrayBuffer(44);
    const view = new DataView(buffer);
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + sampleLength * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, 1, true); // mono
    view.setUint32(24, SAMPLE_RATE, true);
    view.setUint32(28, SAMPLE_RATE * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, sampleLength * 2, true);
    return new Uint8Array(buffer);
}

function buildWav(samples) {
    const header = createWaveHeader(samples.length);
    const body = new Uint8Array(samples.length * 2);
    const view = new DataView(body.buffer);
    for (let i = 0; i < samples.length; i++) {
        let s = Math.max(-1, Math.min(1, samples[i]));
        view.setInt16(i * 2, s * 0x7FFF | 0, true);
    }
    const result = new Uint8Array(header.length + body.length);
    result.set(header, 0);
    result.set(body, header.length);
    return result.buffer;
}

function generateSineTone(freq, duration, amplitude = 0.5, fade = true) {
    const len = Math.floor(SAMPLE_RATE * duration);
    const samples = new Float32Array(len);
    for (let i = 0; i < len; i++) {
        const t = i / SAMPLE_RATE;
        const env = fade ? Math.max(0, 1 - i / len) : 1;
        samples[i] = Math.sin(2 * Math.PI * freq * t) * amplitude * env;
    }
    return samples;
}

function generateNoise(duration, amplitude = 0.5) {
    const len = Math.floor(SAMPLE_RATE * duration);
    const samples = new Float32Array(len);
    for (let i = 0; i < len; i++) {
        samples[i] = (Math.random() * 2 - 1) * amplitude;
    }
    return samples;
}

function highpass(samples, cutoff = 800) {
    const rc = 1 / (2 * Math.PI * cutoff);
    const dt = 1 / SAMPLE_RATE;
    const alpha = rc / (rc + dt);
    const out = new Float32Array(samples.length);
    out[0] = samples[0];
    for (let i = 1; i < samples.length; i++) {
        out[i] = alpha * (out[i - 1] + samples[i] - samples[i - 1]);
    }
    return out;
}

function bandpassNoise(duration, center = 300, q = 0.5, amplitude = 0.5) {
    // 简易带通：先产生白噪声，再用高低通组合近似
    const noise = generateNoise(duration, amplitude);
    const lowpassed = lowpass(noise, center * (1 + q));
    return highpass(lowpassed, center * (1 - q));
}

function lowpass(samples, cutoff = 400) {
    const rc = 1 / (2 * Math.PI * cutoff);
    const dt = 1 / SAMPLE_RATE;
    const alpha = dt / (rc + dt);
    const out = new Float32Array(samples.length);
    out[0] = samples[0];
    for (let i = 1; i < samples.length; i++) {
        out[i] = out[i - 1] + alpha * (samples[i] - out[i - 1]);
    }
    return out;
}

function mix(...tracks) {
    const len = Math.max(...tracks.map(t => t.length));
    const out = new Float32Array(len);
    tracks.forEach(track => {
        for (let i = 0; i < track.length; i++) out[i] += track[i];
    });
    return out;
}

function generateSamples(name) {
    switch (name) {
        case 'click': {
            const len = Math.floor(SAMPLE_RATE * 0.08);
            const samples = new Float32Array(len);
            for (let i = 0; i < len; i++) {
                const t = i / SAMPLE_RATE;
                const f = 1300 * Math.pow(500 / 1300, t / 0.08);
                const env = Math.max(0, 1 - i / len);
                samples[i] = Math.sin(2 * Math.PI * f * t) * 0.25 * env;
            }
            return samples;
        }
        case 'bell': {
            const fundamental = 523.25;
            const ratios = [1, 2.7, 5.1];
            const tracks = ratios.map((ratio, idx) => {
                const s = generateSineTone(fundamental * ratio, 1.8, 0.22 / (idx + 1), false);
                for (let i = 0; i < s.length; i++) {
                    s[i] *= Math.pow(0.001, i / (SAMPLE_RATE * (1.4 + idx * 0.08)));
                }
                return s;
            });
            return mix(...tracks);
        }
        case 'scream': {
            const len = Math.floor(SAMPLE_RATE * 0.95);
            const samples = new Float32Array(len);
            for (let i = 0; i < len; i++) {
                const t = i / SAMPLE_RATE;
                const f = 900 * Math.pow(110 / 900, t / 0.85);
                const env = Math.pow(0.001, t / 0.9);
                let s = 0;
                for (let h = 1; h <= 4; h++) s += Math.sin(2 * Math.PI * f * h * t) / h;
                samples[i] = s * 0.25 * env;
            }
            return samples;
        }
        case 'rustle': {
            const noise = generateNoise(0.45, 0.06);
            return highpass(noise, 900);
        }
        case 'whisper': {
            const noise = generateNoise(2.5, 0.1);
            const bp = bandpassNoise(2.5, 720, 0.3, 1);
            const out = mix(noise, bp);
            // 包络：淡入淡出
            for (let i = 0; i < out.length; i++) {
                const t = i / SAMPLE_RATE;
                let env = 0;
                if (t < 0.4) env = t / 0.4;
                else if (t > 2.1) env = Math.max(0, (2.5 - t) / 0.4);
                else env = 1;
                out[i] *= env;
            }
            return out;
        }
        case 'wind': {
            const noise = generateNoise(4, 1);
            const bp = bandpassNoise(4, 280, 0.4, 1);
            let out = mix(noise, bp);
            // LFO 颤音
            for (let i = 0; i < out.length; i++) {
                const t = i / SAMPLE_RATE;
                const lfo = 0.5 + 0.5 * Math.sin(2 * Math.PI * 0.2 * t);
                out[i] *= (0.03 + 0.035 * lfo);
            }
            return out;
        }
        default:
            return new Float32Array(0);
    }
}

function getSoundPath(name) {
    const path = `${AUDIO_DIR}/${name}.wav`;
    try {
        fs.accessSync(path);
        return path;
    } catch (e) {
        const samples = generateSamples(name);
        if (samples.length === 0) return '';
        const buffer = buildWav(samples);
        try {
            fs.writeFileSync(path, buffer, 'binary');
            return path;
        } catch (err) {
            console.warn('写入音效文件失败', err);
            return '';
        }
    }
}

// ---- 音频管理 ----
let isMuted = false;
let volume = 0.7;
let ambientContext = null;

function createPlayer(path) {
    if (!path) return null;
    const ctx = wx.createInnerAudioContext();
    ctx.src = path;
    ctx.volume = volume;
    return ctx;
}

function playOneShot(name) {
    if (isMuted) return;
    const path = getSoundPath(name);
    if (!path) return;
    const player = createPlayer(path);
    if (!player) return;
    player.onEnded(() => {
        try { player.destroy(); } catch (e) {}
    });
    player.onError(() => {
        try { player.destroy(); } catch (e) {}
    });
    player.play();
}

function playAmbient() {
    if (isMuted || ambientContext) return;
    const path = getSoundPath('wind');
    if (!path) return;
    ambientContext = createPlayer(path);
    ambientContext.loop = true;
    ambientContext.play();
}

function stopAmbient() {
    if (!ambientContext) return;
    try {
        ambientContext.stop();
        ambientContext.destroy();
    } catch (e) {}
    ambientContext = null;
}

function updateAmbientVolume() {
    if (ambientContext) ambientContext.volume = isMuted ? 0 : volume;
}

export const AudioAdapter = {
    init() {
        // 预生成常用音效，避免首次播放卡顿
        ['click', 'rustle', 'bell', 'whisper', 'wind'].forEach(getSoundPath);
        return this;
    },

    play(name) {
        if (name === 'wind') {
            playAmbient();
        } else {
            playOneShot(name);
        }
    },

    playAmbient() {
        playAmbient();
    },

    stopAmbient() {
        stopAmbient();
    },

    toggleMute() {
        isMuted = !isMuted;
        updateAmbientVolume();
        if (isMuted) stopAmbient();
        else playAmbient();
        return isMuted;
    },

    setVolume(v) {
        volume = Math.max(0, Math.min(1, v));
        updateAmbientVolume();
    },

    isMuted() {
        return isMuted;
    },

    dispose() {
        stopAmbient();
    }
};

export default AudioAdapter;
