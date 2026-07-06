/**
 * 《ganshi》场景模块：continue
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    continue_journey: createScene('continue_journey', {
        title: "夜路",
        text: "你决定继续赶路。\n\n雨越下越大，山路越来越难走。三具尸体跟着你，铜铃在雨中发出沉闷的响声。\n\n走到一处山洞时，你决定休息片刻。你把尸体排成一排，让他们靠墙站着。\n\n洞口的风吹进来一卷破烂的黄纸，滚到你脚边。你捡起来一看，是一个被雨水泡烂的纸人，只剩上半身，脸上还画着眉眼唇红。纸人胸口贴着一张残破的黄签，隐约可见\"周氏\"二字。\n\n你把纸人扔回雨里，心里莫名发毛。\n\n你点燃一堆火，烤干湿透的衣服。\n\n火光中，三具尸体的影子投在洞壁上。你数了数——\n\n[red]有四个影子。[/red]\n\n你猛地抬头。洞里只有你和三具尸体。\n\n但墙上确实有四个影子。",
        effects: {
            sanity: -20,
            yin: 15,
            visual: "flicker",
        },
        choices: [
            createChoice({
                text: "查看洞深处",
                next: "check_cave_depth",
            }),
            createChoice({
                text: "大声喝问谁在那里",
                next: "shout_who",
            }),
            createChoice({
                text: "你手中铜铃微颤，第四个影子似乎惧怕铃音",
                next: "copper_bell_control",
                condition: {
                    hasItem: "铜铃",
                },
                hidden: true,
                effects: {
                    sanity: 5,
                    yin: -5,
                },
            }),
            createChoice({
                text: "洞口蹲着一个抽旱烟的老人，像是在等人",
                npc: "zhang_guard",
                npcNode: "start",
                custom: true,
            }),
        ],
    })
};
