/**
 * 《回门》场景模块：exp3_main_well
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_well_bottom: createScene('huimen_exp3_well_bottom', {title:`三代井底`,text:`你顺着井壁的凹槽，慢慢下到井底。

井壁湿冷，长满了青苔和不知名的藤蔓。那些藤蔓摸起来像头发，滑腻腻的，有的还会动。你不去想它们是什么，只是把手扣紧凹槽，一格一格往下挪。

越往下，空气越稠。稠得像粥，每吸一口都带着水腥气和一种古老的腐味。

井底没有水，只有一层厚厚的淤泥。淤泥黑得发亮，踩下去"咕叽"一声，溅起几滴黑水。淤泥里散落着白骨，有的完整，有的已经碎裂。你借着头上的微光，一具一具地辨认。

最深处，有一具穿着红嫁衣的骨架，手腕上系着一根红绳。

红绳已经褪成暗红，却还紧紧地勒在腕骨上，勒出一道深深的凹痕。`,effects:{"sanity":-5,"yin":6},choices:[createChoice({"text":"靠近红嫁衣骨架","next":"huimen_exp3_well_bottom_xiulan_bones","effects":{"yin":3}}),createChoice({"text":"先祭拜其他尸骨","next":"huimen_exp3_well_bottom_bow","effects":{"sanity":5,"yin":-2}}),createChoice({"text":"在井底寻找出口","next":"huimen_exp3_well_bottom_exit","effects":{"yin":2}})]}),
    huimen_exp3_well_bottom_bow: createScene('huimen_exp3_well_bottom_bow', {title:`井底祭拜`,text:`你跪在淤泥里，朝散落的白骨拜了三拜。

膝盖陷进淤泥，凉得像跪在冰上。你每拜一次，井底就"嗡"地响一声，像是有口钟在你头顶回应。

"我不知道你们的名字，但我知道你们受过苦。"你说，声音在井壁间撞来撞去，撞成无数个回声，"我会把秀兰带出去。你们若愿意，也跟着光走。"

白骨上没有反应，但井底的阴气明显轻了。几缕磷光从骨缝里升起，像萤火虫一样飘向井口。它们飘得很慢，每飘一寸，井底就亮一分。

[faded]有一个磷光飘到你肩上停了一下，像是在道谢，才继续往上飞。[/faded]`,effects:{"sanity":5,"yin":-3},choices:[createChoice({"text":"去收敛秀兰的骨殖","next":"huimen_exp3_well_bottom_xiulan_bones","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_wrap: createScene('huimen_exp3_well_bottom_wrap', {title:`包骨`,text:`你脱下外套，把秀兰的骨殖一块一块包好。

骨殖很轻，像是包着一捆干柴。你把她系在背上，感觉有一股凉意贴着脊背，却并不沉重——她轻得不像一个成年人，倒像是一个孩子。

你系最后一道绳结时，井壁上忽然渗出一行水字："背我回家。"

字是竖着写的，水珠一颗一颗往下淌，淌过的地方留下一道湿痕，像眼泪。

[whisper]你背上忽然一沉，像是有人趴了上来，又很快轻了回去。[/whisper]`,effects:{"sanity":5,"yin":-2,"setFlag":"huimen_exp3_has_bones"},choices:[createChoice({"text":"寻找出路","next":"huimen_exp3_well_bottom_exit","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_change_dress: createScene('huimen_exp3_well_bottom_change_dress', {title:`换衣`,text:`你从怀里取出那件粉色的嫁衣——不知从何时起，你怀里多了这件嫁衣，像是秀兰的念想化成了实物。

粉色的布料在井底的红光里泛着暖色，像一捧被捧进坟墓的春光。你跪在骨架前，小心翼翼地替她脱下那件绣着井的红嫁衣。

红嫁衣一离开骨架，就化作一团黑灰，散进淤泥里。你把粉色的新衣一件件套上骨架——先是衣袖，再是襟口，最后是腰带。

粉色嫁衣套上骨架时，井底忽然亮起一层柔和的光。那光不是从外面来的，是从骨殖里透出来的，暖暖的，像一盏被点亮的长明灯。

井底红棺里的，是秀兰的真身；庙下石室里的，是她被分出去的那份怨魂凝成的影。三魂三分，身却只有一个。周家用井镇身，用庙镇怨，用桑树镇她最后一缕未散的生念。

"好看。"秀兰的声音在井壁间回荡，"比周家那件好看多了。"

[red]她的声音里第一次有了笑意。[/red]`,effects:{"sanity":10,"yin":-5,"setFlag":"huimen_exp3_has_bones_dressed"},choices:[createChoice({"text":"带她离开井底","next":"huimen_exp3_well_bottom_exit","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_exit: createScene('huimen_exp3_well_bottom_exit', {title:`井底出口`,text:`你扶起秀兰，向井壁走去。刚迈出几步，脚下的淤泥忽然一陷——井底一侧的淤泥里，露出半扇石门。

石门被淤泥糊了一半，门上刻着："背井者出，负骨者归。"

字迹被水泡得模糊，但笔画里嵌着的朱砂还红着。你用手抹去淤泥，门缝里渗出一丝凉风，带着泥土和青草的味道——那是外面的风。

你用力推开石门，门轴发出一声长长的"吱呀"，像是一声叹息。门后是一条向上的石阶，石阶湿漉漉的，长满了青苔。

石阶尽头有光。那光不是月光，不是烛光，是天亮前的鱼肚白。

[whisper]你背上的人似乎轻了一些，像是在催你快走。[/whisper]`,effects:{"yin":2},choices:[createChoice({"text":"沿石阶上去","next":"huimen_exp3_well_bottom_surface","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_surface: createScene('huimen_exp3_well_bottom_surface', {title:`出井`,text:`你背着秀兰的骨殖，从石阶尽头钻出来。

外面是一片陌生的河岸。河面上漂浮着无数纸船，每只纸船上都点着一盏小灯，灯火在水里倒映成两盏，一盏在上，一盏在下。

晨雾很低，贴着水面流。你闻到一股纸灰和河水混在一起的气味，不臭，反而有一种说不出的安详。

秀兰的声音轻轻说："纸船会带我们离开。"

你找了一只最大的纸船，把骨殖放进去。纸船没有沉，反而稳稳地漂向河心。船上的小灯被风吹得摇摇晃晃，却始终没灭。

[faded]那是她在为你照路。[/faded]`,effects:{"sanity":5,"yin":-3},choices:[createChoice({"text":"跟着纸船走","next":"huimen_exp3_ending_paper_boat_ferry_scene","effects":{"yin":1}}),createChoice({"text":"把船推远，自己游上岸","next":"huimen_exp3_well_bottom_shore","effects":{"yin":2}})]}),
    huimen_exp3_well_bottom_shore: createScene('huimen_exp3_well_bottom_shore', {title:`上岸`,text:`你游到对岸，浑身湿透。

河水冷得刺骨，却洗掉了你身上一路沾的阴气和纸灰。你爬上岸，趴在草地上喘了很久，才有力气回头。

河面上的纸船已经汇成一条灯带，向远方漂去。每一只船上的灯都亮着，像一条流动的星河。你看着那只最大的船消失在河湾后面，心里空了一下，又满了。

你手里还攥着从船上抓下的一块船板。船板上写着一个"周"字，墨迹被水晕开，像一道化不开的伤。

你把它一点点掰碎了，撒进河里。

天快亮了。`,effects:{"sanity":3,"yin":-2},choices:[createChoice({"text":"朝有人烟的地方走","ending":"huimen_exp3_ending_well_bottom_bones","effects":{"yin":0}})]}),
    huimen_exp3_ending_paper_boat_ferry_scene: createScene('huimen_exp3_ending_paper_boat_ferry_scene', {title:`渡`,text:`你跟着纸船走了很久，直到河水变清，天边泛起金色。

纸船在晨光里慢慢融化。先是船头，然后是船身，最后是那盏小灯。灯灭的那一刻，秀兰的骨殖也沉入河底，没有激起一点水花，像是河水本来就等着接住她。

你跪在岸边，看着最后一缕纸灰被风吹散。风里带着桂花的香，那是秀兰最喜欢的味道。

"谢谢你。"她的声音从水里传来，很远，却很清晰，"这次我真的走了。"

河水拍着岸，一下，又一下，像是在替她道别。

[red]你忽然觉得，背上的重量，真的没了。[/red]`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"目送她离去","ending":"huimen_exp3_ending_paper_boat_ferry","effects":{"yin":0}})]})
};
