/**
 * 《tishen》场景模块：memory
 */

export const scenes = {
    memory_exchange: {
        title: '换忆',
        text: `你伸出手，按在纸人胸口的黄符上。

"你想感受我？"它问。

你没有回答。下一瞬，一股冰冷的洪流冲进你的脑海。

你看见它这五年来的记忆：下雨的夜里湿透贴在槐树上的寒冷，父亲用竹篾修补它身体时的刺痛，它偷看你房间照片时纸壳里发出的嫉妒。

与此同时，你的记忆也流向了它——大学毕业典礼上刺眼的阳光，第一次面试时的颤抖，深夜加班后独自走过的街道，以及接到母亲电话时心里那一声微弱的"终于有理由回去了"。

纸人的纸脸上流下两行泪。那泪水不是墨，是淡淡的、浑浊的水。

"原来你这么难过。"它说。

[whisper]你忽然分不清，流泪的到底是谁。[/whisper]`,
        effects: {
            sanity: -15,
            yin: 10
        },
        choices: [
            {
                text: '继续握着不放，让记忆流尽',
                next: 'forgetting_self'
            },
            {
                text: '用打火机点燃黄符',
                next: '',
                ending: 'hidden_phoenixDoll',
                danger: true
            }
        ]
    }
};
