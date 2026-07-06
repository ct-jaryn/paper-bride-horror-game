/**
 * 《hujia》场景模块：ask_thunder
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_avoid_thunder: createScene('ask_avoid_thunder', {
        title: "问避天雷",
        text: "\"有没有办法，既能帮你渡劫，又不用我挡雷？\" 你问。\n\n狐女说：\"有。找一件法宝，叫'避雷珠'。\"\n\n\"在哪里？\"\n\n\"在青丘山最深处的古墓里。\" 狐女说，\"墓里住着一只老狐，是我的祖先。它死后，避雷珠随它一起下葬了。\"\n\n\"我去取。\"\n\n狐女看着你，眼神复杂：\"墓里有机关，有守墓兽，还有我祖先的怨灵。你一个人去，十死无生。\"\n\n\"那也比被雷劈死强。\" 你说。",
        effects: {
            sanity: -10,
            setFlag: "knowsThunderPearl",
        },
        choices: [
            createChoice({
                text: "去古墓取避雷珠",
                next: "go_to_tomb",
            }),
        ],
    }),
    ask_ancestor_price: createScene('ask_ancestor_price', {
        title: "问祖上代价",
        text: "\"你要什么？\" 你问。\n\n石棺里的声音说：\"我要你五十年寿命。\"\n\n狐女脸色变了：\"不行！\"\n\n\"可以。\" 你说。\n\n狐女抓住你的手：\"你疯了？五十年寿命，你会变成老头！\"\n\n\"总比你被雷劈死好。\" 你说。\n\n石棺里的声音笑了：\"有趣。拿走吧。\"\n\n避雷珠飞到狐女手中。你感到一阵虚弱，头发瞬间白了一半。",
        effects: {
            sanity: -10,
            yin: -10,
        },
        ending: "fiftyYears",
    })
};
