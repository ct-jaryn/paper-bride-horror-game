/**
 * 《hujia》场景模块：surrender
 */

export const scenes = {
    surrender_to_fox: {
        title: '向狐女投降',
        text: `你走出人群，站在狐女面前。

"我跟你走。" 你说，"别伤害村民。"

狐女满意地点点头。她牵起你的手，带你离开村子。

身后，村民们松了一口气。没有人挽留你。

你回头看了最后一眼。这个你生活了二十多年的村子，在火光中越来越远。

[red]你成了狐婿。[/red]

从此，人间少了一个猎户，青丘山多了一对狐仙夫妻。`,
        effects: {
            sanity: -20,
            yin: 20
        },
        ending: 'foxHusband'
    }
};
