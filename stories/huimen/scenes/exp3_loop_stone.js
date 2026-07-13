/**
 * 《回门》场景模块：exp3_loop_stone
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_loop_counter: createScene('huimen_exp3_loop_counter', {title:'循环入口',text:`你站到了那块被青苔覆盖的石碑前。

雾在你脚边流转，像活物一样。石碑上的朱砂字被水汽洇得发红，像是刚用血写过。`,choices:[createChoice({"text":"第一次踏入循环","next":"huimen_exp3_loop_counter_1","condition":{"noFlag":"huimen_exp3_loop_count"},"effects":{"yin":0}}),createChoice({"text":"再次回到石碑前","next":"huimen_exp3_loop_counter_check_2","condition":{"flag":"huimen_exp3_loop_count"},"effects":{"yin":0}})]}),
    huimen_exp3_loop_counter_1: createScene('huimen_exp3_loop_counter_1', {title:'第一次循环',text:`你伸手擦去石碑上的青苔。指尖触到的苔又软又凉，像人的皮肤。

这是第一次。你告诉自己，三次之后，便没有第四次。`,effects:{"setFlag":"huimen_exp3_loop_count"},choices:[createChoice({"text":"看向石碑","next":"huimen_exp3_loop_stone","effects":{"yin":0}})]}),
    huimen_exp3_loop_counter_check_2: createScene('huimen_exp3_loop_counter_check_2', {title:'循环计数',text:`你又站在了石碑前。`,choices:[createChoice({"text":"第二次踏入循环","next":"huimen_exp3_loop_counter_2","condition":{"noFlag":"huimen_exp3_loop_count_2"},"effects":{"yin":0}}),createChoice({"text":"第三次踏入循环","next":"huimen_exp3_loop_counter_3","condition":{"flag":"huimen_exp3_loop_count_2"},"effects":{"yin":0}})]}),
    huimen_exp3_loop_counter_2: createScene('huimen_exp3_loop_counter_2', {title:'第二次循环',text:`青苔比上一次更厚了。石碑上的朱砂字像是被水洗过，淡了一些。

这是第二次。`,effects:{"setFlag":"huimen_exp3_loop_count_2"},choices:[createChoice({"text":"看向石碑","next":"huimen_exp3_loop_stone","effects":{"yin":0}})]}),
    huimen_exp3_loop_counter_3: createScene('huimen_exp3_loop_counter_3', {title:'第三次循环',text:`石碑上的字几乎被青苔完全盖住了。你伸手去擦，却发现那些青苔长进了石缝里，像血管一样。

[red]这是第三次。第三次，便没有第四次。[/red]`,effects:{"setFlag":["huimen_exp3_loop_count_3","huimen_exp3_loop_third"]},choices:[createChoice({"text":"看向石碑","next":"huimen_exp3_loop_stone_third","effects":{"yin":0}})]}),
    huimen_exp3_loop_stone_third: createScene('huimen_exp3_loop_stone_third', {title:'循环尽头',text:`石碑上的三个箭头还在，但都不再指向路了。

老宅方向的箭头指向一块墓碑，井边方向的箭头指向井底，纸扎铺方向的箭头指向你自己。

[red]第三次，没有退回的路。无论选哪条，你都将被这条循环吞没。[/red]`,choices:[createChoice({"text":"你已无法退出","next":"huimen_exp3_loop_third_force","effects":{"yin":0}})]}),
    huimen_exp3_loop_third_force: createScene('huimen_exp3_loop_third_force', {title:'循环囚徒',text:`你迈出了那一步。

脚下的青石板忽然变软，像踩在湿纸上。你低头，看见自己的影子正跪在石碑前，朝你磕头。

[whisper]"欢迎回来。"它说，"这一次，你出不去了。"[/whisper]

你忽然明白，那些循环不是给你试错的，是给你选择的。你选了太多次，最后把自己也选进了这个圈。

雾涌上来，把你的口鼻捂住。你没有挣扎。挣扎也是循环的一部分。`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"成为下一个守碑的人","ending":"huimen_exp3_ending_loop_prisoner","effects":{"yin":0}})]}),
    huimen_exp3_loop_stone: createScene('huimen_exp3_loop_stone', {title:'循环石碑',text:`你在村街尽头发现一块被青苔覆盖的石碑。

夜雾很重，沾在脸上像一层湿冷的绢。你伸手去擦石碑，指尖触到的青苔却软得像人的皮肤，又凉又滑，底下似乎还有什么东西在轻轻搏动。

石碑上刻着："入村者三，出村者一。走错重来，走对归一。"

字迹是用朱砂填的，朱砂早已发黑，像凝住的血。你凑近了看，发现每个字的笔画里都嵌着一根极细的头发，黑的、白的、还有几根是染了红的。

[whisper]有人在你耳后轻轻吹了一口气。[/whisper]

你猛地回头，身后什么也没有，只有雾。雾里有纸钱翻飞的声音，却看不见一张纸钱。

你重新擦去青苔，石碑表面浮现出三个箭头，分别指向老宅、井边、纸扎铺。三个方向都黑着，像三条咽下去的喉咙。

石碑底座上还刻着一行更小的字，几乎被泥埋住："第三次，便没有第四次。"

底座更下方，有两个模糊的名字被青苔盖住，只剩笔画边缘。你看不清它们，但你知道那是先于你走进这"入村者三"的另外两个人。他们没能成为"出村者一"。

你心头一沉——这是第几次了？`,effects:{"yin":1},choices:[createChoice({"text":"走老宅方向","next":"huimen_exp3_loop_mansion","effects":{"yin":1}}),createChoice({"text":"走井边方向","next":"huimen_exp3_loop_well","effects":{"yin":1}}),createChoice({"text":"走纸扎铺方向","next":"huimen_exp3_loop_paper","effects":{"yin":1}}),createChoice({"text":"在石碑前等待","next":"huimen_exp3_loop_wait","effects":{"yin":0}})]}),
    huimen_exp3_loop_wait: createScene('huimen_exp3_loop_wait', {title:'循环等待',text:`你站在石碑前，没有急着选。

夜风从三个方向同时吹来，在你脚边打着旋。风里夹着三种气味：老宅方向的霉味、井边的水腥气、纸扎铺的糊纸香。三种气味混在一起，变成一种说不出的、属于死人的甜。

你不动，风也不动。

石碑上的青苔慢慢重新合拢，像一只缓缓闭上眼睛的兽，把三个箭头一点点盖住。你看着最后一点朱砂红被青苔吞掉，心里反倒松了一口气。

就在这时，你发现青苔之下还有一行更小的字，被泥糊得几乎看不见。你蹲下身，用指甲一点点抠开："心不动，则路自现。"

字是反着刻的，像是从石碑另一面透过来。

你抬头，看见石碑背后立着一个纸扎人。它背对着你，肩膀一耸一耸，像在哭。

你不动，它也不动。`,effects:{"sanity":3,"yin":0},choices:[createChoice({"text":"闭上眼睛","next":"huimen_exp3_loop_eyes_closed","condition":{"flag":"huimen_exp3_loop_count_2"},"effects":{"sanity":2,"yin":0}}),createChoice({"text":"默念秀兰的名字","next":"huimen_exp3_loop_call_xiulan","condition":{"flag":"huimen_exp3_loop_count_2"},"effects":{"sanity":3,"yin":0}}),createChoice({"text":"睁开眼睛，回到石碑前","next":"huimen_exp3_loop_counter","condition":{"noFlag":"huimen_exp3_loop_count_2"},"effects":{"yin":0}})]})
};
