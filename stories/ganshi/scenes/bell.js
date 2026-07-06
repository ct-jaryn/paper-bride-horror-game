/**
 * 《ganshi》场景模块：bell
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    bell_nuo_dance: createScene('bell_nuo_dance', {
        title: "傩舞",
        text: "你握紧铜铃，忽然想起师父说过：铃音不只是引尸，也可以送魂。最老的赶尸匠，会在赶尸路上跳一段傩戏，为枉死者开路。\n\n你从未跳过傩戏。但今夜，你觉得自己必须跳。\n\n你把三具尸体摆成三角形，自己在中间。铜铃摇动，你踏着雨声起舞。每一步都踩在泥水里，每一步都像是踩在阴阳交界处。\n\n三具尸体随着铃声颤抖。账房先生的黄符飘落，露出他没有生气的脸。但他的嘴角不再流血，反而露出一个安详的笑。\n\n青年的后背，刀伤处渗出黑水。女尸嫁衣上的\"周\"字，一点点褪色。\n\n你跳得越来越快，阳气从脚底泄出。你感觉自己在燃烧。",
        effects: {
            sanity: 10,
            yin: -20,
        },
        choices: [
            createChoice({
                text: "跳完这一曲",
                ending: "hidden_nuo_dance",
                effects: {
                    sanity: 5,
                    yin: -10,
                },
            }),
        ],
    })
};
