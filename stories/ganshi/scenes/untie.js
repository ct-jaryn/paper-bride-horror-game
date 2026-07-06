/**
 * 《ganshi》场景模块：untie
 */

export const scenes = {
    untie_red_rope: {
        title: '解开红绳',
        text: `你伸手去解女尸手腕上的红绳。

红绳系得很紧，像是打了死结。你用力一扯，绳子断了。

女尸的眼睛猛地睁开，她张大嘴，发出一声尖叫。那不是鬼叫，是人的尖叫——

[scream]"啊——！"[/scream]

你吓得后退三步。

女尸的胸口开始起伏。她在呼吸。`,
        effects: {
            sanity: -25,
            yin: 20,
            visual: 'shake'
        },
        choices: [
                {
                text: '问她是不是还活着',
                next: 'ask_if_alive'
            },
            {
                text: '掐她人中',
                next: 'revive_woman'
            },
            {
                text: '她身上可能有更多秘密',
                next: 'liuHong_paper_bride',
                effects: { sanity: -10, yin: 10 }
            }
        ]
    }
};
