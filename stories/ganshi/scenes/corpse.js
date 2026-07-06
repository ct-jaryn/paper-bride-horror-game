/**
 * 《ganshi》场景模块：corpse
 */

export const scenes = {
    corpse_conversation: {
        title: '尸语',
        text: `你屏住呼吸，仔细听。

那不是风声，也不是雨声。是三具尸体在低声交谈。他们的嘴唇没有动，但声音直接传进你脑子里。

"田家的后生……" 账房先生的声音说，"和别的赶尸匠不一样。"

"他听得见我们。" 青年尸体的声音说。

女尸没有说话，只是轻轻叹了一口气。

你壮着胆子问："你们……在说我？"

三具尸体同时转过头，看着你。他们的眼睛都被黄符遮着，但你感觉他们在"看"你。

"我们都有冤。" 账房先生说，"你若能帮我们，我们便不害你。你若不能，我们便自己报仇。"

"什么冤？" 你问。

三具尸体同时开口，三个声音叠在一起：

[whisper]"周家。"[/whisper]

[whisper]"青石镇。"[/whisper]

[whisper]"冥婚。"[/whisper]`,
        effects: {
            sanity: -10,
            yin: 15,
            setFlag: 'heardCorpseConversation'
        },
        choices: [
            {
                text: '说我会帮你们',
                next: 'promise_revenge_corpse',
                effects: { setFlag: 'promisedJustice' }
            },
            {
                text: '继续赶路',
                next: 'continue_journey'
            }
        ]
    }
};
