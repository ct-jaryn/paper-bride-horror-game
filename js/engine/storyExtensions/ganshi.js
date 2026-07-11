/**
 * 《赶尸》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // ganshi:prologue —— 需要阴气足够才能感知纸条存在
    'ganshi:prologue': [
        {
            text: '你注意到尸体的手指似乎在指着什么',
            next: 'ganshi_easter_paper_name',
            condition: { yinAbove: 20 },
            hidden: true,
        }
    ],
    // ganshi:bell_nuo_dance —— 需要阴气足够才能感知第四道影子
    'ganshi:bell_nuo_dance': [
        {
            text: '洞壁上似乎多了一个不属于尸体的影子',
            ending: 'hidden_bellPardon',
            condition: { yinAbove: 30 },
            hidden: true,
        }
    ],
    // ganshi:soul_homeward —— 需此前承诺过正义
    'ganshi:soul_homeward': [
        {
            text: '少年的魂魄向你道别时，你想起了一个相似的背影',
            ending: 'hidden_youthHome',
            condition: { flag: 'promisedJustice' },
            hidden: true,
        }
    ],
    // ganshi:ask_tian_grudge —— 需要携带赶尸匠的关键物品
    'ganshi:ask_tian_grudge': [
        {
            text: '冤有头债有主，但师父的路，也许是另一条',
            ending: 'hidden_masterApprentice',
            condition: { hasItem: '铜铃' },
            hidden: true,
        }
    ]
};

export const scenes = {
    ganshi_easter_paper_name: {
        title: '无名纸条',
        text: `你费力地展开尸体手中那张被雨水泡烂的纸条。

上面只有一个名字，墨迹已经晕开，却还能辨认：

[red]"云袖"[/red]

你觉得这个名字眼熟，却说不出在哪里听过。尸体忽然握紧了你的手腕。`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '挣脱手腕', next: 'corpse_conversation' }
        ]
    }
};
