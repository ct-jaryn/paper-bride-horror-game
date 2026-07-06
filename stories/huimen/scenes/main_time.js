/**
 * 《回门》场景模块：main_time
 */

export const scenes = {
    shichen_hai_entry: {
        title: '亥时 · 入夜',
        text: `村口的雾气更浓了。

你抬头看天，月亮已经偏西。山村里没有钟，但你本能地感觉到——时辰变了。

[faded]戌时已过，亥时降临。[/faded]

李婆的白灯笼在雾中一晃，不见了踪影。老槐树上的纸人被风吹得沙沙作响，像是在交头接耳。

[whisper]亥时，阴阳交替。活人开始困倦，亡者开始清醒。[/whisper]

你摸了摸口袋里的东西，决定接下来的每一步都要更谨慎。`,
        effects: {"time":60,"setFlag":"shichen_hai"},
        choices: [{"text":"继续往老宅走","next":"to_old_house"},{"text":"先调查一下村口","next":"huimen_exp_village_street"}],
    }
,
    shichen_zi_entry: {
        title: '子时 · 魂醒',
        text: `一阵阴冷的风从井口方向吹来。

你忽然意识到，子时已到。

山村里所有的白灯笼同时亮了起来，照得纸钱像雪片一样飞舞。远处传来一声唢呐，凄厉得不像人间能发出的声音。

[faded]子时，万鬼苏醒。[/faded]

秀兰就在这一片唢呐声里，第一次真正"出现"了——不是纸人，不是风声，而是井口一缕缓缓升起的红衣。

你感到手腕上的脉搏，和某种更古老的心跳，渐渐重合。`,
        effects: {"time":60,"setFlag":"shichen_zi","yin":10},
        choices: [{"text":"靠近井口","next":"huimen_exp_well_night"},{"text":"退回老宅","next":"to_old_house","effects":{"sanity":-5}}],
    }
,
    shichen_chou_entry: {
        title: '丑时 · 真相',
        text: `子时三刻的唢呐声停了。

但村子并没有安静下来。相反，你听见无数细碎的声音从四面八方涌来——祠堂里的牌位在轻微颤动，纸扎铺里的纸人在轻轻拍手，老宅房梁上的灰尘簌簌落下。

[faded]丑时，真相浮出。[/faded]

你忽然明白，这个村子里所有被掩盖的东西，都会在丑时露出破绽。族谱、契约、井底的棺材、还有那些被抹去的女子名字——它们都在等你去发现。

你只剩下寅时之前的这段时间了。`,
        effects: {"time":60,"setFlag":"shichen_chou","sanity":-5},
        choices: [{"text":"去祠堂查族谱","next":"huimen_exp_ancestral_hall"},{"text":"去纸扎铺找线索","next":"huimen_exp_paper_shop"},{"text":"去井底开棺","next":"approach_coffin"}],
    }
,
    shichen_yin_entry: {
        title: '寅时 · 黎明之前',
        text: `天边泛起一丝极淡的鱼肚白，但山村依然笼罩在浓雾里。

[faded]寅时，是一夜中最黑暗的时刻，也是离黎明最近的时刻。[/faded]

你感到秀兰的气息就在身边。她的执念、她的怨恨、她未了的心愿，都在这一刻凝聚成了最后的提问。

"周家后人，"她的声音不再飘忽，而是清晰得像在你耳边，"你要怎么还这笔债？"

你只有这一个机会了。`,
        effects: {"time":60,"setFlag":"shichen_yin","yin":15},
        choices: [{"text":"答应娶她，完成冥婚","next":"approach_coffin"},{"text":"帮她讨回公道","next":"huimen_exp_ancestral_women_wall"},{"text":"带她离开山村","next":"huimen_exp_moonlit_escape"}],
    }
};
