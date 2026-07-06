/**
 * 《回门》村街：信物与遗物相关场景
 */

export const scenes = {
    huimen_exp_village_street_stone_lion: {
        title: '石狮',
        text: `村口有一对石狮。

石狮不是石头的，是纸糊的。你走近，发现石狮的眼睛在动。

"守了周家三十年。" 一只石狮说，"现在想走了。"

"你们为什么要守？" 你问。

"因为嘴里含着我们的名字。" 另一只石狮张开嘴，嘴里有一团纸，纸上写着"秀兰"。

[red]周家把女子的名字塞进石狮嘴里，让她们守门。[/red]

你从石狮嘴里取出那团纸。石狮顿时瘫软在地，化为一堆废纸。`,
        effects: {"sanity":-5,"yin":2,"addItem":"石狮口中的名字"},
        choices: [{"text":"把纸烧掉","next":"huimen_exp_village_street_stone_lion_burn","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_stone_lion_burn: {
        title: '焚名',
        text: `你点燃那团纸。

火光里，秀兰的名字在燃烧，却没有化为灰，而是化作一只红色的蝴蝶，飞向夜空。

"我自由了。" 蝴蝶说，"谢谢你，守门人。"

另一只石狮也张开了嘴，里面还有更多名字。你一只一只取出，一只一只烧掉。

村口的两只石狮彻底化为了灰烬。从此，周家再也没有守门人了。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"石狮口中的名字"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_abandoned_bed: {
        title: '空床',
        text: `你推开一扇门，屋里有一张床。

床上铺着大红被褥，像是新婚的床。可床上没有人，只有一个纸人，穿着新娘服，盖着红盖头。

你掀开盖头，纸人的脸是空白的。

"这是秀兰的婚床。" 一个声音说，"她没睡过，就被活埋了。"

[red]你把被褥掀开，床板上刻着一行字："兰妹，等我。"[/red]

那是祖父的字迹。`,
        effects: {"sanity":-8,"yin":2,"addItem":"婚床上的字条"},
        choices: [{"text":"把字条给秀兰","next":"huimen_exp_village_street_abandoned_bed_give","effects":{"sanity":5,"yin":-5}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_abandoned_bed_give: {
        title: '婚床之约',
        text: `你把字条放在井沿。

秀兰浮出来，看着字条上的字，手在发抖。

"兰妹，等我。" 她念了一遍又一遍，"他叫我兰妹。"

"他一直在等你。" 你说，"只是没等到。"

秀兰把字条贴在心口，字条化作一道光，渗入她的身体。

"我等到了。" 她说，"三百年也值了。"`,
        effects: {"sanity":10,"yin":-10,"removeItem":"婚床上的字条"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_song_book: {
        title: '歌本',
        text: `你在路边的垃圾堆里翻到一本旧歌本。

歌本的封面已经烂了，但里面的字迹还很清楚。你翻开一页，是一首叫《兰花花》的民歌：

[faded]"青线线那个蓝线线，蓝格英英的彩，生下一个兰花花，实实的爱死个人……"[/faded]

歌本最后一页写着一行小字："秀兰最爱唱。民国二十二年。"

[red]你把歌本贴在胸口，像是贴着一颗三十年前的心。[/red]`,
        effects: {"sanity":-5,"yin":1,"addItem":"秀兰的歌本"},
        choices: [{"text":"把歌本给秀兰","next":"huimen_exp_village_street_song_book_give","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_song_book_give: {
        title: '还歌',
        text: `你把歌本放在井沿。

秀兰浮出来，看着歌本，眼泪落了下来。

"这是我从学堂借来的。" 她说，"我死的时候，还想着要还回去。"

"我帮你还。" 你说。

"不用了。" 她摇摇头，"让它留在这里吧。这是我活过的证据。"

歌本化作一道光，没入井里。秀兰轻轻哼起了《兰花花》，声音清澈得像山间的溪水。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"秀兰的歌本"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_embroidery: {
        title: '绣帕',
        text: `你看见窗台上放着一方绣帕。

绣帕上绣着一对鸳鸯，针脚细密，栩栩如生。帕角绣着一个"兰"字。

你拿起绣帕，发现背面还有一行小字：

[faded]"愿与君共白头。"[/faded]

[red]这是秀兰绣给祖父的定情之物。[/red]

帕子上的鸳鸯被血染红了一半，像是一对被迫分离的恋人。`,
        effects: {"sanity":-5,"yin":1,"addItem":"秀兰的绣帕"},
        choices: [{"text":"把绣帕给秀兰","next":"huimen_exp_village_street_embroidery_return","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_embroidery_return: {
        title: '还帕',
        text: `你把绣帕放进井里。

秀兰接过绣帕，贴在脸上。她的眼泪把帕子上的血迹晕开，像是一朵盛开的花。

"我绣了一个月。" 她说，"想在成亲那天送给他。"

"他收到了。" 你说，"在另一个世界。"

秀兰笑了笑，把绣帕系在手腕上。

"那我也算嫁过他了。" 她说。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"秀兰的绣帕"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_lost_shoe: {
        title: '遗鞋',
        text: `石板路上有一只绣花鞋。

不是红绣鞋，是一只普通的青色布鞋，鞋面上绣着一朵兰花。鞋跟处磨损得很厉害，说明主人经常走路。

你捡起鞋，发现里面有一张纸条：

[faded]"秀兰，把这双鞋烧了，让她路上有伴。"[/faded]

[red]这是秀兰的母亲留给她的。[/red]

你捧着鞋，感到一阵心酸。一个母亲，连女儿下葬的鞋都要偷偷准备。`,
        effects: {"sanity":-5,"yin":1,"addItem":"秀兰的布鞋"},
        choices: [{"text":"把鞋烧给秀兰","next":"huimen_exp_village_street_lost_shoe_burn","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_lost_shoe_burn: {
        title: '街鞋烧鞋',
        text: `你点燃那只布鞋。

火焰不是红色的，而是淡青色。火光里，一个老妇人的身影浮现出来。

"秀兰，" 老妇人说，"娘对不起你，没能保护你。"

秀兰从井里浮出来，看着老妇人，哭喊："娘！"

母女俩隔着火焰相望，却无法相拥。最后，老妇人的身影化作一缕青烟，和布鞋一起消散。

"我娘来送我了。" 秀兰说，"我可以走了。"`,
        effects: {"sanity":10,"yin":-10,"removeItem":"秀兰的布鞋"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_comb: {
        title: '木梳',
        text: `你在井边发现一把木梳。

木梳上缠着几根长发，梳齿间还残留着一点油脂。你把梳子拿起来，发现梳背上刻着"秀兰"二字。

[red]这是秀兰常用的梳子。[/red]

你用清水把梳子洗干净，放在井沿。

"你的梳子。" 你说。

秀兰浮出来，拿起梳子，轻轻梳了梳自己的长发。

"谢谢你。" 她说，"三十年没梳头了。"`,
        effects: {"sanity":5,"yin":-3,"addItem":"秀兰的木梳"},
        choices: [{"text":"看她梳头","next":"huimen_exp_village_street_comb_watch","effects":{"sanity":5,"yin":-5}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_comb_watch: {
        title: '梳发',
        text: `秀兰坐在井沿上，一下一下梳着自己的头发。

她的动作很慢，很温柔，像是在对待一件珍贵的宝物。梳齿划过发丝，发出细微的声响。

"我娘说，女子的头发是命。" 她说，"要好好梳，不能打结。"

"你现在没有打结了。" 你说。

秀兰笑了笑，把梳子递给你："帮我梳一次，好吗？"

你接过梳子，轻轻梳理她的长发。那头发冰凉，却很柔顺。

"谢谢你。" 她说，"这是我三十年来，最像人的时刻。"`,
        effects: {"sanity":10,"yin":-10,"removeItem":"秀兰的木梳"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_letter_box: {
        title: '信箱',
        text: `你发现一个老旧的信箱。

信箱已经生锈，里面塞满了没有寄出的信。你抽出最上面一封，信封上写着"秀兰收"。

信是你祖父写的：

[faded]"兰妹，今日母亲将我软禁，无法赴约。但我心已定，明日无论如何都会来接你。等我。"[/faded]

[red]这封信，永远没能寄到秀兰手里。[/red]

你把信贴在胸口，感到一阵钝痛。如果他们能逃掉，该有多好。`,
        effects: {"sanity":-5,"yin":1,"addItem":"未寄出的信"},
        choices: [{"text":"把信给秀兰","next":"huimen_exp_village_street_letter_box_give","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_letter_box_give: {
        title: '信箱信归',
        text: `你把信交给秀兰。

她读了一遍又一遍，眼泪把信纸打湿。

"他来了。" 她说，"他真的来了。"

"是的。" 你说，"他来了。"

秀兰把信贴在心口，信纸化作一道光，渗入她的身体。

"我等了三十年，" 她说，"不是等他救我，是等他告诉我，他没有放弃我。"

天边的月亮似乎亮了一些。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"未寄出的信"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_village_street_old_broom: {
        title: '旧帚',
        text: `你发现一把旧扫帚靠在墙边。

扫帚柄上缠着一根红绳，绳上系着一个小布包。你打开布包，里面是一缕头发和一张纸条。

纸条上写着："秀兰之发，用以束帚，扫尽不祥。"

[red]周家把秀兰的头发绑在扫帚上，让她替周家扫走晦气。[/red]

你解开红绳，把头发取下来。

"你的头发，不该用来扫地。" 你说。

头发在你手心里动了动，像是有生命一般。它轻轻缠上你的手指，又松开，像是在向你道谢。`,
        effects: {"sanity":-5,"yin":2,"addItem":"扫帚上的头发"},
        choices: [{"text":"把头发还给秀兰","next":"huimen_exp_village_street_well_bucket_return","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
