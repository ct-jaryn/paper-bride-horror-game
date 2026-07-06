/**
 * 《hujia》场景模块：stab
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    stab_fox: createScene('stab_fox', {
        title: "刺向狐女",
        text: "你假装走向狐女，突然拔出匕首刺向她的心口。\n\n狐女没有躲。\n\n匕首刺入她的身体，鲜血喷涌而出。她的身体开始变化，耳朵变长，尾巴变多，最后变成一只巨大的白狐倒在地上。\n\n白狐看着你，眼里全是泪：\"为什么……我父亲说……周家是好人……\"\n\n你想解释，但来不及了。白狐的身体慢慢变冷，最后化作一缕青烟消散。\n\n地上只剩下一颗白色的珠子。",
        effects: {
            sanity: -30,
            yin: 20,
            addItem: "狐妖内丹",
        },
        choices: [
            createChoice({
                text: "捡起内丹",
                next: "take_fox_pearl",
            }),
            createChoice({
                text: "跪在地上忏悔",
                next: "repent_kill_fox",
            }),
        ],
    })
};
