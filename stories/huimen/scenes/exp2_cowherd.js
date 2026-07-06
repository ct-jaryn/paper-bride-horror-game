/**
 * 《回门》场景模块：exp2_cowherd
 */

export const scenes = {
    huimen_exp2_cowherd_hut: {
        title: '牧童小屋',
        text: `你来到山脚下的一座小屋前。

屋子很小，屋顶上长满了野草。门口挂着一个生锈的牛铃，风一吹，发出沉闷的响声。

你推开门，屋里有一个小男孩，正在用草编一只蚱蜢。他抬头看你，眼睛是透明的。

"你是来找牛铃的吗？" 他问。`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"问他牛铃在哪里","next":"huimen_exp2_cowherd_bell","effects":{"yin":1}},{"text":"陪他编蚱蜢","next":"huimen_exp2_cowherd_play","effects":{"sanity":5,"yin":-3}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_cowherd_bell: {
        title: '牛铃',
        text: `牧童说："我的牛铃挂在老槐树上。没有牛铃，我找不到回家的路。"

"你帮你找。" 你说。

牧童笑了："真的？姐姐说，会有一个人来帮我找的。"`,
        effects: {"sanity":3,"yin":-3,"setFlag":"huimen_exp2_promised_cowherd_bell"},
        choices: [{"text":"去老槐树找牛铃","next":"huimen_exp2_dawn_tree_cowherd","effects":{"yin":1}},{"text":"先陪他玩","next":"huimen_exp2_cowherd_play","effects":{"yin":-3}}],
    }
,
    huimen_exp2_cowherd_play: {
        title: '编蚱蜢',
        text: `你坐下来，和牧童一起编蚱蜢。

他的手指是透明的，却灵巧得很。不一会儿，一只草蚱蜢就编好了。

"送给你。" 他说，"它会保护你的。"`,
        effects: {"sanity":5,"yin":-5,"addItem":"草蚱蜢"},
        choices: [{"text":"收好","next":"huimen_exp2_cowherd_hut","effects":{"yin":1}},{"text":"去找牛铃","next":"huimen_exp2_dawn_tree_cowherd","effects":{"yin":1}}],
    }
,
    huimen_exp2_dawn_tree_cowherd: {
        title: '槐上取铃',
        text: `你来到村口老槐树下。

牛铃挂在最高的树枝上，已经生了锈。你爬上去，把它取下来。

铃身上刻着两个字："回家"。`,
        effects: {"sanity":3,"yin":1,"addItem":"牧童的牛铃"},
        choices: [{"text":"把牛铃还给牧童","next":"huimen_exp2_cowherd_home","effects":{"sanity":10,"yin":-10,"removeItem":"牧童的牛铃"}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_cowherd_home: {
        title: '归家',
        text: `你把牛铃交给牧童。

他摇了摇铃铛，清脆的响声传遍村子。

"我可以回家了。" 他高兴地说，"姐姐，谢谢你。"

他牵起你的手，带你走出山村。纸人纷纷让开，不敢靠近。

到了村口，他把牛铃送给你："以后你迷路了，摇一摇，我就来找你。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_cowherd_released"},
        choices: [{"text":"收下牛铃","ending":"huimen_exp2_ending_cowherd_bell","effects":{"yin":-5}}],
    }
};
