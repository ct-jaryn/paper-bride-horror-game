/**
 * 《回门》场景模块：exp_xiulan_daily
 */

export const scenes = {
    huimen_exp_xiulan_flower: {
        title: '献花',
        text: `你把桂花放在井沿。

井水里浮出秀兰的脸。她看着那朵花，眼神柔和了许多。

"桂花……" 她说，"我活着的时候，院子里有一棵桂花树。每年秋天，周文都会摘一束给我。"

她的眼泪落进井里，却没有让水变红，而是化作一圈圈涟漪。

"后来树被砍了。" 她说，"他们说，不祥的人，不配闻桂花香。"

你握紧了拳头。周家连一棵树都不放过。`,
        effects: {"sanity":5,"yin":-8,"removeItem":"桂花"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_sing: {
        title: '秀兰唱戏',
        text: `你坐在井边，秀兰给你唱了一段戏。

她唱的是《游园惊梦》，声音没有鬼气，反而带着少女的清亮。她唱到"良辰美景奈何天"时，停顿了一下。

"我以前最想学的，就是这段。" 她说，"可周家说，戏子伤风败俗，不许我学。"

"你唱得很好。" 你说。

秀兰笑了："真的吗？"

"真的。" 你说，"比戏台上的名角儿都好。"

她笑得更开心了，像得到了全世界最好的夸奖。`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"让她再唱一段","next":"huimen_exp_xiulan_sing_more","effects":{"sanity":3,"yin":-3}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_sing_more: {
        title: '秀兰再唱',
        text: `秀兰又唱了一段《惊梦》。

这次她唱得更投入，水袖在空中挥舞。你虽然看不见袖子，但能感觉到风在跟着她的声音流动。

唱到最高处，她的声音忽然断了。

"对不起，" 她说，"三十年没唱，嗓子生了。"

"没关系。" 你说，"你已经唱得很好了。"

秀兰点点头，脸上带着满足的笑。你忽然觉得，如果她能一直这样笑，该有多好。`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp_heard_xiulan_sing"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}},{"text":"和她一起唱完最后一段","ending":"huimen_exp_ending_sing_together","condition":{"flag":"huimen_exp_heard_xiulan_sing"},"effects":{"yin":-5}}],
    }
,
    huimen_exp_xiulan_dance: {
        title: '月下舞',
        text: `秀兰从井里出来，在月光下跳舞。

她没有脚，身影是飘着的。可她的舞姿很美，像一片落叶，像一缕轻烟，像三十年前那个还没被伤害的少女。

你坐在井沿上，静静地看。

"我母亲说，" 她一边跳一边说，"我跳舞的时候，像天上的仙女。"

"你母亲说得对。" 你说。

秀兰转了个圈，身影在月光里散开，又聚拢。

"可惜，她没能看见我嫁人。" 她说。

[red]月光下，她的舞带着一种说不出的凄美。[/red]`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"鼓掌","next":"huimen_exp_xiulan_dance_clap","effects":{"sanity":3,"yin":-3}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_dance_clap: {
        title: '鼓掌',
        text: `你鼓起掌来。

秀兰停住，不好意思地低下头："跳得不好。"

"很好。" 你说。

她抬起头，眼里有光。那是你第一次在她眼里看到光，不是鬼火，而是活人一样的光。

"如果能再跳一次给周文看就好了。" 她说。

"他看见了。" 你说，"在另一个世界，他一定看见了。"

秀兰点点头，身影渐渐淡去。你知道，她又回到了井里。但她的心情，似乎好了很多。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_xiulan_danced"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}},{"text":"邀请她再跳最后一支舞","ending":"huimen_exp_ending_last_dance","condition":{"flag":"huimen_exp_xiulan_danced"},"effects":{"yin":-5}}],
    }
,
    huimen_exp_xiulan_cook: {
        title: '桂花糕',
        text: `你想起秀兰想吃桂花糕的愿望。

你在村子里找到一间废弃的厨房，里面还有一些发霉的糯米和桂花。你勉强做了一块桂花糕，端到井边。

秀兰看着那块黑乎乎的糕点，笑了。

"这算桂花糕吗？" 她问。

"算吧。" 你说，"条件有限。"

她伸手碰了碰糕点，糕点化作一道光，被她吸进身体里。

"甜的。" 她说，"虽然是鬼，但我尝到了甜味。"

[red]你看着她满足的样子，心里又酸又软。[/red]`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_sew: {
        title: '秀兰嫁衣',
        text: `你找到一块红布和针线，决定给秀兰做一件嫁衣。

你的针线活很糟糕，做出的嫁衣歪歪扭扭。但秀兰穿在身上，却很高兴。

"这是我第二件嫁衣。" 她说，"第一件被他们烧了，说是不祥。"

"这件不会被烧。" 你说，"我会把它和你一起，堂堂正正地埋进土里。"

秀兰摸着嫁衣上的针脚，眼泪落了下来。

"你的手很笨。" 她说，"但你的心很细。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_made_xiulan_dress"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_school: {
        title: '学堂',
        text: `你带秀兰"去"了一趟学堂。

其实是你在村口的旧学堂遗址里，给她讲课本上的知识。你讲地理、历史、算术，她听得津津有味。

"原来世界这么大。" 她说。

"是啊。" 你说，"比周家村大得多。"

"如果我能去上学，" 她说，"我想当老师，教女孩子们认字。"

"你可以的。" 你说，"下辈子一定可以。"

秀兰笑了，那笑容里没有怨，只有对未来的向往。`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_laugh: {
        title: '秀兰的笑',
        text: `你讲了一个很冷的笑话给秀兰听。

秀兰愣了一下，然后"噗嗤"一声笑了出来。她笑得很大声，像是很久没有这样笑过。

"你真傻。" 她说，"这种笑话也讲得出来。"

"能让你笑就行。" 你说。

秀兰笑够了，擦了擦眼角。她的眼泪是红色的，但笑容是真的。

"谢谢你。" 她说，"我死之前，也爱笑。死后三十年，今天才知道自己还能笑。"`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"再讲一个","next":"huimen_exp_xiulan_laugh_more","effects":{"sanity":3,"yin":-3}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_laugh_more: {
        title: '再笑',
        text: `你又讲了一个更冷的笑话。

这次秀兰没有立刻笑，而是看着你，眼神温柔。

"你知道吗，" 她说，"周文以前也这样逗我笑。他讲的笑话比你还可笑。"

"那后来呢？"

"后来……" 她低下头，"后来我就不笑了。"

你沉默了一会儿，说："那从现在开始，你可以再笑了。不是为了他，是为了你自己。"

秀兰抬起头，又笑了。这次笑得更久，更深。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_made_xiulan_laugh"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_angry: {
        title: '秀兰的怒',
        text: `你问秀兰："你恨周家吗？"

秀兰的脸色变了。井里的水开始翻涌，像一锅沸腾的血。

"恨？" 她说，"我恨了三十年。我恨周文的母亲，恨那些村民，恨周家的每一块砖。"

"那你恨周文吗？"

她愣了一下，然后低下头："恨。也不恨。我恨他没有救我，可我明白他救不了我。"

[red]她的愤怒像井水一样汹涌，却也像井水一样深不见底。[/red]

"你想让我不恨吗？" 她问。

"不。" 你说，"你有权利恨。但别让恨把你永远困在这里。"`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"帮她发泄愤怒","next":"huimen_exp_xiulan_angry_release","effects":{"sanity":-5,"yin":-5}},{"text":"安静地陪她","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_angry_release: {
        title: '泄愤',
        text: `你捡起一块石头，递给秀兰。

"砸吧。" 你说，"把井壁砸碎，把恨都砸出来。"

秀兰接过石头——不，是阴气凝成的石头——砸向井壁。

"砰！砰！砰！" 每一声都像是三十年的控诉。

井壁上的符咒开始剥落，井水开始变清。秀兰砸了整整一百下，直到阴气耗尽，瘫坐在井底。

"够了。" 她说，"我不想再砸了。"

你坐在井沿，陪着她。天边的月亮，似乎亮了一些。`,
        effects: {"sanity":5,"yin":-10,"setFlag":"huimen_exp_xiulan_anger_released"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_hope: {
        title: '秀兰的愿',
        text: `秀兰问你："外面的世界，女孩子真的可以自己做主吗？"

"可以。" 你说，"她们可以读书、工作、旅行、结婚或者单身。没有人可以强迫她们。"

"那下辈子，" 她说，"我要做你所说的那种女孩。"

"你一定会的。" 你说。

秀兰笑了，那笑容里没有怨，只有希望。

"那我等你。" 她说，"等下辈子，我们做朋友。"

"好。" 你说，"下辈子，我们做朋友。"`,
        effects: {"sanity":10,"yin":-10},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_flower_2: {
        title: '再献花',
        text: `你又摘了一朵桂花，放在井沿。

秀兰浮出来，闻着花香，闭上眼睛。

"我活着的时候，院子里有一棵桂花树。" 她说，"每年秋天，整个院子都是香的。"

"后来呢？" 你问。

"后来被砍了。" 她睁开眼睛，"因为我死了，树也成了不祥之物。"

你握紧了拳头。周家连一棵树都不放过。

"等我出去，" 你说，"我给你种一棵桂花树。"`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
