/**
 * 《回门》场景模块：exp3_clan_head
 */

export const scenes = {
    huimen_exp3_clan_head_house: {
        title: '族长家',
        text: `周家族长住在村东头最大的院子里。院门敞着，里面传出麻将碰撞的声音，还有人的笑声。

你走进去，看见几个穿着绸衫的男人围坐在石桌旁，正在推牌九。最老的那个抬起头，眼皮耷拉着，却像鹰一样锐利。`,
        effects: {"yin":2},
        choices: [{"text":"直接质问他秀兰的事","next":"huimen_exp3_clan_head_confront","effects":{"yin":3}},{"text":"站在一旁看","next":"huimen_exp3_clan_head_watch","effects":{"yin":1}}],
    }
,
    huimen_exp3_clan_head_watch: {
        title: '旁观',
        text: `牌九上的图案不是常见的鱼虾蟹，而是女子的脸。每翻开一张，就有人笑，有人骂。

族长翻到最后一张，脸上露出满意的神色。他把牌一推："今天手气好，井神保佑。"

其他几个人齐声附和，笑声像钝刀刮过骨头。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"问他井神是谁","next":"huimen_exp3_clan_head_god","effects":{"yin":2}},{"text":"掀翻牌桌","next":"huimen_exp3_clan_head_flip","effects":{"yin":5}}],
    }
,
    huimen_exp3_clan_head_confront: {
        title: '质问族长',
        text: `"秀兰？"族长把牌九拢进怀里，"周家的媳妇，轮不到外乡人问。"

"她是被人害死的。"你说。

族长笑了，露出几颗金牙："害死？她是被选中的。井神选中她，是她的福气。"`,
        effects: {"sanity":-3,"yin":4},
        choices: [{"text":"说井神根本不存在","next":"huimen_exp3_clan_head_deny","effects":{"yin":5}},{"text":"问他有没有愧疚","next":"huimen_exp3_clan_head_guilt","effects":{"yin":2}}],
    }
,
    huimen_exp3_clan_head_god: {
        title: '井神',
        text: `"井神？"族长压低声音，"井神就是第一个被沉井的女子。她死得冤，怨气大，周家用香火养着她，她保村子风调雨顺。"

"可她也在索命。"旁边一个年轻人插嘴，被族长瞪了一眼，不敢再说话。

族长转回来看你："每隔十年，井神要一个新娘。这是契约。"`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"说契约可以打破","next":"huimen_exp3_clan_head_break","effects":{"yin":2}},{"text":"问他愿不愿意认错","next":"huimen_exp3_clan_head_guilt","effects":{"yin":2}}],
    }
,
    huimen_exp3_clan_head_flip: {
        title: '掀桌',
        text: `你一把掀翻牌桌。

牌九散落一地，女子的脸在月光下扭曲。族长脸色铁青，几个男人站起来围住你。

"外乡人，你找死。"族长说。

就在这时，地上的牌九忽然自己动起来，拼成一个字："冤"。`,
        effects: {"sanity":-5,"yin":6},
        choices: [{"text":"指着\"冤\"字质问","next":"huimen_exp3_clan_head_word","effects":{"yin":3}},{"text":"趁机跑出院子","next":"huimen_exp_village_street","effects":{"yin":3}}],
    }
,
    huimen_exp3_clan_head_deny: {
        title: '否认',
        text: `"不存在？"族长站起身，院里的灯笼无风自动，"你以为这些年村子凭什么风调雨顺？凭什么五谷丰登？"

"凭的是人命。"你说。

族长的笑容僵在脸上。他身后的墙上，忽然渗出无数水迹，像是有谁在墙后哭泣。`,
        effects: {"sanity":-3,"yin":5},
        choices: [{"text":"继续施压","next":"huimen_exp3_clan_head_pressure","effects":{"yin":3}}],
    }
,
    huimen_exp3_clan_head_guilt: {
        title: '愧疚',
        text: `族长沉默了一会儿。

"愧疚？"他低声说，"我爹把我姐姐沉井的时候，我也愧疚。可他说，不沉井，村子就完了。"

他抬起头，眼里有一丝裂缝："后来我当了族长，才知道……原来只要人心齐，不沉井也能活。可已经停不下来了。"`,
        effects: {"sanity":-2,"yin":2},
        choices: [{"text":"说现在停下来还来得及","next":"huimen_exp3_clan_head_repent","effects":{"sanity":5,"yin":1}},{"text":"说他也是凶手","next":"huimen_exp3_clan_head_accuse","effects":{"yin":4}}],
    }
,
    huimen_exp3_clan_head_break: {
        title: '破契',
        text: `"打破？"族长冷笑，"契约是血写的，要破契约，得用周家人的血。"

他伸出苍老的手，掌心有一道陈年伤疤："我爹当年用我姐姐的血续了契约。我老了，血快流干了。"

旁边几个男人低下头，不敢看他。`,
        effects: {"sanity":-5,"yin":4},
        choices: [{"text":"说可以用其他方式偿还","next":"huimen_exp3_clan_head_repent","effects":{"yin":2}},{"text":"说周家该偿命","next":"huimen_exp3_clan_head_accuse","effects":{"yin":4}}],
    }
,
    huimen_exp3_clan_head_word: {
        title: '冤',
        text: `"你们看。"你指着地上的字，"井神自己写的。这不是保佑，是控诉。"

族长的脸色变了。地上的牌九又动起来，拼出第二字："还"。然后是"我""名"。

"还我名字。"不知从何处传来女子的声音。`,
        effects: {"sanity":-3,"yin":5},
        choices: [{"text":"让族长在族谱上补名","next":"huimen_exp3_clan_head_name","effects":{"yin":2}}],
    }
,
    huimen_exp3_clan_head_pressure: {
        title: '施压',
        text: `你一步一步逼近族长。

"秀兰不是第一个，也不会是最后一个。可今天，我站在这里，就是来终结的。"

院里的水迹越来越多，汇成一条条细流，流向族长的脚边。他的绸鞋被水浸湿，脸色惨白。`,
        effects: {"sanity":-3,"yin":5},
        choices: [{"text":"逼他去祖祠认错","next":"huimen_exp3_clan_head_repent","effects":{"yin":3}}],
    }
,
    huimen_exp3_clan_head_repent: {
        title: '悔过',
        text: `族长沉默了很久，最后长叹一声。

"好。"他说，"我去祖祠。我把族谱上划掉的名字，一个一个写回去。"

他站起身，像是忽然老了二十岁。其他几个男人想拦他，被他一挥手推开。

"周家造孽太久，该还债了。"`,
        effects: {"sanity":5,"yin":-3,"setFlag":"huimen_exp3_clan_head_repents"},
        choices: [{"text":"跟他去祖祠","next":"huimen_exp3_clan_head_ancestral","effects":{"yin":1}}],
    }
,
    huimen_exp3_clan_head_accuse: {
        title: '指控',
        text: `"偿命？"族长笑了，笑声里带着凄凉，"我这条老命，早就不值钱了。可你杀了我也没用，契约还在。"

他从怀里掏出一把匕首，扔在你面前："你要偿命，就杀了我。但杀了我，下一个族长会接着沉井。"

匕首在月光下泛着寒光。`,
        effects: {"sanity":-5,"yin":5},
        choices: [{"text":"不杀他，逼他去认错","next":"huimen_exp3_clan_head_repent","effects":{"sanity":3,"yin":1}},{"text":"拿起匕首","next":"huimen_exp3_clan_head_kill","effects":{"yin":8}}],
    }
,
    huimen_exp3_clan_head_name: {
        title: '补名',
        text: `族长从屋里取出一本厚厚的族谱，翻到被涂黑的几页。

他的手抖得厉害，蘸了朱砂，在涂黑处写下第一个名字。每写一个字，院里的水迹就退一分。

"秀兰"二字落上去时，井边忽然传来一声清晰的叹息。`,
        effects: {"sanity":8,"yin":-5,"setFlag":"huimen_exp3_clan_head_named"},
        choices: [{"text":"继续写","next":"huimen_exp3_clan_head_ancestral","effects":{"yin":1}}],
    }
,
    huimen_exp3_clan_head_kill: {
        title: '刀',
        text: `你拿起匕首，但没有刺向他。

你把匕首插在牌桌上，刀尖穿透一张女子的脸牌。

"我不要你的命。"你说，"我要你记住她们的名字。每一天，每一夜，都记住。"

族长看着你，眼里的光一点点暗下去。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"逼他去祖祠","next":"huimen_exp3_clan_head_repent","effects":{"yin":1}}],
    }
