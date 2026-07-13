const FORCED_ENDINGS = {
    madness: { title: '死亡结局 · 疯魔', text: '你的神志被阴影彻底吞没，再也分不清河水、戏台和记忆。' },
    possessed: { title: '死亡结局 · 借尸还魂', text: '阴气灌入四肢，你的身体成了另一个灵魂的容器。' },
    eternalNight: { title: '死亡结局 · 永夜', text: '天亮没有到来。你和村庄一起被留在了无尽的黑夜里。' }
};

export function getForcedEnding(endingId) {
    return FORCED_ENDINGS[endingId] || null;
}
