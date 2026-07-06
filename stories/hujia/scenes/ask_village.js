/**
 * 《hujia》场景模块：ask_village
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_village_fox: createScene('ask_village_fox', {
        title: "村长",
        text: "你来到村里，找到老村长。\n\n老村长听说狐女来找你，脸色大变：\"你惹上大麻烦了。\"\n\n\"什么麻烦？\"\n\n\"青丘狐女每隔几十年就要娶一个人。\" 老村长说，\"被娶走的人，有的再也没回来，有的回来了，但已经不是人了。\"\n\n\"她说是为了报恩。\"\n\n\"狐狸的话你也信？\" 老村长冷笑，\"她娶你，是为了借你的阳气掩盖妖气。等她渡了劫，你就会被吸干阳气，变成一具干尸。\"\n\n他递给你一把匕首：\"这把匕首是用黑狗血泡过的。等她再来，刺她心口。\"",
        effects: {
            sanity: -5,
            addItem: "黑狗血匕首",
        },
        choices: [
            createChoice({
                text: "接过匕首",
                next: "take_dagger",
            }),
            createChoice({
                text: "拒绝，说不想杀她",
                next: "refuse_dagger",
                effects: {
                    yin: 5,
                },
            }),
            createChoice({
                text: "你保持清醒，注意到村长眼中闪过一丝贪婪",
                next: "see_through_village",
                condition: {
                    sanityAbove: 80,
                },
                hidden: true,
                effects: {
                    sanity: -5,
                },
            }),
        ],
    })
};
