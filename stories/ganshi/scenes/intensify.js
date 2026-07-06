/**
 * 《ganshi》场景模块：intensify
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    intensify_chant: createScene('intensify_chant', {
        title: "加急念咒",
        text: "你加大声音念咒，同时摇动铜铃。\n\n女尸的眼睛缓缓闭上，白布重新落下。\n\n你松了口气，以为镇压住了。\n\n但走了几步，你发现女尸没有跟上。她站在原地，白布下传来低低的哭泣声。\n\n[whisper]\"救……我……\"[/whisper]\n\n那声音像是一个活人发出来的。",
        effects: {
            sanity: -15,
            yin: 10,
        },
        choices: [
            createChoice({
                text: "回去看她",
                next: "ask_female_identity",
            }),
            createChoice({
                text: "硬下心肠继续走",
                next: "leave_her_behind",
                effects: {
                    sanity: -10,
                    yin: 10,
                },
            }),
        ],
    })
};
