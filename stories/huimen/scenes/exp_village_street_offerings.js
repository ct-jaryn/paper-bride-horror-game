/**
 * 《回门》场景模块：exp_village_street_offerings
 */

export const scenes = {
    huimen_exp_village_street_mooncake: {
        title: '月饼',
        text: `你经过一个院子，桌上摆着一盘月饼。

月饼是红色的，像血染过。你拿起一个，发现月饼上印着"团圆"二字。

"今天是中秋吗？" 你问。

"每天都是中秋。" 一个声音说，"因为秀兰死在中秋前夜。"

[red]原来秀兰是在团圆节前一天被活埋的。[/red]

你把月饼放回去，对着月亮鞠了一躬。`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"把月饼带给秀兰","next":"huimen_exp_village_street_mooncake_give","effects":{"sanity":5,"yin":-5}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_mooncake_give: {
        title: '团圆',
        text: `你捧着月饼来到井边。

秀兰看着月饼，眼泪落了下来。

"我死的那天晚上，本来要吃月饼的。" 她说，"周文说，等月亮圆了，就来接我。"

"月亮圆了很多次了。" 你说，"这次，我陪你吃。"

你把月饼掰成两半，一半放在井沿，一半自己咬了一口。月饼是苦的，但你咽了下去。

秀兰也"吃"了一口。她笑了："甜的。原来团圆是甜的。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_ate_mooncake_with_xiulan"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_incense_burner: {
        title: '香炉',
        text: `你在一座废弃的祠堂前找到一个香炉。

香炉里插着许多香，香都熄灭了。你仔细一看，香头上刻着的不是"福"，而是女子的名字。

"这是周家女人用的香炉。" 秀兰说，"我们生前不能进正祠，只能在这里偷偷烧香。"

你把香炉擦干净，点燃三支香，插了进去。

[red]烟雾袅袅升起，在空中化作许多女子的脸。[/red]

她们朝你笑了笑，然后散去。`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
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
    }
,
    huimen_exp_village_street_stone_lion_burn: {
        title: '焚名',
        text: `你点燃那团纸。

火光里，秀兰的名字在燃烧，却没有化为灰，而是化作一只红色的蝴蝶，飞向夜空。

"我自由了。" 蝴蝶说，"谢谢你，守门人。"

另一只石狮也张开了嘴，里面还有更多名字。你一只一只取出，一只一只烧掉。

村口的两只石狮彻底化为了灰烬。从此，周家再也没有守门人了。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"石狮口中的名字"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
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
    }
,
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
    }
,
    huimen_exp_village_street_paper_money_pile: {
        title: '纸钱堆',
        text: `你来到一个院子，院子里堆满了纸钱。

纸钱堆得像小山一样，每一张上都印着"囍"字。你走近，发现纸钱堆里埋着一个人。

是个女子，穿着嫁衣，双手交叠放在胸前，像是睡着了。

"她是秀兰的替身。" 一个声音说，"周家每年给她烧一个替身，替秀兰受过。"

[red]你看着那个和秀兰一模一样的纸人，感到一阵愤怒。[/red]

"她不是秀兰。" 你说，"秀兰不需要替身。"`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"把纸钱堆烧掉","next":"huimen_exp_village_street_paper_money_pile_burn","condition":{"hasItem":"打火机"},"effects":{"sanity":-5,"yin":-5}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_paper_money_pile_burn: {
        title: '焚堆',
        text: `你点燃纸钱堆。

火焰冲天而起，纸钱在火中尖叫、扭曲。那个和秀兰一模一样的纸人坐起来，朝你笑了笑，然后化为灰烬。

"谢谢你。" 她说，"我终于不用替谁受过了。"

火光照亮了整个村子。你看见无数纸人从屋里跑出来，朝着火光跪拜。

[red]你烧了周家三十年的谎言。[/red]`,
        effects: {"sanity":5,"yin":-10,"setFlag":"huimen_exp_burned_paper_money_pile"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_paper_bridge: {
        title: '纸桥',
        text: `你来到村边的小河，河上搭着一座纸桥。

桥是用黄纸和竹篾扎的，很窄，只容一人通过。桥下没有水，只有一层厚厚的纸灰。

你踩上纸桥，桥发出"咯吱"的声响。走到桥中央，你低头看，纸灰里映出许多张脸。

"过桥的人，要留下一个秘密。" 那些脸说。

你想了想，说："我小时候偷过祖母的钱，买了一块糖。"

纸灰泛起涟漪，像是一个个微笑。`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"继续过桥","next":"huimen_exp_moonlit_path","effects":{"yin":1}},{"text":"退回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_song_book: {
        title: '歌本',
        text: `你在路边的垃圾堆里翻到一本旧歌本。

歌本的封面已经烂了，但里面的字迹还很清楚。你翻开一页，是一首叫《兰花花》的民歌：

[faded]"青线线那个蓝线线，蓝格英英的彩，生下一个兰花花，实实的爱死个人……"[/faded]

歌本最后一页写着一行小字："秀兰最爱唱。民国二十二年。"

[red]你把歌本贴在胸口，像是贴着一颗三十年前的心。[/red]`,
        effects: {"sanity":-5,"yin":1,"addItem":"秀兰的歌本"},
        choices: [{"text":"把歌本给秀兰","next":"huimen_exp_village_street_song_book_give","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
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
    }
,
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
    }
,
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
    }
,
    huimen_exp_village_street_wedding_cake: {
        title: '喜糕',
        text: `你来到一户人家的厨房，桌上摆着一盘点心。

点心是红色的，做成喜字的形状。你拿起一块，发现糕点是纸做的，里面塞着一张黄符。

黄符上写着你的生辰八字。

[red]这是给你准备的喜糕。[/red]

你想起秀兰说过，成亲那天要吃桂花糕。可周家给你准备的，是纸做的喜糕。`,
        effects: {"sanity":-8,"yin":3,"addItem":"纸喜糕"},
        choices: [{"text":"把喜糕烧了","next":"huimen_exp_village_street_wedding_cake_burn","effects":{"sanity":5,"yin":-5}},{"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_wedding_cake_burn: {
        title: '焚糕',
        text: `你点燃纸喜糕。

喜糕在火中卷曲，发出凄厉的尖叫。火光里，你看见一个穿新郎服的纸人在跳舞，那纸人的脸和你一模一样。

"你烧了我！" 纸人尖叫，"你烧了自己！"

"你不是我。" 你说，"我是人，你是周家的替身。"

纸人化为灰烬，喜糕里的黄符也烧成了灰。你感到手腕上的红绳松了一些。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"纸喜糕"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_ghost_dog: {
        title: '义犬',
        text: `你看见一只黑狗跟在你身后。

这只狗和之前那只不同，它的身体是半透明的，脖子上系着一根红绳。它看着你，眼神里没有凶光，只有哀求。

"你想带我去哪里？" 你问。

黑狗转身朝一个方向跑去，跑几步就回头看你。

你跟着它，来到一座矮坟前。坟前没有碑，只有一块木板，上面写着"义犬黑子之墓"。

"这是秀兰生前养的狗。" 秀兰的声音说，"我死那晚，它想救我，被打死了。"`,
        effects: {"sanity":-5,"yin":2,"setFlag":"huimen_exp_found_ghost_dog"},
        choices: [{"text":"在坟前磕个头","next":"huimen_exp_village_street_ghost_dog_bow","effects":{"sanity":5,"yin":-5}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_ghost_dog_bow: {
        title: '义犬祭',
        text: `你跪在狗坟前，磕了三个头。

"黑子，谢谢你当年想救秀兰。" 你说，"她现在很好，我会带她走的。"

黑狗的身影凝实了一些，它蹭了蹭你的手，然后化作一道黑光，飞入你的影子里。

"它会保护你。" 秀兰说，"就像当年想保护我一样。"

你站起身，感到自己的影子重了一些。那不是负担，是一份忠诚。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_ghost_dog_protection"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_paper_bird: {
        title: '纸鸟',
        text: `你看见一只纸折的鸟停在井沿。

纸鸟折得很精巧，翅膀还能动。你走近，它歪着头看你，黑豆一样的眼睛里没有光。

"这是秀兰折的。" 一个声音说，"她活着的时候，最会折纸。"

你轻轻捧起纸鸟，发现鸟肚子里塞着一张小纸条：

[faded]"愿来生，做一只自由的鸟。"[/faded]

[red]你把纸鸟举高，它忽然活了过来，从你手里飞走，飞向夜空。[/red]

"它自由了。" 秀兰说。`,
        effects: {"sanity":5,"yin":-3},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
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
    }
,
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
    }
,
    huimen_exp_village_street_rice_bowl: {
        title: '饭碗',
        text: `你在一户人家的灶台上发现一个碗。

碗里装着半碗米饭，米饭已经发黑。碗底压着一张纸条："秀兰的最后一顿饭。"

[red]原来秀兰被活埋前，周家给了她一碗饭，说是送她上路。[/red]

你端起碗，把发黑的米饭倒在地上。

"这不是送你的上路饭。" 你说，"这是周家的罪证。"

米饭落地，化作一群黑色的蚂蚁，四散爬走。`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
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
    }
,
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
    }
,
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
    }
,
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
    }
,
    huimen_exp_village_street_paper_fish: {
        title: '纸鱼',
        text: `你看见一条纸鱼在石板路上跳。

纸鱼是红色的，身上画着鳞片。它一跳一跳地朝井的方向去，像是要回家。

你跟着它来到井边。纸鱼在井沿上停了一下，然后跳进井里。

井水里浮出秀兰的脸，她嘴里咬着那条纸鱼。

"这是我小时候放的纸鱼。" 她说，"每年端午，我都会放一条，许愿能嫁个好人家。"

[red]她的愿望，永远停在了那一年。[/red]

你把手指伸进井水里，轻轻碰了碰纸鱼。纸鱼化作一道红光，绕着秀兰转了一圈，然后消散在水中。

"它回家了。" 秀兰说，"我也该回家了。"`,
        effects: {"sanity":-3,"yin":1},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
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
,
    huimen_exp_village_street_paper_door: {
        title: '街门',
        text: `你走到一户人家门前，发现门是纸糊的。

门上画着门神，可门神的眼睛被挖掉了，只剩下两个黑洞。你推开门，门后不是屋子，而是一片漆黑。

漆黑里传来许多人的呼吸声，像是有无数人在门后等着你。

"进来吧。" 他们说，"进来就不用再怕了。"

[red]你知道这不是邀请，是陷阱。[/red]

你松开手，纸门自动关上。门上的门神眼睛又长了出来，正直勾勾地盯着你。

你后退一步，发现门缝里渗出一缕黑烟。黑烟在空中凝成一只手，朝你抓来。你侧身躲开，黑烟抓了个空，不甘心地缩回门里。

[whisper]"下次，你会进来的。"[/whisper] 门后的声音说。

你没有回答。你转身离开，但你知道，这扇门还会再出现。`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_village_street_paper_door_god: {
        title: '门神',
        text: `你盯着纸门上的门神。

门神的眼睛动了动，然后开口说话："年轻人，你不该来这里。"

"我来还债。" 你说。

"债？" 门神冷笑，"周家的债，不是你一个人能还清的。"

"那也要还。" 你说，"还一点，是一点。"

门神沉默了一会儿，然后说："把门上的红纸撕了，我能帮你一次。"

你撕下门上的红纸，门神的身影消失了。你感到一阵轻松，像是某种阻碍被清除了。风吹过，红纸化作一只红色的蝴蝶，向村子外面飞去。`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp_helped_by_door_god"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
