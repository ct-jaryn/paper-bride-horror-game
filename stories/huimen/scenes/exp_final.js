/**
 * 《回门》场景模块：exp_final
 */

export const scenes = {
    huimen_exp_final_confrontation: {
        title: '最终对质',
        text: `你回到村中央，那里站着周家所有的祖先。

他们的身影模糊，却带着压迫感。最老的那个祖先走上前："你闹够了没有？"

"没有。" 你说，"我要带秀兰走，要给所有被周家害死的女子正名。"

"你敢！" 祖先们齐声怒吼，"没有这些女子的血，周家早就完了！"

[red]你终于听到了真相：周家的兴旺，是踩着女人的尸骨堆起来的。[/red]

"那周家就完了。" 你说，"从今天起，周家不再靠女人续命。"`,
        effects: {"sanity":-10,"yin":5},
        choices: [{"text":"用族谱和她们谈判","next":"huimen_exp_final_choice","condition":{"hasItem":"周家秘录"},"effects":{"yin":-5}},{"text":"直接冲过去","ending":"huimen_exp_ancestor_judge","effects":{"sanity":-10,"yin":5}}],
    }
,
    huimen_exp_final_choice: {
        title: '抉择',
        text: `你翻开周家秘录，当着所有祖先的面，把记载女子罪名的那一页撕了下来。

"周家的债，我来还。" 你说，"但你们欠她们的清白，我现在就还给她们。"

你把撕下的纸页点燃，火焰不是普通的火焰，而是金色的。火光里，三十七个女子的身影浮现出来。

"我们自由了。" 她们说。

祖先们的身影开始颤抖、扭曲，最后化为灰烬。

[red]周家的诅咒，从你这一代，彻底终结。[/red]`,
        effects: {"sanity":20,"yin":-20,"removeItem":"周家秘录","setFlag":"huimen_exp_ended_zhou_curse"},
        choices: [{"text":"带秀兰离开","next":"huimen_exp_redemption_loop","effects":{"yin":-5}}],
    }
,
    huimen_exp_final_goodbye: {
        title: '终别',
        text: `你决定带秀兰离开。

天快亮了，村子开始崩塌。纸人化为灰烬，红绳断裂，囍字褪色。你牵着秀兰的手，沿着村口的小路往外走。

秀兰走得很慢，时不时回头看。

"舍不得？" 你问。

"不是舍不得。" 她说，"是在告别。"

她对着村子轻轻说："再见了，我的三十年。"

你们走出村口，第一缕阳光照在你们身上。秀兰的身影开始变淡，但她的笑容很真。

"谢谢你。" 她说，"我终于可以走了。"`,
        effects: {"sanity":20,"yin":-20},
        ending: 'huimen_exp_redemption_loop',
    }
,
    huimen_exp_final_hug: {
        title: '终幕拥抱',
        text: `你张开双臂，对秀兰说："我能抱你一下吗？"

秀兰愣住了："你不怕？"

"不怕。" 你说。

秀兰从井里浮出来，慢慢靠近你。她的身体冰凉，但你还是抱住了她。

她在你怀里发抖，像是一个受了很多委屈的孩子。

"三十年了，" 她说，"第一次有人抱我。"

你抱得更紧了一些。

"你不会再孤单了。" 你说，"无论结局如何，我都在这里。"`,
        effects: {"sanity":15,"yin":-15,"setFlag":"huimen_exp_hugged_xiulan"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
