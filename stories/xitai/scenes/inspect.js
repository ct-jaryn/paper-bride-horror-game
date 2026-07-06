/**
 * 《xitai》场景模块：inspect
 */

export const scenes = {
    inspect_burn_mark: {
        title: '检查焦痕',
        text: `你仔细查看那块烧焦的人形痕迹。

痕迹的边缘很整齐，不像是火烧出来的，更像是有人被固定在这里烧。痕迹的头部位置，嵌着一枚发黑的银钗。

你捡起银钗。钗身上刻着两个小字：

[faded]"云袖"[/faded]

这就是当年云袖被烧死的位置。她不是被坍塌的戏台砸死的，她是被人绑在这里烧死的。

[red]这是一场谋杀。[/red]

远处传来锣鼓声，戏台上的幕布无风自动。`,
        effects: {
            sanity: -15,
            yin: 10,
            addItem: '云袖的银钗'
        },
        choices: [
            {
                text: '把银钗放回原处',
                next: 'return_hairpin',
                effects: { yin: -5 }
            },
            {
                text: '带走银钗作为证据',
                next: 'take_hairpin',
                effects: { yin: 10 }
            }
        ]
    }
};
