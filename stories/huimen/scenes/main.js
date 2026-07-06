/**
 * 《回门》场景模块：main
 */

export const scenes = {
    huimen_exp_bury_diary: {
        title: '埋日记',
        text: `你在废墟墙角挖了一个小坑，把烧焦的日记放进去。

"秀兰，" 你说，"你的委屈，我知道了。我会让更多人知道。"

你捧起土，盖在日记上。土落下的瞬间，你听见一声很轻很轻的"谢谢"，像是从很远的地方传来。

废墟里的纸人忽然安静下来。它们脸上的墨点眼睛似乎不再那么阴森，而像是……闭上了。

你站起身，感到胸口轻松了许多。`,
        effects: {"sanity":10,"yin":-10},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_little_boy: {
        title: '元宝',
        text: `井水里浮出一个小小的身影。

是个男孩，穿着红肚兜，扎着冲天辫。他的脸很白，眼睛却很大，黑漆漆的，像两颗浸在水里的珠子。

"我叫元宝。" 他说，"是秀兰姐姐的弟弟……也不是。我是她没出世的孩子，被井水冲出来的一缕魂。"

他爬上井沿，坐在你旁边，脚一晃一晃的。

"姐姐太苦了。她每天都在哭，哭到整个村子都下雨。你能让她不哭吗？"

你看着他，心里忽然没那么怕了。`,
        effects: {"sanity":-3,"yin":1},
        choices: [{"text":"陪他玩一会儿","next":"huimen_exp_play_with_boy","effects":{"sanity":5,"yin":-3}},{"text":"问他怎么才能救秀兰","next":"huimen_exp_boy_advice","effects":{"yin":1}},{"text":"离开井边","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_play_with_boy: {
        title: '踢毽子',
        text: `你捡起地上的纸钱，折成一个纸毽子。

元宝高兴地跳起来："陪我踢！"

你们就在井边踢起了毽子。元宝踢得很高，纸毽子在空中翻飞，像一只白色的鸟。

你忽然发现，每踢一下，井水的红色就淡一分。元宝的笑声像铃铛一样，把井底的阴气一点点敲散。

"你是好人。" 元宝说，"我帮你一次。"

他朝你吹了一口气，你感到胸口的压抑轻了许多。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_boy_friendly"},
        choices: [{"text":"问他愿意跟你走吗","next":"huimen_exp_little_boy_friend","effects":{"yin":-3}},{"text":"送他回井里","next":"huimen_exp_village_street","effects":{"sanity":5,"yin":-2}},{"text":"答应陪他玩一夜，然后带他走","next":"huimen_exp_little_boy_friend_alt"}],
    }
,
    huimen_exp_boy_advice: {
        title: '鬼孩的指点',
        text: `元宝歪着头想了想说："姐姐最怕一个人。"

"她一个人被埋在井底，一个人生孩子，一个人死。你们周家的人，都把她当耻辱，没人陪她。"

"你要是想让她不哭，就陪她坐一夜。不要说话，不要烧纸，不要成亲。就坐着。"

他伸出小手，指了指井沿："坐在这里，她就能看见你。"

[red]你忽然明白了，秀兰要的不是仪式，是被看见。[/red]`,
        effects: {"sanity":3,"yin":-3,"setFlag":"huimen_exp_knows_sit_with_xiulan"},
        choices: [{"text":"坐在井边陪她","next":"huimen_exp_sit_with_xiulan","effects":{"sanity":5,"yin":-5}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_ask_leave: {
        title: '问她',
        text: `你问："你愿意离开这里吗？"

秀兰沉默了很久。她低下头，看着井水里自己的倒影。

"我走了，谁会记得我？" 她说，"周家不会承认我，村子不会承认我。我连个名字都没有。"

"我记得。" 你说，"我会把你的名字写下来，告诉所有人。"

秀兰抬起头，眼眶里有红色的泪光："你发誓？"

"我发誓。"

她伸出手，那只苍白的手穿过你的身体，你没有感到冷，而是感到一阵温暖。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"xiulanMercy"},
        choices: [{"text":"带她回老宅，走 redemption","next":"huimen_exp_return_bury_xiulan","effects":{"yin":-5}},{"text":"先回村街准备","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_little_boy_friend: {
        title: '伴行',
        text: `元宝眨眨眼睛："你真的愿意带我走？"

"愿意。" 你说。

他高兴得跳起来，化作一道青光钻进你的影子里。你低头看自己的影子，发现它比往常浓了一些，像是有个小男孩牵着你的衣角。

"我会保护你的。" 元宝的声音从你影子里传出来，"纸人不敢靠近我了。"

你走出山村时，天边已经亮了。你的影子在地上拉得很长，里面似乎藏着一个小小的笑声。`,
        effects: {"sanity":10,"yin":-10},
        ending: 'huimen_exp_little_boy_friend',
    }
,
    huimen_exp_buy_face: {
        title: '换脸',
        text: `你接过纸脸，贴在脸上。

纸脸像有生命一样吸住你的皮肤，你感到自己的五官在移动、重塑。片刻后，你摸了摸脸，已经变成了另一个人的模样。

老妇满意地点点头："好了，秀兰认不出你了。"

可你低头看自己的手，发现手腕上那根红绳还在，勒得更紧了。

[red]脸可以换，债换不了。[/red]`,
        effects: {"sanity":-10,"yin":5,"setFlag":"huimen_exp_wearing_paper_face"},
        choices: [{"text":"把纸脸撕下来","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":-3,"removeItem":"纸脸"}},{"text":"戴着纸脸继续走","next":"huimen_exp_village_street","effects":{"yin":2}}],
    }
,
    huimen_exp_return_old_house: {
        title: '回老宅',
        text: `你深吸一口气，转身朝老宅走去。

身后的村街像退潮一样远去，纸钱、白灯笼、纸人，都渐渐模糊。你推开老宅的门，堂屋里的红烛还在燃烧，亲戚们还跪在那里。

二叔抬起头："你去哪了？吉时要到了。"

你摇摇头，没有回答。你知道自己刚才去过另一个村子，一个藏在怨气里的村子。

[red]但现在，你回到了主线上。[/red]

你还有机会改变结局。`,
        effects: {"sanity":3,"yin":1},
        choices: [{"text":"继续主线","next":"to_old_house","effects":{"yin":1}}],
    }
,
    huimen_exp_burn_incense_scene: {
        title: '燃香',
        text: `你摸出打火机，点燃了那半支安神香。

香头冒出一缕青烟，烟不是往上升的，而是盘旋着往你口鼻里钻。你闻到一股奇异的香气，像是艾草，又像是陈年桂花。

庙里的阴冷忽然退散了。供桌上的灰尘簌簌落下，露出底下崭新的红漆。牌位后的阴影发出不甘的嘶吼，却不敢靠近香烟的范围。

[red]原来这香不是祭品，是镇物。[/red]

你举着香，在庙里走了一圈。每到一处，墙上的黄符就自动剥落，像被烫到的蛇。庙外传来秀兰轻轻的叹息，那叹息里没有怨，只有一点疲惫的释然。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"半支安神香","setFlag":"huimen_exp_burned_temple_incense"},
        choices: [{"text":"趁香还没烧完，进内殿","next":"huimen_exp_temple_inner","effects":{"yin":1}},{"text":"离开庙，回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_forgotten_alt: {
        title: '被遗忘的名字',
        text: `你在山村里走了很多年。

你记得自己姓周，记得秀兰，记得一口井。但你忘了自己为什么要回来，忘了自己有没有走出去。

村里的石碑上刻满了名字，你找了很多遍，找不到自己的。

秀兰告诉你："名字被纸人借走的人，是回不来的。"

你低头看了看自己的手，发现手指正在变纸，变脆，变白。`,
        choices: [{"text":"接受被遗忘","ending":"huimen_exp_forgotten"}],
    }
,
    huimen_exp_little_pine_alt: {
        title: '青松',
        text: `你在秀兰的坟旁种了一棵松树。

那棵松树种下时只有筷子高，三年后却长得比你还高。村里人说，那棵树长得太快，不像凡间的树。

每年清明，你都会在树下坐一会儿。风过时，松针沙沙作响，像是一个女子在低声说话。

有一天，你在树下捡到一片松针，上面缠着一根细细的红绳。`,
        choices: [{"text":"把红绳埋回土里","ending":"hidden_littlePine"}],
    }
,
    huimen_exp_little_boy_friend_alt: {
        title: '鬼孩伴行',
        text: `你答应陪小鬼玩一夜。

你们踢了纸毽子，放了纸船，在井边数星星。小鬼说他叫"元宝"，是秀兰当年未出世的孩子分出来的一缕魂。

"姐姐太苦了。"元宝说，"你帮她，我就帮你。"

天亮时，元宝化作一道青光钻进你的影子里。`,
        choices: [{"text":"带他一起走","ending":"huimen_exp_little_boy_friend"}],
    }
};
