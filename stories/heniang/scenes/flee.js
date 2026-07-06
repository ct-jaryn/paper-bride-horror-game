/**
 * 《heniang》场景模块：flee
 */

export const scenes = {
    flee_river: {
        title: '逃离河边',
        text: `你转身就跑。

但河水像是有意识一样，突然涨了起来，漫过你的脚踝。你感到有无数只冰冷的手在抓你的脚。

你拼命往前跑，终于跑出河水范围。回头一看，河水已经退了回去，但河面上漂浮着很多红色的花瓣。

[red]这个季节，河里根本没有花。[/red]

你瘫坐在地上，大口喘气。`,
        effects: {
            sanity: -20,
            yin: 15,
            visual: 'shake'
        },
        choices: [
            {
                text: '去找神婆想办法',
                next: 'find_shenpo'
            }
        ]
    }
};
