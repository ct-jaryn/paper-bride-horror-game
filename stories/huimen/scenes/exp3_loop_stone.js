/**
 * 《回门》场景模块：exp3_loop_stone
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_loop_stone: createScene('huimen_exp3_loop_stone', {title:'循环石碑',text:`你在村街尽头发现一块被青苔覆盖的石碑。石碑上刻着："入村者三，出村者一。走错重来，走对归一。"

你伸手擦去青苔，石碑表面浮现出三个箭头，分别指向老宅、井边、纸扎铺。`,effects:{"yin":1},choices:[createChoice({"text":"走老宅方向","next":"huimen_exp3_loop_mansion","effects":{"yin":1}}),createChoice({"text":"走井边方向","next":"huimen_exp3_loop_well","effects":{"yin":1}}),createChoice({"text":"走纸扎铺方向","next":"huimen_exp3_loop_paper","effects":{"yin":1}}),createChoice({"text":"在石碑前等待","next":"huimen_exp3_loop_wait","effects":{"yin":0}})]}),
    huimen_exp3_loop_wait: createScene('huimen_exp3_loop_wait', {title:'循环等待',text:`你站在石碑前，没有急着选。

夜风吹过，石碑上的青苔重新合拢，把三个箭头盖住了。你忽然发现，石碑底部还有一行小字："心不动，则路自现。"`,effects:{"sanity":3,"yin":0},choices:[createChoice({"text":"闭上眼睛","next":"huimen_exp3_loop_eyes_closed","effects":{"sanity":2,"yin":0}}),createChoice({"text":"默念秀兰的名字","next":"huimen_exp3_loop_call_xiulan","effects":{"sanity":3,"yin":0}})]})
};
