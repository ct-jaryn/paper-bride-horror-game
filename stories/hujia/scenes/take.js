/**
 * 《hujia》场景模块：take
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    take_dagger: createScene('take_dagger', {
        title: "拿起匕首",
        text: "你接过匕首。\n\n匕首很沉，刀刃上有一道暗红色的痕迹，散发着腥臭味。\n\n\"记住，\" 老村长说，\"狐狸最怕黑狗血。刺她心口，一刀毙命。\"\n\n你回到家，把匕首藏在枕头下。\n\n第二天夜里，狐女果然来了。这次她没有坐轿子，而是变成一只白狐，蹲在你的院子里。\n\n\"考虑好了吗？\" 她问。\n\n你握紧了枕头下的匕首。",
        effects: {
            sanity: -5,
            yin: 10,
        },
        choices: [
            createChoice({
                text: "假装答应，趁其不备刺杀",
                next: "stab_fox",
                danger: true,
            }),
            createChoice({
                text: "把匕首扔出去，说不想杀她",
                next: "throw_dagger",
            }),
        ],
    }),
    take_fox_pearl: createScene('take_fox_pearl', {
        title: "取走狐珠",
        text: "你捡起狐妖内丹。\n\n内丹入手温热，像是一颗心脏在跳动。你感到一股奇异的力量涌入身体。\n\n老村长说过，狐妖内丹能让人长生不老。你看着手里的珠子，心里升起一股贪念。\n\n你把它吞了下去。\n\n[red]你感到自己的感官变得敏锐，闻到了三里外的兔子味儿，听见了地下蚯蚓爬动的声音。[/red]\n\n你的手指开始变长，指甲变尖。身后，一条尾巴慢慢长了出来。",
        effects: {
            sanity: -30,
            yin: 30,
        },
        ending: "becomeFox",
    })
};
