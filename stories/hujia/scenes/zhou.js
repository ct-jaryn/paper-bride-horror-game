/**
 * 《hujia》场景模块：zhou
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    zhou_name_mentioned: createScene('zhou_name_mentioned', {
        title: "周家正名",
        text: "狐女的眼睛眯了起来。\n\n\"秀兰？\" 她问，\"你怎么会知道这个名字？\"\n\n\"我为她在周家族谱上正过名。\" 你说，\"她被活埋三十年，最后不是因为报仇才散的，是因为有人记得她，有人承认她。\"\n\n狐女沉默了。她身后的尾巴影子不安地摆动着。\n\n\"你们周家……\" 她说，\"害死了那么多人。你现在说这些，是想让我原谅你们？\"\n\n\"不是原谅。\" 你说，\"是承认。我承认周家欠你们的。我父亲救你母亲，是周家欠狐族的开始。我来还债，不是来续债。\"\n\n狐女看着你，看了很久。\n\n\"你和你祖上不一样。\" 她终于说，\"他们只会用纸扎和符咒，你只会用嘴。\"\n\n\"嘴比符咒有用。\" 你说。\n\n她嘴角微微上扬，那是你第一次看见她真正的笑。",
        effects: {
            sanity: 5,
            yin: -15,
            setFlag: "zhouDebtAcknowledgedByFox",
        },
        choices: [
            createChoice({
                text: "问她是否还需要人婚",
                next: "no_marriage_path",
                effects: {
                    setFlag: "seekEquality",
                },
            }),
            createChoice({
                text: "仍然拒绝",
                next: "refuse_fox",
            }),
        ],
    })
};
