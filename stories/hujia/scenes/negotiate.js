/**
 * 《hujia》场景模块：negotiate
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    negotiate_fox: createScene('negotiate_fox', {
        title: "与狐谈判",
        text: "\"我们谈谈。\" 你说。\n\n狐女点点头，走进院子，坐在石凳上。她的尾巴还露在外面，在身后轻轻摆动。\n\n\"我不想当你的避雷针。\" 你说，\"但如果不用死，我可以考虑帮你。\"\n\n狐女想了想：\"有一个人可以不用死。\"\n\n\"谁？\"\n\n\"真心爱我的人。\" 她说，\"雷劫劈不死真心。但你……你对我只有害怕。\"\n\n\"我们可以慢慢培养。\" 你说。\n\n狐女笑了：\"狐狸最缺的就是时间。我等不了你慢慢培养。\"\n\n她站起身：\"三天。三天后给我答复。是生是死，你自己选。\"",
        effects: {
            yin: 5,
        },
        choices: [
            createChoice({
                text: "说愿意试着爱她",
                next: "try_love_fox",
                effects: {
                    setFlag: "tryLove",
                },
            }),
            createChoice({
                text: "沉默",
                next: "refuse_fox",
            }),
            createChoice({
                text: "人鬼殊途，但真心可渡。我愿以真心换真心",
                next: "true_heart_pledge",
                condition: {
                    flag: "knowsTruth",
                },
            }),
        ],
    }),
    negotiate_under_siege: createScene('negotiate_under_siege', {
        title: "重围中谈判",
        text: "你走到狐女面前：\"我跟你走，但你要放过村民。\"\n\n狐女笑了：\"你刚才不是不愿意吗？\"\n\n\"我不能看着他们死。\" 你说。\n\n狐女点点头：\"好。我放过他们。但你不能再反悔。\"\n\n她牵着你的手，狐群自动让开一条路。\n\n你回头看了村子一眼。村民们低着头，不敢看你。\n\n你忽然觉得，这些人也不值得救。",
        effects: {
            sanity: -20,
            yin: 15,
        },
        ending: "foxHusband",
    })
};
