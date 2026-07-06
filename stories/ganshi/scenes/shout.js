/**
 * 《ganshi》场景模块：shout
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    shout_who: createScene('shout_who', {
        title: "喝问是谁",
        text: "\"谁在那里！\" 你大喊。\n\n洞里回荡着你的声音。没有人回答。\n\n但四个影子中的一个，慢慢脱离了墙，向你走来。\n\n你没有看见任何人，但火光明显变暗了，像是有什么东西挡在你和火堆之间。\n\n\"在下田小七，赶尸路过此地。\" 你抱拳，\"若有冒犯，还请明示。\"\n\n一个苍老的声音在你耳边响起：\"田家人……都该死。\"",
        effects: {
            sanity: -25,
            yin: 20,
        },
        choices: [
            createChoice({
                text: "问前辈与田家的恩怨",
                next: "ask_tian_grudge",
            }),
            createChoice({
                text: "抛出黄符保命",
                next: "throw_talisman",
                effects: {
                    yin: -10,
                },
            }),
        ],
    })
};
