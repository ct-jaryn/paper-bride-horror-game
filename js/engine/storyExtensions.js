/**
 * 《阴阳簿》跨卷彩蛋与隐藏分支扩展
 *
 * 设计原则：
 * - 每卷故事仍独立成篇，不破坏首次游玩体验。
 * - 彩蛋只在玩家已经历过其他故事后，以“似曾相识”“旧报纸”“路人低语”
 *   等模糊方式出现，不直接点明“阴阳世界”。
 * - 新增选择均带有 condition/hidden，不影响主线流程。
 */

import { Huimen } from './namespace.js';

/**
 * 需要注入到当前故事场景中的额外选择
 * key 格式：storyId:sceneId
 */
const EASTER_EGG_CHOICES = {
    // huimen:prologue
    'huimen:prologue': [
        {
            text: '青石镇……这名字像在别处听过',
            next: 'huimen_easter_qingshi_paper'
        }
    ],
    // huimen:to_old_house
    'huimen:to_old_house': [
        {
            text: '这纸人的扎法，与别处见过的“云秀”有几分相似',
            next: 'huimen_easter_paper_doll'
        }
    ],
    // shouye:prologue
    'shouye:prologue': [
        {
            text: '检查地上那一点奇怪的纸灰',
            next: 'shouye_easter_paper_ash'
        }
    ],
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
    // tishen:prologue
    'tishen:prologue': [
        {
            text: '纸人衣角绣着青丘山纹',
            next: 'tishen_easter_fox_mark'
        }
    ],
    // heniang:prologue
    'heniang:prologue': [
        {
            text: '那件红裳的款式，像在戏台见过',
            next: 'heniang_easter_opera_dress'
        }
    ],
    // hujia:prologue
    'hujia:prologue': [
        {
            text: '周家的债……是指回门那口井？',
            next: 'hujia_easter_zhou_debt'
        }
    ],
    // ganshi:prologue
    'ganshi:prologue': [
        {
            text: '尸体手里攥着一张纸条，上面写着一个名字',
            next: 'ganshi_easter_paper_name'
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
    ],
    // tishen:ask_doll_truth
    'tishen:ask_doll_truth': [
        {
            text: '纸人嘴唇翕动，说出了自己的真名',
            ending: 'hidden_dollName'
        }
    ],
    // tishen:mirror_reveal
    'tishen:mirror_reveal': [
        {
            text: '你把镜子转向纸人，让它看见自己',
            ending: 'hidden_mirrorRelease'
        },
        {
            text: '你触发了隐藏结局：父忏',
            ending: 'hidden_fathersConfession'
        },
        {
            text: '你触发了隐藏结局：纸命',
            ending: 'hidden_paperLife'
        },
        {
            text: '你触发了隐藏结局：灰安',
            ending: 'hidden_ashPeace'
        },
        {
            text: '你触发了隐藏结局：共魂',
            ending: 'hidden_soulShare'
        },
        {
            text: '你触发了隐藏结局：稻草父亲',
            ending: 'hidden_strawFather'
        }
    ],
    // tishen:refuse_exchange
    'tishen:refuse_exchange': [
        {
            text: '纸人笑了，它知道下一个被替代的是谁',
            ending: 'hidden_secondDoll'
        }
    ],
    // heniang:plan_ritual
    'heniang:plan_ritual': [
        {
            text: '你在河底找到了母亲留给你的信',
            ending: 'hidden_motherLetter'
        }
    ],
    // heniang:negotiate_xiugu
    'heniang:negotiate_xiugu': [
        {
            text: '你接过秀姑的位置，成为新的河神',
            ending: 'hidden_riverGoddess'
        },
        {
            text: '你触发了隐藏结局：秀姑之子',
            ending: 'hidden_xiuguChild'
        },
        {
            text: '你触发了隐藏结局：水下合唱队',
            ending: 'hidden_drownedChorus'
        },
        {
            text: '你触发了隐藏结局：河底戏衣',
            ending: 'hidden_peonyDress'
        },
        {
            text: '你触发了隐藏结局：夏雨',
            ending: 'hidden_summerRain'
        },
        {
            text: '你触发了隐藏结局：最后一支歌',
            ending: 'hidden_lastSong'
        },
        {
            text: '你触发了隐藏结局：水鬼',
            ending: 'hidden_waterGhost'
        },
        {
            text: '你触发了隐藏结局：石碑记忆',
            ending: 'hidden_stoneMemory'
        }
    ],
    // heniang:use_incense_ash
    'heniang:use_incense_ash': [
        {
            text: '你把香灰撒进河里，化作一艘小船',
            ending: 'hidden_incenseBoat'
        }
    ],
    // hujia:ask_after_marriage
    'hujia:ask_after_marriage': [
        {
            text: '狐女没有逼你成婚，只是与你结为知己',
            ending: 'hidden_foxFriend'
        }
    ],
    // hujia:refuse_dagger
    'hujia:refuse_dagger': [
        {
            text: '你把心头血滴入狐女掌心，结成血誓',
            ending: 'hidden_heartBloodOath'
        }
    ],
    // hujia:refuse_heart_blood
    'hujia:refuse_heart_blood': [
        {
            text: '白狐回首三次，消失在青丘山雾中',
            ending: 'hidden_whiteFoxSendoff'
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
    // hujia:fox_mercy_path
    'hujia:negotiate_fox': [
        {
            text: '你触发了隐藏结局：村长的真相',
            ending: 'hidden_villageChiefTruth'
        },
        {
            text: '你触发了隐藏结局：戏服渡狐',
            ending: 'hidden_peonyDressFox'
        },
        {
            text: '你触发了隐藏结局：共珠',
            ending: 'hidden_thunderPearlShared'
        },
        {
            text: '你触发了隐藏结局：祖约',
            ending: 'hidden_ancestorPact'
        },
        {
            text: '你触发了隐藏结局：狐子',
            ending: 'hidden_foxChild'
        }
    ],
    // ganshi:ask_tian_grudge
    'ganshi:ask_tian_grudge': [
        {
            text: '师父的债你还清了，师徒缘分未尽',
            ending: 'hidden_masterApprentice'
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
    ],
};

/**
 * 彩蛋专属场景
 */
const EASTER_EGG_SCENES = {
    huimen_easter_qingshi_paper: {
        title: '旧报碎片',
        text: `你蹲下身，从泥水里捞出那张湿透的旧报纸。

头条已被水泡得模糊不清，但配图仍能辨认：一座残破戏台，台下黑压压地坐着许多“人”。那些“人”的姿势太整齐了，不像活人。

[faded]“青石镇戏台鬼戏又唱，三具尸体连夜离镇……”[/faded]

你心中一动。这戏台、这尸体，仿佛和眼前山村隔着千山万水，又仿佛只隔了一层薄薄的纸。

你把报纸折好，塞进了怀里。也许只是巧合。也许不是。`,
        effects: { sanity: -3, yin: 5, addItem: '青石镇旧报纸' },
        choices: [
            { text: '起身进村', next: 'to_old_house' }
        ]
    },

    huimen_easter_paper_doll: {
        title: '纸人残影',
        text: `你凑近灵堂里的纸扎人。

它的眉眼与记忆中的“云秀”并不相同，可那种被纸壳封住的绝望如出一辙。纸人没有眼睛，你却觉得它在看着你，看着你身后的某段过去。

[whisper]“替身的纸，守夜的灰，都是同一双手扎出来的。”[/whisper]

你猛然回头，身后空无一人。`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '后退一步', next: 'to_old_house' }
        ]
    },

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
    },

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
    },

    tishen_easter_fox_mark: {
        title: '青丘纹',
        text: `你蹲下身，看清了纸人衣角的纹样。

那不是寻常纸扎铺会用的云纹，而是九尾狐绕月的图腾。你只在深山古庙里见过类似的石刻，老人们说那是青丘山的标记。

纸人忽然动了一下。不是风，是衣角自己抖了抖，像有生命在纸壳下呼吸。

[red]“你认得我？”[/red] 纸人的嘴里发出细不可闻的声音。

你没有回答。`,
        effects: { sanity: -4, yin: 6 },
        choices: [
            { text: '撕掉那片衣角', next: 'notice_parents' }
        ]
    },

    heniang_easter_opera_dress: {
        title: '戏服红裳',
        text: `你望向河中那件红裳，指尖触到戏服特有的刺绣。

不是嫁衣，是戏台上的行头。水波荡漾间，你仿佛听见锣鼓声从很远的地方传来，还有一声清越的唱腔，唱的是“魂归何处”。

[faded]“戏台塌了二十年，戏服却漂到了这里。”[/faded]

你把目光移开。它缓缓漂向下游，像一场没有观众的落幕。`,
        effects: { sanity: -4, yin: 7, addItem: '湿戏服碎片' },
        choices: [
            { text: '继续沿河寻找', next: 'walk_riverbank' }
        ]
    },

    hujia_easter_zhou_debt: {
        title: '周家债',
        text: `狐女的眼神变了。

“你竟然知道周家。”她轻声说，声音里第一次没有了戏谑。

[whisper]“周家欠的不只是我的命。井底那位、戏台那位、河边那位，都姓周，也都不姓周。”[/whisper]

她不再解释，只是伸手抚过你的眉心。你感到一阵刺痛，仿佛有什么东西被打通了。

“既然你知道，便该明白：答应我，就是答应所有被周家辜负的人。”`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '追问其他“被辜负的人”', next: 'ask_why_chosen' }
        ]
    },

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

/**
 * 在当前加载的故事数据中注入彩蛋
 */
export function applyEasterEggs() {
    if (!Huimen.StoryData || !Huimen.CurrentStory) return;

    const storyId = Huimen.CurrentStory.id;

    // 注入新场景
    Object.entries(EASTER_EGG_SCENES).forEach(([sceneId, scene]) => {
        if (!Huimen.StoryData[sceneId]) {
            Huimen.StoryData[sceneId] = scene;
        }
    });

    // 注入额外选择
    Object.entries(EASTER_EGG_CHOICES).forEach(([key, choices]) => {
        const [targetStoryId, sceneId] = key.split(':');
        if (targetStoryId !== storyId) return;

        const scene = Huimen.StoryData[sceneId];
        if (!scene) return;

        // 若场景没有 choices 数组且不是结局场景，则创建一个
        if (!Array.isArray(scene.choices) && !scene.ending) {
            scene.choices = [];
        }
        if (!Array.isArray(scene.choices)) return;

        choices.forEach(choice => {
            const exists = scene.choices.some(c => c.text === choice.text && (c.next === choice.next || c.ending === choice.ending));
            if (!exists) {
                scene.choices.push(choice);
            }
        });
    });
}
