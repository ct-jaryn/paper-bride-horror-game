/**
 * 《回门》场景模块：exp_mulberry
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_mulberry_tree: createScene('huimen_exp_mulberry_tree', {title:'老桑树',text:`你来到村口的老桑树下。

桑树很高，树冠遮住了半边天。树干上缠满了红绳，每一根红绳的另一端都系着一个小布包，布包里装着指甲、头发、乳牙。

这是村里人用来"借命"的东西。

你伸手摸了摸树干，树皮粗糙，却带着一点温度，像人的皮肤。

[whisper]"你来了。"[/whisper] 秀兰的声音从树洞里传出来，"最后一份魂，就在这里。"

树洞里黑漆漆的，有一缕头发垂在外面。那缕头发很长，一直拖到地上，发梢还系着一根红绳。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"伸手去取那缕头发","next":"huimen_exp_mulberry_tree_hole","effects":{"yin":2}}),createChoice({"text":"绕着树走一圈","next":"huimen_exp_mulberry_shadow","effects":{"yin":1}}),createChoice({"text":"解开一根红绳看看","next":"huimen_exp_untie_red_string","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"抬头看树冠里的鸟巢","next":"huimen_exp_mulberry_nest","effects":{"yin":2}}),createChoice({"text":"观察树上缠绕的银丝","next":"huimen_exp_mulberry_silk","condition":{"flag":"huimen_exp_knows_three_souls"},"effects":{"yin":1}}),createChoice({"text":"挖开树根下的泥土","next":"huimen_exp_mulberry_root","condition":{"flag":"huimen_exp_released_mulberry_soul"},"effects":{"yin":1}}),createChoice({"text":"离开，回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"用李木匠的锯锯断老槐树","next":"huimen_exp3_carpenter_li_saw_tree","condition":{"hasItem":"李木匠的锯"},"effects":{"yin":2}}),createChoice({"text":"留在桑树下，替她守灵","next":"huimen_exp_mulberry_guard_alt"}),createChoice({"text":"仔细检查老桑树","next":"investigate_mulberry_tree"})],hallucination:'[whisper]树干上的裂缝张开，像一张嘴，正在叫你的名字。[/whisper]'}),
    huimen_exp_mulberry_tree_hole: createScene('huimen_exp_mulberry_tree_hole', {title:'树洞',text:`你把手伸进树洞。

树洞里很暖，不像外面那么阴冷。你的手指触到那缕头发，头发像是有生命一样缠上你的手腕。

你没有害怕，而是轻轻握住它。

[whisper]"你不怕我？"[/whisper] 秀兰问。

"怕。" 你说，"但我也知道，你等了三十年，等的不是一个怕你的人。"

头发渐渐松开你的手腕，化作一道红光，钻进你心口。你感到三份魂终于归一，胸口的压抑彻底消散。

[red]桑树的叶子开始沙沙作响，像是在笑，又像是在哭。[/red]`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_released_mulberry_soul"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"三魂已归一，带秀兰离开","next":"huimen_exp_redemption_loop","condition":{"flag":"huimen_exp_restored_xiulan_name_in_hall"},"effects":{"yin":-5}})]}),
    huimen_exp_mulberry_shadow: createScene('huimen_exp_mulberry_shadow', {title:'树影',text:`你绕着桑树走了一圈。

树干背面有一道裂缝，裂缝里渗出红色的汁液，像血。你凑近看，发现裂缝里刻着一张人脸。

那张脸很年轻，是个女子。她的眼睛闭着，嘴角却微微上扬，像是在做一个安详的梦。

[whisper]"我是秀兰的姐妹。"[/whisper] 裂缝里的脸说，"周家不止害了她一个。"

你想再问，裂缝却合上了。树干上只剩下一道浅浅的痕迹，像一道泪痕。

你后退一步，发现地上落满了桑叶。每片叶子上都写着一个名字，都是女子的名字。`,effects:{"sanity":-8,"yin":2,"setFlag":"huimen_exp_saw_mulberry_sisters"},choices:[createChoice({"text":"把桑叶收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"桑叶"}}),createChoice({"text":"离开桑树","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_release: createScene('huimen_exp_mulberry_release', {title:'桑魂归',text:`你回到桑树下，对着树洞说："秀兰，最后一份魂，我来还你。"

树洞里伸出一只苍白的手，手里握着那缕长发。你接过头发，感到三股力量在你体内汇合。

井水的寒凉、庙钟的沉郁、桑树的柔韧，三种感觉交织在一起，最后化作一声悠长的叹息。

秀兰的身影在你面前凝实。她没有盖头，没有血泪，穿着一身普通的布衣，只是一个清清秀秀的姑娘。

"三魂归一，我可以走了。" 她说，"但你呢？你愿意跟我一起走吗？"

[red]她的眼神里没有怨，只有一丝不舍。[/red]`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_released_mulberry_soul"},choices:[createChoice({"text":"牵她的手，带她离开","next":"huimen_exp_redemption_loop","condition":{"flag":"huimen_exp_restored_xiulan_name_in_hall"},"effects":{"yin":-5}}),createChoice({"text":"送她走，自己留下","next":"huimen_exp_mulberry_guard","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"回村街再想想","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_guard: createScene('huimen_exp_mulberry_guard', {title:'守树人',text:`你松开秀兰的手。

"你走吧。" 你说，"我留下来，守着这棵桑树。守着周家欠下的所有名字。"

秀兰看着你，眼泪落了下来。她的眼泪是红色的，滴在桑树根上，树根发出一阵温暖的颤动。

"傻子。" 她说，"你会变成树的。"

"那就变成树吧。" 你说，"至少，比变成纸人强。"

秀兰化作红光消散。你靠着桑树坐下，感到自己的双脚正在生根，双手正在变作树枝。

你不害怕。你听见风里有许多女子的声音在说话，她们终于有人听了。`,effects:{"sanity":-5,"yin":5},ending:'huimen_exp_mulberry_guard'}),
    huimen_exp_mulberry_nest: createScene('huimen_exp_mulberry_nest', {title:'鸟巢',text:`你抬头看桑树，发现树冠里有一个鸟巢。

鸟巢不是用树枝搭的，而是用头发。乌黑的长发一圈圈盘绕，中间躺着几颗蛋。

蛋是白色的，蛋壳上画着人脸。你仔细一看，那些脸都是女子的脸，有秀兰，有柳红，还有很多你不认识的女子。

"别碰。" 一个声音从树上传来，"那是我们的蛋。"

你抬头，看见一只乌鸦站在枝头。乌鸦的眼睛是红色的，像两颗燃烧的纸钱。`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"问乌鸦这些蛋是什么","next":"huimen_exp_mulberry_nest_ask","effects":{"yin":2}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_nest_ask: createScene('huimen_exp_mulberry_nest_ask', {title:'鸦答',text:`乌鸦歪着头看你。

"这些蛋，是周家女人的魂。" 它说，"她们死后不能投胎，就变成蛋，等在树上。等有人把她们孵出来，她们才能重新做人。"

"怎么孵？"

"用心温。" 乌鸦说，"把她们的名字念出来，念一百遍，蛋就会裂开。"

你看着那些蛋，心里一阵酸楚。三十七个女子，三十七个蛋，都在等一个愿意念她们名字的人。

"我会念的。" 你说。`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_how_to_hatch_souls"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_silk: createScene('huimen_exp_mulberry_silk', {title:'蚕丝',text:`你看见桑树上挂着许多白色的丝。

不是普通的蚕丝，而是像头发一样细的丝，在月光下泛着银光。你扯下一根，丝竟然发出一声轻响，像琴弦被拨动。

[whisper]"别扯。"[/whisper] 秀兰说，"那是我的命丝。"

你松手，丝飘回树上，和其他的丝缠在一起。

"我的命被分成三份，用丝系着。" 她说，"井一份，庙一份，桑树一份。你把丝解开，我就能走了。"

你抬头看，桑树上的丝尽头，系着一个小小的布包。布包里，应该就是她最后一份魂。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"解开布包","next":"huimen_exp_mulberry_tree_hole","effects":{"yin":2}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_weep: createScene('huimen_exp_mulberry_weep', {title:'树泣',text:`你听见桑树在哭。

不是风声，是树本身在发出低沉的呜咽。树干上的裂缝里渗出红色的汁液，像眼泪一样往下流。

你把手放在树干上，感到一阵剧烈的悲伤。那不是你的悲伤，是树的悲伤，是秀兰的悲伤，是所有被周家害死的女子的悲伤。

"我们不该是这样的结局。" 树说，"我们也曾开花，也曾结果，也曾被人爱过。"

[red]你抱住树干，像抱住一个哭泣的人。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"陪树哭一会儿","next":"huimen_exp_mulberry_weep_stay","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"用袖子擦去树泪","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-3}})]}),
    huimen_exp_mulberry_weep_stay: createScene('huimen_exp_mulberry_weep_stay', {title:'同悲',text:`你靠着桑树坐下，任由悲伤淹没你。

你想起秀兰十六岁的笑容，想起她未出世的孩子，想起她被活埋的那个雨夜。你想起周家三十七个女子的名字，想起她们各自来不及过的人生。

你的眼泪和树的眼泪混在一起，渗入泥土。

[whisper]"谢谢你为我们哭。"[/whisper] 秀兰说，"三十年了，第一次有人为我们哭。"

天边的月亮似乎亮了一些。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_wept_with_mulberry"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_root: createScene('huimen_exp_mulberry_root', {title:'树根',text:`你挖开桑树根部的泥土。

树根盘结在一起，像一张巨大的网。网中央埋着一个陶罐，陶罐里装着一撮头发和一张纸条。

纸条上是秀兰的字迹：

[faded]"若有后人见此，请将我的头发与周文合葬。虽不能同生，愿能同穴。"[/faded]

[red]她到死，还想和祖父在一起。[/red]

你把陶罐盖好，放回土里。这个愿望，也许不该由你来替她完成。`,effects:{"sanity":-5,"yin":2,"addItem":"秀兰的头发"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_guard_alt: createScene('huimen_exp_mulberry_guard_alt', {title:'桑树守灵',text:`你决定留在老桑树下。

桑树里封着秀兰的一缕头发。你握着那缕头发，感到她的怨念像蚕丝一样缠住你，却不勒紧。

"你不走了？"她问。

"不走了。"你说，"我替你守着，守到周家的债还清为止。"`,choices:[createChoice({"text":"做守树人","ending":"huimen_exp_mulberry_guard"})]})
};
