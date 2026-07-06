/**
 * 《ganshi》场景模块：corpse
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    corpse_conversation: createScene('corpse_conversation', {
        title: "尸语",
        text: `你屏住呼吸，雨水顺着鼻梁往下淌，你连擦都不敢擦。你侧着耳朵，把雨声、风声、铜铃的余响一点点从耳朵里剔出去，只剩那一丝极细极幽的东西。

那不是风声，也不是雨声。

是三具尸体在低声交谈。

它们的嘴唇没有动——三张嘴都闭着，黄符压在额头，把脸遮得严严实实。可声音直接传进你脑子里，像有人在你天灵盖里说话，震得太阳穴一跳一跳地疼。

"田家的后生……" 账房先生的声音先响起来，苍老，沙哑，带着一股陈年账册的霉味，"和别的赶尸匠不一样。"

"他听得见我们。" 青年尸体的声音接上来，年轻，却冷，像是从井底飘上来的。

女尸没有说话。

只是轻轻叹了一口气。

那口气叹得你心都揪起来——不像死人叹的，像活人叹的，带着怨，带着倦，还带着一丝说不清的委屈。

你壮着胆子，喉咙发紧，话从牙缝里挤出来："你们……在说我？"

三具尸体同时转过头，看着你。

它们的眼都被黄符遮着，可你清清楚楚地感觉到它们在"看"你。那目光是有重量的，沉甸甸地压在你肩上，比雨还冷。

"我们都有冤。" 账房先生说，声音慢下来，一字一顿，像在数一笔笔烂账，"你若能帮我们，我们便不害你。你若不能，我们便自己报仇。"

"什么冤？" 你问。声音出口才发现自己在发抖。

三具尸体同时开口，三个声音叠在一起，像三口钟同时撞响，震得你脑子里嗡嗡作响：

[whisper]"周家。"[/whisper]

[whisper]"青石镇。"[/whisper]

[whisper]"冥婚。"[/whisper]

说完，三具尸体重新转回身，齐齐朝着前方的山路。铜铃"叮铃"一声，自己响了起来，像在催你动身。

你站在雨里，雨水从领口灌进去，凉到心里。`,
        effects: {
            sanity: -10,
            yin: 15,
            setFlag: "heardCorpseConversation",
        },
        choices: [
            createChoice({
                text: "说我会帮你们",
                next: "promise_revenge_corpse",
                effects: {
                    setFlag: "promisedJustice",
                },
            }),
            createChoice({
                text: "继续赶路",
                next: "continue_journey",
            }),
        ],
    })
};
