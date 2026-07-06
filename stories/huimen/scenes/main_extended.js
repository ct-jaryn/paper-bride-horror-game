/**
 * 《回门》场景模块：main_extended
 * 扩展主线关键路径，增加推进感与路径深度
 */

export const scenes = {
    huimen_village_gate: {
        title: '入村',
        text: `你绕过老槐树，踏上进村的小路。

村口立着一块石碑，碑身被青苔覆盖，字迹斑驳。你伸手拂去青苔，露出八个字：

[faded]"入村者三，出村者一。"[/faded]

你心头一凛。这是什么意思？是说三个人进来，只有一个人能出去？还是说……

李婆的灯笼在你身后晃了晃："别看了。这碑立了三十年，每个字都是血写的。"`,
        effects: {"sanity":-3,"yin":2,"setFlag":"huimen_saw_village_stele"},
        choices: [
            {"text":"追问碑文含义","next":"huimen_read_stele","effects":{"yin":1}},
            {"text":"快步走向老宅","next":"huimen_paper_doll_warning","effects":{"yin":1}},
            {"text":"绕过石碑，从侧路进村","next":"huimen_paper_doll_warning","effects":{"sanity":-2,"yin":2}}
        ],
    }
,
    huimen_read_stele: {
        title: '血碑',
        text: `你凑近石碑，借着灯笼光细看。

碑的背面刻着密密麻麻的小字，都是名字。你一眼就认出了"周"字——那是周家的族谱，却被刻在这座入村的石碑上，像是一份诅咒的名单。

"这些名字，"李婆说，"都是三十年前那晚，亲眼看着秀兰被活埋的人。他们后来都死了，死法各不相同，但都有一个共同点——"她顿了顿，"死前都喊着一个名字。"

[whisper]"秀兰。"[/whisper]

你摸了摸自己的手腕，那根红绳似乎又紧了一分。`,
        effects: {"sanity":-5,"yin":3},
        choices: [
            {"text":"继续往老宅走","next":"huimen_paper_doll_warning","effects":{"yin":1}},
            {"text":"在碑前站一会儿","next":"huimen_paper_doll_warning","effects":{"sanity":-3,"yin":2}}
        ],
    }
,
    huimen_paper_doll_warning: {
        title: '纸人拦路',
        text: `你加快脚步，可那两个纸扎人不知何时挡在了路中央。

它们的脸上还是那种诡异的笑，但男纸人的嘴微微张开，风里传来极细的声音：

[whisper]"别喝交杯酒……别喝……"[/whisper]

女纸人的头又转向你，这次你看见她的眼眶里不是墨点，而是两颗小小的、湿漉漉的眼泪。

[red]它们不是在吓你。它们在警告你。[/red]

李婆的灯笼突然灭了。黑暗中，纸人的声音更清晰了："子时之前，找到她的名字。找不到，你就是下一个新郎。"`,
        effects: {"sanity":-8,"yin":5,"setFlag":"heard_paper_whisper"},
        choices: [
            {"text":"问它们秀兰的名字在哪里","next":"huimen_old_house_gate","effects":{"sanity":-3,"yin":2}},
            {"text":"绕过纸人，冲向老宅","next":"huimen_old_house_gate","effects":{"yin":1}},
            {"text":"把纸人扶正，恭恭敬敬走过","next":"huimen_old_house_gate","effects":{"sanity":5,"yin":-2}}
        ],
    }
,
    huimen_after_li_po: {
        title: '李婆的背影',
        text: `你快步穿过村街，李婆的白灯笼在身后晃了晃，终究没有跟上来。

可你越靠近老宅，空气越冷。路边的纸人一个个转过头，脸上画着的笑在月光下泛着惨白。你听见它们用极细的声音说："新郎官，慢点走，新娘子会跟不上的。"

你不敢回头。你知道，秀兰就在你身后某处，或许在井底，或许在纸人里，或许就在你脚下的影子里。

老宅的轮廓出现在雾气中，门口那盏红灯笼亮得刺眼。`,
        effects: {"sanity":-5,"yin":3},
        choices: [
            {"text":"继续走向老宅","next":"huimen_paper_doll_warning","effects":{"yin":1}},
            {"text":"绕到后院看看","next":"huimen_exp_village_street","effects":{"yin":2}},
            {"text":"站在原地，等秀兰现身","next":"huimen_paper_doll_warning","condition":{"flag":"knowsTruth"},"effects":{"sanity":-5,"yin":3}}
        ],
    }
,
    huimen_old_house_gate: {
        title: '老宅门前',
        text: `你终于来到周家老宅门前。

门没有关严，留着一条缝。缝里透出青白色的烛光，还有一股纸钱和檀香混合的味道。门板上贴着一张黄符，符上写着你的生辰八字。

你伸手推门，门却自己"吱呀"一声开了。

堂屋里跪着一群人，听见门响，齐刷刷地转过头来。他们的嘴角弯着同样的弧度，像被同一根线牵着的木偶。

"回来啦。"他们说。`,
        effects: {"sanity":-10,"yin":3},
        choices: [
            {"text":"迈进老宅","next":"to_old_house","effects":{"yin":1}},
            {"text":"先在门外观察","next":"to_old_house","effects":{"sanity":-3,"yin":1}},
            {"text":"转身离开","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":5}}
        ],
    }
