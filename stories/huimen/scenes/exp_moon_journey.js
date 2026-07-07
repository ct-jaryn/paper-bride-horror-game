/**
 * 《回门》场景模块：exp_moon_journey
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_moonlit_path_end: createScene('huimen_exp_moonlit_path_end', {title:"路尽",text:`你走到小路尽头，脚下再没有路。

那里立着一扇纸门，门上画着秀兰的像。她盖着红盖头，盖头下露出一双眼睛，正定定地看着你。

"你走到这里了。"她说，声音从纸门里传出，"再往前，就是出村的路。"

你伸手去推门，纸门却像有生命一样，软软地贴在你手上，带着人的体温。

门上的秀兰开口了：

"出去可以。但你要答应我一件事。"

[whisper]"每年七月半，回来看我一眼。"[/whisper]

[red]你意识到，这不是出口，是一个约定。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"答应她","next":"huimen_exp_moonlit_escape","effects":{"sanity":3,"yin":-5}}),createChoice({"text":"拒绝，转身回村街","next":"huimen_exp_village_street","effects":{"yin":2}}),createChoice({"text":"答应她每年七月半来陪她看月亮","next":"huimen_exp_moon_pact_alt"})]}),
    huimen_exp_moonlit_escape: createScene('huimen_exp_moonlit_escape', {title:"月下离村",text:`你答应了秀兰。

纸门轻轻打开，月光像水一样涌进来，铺了满地银白。你踏出门，发现自己站在村口的石板路上，身后是沉睡的山村。

天边泛起鱼肚白。纸人们倒在路边，姿态僵硬，像被风吹倒的稻草人。雾气正在散去，露出远处黛青色的山影。

你没有回头，一直往前走。你知道秀兰在看着你，但她的目光不再是冷的了。

[whisper]"记得回来。"[/whisper]`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"独自离开","ending":"huimen_exp_moonlit_escape","effects":{"yin":-1}}),createChoice({"text":"带秀兰一起走","ending":"huimen_exp_ending_flower_rain","condition":{"flag":"xiulanMercy"},"effects":{"yin":-5}}),createChoice({"text":"逃回城市，假装一切没发生过","next":"huimen_exp_escape_aftermath"})]}),
    huimen_exp_moonlit_grave: createScene('huimen_exp_moonlit_grave', {title:"月下孤坟",text:`你沿着月光小路走，来到一座孤坟前。

坟没有碑，只有一块扁平的青石。石头上放着一束枯萎的桂花，花瓣发黑，卷成一团，散发着若有若无的甜香。

你蹲下身，发现石头下面压着一张纸，纸已泛黄发脆：

[faded]"无名女子之墓。周家所害，无人祭奠。过路者若有余心，请献一花。"[/faded]

[red]这不是秀兰的坟。这是另一个被遗忘的女子。[/red]

你把那束枯桂花扶正，又从路边摘了一朵沾着露水的小白花，轻轻放在上面。`,effects:{"sanity":3,"yin":-3},choices:[createChoice({"text":"在坟前磕个头","next":"huimen_exp_moonlit_grave_bow","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"继续往前走","next":"huimen_exp_moonlit_path_end","effects":{"yin":1}}),createChoice({"text":"在秀兰坟旁种一棵松树","next":"huimen_exp_little_pine_alt"})]}),
    huimen_exp_moonlit_grave_bow: createScene('huimen_exp_moonlit_grave_bow', {title:"无名祭",text:`你跪在坟前，恭恭敬敬磕了三个头。

"我不知道你是谁。"你说，"但我知道你受过委屈。我替你磕个头，愿你来生，能做个幸福的人。"

坟头的青石忽然"咔"地裂了一道缝，缝里飘出一缕青烟。青烟在月光里凝成一个人形，是一个穿素衣的女子，朝你福了一福。

"谢谢。"她说，"我叫阿绣。三十年了，第一次有人给我磕头。"

她的身影消散在月光里，像一缕被风吹散的雾。你站起身，感到胸口的压抑又轻了一些。`,effects:{"sanity":10,"yin":-8,"setFlag":"huimen_exp_honored_unknown_woman"},choices:[createChoice({"text":"继续往前走","next":"huimen_exp_moonlit_path_end","effects":{"yin":1}})]}),
    huimen_exp_moonlit_river: createScene('huimen_exp_moonlit_river', {title:"月下河",text:`月光小路尽头有一条河。

河水是银色的，像流动的水银，没有声响。河面上漂着许多纸船，一只接一只，每只船上都点着一根小蜡烛，烛火幽幽的。

你蹲在河边，看见河水里映出许多张脸。有秀兰、有柳红、有阿绣，还有很多你不认识的女子。她们在水下仰着脸，看着你。

"渡河吧。"她们齐声说，"渡过去，你就自由了。"

可你知道，这条河不是给人渡的。它是给亡魂渡的。`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"找船渡河","next":"huimen_exp_moonlit_river_cross","effects":{"yin":3}}),createChoice({"text":"沿河岸走","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_moonlit_river_cross: createScene('huimen_exp_moonlit_river_cross', {title:"月夜渡河",text:`你找到一只小船，船夫是个穿蓑衣的老人，帽檐压得很低，看不清脸。

"过河？"老人问，声音沙哑。

"是。"你说。

"过河要付船钱。"他说，"把你的名字写在船舷上。"

你拿起船上一支秃了头的毛笔，蘸了蘸船板上的墨，刚要写自己的名字，却停住了。

[red]你把名字写在船上，岂不是把命交给了河？[/red]

你转而写下"周氏秀兰"四个字。河水翻涌了一下，船却平稳地驶向对岸。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"到对岸","next":"huimen_exp_moonlit_escape","effects":{"sanity":5,"yin":-5}})]})
};
