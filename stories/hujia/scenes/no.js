/**
 * 《hujia》场景模块：no
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    no_marriage_path: createScene('no_marriage_path', {
        title: "不婚",
        text: "狐女看着你，眼神复杂。\n\n\"平等相待？\" 她冷笑，\"人类什么时候对妖平等过？\"\n\n\"我对你平等。\" 你说，\"你可以叫我周远，不是'狐婿'。你可以告诉我你的名字，不是'狐女'。你可以把我当朋友，不是避雷针。\"\n\n狐女沉默了。月光下，她的尖耳朵慢慢消失，虎牙也不见了。她看起来更像一个普通的、孤独的女子。\n\n\"我叫青丘。\" 她说，\"这是我母亲给我起的名字。一千年了，你是第一个问我名字的人。\"\n\n她伸出手，但这一次，不是要你跟她走，而是像朋友一样，想和你握个手。\n\n\"我可以不娶你。\" 她说，\"但三年后雷劫，我可能会死。\"\n\n\"那我陪你。\" 你说，\"不是作为丈夫，是作为朋友。\"",
        effects: {
            sanity: 10,
            yin: -20,
            setFlag: "qingqiuFriend",
        },
        choices: [
            createChoice({
                text: "和她一起面对雷劫",
                next: "friend_against_thunder",
                ending: "hidden_no_marriage_no_demon",
            }),
            createChoice({
                text: "帮她找避雷珠",
                next: "ask_avoid_thunder",
            }),
        ],
    })
};
