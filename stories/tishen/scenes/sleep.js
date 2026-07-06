/**
 * 《tishen》场景模块：sleep
 */

export const scenes = {
    sleep_first_night: {
        title: '第一夜',
        text: `你回到自己房间，锁上门，躺在床上。

床还是你小时候睡的那张，床单上有一股霉味。你翻来覆去睡不着。

半夜，你听见门外有脚步声。脚步声很轻，像是纸在地上摩擦。

[whisper]沙沙。沙沙。[/whisper]

脚步声停在你的门口。门把手缓缓转动，但门锁着。

"开门。" 一个声音说，"我想看看你。"

那是你的声音。`,
        effects: {
            sanity: -25,
            yin: 15
        },
        choices: [
            {
                text: '保持沉默',
                next: 'stay_silent'
            },
            {
                text: '问它想干什么',
                next: 'ask_what_wants'
            },
            {
                text: '用椅子抵住门',
                next: 'barricade_door',
                effects: { sanity: -5 }
            },
            {
                text: '你保持清醒，听出脚步声不是从门外传来的',
                next: 'stay_calm_night',
                condition: { sanityAbove: 80 },
                hidden: true,
                effects: { sanity: -5 }
            }
        ]
    },

    // 清醒之夜（新增分支）
};
