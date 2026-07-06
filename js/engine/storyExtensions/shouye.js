/**
 * 《守夜》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // shouye:prologue
    'shouye:prologue': [
        {
            text: '检查地上那一点奇怪的纸灰',
            next: 'shouye_easter_paper_ash'
        }
    ],
    // shouye:three_souls_complete
    'shouye:three_souls_complete': [
        {
            text: '你忽然明白，自己也该成为这班社的最后一名成员',
            ending: 'hidden_threeSoulsReunion'
        }
    ],
    // shouye:river_bottom_return
    'shouye:river_bottom_return': [
        {
            text: '你折了一只纸船，点上蜡烛，放入河中',
            ending: 'hidden_riverLantern'
        }
    ],
    // shouye:caller_accept_lineage
    'shouye:caller_accept_lineage': [
        {
            text: '你接过铜铃，从此成为守渡人',
            ending: 'hidden_watcherLineage'
        }
    ],
    // shouye:patrol_corridor
    'shouye:patrol_corridor': [
        {
            text: '你触发了隐藏结局：泪祝',
            ending: 'hidden_tearBlessing'
        },
        {
            text: '你触发了隐藏结局：还钗',
            ending: 'hidden_silverHairpinReturn'
        },
        {
            text: '你触发了隐藏结局：录音',
            ending: 'hidden_stageRecord'
        },
        {
            text: '你触发了隐藏结局：河畔戏台',
            ending: 'hidden_riversideStage'
        },
        {
            text: '你触发了隐藏结局：纸人和声',
            ending: 'hidden_paperWhisperDuet'
        },
        {
            text: '你触发了隐藏结局：名牌',
            ending: 'hidden_yunxiuNamePlaque'
        },
        {
            text: '你触发了隐藏结局：最后一名观众',
            ending: 'hidden_lastAudience'
        },
        {
            text: '你触发了隐藏结局：焚幕',
            ending: 'hidden_burningCurtain'
        },
        {
            text: '你触发了隐藏结局：停尸间摇篮曲',
            ending: 'hidden_morgueLullaby'
        },
        {
            text: '你触发了隐藏结局：送别曲',
            ending: 'hidden_farewellSong'
        },
        {
            text: '你触发了隐藏结局：前任安息',
            ending: 'hidden_callerPeace'
        },
        {
            text: '你最终：河底长眠',
            ending: 'death_riverBottom'
        },
        {
            text: '你最终：火咒',
            ending: 'death_arsonCurse'
        },
        {
            text: '你触发了隐藏结局：普度',
            ending: 'hidden_allSoulsRelease'
        },
        {
            text: '你触发了隐藏结局：学徒归家',
            ending: 'hidden_apprenticeFamily'
        },
        {
            text: '你触发了隐藏结局：转世',
            ending: 'hidden_zhouShengRebornHint'
        },
        {
            text: '你触发了隐藏结局：守墓人',
            ending: 'hidden_gravekeeperLife'
        },
        {
            text: '你最终：平夜',
            ending: 'normal_simpleWatch'
        },
        {
            text: '你想起老规矩，给七号厅点三炷香',
            next: 'burn_incense_for_her'
        },
        {
            text: '各厅巡完，去旧戏台遗址看看那些无名受害者',
            next: 'old_stage_victims'
        }
    ],
    // shouye:continue_watch
    'shouye:continue_watch': [
        {
            text: '子时已过，按规定巡一次各厅',
            next: 'patrol_corridor'
        },
        {
            text: '去河边走走，那里有未散的戏魂',
            next: 'river_search'
        },
        {
            text: '去县档案馆查旧案',
            next: 'county_archive'
        },
        {
            text: '去桂花巷找老戏班后人',
            next: 'osmanthus_trace'
        },
        {
            text: '殡仪馆电话又响了，这次你接起来',
            next: 'mysterious_call',
            hidden: true
        },
        {
            text: '在值班室翻到第一任守夜人的日记',
            next: 'first_watcher_journal',
            hidden: true
        }
    ],
    // shouye:river_search
    'shouye:river_search': [
        {
            text: '顺着河水往下走，看看水底有什么',
            next: 'river_bottom_descent'
        }
    ],
    // shouye:county_archive
    'shouye:county_archive': [
        {
            text: '档案里提到当年的戏班老板，去找他',
            next: 'opera_house_boss_story'
        }
    ],
    // shouye:osmanthus_trace
    'shouye:osmanthus_trace': [
        {
            text: '桂花巷深处有座老茶楼，去看看',
            next: 'alley_granny_kowtow'
        }
    ]
};

export const scenes = {
    shouye_easter_paper_ash: {
        title: '纸灰',
        text: `你蹲下身，从殡仪馆门槛的缝隙里刮出一点纸灰。

不是普通的黄纸，而是喜纸——那种印着“囍”字、用来扎纸人的红纸。灰烬已经冰凉，你却仿佛听见很远的地方有人吹奏唢呐。

[faded]“山村……冥婚……井下新娘……”[/faded]

你把纸灰小心包好。这不是七号厅的故事，但它似乎愿意借七号厅的口，说给你听。`,
        effects: { sanity: -5, yin: 10, addItem: '纸人灰烬' },
        choices: [
            { text: '继续值班', next: 'morgue_whisper' }
        ]
    }
};
