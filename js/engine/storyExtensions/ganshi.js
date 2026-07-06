/**
 * 《赶尸》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // ganshi:prologue
    'ganshi:prologue': [
        {
            text: '尸体手里攥着一张纸条，上面写着一个名字',
            next: 'ganshi_easter_paper_name'
        }
    ],
    // ganshi:bell_nuo_dance
    'ganshi:bell_nuo_dance': [
        {
            text: '铜铃一声，三具尸体同时跪下',
            ending: 'hidden_bellPardon'
        }
    ],
    // ganshi:soul_homeward
    'ganshi:soul_homeward': [
        {
            text: '少年的魂魄跟着你回到了故乡',
            ending: 'hidden_youthHome'
        }
    ],
    // ganshi:ask_tian_grudge
    'ganshi:ask_tian_grudge': [
        {
            text: '师父的债你还清了，师徒缘分未尽',
            ending: 'hidden_masterApprentice'
        }
    ]
};

export const scenes = {
    ganshi_easter_paper_name: {
        title: '无名纸条',
        text: `你费力地展开尸体手中那张被雨水泡烂的纸条。

上面只有一个名字，墨迹已经晕开，却还能辨认：

[red]“云秀”[/red]

你想起某个关于纸扎铺的传闻：替身的纸人一旦有了自己的脸，就会替真正的“云秀”活下去。而真正的云秀，也许从未离开过。

尸体忽然握紧了你的手腕。`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '挣脱手腕', next: 'corpse_conversation' }
        ]
    }
};
