/**
 * 《守夜》场景模块：discovery
 */

export const scenes = {
    notice_tear: {
        title: '胭脂泪',
        text: `你强迫自己冷静，不让恐惧淹没理智。

手电光重新扫过女尸的脸。她的眼睛还睁着，但这一次，你注意到她眼角有一滴暗红色的痕迹——不是血，是化了却没有干的胭脂。

戏子的妆，哭了才会花。

"你在哭？" 你轻声问。

女尸的眼珠动了动，转向你。她的嘴唇翕动，这一次你听见了一丝极轻的声音：

[whisper]"戏台……塌了……"[/whisper]

那不是威胁，是哀求。

你忽然明白，她不是来害人的。她只是一缕执念，被困在死亡的地方，反复重演最后一场戏。`,
        effects: {
            sanity: -5,
            yin: 5,
            setFlag: 'yunxiuTearSeen'
        },
        choices: [
            {
                text: '问她需要什么帮助',
                next: 'ask_her_name'
            },
            {
                text: '用手帕替她擦去泪痕',
                next: 'wipe_tear',
                effects: { sanity: 5, yin: -5 }
            }
        ]
    },

    // 擦去泪痕（新增分支）,

    wipe_tear: {
        title: '拭泪',
        text: `你掏出随身携带的纸巾，轻轻按在她眼角。

纸巾触到胭脂的瞬间，女尸的眼睛缓缓闭上了。她的嘴角不再上扬，而是恢复了入殓时的平静。

你听见一声似有似无的叹息，像是从很远的地方传来。

"谢谢你。" 一个女子的声音说，"很久……没有人对我这么好过。"

你退后一步，手电光照向门口。门还是关着的，但门板上多了一行水渍写成的字：

[faded]"还我戏台，我便归去。"[/faded]

你收起纸巾，那上面沾着的胭脂，在黑暗中泛着淡淡的桂花香。`,
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: 'yunxiuComforted'
        },
        choices: [
            {
                text: '答应帮她完成心愿',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '去档案室查她的资料',
                next: 'search_archives'
            }
        ]
    },

    close_eyes_force: {
        title: '强行合眼',
        text: `你颤抖着手，去合上她的眼皮。

手指刚碰到，她的眼皮就自动合上了。你刚松一口气，她的眼睛又睁开了。

再合上，再睁开。

再合上，再睁开。

反复三次之后，你听见她喉咙里发出"咯咯"的声音，像是有水要从里面涌出来。

[red]她的嘴突然张开，一股黑色的河水喷在你脸上。[/red]

河水腥臭刺骨，还带着水草的腥味。你踉跄后退，撞翻了香炉。

香灰撒了一地。`,
        effects: {
            sanity: -30,
            yin: 25,
            visual: 'blood'
        },
        choices: [
            {
                text: '擦干净脸，重新点香',
                next: 'light_incense'
            },
            {
                text: '咒骂她，让她安息',
                next: 'curse_corpse',
                effects: { sanity: -10 }
            },
            {
                text: '你神志恍惚，把她看成了还在喘气的人',
                next: 'corpse_as_alive',
                condition: { sanityBelow: 30 },
                hidden: true,
                effects: { sanity: -10, yin: 10 }
            }
        ]
    },

    // 生人幻影（新增分支）,

    corpse_as_alive: {
        title: '生人幻影',
        text: `你的理智像一根绷得太紧的弦，"啪"地一声断了。

眼前的女尸不再是尸体。她的胸口在起伏，她的眼皮在颤动，她的嘴唇微微张开，像是在呼吸。

"你醒了？" 你听见自己说，"你别怕，我是守夜的。"

女尸——不，那个年轻的女子——缓缓坐起来。她的戏服上还有烧焦的痕迹，但她的脸是温暖的，带着一点羞涩的笑。

"我唱得好吗？" 她问，"他们说，只要我唱完，就能回家。"

"你唱得很好。" 你说。

她笑了，伸手握住你的手。那只手是冰凉的，但你感觉不到。你的大脑已经替你把她改写成了一个活人。

"那你能送我回家吗？" 她问，"我想回青石镇。"

你点点头，任由她牵着你的手，向门外走去。

[red]走廊的尽头，不是出口，而是一座燃烧的戏台。[/red]`,
        effects: {
            sanity: -20,
            yin: 20
        },
        choices: [
            {
                text: '跟着她走向戏台',
                next: 'follow_her',
                ending: 'duetWithGhost'
            },
            {
                text: '猛掐自己大腿，强迫自己清醒',
                next: 'light_incense',
                effects: { sanity: -10 }
            }
        ]
    }
};
