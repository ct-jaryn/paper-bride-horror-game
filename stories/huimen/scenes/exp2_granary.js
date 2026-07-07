/**
 * 《回门》场景模块：exp2_granary
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_granary: createScene('huimen_exp2_granary', {title:'粮仓',text:`你循着一股霉味，来到村西的粮仓。

粮仓很大，是青砖砌的，屋顶上长着瓦松，瓦松在风里摇。门却很小，只容一人侧身而入，像一张紧闭的嘴。门板上贴着褪色的封条，封条上写着"周氏仓廪，闲人莫入"。

你推开门，门轴"吱呀"一声，像老鼠的尖叫。一股霉味和谷物腐烂的味道扑面而来，甜腻，发酵，像一锅放坏了的粥。你捂着鼻子走进去，脚下的谷粒"沙沙"作响，每一步都陷下去半寸。

谷堆里藏着许多东西：破碎的瓷碗、生锈的铜钱、褪色的红绳，还有几缕缠在谷穗上的长头发。你拨开谷堆，往里走，发现谷堆中央有一个凹陷，像是一个人曾经蜷缩过。凹陷里还留着一个身体的印子，连手指的痕迹都清晰可辨。

你蹲下，伸手去摸那凹陷。谷粒是凉的，可凹陷底下的谷粒是热的，热得像人的体温。

[red]秀兰被活埋前，曾在这里躲了一夜。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"躺在凹陷里","next":"huimen_exp2_granary_lie","effects":{"yin":2}}),createChoice({"text":"翻找谷堆","next":"huimen_exp2_granary_search","effects":{"yin":1}}),createChoice({"text":"点燃一盏油灯","next":"huimen_exp2_granary_light","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你已知道秀兰的遭遇，循着叹息声去谷堆深处","next":"huimen_exp2_granary_soul","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp2_granary_lie: createScene('huimen_exp2_granary_lie', {title:'谷凹',text:`你小心翼翼地，躺进那个凹陷里。

谷粒从四面八方涌来，像是要把你埋住。它们细小，坚硬，硌得你后背生疼。可你没有动，你闭上眼睛，感到一种奇异的安心——像是有人在你身边，替你挡住了什么。

凹陷的形状正好贴合你的身体，像是为你量身挖的。你闻到一股淡淡的桂花香，从谷粒的缝隙里渗出来，甜得发苦。

"你也在躲吗？" 秀兰的声音问，很近，像是贴在你耳边。

"不是躲。" 你说，"是想感受你当时的害怕。"

"我那时候不怕。" 她说，"我怕的是后来。"`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"问她当时怕不怕","next":"huimen_exp2_granary_fear","effects":{"yin":1}}),createChoice({"text":"站起来","next":"huimen_exp2_granary","effects":{"yin":1}})]}),
    huimen_exp2_granary_fear: createScene('huimen_exp2_granary_fear', {title:'害怕',text:`秀兰说："当时不怕。我以为周文会来救我。我躲在这里，听见外面有人喊我的名字，我以为是周文，差点应了。后来听清是周老太爷的声音，我才不敢出声。"

她的声音飘远了一些，像是在回忆。

"我怕的是后来，怕井水的冷，怕孩子不动，怕再也见不到太阳。井底很黑，黑得我看不见自己的手。我只能摸着井壁，一格一格地往上数。数到第七十二格，我就没有力气了。"

"你怕过吗？" 她忽然问你。

"怕过。" 你说。

"但我更怕被人忘记。" 她说，声音轻了下去，"被忘记，比死还冷。"`,effects:{"sanity":-5,"yin":-5},choices:[createChoice({"text":"告诉她你不会忘","next":"huimen_exp2_granary","effects":{"sanity":5,"yin":-5}})]}),
    huimen_exp2_granary_search: createScene('huimen_exp2_granary_search', {title:'翻找',text:`你在谷堆里翻找。

谷粒从指缝里漏下去，发出细碎的沙沙声。你翻了许久，手指被谷壳划破，渗出一点血。血滴在谷粒上，被谷粒吸了进去。

你找到一个布包。布是蓝底白花的，已经褪色，包得很仔细。你打开它，里面是一双小鞋——虎头鞋，红布做的虎头，黑线绣的眼睛，黄线绣的胡须。鞋底绣着一个"元"字，针脚歪歪扭扭，像是一个初学者绣的。

这是秀兰给孩子做的鞋。鞋还没做完，左脚的虎头绣好了，右脚的虎头只绣了一半。

你把鞋捧在手里，感到一阵刺骨的冷，从掌心一直冷到心口。`,effects:{"sanity":-5,"yin":2,"addItem":"粮仓里的虎头鞋"},choices:[createChoice({"text":"把鞋带给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"粮仓里的虎头鞋"}}),createChoice({"text":"收好","next":"huimen_exp2_granary","effects":{"yin":1}})]}),
    huimen_exp2_granary_light: createScene('huimen_exp2_granary_light', {title:'粮仓点灯',text:`你在墙角找到一盏油灯，灯里的油还剩半盏。你用打火机点了几次才点着，火苗跳了跳，稳住。

火光里，粮仓的墙壁上浮现出许多字，都是秀兰用指甲刻的，刻得很深，一笔一画，像是要把字嵌进墙里。

你举着灯，一行行读过去：

"周文，我等你。"
"孩子，别怕。"
"我会出去。"
"我不想死。"

[red]最后一行刻得很浅，像是她已经没有力气了。字迹歪斜，最后一个"死"字拖得很长，一直拖到墙角，像一个人倒下去的影子。[/red]

灯油快烧完了，火苗忽明忽暗。你听见墙里传来一阵细碎的哭声，像是字本身在哭。`,effects:{"sanity":-8,"yin":3,"setFlag":"huimen_exp2_saw_granary_words"},choices:[createChoice({"text":"把秀兰的头发和谷灰一起撒向风中","ending":"huimen_exp2_ending_granary_ash","condition":{"hasItem":"灶下的头发"},"effects":{"yin":-5}}),createChoice({"text":"在墙上刻\"我记住你了\"","next":"huimen_exp2_granary","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_granary_soul: createScene('huimen_exp2_granary_soul', {title:'谷魂',text:`你听见粮仓深处传来一声叹息，很长，很轻，像风穿过空谷。

你循声走去，拨开一堆堆谷粒。谷粒在你脚下让开，像水一样分开，又在你身后合拢。你走了很久，走到谷堆中央，发现那里站着一个女子。

她的身体是半透明的，由无数谷粒组成。每一颗谷粒都是她身体的一部分，又都独立地在她体内流动，像血液。她的脸是模糊的，只有一双眼睛是清晰的——黑的，深的，像两口井。

"我是谷魂。" 她说，声音像谷粒摩擦，沙沙的，"周家把女子的魂封在谷里，每年祭祀时吃一点，就能延年益寿。吃一颗谷，就吃一口命。"

她伸出手，掌心里托着一颗谷粒。谷粒是黑的，黑得发亮。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"问她怎么才能解脱","next":"huimen_exp2_granary_soul_ask","effects":{"yin":1}}),createChoice({"text":"把谷堆散开","next":"huimen_exp2_granary_soul_release","effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp2_granary","effects":{"yin":1}})]}),
    huimen_exp2_granary_soul_ask: createScene('huimen_exp2_granary_soul_ask', {title:'粮仓问解脱',text:`谷魂低下头，看着自己由谷粒组成的手。

"你把谷堆散开，我们的魂就能飞出去。" 她说，"但你要小心，周家会发现你。谷仓是有眼睛的，每一颗谷都是一只眼。"

[red]她的话音刚落，粮仓外就传来脚步声。[/red]

那脚步声不像是人的，像是许多东西在谷堆上爬，沙沙沙，沙沙沙，越来越近。`,effects:{"sanity":-3,"yin":2,"setFlag":"huimen_exp2_knows_granary_soul_release"},choices:[createChoice({"text":"立刻散开谷堆","next":"huimen_exp2_granary_soul_release","effects":{"yin":-3}}),createChoice({"text":"躲起来","next":"huimen_exp2_granary_hide","effects":{"yin":2}})]}),
    huimen_exp2_granary_soul_release: createScene('huimen_exp2_granary_soul_release', {title:'散谷',text:`你冲进谷堆，用双手把谷粒向四周拨开。

谷粒飞舞，每一颗都发出一道微弱的光，像萤火。女子的身影从谷粒中升起，越来越多，一个，两个，十个，三十个……她们从谷堆里浮出来，身体是半透明的，脸上却带着笑。

"自由了……" 她们说，声音叠在一起，像风穿过竹林，"终于自由了……"

最后一个升起的，是谷魂。她朝你深深地鞠了一躬，然后化作一片光，飞出粮仓的窗。

粮仓里空了，只剩一地的谷壳，和一股淡淡的桂花香。`,effects:{"sanity":5,"yin":-10,"setFlag":"huimen_exp2_released_granary_souls"},choices:[createChoice({"text":"回粮仓","next":"huimen_exp2_granary","effects":{"yin":1}})]}),
    huimen_exp2_granary_hide: createScene('huimen_exp2_granary_hide', {title:'躲藏',text:`你躲进谷堆后面，屏住呼吸。

脚步声在粮仓里转了一圈，沙沙沙，沙沙沙，像有什么东西在谷堆上巡视。然后，它停在你藏身的谷堆前。你听见自己的心跳，砰砰砰，砰砰砰，响得像鼓。

"出来吧。" 一个声音说，是村长的声音，苍老，疲惫，"我知道你在。周家的事，你管不了。"

你没有动。

"你管不了。" 他又说了一遍，声音里居然有一丝悲哀，"你以为你是在救她们？你是在让她们无处可去。放出来，又能去哪？外面没有人记得她们。"`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"出来","next":"huimen_exp2_granary_soul_release","effects":{"yin":-3}}),createChoice({"text":"继续躲","next":"huimen_exp2_granary","effects":{"sanity":-3,"yin":2}})]})
};