,
    huimen_observe_hall: {
        title: '堂前止步',
        text: `你站在老宅堂屋门口，没有立刻进去。

堂屋里的光线很奇怪。两根红蜡烛的火焰不是黄色的，而是泛着青白色，像两团鬼火。棺材上的倒挂囍字被烛火一照，影子投在墙上，像是一个女人在低头哭泣。

你注意到，棺材前面的供桌上摆着三样东西：一杯酒、一碗饭、一双红筷子。酒杯里的酒是浑的，碗里的饭是生的，红筷子却整整齐齐地插在饭上——那是给死人上供的摆法。

[red]这不是给祖母的供品。这是给你的。[/red]

二叔的声音从堂屋深处传来："进来吧，吉时快到了。"`,
        effects: {"sanity":-10,"yin":3},
        choices: [
            {"text":"迈进堂屋","next":"huimen_enter_coffin_room","effects":{"yin":1}},
            {"text":"先绕到棺材侧面看一眼","next":"huimen_coffin_inspection","effects":{"sanity":-5,"yin":2}},
            {"text":"问二叔供桌上的东西是什么意思","next":"huimen_enter_coffin_room","effects":{"sanity":-3,"yin":1}}
        ],
    }
,
    huimen_enter_coffin_room: {
        title: '踏入灵堂',
        text: `你迈进堂屋，脚下的青砖发出空洞的回响。

二叔、三姑、四婶跪成一排，他们的手腕上都系着红绳，红绳的另一端消失在棺材底下。你每走一步，那些红绳就轻轻颤动一下，像是在呼吸。

棺材上贴着一个倒挂的"囍"字，字是用朱砂写的，在烛光下像是一滩血。你注意到棺材盖没有钉死，留了一条缝。

"跪下吧。"二叔说，"给你祖母磕个头。"

可你知道，棺材里躺着的，可能不是祖母。`,
        effects: {"sanity":-12,"yin":4},
        choices: [
            {"text":"问为什么棺材上贴囍字","next":"ask_coffin","effects":{"yin":1}},
            {"text":"走近棺材看一眼","next":"huimen_coffin_inspection","effects":{"sanity":-5,"yin":2}},
            {"text":"观察亲戚们的手腕红绳","next":"observe_red_strings","effects":{"sanity":-8,"yin":2}}
        ],
    }
,
    huimen_coffin_inspection: {
        title: '棺侧',
        text: `你绕到棺材侧面，发现棺盖上刻着一行小字：

[faded]"周氏秀兰，未过门而亡。今以周家嫡孙配之，以全其名。"[/faded]

你的血一下子凉了。

[red]祖母的棺材里，要配的是秀兰。[/red]

棺材缝里渗出一点点暗红色的液体，你用手指抹了一点，凑到鼻尖闻了闻——不是血，是朱砂 mixed with 某种香料。这是冥婚的封棺仪式，意味着棺材里已经"住"了两个人。

二叔的手搭在你肩上："别看了。看了，就更要成亲了。"`,
        effects: {"sanity":-15,"yin":5,"setFlag":"saw_coffin_inscription"},
        choices: [
            {"text":"推开棺盖看个究竟","next":"huimen_enter_coffin_room","effects":{"sanity":-10,"yin":3}},
            {"text":"后退，先问清楚","next":"huimen_enter_coffin_room","effects":{"yin":1}},
            {"text":"质问二叔这是什么意思","next":"ask_coffin","effects":{"sanity":-5,"yin":1}}
        ],
    }
