/**
 * 《ganshi》场景模块：prologue
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    prologue: createScene('prologue', {
        title: '赶尸',
        text: `雨夜，山路。

你叫田小七，湘西最年轻的赶尸匠。师父死后，你独自接过这门手艺。

赶尸的规矩很多：不走大道，只走夜路，鸡鸣之前必须找地方歇息。尸体额头贴黄符，手腕系铜铃，走一步响一声。

[whisper]叮铃。叮铃。叮铃。[/whisper]

这一单有三具尸体。

第一具是县上的账房先生，回乡安葬。
第二具是外出打工的青年，客死他乡。
第三具是一具女尸，用白布从头到脚裹得严严实实。委托人只说她是"横死"，让你务必在天亮前送到。

你牵着三具尸体，在雨中赶路。

走到半山腰时，铜铃声停了。

你回头。三具尸体还站着，但最前面的账房先生，头歪成了一个不可能的角度，正看着你笑。`,
        effects: {
            sanity: -15,
            yin: 15,
            addItem: '铜铃'
        },
        choices: [
            createChoice({ text: '检查黄符是否脱落', next: 'check_talisman' }),
            createChoice({ text: '大声念赶尸咒', next: 'chant_corpse_spell' }),
            createChoice({ text: '质问尸体为何发笑', next: 'ask_corpse_laugh' }),
            createChoice({
                text: '你阴气太重，听见尸体们在低声交谈',
                next: 'corpse_conversation',
                condition: { yinAbove: 15 },
                hidden: true,
                effects: { sanity: -5, yin: 10 }
            }),
            createChoice({
                text: '路边红影里似乎站着一位穿嫁衣的女子…',
                npc: 'xiulan_ghost',
                npcNode: 'start',
                custom: true
            })
        ]
    })
};
