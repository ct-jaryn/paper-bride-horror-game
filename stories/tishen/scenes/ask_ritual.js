/**
 * 《替身》场景模块：ask_ritual
 * 关于替身仪式与救父选择的对话场景
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
    }
};
