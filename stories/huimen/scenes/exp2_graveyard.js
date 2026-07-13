/**
 * 《回门》场景模块：exp2_graveyard
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_graveyard: createScene('huimen_exp2_graveyard', {title:'祖坟地',text:`你循着一股烧纸的焦糊味，来到村后的祖坟地。

天已经黑透了，月亮被云遮住，只漏下一层薄薄的灰光。坟头密密麻麻，像一片起伏的海，从山脚一直铺到半山腰。每一座坟前都插着白幡，幡是用粗布做的，没有字，只有墨点画成的眼睛。风一吹，幡就动，眼睛就跟着你转。

坟地的土是湿的，踩上去"咕叽咕叽"响，像踩在一块浸透了水的海绵上。空气里有一股陈年的香火味，混着泥土的腥，还有一丝若有若无的桂花甜——秀兰的味道。

你走过一座座坟，发现男丁的坟都很高大，碑是青石的，刻着姓名和功名。女子的坟却只有一个小小的土包，有些甚至连碑都没有，只插一根木棍，棍上系着白布。

[whisper]"她们连死后都没有名字。"[/whisper]

你数了数，这样的小土包，有三十几个。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"寻找秀兰的坟","next":"huimen_exp2_graveyard_search","effects":{"yin":1}}),createChoice({"text":"在一座无名坟前停下","next":"huimen_exp2_unknown_grave","effects":{"yin":1}}),createChoice({"text":"查看最大的那座祖坟","next":"huimen_exp2_ancestor_grave","effects":{"yin":2}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_graveyard_search: createScene('huimen_exp2_graveyard_search', {title:'寻坟',text:`你在坟地里寻找秀兰的坟。

你一座一座地看过去，墓碑上的名字一个一个地念。没有秀兰。没有周秀兰。没有"兰"字。

你找了很久，鞋上沾满了泥。在最偏僻的角落，你发现一块扁平的石头，半埋在土里，像被人故意藏起来。石头上没有字，只放着一束枯萎的桂花，和一双小小的红绣鞋。鞋已经褪色，红变成了灰白，鞋底却还干净，像是有人常来擦。

你蹲下身，搬开石头。石头下面压着一张纸，纸已经发黄发脆，一碰就掉渣：

"秀兰之骨，分埋三处。此处仅有一缕头发。"

[red]原来连她的坟，都是不完整的。她被分了尸，连死后都不得团圆。[/red]

你把纸翻过来，背面还有一行小字，是另一种笔迹："埋于此，让她永世不得超生。"`,effects:{"sanity":-8,"yin":3,"addItem":"秀兰坟前的桂花"},choices:[createChoice({"text":"把桂花带到河边献给秀兰","next":"huimen_exp2_riverbank","condition":{"hasItem":"秀兰坟前的桂花"},"effects":{"sanity":5,"yin":-5,"removeItem":"秀兰坟前的桂花"}}),createChoice({"text":"在坟前磕头","next":"huimen_exp2_graveyard_bow","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"继续寻找其他骨头","next":"huimen_exp2_graveyard_dig","effects":{"yin":2}})]}),
    huimen_exp2_graveyard_bow: createScene('huimen_exp2_graveyard_bow', {title:'坟前祭拜',text:`你在秀兰的坟前跪下，膝盖磕在湿冷的泥地上，陷下去半寸。

"秀兰，" 你说，"我来看你了。不是作为周家的后人，而是作为一个人。"

你重重磕了三个头。每磕一下，额头就传来一阵冰凉的麻，像是有人在替你抚摸。

磕完第三个头，坟头的石头忽然"咔"地裂了一道缝。缝里飘出一缕青烟，烟是凉的，盘旋着，在空中凝成一个女子的身形。她穿着素衣，朝你福了一礼，姿态老旧，像是从前的女子。

"谢谢你。" 她说，声音很轻，像风，"三十年了，第一次有人给我磕头。他们都绕着我的坟走，怕沾了晦气。"

她的身影慢慢淡下去，淡成一缕烟，钻回石头缝里。石头又合上了，缝却还在，像一道愈合不了的伤疤。`,effects:{"sanity":10,"yin":-8,"setFlag":"huimen_exp2_bowed_at_grave"},choices:[createChoice({"text":"回祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}})]}),
    huimen_exp2_unknown_grave: createScene('huimen_exp2_unknown_grave', {title:'无名坟',text:`你停在一座小小的无名坟前。

坟很小，比其他的都矮，像是一个孩子的坟。坟前没有供品，没有白幡，只有一根枯萎的野菊，斜插在土里，花瓣已经掉光了。

你蹲下身，轻轻把野菊扶正。野菊的茎已经干了，一碰就断。你把断了的茎重新插进土里，用手拍了拍，让它立住。

"你是谁？" 你问，声音在空旷的坟地里回荡。

坟里沉默了很久。久到你以为不会有回应了，坟里才传来一个微弱的声音，像是从很深的地方传上来的：

"我叫阿绣。三十年前被沉塘。没有人记得我。"

[red]阿绣。扎纸匠爱过的那个女子。[/red]

她的声音很轻，却很清晰，像是贴着你的耳朵说的。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"告诉她扎纸匠还在等她","next":"huimen_exp2_unknown_grave_release","effects":{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_told_axiu_about_craftsman"}}),createChoice({"text":"在坟前再插一根野菊","next":"huimen_exp2_graveyard","effects":{"sanity":3,"yin":-3}})]}),
    huimen_exp2_unknown_grave_release: createScene('huimen_exp2_unknown_grave_release', {title:'转告',text:`你对着坟说："阿绣，扎纸匠一直在等你。他扎了三十年纸人，每一个都当是给你扎的替身。他老了，眼睛花了，还在扎。"

坟里沉默了很久。土动了一下，又动了一下。然后，一个女子的身影从土里浮出来。她长得清秀，眉眼间带着愁苦，发髻散乱，衣裳是湿的，还在滴水。

"他真的……还在等我？" 她问，声音发抖。

"是的。" 你说，"你可以去找他了。"

她低下头，水珠从她的发梢滴落，砸在土上，渗进去。她抬起头时，脸上有了笑，那笑容很淡，却像开了一朵花。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_axiu_released"},choices:[createChoice({"text":"回祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}}),createChoice({"text":"去纸扎铺告诉老人","next":"huimen_exp_paper_shop","condition":{"flag":"huimen_exp2_axiu_released"},"effects":{"yin":-3}})]}),
    huimen_exp2_ancestor_grave: createScene('huimen_exp2_ancestor_grave', {title:'祖坟',text:`你来到最大的那座祖坟前。

坟前立着一块高大的石碑，碑是青石的，打磨得光滑。碑上刻着"周氏列祖列宗之墓"，字是阳刻，一笔一画都透着力气。碑前的香炉是铜的，还冒着青烟，像是刚有人祭拜过。供桌上摆着三牲，肉已经发黑，酒已经发酸。

你绕到碑后，发现背面刻着许多小字。字是阴刻，刻得很浅，像是怕被人看见。每一个字都是一个女子的名字：秀兰、柳红、阿绣、云袖……数了数，有三十几个。每一个名字后面都刻着"供养"二字。

你伸手去摸那些字。字是凉的，可你的指尖却感到一阵刺痛，像是被针扎了。

[red]她们不是被供奉，是被献祭。[/red]

碑后的土是黑的，黑得发亮，像是被血浸透过很多次。`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"用石头凿掉\"供养\"二字","next":"huimen_exp2_ancestor_grave_chisel","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"在碑前烧纸钱","next":"huimen_exp2_ancestor_grave_burn","condition":{"hasItem":"打火机"},"effects":{"sanity":-5,"yin":5}}),createChoice({"text":"离开","next":"huimen_exp2_graveyard","effects":{"yin":1}})]}),
    huimen_exp2_ancestor_grave_chisel: createScene('huimen_exp2_ancestor_grave_chisel', {title:'凿碑',text:`你捡起一块尖锐的石头，开始凿碑上的"供养"二字。

石头凿在石碑上，发出"叮叮"的声响，每一声都在坟地里回荡。每凿一下，石碑就颤抖一下，像是有什么东西在碑里尖叫。碑缝里渗出红色的液体，不知是锈，还是血。

你不管，继续凿。凿到手指磨破，血渗进石碑的缝里，碑就抖得更厉害。

把"供养"凿平后，你用石头在每个名字后面刻上"安息"。刻得很慢，一笔一画，像是在替她们写家书。

安息。她们本该安息。

刻完最后一个字，石碑"咔嚓"一声，从中间裂开。裂开的缝里是空的——碑里没有骨灰，没有牌位，什么都没有。周家列祖列宗的碑，原来只是一个空壳。`,effects:{"sanity":-10,"yin":5,"setFlag":"huimen_exp2_chiseled_ancestor_grave"},choices:[createChoice({"text":"决定留在坟地守墓","ending":"huimen_exp2_ending_graveyard_keeper","effects":{"yin":-5}}),createChoice({"text":"回祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}})]}),
    huimen_exp2_ancestor_grave_burn: createScene('huimen_exp2_ancestor_grave_burn', {title:'祖坟焚纸',text:`你在秀兰的坟前点燃纸钱。

火焰不是红色的，而是淡淡的金色，像寺庙里的长明灯。纸灰被风吹起，在空中旋转，像一只只黑色的蝴蝶，绕着坟头飞。

坟头的石头开始发热，烫得你不敢碰。石头上不知何时多了四个字："周氏不祥女"。那四个字在热里扭曲、焦黑，最后化为灰烬，被风吹散。

你烧了周家给秀兰贴的标签。

灰烬落在地上，自己拼成一行新字，一笔一画地写出来：

"周氏秀兰之墓。"

字是新的，红得像血。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_burned_at_ancestor_grave"},choices:[createChoice({"text":"回祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}})]}),
    huimen_exp2_graveyard_dig: createScene('huimen_exp2_graveyard_dig', {title:'挖坟',text:`你用手，挖开秀兰坟边的泥土。

土很松，松得不正常，像是被人挖过很多次，又填回去很多次。泥土里有白色的东西，你以为是骨头，挖出来才看清是纸——纸钱，纸人，烧了一半的纸扎。

你挖了没多久，手指就碰到一个硬物。是一个陶罐，罐口用蜡封着。你抠开蜡，里面装着一截指骨。指骨很小，是女人的，指骨上套着一枚生锈的铜戒指。戒指是细的，刻着"百年好合"四个字。

那是秀兰的戒指。是周文送她的。

你把戒指取出来，戒指一离开骨头，就感到一阵刺骨的寒意，从指尖一直窜到心口。骨头在罐里轻轻动了一下，像是松了一口气。`,effects:{"sanity":-8,"yin":3,"addItem":"秀兰的铜戒指"},choices:[createChoice({"text":"把戒指还给秀兰","next":"huimen_exp2_riverbank","condition":{"hasItem":"秀兰的铜戒指"},"effects":{"sanity":10,"yin":-10,"removeItem":"秀兰的铜戒指","setFlag":"huimen_exp2_returned_copper_ring"}}),createChoice({"text":"收好","next":"huimen_exp2_graveyard","effects":{"yin":1}})]})
};