,
    huimen_red_coffin_discovery: {
        title: '井底红棺',
        text: `你跌跌撞撞冲到后院，井沿上的铜镜碎片在月光下泛着冷光。

你不知哪来的勇气，抓着井绳滑了下去。井水冰凉刺骨，越往下越红。终于，你的脚踩到了硬物。

那是一口红漆棺材，棺盖上钉着九根桃木钉，每根钉子上都缠着一张黄符。符上写着你的生辰八字。

[red]这才是秀兰真正的棺木。[/red]

棺材旁边散落着一些女子的饰物：一支银簪、半块玉佩、一束干枯的头发。你捡起银簪，簪头刻着两个字："照魂"。`,
        effects: {"sanity":-20,"yin":10,"addItem":"云袖银簪","setFlag":"found_red_coffin"},
        choices: [
            {"text":"用银簪撬开棺盖","next":"open_red_coffin","condition":{"hasItem":"云袖银簪"},"effects":{"sanity":-10,"yin":5}},
            {"text":"去找铜钥匙","next":"find_bones","effects":{"yin":2}},
            {"text":"先上去想想办法","next":"huimen_truth_revelation","effects":{"sanity":3,"yin":1}}
        ],
    }
,
    huimen_truth_revelation: {
        title: '真相如刀',
        text: `你爬出井口，坐在井沿上喘气。

月光照在无字碑上，碑身浮现出一行行血字：

[faded]"周家秀兰，年十六。与周家少爷有情，珠胎暗结。周家恐丑事外扬，于子时活埋于井底，对外宣称未婚卒。秀兰含冤三十年，求周家后人还我名分，令我归土。"[/faded]

你浑身发抖。

[red]秀兰不是病死的。她是被周家活埋的。[/red]

而那个周家少爷，正是你的祖父。你胸口那颗红痣突然发烫，像是某种烙印在回应这段血债。`,
        effects: {"sanity":-15,"yin":5,"setFlag":"knowsTruth"},
        choices: [
            {"text":"回老宅找族谱","next":"huimen_seek_evidence","effects":{"yin":1}},
            {"text":"去井底开棺，带她走","next":"huimen_red_coffin_discovery","effects":{"yin":2}},
            {"text":"在碑前发誓为她正名","next":"swear_justice","effects":{"sanity":5,"yin":-5,"setFlag":"xiulanMercy"}}
        ],
    }
,
    huimen_seek_evidence: {
        title: '寻证',
        text: `你悄悄摸进老宅东厢房。

樟木箱底有一本泛黄的族谱。最后一页，秀兰的名字被墨水涂黑了，旁边用朱笔写着"周氏不祥女"五个字。

你手指发抖，把涂黑的地方一点点刮开。

秀兰。周家长子未婚妻。民国二十三年卒。

[red]她不是不祥。她是被周家活埋的。[/red]

你在她名字旁边，用颤抖的手写下："周氏秀兰，明媒正娶。"刚写完最后一个字，窗外的纸钱忽然停了。远处传来一声似有似无的叹息。`,
        effects: {"sanity":-10,"yin":-10,"setFlag":"restored_xiulan_name"},
        choices: [
            {"text":"把族谱带去给秀兰看","next":"huimen_family_tree_confront","effects":{"yin":1}},
            {"text":"先去井底开棺","next":"huimen_red_coffin_discovery","effects":{"yin":2}},
            {"text":"在祠堂公开族谱","next":"huimen_exp_zhou_women_alt","effects":{"sanity":5,"yin":-3}}
        ],
    }
,
    huimen_family_tree_confront: {
        title: '对簿',
        text: `你带着改写过的族谱回到井边。

秀兰的身影从井水里浮出来。她看着你手里的族谱，眼眶里红色的泪光闪烁。

"你……真的把我的名字写回去了？"她的声音很轻，像怕惊碎什么。

"不只是名字。"你说，"我把'不祥女'三个字也划掉了。你是周家的人，从来都是。"

秀兰伸出手，苍白的手指穿过族谱纸页。纸页上的墨迹忽然亮了一下，像是被什么力量认可了。

"三十年，"她说，"我等了三十年，就想听周家人说一句：你是我的。"`,
        effects: {"sanity":10,"yin":-15,"setFlag":"xiulanMercy"},
        choices: [
            {"text":"现在我可以带你走了","next":"huimen_prepare_burial","effects":{"yin":1}},
            {"text":"先解开红棺的封印","next":"open_red_coffin","effects":{"yin":2}},
            {"text":"让族谱上的所有女子都被看见","next":"huimen_exp_zhou_women_alt","effects":{"sanity":5,"yin":-5}}
        ],
    }
