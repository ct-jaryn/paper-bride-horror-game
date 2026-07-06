/**
 * 《回门》场景模块：exp_street_girl
 */

export const scenes = {
    huimen_exp_street_little_girl: {
        title: '小女孩',
        text: `你看见一个小女孩蹲在街边玩石子。

她穿着旧式的花布衣裳，扎着两个羊角辫。她抬头看见你，甜甜地笑了："大哥哥，陪我玩好吗？"

你走近她，发现她玩的不是石子，是人的牙齿。一颗颗乳牙，被她排成一排。

"你在玩什么？" 你问。

"排牙齿。" 她说，"这些都是被周家借走命的小孩。我把它们排整齐，它们就能找到回家的路。"

[red]她抬起头，你发现她没有眼睛，眼眶里是两团墨点。[/red]`,
        effects: {"sanity":-8,"yin":2},
        choices: [{"text":"帮她一起排牙齿","next":"huimen_exp_street_little_girl_help","effects":{"sanity":5,"yin":-3}},{"text":"问她谁借的命","next":"huimen_exp_street_little_girl_ask","effects":{"yin":2}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_street_little_girl_help: {
        title: '排牙',
        text: `你蹲下来，帮小女孩排牙齿。

牙齿很凉，但不像鬼物，更像是一个个睡着的孩子。你按照大小一颗颗排好，小女孩在旁边拍手。

"大哥哥真好。" 她说，"作为谢礼，我送你一颗。"

她捡起最白最完整的一颗牙齿，放进你手心。牙齿触到皮肤的瞬间，化作一道温暖的光，钻进你胸口。

"它会保护你。" 她说，"不让周家借你的命。"`,
        effects: {"sanity":5,"yin":-5,"addItem":"护身乳牙"},
        choices: [{"text":"谢谢她，回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_street_little_girl_ask: {
        title: '借命',
        text: `你问："谁借走你们的命？"

小女孩歪着头，像是在回忆。

"周家的祖先。" 她说，"他们活不长，就借小孩子的命。秀兰姐姐的孩子也被借走了，所以元宝一直长不大。"

"那怎么才能还？"

"把名字还给我们。" 她说，"周家族谱上写了我们的名字，我们的命就被押在那里。你把名字划掉，我们就自由了。"

她指向祖祠的方向。`,
        effects: {"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_children_names_in_record"},
        choices: [{"text":"去祖祠查名册","next":"huimen_exp_ancestral_hall","effects":{"yin":1}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
