/**
 * 《xitai》场景模块：jump
 */

export const scenes = {
    jump_off_stage: {
        title: '跳下戏台',
        text: `你跳下戏台，落地时脚踝一阵剧痛。

但你顾不上这些，拼命往镇子的方向跑。身后的锣鼓声越来越响，像是有整个戏班子在追你。

你跑出大约一里地，回头一看。

戏台还是静静地立在那里，幕布垂着，什么都没有。

你长舒一口气，以为自己逃掉了。

可当你转回头时，你面前站着一排穿戏服的人。他们没有五官，却齐齐朝你伸手：

[whisper]"观众还没散场，怎能离席？"[/whisper]`,
        effects: {
            sanity: -25,
            yin: 20,
            visual: 'shake'
        },
        choices: [
            {
                text: '跟他们回去',
                next: 'watch_ghost_opera'
            },
            {
                text: '继续逃跑',
                next: 'keep_running',
                ending: 'lostInFog'
            }
        ]
    }
};
