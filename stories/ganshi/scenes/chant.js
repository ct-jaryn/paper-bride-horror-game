/**
 * 《ganshi》场景模块：chant
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    chant_corpse_spell: createScene('chant_corpse_spell', {
        title: "念诵赶尸咒",
        text: "你大声念起赶尸咒：\n\n[whisper]\"天清地明，尸行夜路。符镇邪祟，铃引归途。\"[/whisper]\n\n铜铃声重新响起，三具尸体又开始迈步。\n\n但走了没几步，你听见身后传来一个女人的声音，跟着你一起念：\n\n[whisper]\"天清地明，尸行夜路……\"[/whisper]\n\n你猛地回头。第三具女尸的白布被风吹起一角，露出一张苍白的脸。\n\n她的眼睛是睁开的。",
        effects: {
            sanity: -20,
            yin: 15,
        },
        choices: [
            createChoice({
                text: "停止念咒，问她是谁",
                next: "ask_female_identity",
            }),
            createChoice({
                text: "加强念咒，镇压她",
                next: "intensify_chant",
                effects: {
                    sanity: -5,
                },
            }),
        ],
    })
};