,
    huimen_xiulan_forgiveness: {
        title: '她说的原谅',
        text: `秀兰看着字条，又看着你。

"你祖父写了对不起。"她说，"可三十年，我等的不只是一句对不起。"

"那你还想要什么？"你问。

"我想要周家承认我。"她说，"不是作为鬼新娘，不是作为不祥女，是作为周秀兰——一个活生生的人。"

你点点头："我可以做到。族谱上，墓碑上，我都会写下你的名字。"

秀兰的眼泪落进井水里，井水第一次变得清澈。她伸出手，那只苍白的手穿过你的身体，你没有感到冷，而是感到一阵温暖。

"那我跟你走。"她说。`,
        effects: {"sanity":15,"yin":-20,"setFlag":"xiulanMercy","addItem":"秀兰的嫁衣"},
        choices: [
            {"text":"准备安葬她","next":"huimen_prepare_burial","effects":{"yin":1}},
            {"text":"先带她去见周家列祖列宗","next":"huimen_family_tree_confront","effects":{"yin":1}}
        ],
    }
,
    huimen_prepare_burial: {
        title: '备葬',
        text: `天快亮了。

你回到老宅，找出一身干净的白衣、一篮纸钱、一束从村口采来的野菊。你要把秀兰从井底接出来，好好安葬。

四婶看见你，没有阻拦，只是递给你一把铁锹："后山那块无字碑，是她唯一能去的地方。周家不让她进祖坟。""

"那从今以后，"你说，"她就是我的家人。我给她立碑。"`,
        effects: {"sanity":5,"yin":-5,"addItem":"葬花"},
        choices: [
            {"text":"去后山选葬地","next":"huimen_gather_villagers","effects":{"yin":1}},
            {"text":"先去井底把她的骨殖请上来","next":"give_letter","effects":{"yin":2}},
            {"text":"在村口买一口薄棺","next":"huimen_gather_villagers","condition":{"hasItem":"清代铜钱"},"effects":{"yin":1}}
        ],
    }
,
    huimen_gather_villagers: {
        title: '请村民作证',
        text: `你抱着秀兰的嫁衣和孩子的骸骨走出老宅，身后跟着一队沉默的村民。

他们没有阻拦你，只是远远跟着。纸人们站在屋檐下，低着头，像是在送行。

你停在村街中央，大声说："周家秀兰，不是不祥女。她是我祖父未过门的妻子，是周家害了她。今天，我要给她名分，让她入土为安。"

没有人回应。但你注意到，有几户人家的门缝里，露出女子的脸。她们在看你，眼神里不再是恐惧，而是某种期待。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_villagers_witnessed_burial"},
        choices: [
            {"text":"继续去后山","next":"huimen_choose_burial_site","effects":{"yin":1}},
            {"text":"让村民们也写下她的名字","next":"huimen_exp_zhou_women_alt","effects":{"sanity":5,"yin":-5}}
        ],
    }
,
    huimen_choose_burial_site: {
        title: '择地',
        text: `你来到后山，无字碑立在荒草中。

碑旁有一棵老桂树，树龄看上去比村子还老。你想起秀兰说过，她最喜欢桂花。每年八月，桂花落在井沿上，是她唯一能闻到的香味。

[red]就葬在这里吧。[/red]

你用手挖开桂树下的泥土。泥土很松，像是早就被人挖开过。你挖到一尺深时，指尖碰到了一个硬物——是一只小小的虎头鞋，已经朽烂了。`,
        effects: {"sanity":-5,"yin":-3,"setFlag":"huimen_chose_burial_site"},
        choices: [
            {"text":"把虎头鞋一并安葬","next":"huimen_burial_ritual","effects":{"sanity":5,"yin":-5}},
            {"text":"继续挖坟坑","next":"huimen_burial_ritual","effects":{"yin":1}},
            {"text":"把虎头鞋收好，带给秀兰看","next":"give_letter","effects":{"yin":2}}
        ],
    }
,
    huimen_burial_ritual: {
        title: '归土',
        text: `你把秀兰的嫁衣、孩子的骸骨、那只朽烂的虎头鞋，一起放进土坑。

天边泛起鱼肚白。第一缕阳光照在无字碑上时，碑身上的血字慢慢褪去，取而代之是普通的刻字：

[faded]"周氏秀兰之墓"[/faded]

你捧起土，一捧一捧地盖上去。

"秀兰，"你说，"愿你下辈子，能嫁一个真心待你的人。"

一个穿红嫁衣的女子站在阳光下，朝你福了一福，然后化作点点红光消散。

你终于走出了山村。

但你知道，这个村子的罪，还没有还完。`,
        effects: {"sanity":20,"yin":-30},
        choices: [
            {"text":"离开山村","next":"bury_xiulan","ending":"redemption"},
            {"text":"想起族谱上的正名，把族谱也埋在墓旁","next":"bury_xiulan","condition":{"flag":"restored_xiulan_name"},"hidden":true,"ending":"hidden_perfect_redemption"}
        ],
    }
};
