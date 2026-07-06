/**
 * 《ganshi》场景模块：ask
 */

export const scenes = {
    ask_corpse_laugh: {
        title: '尸笑',
        text: `"你笑什么？" 你问尸体。

尸体没有回答。但它的嘴越咧越大，嘴角一直裂到耳根。

你想起师父说过：尸体发笑，要么是有冤，要么是有诈。

"你有什么冤屈？" 你问。

尸体的笑声停了。它的眼睛流出了黑色的液体，顺着脸颊往下淌。

[whisper]"我……不是……病死……"[/whisper] 它说，"是……被毒死……"`,
        effects: {
            sanity: -15,
            yin: 10,
            setFlag: 'knowsPoisoned'
        },
        choices: [
            {
                text: '问他被谁毒死',
                next: 'ask_who_poisoned'
            },
            {
                text: '说会替他报仇',
                next: 'promise_revenge_corpse',
                effects: { setFlag: 'promisedRevenge' }
            },
            {
                text: '你理智尚存，没有被尸笑吓住',
                next: 'calm_corpse_laugh',
                condition: { sanityAbove: 80 },
                hidden: true,
                effects: { sanity: 5 }
            }
        ]
    },

    // 止笑（新增分支）,

    ask_female_identity: {
        title: '问她是谁',
        text: `你停止念咒，问女尸："你是谁？"

女尸没有回答。她的眼睛一直看着你，眼神里没有敌意，只有一种说不清的情绪。

"你不会说话？" 你问。

女尸缓缓摇头。

"你是死人还是活人？"

女尸想了想，又摇头。

[red]她也不知道自己是什么。[/red]

你注意到她的嫁衣上绣着一个"囍"字，但"囍"字是倒挂的。这是冥婚的嫁衣。`,
        effects: {
            sanity: -10,
            yin: 5
        },
        choices: [
            {
                text: '问她是不是被配了冥婚',
                next: 'ask_ghost_marriage'
            },
            {
                text: '继续赶路，不与她纠缠',
                next: 'continue_journey'
            }
        ]
    },

    ask_who_poisoned: {
        title: '问谁下毒',
        text: `"谁毒死你？" 你问。

尸体的嘴唇动了动："县太爷……和县丞……他们……贪了赈灾银……我发现了……"

[red]原来这账房先生不是病死，是被人灭口。[/red]

"你尸体送回去，他们就不怕东窗事发？" 你问。

"他们……想让我在半路上……变成厉鬼……" 尸体说，"然后……杀了你……毁尸灭迹……"

话音刚落，尸体的眼睛突然睁开，露出漆黑的瞳孔。`,
        effects: {
            sanity: -20,
            yin: 15
        },
        choices: [
            {
                text: '用黄符重新镇压',
                next: 'suppress_again'
            },
            {
                text: '说要帮他申冤',
                next: 'promise_revenge_corpse'
            }
        ]
    },

    ask_ghost_marriage: {
        title: '问冥婚',
        text: `"你是被配了冥婚？" 你问。

女尸缓缓点头。她的手指向自己的嫁衣，又指向自己的胸口。

你掀开她的嫁衣领口，看见她的心口处有一道伤疤。伤疤是新的，还在渗血。

[red]她是被活埋的。[/red]

"你是被活埋的新娘？" 你问。

女尸点头，眼泪从眼角流下来。但尸体的眼泪不是水，是一种黑色的粘液。

"你的夫家是谁？" 你问。

女尸张开嘴，艰难地吐出两个字：

[whisper]"周家。"[/whisper]`,
        effects: {
            sanity: -20,
            yin: 15,
            setFlag: 'knowsGhostBride'
        },
        choices: [
            {
                text: '说要送她回娘家',
                next: 'send_to_family'
            },
            {
                text: '说要带她去找周家报仇',
                next: 'help_revenge_zhou',
                effects: { setFlag: 'helpZhouRevenge' }
            },
            {
                text: '我见过另一个被活埋的新娘，她要的只是一个公道',
                next: 'bride_mercy',
                condition: { flag: 'xiulanMercy' }
            }
        ]
    },

    ask_if_alive: {
        title: '问是否活着',
        text: `"你还活着吗？" 你颤抖着问。

女尸——不，女子——缓缓坐起来。她看着你，眼神迷茫。

"我……我不知道……" 她说，"我记得我在花轿里，然后有人捂住了我的嘴……再醒来，就在这里了。"

她低头看自己的嫁衣，又看自己的手："我……我是不是已经死了？"

你探她的脉搏。很微弱，但确实有。

"你没死。" 你说，"你是被活埋后又被当成尸体送来了。"

女子愣住了，然后开始发抖。`,
        effects: {
            sanity: -10,
            yin: -10,
            setFlag: 'womanAlive'
        },
        choices: [
            {
                text: '带她逃走',
                next: 'escape_with_woman'
            }
        ]
    },

    ask_tian_grudge: {
        title: '问田姓恩怨',
        text: `"前辈，我师父做过什么对不起您的事？" 你问。

火光中，一个苍老的身影渐渐显现。他是一个穿着旧式道袍的老人，但身体半透明，显然是个鬼。

"三十年前，" 老人说，"我和你师父同拜一个师父学艺。我们约定，学成后一起开赶尸铺子。"

"但后来呢？"

"后来你师父偷了我的赶尸秘籍，还把我推下山崖。" 老人说，"我死后，尸体被野狗吃了，魂魄被困在这洞里。"

你沉默了。你师父确实提到过一位"早逝的师兄"，但从未说过是他害的。

"前辈，" 你说，"我师父已经死了。您若要报仇，找我便是。但请放过这三具尸体。"`,
        effects: {
            sanity: -10,
            setFlag: 'knowsMasterSin'
        },
        choices: [
            {
                text: '愿意为师父赎罪',
                next: 'atone_for_master'
            },
            {
                text: '说师父的错不该由你承担',
                next: 'refuse_inherit_sin'
            }
        ]
    }
};
