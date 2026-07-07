/**
 * 《回门》场景模块：exp_mulberry_misc
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_mulberry_nest: createScene('huimen_exp_mulberry_nest', {title:'鸟巢',text:`你抬头看桑树，发现浓密的树冠里藏着一个鸟巢。

那鸟巢不是用树枝搭的，而是用头发——乌黑的长发一圈一圈盘绕，编得密密实实，中间躺着几颗蛋。

蛋是白色的，蛋壳上却画着人脸。你眯眼细看，那些脸都是女子的脸，有秀兰，有柳红，还有很多你不认识的女子，一个比一个哀伤。

"别碰。"一个沙哑的声音从树上传来，"那是我们的蛋。"

你抬头，看见一只乌鸦站在枝头，黑羽油亮。乌鸦的眼睛是红色的，像两颗燃烧的纸钱，直勾勾盯着你。`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"问乌鸦这些蛋是什么","next":"huimen_exp_mulberry_nest_ask","effects":{"yin":2}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_nest_ask: createScene('huimen_exp_mulberry_nest_ask', {title:'鸦答',text:`乌鸦歪着头看你，红眼睛一眨不眨。

"这些蛋，是周家女人的魂。"它说，声音像生锈的铁，"她们死后不能投胎，就变成蛋，等在树上。等有人把她们孵出来，她们才能重新做人。"

"怎么孵？"

"用心温。"乌鸦说，"把她们的名字念出来，念一百遍，蛋就会裂开。"

你看着那些蛋，心里一阵酸楚。三十七个女子，三十七颗蛋，都在等一个愿意念她们名字的人。

"我会念的。"你说。`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_how_to_hatch_souls"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_silk: createScene('huimen_exp_mulberry_silk', {title:'蚕丝',text:`你看见桑树的枝桠间挂着许多白色的丝。

那不是普通的蚕丝，而是像头发一样细的丝，在月光下泛着银光。你伸手扯下一根，丝竟发出一声轻响，像琴弦被拨动了一下，余音袅袅。

[whisper]"别扯。"[/whisper]秀兰说，"那是我的命丝。"

你松了手，丝飘回树上，和别的丝缠在一起，分不出你我。

"我的命被分成三份，用丝系着。"她说，"井一份，庙一份，桑树一份。你把丝解开，我就能走了。"

你抬头看，桑树上的丝尽头，系着一个小小的布包，在风里轻轻摇晃。布包里，应该就是她最后一份魂。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"解开布包","next":"huimen_exp_mulberry_tree_hole","effects":{"yin":2}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_weep: createScene('huimen_exp_mulberry_weep', {title:'树泣',text:`你听见桑树在哭。

不是风声，是树本身在发出低沉的呜咽，一声接一声，像一个人压着嗓子在哭。树干上一道道裂缝里渗出红色的汁液，像眼泪一样往下流，滴在泥土里，散发出一股铁锈般的腥气。

你把手放在树干上，感到一阵剧烈的悲伤涌上来。那不是你的悲伤，是树的悲伤，是秀兰的悲伤，是所有被周家害死的女子的悲伤，一股脑全灌进你心里。

"我们不该是这样的结局。"树说，声音苍老而悲凉，"我们也曾开花，也曾结果，也曾被人爱过。"

[red]你抱住树干，像抱住一个哭泣的人。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"陪树哭一会儿","next":"huimen_exp_mulberry_weep_stay","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"用袖子擦去树泪","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-3}})]}),
    huimen_exp_mulberry_weep_stay: createScene('huimen_exp_mulberry_weep_stay', {title:'同悲',text:`你靠着桑树坐下，后背贴着粗糙的树皮，任由悲伤淹没你。

你想起秀兰十六岁的笑容，想起她未出世的孩子，想起她被活埋的那个雨夜。你想起周家三十七个女子的名字，想起她们各自来不及过的人生。

你的眼泪和树的眼泪混在一起，渗入泥土，分不出哪一滴是谁的。

[whisper]"谢谢你为我们哭。"[/whisper]秀兰说，"三十年了，第一次有人为我们哭。"

天边的月亮似乎亮了一些。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_wept_with_mulberry"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_root: createScene('huimen_exp_mulberry_root', {title:'树根',text:`你蹲下身，挖开桑树根部的泥土。

树根盘结在一起，像一张巨大的网，缠缠绕绕。网中央埋着一个陶罐，罐口用蜡封着。你撬开蜡封，里面装着一撮乌黑的头发和一张折得方方正正的纸条。

纸条上是秀兰的字迹，娟秀却颤抖：

[faded]"若有后人见此，请将我的头发与周文合葬。虽不能同生，愿能同穴。"[/faded]

[red]她到死，还想和祖父在一起。[/red]

你把陶罐盖好，轻轻放回土里。这个愿望，也许不该由你来替她完成。`,effects:{"sanity":-5,"yin":2,"addItem":"秀兰的头发"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
