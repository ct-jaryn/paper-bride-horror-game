/**
 * 《ganshi》场景模块：inspect
 */

export const scenes = {
    inspect_female_corpse: {
        title: '女尸',
        text: `你走到第三具尸体前，掀开白布。

白布下是一个年轻女子，穿着大红嫁衣。她的脸很白，但不是死人的苍白，而是一种剔透的白，像玉。

你探她的鼻息。没有。

摸她的心口。没有心跳。

但她确实是温的。

更诡异的是，她的手腕上系着一根红绳，红绳的另一端，系在你的铜铃上。

你下意识翻开她嫁衣的领子。内衬角落里，印着一方小小的朱红印章，和这大红喜服一点都不相称：

[faded]"青石镇 周氏纸扎铺"[/faded]

[red]你什么时候把她的手腕和铜铃系在一起的？[/red]

你不记得了。`,
        effects: {
            sanity: -20,
            yin: 15,
            setFlag: 'sawFemaleFace'
        },
        choices: [
            {
                text: '解开红绳',
                next: 'untie_red_rope',
                effects: { yin: 10 }
            },
            {
                text: '重新盖好白布',
                next: 'cover_corpse_again',
                effects: { yin: -5 }
            },
            {
                text: '你曾为秀兰正名，这次也想给柳红一个公道',
                next: 'xiulan_mercy_liuhong',
                condition: { flag: 'xiulanMercy' },
                hidden: true,
                effects: { sanity: 5, yin: -10 }
            }
        ]
    },

    // 柳红之变（新增分支）,

    inspect_youth_corpse: {
        title: '检查少年尸体',
        text: `你掀开青年尸体的黄符。

青年尸体的眼睛是睁开的，直直地看着天空。他的嘴微微张开，像是在喊什么。

你检查他的身体，发现他的后背有一道长长的伤口，从脖子一直延伸到腰。

[red]这是刀伤。被人从背后砍死的。[/red]

你想起委托人说的："外出打工，病死异乡。"

病死的人，背上不会有刀伤。

三具尸体，没有一个是正常死亡。`,
        effects: {
            sanity: -15,
            yin: 10,
            setFlag: 'knowsAllMurdered'
        },
        choices: [
            {
                text: '决定查清真相',
                next: 'investigate_truth'
            },
            {
                text: '检查他的随身物品',
                next: 'youth_driver_token',
                effects: { sanity: -5, yin: 5 }
            }
        ]
    }
};
