/**
 * 《戏台》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // xitai:backstage
    'xitai:backstage': [
        {
            text: '水缸里的回声……像是河边唱歌的女人',
            next: 'xitai_easter_river_voice'
        },
        {
            text: '你掀开幕布，发现台下坐满了没有脸的观众',
            ending: 'hidden_openerCurtain'
        },
        {
            text: '你触发了隐藏结局：焚照',
            ending: 'hidden_photoAshes'
        },
        {
            text: '你触发了隐藏结局：见证',
            ending: 'hidden_stageWitness'
        },
        {
            text: '你触发了隐藏结局：刘掌柜的供词',
            ending: 'hidden_liuConfession'
        },
        {
            text: '你触发了隐藏结局：周生后人',
            ending: 'hidden_zhouDescendant'
        },
        {
            text: '你触发了隐藏结局：无面观众',
            ending: 'hidden_noFaceAudience'
        },
        {
            text: '你触发了隐藏结局：红灯笼',
            ending: 'hidden_redLantern'
        }
    ],
    // xitai:ask_ghost_actor
    'xitai:ask_ghost_actor': [
        {
            text: '你决定不唱那出鬼戏，只为她一个人唱一支安魂曲',
            ending: 'hidden_yunxiuRequiem'
        }
    ],
    // xitai:true_backstage
    'xitai:true_backstage': [
        {
            text: '你走上舞台，再也不愿离开',
            ending: 'hidden_eternalStage'
        }
    ]
};

export const scenes = {
    xitai_easter_river_voice: {
        title: '水缸回声',
        text: `你把手伸进水缸，水面泛起涟漪。

涟漪中竟传来歌声。那歌声不像戏台上的青衣，倒像河边浣衣的女人，低低地哼着一首送魂曲。

[whisper]“河娘等桥断，戏子等台塌……我们都是被水留下的人。”[/whisper]

你猛地抽回手。水面上只剩你自己的倒影，苍白如纸。`,
        effects: { sanity: -6, yin: 8 },
        choices: [
            { text: '擦干手，离开水缸', next: 'return_to_stage' }
        ]
    }
};
