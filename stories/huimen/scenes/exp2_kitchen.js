/**
 * 《回门》场景模块：exp2_kitchen
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_kitchen: createScene('huimen_exp2_kitchen', {title:'废弃厨房',text:`你来到一间废弃的厨房。

灶台上积着厚厚的灰，锅里还有半锅发黑的汤。墙上挂着各种厨具，刀、铲、勺，都生锈了。

你打开锅盖，一股桂花的香气飘出来。锅里不是汤，是一锅凝固的桂花糕。

[red]这是秀兰被活埋前，最后一次想做却没有做成的桂花糕。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"尝一口桂花糕","next":"huimen_exp2_kitchen_taste","effects":{"yin":3}}),createChoice({"text":"重新蒸一锅","next":"huimen_exp2_kitchen_cook","effects":{"yin":-3}}),createChoice({"text":"查看灶台下的柴火","next":"huimen_exp2_kitchen_firewood","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你觉察灶台里封着东西，蹲下细看","next":"huimen_exp2_kitchen_stove","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp2_kitchen_taste: createScene('huimen_exp2_kitchen_taste', {title:'尝糕',text:`你舀起一勺凝固的桂花糕，放进嘴里。

糕是苦的，苦得让你想吐。但你咽了下去。

"好吃吗？" 一个声音问。

你转头，看见秀兰站在灶台边，穿着围裙，像是三十年前那个准备做糕的姑娘。

"好吃。" 你说，"就是有点苦。"`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"问她为什么不走","next":"huimen_exp2_kitchen_talk","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_talk: createScene('huimen_exp2_kitchen_talk', {title:'厨房对话',text:`你问秀兰："你为什么还留在这里？"

秀兰看着锅里的桂花糕："因为我想做完这锅糕。我死那天，糕还没蒸好。"

"我帮你蒸。" 你说。

秀兰笑了："你？你会蒸桂花糕？"

"不会。" 你说，"但我可以学。"`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_promised_to_cook"},choices:[createChoice({"text":"重新蒸糕","next":"huimen_exp2_kitchen_cook","effects":{"yin":-3}})]}),
    huimen_exp2_kitchen_cook: createScene('huimen_exp2_kitchen_cook', {title:'蒸糕',text:`你找来干柴，点燃灶火。

锅里的桂花糕慢慢融化，香气越来越浓。秀兰站在你身边，指导你加水、加糖、加桂花。

"火不要太旺。" 她说，"桂花糕要慢慢蒸，才甜。"

你照她说的做。过了一会儿，锅里飘出真正的甜香。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_cooked_guihua_gao"},choices:[createChoice({"text":"把糕带给秀兰","ending":"huimen_exp2_ending_kitchen_smoke","effects":{"yin":-5}}),createChoice({"text":"自己尝一口","next":"huimen_exp2_kitchen_eat","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp2_kitchen_eat: createScene('huimen_exp2_kitchen_eat', {title:'吃糕',text:`你尝了一口刚蒸好的桂花糕。

很甜，甜得发腻。但你吃着吃着，眼泪就流了下来。

"你怎么哭了？" 秀兰问。

"因为甜。" 你说，"因为三十年了，你终于吃到甜的了。"`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回厨房","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_firewood: createScene('huimen_exp2_kitchen_firewood', {title:'柴火',text:`你查看灶台下的柴火。

柴火堆里埋着一个小布包。你打开布包，里面是一缕头发和一张纸条。

纸条上写着："秀兰之发，藏于灶下，愿来生有火暖身。"

[red]秀兰连来生取暖的愿望，都这么小。[/red]`,effects:{"sanity":-5,"yin":2,"addItem":"灶下的头发"},choices:[createChoice({"text":"把头发还给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"灶下的头发"}}),createChoice({"text":"收好","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_stove: createScene('huimen_exp2_kitchen_stove', {title:'灶台',text:`你蹲在废弃厨房的灶台前。

灶台里还有没烧完的柴火，柴火中间埋着一个陶罐。你把陶罐取出来，发现罐口封着黄符，符上写着"禁"。

[red]周家在灶台里封了东西。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"打开陶罐","next":"huimen_exp2_kitchen_stove_open","effects":{"yin":3}}),createChoice({"text":"把黄符烧了","next":"huimen_exp2_kitchen_stove_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"放回原处","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_stove_open: createScene('huimen_exp2_kitchen_stove_open', {title:'开罐',text:`你撕开黄符，打开陶罐。

罐里不是东西，是一团黑雾。黑雾飘出来，在空中凝成一个女子的身形。

"我是秀兰的厨娘。" 她说，"她怀孕那阵，我偷偷给她送吃的。后来我被周家赶出去，饿死在路上。"

"你能告诉我秀兰的事吗？" 你问。`,effects:{"sanity":-3,"yin":3,"setFlag":"huimen_exp2_met_cook_spirit"},choices:[createChoice({"text":"听她讲","next":"huimen_exp2_kitchen_stove_listen","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_stove_listen: createScene('huimen_exp2_kitchen_stove_listen', {title:'厨娘的话',text:`厨娘说："秀兰是个好孩子。她怀孕那阵，总说要给孩子做桂花糕。我教她，她学得可快了。"

"后来她被抓走，我被关在门外。我听见她在屋里喊：'姨，救救我。' 可我救不了她。"

厨娘的魂开始变淡："你要是见到秀兰，告诉她，姨对不起她，但姨给她留了一罐桂花蜜。"`,effects:{"sanity":-5,"yin":-5,"addItem":"厨娘的桂花蜜"},choices:[createChoice({"text":"把桂花蜜给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"厨娘的桂花蜜"}}),createChoice({"text":"收好","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_stove_burn: createScene('huimen_exp2_kitchen_stove_burn', {title:'灶台焚符',text:`你点燃黄符。

符纸燃烧时，发出一阵婴儿的啼哭。厨娘的魂从灶台里飘出来，朝你鞠躬："谢谢你放我出来。"

她化作一道光，飞向远方。灶台里的火熄灭了，屋里弥漫着桂花的香气。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_released_cook_spirit"},choices:[createChoice({"text":"回厨房","next":"huimen_exp2_kitchen","effects":{"yin":1}})]})
};
