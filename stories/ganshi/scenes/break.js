/**
 * 《ganshi》场景模块：break
 */

export const scenes = {
    break_through_corpse: {
        title: '尸群中突围',
        text: `你抓起铜铃和火把，冲向洞口。

三具尸体伸出手，想要拦住你。你用火把逼退它们，又用铜铃震开它们。

你冲出山洞，头也不回地跑。

但你跑出很远后，发现身后只有两具尸体跟了上来。

女尸没有跟来。

你回头望向山洞。洞口站着那个穿红嫁衣的女子，正在朝你挥手告别。

[red]她不是不想走，她是走不了。[/red]`,
        effects: {
            sanity: -20,
            yin: 15
        },
        ending: 'escapedWithoutHer'
    }
};
