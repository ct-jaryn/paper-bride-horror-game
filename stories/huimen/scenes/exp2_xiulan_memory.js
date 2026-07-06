/**
 * 《回门》场景模块：exp2_xiulan_memory
 */

export const scenes = {
    huimen_exp2_xiulan_memory_childhood: {
        title: '秀兰的记忆 · 童年',
        text: `你忽然感到一阵眩晕。

再睁眼时，你站在一座小院里。院子里有一棵桂花树，树下坐着一个小女孩，正在绣花。

"秀兰。" 你脱口而出。

小女孩抬起头，笑了："你怎么知道我的名字？"`,
        effects: {"sanity":-3,"yin":1},
        choices: [{"text":"陪她绣花","next":"huimen_exp2_xiulan_memory_childhood_sew","effects":{"yin":-3}},{"text":"告诉她以后的事","next":"huimen_exp2_xiulan_memory_childhood_warn","effects":{"yin":2}},{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_childhood_sew: {
        title: '秀兰童年绣花',
        text: `你坐下来，看秀兰绣花。

她绣的是一对鸳鸯，针脚细密。"我娘说，女子要学会绣花，将来好做嫁衣。" 她说。

"你绣得很好。" 你说。

秀兰开心地笑了，那笑容里没有一丝阴霾。`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp2_saw_xiulan_childhood"},
        choices: [{"text":"继续看她的后来","next":"huimen_exp2_xiulan_memory_love","effects":{"yin":1}},{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_childhood_warn: {
        title: '警告',
        text: `你想告诉她以后的事，却发现自己发不出声音。

秀兰疑惑地看着你："你怎么了？"

你拼命摇头。你知道，历史不能改变。你能做的，只是记住她此刻的笑容。`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_love: {
        title: '秀兰的记忆 · 相爱',
        text: `你又进入一段记忆。

这次是在河边。年轻的秀兰和一个穿学生装的男子站在一起。男子递给她一束野花，她脸红地接过。

"周文，" 她说，"你考上县里的学堂了，以后会不会忘了我？"

"不会。" 男子说，"我一辈子都不会忘。"`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"继续看","next":"huimen_exp2_xiulan_memory_love_more","effects":{"yin":1}},{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_love_more: {
        title: '誓言',
        text: `周文从怀里掏出一块玉佩，递给秀兰。

"这是我娘留给我的。" 他说，"等我娶你那天，再给你戴上。"

秀兰接过玉佩，贴在心口。

[red]你认出那块玉佩。它在祖母的遗物里。[/red]`,
        effects: {"sanity":-5,"yin":2,"addItem":"记忆中的玉佩（虚幻）"},
        choices: [{"text":"继续看下去","next":"huimen_exp2_xiulan_memory_pregnancy","effects":{"yin":1}},{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_pregnancy: {
        title: '秀兰的记忆 · 怀孕',
        text: `画面来到一间小屋。

秀兰坐在床边，手放在微微隆起的肚子上。她脸上带着幸福的笑，正在缝制一件小衣服。

"宝宝，" 她说，"你爹会来接我们的。我们要离开这里，去县里，去更大的地方。"`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"告诉她真相","next":"huimen_exp2_xiulan_memory_pregnancy_cry","effects":{"yin":3}},{"text":"安静地看","next":"huimen_exp2_xiulan_memory_pregnancy_silent","effects":{"yin":-3}}],
    }
,
    huimen_exp2_xiulan_memory_pregnancy_cry: {
        title: '崩溃',
        text: `你忍不住说："他不会来的。"

秀兰的笑容僵住了。她看着你，眼眶里慢慢涌出泪水："你说什么？"

你再也说不出话。画面开始扭曲，秀兰的哭声像刀子一样刺进你心里。`,
        effects: {"sanity":-10,"yin":5},
        choices: [{"text":"继续看","next":"huimen_exp2_xiulan_memory_betrayal","effects":{"yin":1}},{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_pregnancy_silent: {
        title: '静默',
        text: `你静静地看着秀兰。

她缝完最后一件小衣服，把它叠好，放在枕边。然后她轻轻哼起一首歌，哄肚子里的孩子睡觉。

[whisper]"睡吧，睡吧，我的宝贝……"[/whisper]

你泪流满面，却不敢出声。`,
        effects: {"sanity":-3,"yin":-5,"setFlag":"huimen_exp2_saw_xiulan_pregnancy"},
        choices: [{"text":"继续看","next":"huimen_exp2_xiulan_memory_betrayal","effects":{"yin":1}},{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_betrayal: {
        title: '秀兰的记忆 · 背叛',
        text: `画面来到秀兰被拖走的那天。

几个壮汉闯进小屋，把秀兰按在床上。周文的母亲站在门口，冷冷地说："丢尽周家的脸。活埋。"

秀兰挣扎着，喊周文的名字。周文被关在东厢房，砸门的声音很远。

[red]她最后看见周文，是在门缝里。他哭着看她，却打不开门。[/red]`,
        effects: {"sanity":-15,"yin":5,"setFlag":"huimen_exp2_saw_xiulan_betrayal"},
        choices: [{"text":"退出这段痛苦的记忆","next":"huimen_exp_village_street","effects":{"yin":1}},{"text":"抱住秀兰","next":"huimen_exp2_xiulan_memory_betrayal_hug","effects":{"sanity":-5,"yin":-5}}],
    }
,
    huimen_exp2_xiulan_memory_betrayal_hug: {
        title: '背叛记忆拥抱',
        text: `你冲上去，抱住秀兰。

你的身体穿过了她，但她似乎感觉到了。她抬起头，朝你的方向看了一眼。

"是谁？" 她问。

"是一个会记住你的人。" 你说。

画面渐渐淡去。`,
        effects: {"sanity":5,"yin":-10,"setFlag":"huimen_exp2_hugged_xiulan_in_memory"},
        choices: [{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_wedding: {
        title: '秀兰的记忆 · 嫁衣',
        text: `你进入一段新的记忆。

秀兰穿着一身大红嫁衣，坐在喜房里。她盖着红盖头，手里攥着一块玉佩。

"周文说，今夜就来娶我。" 她轻声说，"我等这一天，等了三年。"`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"掀开她的盖头","next":"huimen_exp2_xiulan_memory_wedding_unveil","effects":{"yin":2}},{"text":"陪她等","next":"huimen_exp2_xiulan_memory_wedding_wait","effects":{"yin":-3}}],
    }
,
    huimen_exp2_xiulan_memory_wedding_unveil: {
        title: '掀盖头',
        text: `你掀开她的盖头。

盖头下的秀兰笑得很美，眼角有一颗泪痣。她看着你，不，是看着周文的方向："你来了。"

画面突然扭曲。喜房变成了井底，秀兰穿着同样的嫁衣，沉在血红的井水里。`,
        effects: {"sanity":-10,"yin":5},
        choices: [{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}},{"text":"轻轻掀开秀兰的盖头","next":"huimen_exp_bride_veil_alt"}],
    }
,
    huimen_exp2_xiulan_memory_wedding_wait: {
        title: '婚礼记忆等待',
        text: `你陪秀兰坐着。

她等了很久，红烛烧了一半，窗外的天从黑变灰。她脸上的笑容渐渐淡了。

"他不会来了。" 她说，"我知道。"

[red]可她还是穿着嫁衣，等到了天亮。[/red]`,
        effects: {"sanity":-5,"yin":-5,"setFlag":"huimen_exp2_saw_xiulan_wedding_wait"},
        choices: [{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_well: {
        title: '秀兰的记忆 · 井底',
        text: `你来到秀兰被活埋时的记忆。

井水冰冷，秀兰蜷缩在井底，双手护着肚子。她的指甲在井壁上刻字，刻到指甲翻起，血把井水染红。

"周文，我恨你。周文，我等你。"`,
        effects: {"sanity":-15,"yin":5,"setFlag":"huimen_exp2_saw_xiulan_well_memory"},
        choices: [{"text":"帮她刻字","next":"huimen_exp2_xiulan_memory_well_help","effects":{"sanity":-5,"yin":-5}},{"text":"握住她的手","next":"huimen_exp2_xiulan_memory_well_hold","effects":{"sanity":5,"yin":-10}}],
    }
,
    huimen_exp2_xiulan_memory_well_help: {
        title: '井中相助刻字',
        text: `你帮她在井壁上刻字。

你们一起刻："周秀兰，民国二十三年卒。周家所害。"

刻完，秀兰看着你，眼泪和井水混在一起："谢谢你。至少有人知道我是怎么死的。"`,
        effects: {"sanity":-5,"yin":-5},
        choices: [{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_xiulan_memory_well_hold: {
        title: '握手',
        text: `你握住她的手。

她的手很凉，但你没有松。你陪她在井底坐着，直到她的呼吸停止。

"原来我不是一个人死的。" 她说，"谢谢你陪我。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_held_xiulan_in_well_memory"},
        choices: [{"text":"退出记忆","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
