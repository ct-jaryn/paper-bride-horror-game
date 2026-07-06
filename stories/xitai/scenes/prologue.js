/**
 * 《xitai》场景模块：prologue
 */

export const scenes = {
    prologue: {
        title: '青石戏台',
        text: `青石镇往东三里，有一座老戏台。

二十年前，春香班在这里演出《牡丹亭》，戏台突然坍塌，烧死了十七个人。从那以后，镇上的人把这里封了，说是"鬼台"。

你是省民俗研究所的研究员，专门记录民间传说。你听说了青石戏台的事，带着录音设备和一台老式相机，在一个阴雨绵绵的下午来到了这里。

戏台比想象中保存得更完好。

朱红的柱子只是褪了色，戏台上的幕布虽然破烂，却还挂着。最诡异的是，台中央摆着一套完整的锣鼓，锣面上干干净净，像是有人刚擦过。

你举起相机，按下快门。

[red]取景框里，戏台上站满了穿戏服的人。[/red]

你猛地放下相机。戏台上空无一人。

再看取景框，那些人还在。他们背对着你，正在化妆。`,
        effects: {
            sanity: -10,
            yin: 10
        },
        choices: [
            {
                text: '拍照记录',
                next: 'take_photo'
            },
            {
                text: '爬上戏台查看',
                next: 'climb_stage'
            },
            {
                text: '先找村里老人打听',
                next: 'ask_villagers'
            },
            {
                text: '你阴气太重，看见后台真正的戏班正在上妆',
                next: 'true_backstage',
                condition: { yinAbove: 15 },
                hidden: true,
                effects: { sanity: -5, yin: 10 }
            }
        ]
    },

    // 真正的后台（新增隐藏分支）
};
