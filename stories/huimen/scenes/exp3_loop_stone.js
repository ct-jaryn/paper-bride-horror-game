/**
 * 《回门》场景模块：exp3_loop_stone
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_loop_stone: createScene('huimen_exp3_loop_stone', {title:'循环石碑',text:`你在村街尽头发现一块被青苔覆盖的石碑。

夜雾很重，沾在脸上像一层湿冷的绢。你伸手去擦石碑，指尖触到的青苔却软得像人的皮肤，又凉又滑，底下似乎还有什么东西在轻轻搏动。

石碑上刻着："入村者三，出村者一。走错重来，走对归一。"

字迹是用朱砂填的，朱砂早已发黑，像凝住的血。你凑近了看，发现每个字的笔画里都嵌着一根极细的头发，黑的、白的、还有几根是染了红的。

[whisper]有人在你耳后轻轻吹了一口气。[/whisper]

你猛地回头，身后什么也没有，只有雾。雾里有纸钱翻飞的声音，却看不见一张纸钱。

你重新擦去青苔，石碑表面浮现出三个箭头，分别指向老宅、井边、纸扎铺。三个方向都黑着，像三条咽下去的喉咙。

石碑底座上还刻着一行更小的字，几乎被泥埋住："第三次，便没有第四次。"

你心头一沉——这是第几次了？`,effects:{"yin":1},choices:[createChoice({"text":"走老宅方向","next":"huimen_exp3_loop_mansion","effects":{"yin":1}}),createChoice({"text":"走井边方向","next":"huimen_exp3_loop_well","effects":{"yin":1}}),createChoice({"text":"走纸扎铺方向","next":"huimen_exp3_loop_paper","effects":{"yin":1}}),createChoice({"text":"在石碑前等待","next":"huimen_exp3_loop_wait","effects":{"yin":0}})]}),
    huimen_exp3_loop_wait: createScene('huimen_exp3_loop_wait', {title:'循环等待',text:`你站在石碑前，没有急着选。

夜风从三个方向同时吹来，在你脚边打着旋。风里夹着三种气味：老宅方向的霉味、井边的水腥气、纸扎铺的糊纸香。三种气味混在一起，变成一种说不出的、属于死人的甜。

你不动，风也不动。

石碑上的青苔慢慢重新合拢，像一只缓缓闭上眼睛的兽，把三个箭头一点点盖住。你看着最后一点朱砂红被青苔吞掉，心里反倒松了一口气。

就在这时，你发现青苔之下还有一行更小的字，被泥糊得几乎看不见。你蹲下身，用指甲一点点抠开："心不动，则路自现。"

字是反着刻的，像是从石碑另一面透过来。

你抬头，看见石碑背后立着一个纸扎人。它背对着你，肩膀一耸一耸，像在哭。

你不动，它也不动。`,effects:{"sanity":3,"yin":0},choices:[createChoice({"text":"闭上眼睛","next":"huimen_exp3_loop_eyes_closed","effects":{"sanity":2,"yin":0}}),createChoice({"text":"默念秀兰的名字","next":"huimen_exp3_loop_call_xiulan","effects":{"sanity":3,"yin":0}})]})
};
