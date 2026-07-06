/**
 * 《回门》场景模块：exp_creature
 */

export const scenes = {
    huimen_exp_dog_bark: {
        title: '犬吠',
        text: `你经过一户人家，听见里面有狗叫。

狗叫声很凄厉，不像看家，像在哭。你凑到门缝前，看见院子里蹲着一只黑狗，黑狗的眼睛是红色的。

黑狗看见你，不叫了。它站起来，走到门边，用爪子扒门。

"你想出来？" 你问。

黑狗点点头。

你推开门，黑狗冲出来，却没有跑远，而是围着你转了三圈，然后朝村外跑去。

[red]它跑的方向，是秀兰的坟。[/red]`,
        effects: {"sanity":-3,"yin":1},
        choices: [{"text":"跟着黑狗","next":"huimen_exp_follow_dog","effects":{"yin":1}},{"text":"不管它，回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_follow_dog: {
        title: '引路',
        text: `你跟着黑狗跑。

黑狗跑得不快，时不时回头看看你。它带你绕过纸人聚集的巷子，穿过一片坟地，最后停在一座无字碑前。

无字碑上浮现出血字：

[faded]"秀兰之骨，分埋三处。井底一，庙中一，桑下一。"[/faded]

黑狗对着无字碑叫了三声，然后趴在地上，不动了。

你蹲下身，发现它已经变成了一尊石狗。`,
        effects: {"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_bone_locations"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_fox_fire: {
        title: '狐火',
        text: `村外的坟地里飘起几团绿色的火焰。

火焰忽高忽低，像是有生命一样在坟头跳跃。你想起老人讲过的狐火，说那是狐狸引路的灯笼。

一团狐火飘到你面前，停住。火光里，你看见一只狐狸的轮廓。它朝你摇了摇尾巴，然后朝树林深处跑去。

[whisper]"跟上。"[/whisper] 一个声音说，"它知道出村的路。"[/whisper]

可你也听说过，跟狐火走的人，多半回不来。`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"跟着狐火","next":"huimen_exp_follow_fox_fire","effects":{"yin":2}},{"text":"不跟，回村街","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-1}}],
    }
,
    huimen_exp_follow_fox_fire: {
        title: '狐径',
        text: `你跟着狐火走进树林。

树林里的小路不是石板路，而是落叶铺成的。每走一步，脚下的落叶就会发出"沙沙"的声响，像有人在低语。

狐火停在一棵大树下。树洞里有一面铜镜，镜子里映出的不是树林，而是村子。

"你想出去？" 狐狸的声音问，"还是想留下？"

[red]镜子里的村子正在燃烧，纸人在火中跳舞。[/red]

"这是秀兰的怨念烧起来的样子。" 狐狸说，"你出去，村子就烧。你留下，村子就还在。"`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"出去，让村子烧","next":"huimen_exp_fox_fire_escape","effects":{"sanity":-5,"yin":5}},{"text":"留下，找别的办法","next":"huimen_exp_village_street","effects":{"sanity":5,"yin":-3}}],
    }
,
    huimen_exp_fox_fire_escape: {
        title: '狐火引路',
        text: `你踏进了铜镜。

镜面像水一样包裹住你，你感到自己在下坠。下坠了很久，你落在村口的石板路上。

身后，村子正在燃烧。纸人在火中尖叫，化为灰烬。你看见秀兰站在井边，看着这场大火，脸上没有表情。

"你选了最轻松的路。" 她说，"但也是最无情的路。"

你没有回头。你沿着山路一直走，直到天亮。

可你再也没有梦见过秀兰。你只梦见火，梦见纸人在火里跳舞，梦见它们的脸都是你的脸。`,
        effects: {"sanity":-10,"yin":10},
        ending: 'huimen_exp_moonlit_escape',
    }
};
