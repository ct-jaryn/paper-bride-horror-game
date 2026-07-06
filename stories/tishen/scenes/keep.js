/**
 * 《tishen》场景模块：keep
 */

export const scenes = {
    keep_smashing: {
        title: '同归于尽',
        text: `你发疯似的举起铁锹，一下又一下砸向纸人。

纸人的手臂断了，腿断了，头滚到一边。每砸一下，你身上就 corresponding 出现一个伤口。你的额头开始流血，你的手腕开始流血，你的腿开始站不稳。

但你停不下来。

[red]你砸的不是纸人。是你自己。[/red]

最后一锹落下，纸人碎成了一地纸屑。你也跪倒在地，看着自己的双手慢慢变成纸浆的颜色。

母亲冲出来，尖叫着你的名字。可你已经听不清了。`,
        effects: {
            sanity: -30,
            yin: 30
        },
        choices: [
            {
                text: '你已无力回天',
                next: '',
                ending: 'hidden_burn_my_remains'
            }
        ]
    },

    keep_resisting: {
        title: '继续反抗',
        text: `你拼命挣扎，用铁锹砍断树根，向院门跑去。

院门在你眼前打开了。不是被风吹开的，是被一只手推开的。

门外站着一个人。是你自己。

不，是纸人。它不知道什么时候已经变成了你的样子，穿着你的衣服，连手机都拿着你的。

"你跑什么？" 它说，"我才是要出去的那个。你留下。"`,
        effects: {
            sanity: -35,
            yin: 25
        },
        ending: 'replaced'
    }
};
