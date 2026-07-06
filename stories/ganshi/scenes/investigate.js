/**
 * 《ganshi》场景模块：investigate
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    investigate_truth: createScene('investigate_truth', {
        title: "真相",
        text: "你决定查清真相。\n\n你检查了每具尸体的随身物品。账房先生怀里有一本账册，记录着赈灾银的流向。青年手里攥着一张借据。女尸的嫁衣里缝着一封血书，写着她的生辰八字和被活埋的经过。\n\n账册最后一页还夹着一张收据，是周老爷从\"青石镇周氏纸扎铺\"购入\"冥婚喜服七套、纸扎新郎新娘各七对\"的凭证。日期，正是柳红被活埋那天。\n\n这三个人，都是被同一个人害死的：青石镇的周老爷。\n\n[red]又是周家。[/red]\n\n你想起女尸嫁衣上的\"周\"字。这一切，都指向青石镇周家。\n\n你决定不去原定的目的地，而是直奔青石镇。",
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: "knowsZhouMaster",
        },
        choices: [
            createChoice({
                text: "去青石镇",
                next: "head_to_qingshi",
            }),
            createChoice({
                text: "这周家和狐嫁女说的周家，是同一支吗？",
                next: "zhou_fox_link",
                condition: {
                    flag: "hujia_to_zhou",
                },
            }),
            createChoice({
                text: "你已答应送它们回家，不如先完成这趟赶尸",
                next: "soul_homeward",
                condition: {
                    flag: "promisedJustice",
                },
                hidden: true,
                effects: {
                    sanity: 10,
                    yin: -10,
                },
            }),
            createChoice({
                text: "账册里的银子……也许能换条活路",
                next: "ledger_temptation",
                effects: {
                    sanity: -5,
                    yin: 5,
                },
            }),
        ],
    })
};
