/**
 * 《hujia》场景模块：give
 */

import { createScene } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    give_heart_blood: createScene('give_heart_blood', {
        title: "给出心头血",
        text: "你咬破舌尖，吐出一口血。\n\n狐女用一个玉瓶接住，小心地收好。\n\n\"够了。\" 她说，\"有了这滴心头血，我就能渡劫。\"\n\n她的身影开始变得透明，像是要羽化登仙。\n\n\"周远，\" 她说，\"你父亲救我母亲一命，今日你用血还我。我们两清了。\"\n\n她化作一道白光，消失在天际。\n\n你感到一阵虚弱，但更多的是轻松。",
        effects: {
            sanity: -10,
            yin: -15,
        },
        ending: "bloodDebtPaid",
    })
};
