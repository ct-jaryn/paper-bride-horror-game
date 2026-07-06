/**
 * 《回门》场景模块：exp2_granary
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_granary: createScene('huimen_exp2_granary', {title:'粮仓',text:`你来到村西的粮仓。

粮仓很大，门却很小，像一张紧闭的嘴。你推开门，一股霉味和谷物腐烂的味道扑面而来。

谷堆里藏着许多东西：破碎的瓷碗、生锈的铜钱、褪色的红绳。你走到谷堆中央，发现那里有一个凹陷，像是一个人曾经蜷缩过。

[red]秀兰被活埋前，曾在这里躲了一夜。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"躺在凹陷里","next":"huimen_exp2_granary_lie","effects":{"yin":2}}),createChoice({"text":"翻找谷堆","next":"huimen_exp2_granary_search","effects":{"yin":1}}),createChoice({"text":"点燃一盏油灯","next":"huimen_exp2_granary_light","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你已知道秀兰的遭遇，循着叹息声去谷堆深处","next":"huimen_exp2_granary_soul","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp2_granary_lie: createScene('huimen_exp2_granary_lie', {title:'谷凹',text:`你躺在那个凹陷里。

谷粒从四面八方涌来，像是要把你埋住。你闭上眼睛，感到一种奇异的安心。

"你也在躲吗？" 秀兰的声音问。

"不是躲。" 你说，"是想感受你当时的害怕。"`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"问她当时怕不怕","next":"huimen_exp2_granary_fear","effects":{"yin":1}}),createChoice({"text":"站起来","next":"huimen_exp2_granary","effects":{"yin":1}})]}),
    huimen_exp2_granary_fear: createScene('huimen_exp2_granary_fear', {title:'害怕',text:`秀兰说："当时不怕。我以为周文会来救我。我怕的是后来，怕井水的冷，怕孩子不动，怕再也见不到太阳。"

"你怕过吗？" 你问。

"怕过。" 她说，"但我更怕被人忘记。"`,effects:{"sanity":-5,"yin":-5},choices:[createChoice({"text":"告诉她你不会忘","next":"huimen_exp2_granary","effects":{"sanity":5,"yin":-5}})]}),
    huimen_exp2_granary_search: createScene('huimen_exp2_granary_search', {title:'翻找',text:`你在谷堆里翻找。

你找到一个布包，里面是一双小鞋，虎头鞋，绣着"元"字。这是秀兰给孩子做的鞋。

你把鞋捧在手里，感到一阵刺骨的冷。`,effects:{"sanity":-5,"yin":2,"addItem":"粮仓里的虎头鞋"},choices:[createChoice({"text":"把鞋带给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"粮仓里的虎头鞋"}}),createChoice({"text":"收好","next":"huimen_exp2_granary","effects":{"yin":1}})]}),
    huimen_exp2_granary_light: createScene('huimen_exp2_granary_light', {title:'粮仓点灯',text:`你点燃一盏油灯。

火光里，粮仓的墙壁上浮现出许多字，都是秀兰用指甲刻的：

"周文，我等你。"
"孩子，别怕。"
"我会出去。"
"我不想死。"

[red]最后一行刻得很浅，像是她已经没有力气了。[/red]`,effects:{"sanity":-8,"yin":3,"setFlag":"huimen_exp2_saw_granary_words"},choices:[createChoice({"text":"把秀兰的头发和谷灰一起撒向风中","ending":"huimen_exp2_ending_granary_ash","condition":{"hasItem":"灶下的头发"},"effects":{"yin":-5}}),createChoice({"text":"在墙上刻\"我记住你了\"","next":"huimen_exp2_granary","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_granary_soul: createScene('huimen_exp2_granary_soul', {title:'谷魂',text:`你听见粮仓深处传来叹息声。

你循声走去，发现谷堆中央站着一个女子。她的身体是半透明的，由无数谷粒组成。

"我是谷魂。" 她说，"周家把女子的魂封在谷里，每年祭祀时吃一点，就能延年益寿。"`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"问她怎么才能解脱","next":"huimen_exp2_granary_soul_ask","effects":{"yin":1}}),createChoice({"text":"把谷堆散开","next":"huimen_exp2_granary_soul_release","effects":{"sanity":-5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp2_granary","effects":{"yin":1}})]}),
    huimen_exp2_granary_soul_ask: createScene('huimen_exp2_granary_soul_ask', {title:'粮仓问解脱',text:`谷魂说："你把谷堆散开，我们的魂就能飞出去。但你要小心，周家会发现你。"

[red]她的话音刚落，粮仓外就传来脚步声。[/red]`,effects:{"sanity":-3,"yin":2,"setFlag":"huimen_exp2_knows_granary_soul_release"},choices:[createChoice({"text":"立刻散开谷堆","next":"huimen_exp2_granary_soul_release","effects":{"yin":-3}}),createChoice({"text":"躲起来","next":"huimen_exp2_granary_hide","effects":{"yin":2}})]}),
    huimen_exp2_granary_soul_release: createScene('huimen_exp2_granary_soul_release', {title:'散谷',text:`你冲进谷堆，用双手把谷粒向四周拨开。

谷粒飞舞，每一颗都发出一道微弱的光。女子的身影从谷粒中升起，越来越多，最后化作一片光海。

"自由了……" 她们说，"终于自由了……"`,effects:{"sanity":5,"yin":-10,"setFlag":"huimen_exp2_released_granary_souls"},choices:[createChoice({"text":"回粮仓","next":"huimen_exp2_granary","effects":{"yin":1}})]}),
    huimen_exp2_granary_hide: createScene('huimen_exp2_granary_hide', {title:'躲藏',text:`你躲进谷堆后面。

脚步声在粮仓里转了一圈，然后停在你藏身的谷堆前。你屏住呼吸。

"出来吧。" 一个声音说，"我知道你在。周家的事，你管不了。"`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"出来","next":"huimen_exp2_granary_soul_release","effects":{"yin":-3}}),createChoice({"text":"继续躲","next":"huimen_exp2_granary","effects":{"sanity":-3,"yin":2}})]})
};
