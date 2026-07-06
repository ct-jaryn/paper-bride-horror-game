/**
 * 《ganshi》场景模块：calm
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    calm_corpse_laugh: createScene('calm_corpse_laugh', {
        title: "止笑",
        text: "你深吸一口气，强迫自己直视那张裂到耳根的嘴。\n\n尸体发笑，要么有冤，要么有诈。而冤，往往比诈更怕人清醒。\n\n\"你不是病死的。\" 你说，\"你被毒死，所以你想让我知道。\"\n\n尸体的笑声戛然而止。黑色的液体还在流，但它的嘴慢慢合拢，裂开的脸皮像潮水一样退回原位。\n\n[whisper]\"你……不怕我？\"[/whisper]\n\n\"怕。\" 你说，\"但怕归怕，冤归冤。\"\n\n它沉默了很久，然后缓缓抬起僵硬的手，指向自己的喉咙。那里有一道细小的针孔，不仔细看几乎发现不了。\n\n[red]针孔。毒药。灭口。[/red]\n\n\"县太爷……县丞……\" 它说，\"赈灾银……\"",
        effects: {
            sanity: -5,
            yin: 5,
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
        ],
    })
};
