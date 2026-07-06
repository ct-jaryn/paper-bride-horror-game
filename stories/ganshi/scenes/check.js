/**
 * 《ganshi》场景模块：check
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    check_talisman: createScene('check_talisman', {
        title: "查符",
        text: "你走到账房先生面前，检查他额头的黄符。\n\n黄符还在，但上面的朱砂字被雨水泡花了。你赶紧掏出新的黄符，重新贴上。\n\n尸体的头缓缓回到原位，笑容也消失了。\n\n你松了口气。\n\n但当你贴第二具尸体的黄符时，发现那具青年尸体的黄符下，皮肤是温热的。\n\n[red]尸体不应该有温度。[/red]\n\n你伸手探他的鼻息。没有呼吸。\n\n可皮肤确实是温的。",
        effects: {
            sanity: -10,
            yin: 10,
        },
        choices: [
            createChoice({
                text: "掀开白布检查第三具女尸",
                next: "inspect_female_corpse",
            }),
            createChoice({
                text: "继续赶路，不管异常",
                next: "continue_journey",
            }),
        ],
    }),
    check_cave_depth: createScene('check_cave_depth', {
        title: "探查洞深",
        text: "你举着火焰，往洞深处走。\n\n洞不深，但尽头有一面石壁。石壁上刻着字：\n\n[faded]\"赶尸田氏，背信弃义，害我全家。今日尸过此洞，当留一命偿命。\"[/faded]\n\n你浑身发冷。\n\n你师父姓田，你也姓田。这石壁上的字，是针对你们田家人的诅咒。\n\n你回头。三具尸体不知何时已经转过身，面对着洞口。他们的姿势像是在等你。\n\n[red]更准确地说，是在堵你。[/red]",
        effects: {
            sanity: -25,
            yin: 20,
            setFlag: "foundCurse",
        },
        choices: [
            createChoice({
                text: "向尸体解释师父的过错",
                next: "apologize_for_master",
            }),
            createChoice({
                text: "硬闯出去",
                next: "break_through_corpse",
            }),
            createChoice({
                text: "洞壁阴影里有个穿青布衣裳的老妇人在看你",
                npc: "zhou_maid",
                npcNode: "start",
                custom: true,
            }),
        ],
    })
};
