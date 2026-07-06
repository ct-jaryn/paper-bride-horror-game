/**
 * 《回门》场景模块：main_investigation
 */

export const scenes = {
    investigate_old_house: {
        title: '老宅调查',
        text: `你决定暂时不进灵堂，而是在老宅四周细细查看。

院墙的青苔里嵌着半块碎瓷，瓷片上画着一个"囍"字，但"喜"字的下半部分被人用指甲抠掉了。窗台下有一小堆燃尽的纸灰，你用手拨开，发现里面藏着一张烧焦的纸条，只剩几个字：

[faded]"……秀兰……井……活埋……"[/faded]

正房的门缝里，塞着一本破旧的日记。你抽出来，是祖父的字迹。最后一页写着：

[faded]"我对不起秀兰。她怀的是周家的孩子，可爹说周家不能有这种丑事。我眼睁睁看着她被推进井里，一个字也没敢说。"[/faded]

你的手指开始发抖。`,
        effects: {"sanity":-10,"yin":5,"addItem":"祖父日记残页","setFlag":"knows_xiulan_truth"},
        choices: [{"text":"把日记收好，继续调查","next":"investigate_items_hub"},{"text":"直接去灵堂","next":"huimen_old_house_gate"}],
    }
,
    investigate_paper_dolls: {
        title: '纸人调查',
        text: `你蹲下身，仔细查看那两个纸扎人。

男纸人的骨架是用竹篾扎的，很普通。但女纸人的骨架里，却混着一缕真正的头发——黑色的、柔软的、属于活人的头发。

你强忍着恶心，用指甲划开女纸人的腹部。纸壳里掉出一张折叠得很小的黄纸，上面用朱砂写着生辰八字。

[faded]"癸丑年七月初七，周氏秀兰。"[/faded]

这是秀兰的八字。周家把她的八字封在纸人里，是要让她生生世世替周家挡灾。

你在纸人脚下还发现了一小截红绳，绳结是同心结，但被剪断了。`,
        effects: {"sanity":-15,"yin":10,"addItem":"断同心结红绳","setFlag":"paper_doll_investigated"},
        choices: [{"text":"烧掉这个纸人","next":"huimen_exp_burn_dolls_alt"},{"text":"把红绳收好，走向老宅","next":"huimen_old_house_gate"}],
    }
,
    investigate_well: {
        title: '井边调查',
        text: `你趴在井口，借着手电光往里看。

井水很深，但出奇地清澈。你看见井壁上刻满了字，都是同一个名字，被刻了一遍又一遍：

[faded]"秀兰秀兰秀兰……"[/faded]

刻痕有新有旧，最旧的一道已经风化，最新的一道却像是刚刻上去的——可谁会在井壁上刻字？

井沿上放着一只锈迹斑斑的铁钩，钩尖缠着几根长发。你把头发取下来，发现发根处还连着一小块头皮。

[red]这不是自然脱落的头发。这是被人生生扯下来的。[/red]

井水里忽然泛起一圈涟漪，像是有人在深处叹了口气。`,
        effects: {"sanity":-12,"yin":12,"addItem":"井壁长发","setFlag":"well_investigated"},
        choices: [{"text":"继续下井查看","next":"huimen_exp_well_night"},{"text":"退后，去别处调查","next":"huimen_exp_village_street"}],
    }
,
    investigate_ancestral_hall: {
        title: '祠堂调查',
        text: `你绕到祠堂后面，发现一面被牌匾遮住的墙。

搬开牌匾，墙上密密麻麻刻着很多女子的名字。每一个名字前面都刻着"周氏"，但没有生卒年月，只有一个"埋"字。

秀兰的名字在倒数第三行。她下面还有两个名字：周氏柳红、周氏云袖。

[faded]周家百年，不知埋了多少女子。[/faded]

墙脚有一堆碎瓷片，你拼了一会儿，发现是一只摔碎的碗，碗底印着"庚申年聘"四个字。

你忽然意识到，这不是普通的墙。这是周家的"债墙"——每一个被周家害死的女子，名字都被刻在这里，用来镇住她们的魂。`,
        effects: {"sanity":-15,"yin":15,"addItem":"债墙拓片","setFlag":"debt_wall_found"},
        choices: [{"text":"用石头把这些名字凿下来","next":"huimen_exp_zhou_women_alt"},{"text":"把拓片收好","next":"huimen_exp_ancestral_hall"}],
    }
,
    investigate_paper_shop: {
        title: '纸扎铺调查',
        text: `你推开纸扎铺的门，里面堆满了未完工的纸人。

柜台后面的架子上，摆着一本泛黄的账册。你翻开，发现每一页都记录着周家订做的纸人：

[faded]"民国三年，周家订纸新娘一具，内填秀兰发一束。"[/faded]

[faded]"民国十二年，周家订纸童一具，内填柳红甲一片。"[/faded]

[faded]"民国二十三年，周家订纸女一具，内填云袖衣一角。"[/faded]

每一具纸人，都对应着一个被周家害死的女子。她们的一部分被填进纸人里，替周家挡灾、还债、守墓。

你在账册最后一页，发现了一张夹在里面的契约——周家与纸扎铺的百年契约。`,
        effects: {"sanity":-10,"yin":8,"addItem":"族谱碎片二","setFlag":"paper_shop_investigated"},
        choices: [{"text":"烧了这张契约","ending":"hidden_paperDollBurned"},{"text":"带契约去祠堂对质","next":"huimen_exp_ancestral_hall"}],
    }
,
    investigate_mulberry_tree: {
        title: '桑树调查',
        text: `你围着老桑树转了几圈，发现树干上有一道细长的裂缝。

裂缝里塞着一团东西，你小心翼翼抠出来——是一缕用红绳扎着的头发，头发已经干枯发白，但还能看出曾经乌黑过。

红绳上系着一个小木牌，刻着"秀兰"两个字。

[faded]这是秀兰被活埋前，被周家人从她头上剪下来的。他们把头发封在桑树里，是要借桑树的"丧"音，把她的魂永远困在村子里。[/faded]

你在树根处还发现了几枚铜钱，排成一个奇怪的图案。那是镇魂钱。

你把这些东西都收了起来。`,
        effects: {"sanity":-8,"yin":10,"addItem":"镇魂铜钱","setFlag":"mulberry_investigated"},
        choices: [{"text":"把头发和红绳一起烧掉","next":"huimen_exp_mulberry_guard_alt"},{"text":"在树下磕头","next":"huimen_exp_moonlit_grave"}],
    }
,
    investigate_ruins: {
        title: '戏台废墟调查',
        text: `你在青石戏台的废墟里翻找。

烧焦的木梁下，压着半块残破的戏牌，上面写着"春香班"三个字。戏牌旁边有一支银簪子，簪头雕着一朵牡丹。

[faded]云袖的簪子。[/faded]

你忽然想起守夜人故事里那个叫云袖的旦角。她死在戏台大火里，后来被周生移入青石河。她的簪子怎么会在这里？

废墟深处，你还发现了一块刻着字的石碑。碑文记载：周家祖上曾与春香班有过一场"纸人换命"的交易——周家用一具纸人，换云袖为周家挡一次大灾。

[faded]原来周家的债，从百年前就开始了。[/faded]`,
        effects: {"sanity":-12,"yin":10,"addItem":"周家百年债碑拓片","setFlag":"ruins_investigated"},
        choices: [{"text":"去祠堂把债碑和族谱对照","next":"huimen_exp_ancestral_hall"},{"text":"把银簪带到井边","next":"huimen_exp_well_night"}],
    }
,
    investigate_items_hub: {
        title: '线索整理',
        text: `你找了个背风的角落，把收集到的线索一一摊开。

祖父日记、秀兰生辰八字、井壁长发、债墙拓片、周家契约、桑树头发、云袖银簪、族谱碎片……

这些线索拼凑出一个可怕的真相：周家百年来一直在用女子的命抵债。秀兰不是第一个，也不会是最后一个。

[red]除非你终结它。[/red]

你感到肩上的重量。你不仅是回门的周家后人，也可能是唯一能让这些女子安息的人。`,
        effects: {"sanity":-5,"yin":5,"setFlag":"clues_assembled"},
        choices: [{"text":"去祠堂烧毁族谱","next":"huimen_exp_family_tree_alt","condition":{"hasItem":"族谱碎片二"}},{"text":"去井底开棺","next":"approach_coffin"},{"text":"去纸扎铺终结契约","ending":"hidden_paperDollBurned","condition":{"hasItem":"周家纸人契约"}}],
    }
};
