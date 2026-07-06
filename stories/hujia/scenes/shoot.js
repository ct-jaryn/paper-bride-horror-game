/**
 * 《hujia》场景模块：shoot
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    shoot_arrow: createScene('shoot_arrow', {
        title: "放箭",
        text: "你松开弓弦，箭射向狐女。\n\n狐女没有躲。箭射中她的肩膀，她发出一声哀鸣，化回人形。鲜血染红了她的红嫁衣。\n\n\"你射我？\" 她看着你，眼里不是愤怒，是悲伤，\"你父亲救我母亲的时候，可没有拿箭对着她。\"\n\n你愣住了。\n\n狐女拔出箭，扔在地上：\"好，我记住这一箭了。\"\n\n她转身消失在夜色中。但你听见她的声音远远传来：\n\n[whisper]\"三天后，我会带更多的狐狸来。到时候，你不走，整个村子都要给你陪葬。\"[/whisper]",
        effects: {
            sanity: -20,
            yin: 20,
        },
        choices: [
            createChoice({
                text: "追出去道歉",
                next: "chase_apologize",
            }),
            createChoice({
                text: "准备和全村一起对抗狐群",
                next: "prepare_village_defense",
            }),
        ],
    })
};
