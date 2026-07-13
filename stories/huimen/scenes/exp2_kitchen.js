/**
 * 《回门》场景模块：exp2_kitchen
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_kitchen: createScene('huimen_exp2_kitchen', {title:'废弃厨房',text:`你循着一股若有若无的桂花香，来到一间废弃的厨房。

厨房是土坯房，屋顶塌了一半，另一半勉强撑着，檩子已经发黑。门是半开的，门板上贴着褪色的灶神像，灶神的脸被人用墨涂掉了。

灶台上积着厚厚的灰，灰里混着鼠粪和虫壳。锅还坐在灶上，锅盖歪着，锅里的水早已烧干，只剩一圈黑色的水渍。墙上挂着各种厨具：刀、铲、勺、笊篱，都生了锈，锈把铁锈成了赭红色。

你揭开锅盖，一股桂花的香气扑面而来，甜得发腻，混着一丝焦糊。锅里不是汤，是一锅凝固的桂花糕。糕已经发黑，硬得像石头，可那桂花香却还新鲜得像是刚蒸出来。

[red]这是秀兰被活埋前，最后一次想做却没有做成的桂花糕。[/red]

糕面还留着她的手印，五个指头，按得很深。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"尝一口桂花糕","next":"huimen_exp2_kitchen_taste","effects":{"yin":3}}),createChoice({"text":"重新蒸一锅","next":"huimen_exp2_kitchen_cook","effects":{"yin":-3}}),createChoice({"text":"查看灶台下的柴火","next":"huimen_exp2_kitchen_firewood","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"你觉察灶台里封着东西，蹲下细看","next":"huimen_exp2_kitchen_stove","condition":{"flag":"knowsTruth"},"hidden":true,"effects":{"yin":2}})]}),
    huimen_exp2_kitchen_taste: createScene('huimen_exp2_kitchen_taste', {title:'尝糕',text:`你用手指抠下一小块凝固的桂花糕，放进嘴里。

糕是苦的，苦得让你想吐。那苦味从舌尖一直窜到喉咙，再窜到胃里，搅得你一阵恶心。可你咽了下去。

"好吃吗？" 一个声音问，从灶台后面传来。

你转头，看见秀兰站在灶台边。她穿着围裙，头发挽起，袖子卷到肘上，像是三十年前那个准备做糕的姑娘。她的脸是年轻的，没有怨气，只有一种期待。

"好吃。" 你说，喉头发紧，"就是有点苦。"

秀兰笑了，那笑容很淡，却让厨房亮了一些。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"问她为什么不走","next":"huimen_exp2_kitchen_talk","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_talk: createScene('huimen_exp2_kitchen_talk', {title:'厨房对话',text:`你问秀兰："你为什么还留在这里？"

秀兰看着锅里的桂花糕，伸手摸了摸锅沿，锅是凉的，可她的手没有缩回来。

"因为我想做完这锅糕。" 她说，"我死那天，糕还没蒸好。火刚生起来，他们就来抓我了。我听见灶里的柴还噼啪响，可我再也回不来了。"

"我帮你蒸。" 你说。

秀兰笑了，笑里有惊讶，也有不信："你？你会蒸桂花糕？"

"不会。" 你说，"但我可以学。"

她看了你一会儿，然后点点头，像是做了一个很久没敢做的决定。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_promised_to_cook"},choices:[createChoice({"text":"重新蒸糕","next":"huimen_exp2_kitchen_cook","effects":{"yin":-3}})]}),
    huimen_exp2_kitchen_cook: createScene('huimen_exp2_kitchen_cook', {title:'蒸糕',text:`你在灶台下找到几捆干柴，还有半袋发霉的糯米粉。你把干柴塞进灶膛，用打火机点着。火苗舔上柴，噼啪作响，烟从灶口冒出来，呛得你直咳嗽。

锅里的桂花糕慢慢融化，从一块黑石头变成一锅浓稠的糊。香气越来越浓，盖过了厨房里的霉味。

秀兰站在你身边，指导你加水、加糖、加桂花。她的声音很轻，像是怕惊动什么。

"火不要太旺。" 她说，"桂花糕要慢慢蒸，才甜。急火蒸出来的糕，外面熟了里面生，吃了伤心。"

你照她说的做，把火压小，让蒸汽一点点把糕蒸熟。过了一会儿，锅里飘出真正的甜香——不是三十年前那股发苦的香，是新鲜的，干净的，像秀兰活着时的味道。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_cooked_guihua_gao"},choices:[createChoice({"text":"把糕带给秀兰","ending":"huimen_exp2_ending_kitchen_smoke","effects":{"yin":-5}}),createChoice({"text":"自己尝一口","next":"huimen_exp2_kitchen_eat","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp2_kitchen_eat: createScene('huimen_exp2_kitchen_eat', {title:'吃糕',text:`你用筷子挑起一块刚蒸好的桂花糕，吹了吹，放进嘴里。

很甜。甜得发腻，甜得让你牙根发酸。桂花在舌尖上化开，软软的，糯糯的。

你吃着吃着，眼泪就流了下来。不是因为苦，是因为甜。这口甜，秀兰等了三十年。

"你怎么哭了？" 秀兰问，她站在灶台边，手里还拿着一根搅拌的筷子。

"因为甜。" 你说，抹了一把脸，"因为三十年了，你终于吃到甜的了。"

秀兰没有说话。她转过身去，肩膀抖了一下。`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回厨房","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_firewood: createScene('huimen_exp2_kitchen_firewood', {title:'柴火',text:`你蹲下身，查看灶台下的柴火。

柴火堆得乱七八糟，有松枝、有竹片、有劈开的木柴。你扒拉开柴火，发现最底下埋着一个小布包。布包是蓝底白花的，和你在粮仓里见过的那个一样。

你打开布包，里面是一缕头发——很长，黑得发亮，用一根红线系着。布包里还夹着一张纸条，纸条已经发黄：

[faded]"秀兰之发，藏于灶下，愿来生有火暖身。"[/faded]

[red]秀兰连来生取暖的愿望，都这么小。她不求富贵，不求长寿，只求一把火。[/red]

你把头发捧在手里，头发是凉的，凉得像井水。`,effects:{"sanity":-5,"yin":2,"addItem":"灶下的头发"},choices:[createChoice({"text":"把头发还给秀兰","next":"huimen_exp2_riverbank","condition":{"hasItem":"灶下的头发"},"effects":{"sanity":10,"yin":-10,"removeItem":"灶下的头发"}}),createChoice({"text":"收好","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_stove: createScene('huimen_exp2_kitchen_stove', {title:'灶台',text:`你蹲在废弃厨房的灶台前，凑近了看。

灶台是土砌的，外面糊了一层石灰，石灰已经剥落，露出里面的土砖。灶膛里还有没烧完的柴火，柴火中间埋着一个陶罐。罐口露出一角，不仔细看发现不了。

你把陶罐取出来，罐子不大，巴掌大小，罐口封着一张黄符。黄符已经发脆，上面用朱砂画着符，符中间写着一个"禁"字，字写得歪歪扭扭，像是一个不熟悉符术的人画的。

[red]周家在灶台里封了东西。封在灶里，是要让那东西永世受火烤。[/red]

你把陶罐凑近耳朵，听见罐里传来一阵细微的呜咽声，像是一个女人在哭。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"打开陶罐","next":"huimen_exp2_kitchen_stove_open","effects":{"yin":3}}),createChoice({"text":"把黄符烧了","next":"huimen_exp2_kitchen_stove_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"放回原处","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_stove_open: createScene('huimen_exp2_kitchen_stove_open', {title:'开罐',text:`你撕开黄符。符纸一裂，发出"嘶"的一声，像布被撕开。

你打开陶罐，罐里不是东西，是一团黑雾。黑雾飘出来，在空中盘旋，慢慢凝成一个女子的身形。她穿着粗布衣裳，围裙上沾着面粉，头发挽着髻，是一个下人的模样。

"我是秀兰的厨娘。" 她说，声音沙哑，像是嗓子里灌过沙，"她怀孕那阵，我偷偷给她送吃的。后来我被周家赶出去，饿死在路上。他们把我的魂封在灶里，让我永世受火烤。"

她的身影在灶火的光里晃动，像是要散又散不掉。

"你能告诉我秀兰的事吗？" 你问。`,effects:{"sanity":-3,"yin":3,"setFlag":"huimen_exp2_met_cook_spirit"},choices:[createChoice({"text":"听她讲","next":"huimen_exp2_kitchen_stove_listen","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_stove_listen: createScene('huimen_exp2_kitchen_stove_listen', {title:'厨娘的话',text:`厨娘坐在灶台上，开始讲。她的身影很淡，灶火的光穿过去，在地上投不出影子。

"秀兰是个好孩子。她怀孕那阵，总说要给孩子做桂花糕。我教她，她学得可快了，第三天就能自己蒸了。她蒸的糕，比我的还甜。"

"后来她被抓走，我被关在门外。我听见她在屋里喊：'姨，救救我。' 可我救不了她。我砸门，把手都砸出血了，门也不开。"

厨娘的身影开始变淡，像烟一样散。她从怀里掏出一个小罐子，递给你。

"你要是见到秀兰，告诉她，姨对不起她，但姨给她留了一罐桂花蜜。是我亲手熬的，熬了三天，她最爱吃那个甜。"

她的手在发抖，罐子是温的。`,effects:{"sanity":-5,"yin":-5,"addItem":"厨娘的桂花蜜"},choices:[createChoice({"text":"把桂花蜜给秀兰","next":"huimen_exp2_riverbank","condition":{"hasItem":"厨娘的桂花蜜"},"effects":{"sanity":10,"yin":-10,"removeItem":"厨娘的桂花蜜"}}),createChoice({"text":"收好","next":"huimen_exp2_kitchen","effects":{"yin":1}})]}),
    huimen_exp2_kitchen_stove_burn: createScene('huimen_exp2_kitchen_stove_burn', {title:'灶台焚符',text:`你把黄符点燃。

符纸燃烧时，发出一阵婴儿的啼哭——不是一个人的哭，是许多个，叠在一起，像一窝被遗弃的猫崽。哭声从灶膛里涌出来，灌满整个厨房。

厨娘的魂从灶台里飘出来，她的脸上没有怨恨，只有释然。她朝你深深鞠了一躬："谢谢你放我出来。三十年了，我每天被火烤，烤得魂都快化了。"

她化作一道光，飞向窗外，消失在夜空。灶台里的火熄灭了，屋里弥漫着桂花的香气，那香气留了很久，像是在替她说再见。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_released_cook_spirit"},choices:[createChoice({"text":"回厨房","next":"huimen_exp2_kitchen","effects":{"yin":1}})]})
};
