/**
 * 《ganshi》场景模块：check
 */

export const scenes = {
    check_talisman: {
        title: '查符',
        text: `你走到账房先生面前，检查他额头的黄符。

黄符还在，但上面的朱砂字被雨水泡花了。你赶紧掏出新的黄符，重新贴上。

尸体的头缓缓回到原位，笑容也消失了。

你松了口气。

但当你贴第二具尸体的黄符时，发现那具青年尸体的黄符下，皮肤是温热的。

[red]尸体不应该有温度。[/red]

你伸手探他的鼻息。没有呼吸。

可皮肤确实是温的。`,
        effects: {
            sanity: -10,
            yin: 10
        },
        choices: [
            {
                text: '掀开白布检查第三具女尸',
                next: 'inspect_female_corpse'
            },
            {
                text: '继续赶路，不管异常',
                next: 'continue_journey'
            }
        ]
    },

    check_cave_depth: {
        title: '探查洞深',
        text: `你举着火焰，往洞深处走。

洞不深，但尽头有一面石壁。石壁上刻着字：

[faded]"赶尸田氏，背信弃义，害我全家。今日尸过此洞，当留一命偿命。"[/faded]

你浑身发冷。

你师父姓田，你也姓田。这石壁上的字，是针对你们田家人的诅咒。

你回头。三具尸体不知何时已经转过身，面对着洞口。他们的姿势像是在等你。

[red]更准确地说，是在堵你。[/red]`,
        effects: {
            sanity: -25,
            yin: 20,
            setFlag: 'foundCurse'
        },
        choices: [
            {
                text: '向尸体解释师父的过错',
                next: 'apologize_for_master'
            },
            {
                text: '硬闯出去',
                next: 'break_through_corpse'
            },
            {
                text: '洞壁阴影里有个穿青布衣裳的老妇人在看你',
                npc: 'zhou_maid',
                npcNode: 'start',
                custom: true
            }
        ]
    }
};
