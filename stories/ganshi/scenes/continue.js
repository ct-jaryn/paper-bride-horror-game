/**
 * 《ganshi》场景模块：continue
 */

export const scenes = {
    continue_journey: {
        title: '夜路',
        text: `你决定继续赶路。

雨越下越大，山路越来越难走。三具尸体跟着你，铜铃在雨中发出沉闷的响声。

走到一处山洞时，你决定休息片刻。你把尸体排成一排，让他们靠墙站着。

洞口的风吹进来一卷破烂的黄纸，滚到你脚边。你捡起来一看，是一个被雨水泡烂的纸人，只剩上半身，脸上还画着眉眼唇红。纸人胸口贴着一张残破的黄签，隐约可见"周氏"二字。

你把纸人扔回雨里，心里莫名发毛。

你点燃一堆火，烤干湿透的衣服。

火光中，三具尸体的影子投在洞壁上。你数了数——

[red]有四个影子。[/red]

你猛地抬头。洞里只有你和三具尸体。

但墙上确实有四个影子。`,
        effects: {
            sanity: -20,
            yin: 15,
            visual: 'flicker'
        },
        choices: [
            {
                text: '查看洞深处',
                next: 'check_cave_depth'
            },
            {
                text: '大声喝问谁在那里',
                next: 'shout_who'
            },
            {
                text: '你手中铜铃微颤，第四个影子似乎惧怕铃音',
                next: 'copper_bell_control',
                condition: { hasItem: '铜铃' },
                hidden: true,
                effects: { sanity: 5, yin: -5 }
            },
            {
                text: '洞口蹲着一个抽旱烟的老人，像是在等人',
                npc: 'zhang_guard',
                npcNode: 'start',
                custom: true
            }
        ]
    },

    // 御铃（新增分支）
};
