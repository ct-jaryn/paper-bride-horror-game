/**
 * 《回门》场景模块：exp_village_street_districts_hub
 * 村街外围区域与深层地点聚合
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_districts_hub: createScene('huimen_exp_village_street_districts_hub', {title:'村外之路',text:`你沿着村街向更深处走去。

房屋越来越稀疏，墙根的草却越长越密，齐腰高，沾着露水。雾气越来越浓，浓得伸手不见五指，只能摸索着往前走。路边开始出现一些你不认识的建筑：没有门牌的药铺、挂着褪色红绸的裁缝铺、半塌的学堂、长满青苔的河神石。

空气里飘着一股药草和腐木混合的气味，还有一种说不清的甜腥。每走一步，脚下都"沙沙"作响，像是踩着什么脆脆的东西。你低头看，石板缝里嵌满了烧剩半截的纸钱残片，一踩就碎，碎成黑灰沾在鞋底，怎么也蹭不掉。

[faded]更远处的房舍连屋顶都塌了半边，露出黑黢黢的梁木，像一排被掰开的肋骨。墙缝里渗着水，水痕蜿蜒而下，凝在墙根结成暗红的痂。[/faded]

一阵阴风贴着地皮刮过来，把雾气撕开一道口子。你看见远处有个佝偻的身影一闪而过，挑着一担纸扎，扁担"咯吱咯吱"地响。你想叫住他，他却拐进了一条没有出口的死巷，再没出来。

[whisper]"外头的东西，别乱认路。"[/whisper]不知谁在你耳边说了一句，声音又干又哑，像是含着一嘴的纸灰。

你站在原地，听见自己的心跳和远处的打更声叠在一起，"梆——梆——"，三更天。打更人似乎离你很近，又似乎隔了整整三十年。你想起来祖父临终前念叨过，这村子的更夫，二十年前就死了。

青石板路到这里断了一截，前面是泥地，泥里混着碎瓷片和烧黑的纸灰。你每抬一次脚，地上就多一个湿黑的脚印，可你回头看时，那些脚印正一个一个地被什么东西抹平，像是有人跟在你身后，替你扫去痕迹。

[red]这些才是村子真正的脏腑。每一条岔路，都通向一段被埋葬的旧事。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({text:"去河边看看",next:"huimen_exp2_riverbank",effects:{yin:1}}),createChoice({text:"去祖坟地",next:"huimen_exp2_graveyard",effects:{yin:1}}),createChoice({text:"去稳婆家",next:"huimen_exp2_midwife_house",effects:{yin:1}}),createChoice({text:"去纸扎匠家",next:"huimen_exp2_paper_maker_house",effects:{yin:1}}),createChoice({text:"去盲婆婆家",next:"huimen_exp2_blind_granny_house",effects:{yin:1}}),createChoice({text:"去村长家",next:"huimen_exp2_village_head_house",condition:{flag:"huimen_exp2_heard_village_head_secret"},effects:{yin:1}}),createChoice({text:"去废弃厨房",next:"huimen_exp2_kitchen",effects:{yin:1}}),createChoice({text:"去粮仓",next:"huimen_exp2_granary",effects:{yin:1}}),createChoice({text:"去学堂遗址",next:"huimen_exp2_school",effects:{yin:1}}),createChoice({text:"走山路去后山",next:"huimen_exp2_mountain_path",effects:{yin:1}}),createChoice({text:"去孩子们玩耍的空地",next:"huimen_exp2_child_ghost_playground",effects:{yin:1}}),createChoice({text:"去牧童小屋",next:"huimen_exp2_cowherd_hut",effects:{yin:1}}),createChoice({text:"去药铺",next:"huimen_exp2_medicine_shop",effects:{yin:1}}),createChoice({text:"去裁缝铺",next:"huimen_exp2_tailor_shop",effects:{yin:1}}),createChoice({text:"去废弃祠堂",next:"huimen_exp2_abandoned_hall",effects:{yin:1}}),createChoice({text:"去老戏台看看",next:"huimen_exp2_old_theater",effects:{yin:1}}),createChoice({text:"去河神石那里",next:"huimen_exp2_river_god",effects:{yin:1}}),createChoice({text:"去那片像镜子的湖",next:"huimen_exp2_mirror_lake",effects:{yin:1}}),createChoice({text:"去无名碑林",next:"huimen_exp2_nameless_stones",effects:{yin:1}}),createChoice({text:"去老槐树下",next:"huimen_exp2_old_tree",effects:{yin:1}}),createChoice({text:"进入秀兰的记忆",next:"huimen_exp2_xiulan_memory_childhood",effects:{yin:1}}),createChoice({text:"进入秀兰的婚礼记忆",next:"huimen_exp2_xiulan_memory_wedding",effects:{yin:1}}),createChoice({text:"进入秀兰的井底记忆",next:"huimen_exp2_xiulan_memory_well",effects:{yin:1}}),createChoice({text:"去周家祖宅看看",next:"huimen_exp3_zhou_mansion_gate",effects:{yin:1}}),createChoice({text:"回村街",next:"huimen_exp_village_street",effects:{yin:1}})]})
};
