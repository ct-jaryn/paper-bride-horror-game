/**
 * 《回门》场景模块：exp_ritual
 */

export const scenes = {
    huimen_exp_ancestor_judge_scene: {
        title: '祖先',
        text: `你跪在牌位前，重重磕了三个头。

"列祖列宗，秀兰之冤，周家之过。我愿替她正名，求你们放过周家后人。"

牌位后的阴影开始聚拢，化作一个个模糊的人形。最老的那个人形走到你面前，它的脸是一团黑雾，只有眼睛是两颗燃烧的纸钱。

"放过？" 它说，"周家男人活不过四十，不是诅咒，是报应。你想替她正名，就拿你的命来换。"

它朝你伸出手。那只手不是骨头，是无数根红绳缠成的。`,
        effects: {"sanity":-15,"yin":5},
        choices: [{"text":"答应以命换命","ending":"huimen_exp_ancestor_judge","effects":{"sanity":-10,"yin":5}},{"text":"拒绝，冲出祖祠","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":3}}],
    }
,
    huimen_exp_erase_name: {
        title: '抹名',
        text: `你把香灰涂在刻着自己名字的牌位上。

香灰触到木头的瞬间，发出"嗤嗤"的声响，像是什么东西被腐蚀了。你的名字渐渐模糊，最后变成一团灰白色的痕迹。

牌位后的阴影发出愤怒的嘶吼："你敢抹掉自己的名字！"

"我不是周家的祭品。" 你说，"我是来还债的，不是来献命的。"

你把那块牌位从架子上取下来，在地上摔碎。碎木片里掉出一张黄符，符上写着你的生辰八字。

你捡起黄符，撕成两半。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"香灰","setFlag":"huimen_exp_erased_name"},
        choices: [{"text":"离开祖祠","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_bridge_name: {
        title: '桥刻名',
        text: `你咬破手指，在桥栏上写下"周氏秀兰"。

血字渗入石头，桥下的脸发出一阵骚动。它们纷纷仰起头，像是在辨认这个名字。

"秀兰……秀兰……" 它们喃喃，"她终于有人记得了。"

桥栏上的吸力消失了。你收回手，发现桥栏上别的名字开始褪色，而"周氏秀兰"四个字越来越清晰。

[red]你帮秀兰在桥上占了位置，也帮其他被遗忘的女子开了一扇门。[/red]

桥下传来轻轻的笑声，不再是阴森的，而是带着一点释然。`,
        effects: {"sanity":5,"yin":-8,"setFlag":"huimen_exp_named_xiulan_on_bridge"},
        choices: [{"text":"继续往前走","next":"huimen_exp_moonlit_path_end","effects":{"yin":1}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_dawn_tree: {
        title: '槐下待晓',
        text: `你来到村口老槐树下。

老槐树的树冠很大，遮住了半边天。树下站着两个纸扎人，一男一女，穿着大红喜服。他们的脸被雨水泡得发白，嘴角却还在笑。

你走近，发现男纸人的手里握着一封信，信封上写着"秀兰亲启"。

你抽出信，里面是你祖父的字迹：

[faded]"兰妹，今夜子时，老槐树下，我带你走。"[/faded]

[red]这封信，三十年前没能送到她手里。[/red]

你把信放在女纸人手里。一阵风吹过，两个纸人倒在地上，化为灰烬。`,
        effects: {"sanity":-5,"yin":3,"addItem":"老槐树下未寄出的信"},
        choices: [{"text":"把信给秀兰","next":"huimen_exp_dawn_tree_give_letter","effects":{"yin":1}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_dawn_tree_give_letter: {
        title: '迟到的信',
        text: `你来到井边，把信放在井沿。

秀兰的身影浮出来。她看着信，手在发抖。

"他真的来了？" 她问。

"他来了。" 你说，"只是没等到你。"

秀兰把信贴在心口，信纸化作一道光，渗入她的身体。

"我等了三十年，" 她说，"不是等他救我，是等他告诉我，他没有骗我。"

她的眼泪落进井里，井水变得清澈。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"老槐树下未寄出的信","setFlag":"huimen_exp_gave_dawn_letter"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
