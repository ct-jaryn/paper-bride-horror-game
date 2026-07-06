/**
 * 《hujia》场景模块：chase
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    chase_apologize: createScene('chase_apologize', {
        title: "追上去道歉",
        text: "你追出去，但狐女已经不见了。\n\n地上有一滴血迹，在月光下泛着银光。你顺着血迹走，一直走到山里的一座古墓前。\n\n古墓门口，狐女靠在石碑上，肩膀还在流血。\n\n\"你来做什么？\" 她问，\"来补一刀？\"\n\n\"来道歉。\" 你说，\"我不该射你。\"\n\n狐女冷笑：\"道歉有什么用？\"\n\n\"我可以帮你。\" 你说，\"不用成婚，不用挡雷。我陪你找避雷珠。\"\n\n狐女看着你，看了很久。最后她伸出手：\"扶我起来。\"",
        effects: {
            sanity: 5,
            yin: -5,
            setFlag: "helpingFox",
        },
        choices: [
            createChoice({
                text: "扶她起来",
                next: "go_to_tomb",
            }),
        ],
    })
};
