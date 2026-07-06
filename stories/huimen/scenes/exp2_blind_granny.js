/**
 * 《回门》场景模块：exp2_blind_granny
 */

export const scenes = {
    huimen_exp2_blind_granny_house: {
        title: '盲婆婆家',
        text: `你来到一座茅草屋前。

屋里传出苍老的歌声，没有词，只有一个女声在哼。那调子很老，老到不像这个时代的歌。

你推开门，看见一个瞎眼的老太太坐在门槛上，怀里抱着一把破旧的月琴。

"你是谁？" 她问，"是来听老婆子唱歌的，还是来封我嘴的？"`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"说你是来听歌的","next":"huimen_exp2_blind_granny_sing","effects":{"yin":-3}},{"text":"问她秀兰的事","next":"huimen_exp2_blind_granny_ask","effects":{"yin":1}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_blind_granny_sing: {
        title: '哭嫁调',
        text: `盲婆婆开始唱歌。

那是一首古老的哭嫁调，唱的是一个女子被活埋前的哀鸣。你听不懂词，却听得泪流满面。

唱到最后，盲婆婆说："这是我为秀兰唱的。三十年前，我是村里唯一一个为她哭的人。"

"他们不让哭，说会招鬼。可我不怕。秀兰活着的时候对我好，我不能让她死得没人哭。"`,
        effects: {"sanity":-5,"yin":-5,"setFlag":"huimen_exp2_heard_blind_granny_song"},
        choices: [{"text":"请她再唱一遍","next":"huimen_exp2_blind_granny_sing_more","effects":{"sanity":3,"yin":-3}},{"text":"问她秀兰的事","next":"huimen_exp2_blind_granny_ask","effects":{"yin":1}}],
    }
,
    huimen_exp2_blind_granny_sing_more: {
        title: '盲婆婆再唱',
        text: `盲婆婆又唱了一遍。

这次你听懂了几句：

"兰花开，兰花谢，兰花落在井底眠。"
"周家郎，周家债，周家女儿不值钱。"

唱完，盲婆婆把月琴递给你："带走吧。让外面的人也听听秀兰。"`,
        effects: {"sanity":5,"yin":-5,"addItem":"盲婆婆的月琴"},
        choices: [{"text":"收下月琴","next":"huimen_exp2_blind_granny_house","effects":{"yin":1}},{"text":"录下歌声","ending":"huimen_exp2_ending_grandma_song","effects":{"yin":-5}}],
    }
,
    huimen_exp2_blind_granny_ask: {
        title: '盲婆婆询问',
        text: `你问盲婆婆："秀兰是个什么样的人？"

盲婆婆沉默了一会儿，说："好姑娘。心善，手巧，爱唱歌。她常来给我送菜，叫我婆婆。"

"她怀孕那阵，还来给我梳头。她说，等孩子生下来，要认我做干奶奶。"

盲婆婆的眼泪从空洞的眼眶里流出来："可孩子没生下来。我也没做成干奶奶。"`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"安慰她","next":"huimen_exp2_blind_granny_comfort","effects":{"sanity":5,"yin":-5}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_blind_granny_comfort: {
        title: '安慰',
        text: `你握住盲婆婆的手："婆婆，秀兰没有怪你。她知道你为她哭过。"

盲婆婆笑了，那笑容里有苦涩也有释然："真的？"

"真的。" 你说，"她让我告诉你，谢谢你。"

盲婆婆点点头，把月琴抱得更紧："那我这辈子，也不算白活。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_comforted_blind_granny"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
