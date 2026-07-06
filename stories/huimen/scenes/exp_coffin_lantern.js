/**
 * 《回门》场景模块：exp_coffin_lantern
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_red_lantern: createScene('huimen_exp_red_lantern', {title:"红灯笼",text:"巷子尽头亮起一盏红灯笼。\n\n灯笼在雾里飘，没有提灯笼的人。你跟着它走，发现它停在一扇朱门前。\n\n门自动开了，里面是一间喜房。床上坐着一个盖着红盖头的新娘，她的手腕上系着红绳，红绳的另一端消失在床底。\n\n\"进来吧。\" 新娘说，\"拜了堂，你就是周家的人了。\"\n\n[red]你不想进去，可灯笼的光把你往里拉。[/red]",effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"转身就跑","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":2}}),createChoice({"text":"把灯笼吹灭","next":"huimen_extinguish_lantern","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"问新娘是不是秀兰","next":"huimen_exp_red_lantern_bride","effects":{"yin":2}})]}),
    huimen_exp_red_lantern_bride: createScene('huimen_exp_red_lantern_bride', {title:"新娘",text:"你问：\"你是秀兰吗？\"\n\n新娘沉默了很久，然后缓缓摇头。\n\n\"我不是秀兰。我是秀兰之前的新娘，也是秀兰之后的新娘。\" 她说，\"周家每隔几年就要娶一个，秀兰是最有名的一个，但不是唯一一个。\"\n\n她掀开盖头，露出一张腐烂的脸：\"你想救她，就救救我们所有人。\"\n\n她把红绳递到你面前：\"剪断它。\"",effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"用缠发剪刀剪断红绳","next":"huimen_exp_cut_bride_string","condition":{"hasItem":"缠发剪刀"},"effects":{"sanity":10,"yin":-10}}),createChoice({"text":"没有剪刀，用手解","next":"huimen_exp_village_ghost","effects":{"sanity":-10,"yin":5}})]}),
    huimen_exp_street_red_shoes: createScene('huimen_exp_street_red_shoes', {title:"红绣鞋",text:"石板路上放着一双红绣鞋。\n\n鞋子很小，像是三寸金莲。鞋面上绣着并蒂莲，针脚很细，看得出是做鞋的人用了心。\n\n你捡起来，发现鞋子里有一张纸条：\n\n[faded]\"妾身秀兰，亲手所制。愿君珍重，白头偕老。\"[/faded]\n\n[red]这是她给祖父做的鞋，还没来得及送出去。[/red]\n\n你捧着鞋，感到一阵心酸。三十年前，她也曾经满怀期待地想要嫁人。",effects:{"sanity":-5,"yin":1,"addItem":"红绣鞋"},choices:[createChoice({"text":"把鞋送到秀兰坟前","next":"huimen_exp_street_red_shoes_grave","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_red_shoes_grave: createScene('huimen_exp_street_red_shoes_grave', {title:"鞋归",text:"你捧着红绣鞋，来到无字碑前。\n\n\"秀兰，\" 你说，\"你的鞋，我替你收回来了。\"\n\n你把鞋放在碑前。鞋面上忽然出现了一双小小的脚印，像是有人穿上了它们。\n\n[whisper]\"刚刚好。\"[/whisper] 秀兰的声音说，\"不大不小。\"\n\n无字碑上的血字慢慢变淡，最后变成了一行普通的刻字：\n\n[faded]\"周氏秀兰之墓\"[/faded]\n\n你知道，她离解脱又近了一步。",effects:{"sanity":10,"yin":-10,"removeItem":"红绣鞋","setFlag":"huimen_exp_returned_red_shoes"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
