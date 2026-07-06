/**
 * 《回门》场景模块：exp_ancestral
 */

export const scenes = {
    huimen_exp_ancestral_hall: {
        title: '周家祖祠',
        text: `你来到周家祖祠前。

祖祠的门是朱红色的，门上的漆已经剥落，露出底下层层叠叠的黄符。每一张黄符上都写着一个名字，都是周家男丁。

你推开门，里面是一排排牌位。牌位前的香炉里积着厚厚的香灰，香灰里插着几根没烧完的香。

最上面的牌位写着"周氏先祖"，下面的牌位越来越小，最末一排，有一个空位。

[red]那个空位旁边，已经刻好了你的名字。[/red]

你伸手去摸那个名字，指尖触到木头的瞬间，所有牌位同时发出一声叹息。`,
        effects: {"sanity":-10,"yin":3,"visual":"flicker","visualDuration":2000},
        choices: [{"text":"查看牌位后的暗格","next":"huimen_exp_ancestral_hall_vault","effects":{"yin":2}},{"text":"跪拜祖先，请求宽恕","next":"huimen_exp_ancestor_judge_scene","effects":{"sanity":-5,"yin":3}},{"text":"用香灰涂抹刻着自己名字的牌位","next":"huimen_exp_erase_name","condition":{"hasItem":"香灰"},"effects":{"sanity":5,"yin":-5}},{"text":"查看角落里的画像","next":"huimen_exp_ancestral_painting","effects":{"yin":2}},{"text":"去后墙看看那面女墙","next":"huimen_exp_ancestral_women_wall","condition":{"flag":"huimen_exp_read_ancestral_record"},"effects":{"yin":2}},{"text":"寻找祖祠地下密室","next":"huimen_exp_ancestral_blood_pool","condition":{"flag":"huimen_exp_defied_ancestor"},"effects":{"yin":3}},{"text":"离开祖祠","next":"huimen_exp_village_street","effects":{"yin":1}},{"text":"把族谱上划掉的名字补回去","next":"huimen_exp3_zhou_mansion_cellar_name_stele","condition":{"flag":"huimen_exp3_knows_seven_women"},"effects":{"sanity":5,"yin":-2}},{"text":"跪在祖宗牌位前，承认周家的罪","next":"huimen_exp_zhou_curse_alt"},{"text":"寅时将近，是时候做最后抉择","next":"shichen_yin_entry","condition":{"timeAfter":1620},"hidden":true,"effects":{"time":30}},{"text":"绕到祠堂后面查看","next":"investigate_ancestral_hall"}],
    }
,
    huimen_exp_ancestral_hall_vault: {
        title: '暗格',
        text: `你挪开最老那座牌位，后面露出一方暗格。

暗格里放着一本薄薄的册子，封面上写着"周家秘录"。你翻开第一页，上面记载着周家每一代"不祥女"的名字。

秀兰、柳红、云袖、素心、月娥……每一个名字后面都写着"活埋"、"配冥婚"、"沉塘"。

[red]周家不是靠男丁传宗接代，而是靠女人的血养着。[/red]

你翻到最后一页，发现是空白的。空白页上只有一滴干涸的血，血旁边有一行小字：

[faded]"最后一个名字，由你写。"[/faded]`,
        effects: {"sanity":-15,"yin":3,"setFlag":"huimen_exp_read_ancestral_record"},
        choices: [{"text":"写下秀兰的名字，承认她的身份","next":"huimen_exp_restore_xiulan_name","effects":{"sanity":10,"yin":-10}},{"text":"撕掉这本册子","next":"huimen_exp_burn_ancestral_record","effects":{"sanity":-10,"yin":5}},{"text":"把册子带走","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"周家秘录"}}],
    }
,
    huimen_exp_burn_ancestral_record: {
        title: '焚册',
        text: `你点燃了周家秘录。

火光照亮了祖祠，牌位上的名字在火中扭曲。你听见无数女子的哭声，从火光里传出来。

"你烧了我们的名字！" 她们哭喊，"我们连鬼都做不成了！"

你愣住了。你本想毁掉周家的罪证，却连她们最后的痕迹也烧掉了。

火势蔓延到牌位上，整个祖祠开始燃烧。你想逃，却发现门已经被黄符封死。

[red]你和周家的秘密，一起化成了灰。[/red]`,
        effects: {"sanity":-20,"yin":10},
        ending: 'huimen_exp_forgotten',
    }
,
    huimen_exp_ancestral_painting: {
        title: '祖像',
        text: `你在祖祠的角落里发现一幅画像。

画像已经发黄，画上是一个穿长袍的老者，面目威严。画像下方写着"周氏开基祖"。

你盯着画像看，发现老者的眼睛似乎在动。你再仔细看，他的嘴角也微微上扬。

"你来了。" 画像说，"周家等你很久了。"

你后退一步，画像却从墙上飘下来，悬在你面前。

"秀兰的事，是我定的。" 老者说，"一个女人，坏了周家的名声，就必须除掉。你认同吗？"`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"说不认同","next":"huimen_exp_ancestral_painting_defy","effects":{"sanity":5,"yin":-3}},{"text":"沉默","next":"huimen_exp_ancestral_painting_silent","effects":{"yin":2}}],
    }
,
    huimen_exp_ancestral_painting_defy: {
        title: '驳祖',
        text: `你说："我不认同。人命不是名声能换的。"

画像老者的脸扭曲了，像被火烧的纸一样卷曲起来。

"逆子！" 他尖叫，"你敢反驳祖先！"

"如果祖先错了，就该被反驳。" 你说。

画像"砰"地一声烧起来，化作灰烬落在地上。灰烬里有一张黄符，符上写着"周氏开基祖之灵位"。

你把黄符踩碎。祖祠里的阴影发出一阵骚动，然后渐渐退散。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_defied_ancestor"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_ancestral_painting_silent: {
        title: '沉默',
        text: `你沉默了。

画像老者满意地点点头："好孩子。周家需要你这样的人。"

他伸出手，想拍你的肩膀。你侧身躲开。

"你不认同？" 老者问。

"我不说话，不代表我认同。" 你说，"我只是不想和一张纸争辩。"

画像老者的脸僵住了，然后缓缓飘回墙上，恢复了原来的模样。

你知道，他还会再找机会。`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_ancestral_women_wall: {
        title: '女墙',
        text: `你在祖祠的后墙发现一面"女墙"。

墙上密密麻麻刻着很多名字，都是女子的名字。周氏秀兰、周氏柳红、周氏云袖……每一个名字后面都刻着"不祥"、"沉塘"、"活埋"。

你数了数，一共有三十七个名字。

[red]三十七个女子，三十七条命，撑起周家所谓的"清白"。[/red]

你用手指描摹那些名字，感到一阵刺痛。墙在吸你的血，每描一个字，你的指尖就渗出一滴血。

"把我们的名字记下来。" 一个声音说，"别让世人忘了。"`,
        effects: {"sanity":-10,"yin":3,"setFlag":"huimen_exp_saw_women_wall"},
        choices: [{"text":"用血在墙上写正名","next":"huimen_exp_ancestral_women_wall_rename","effects":{"sanity":-5,"yin":5}},{"text":"把名字抄下来","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"女子名单"}},{"text":"把这些名字抄下来，贴在村口","next":"huimen_exp_zhou_women_alt"}],
    }
,
    huimen_exp_ancestral_women_wall_rename: {
        title: '重写',
        text: `你咬破手指，在每个名字后面写下"正名"二字。

血字渗入墙面，那些原本黯淡的名字一个个亮起来。墙里传来女子的哭声，这次不是悲伤，而是解脱。

"谢谢……" 她们说，"终于有人看见我们了。"

墙面开始剥落，露出底下的红砖。红砖上刻着新字：

[faded]"周氏女子，各有名姓，各有来生。"[/faded]

你感到胸口的压抑轻了很多，像是卸下了三十七年的重担。`,
        effects: {"sanity":10,"yin":-15,"setFlag":"huimen_exp_renamed_women_wall"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}},{"text":"把名单带出村子，让世人知道","ending":"huimen_exp_ending_name_list","condition":{"hasItem":"女子名单"},"effects":{"yin":-5}},{"text":"在村口立一块名碑","ending":"huimen_exp_ending_name_stone","condition":{"flag":"huimen_exp_renamed_women_wall"},"effects":{"yin":-5}},{"text":"一切已明，打开阴阳簿","next":"true_ending_gate","condition":{"flag":"clues_assembled"},"hidden":true}],
    }
,
    huimen_exp_ancestral_candle: {
        title: '点烛',
        text: `你在祖祠的香炉里找到一根没烧完的红烛。

烛身上刻着"长命"二字，是周家男丁出生时点的。你把蜡烛点燃，烛火却是青白色的。

火焰里浮现出许多女子的脸，她们在火中扭曲、挣扎。

"这不是长命烛。" 秀兰的声音说，"这是续命烛。周家男人多活的每一年，都是我们的命续的。"

[red]你看着那根蜡烛，感到一阵恶心。[/red]

你吹灭了它。`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"把蜡烛折断","next":"huimen_exp_ancestral_candle_break","effects":{"sanity":5,"yin":-5}},{"text":"把蜡烛收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"续命烛"}}],
    }
,
    huimen_exp_ancestral_candle_break: {
        title: '折烛',
        text: `你用力折断蜡烛。

蜡烛断成两截，里面的蜡芯不是棉线，而是一缕头发。头发在火焰里卷曲、焦黑，发出一股腥臭。

祖祠里的牌位开始颤抖，最上面的"周氏先祖"牌位"咔嚓"一声裂开。

"你断了周家的命！" 阴影们尖叫。

"不。" 你说，"我断了周家偷来的命。"

蜡烛彻底熄灭，祖祠陷入黑暗。可你并不害怕，因为你知道，黑暗之后，会是真正的天亮。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_broke_continuing_life_candle"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_ancestral_blood_pool: {
        title: '血池',
        text: `你在祖祠地下发现一间密室。

密室里有一个血池，池里不是血，而是红色的液体，像水银一样流动。池边刻着字：

[faded]"周家男丁，饮此延寿。"[/faded]

[red]这就是周家男人活不过四十的真相：他们不是靠自己的命活，而是靠女子的血。[/red]

你看着血池，感到一阵恶心。你想起父亲死时三十九岁，二叔、三姑的丈夫，没有一个活过四十。

原来他们不是短命，是借来的命到期了。`,
        effects: {"sanity":-15,"yin":5,"setFlag":"huimen_exp_saw_blood_pool"},
        choices: [{"text":"把血池砸破","next":"huimen_exp_ancestral_blood_pool_break","effects":{"sanity":-10,"yin":5}},{"text":"离开密室","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_ancestral_blood_pool_break: {
        title: '破池',
        text: `你举起一块石头，砸向血池。

血池破裂，红色的液体喷涌而出。液体流过的地面，浮现出无数女子的脸。她们在液体里挣扎、哭喊，然后化为一道道红光，飞向夜空。

"自由了……" 她们说，"我们自由了……"

祖祠开始崩塌，牌位一个个倒下。你跑出祖祠，身后是一片烟尘。

[red]你毁了周家续命的根。[/red]`,
        effects: {"sanity":-10,"yin":10},
        ending: 'huimen_exp_ending_paper_doll_burned',
    }
,
    huimen_exp_family_tree_alt: {
        title: '新谱',
        text: `你把周家族谱扔进了火盆。

那本泛黄的册子里，每一页都写着周家男丁的名字，却没有一个女子。你看着它烧成灰，又亲手写了一份新的。

新的族谱第一页，是秀兰的名字。第二页，是那个孩子的名字。后面才是周家的男人们。

二叔想阻止你，但秀兰站在你身后，他不敢动。

"从今天起，"你说，"周家欠她们的，一笔笔还。"`,
        choices: [{"text":"重写族谱","ending":"hidden_familyTreeAshes"}],
    }
};
