/**
 * 《回门》场景模块：exp3_xiulan
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_xiulan_ask_save: createScene('huimen_exp3_xiulan_ask_save', {title:'未了心愿',text:`井水平静下来，映出秀兰苍白的脸。

"我想回家。"她说，"不是周家，是我自己的家。我想让我娘知道，我没有做错事。"

她的手指划过水面，荡开一圈涟漪。

"还有……"她顿了顿，"我想穿一次自己的嫁衣。不是周家给我穿的那件。"`,effects:{"sanity":3,"yin":2},choices:[createChoice({"text":"答应带她回家","next":"huimen_exp3_xiulan_wish_home","effects":{"sanity":5,"yin":1,"setFlag":"huimen_exp3_wish_home"}}),createChoice({"text":"答应给她一件自己的嫁衣","next":"huimen_exp3_xiulan_wish_dress","effects":{"sanity":5,"yin":1,"setFlag":"huimen_exp3_wish_dress"}}),createChoice({"text":"问她还需要什么","next":"huimen_exp3_xiulan_wish_more","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_wish_home: createScene('huimen_exp3_xiulan_wish_home', {title:'回家',text:`秀兰笑了，那笑容像水面上最后一点月光。

"我娘住在村东头，门口有棵石榴树。她眼睛不好，你替我把顶针还给她。"

她的身影开始淡去，井水里只剩那弯残月。`,effects:{"sanity":5,"yin":-2},choices:[createChoice({"text":"离开井边","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_wish_dress: createScene('huimen_exp3_xiulan_wish_dress', {title:'秀兰心愿嫁衣',text:`"裁缝铺的刘姐手艺最好。"秀兰说，"我攒了三年布钱，本想请她做一件粉的。"

她的眼泪落进井水，没有溅起涟漪，而是变成一颗颗细小的珍珠，沉向井底。`,effects:{"sanity":5,"yin":-2},choices:[createChoice({"text":"拾起一颗珍珠","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"秀兰泪珠"}})]}),
    huimen_exp3_xiulan_wish_more: createScene('huimen_exp3_xiulan_wish_more', {title:'更多',text:`秀兰想了很久。

"我还想……听人叫我的名字。不是周家媳妇，不是井里的东西，是秀兰。"

她说完，井水里泛起一层薄薄的光，像是谁把月光碾碎了撒进去。`,effects:{"sanity":5,"yin":-2,"setFlag":"huimen_exp3_wish_name"},choices:[createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_xiulan_hand: createScene('huimen_exp3_xiulan_hand', {title:'牵手',text:`秀兰的手很凉，但不再是没有形状的雾气。

"地窖后面有一条密道，通向村口。"她说，"但我还不能直接走出去。我的尸骨还在井里，你得把我捞上来。"

她的身影慢慢淡去，只留下一句话："我在井边等你。"`,effects:{"sanity":3,"yin":-2},choices:[createChoice({"text":"去井边","next":"huimen_exp_well_night","effects":{"yin":1}}),createChoice({"text":"先回村街准备","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp3_well_bottom_xiulan_bones: createScene('huimen_exp3_well_bottom_xiulan_bones', {title:'秀兰的骨殖',text:`你轻轻拨开淤泥，露出红嫁衣下的骨架。

骨架很小，肩胛骨上还有一处旧伤，像是很久以前被什么东西勒过。嫁衣的袖口绣着井，井下绣着你的名字——不是周家的名字，是你在城里用的名字。

你这才明白，她一直在等你。`,effects:{"sanity":-3,"yin":4,"addItem":"秀兰的骨殖"},choices:[createChoice({"text":"把骨殖包好","next":"huimen_exp3_well_bottom_wrap","effects":{"sanity":3,"yin":1}}),createChoice({"text":"给她换上带来的嫁衣","next":"huimen_exp3_well_bottom_change_dress","condition":{"flag":"huimen_exp3_wish_dress"},"effects":{"sanity":8,"yin":-3}})]})
};
