/**
 * 《hujia》场景模块：true
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    true_heart_pledge: createScene('true_heart_pledge', {
        title: "真心起誓",
        text: "狐女看着你的眼睛，看了很久。\n\n\"你说真心？\" 她苦笑，\"人心最易变。千年里，我见过太多人说着真心，最后想要的不过是长生。\"\n\n\"那你可以不要给我长生。\" 你说，\"我可以陪你三年，不图成仙，不图富贵。如果你渡劫成功，放我回人间；如果失败，我陪你一起死。\"\n\n狐女的尾巴垂了下来。她走近你，把额头贴在你的额头上。\n\n\"你是第一个……不向我求东西的人。\"\n\n她轻轻吻了你的额头。那一瞬间，你看见了她千年的记忆——孤独、修行、雷劫、还有对人类的恐惧。\n\n\"好。\" 她说，\"三年。若三年后你仍不后悔，我渡你一世平安。\"\n\n她牵起你的手，向山里走去。这一次，你没有感到害怕。",
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: "trueHeartPledged",
        },
        ending: "hidden_trueHeart",
    })
};
