/**
 * 《hujia》场景模块：marry
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    marry_fox: createScene('marry_fox', {
        title: "迎娶狐女",
        text: "你和狐女拜了堂。\n\n狐狸们发出尖锐的笑声，像是在欢呼，又像是在嘲笑。\n\n你被送入洞房。洞房里没有床，只有一张铺着兽皮的石台。狐女坐在石台上，开始脱嫁衣。\n\n\"等等。\" 你说，\"我们……要做什么？\"\n\n狐女笑了：\"成亲该做什么，你不知道？\"\n\n你后退一步。狐女的笑容消失了。\n\n\"你怕我？\" 她问。\n\n\"我不怕你。\" 你说，\"我怕的是三年后我会被雷劈死。\"\n\n狐女沉默了一会儿，然后叹了口气：\"原来你知道了。\"",
        effects: {
            sanity: -20,
            yin: 20,
        },
        choices: [
            createChoice({
                text: "问她能不能不挡雷",
                next: "ask_avoid_thunder",
            }),
            createChoice({
                text: "趁她不备逃跑",
                next: "escape_cave_night",
            }),
        ],
    })
};