,
    huimen_exp3_clan_head_ancestral: {
        title: '祖祠认错',
        text: `你跟族长来到祖祠。

他跪在祖先牌位前，把族谱摊开，用朱砂补全所有被划掉的名字。补到秀兰时，他的手停了很久。

"秀兰，周家对不起你。"他说。

祠堂里的牌位齐齐震颤，最老的那一块裂开一道缝。`,
        effects: {"sanity":10,"yin":-8,"setFlag":"huimen_exp3_clan_head_repented"},
        choices: [{"text":"扶他起来","next":"huimen_exp3_hidden_clan_head_penance_scene","effects":{"yin":1}}],
    }
,
    huimen_exp3_hidden_clan_head_penance_scene: {
        title: '忏',
        text: `族长把族谱紧紧抱在怀里，老泪纵横。

秀兰的身影出现在祠堂门口。她看着族长，没有恨，只有一种久远的疲惫。

"我原谅你。"她说，"不是为你，是为我自己。"

她转身走出祠堂，阳光从门外涌进来。族长跪在地上，朝她的背影重重磕了一个头。`,
        effects: {"sanity":10,"yin":-10},
        choices: [{"text":"追上秀兰","ending":"huimen_exp3_hidden_clan_head_penance","effects":{"yin":0}}],
    }
};
