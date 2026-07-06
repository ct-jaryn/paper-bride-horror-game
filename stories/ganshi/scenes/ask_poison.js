/**
 * 《ganshi》场景模块：ask_poison
 * 尸体笑声与下毒追问
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_corpse_laugh: createScene('ask_corpse_laugh', {
        title: "尸笑",
        text: "\"你笑什么？\" 你问尸体。\n\n尸体没有回答。但它的嘴越咧越大，嘴角一直裂到耳根。\n\n你想起师父说过：尸体发笑，要么是有冤，要么是有诈。\n\n\"你有什么冤屈？\" 你问。\n\n尸体的笑声停了。它的眼睛流出了黑色的液体，顺着脸颊往下淌。\n\n[whisper]\"我……不是……病死……\"[/whisper] 它说，\"是……被毒死……\"",
        effects: {
            sanity: -15,
            yin: 10,
            setFlag: "knowsPoisoned",
        },
        choices: [
            createChoice({
                text: "问他被谁毒死",
                next: "ask_who_poisoned",
            }),
            createChoice({
                text: "说会替他报仇",
                next: "promise_revenge_corpse",
                effects: {
                    setFlag: "promisedRevenge",
                },
            }),
            createChoice({
                text: "你理智尚存，没有被尸笑吓住",
                next: "calm_corpse_laugh",
                condition: {
                    sanityAbove: 80,
                },
                hidden: true,
                effects: {
                    sanity: 5,
                },
            }),
        ],
    }),
    ask_who_poisoned: createScene('ask_who_poisoned', {
        title: "问谁下毒",
        text: "\"谁毒死你？\" 你问。\n\n尸体的嘴唇动了动：\"县太爷……和县丞……他们……贪了赈灾银……我发现了……\"\n\n[red]原来这账房先生不是病死，是被人灭口。[/red]\n\n\"你尸体送回去，他们就不怕东窗事发？\" 你问。\n\n\"他们……想让我在半路上……变成厉鬼……\" 尸体说，\"然后……杀了你……毁尸灭迹……\"\n\n话音刚落，尸体的眼睛突然睁开，露出漆黑的瞳孔。",
        effects: {
            sanity: -20,
            yin: 15,
        },
        choices: [
            createChoice({
                text: "用黄符重新镇压",
                next: "suppress_again",
            }),
            createChoice({
                text: "说要帮他申冤",
                next: "promise_revenge_corpse",
            }),
        ],
    })
};
