/**
 * 《回门》场景模块：exp_village_street_keepsakes_guardians
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_stone_lion: createScene('huimen_exp_village_street_stone_lion', {title:"石狮",text:`村口有一对石狮，蹲在门两边。

石狮不是石头的，是纸糊的，纸皮上刷了层灰漆，远看像真的。你走近，发现石狮的眼睛在动，乌溜溜地转，盯着你。

"守了周家三十年。"一只石狮开口，声音低沉，"现在想走了。"

"你们为什么要守？"你问。

"因为嘴里含着我们的名字。"另一只石狮张开嘴，嘴里有一团皱巴巴的纸，纸上写着"秀兰"，墨迹模糊。

[red]周家把女子的名字塞进石狮嘴里，让她们守门。[/red]

你伸手，从石狮嘴里取出那团纸。石狮顿时瘫软在地，化为一堆废纸，散了一地。`,effects:{"sanity":-5,"yin":2,"addItem":"石狮口中的名字"},choices:[createChoice({"text":"把纸烧掉","next":"huimen_exp_village_street_stone_lion_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_stone_lion_burn: createScene('huimen_exp_village_street_stone_lion_burn', {title:"焚名",text:`你点燃那团纸。

火光里，秀兰的名字在燃烧，却没有化为灰，而是化作一只红色的蝴蝶，扑扇着翅膀飞向夜空。

"我自由了。"蝴蝶说，声音轻飘飘的，"谢谢你，守门人。"

另一只石狮也张开了嘴，里面还有更多名字。你一个一个取出，一个一个烧掉，火光映红了村口。

村口的两只石狮彻底化为了灰烬。从此，周家再也没有守门人了。`,effects:{"sanity":10,"yin":-10,"removeItem":"石狮口中的名字"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_abandoned_bed: createScene('huimen_exp_village_street_abandoned_bed', {title:"空床",text:`你推开一扇门，屋里静悄悄的，有一张床。

床上铺着大红被褥，绣着龙凤，像是新婚的床，喜气洋洋。可床上没有人，只有一个纸人，穿着新娘服，盖着红盖头，端端正正坐着。

你掀开盖头，纸人的脸是空白的，一片白纸，没有五官。

"这是秀兰的婚床。"一个声音从屋里飘出来，"她没睡过，就被活埋了。"

[red]你把被褥掀开，床板上刻着一行字："兰妹，等我。"[/red]

那是祖父的字迹，刻得很深。`,effects:{"sanity":-8,"yin":2,"addItem":"婚床上的字条"},choices:[createChoice({"text":"把字条给秀兰","next":"huimen_exp_village_street_abandoned_bed_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_abandoned_bed_give: createScene('huimen_exp_village_street_abandoned_bed_give', {title:"婚床之约",text:`你把字条放在井沿。

秀兰浮出来，看着字条上的字，手在发抖，半天说不出话。

"兰妹，等我。"她念了一遍又一遍，眼泪落下来，"他叫我兰妹。"

"他一直在等你。"你说，"只是没等到。"

秀兰把字条贴在心口，字条化作一道光，渗入她的身体。

"我等到了。"她说，声音发颤，"三百年也值了。"`,effects:{"sanity":10,"yin":-10,"removeItem":"婚床上的字条"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
