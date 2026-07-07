/**
 * 《回门》场景模块：exp2_midwife
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_midwife_house: createScene('huimen_exp2_midwife_house', {title:'稳婆家',text:`你来到村东头一座矮屋前。

屋子矮得几乎要贴到地上，屋顶的茅草已经发黑，像一块捂了很久的抹布。门窗紧闭，门缝里却透出昏黄的灯光，那灯光一跳一跳的，像是要灭了又撑着。

你推开门，门"吱呀"一声，像老鼠的尖叫。一股浓重的药味扑面而来，混着一股说不清的腥甜，像血，又像铁锈。

屋里摆满了接生用的器具：剪刀、秤、铜盆，还有一叠叠染血的布，叠得整整齐齐，却已经发黄发硬。墙上挂着一串干蒜，蒜辫里缠着红绳，红绳末端系着一个小铃铛，铃铛不响，像是哑了。

正中的床上躺着一个老妇人，盖着白布，一动不动。白布是新的，白得刺眼，盖得严严实实，连脸都蒙上了。床头点着一盏长明灯，灯里的油是黑的，火苗也是黑的，只发出一点点光。

[red]她已经死了三十年，却还在等下一个产妇。床边的接生箱还开着，里面的剪刀还磨得锃亮。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"掀开白布","next":"huimen_exp2_midwife_body","effects":{"yin":3}}),createChoice({"text":"查看接生箱","next":"huimen_exp2_midwife_box","effects":{"yin":2}}),createChoice({"text":"对着尸体说话","next":"huimen_exp2_midwife_talk","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你已从稳婆口中听过真相，床板下或许还有暗格","next":"huimen_exp2_midwife_secret_room","condition":{"flag":"huimen_exp2_heard_midwife_confession"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp2_midwife_body: createScene('huimen_exp2_midwife_body', {title:'稳婆遗躯',text:`你伸出手，捏住白布的一角，慢慢掀开。

布是凉的，凉得像井水。老妇人的脸露出来，干瘪如纸，皮贴在骨头上，像一层风干的羊皮。她的眼睛却睁得很大，眼珠已经干成两颗黑石头，却还瞪着房梁，像是看见了什么恐怖的东西，看见后就再也没能闭上。

她的手里攥着一张黄符，攥得很紧，指节都僵了。符上用朱砂写着"封"字，朱砂已经发黑。

你试图掰开她的手。她的手指硬得像木头，你掰了一下，她却突然开口，声音从干瘪的喉咙里挤出来，像风穿过缝隙：

"别碰我。我手里封着秀兰孩子的魂。封了三十年，松不得。"

[whisper]"周家不让我说。说了，我连鬼都做不成。"[/whisper]`,effects:{"sanity":-10,"yin":5},choices:[createChoice({"text":"质问她真相","next":"huimen_exp2_midwife_confession","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"抢过黄符","next":"huimen_exp2_midwife_seal","effects":{"yin":5}}),createChoice({"text":"放下白布","next":"huimen_exp2_midwife_house","effects":{"yin":1}})]}),
    huimen_exp2_midwife_confession: createScene('huimen_exp2_midwife_confession', {title:'逼问',text:`你质问稳婆："秀兰的孩子到底怎么了？"

稳婆的身体忽然坐起来，白布从她身上滑落。她的魂魄从干瘪的身体里飘出来，是一个苍老的女人的轮廓，跪在你面前，头磕在地上，发出"咚咚"的响。

"我说，我都说。" 她哭，哭声像锯木头，"秀兰被活埋时，孩子还没死。我在井口听见孩子在肚子里动。周家老太爷怕孩子生下来丢人，让我把孩子掐死在肚子里。"

"我掐了。" 她抬起头，空洞的眼眶对着你，"我亲手掐的。我接了一辈子的生，那一回，我是在杀人。秀兰在井底还在叫孩子的名字，叫了一夜，叫到天亮，就不叫了。"

[red]你感到一阵恶心，从胃里翻上来，烧得你喉咙发疼。[/red]`,effects:{"sanity":-15,"yin":5,"setFlag":"huimen_exp2_heard_midwife_confession"},choices:[createChoice({"text":"告诉她去告诉秀兰真相","next":"huimen_exp2_midwife_release","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"冷冷地离开","next":"huimen_exp_village_street","effects":{"yin":3}})]}),
    huimen_exp2_midwife_release: createScene('huimen_exp2_midwife_release', {title:'释放',text:`你说："你去告诉秀兰真相。告诉她，孩子不是她的错。"

稳婆愣住了，跪着的身子晃了一下："你不怪我？"

"我怪你。" 你说，每一个字都像是从牙缝里挤出来的，"但秀兰有权知道真相。她等了三十年，等的就是这一句话。"

稳婆点点头，磕了一个头，磕得很重，地上裂开一道缝。她化作一缕青烟，慢慢飘向井的方向。

你感到屋里的药味淡了许多，那盏黑火的长明灯也跳了一下，亮了一些。`,effects:{"sanity":5,"yin":-10,"setFlag":"huimen_exp2_midwife_released"},choices:[createChoice({"text":"把稳婆的忏悔记在心里，带出村子","ending":"huimen_exp2_ending_midwife_secret","effects":{"yin":-5}}),createChoice({"text":"去井边看秀兰","next":"huimen_exp2_riverbank","effects":{"yin":1}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_midwife_seal: createScene('huimen_exp2_midwife_seal', {title:'夺符',text:`你用力掰开稳婆的手。她的手指硬得像铁，你掰得指甲都翻了，血渗出来，才把她的手指一根一根掰开。

黄符一离开她的手，就自己燃烧起来。火光不是红的，是白的，白得刺眼。火光里，一个婴儿的虚影浮现出来，哇哇大哭，哭声尖锐，像是要把屋顶掀翻。

"我的孩子！" 秀兰的声音从四面八方传来，从墙里，从地下，从空气里。

婴儿化作一道光，飞向井的方向。稳婆发出一声惨叫，身体化为灰烬，散落在床上，像一捧黑色的雪。`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"追向井边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_midwife_box: createScene('huimen_exp2_midwife_box', {title:'接生箱',text:`你打开接生箱。

箱子是木的，已经发黑，铜锁也锈了。你掀开盖子，里面没有器具，只有一叠叠写着名字的纸条。纸条叠得整整齐齐，每一张都用红线系着，系法是接生时系脐带的结。

每张纸条上都写着一个女子的名字和"难产卒"三个字。字迹工整，是账房先生的笔迹。你翻了许久，翻到最后，找到了秀兰的名字。

纸条背面有一行小字，字迹潦草，像是匆忙写的：

[faded]"秀兰，民国二十三年中秋前夜，母子俱亡。"[/faded]

[red]"母子俱亡"四个字，把两条命轻描淡写地抹去了。连一个字都不愿多给。[/red]`,effects:{"sanity":-10,"yin":3,"addItem":"稳婆的接生记录"},choices:[createChoice({"text":"把记录带给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"removeItem":"稳婆的接生记录"}}),createChoice({"text":"收好","next":"huimen_exp2_midwife_house","effects":{"yin":1}})]}),
    huimen_exp2_midwife_talk: createScene('huimen_exp2_midwife_talk', {title:'稳婆对话',text:`你对着稳婆的尸体说："秀兰的孩子，是周家欠她的。不是你的错，但你可以选择说出来。"

尸体没有动，白布下面一片死寂。屋里的风停了，那盏黑火的长明灯也定住了，火苗不动。

过了一会儿，一个苍老的声音从尸体里传出来，像是从很深的地方涌上来的：

"我一辈子接生，第一次觉得自己是在杀人。那天晚上我回到家，洗了三遍手，洗不掉。"

"那就赎罪。" 你说，"说出来，就是赎罪的开始。"`,effects:{"sanity":3,"yin":-3},choices:[createChoice({"text":"继续劝说","next":"huimen_exp2_midwife_confession","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_midwife_secret_room: createScene('huimen_exp2_midwife_secret_room', {title:'稳婆密室',text:`你在稳婆家的床板下摸到一个暗格。床板是木的，已经朽了，你一推就开。

暗格里有一本日记，日记是手缝的，布面，已经发黄。你翻开，纸页"哗啦"地响。日记里记载着稳婆一生的秘密——接生了多少孩子，死了多少产妇，收了多少银子。

你翻到民国二十三年那一页，那一页的字迹比别页都潦草，像是在颤抖中写的：

[faded]"今日为周家不祥女接生。孩子已出母腹，是男婴，会哭。周老太爷亲手按死。我无力阻止，只能把孩子的脐带藏起。此罪此生难消。夜夜听见婴儿哭，不敢睡。"[/faded]

日记的最后一行，字迹歪斜得几乎认不出："若有来生，再不当稳婆。"`,effects:{"sanity":-15,"yin":5,"setFlag":"huimen_exp2_found_midwife_secret"},choices:[createChoice({"text":"把日记给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"addItem":"稳婆日记"}}),createChoice({"text":"烧了日记","next":"huimen_exp2_midwife_house","effects":{"sanity":5,"yin":-3}})]})
};
