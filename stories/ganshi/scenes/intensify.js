/**
 * 《ganshi》场景模块：intensify
 */

export const scenes = {
    intensify_chant: {
        title: '加急念咒',
        text: `你加大声音念咒，同时摇动铜铃。

女尸的眼睛缓缓闭上，白布重新落下。

你松了口气，以为镇压住了。

但走了几步，你发现女尸没有跟上。她站在原地，白布下传来低低的哭泣声。

[whisper]"救……我……"[/whisper]

那声音像是一个活人发出来的。`,
        effects: {
            sanity: -15,
            yin: 10
        },
        choices: [
            {
                text: '回去看她',
                next: 'ask_female_identity'
            },
            {
                text: '硬下心肠继续走',
                next: 'leave_her_behind',
                effects: { sanity: -10, yin: 10 }
            }
        ]
    }
};
