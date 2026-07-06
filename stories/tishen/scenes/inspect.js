/**
 * 《tishen》场景模块：inspect
 */

export const scenes = {
    inspect_doll_night: {
        title: '纸人夜话',
        text: `夜里，你来到院子。

月光透过槐树叶，在地上投下斑驳的影子。纸人还站在小桌旁，红布盖着头。

你鼓起勇气，掀开红布。

[red]纸人的脸变了。[/red]

下午看它时，它还是你年轻时的样子。现在，它的眉眼、鼻梁、嘴型，都更像现在的你。甚至连你最近长出的那道法令纹，都出现在它脸上。

"你来了。" 纸人突然开口。

你的血液仿佛凝固了。

"我替你病了五年，" 纸人说，"现在，该你替我还了。"`,
        effects: {
            sanity: -35,
            yin: 25,
            visual: 'paper-doll'
        },
        choices: [
            {
                text: '质问它什么意思',
                next: 'ask_doll_meaning'
            },
            {
                text: '转身就跑',
                next: 'run_from_doll',
                effects: { sanity: -10 }
            },
            {
                text: '你摸到口袋里的铜镜碎片，对准纸人的脸',
                next: 'mirror_reveal',
                condition: { hasItem: '铜镜碎片' },
                hidden: true,
                effects: { sanity: -5, yin: -10 }
            },
            {
                text: '把手按在它胸口，感受它的记忆',
                next: 'memory_exchange',
                effects: { sanity: -5, yin: 5 }
            }
        ]
    },

    // 铜镜照魂（新增分支）
};
