/**
 * 《xitai》场景模块：try
 */

export const scenes = {
    try_leave: {
        title: '尝试离开',
        text: `你转身往戏台外走。

但来时的路不见了。戏台四周本来是一片荒地，现在却出现了一圈圈红色的灯笼，灯笼上写着"春香班"三个字。

你沿着灯笼走，走了很久，却发现自己又回到了戏台前。

幕布已经拉开了。

戏台上站着一排穿戏服的人，他们没有五官，却齐齐朝你鞠躬：

[whisper]"恭请观众入座。"[/whisper]`,
        effects: {
            sanity: -20,
            yin: 15
        },
        choices: [
            {
                text: '找地方坐下看戏',
                next: 'watch_ghost_opera'
            },
            {
                text: '拒绝入座',
                next: 'refuse_seat'
            }
        ]
    }
};
