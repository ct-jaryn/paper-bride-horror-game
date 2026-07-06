/**
 * 《回门》场景模块：exp_village_street_keepsakes_guardians
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_stone_lion: createScene('huimen_exp_village_street_stone_lion', {title:"石狮",text:"村口有一对石狮。\n\n石狮不是石头的，是纸糊的。你走近，发现石狮的眼睛在动。\n\n\"守了周家三十年。\" 一只石狮说，\"现在想走了。\"\n\n\"你们为什么要守？\" 你问。\n\n\"因为嘴里含着我们的名字。\" 另一只石狮张开嘴，嘴里有一团纸，纸上写着\"秀兰\"。\n\n[red]周家把女子的名字塞进石狮嘴里，让她们守门。[/red]\n\n你从石狮嘴里取出那团纸。石狮顿时瘫软在地，化为一堆废纸。",effects:{"sanity":-5,"yin":2,"addItem":"石狮口中的名字"},choices:[createChoice({"text":"把纸烧掉","next":"huimen_exp_village_street_stone_lion_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_stone_lion_burn: createScene('huimen_exp_village_street_stone_lion_burn', {title:"焚名",text:"你点燃那团纸。\n\n火光里，秀兰的名字在燃烧，却没有化为灰，而是化作一只红色的蝴蝶，飞向夜空。\n\n\"我自由了。\" 蝴蝶说，\"谢谢你，守门人。\"\n\n另一只石狮也张开了嘴，里面还有更多名字。你一只一只取出，一只一只烧掉。\n\n村口的两只石狮彻底化为了灰烬。从此，周家再也没有守门人了。",effects:{"sanity":10,"yin":-10,"removeItem":"石狮口中的名字"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_abandoned_bed: createScene('huimen_exp_village_street_abandoned_bed', {title:"空床",text:"你推开一扇门，屋里有一张床。\n\n床上铺着大红被褥，像是新婚的床。可床上没有人，只有一个纸人，穿着新娘服，盖着红盖头。\n\n你掀开盖头，纸人的脸是空白的。\n\n\"这是秀兰的婚床。\" 一个声音说，\"她没睡过，就被活埋了。\"\n\n[red]你把被褥掀开，床板上刻着一行字：\"兰妹，等我。\"[/red]\n\n那是祖父的字迹。",effects:{"sanity":-8,"yin":2,"addItem":"婚床上的字条"},choices:[createChoice({"text":"把字条给秀兰","next":"huimen_exp_village_street_abandoned_bed_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_abandoned_bed_give: createScene('huimen_exp_village_street_abandoned_bed_give', {title:"婚床之约",text:"你把字条放在井沿。\n\n秀兰浮出来，看着字条上的字，手在发抖。\n\n\"兰妹，等我。\" 她念了一遍又一遍，\"他叫我兰妹。\"\n\n\"他一直在等你。\" 你说，\"只是没等到。\"\n\n秀兰把字条贴在心口，字条化作一道光，渗入她的身体。\n\n\"我等到了。\" 她说，\"三百年也值了。\"",effects:{"sanity":10,"yin":-10,"removeItem":"婚床上的字条"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
