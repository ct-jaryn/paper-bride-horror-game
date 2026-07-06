/**
 * 《hujia》场景模块：prepare
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    prepare_hunt: createScene('prepare_hunt', {
        title: "备猎",
        text: "你回家准备猎具。\n\n你把父亲留下的猎弓擦得锃亮，箭头用黑狗血浸过。又在家里贴了十几张黄符，门窗都倒上雄黄酒。\n\n做完这一切，你坐在屋里等。\n\n夜里，院子里传来沙沙声。你拉开窗帘一角，看见月光下，一只巨大的白狐正在院子里转圈。\n\n它的眼睛像两盏灯笼，直直地看着你的窗户。\n\n\"周远，\" 狐女的声音传来，\"你防备我？\"\n\n你拉开窗户，箭对准了她：\"我不想跟你走。\"\n\n白狐叹了口气，化成人形。她站在院子里，红嫁衣在月光下像血一样。\n\n\"我若用强，你挡不住。\" 她说，\"但我父亲说过，报恩不能强求。我再问你一次，跟不跟我走？\"",
        effects: {
            sanity: -10,
            yin: 15,
        },
        choices: [
            createChoice({
                text: "放箭",
                next: "shoot_arrow",
                effects: {
                    sanity: -5,
                },
            }),
            createChoice({
                text: "再谈谈",
                next: "negotiate_fox",
            }),
            createChoice({
                text: "你换上小生戏服，唱起《牡丹亭》",
                next: "peony_opera_defense",
                condition: {
                    hasItem: "小生戏服",
                },
                hidden: true,
                effects: {
                    sanity: 5,
                    yin: -10,
                },
            }),
        ],
    }),
    prepare_village_defense: createScene('prepare_village_defense', {
        title: "准备村防",
        text: "你回到村里，组织村民防御。\n\n大家在村子四周燃起篝火，撒上黑狗血，贴上黄符。老人和小孩躲进祠堂，青壮年手持农具守在村口。\n\n第三天夜里，狐群来了。\n\n不是一只两只，而是上百只。它们围着村子转圈，发出凄厉的嚎叫。狐女站在最前面，红嫁衣在火光中像一团燃烧的血。\n\n\"周远，\" 她说，\"你不出来，我就屠村。\"\n\n村民们看向你，眼里全是恐惧。",
        effects: {
            sanity: -30,
            yin: 25,
        },
        choices: [
            createChoice({
                text: "走出去，跟狐女走",
                next: "surrender_to_fox",
            }),
            createChoice({
                text: "让村民们先顶住，你去找狐女谈判",
                next: "negotiate_under_siege",
            }),
        ],
    })
};
