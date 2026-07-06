/**
 * 《xitai》场景模块：run
 */

export const scenes = {
    run_from_backstage: {
        title: '逃出后台',
        text: `你头也不回地冲出后台。

但后台的门通向的不是戏台外，而是戏台上。

你站在台中央，面对着空荡荡的观众席。红色的灯笼一盏盏亮起，照亮了台下的"观众"。

[red]那些观众没有脸。[/red]

他们整齐地坐着，像是在等待开场。

锣鼓声响起，你被推搡着换上了一套小生戏服。戏服上有股焦糊味，像是刚从火里抢出来的。`,
        effects: {
            sanity: -30,
            yin: 25
        },
        choices: [
            {
                text: '配合演出',
                next: 'perform_opera'
            },
            {
                text: '挣脱戏服逃跑',
                next: 'tear_costume',
                effects: { sanity: -10 }
            }
        ]
    }
};
