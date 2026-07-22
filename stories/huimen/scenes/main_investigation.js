/**
 * 《回门》场景模块：main_investigation
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    investigate_old_house: createScene('investigate_old_house', {title:'老宅调查',text:`你决定暂时不进灵堂，而是在老宅四周细细查看。

雨刚停，地上还湿着，每踩一脚都"咕叽"一声。老宅的院墙爬满了青苔，青苔软得像皮，摸上去凉得像井沿青石。你绕着院墙走，脚下的泥路软得不像路，像踩在一块湿海绵上。

院墙的青苔里嵌着半块碎瓷，瓷片上画着一个"囍"字，但"喜"字的下半部分被人用指甲抠掉了。抠痕很深，深得能看见青苔底下的砖，像有人一边抠一边哭，哭到没力气才停。窗台下有一小堆燃尽的纸灰，你用手拨开，灰是凉的，凉得发黏。灰里藏着一张烧焦的纸条，只剩几个字：

[faded]"……秀兰……井……活埋……"[/faded]

正房的门缝里，塞着一本破旧的日记。你抽出来，是祖父的字迹。字迹抖得很厉害，像是写的人手在抖。最后一页写着：

[faded]"我对不起秀兰。她怀的是周家的孩子，可爹说周家不能有这种丑事。我被锁在东厢房里，从门缝看见她被拖过院子，手指抠着门板的缝隙，却推不开那扇门。一个字也没敢说。"[/faded]

你的手指开始发抖。`,effects:{"sanity":-10,"yin":5,"addItem":"祖父日记残页","setFlag":["knows_xiulan_truth","knowsTruth"]},choices:[createChoice({"text":"把日记收好，继续调查","next":"investigate_items_hub"}),createChoice({"text":"直接去灵堂","next":"huimen_observe_hall"})]}),
    investigate_paper_dolls: createScene('investigate_paper_dolls', {title:'纸人调查',text:`你蹲下身，仔细查看那两个纸扎人。

雨打湿了它们的纸衣，纸衣贴在骨架上，显出底下的竹篾。男纸人的骨架是用竹篾扎的，很普通，竹篾都是白的，扎得也很粗。但女纸人的骨架里，却混着一缕真正的头发——黑色的、柔软的、属于活人的头发。那头发编在竹篾里，像一根黑色的藤缠在白竹上。

你强忍着恶心，用指甲划开女纸人的腹部。纸壳"嗤"地一声裂开，裂口很整齐，像是被人划过一次又一次。纸壳里掉出一张折叠得很小的黄纸，上面用朱砂写着生辰八字。

[faded]"癸丑年七月初七，周氏秀兰。"[/faded]

这是秀兰的八字。周家把她的八字封在纸人里，是要让她生生世世替周家挡灾。

你忽然明白了：这是两回事。女纸人是"镇魂物"，用秀兰的头发和八字把她的一缕残魄锁在里面，让她生生世世替周家挡灾。而男纸人是"替命物"，周家男丁满三十就要扎一个，替他们去死、去成亲、去下井。一个是用来囚女人的魂，一个是用来换男人的命。

你在纸人脚下还发现了一小截红绳，绳结是同心结，但被剪断了。断口很齐，剪的人手很稳，稳得像是早就下定了决心。`,effects:{"sanity":-15,"yin":10,"addItem":["断同心结红绳","秀兰生辰八字"],"setFlag":"paper_doll_investigated"},choices:[createChoice({"text":"烧掉这个纸人","next":"huimen_exp_burn_dolls_alt"}),createChoice({"text":"把红绳收好，走向老宅","next":"huimen_old_house_gate"}),createChoice({"text":"这纸新娘的红绳系法，和赶尸匠见过的冥婚新娘一样","next":"huimen_old_house_gate","effects":{"yin":1,"setFlag":"ganshi_to_qingshi"}})]}),
    investigate_well: createScene('investigate_well', {title:'井边调查',text:`你趴在井口，借着手电光往里看。

井沿凉得像冰，趴上去胳膊都凉了。井水很深，但出奇地清澈。你看见井壁上刻满了字，都是同一个名字，被刻了一遍又一遍：

[faded]"秀兰秀兰秀兰……"[/faded]

那些字刻得密密麻麻，一笔一画都像用刀子剜出来的。刻痕有新有旧，最旧的一道已经风化，刻痕里长满了青苔；最新的一道却像是刚刻上去的——刻痕还发白，白得像新伤。可谁会在井壁上刻字？三十年来，谁在替秀兰刻名字？

井沿上放着一只锈迹斑斑的铁钩，钩尖缠着几根长发。那头发黑得发亮，亮得不像是死的。你把头发取下来，发现发根处还连着一小块头皮。那头皮是干的，干得发脆，一碰就裂。

[red]这不是自然脱落的头发。这是被人生生扯下来的。[/red]

井水里忽然泛起一圈涟漪，像是有人在深处叹了口气。那涟漪一圈圈荡开，荡到井沿，又折回去。`,effects:{"sanity":-12,"yin":12,"addItem":["井壁长发","井沿青苔"],"setFlag":"well_investigated"},choices:[createChoice({"text":"继续下井查看","next":"huimen_exp_well_night"}),createChoice({"text":"退后，去别处调查","next":"huimen_exp_village_street"})]}),
    investigate_ancestral_hall: createScene('investigate_ancestral_hall', {title:'祠堂调查',text:`你绕到祠堂后面，发现一面被牌匾遮住的墙。

牌匾很沉，沉得你搬的时候手都酸了。牌匾后面是一面青砖墙，砖缝里都长着青苔，青苔里渗着水。你搬开牌匾，墙上密密麻麻刻着很多女子的名字。每一个名字前面都刻着"周氏"，但没有生卒年月，只有一个"埋"字。那"埋"字刻得很深，深得像一道伤。

秀兰的名字在倒数第三行。她下面还有两个名字：周氏柳红、周氏云袖。三个名字排在一起，像三座没有碑的坟。

[faded]周家百年，不知埋了多少女子。[/faded]

墙脚有一堆碎瓷片，散在泥里。你蹲下来拼了一会儿，发现是一只摔碎的碗，碗底印着"庚申年聘"四个字。那字是青花，烧在瓷里，烧得发蓝。

你忽然意识到，这不是普通的墙。这是周家的"债墙"——每一个被周家害死的女子，名字都被刻在这里，用来镇住她们的魂。`,effects:{"sanity":-15,"yin":15,"addItem":"债墙拓片","setFlag":"debt_wall_found"},choices:[createChoice({"text":"用石头把这些名字凿下来","next":"huimen_exp_zhou_women_alt"}),createChoice({"text":"把拓片收好","next":"huimen_exp_ancestral_hall"})]}),
    investigate_paper_shop: createScene('investigate_paper_shop', {title:'纸扎铺调查',text:`你推开纸扎铺的门，里面堆满了未完工的纸人。

门"吱呀"一声推开，推开时带起一股风，风把柜台上的纸灰吹得飞起来，落了你一身。纸人堆在角落里，有的有脸，有的没脸，都低着头，像是睡着了。它们的纸衣被烟熏得发黄，黄得像老人的牙。

柜台后面的架子上，摆着一本泛黄的账册。账册的封皮是牛皮的，已经被翻得发毛。你翻开，发现每一页都记录着周家订做的纸人。字是毛笔写的，写得很工整，工整得像在记账：

[faded]"民国二十三年，周家订纸新娘一具，内填秀兰发一束。"[/faded]

[faded]"民国十二年，周家订纸童一具，内填柳红甲一片。"[/faded]

[faded]"民国二十三年，周家订纸女一具，内填云袖衣一角。"[/faded]

每一具纸人，都对应着一个被周家害死的女子。她们的一部分被填进纸人里，替周家挡灾、还债、守墓。

你在账册最后一页，发现了一张夹在里面的契约——周家与纸扎铺的百年契约。契约纸已经发脆，一碰就掉渣。`,effects:{"sanity":-10,"yin":8,"addItem":["族谱碎片二","周家纸人契约"],"setFlag":["paper_shop_investigated","huimen_exp_read_paper_shop_ledger"]},choices:[createChoice({"text":"烧了这张契约","ending":"hidden_paperDollBurned"}),createChoice({"text":"带契约去祠堂对质","next":"huimen_exp_ancestral_hall"})]}),
    investigate_mulberry_tree: createScene('investigate_mulberry_tree', {title:'桑树调查',text:`你围着老桑树转了几圈，发现树干上有一道细长的裂缝。

桑树很老，老得树皮都裂成一块一块的，像老人的皮。裂缝很细，细得你不仔细看就看不见。裂缝里塞着一团东西，你小心翼翼抠出来——是一缕用红绳扎着的头发，头发已经干枯发白，但还能看出曾经乌黑过。那红绳扎得很紧，紧得像是要把头发和树绑在一起。

红绳上系着一个小木牌，刻着"秀兰"两个字。字刻得很深，深得能看见木牌底下的白。

[faded]这是秀兰被活埋前，被周家人从她头上剪下来的。他们把头发封在桑树里，是要借桑树的"丧"音，把她的魂永远困在村子里。[/faded]

你在树根处还发现了几枚铜钱，排成一个奇怪的图案。铜钱排成一个圈，圈里又排成一个十字，那是镇魂钱。铜钱很旧，旧得发绿，绿得像铜锈。

你把这些东西都收了起来。`,effects:{"sanity":-8,"yin":10,"addItem":"镇魂铜钱","setFlag":"mulberry_investigated"},choices:[createChoice({"text":"把头发和红绳一起烧掉","next":"huimen_exp_mulberry_release"}),createChoice({"text":"在树下磕头","next":"huimen_exp_mulberry_tree"})]}),
    investigate_ruins: createScene('investigate_ruins', {title:'戏台废墟调查',text:`你在青石戏台的废墟里翻找。

戏台烧得很透，木梁都烧成炭了，炭黑得发亮。瓦砾里长着草，草长得比人高，一钻进去就扎一身。你拨开草，在烧焦的木梁下，压着半块残破的戏牌，上面写着"春香班"三个字。字是漆写的，漆已经剥落大半，却还能认出来。戏牌旁边有一支银簪子，簪头雕着一朵牡丹。牡丹雕得很细，连花蕊都雕出来了。

[faded]云袖的簪子。[/faded]

你忽然想起守夜人故事里那个叫云袖的旦角。她死在戏台大火里，后来被周生移入青石河。她的簪子怎么会在这里？

废墟深处，你还发现了一块刻着字的石碑。碑半埋在土里，你扒了半天土才看清。碑文记载：周家祖上曾与春香班有过一场"纸人换命"的交易——周家用一具纸人，换云袖为周家挡一次大灾。

[faded]原来周家的债，从百年前就开始了。[/faded]`,effects:{"sanity":-12,"yin":10,"addItem":"周家百年债碑拓片","setFlag":"ruins_investigated"},choices:[createChoice({"text":"去祠堂把债碑和族谱对照","next":"huimen_exp_ancestral_hall"}),createChoice({"text":"把银簪带到井边","next":"huimen_exp_well_night"})]}),
    investigate_items_hub: createScene('investigate_items_hub', {title:'线索整理',text:`你找了个背风的角落，把收集到的线索一一摊开。

角落是老宅后院的柴房，柴房漏雨，好在角落里干着。你把东西摊在一张破桌子上，桌腿不平，你垫了一块砖才稳住。

你手边的线索零零散散，但每一样都透着一股说不出的寒。那寒是从东西里渗出来的，渗进你手指，顺着手指渗进心里。

这些线索拼凑出一个可怕的真相：周家百年来一直在用女子的命抵债。秀兰不是第一个，也不会是最后一个。每一代，都有一个新的"秀兰"被填进井里，填一个，富十年。

[red]除非你终结它。[/red]

你感到肩上的重量。你不仅是回门的周家后人，也可能是唯一能让这些女子安息的人。`,textVariants:[{condition:{hasItem:'祖父日记残页'},text:`一本破旧的日记摊在桌上，是祖父的字迹。最后一页写着"我对不起秀兰"，字迹抖得像写的人手在抖。`},{condition:{hasItem:'秀兰生辰八字'},text:`一张黄纸上用朱砂写着"癸丑年七月初七，周氏秀兰"，被周家封在纸人里替她挡灾。`},{condition:{hasItem:'井壁长发'},text:`一缕从井壁上取下的长发缠在指间，发根还连着一小块头皮，黑得发亮。`},{condition:{hasItem:'债墙拓片'},text:`从祠堂后墙拓下来的女子名字，每一个"周氏"后面都跟着"不祥"或"活埋"。`},{condition:{hasItem:'周家纸人契约'},text:`纸扎铺的百年契约上记着，民国二十三年，周家订纸新娘一具，内填秀兰发一束。`},{condition:{hasItem:'镇魂铜钱'},text:`几枚发绿的铜钱排成镇魂图案，是桑树底下用来困住秀兰的东西。`},{condition:{hasItem:'云袖银簪'},text:`一支簪头刻着"照魂"二字的银簪，是百年前被纸替的戏班女子云袖的遗物。`},{condition:{hasItem:'族谱碎片二'},text:`几片碎族谱上，周家女子的名字被朱砂划掉，只隐约透出兰、红、袖等字。`}],effects:{"sanity":-5,"yin":5,"setFlag":"clues_assembled"},choices:[createChoice({"text":"去祠堂烧毁族谱","next":"huimen_exp_family_tree_alt","condition":{"hasItem":"族谱碎片二"}}),createChoice({"text":"去井底开棺","next":"huimen_red_coffin_discovery","condition":{"custom":(state)=>state.inventory.includes('铜钥匙')||state.inventory.includes('云袖银簪')}}),createChoice({"text":"去纸扎铺终结契约","ending":"hidden_paperDollBurned","condition":{"hasItem":"周家纸人契约"}}),createChoice({"text":"一切已明，打开阴阳簿","next":"true_ending_gate","condition":{"flag":"clues_assembled"},"hidden":true})]}),
};
