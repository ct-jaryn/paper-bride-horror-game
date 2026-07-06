/**
 * 《tishen》场景模块：ask
 */

export const scenes = {
    ask_how_long: {
        title: '问扎了多久',
        text: `"这纸人……扎了多久了？" 你问。

母亲低下头，声音很轻："五年。你一走，你爸就找人扎了。"

五年。正好是你离开家的时间。

"这五年来，" 母亲继续说，"纸人替你受了所有灾。你在外面工作顺利，没病没痛，都是它的功劳。"

"可它用的是我的八字！" 你急了，"它替我受灾，和我自己受有什么区别？"

母亲抬起头，眼神里有一种你读不懂的东西："区别就是……灾可以转嫁。纸人病了，烂了，烧了，你就好了。"

[whisper]她的话让你脊背发凉。[/whisper]

你再看那纸人。它的嘴角似乎咧得更大了。`,
        effects: {
            sanity: -10,
            yin: 10
        },
        choices: [
            {
                text: '说要把纸人烧掉',
                next: 'want_burn_doll',
                danger: true
            },
            {
                text: '进屋看父亲情况',
                next: 'see_father'
            },
            {
                text: '院门外传来咳嗽声，守夜人老张提着灯笼经过',
                npc: 'lao_zhang',
                npcNode: 'start'
            }
        ]
    },

    ask_other_way: {
        title: '问别的办法',
        text: `"没有别的办法吗？" 你问。

母亲沉默了很久，才说："有。让纸人认主。"

"认主？"

"纸人现在用的是你的八字，但它还没有名字。如果你给它起名字，再喂它一滴你的血，它就会认你为主。到时候，你让它替你死，它就替你死。你让它离开，它就离开。"

"那父亲呢？"

"认主之后，纸人和你爸之间的联系就断了。你爸……可能会慢慢恢复。" 母亲说，"但认主也有风险。"

"什么风险？"

"纸人会越来越像你。" 母亲看着你，"到最后，可能连你自己都分不清，谁是真的。"`,
        effects: {
            yin: 5,
            setFlag: 'knowsRitual'
        },
        choices: [
            {
                text: '决定给纸人认主',
                next: 'perform_ritual'
            },
            {
                text: '这太危险了，再想想',
                next: 'think_more'
            },
            {
                text: '你注意到院子里阴气稀薄，纸人似乎还未成型',
                next: 'yin_weak_doll',
                condition: { yinBelow: 10 },
                hidden: true,
                effects: { sanity: 5 }
            },
            {
                text: '去青石镇找周氏纸扎铺问个清楚',
                next: 'visit_zhou_shop',
                effects: { sanity: -5, yin: 5 }
            }
        ]
    },

    // 阴气薄弱（新增分支）,

    ask_save_father: {
        title: '问怎么救爸',
        text: `"怎么救我爸？" 你抓住母亲的手。

母亲看着你，眼里有泪："只有一个办法。你回到纸人里面，让纸人回到你身体里。"

"什么意思？"

"当年扎纸人的时候，你爸从你衣服上剪了一块布，从梳子上取了几根头发，还……还从你小时候的照片上描了像。纸人里有你的魂。"

"你要我把魂收回来？"

"对。" 母亲说，"但魂一收回来，你在外面这五年的顺遂，就都会变成灾。你赚到的钱会没，你健康的身体会病，你喜欢的人会离开你。"

"那纸人呢？"

"纸人会变回普通的纸。" 母亲说，"你爸也会慢慢好起来。"

你沉默了。`,
        effects: {
            sanity: -10,
            yin: 5,
            setFlag: 'knowsExchange'
        },
        choices: [
            {
                text: '愿意收回魂魄救父亲',
                next: 'reclaim_soul',
                effects: { setFlag: 'willingSacrifice' }
            },
            {
                text: '拒绝，让纸人继续承受',
                next: 'refuse_exchange',
                effects: { sanity: -10, yin: 10 }
            }
        ]
    },

    ask_doll_meaning: {
        title: '问纸人意义',
        text: `"你到底想怎样？" 你问纸人。

"我不想怎样。" 纸人说，"我只是想活。"

"你不是已经活了吗？"

"这不是活。" 纸人低头看着自己的纸手，"我会痛，会冷，会害怕，但我没有心跳。我会笑，会哭，会想你，但我不是人。"

"你爸把我扎出来，是为了让我替他儿子受苦。可他没想到，我会真的爱上他儿子。"

[red]纸人的话让你浑身发冷。[/red]

"我想变成你。" 纸人说，"不是取代你，是成为你。这样我就能光明正大地活，光明正大地喊他爸。"`,
        effects: {
            sanity: -20,
            yin: 10
        },
        choices: [
            {
                text: '说你永远不会同意',
                next: 'never_agree'
            },
            {
                text: '问它如果同意会怎样',
                next: 'ask_if_agree'
            }
        ]
    },

    ask_what_wants: {
        title: '问它要什么',
        text: `"你想干什么？" 你问。

"我想看看你的房间。" 门外的声音说，"我想看看真正的你住的地方。"

"你不是我。"

"我可以是。" 声音说，"只要你把门打开，让我进去待一会儿。我就走。"

你犹豫了一下。这个纸人如果真的想害你，完全可以破门而入。它似乎在遵守某种规则。

"你保证只待一会儿？" 你问。

"我保证。" 它说，"纸人不骗人。"`,
        effects: {
            yin: 5
        },
        choices: [
            {
                text: '开门让它进来',
                next: 'let_doll_in'
            },
            {
                text: '不开门',
                next: 'stay_silent'
            }
        ]
    },

    // 放纸人进门（新增场景，补全引用）,

    ask_doll_leave: {
        title: '问它离开',
        text: `"你愿意离开吗？" 你问，"不再做我的替身。"

纸人看着你，眼中第一次出现了类似人的犹豫。

"离开？" 它重复这个词，像是在学说话，"我能去哪里？"

"哪里都行。" 你说，"只要不再被人利用。"

它沉默了很久，然后点点头："那你替我告诉父亲，我不是妖怪。"

说完，它转身走向门外，身影慢慢融化在夜色里。`,
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: 'doll_left_peacefully'
            // 注意：这里没有 addItem 或 ending，继续主线
        },
        choices: [
            {
                text: '去告诉父亲',
                next: 'see_father'
            }
        ]
    },

    ask_if_agree: {
        title: '问同意会怎样',
        text: `"如果我同意，会怎样？" 你问。

纸人的眼睛亮了起来："我会进入你的身体，你会进入我的身体。一天之后，我们再换回来。"

"就一天？"

"就一天。" 纸人说，"我想用人的身体，吃一次饭，睡一次觉，感受一次心跳。"

你犹豫了。这个要求听起来不算过分。

但母亲的话回响在你耳边："纸人不骗人。"

[red]纸人不骗人，但纸人也不会把话说全。[/red]`,
        effects: {
            yin: 5
        },
        choices: [
            {
                text: '同意换一天',
                next: 'agree_one_day',
                effects: { setFlag: 'agreedSwap' }
            },
            {
                text: '拒绝',
                next: 'never_agree'
            }
        ]
    },

    ask_doll_truth: {
        title: '纸人真心',
        text: `"你到底想要什么？" 你强迫自己镇定。

纸人歪着头，像是在认真思考这个问题。

"我想要一个名字。" 它说，"你爸扎我的时候，没有给我起名字。我用你的八字，却没有自己的名字。没有名字，我就不能转世，不能投胎，只能永远站在这里。"

"可你刚才说想变成我。"

"因为变成你，我就不用再当无名的纸人了。" 它说，"但如果你愿意给我起名字，承认我是一个独立的魂，我也可以不变成你。"

你看着它。月光下，它的脸真的很像你，但眼神里有你没有的东西——

[red]一种对"活着"的渴望。[/red]`,
        effects: {
            sanity: -5,
            yin: 5
        },
        choices: [
            {
                text: '给它起名字，承认它',
                next: 'give_doll_name',
                effects: { setFlag: 'gaveName' }
            },
            {
                text: '拒绝，说它只是纸',
                next: 'deny_doll_identity',
                effects: { yin: 15 }
            },
            {
                text: '既然你这么想活，那我把身体让给你',
                next: 'burn_my_remains',
                condition: { flag: 'knowsExchange' },
                hidden: true,
                effects: { sanity: -10, yin: 20 }
            },
            {
                text: '既然你没有名分，那我跟你拜堂成亲',
                next: 'paper_wedding_proposal',
                effects: { yin: 5 }
            }
        ]
    },

    // 焚我残躯（新增隐藏分支）,

    ask_how_destroy: {
        title: '问怎么消灭',
        text: `"怎么才能彻底消灭你？" 你问。

纸人指指自己的胸口："这里，有你爸写下的话。烧了它，我就没了。"

"什么话？"

"'代吾儿受难'。" 纸人说，"只要这五个字还在，我就必须替你受难。你想让我消失，就要让你爸亲口承认，他不再需要替身。"

"可我爸病成那样……"

"所以你要救他，还是要消灭我？" 纸人笑了，"你选一个。"`,
        effects: {
            sanity: -10
        },
        choices: [
            {
                text: '选择救父亲',
                next: 'reclaim_soul'
            },
            {
                text: '选择消灭纸人',
                ending: 'burnedTogether'
            }
        ]
    }
};
