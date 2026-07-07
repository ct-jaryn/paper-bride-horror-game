/**
 * 《回门》场景模块：exp2_river
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_riverbank: createScene('huimen_exp2_riverbank', {title:'河边',text:`你循着水声，来到河边。

河水不是流动的，而是静止的，像一面黑色的镜子。水面上漂着许多纸船，每只船都是黄纸折的，船头点着一根小蜡烛。烛光在水里映出倒影，却照不出岸上的东西——你低头看水里的自己，发现自己没有脸。

夜风吹过来，带着一股水腥味，混着一丝若有若无的桂花香。芦苇在岸边沙沙地响，像有人在低声说话。

[whisper]"过河的人，要留下影子。"[/whisper]

你低头看自己的影子，发现它比平常淡了许多，淡得像一张薄纸，像是要被河水吸走。`,textVariants:[{condition:{hasVisited:'huimen_exp2_reed_bundle'},text:`你把芦苇中的嫁衣推向水面。嫁衣入水时发出一声叹息，水底浮现秀兰的身影，她伸手接过嫁衣，指尖穿过金线。`},{condition:{hasVisited:'huimen_exp2_granary_search'},text:`你把粮仓里的虎头鞋放入河水中。鞋面上的虎头在水中化开，秀兰低头看着，肩膀轻轻颤了一下。`},{condition:{hasVisited:'huimen_exp2_kitchen_stove_listen'},text:`你打开厨娘的桂花蜜罐子，把蜜倒入河里。甜香在水面散开，秀兰的脸浮出来，第一次露出一点近似满足的神情。`},{condition:{hasVisited:'huimen_exp2_kitchen_firewood'},text:`你把灶下找到的头发一缕一缕放入河水中。黑发入水即散，秀兰伸手接住，那些发丝像找到了主人。`},{condition:{hasVisited:'huimen_exp2_ruins_doll'},text:`你把周文的纸偶放进水里。纸偶遇水化开，秀兰看着那团模糊的人形，没有说话，只是轻轻叹了口气。`},{condition:{hasVisited:'huimen_exp2_school_book'},text:`你把秀兰的课堂笔记展开在河面上。字迹被水洇开，秀兰看着上面自己的笔迹，眼眶里慢慢浮出泪。`},{condition:{hasVisited:'huimen_exp2_tailor_dress'},text:`你把裁缝铺里的嫁衣铺在水面上。嫁衣在河中展开，像一朵红莲，秀兰的身影在水中穿上它。`},{condition:{hasVisited:'huimen_exp2_tailor_secret_cut'},text:`你把布上的秀兰放入河中。布中的身影游向水里的秀兰，两个身影合而为一。`},{condition:{hasVisited:'huimen_exp2_graveyard_dig'},text:`你把秀兰的铜戒指放入河水中。戒指落水，秀兰伸手戴上，那枚戒指在她指间发出一点温润的光。`},{condition:{hasVisited:'huimen_exp2_graveyard_search'},text:`你把坟前的桂花撒入河水中。桂花一沾水面就往下沉，秀兰在花香里闭上了眼睛。`},{condition:{hasVisited:'huimen_exp2_riverbank_whisper'},text:`你手中握着河边青石的拓片。水底的青石像认得你，拓片上的字开始发光。`},{condition:{hasVisited:'huimen_exp2_river_other_side'},text:`你刚刚把长命锁交给秀兰。她握着那把锁，锁上的"长命百岁"四个字渐渐清晰。`},{condition:{hasVisited:'huimen_exp2_child_ghost_gift'},text:`你刚刚把鬼孩的眼泪溶入河水中。孩子们的哭声停了，秀兰身旁浮现几个模糊的小小身影，围着她安静下来。`},{condition:{hasVisited:'huimen_exp2_midwife_house'},text:`你带来的是稳婆的接生记录。秀兰看着那张写着"母子俱亡"的纸，身上的怨气又淡了一分。`}],effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"沿河岸走","next":"huimen_exp2_riverbank_walk","effects":{"yin":1}}),createChoice({"text":"捡起一只纸船看看","next":"huimen_exp2_paper_boat_read","effects":{"yin":1}}),createChoice({"text":"蹲在河边，对着河水说话","next":"huimen_exp2_riverbank_whisper","effects":{"yin":-3}}),createChoice({"text":"找一处浅滩渡河","next":"huimen_exp2_river_cross","effects":{"yin":3}}),createChoice({"text":"去下游找那盏未点燃的河灯","next":"huimen_exp2_river_lantern","effects":{"yin":1}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_riverbank_walk: createScene('huimen_exp2_riverbank_walk', {title:'河岸',text:`你沿着河岸走。

河岸上的草不是绿色的，而是灰白色，像被火烧过，烧剩了灰烬。草叶上挂着露珠，每一滴珠子里都映着一张女子的脸——不同的脸，有老有少，眉眼间都带着愁苦。你走过，露珠就落下来，滴在土里，"啪嗒"一声，像眼泪落地。

你走过一片芦苇荡。芦苇很高，比人还高，芦苇花已经飞尽，只剩光杆子。风一吹，芦苇发出沙沙的声响，像有人在低声说话，却听不清在说什么。

[red]河尽头有一座石桥，桥洞下似乎藏着什么东西。那东西在动，像是一群受惊的猫。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"去石桥看看","next":"huimen_exp2_stone_bridge","effects":{"yin":1}}),createChoice({"text":"拨开芦苇","next":"huimen_exp2_reed_bundle","effects":{"yin":2}}),createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_riverbank_whisper: createScene('huimen_exp2_riverbank_whisper', {title:'水语',text:`你蹲在河边，对着河水轻声说："秀兰，我来了。"

河水开始泛起涟漪，一圈一圈，从你说话的地方扩散开来，像是一个人在回应你。水里的纸船纷纷让开，让出一条水路，露出河底的一块青石。

青石是平的，嵌在河底的淤泥里。石头上刻着字，字是阴刻，被水泡得发黑：

[faded]"秀兰沉骨之处，后人莫忘。"[/faded]

[whisper]"我没有忘。"[/whisper] 你说，声音轻得连自己都快听不见。

水里的青石颤了一下，像是在点头。`,effects:{"sanity":3,"yin":-5},choices:[createChoice({"text":"把青石上的字拓下来","next":"huimen_exp2_riverbank","effects":{"yin":1,"addItem":"河边青石刻字"}}),createChoice({"text":"继续和河水说话","next":"huimen_exp2_river_talk_more","effects":{"yin":-3}})]}),
    huimen_exp2_river_talk_more: createScene('huimen_exp2_river_talk_more', {title:'河忆',text:`你继续对着河水说话。

你说外面的世界——城里有了电灯，夜里也能亮得像白天；女子可以上学堂，可以剪头发，可以自己挣钱养活自己；没有人会因为生了个女儿就把她扔进井里。

你说迟到的正义——三十年了，周家欠秀兰的，迟早要还。

河水静静地听，纸船静静地漂。每一只纸船都歪着头，像是也在听。

忽然，水面浮出一张脸。是秀兰，但不是井里那个湿漉漉的、怨气冲天的鬼，是她十六岁时的样子——年轻，干净，眼角有一颗泪痣，像是从没受过委屈。

"谢谢你告诉我。" 她说，笑了一下，那笑很淡，"下辈子，我一定要去看看。"`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_river_memory_shared"},choices:[createChoice({"text":"在河边写下秀兰的名字","ending":"huimen_exp2_ending_river_memory","effects":{"yin":-5}}),createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_river_cross: createScene('huimen_exp2_river_cross', {title:'河边渡河',text:`你找到一处浅滩，试探着踏入河水。

河水冰冷刺骨，却不是水的冷。你每走一步，就感到有什么东西在抓你的脚踝——许多只手，冰凉的，湿漉漉的，从河底伸上来。它们不抓你的脚，只是摸，像是在确认你是谁。

水没过你的膝盖，又没过你的腰。你咬牙往前走，每一脚都沉得像踩在泥里。

河对岸站着一个人影，背对着你，穿着大红嫁衣。嫁衣在水雾里红得刺眼，像一摊血。

[red]那是秀兰，还是另一个新娘？你看不清她的脸，只能看见她的背影——瘦得像一根竹竿。[/red]`,effects:{"sanity":-8,"yin":5},choices:[createChoice({"text":"继续往前走","next":"huimen_exp2_river_other_side","effects":{"yin":3}}),createChoice({"text":"退回河岸","next":"huimen_exp2_riverbank","effects":{"sanity":-3,"yin":1}})]}),
    huimen_exp2_river_other_side: createScene('huimen_exp2_river_other_side', {title:'对岸',text:`你终于走到对岸，水从你身上往下淌，凉得你打了个寒颤。

那个人影缓缓转过身。不是秀兰，是一个更老的女子，脸上布满皱纹，像一张揉皱了的纸。她的眼眶是两个黑洞，没有眼珠，黑洞里却渗出黑色的水。

"我不是秀兰。" 她说，声音苍老，像是从地底传上来的，"我是她娘。我等了三十年，终于等到有人把她带来。"

她伸出手，手里是一枚生锈的长命锁。锁面上刻着"长命百岁"四个字，字已经被锈盖住了大半。`,effects:{"sanity":-5,"yin":3,"addItem":"秀兰的长命锁"},choices:[createChoice({"text":"把长命锁交给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"秀兰的长命锁","setFlag":"huimen_exp2_returned_longevity_lock"}}),createChoice({"text":"收好长命锁","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_river_lantern: createScene('huimen_exp2_river_lantern', {title:'河灯',text:`你在河边发现一盏未点燃的河灯。

河灯是用黄纸扎的，扎成莲花的形状，花瓣一层一层，每一层都写着小小的字。灯芯是一缕细细的头发，头发是黑的，系在灯芯的棉线上。

你把灯拿起来，翻过来，发现灯底写着"秀兰"二字。字是新的，不像三十年的旧物，像是有人刚写上去的——可这河里，已经三十年没有人放灯了。

[red]这是秀兰生前放的河灯，三十年了，还没有漂出去。它一直在河里转，像是在等一个人。[/red]`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"点燃河灯","next":"huimen_exp2_river_lantern_light","condition":{"hasItem":"打火机"},"effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把河灯放回河里","next":"huimen_exp2_river_lantern_release","effects":{"yin":-3}}),createChoice({"text":"收好","next":"huimen_exp2_riverbank","effects":{"yin":1,"addItem":"秀兰的河灯"}})]}),
    huimen_exp2_river_lantern_light: createScene('huimen_exp2_river_lantern_light', {title:'河灯点灯',text:`你掏出打火机，打着火，凑近河灯的灯芯。

火苗舔上灯芯——那缕头发做成的灯芯——发出"滋"的一声，像头发被烧。火苗不是红的，是金的，金得发亮，像寺庙里的长明灯。

河灯没有燃烧，反而变得更亮，像一只小小的太阳，把周围的河水都照亮了。水里的纸船纷纷让开，让出一条路来。

"你点燃了我的灯。" 秀兰的声音说，从灯芯里传来，"我可以跟着它走了。"`,effects:{"sanity":5,"yin":-5,"removeItem":"秀兰的河灯"},choices:[createChoice({"text":"放灯入河","ending":"huimen_exp2_ending_lantern_river","effects":{"yin":-5}})]}),
    huimen_exp2_river_lantern_release: createScene('huimen_exp2_river_lantern_release', {title:'放灯',text:`你把河灯轻轻放进河里。

河灯没有沉，而是稳稳地漂在水面上。水面泛起涟漪，像是一只手在推着它，把它推向远处。

河灯越漂越远，越来越小，最后变成一点金光，消失在水雾里。

"它会漂到该去的地方。" 秀兰说，声音从远处传来，"谢谢你。"`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]})
};
