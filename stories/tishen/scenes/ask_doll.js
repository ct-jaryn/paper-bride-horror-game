/**
 * 《替身》场景模块：ask_doll
 * 与纸人直接对话的场景
 */

export const scenes = {
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
