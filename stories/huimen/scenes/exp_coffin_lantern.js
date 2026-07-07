/**
 * 《回门》场景模块：exp_coffin_lantern
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_red_lantern: createScene('huimen_exp_red_lantern', {title:"红灯笼",text:`巷子尽头，不知何时亮起了一盏红灯笼。

灯笼在雾里飘飘忽忽，下面没有提灯笼的人，红穗子却一晃一晃，像有人正提着它走。你鬼使神差地跟着它走，鞋底踩过湿漉漉的青石板，发出"啪嗒、啪嗒"的声响。

灯笼停在一扇朱红大门前。门上贴着褪色的囍字，金粉剥落了一半。

门"吱呀"一声自动开了，里面是一间喜房。床上端端正正坐着一个盖着红盖头的新娘，凤冠霞帔，手腕上系着一根红绳。红绳的另一端垂下来，消失在床底的黑暗里。

"进来吧。"新娘开口，声音幽幽的，"拜了堂，你就是周家的人了。"

[red]你不想进去，可灯笼的光像一只手，把你往里拉。[/red]`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"转身就跑","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":2}}),createChoice({"text":"把灯笼吹灭","next":"huimen_extinguish_lantern","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"问新娘是不是秀兰","next":"huimen_exp_red_lantern_bride","effects":{"yin":2}})]}),
    huimen_exp_red_lantern_bride: createScene('huimen_exp_red_lantern_bride', {title:"新娘",text:`你站在门口，问："你是秀兰吗？"

新娘沉默了很久，久到你以为她不会再开口。然后她缓缓摇了摇头，红盖头随之轻轻晃动。

"我不是秀兰。我是秀兰之前的新娘，也是秀兰之后的新娘。"她说，"周家每隔几年就要娶一个，秀兰是最有名的一个，但不是唯一一个。"

她伸手掀开盖头，露出一张半腐烂的脸，皮肉翻卷，眼眶里爬着蛆虫。

"你想救她，就救救我们所有人。"

她把手腕上的红绳递到你面前，绳子的一端滴着血水："剪断它。"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"用缠发剪刀剪断红绳","next":"huimen_exp_cut_bride_string","condition":{"hasItem":"缠发剪刀"},"effects":{"sanity":10,"yin":-10}}),createChoice({"text":"没有剪刀，用手解","next":"huimen_exp_village_ghost","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"不剪也不解，留下来陪她","next":"huimen_exp_village_ghost_alt","condition":{"flag":"knowsTruth"},"effects":{"sanity":-15,"yin":8},"hidden":true})]}),
    huimen_exp_street_red_shoes: createScene('huimen_exp_street_red_shoes', {title:"红绣鞋",text:`石板路正中，端端正正放着一双红绣鞋。

鞋子很小，像是三寸金莲。鞋面上绣着并蒂莲，针脚细密匀称，看得出做鞋的人花了许多心思。

你弯腰捡起来，发现鞋里塞着一张折叠的纸条。展开一看，是娟秀的小楷：

[faded]"妾身秀兰，亲手所制。愿君珍重，白头偕老。"[/faded]

[red]这是她给祖父做的鞋，还没来得及送出去。[/red]

你捧着那双鞋，鼻尖忽然一酸。三十年前，她也曾经满怀期待地想要嫁人，一针一线绣着并蒂莲，绣着她以为会有的将来。`,effects:{"sanity":-5,"yin":1,"addItem":"红绣鞋"},choices:[createChoice({"text":"把鞋送到秀兰坟前","next":"huimen_exp_street_red_shoes_grave","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_red_shoes_grave: createScene('huimen_exp_street_red_shoes_grave', {title:"鞋归",text:`你捧着红绣鞋，踩着露水来到无字碑前。

"秀兰，"你轻声说，"你的鞋，我替你收回来了。"

你把鞋轻轻放在碑前。鞋面上忽然出现一双小小的脚印，像是有人当真穿上了它们，在鞋面上踩了一下。

[whisper]"刚刚好。"[/whisper]秀兰的声音从碑里飘出来，带着一丝难得的轻快，"不大不小。"

无字碑上那行血字慢慢变淡，鲜红褪成暗红，最后化作一行普通的刻字：

[faded]"周氏秀兰之墓"[/faded]

你知道，她离解脱又近了一步。`,effects:{"sanity":10,"yin":-10,"removeItem":"红绣鞋","setFlag":"huimen_exp_returned_red_shoes"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
