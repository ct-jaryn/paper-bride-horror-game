/**
 * 《回门》场景模块：exp2_midwife
 */

export const scenes = {
    huimen_exp2_midwife_house: {
        title: '稳婆家',
        text: `你来到村东头一座矮屋前。

屋子门窗紧闭，门缝里却透出昏黄的灯光。你推开门，一股浓重的药味扑面而来。

屋里摆满了接生用的器具：剪刀、秤、铜盆，还有一叠叠染血的布。正中的床上躺着一个老妇人，盖着白布，一动不动。

[red]她已经死了三十年，却还在等下一个产妇。[/red]`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"掀开白布","next":"huimen_exp2_midwife_body","effects":{"yin":3}},{"text":"查看接生箱","next":"huimen_exp2_midwife_box","effects":{"yin":2}},{"text":"对着尸体说话","next":"huimen_exp2_midwife_talk","effects":{"yin":1}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_midwife_body: {
        title: '稳婆遗躯',
        text: `你掀开白布。

老妇人的脸干瘪如纸，眼睛却睁得很大，像是看见了什么恐怖的东西。她的手里攥着一张黄符，符上写着"封"。

你试图掰开她的手，她却突然开口："别碰我。我手里封着秀兰孩子的魂。"

[whisper]"周家不让我说。说了，我连鬼都做不成。"[/whisper]`,
        effects: {"sanity":-10,"yin":5},
        choices: [{"text":"质问她真相","next":"huimen_exp2_midwife_confession","effects":{"sanity":-5,"yin":3}},{"text":"抢过黄符","next":"huimen_exp2_midwife_seal","effects":{"yin":5}},{"text":"放下白布","next":"huimen_exp2_midwife_house","effects":{"yin":1}}],
    }
,
    huimen_exp2_midwife_confession: {
        title: '逼问',
        text: `你质问稳婆："秀兰的孩子到底怎么了？"

稳婆的魂魄从身体里飘出来，跪在你面前："我说，我都说。秀兰被活埋时，孩子还没死。周家老太爷怕孩子生下来丢人，让我把孩子掐死在肚子里。"

"我掐了。" 她哭，"我亲手掐的。秀兰在井底还在叫孩子的名字。"

[red]你感到一阵恶心。[/red]`,
        effects: {"sanity":-15,"yin":5,"setFlag":"huimen_exp2_heard_midwife_confession"},
        choices: [{"text":"告诉她去告诉秀兰真相","next":"huimen_exp2_midwife_release","effects":{"sanity":5,"yin":-5}},{"text":"冷冷地离开","next":"huimen_exp_village_street","effects":{"yin":3}}],
    }
,
    huimen_exp2_midwife_release: {
        title: '释放',
        text: `你说："你去告诉秀兰真相。告诉她，孩子不是她的错。"

稳婆愣住了："你不怪我？"

"我怪你。" 你说，"但秀兰有权知道真相。"

稳婆点点头，化作一缕青烟飘向井的方向。你感到屋里的药味淡了许多。`,
        effects: {"sanity":5,"yin":-10,"setFlag":"huimen_exp2_midwife_released"},
        choices: [{"text":"把稳婆的忏悔录下来带出村子","ending":"huimen_exp2_ending_midwife_secret","effects":{"yin":-5}},{"text":"去井边看秀兰","next":"huimen_exp2_riverbank","effects":{"yin":1}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_midwife_seal: {
        title: '夺符',
        text: `你用力掰开稳婆的手，抢过黄符。

黄符一离开她的手，就燃烧起来。火光里，一个婴儿的虚影浮现出来，哇哇大哭。

"我的孩子！" 秀兰的声音从四面八方传来。

婴儿化作一道光，飞向井的方向。稳婆发出一声惨叫，身体化为灰烬。`,
        effects: {"sanity":-10,"yin":10},
        choices: [{"text":"追向井边","next":"huimen_exp2_riverbank","effects":{"yin":1}}],
    }
,
    huimen_exp2_midwife_box: {
        title: '接生箱',
        text: `你打开接生箱。

箱子里没有器具，只有一叠叠写着名字的纸条。每张纸条上都写着一个女子的名字和"难产卒"三个字。

你翻到最后，找到了秀兰的名字。纸条背面有一行小字：

[faded]"秀兰，民国二十三年中秋前夜，母子俱亡。"[/faded]

[red]"母子俱亡"四个字，把两条命轻描淡写地抹去了。[/red]`,
        effects: {"sanity":-10,"yin":3,"addItem":"稳婆的接生记录"},
        choices: [{"text":"把记录带给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"removeItem":"稳婆的接生记录"}},{"text":"收好","next":"huimen_exp2_midwife_house","effects":{"yin":1}}],
    }
,
    huimen_exp2_midwife_talk: {
        title: '稳婆对话',
        text: `你对着稳婆的尸体说："秀兰的孩子，是周家欠她的。不是你的错，但你可以选择说出来。"

尸体没有动，但屋里的风停了。过了一会儿，一个苍老的声音说："我一辈子接生，第一次觉得自己是在杀人。"

"那就赎罪。" 你说。`,
        effects: {"sanity":3,"yin":-3},
        choices: [{"text":"继续劝说","next":"huimen_exp2_midwife_confession","effects":{"yin":1}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_midwife_secret_room: {
        title: '稳婆密室',
        text: `你在稳婆家的床板下发现一个暗格。

暗格里有一本日记，日记里记载着稳婆一生的秘密。你翻到民国二十三年那一页：

[faded]"今日为周家不祥女接生。孩子已出母腹，周老太爷亲手按死。我无力阻止，只能把孩子的脐带藏起。此罪此生难消。"[/faded]`,
        effects: {"sanity":-15,"yin":5,"setFlag":"huimen_exp2_found_midwife_secret"},
        choices: [{"text":"把日记给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"addItem":"稳婆日记"}},{"text":"烧了日记","next":"huimen_exp2_midwife_house","effects":{"sanity":5,"yin":-3}}],
    }
};
