/**
 * 《回门》场景模块：exp3_granny_wang
 */

export const scenes = {
    huimen_exp3_granny_wang_house: {
        title: '王婆家',
        text: `村街拐角有一间低矮的茅屋，门口挂着一串干辣椒和一只风干的老鼠。门缝里飘出艾草和红糖的味道。

你敲了敲门，一个沙哑的声音说："进来吧，外乡人。我等你很久了。"`,
        effects: {"yin":1},
        choices: [{"text":"推门进去","next":"huimen_exp3_granny_wang_inside","effects":{"yin":1}},{"text":"问她为什么等你","next":"huimen_exp3_granny_wang_ask","effects":{"yin":1}}],
    }
,
    huimen_exp3_granny_wang_inside: {
        title: '王婆',
        text: `屋里很暗，只有灶上一盏油灯。一个老婆婆坐在灶前，正在熬一锅黑漆漆的药。

她抬起头，脸上皱纹纵横，眼睛却亮得吓人。"你是来找秀兰的？"她问，"那丫头命苦，是我亲手给她穿上的绣鞋。"`,
        effects: {"sanity":-2,"yin":2},
        choices: [{"text":"质问她为什么害秀兰","next":"huimen_exp3_granny_wang_blame","effects":{"yin":2}},{"text":"问她是否后悔","next":"huimen_exp3_granny_wang_regret","effects":{"yin":1}}],
    }
,
    huimen_exp3_granny_wang_ask: {
        title: '为何等我',
        text: `王婆用勺子搅了搅药锅，药汁里浮出一张人脸，很快又散了。

"我梦里总有人告诉我，会有一个外乡人来问我秀兰的事。"她说，"我等了很多年，等到自己都快成鬼了。"

她指了指墙角的柜子："那双绣鞋还在。你想看看吗？"`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"看绣鞋","next":"huimen_exp3_granny_wang_shoes","effects":{"yin":2}},{"text":"问她秀兰的事","next":"huimen_exp3_granny_wang_inside","effects":{"yin":1}}],
    }
,
    huimen_exp3_granny_wang_shoes: {
        title: '绣鞋',
        text: `柜子里放着一双大红色的绣鞋，鞋面上绣着并蒂莲，针脚细密。

鞋尖各缀着一颗珍珠，珍珠已经发黄，像两颗凝固的眼泪。王婆说："穿上这双鞋回门的女子，都会被井神收走。这是周家的规矩，我改不了。"`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"把绣鞋烧掉","next":"huimen_exp3_granny_wang_shoes_burn","effects":{"sanity":5,"yin":-3}},{"text":"问她是谁定的规矩","next":"huimen_exp3_granny_wang_rule","effects":{"yin":1}}],
    }
