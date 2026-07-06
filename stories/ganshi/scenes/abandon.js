/**
 * 《ganshi》场景模块：abandon
 */

export const scenes = {
    abandon_corpses: {
        title: '弃尸而逃',
        text: `你放下铜铃，转身离开山洞。

身后传来尸体重重倒地的声音。你没有回头。

你独自走出山洞，走进雨里。

但你没走出多远，就听见身后传来沙沙声。你回头，看见三具尸体自己站了起来，排成一列，跟在你身后。

"你们……" 你愣住了。

账房先生的尸体说："你不带我们，我们就自己走。"

女尸说："我只跟着你。"

青年尸体说："我们的仇还没报。"

[red]你逃不掉了。[/red]`,
        effects: {
            sanity: -30,
            yin: 25
        },
        ending: 'hauntedByCorpses'
    }
};