,
    huimen_exp3_granny_wang_blame: {
        title: '质问',
        text: `"害她？"王婆的手抖了一下，药汁溅到灶台上，发出"嗤"的一声，"我是帮凶，可刀不是我磨的。周家族长说，不回门的媳妇会坏了村子的风水。我只是……不敢不听。"

她的眼泪落进药锅，药汁更黑了。`,
        effects: {"sanity":-2,"yin":2},
        choices: [{"text":"说她可以赎罪","next":"huimen_exp3_granny_wang_redemption_path","effects":{"sanity":3,"yin":1}},{"text":"转身离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp3_granny_wang_regret: {
        title: '悔',
        text: `王婆沉默了很久。

"后悔？"她低声说，"我每天晚上都能听见她在井里哭。我给她烧了很多纸钱，可她不要钱，她要的是一个道歉。"

她抬起头看着你："你能替我说一声对不起吗？"`,
        effects: {"sanity":2,"yin":1},
        choices: [{"text":"答应她","next":"huimen_exp3_granny_wang_redemption_path","effects":{"sanity":3,"yin":1,"setFlag":"huimen_exp3_granny_wang_sorry"}},{"text":"说你要她自己说","next":"huimen_exp3_granny_wang_speak","effects":{"yin":2}}],
    }
,
    huimen_exp3_granny_wang_rule: {
        title: '规矩',
        text: `"规矩？"王婆冷笑，"周家为了发财，编出来的规矩。每代娶一个外姓女子，回门那日沉井，换村子十年太平。"

她指着墙上的年画："那画上的送子娘娘，原型就是第一个被沉井的女子。人们拜她，是因为不敢记得她原本的名字。"`,
        effects: {"sanity":-3,"yin":2,"setFlag":"huimen_exp3_knows_first_woman"},
        choices: [{"text":"问她第一个女子叫什么","next":"huimen_exp3_granny_wang_first_name","effects":{"yin":1}}],
    }
,
    huimen_exp3_granny_wang_first_name: {
        title: '第一个名字',
        text: `王婆凑近油灯，压低声音："她叫阿沅。是周家第一代媳妇，也是第一个发现井里秘密的人。"

"她发现什么秘密？"你问。

"她发现井底有金子。"王婆说，"可金子是用命换的。她不愿再害人，就被周家以中邪之名沉了井。"

灶上的药锅忽然翻涌，像是有谁在底下搅动。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"去井底找阿沅的骨殖","next":"huimen_exp3_well_bottom","effects":{"yin":2}},{"text":"继续和王婆谈","next":"huimen_exp3_granny_wang_redemption_path","effects":{"yin":1}}],
    }
,
    huimen_exp3_granny_wang_redemption_path: {
        title: '赎罪之路',
        text: `王婆从怀里摸出一把生锈的剪刀。

"这是当年剪她头发用的剪刀。"她说，"你若能在井边烧掉这双绣鞋，再用这把剪刀剪断她腕上的红绳，她就能走。"

她把剪刀和绣鞋一起推到你面前，手抖得厉害。`,
        effects: {"sanity":3,"yin":-1,"addItem":"王婆的剪刀"},
        choices: [{"text":"收下东西去井边","next":"huimen_exp_well_night","effects":{"yin":1}},{"text":"让她一起去","next":"huimen_exp3_granny_wang_together","effects":{"yin":2}}],
    }
,
    huimen_exp3_granny_wang_speak: {
        title: '让她自己说',
        text: `"我自己说？"王婆的脸色变了，"我老了，走不到井边。你让我在这里说，她听不见的。"

她忽然抓住你的手，力气大得不像老人："你带我去。我跪在她面前，亲口说对不起。"`,
        effects: {"sanity":-2,"yin":3},
        choices: [{"text":"扶她去井边","next":"huimen_exp3_granny_wang_together","effects":{"yin":2}},{"text":"甩开她的手","next":"huimen_exp_village_street","effects":{"yin":2}}],
    }
,
    huimen_exp3_granny_wang_together: {
        title: '同去',
        text: `你扶着王婆走向井边。

她的脚步很轻，像踩在云上。每走一步，她身上的阴气就淡一分，等到了井边，她已经变得半透明。

秀兰的身影从井水里浮出来。王婆扑通跪下："秀兰，我对不住你。"

秀兰看了她很久，最后轻轻叹了口气："你起来吧。我恨不动了。"`,
        effects: {"sanity":8,"yin":-5,"setFlag":"huimen_exp3_granny_wang_forgiven"},
        choices: [{"text":"烧掉绣鞋","next":"huimen_exp3_granny_wang_shoes_burn_together","effects":{"sanity":5,"yin":-3}}],
    }
,
    huimen_exp3_granny_wang_shoes_burn: {
        title: '王婆烧鞋',
        text: `你把绣鞋扔进火里。

火光中，鞋子发出尖叫，像是有无数女子在鞋里哭泣。你念出秀兰的名字，哭声渐渐平息，最后只剩下一堆暗红的灰烬。

王婆站在你身后，喃喃道："断了，终于断了。"`,
        effects: {"sanity":5,"yin":-3,"setFlag":"huimen_exp3_burned_red_shoes"},
        choices: [{"text":"离开王婆家","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp3_granny_wang_shoes_burn_together: {
        title: '一同焚鞋',
        text: `王婆亲手把绣鞋扔进火里。

火焰腾起时，她的身影也随之燃烧。秀兰伸手想拦，王婆摇摇头："我欠你的，该还了。"

火光熄灭后，地上只剩一双烧焦的鞋模，和一缕青烟。秀兰站在青烟里，朝你轻轻点头。

你知道，王婆终于安息了。`,
        effects: {"sanity":10,"yin":-8,"setFlag":"huimen_exp3_burned_red_shoes"},
        choices: [{"text":"离开","ending":"huimen_exp3_hidden_granny_wang_rest","effects":{"yin":0}}],
    }
};
