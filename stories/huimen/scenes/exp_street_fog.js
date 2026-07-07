/**
 * 《回门》场景模块：exp_street_fog
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_street_fog: createScene('huimen_exp_street_fog', {title:'雾中村街',text:`雾忽然浓了起来，像有人泼了一盆白浆。

村街两旁的灯笼变成了模糊的白点，像漂浮在牛奶里的眼睛，一只一只，远远近近。你摸索着往前走，脚下的石板路却变软了，每踩一步都往下陷一陷，像踩在烂泥里。

你低头看，路还是石板路，只是石缝里长出了厚厚的青苔。青苔是红色的，像干涸的血，湿漉漉地反着光。

雾里有脚步声，不止一个，而是很多个，整齐地跟着你的节奏，"嗒、嗒、嗒"。你停下，它们也停下；你走，它们也走。

[whisper]"雾里有东西。"[/whisper]你对自己说。

可那东西，也许就是你自己的影子。`,effects:{"sanity":-8,"yin":2},choices:[createChoice({"text":"大声喊，问是谁","next":"huimen_exp_street_fog_answer","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"蹲下身摸青苔","next":"huimen_exp_street_fog_moss","effects":{"sanity":-3,"yin":2}}),createChoice({"text":"加快脚步离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_fog_answer: createScene('huimen_exp_street_fog_answer', {title:'雾答',text:`你大喊："是谁！"

雾里的脚步声停了一瞬，像是被你的声音定住。然后，传来一个女子的轻笑，"咯咯"地，从四面八方传来。

[whisper]"是你啊。"[/whisper]

雾气在你面前聚拢，凝成一张模糊的脸。那脸没有五官，只有一张嘴，嘴角咧到耳根，咧出一个夸张的笑。

"你问我是谁？"那张嘴说，声音娇滴滴的，"我是你今晚要娶的新娘啊。"

你转身就跑。雾像手一样拉扯你，缠住你的脚踝，扯你的衣袖，但你拼命挣扎，终于冲出了浓雾。

回头一看——雾里站着一排穿红嫁衣的女子，齐刷刷地朝你招手。`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_street_fog_moss: createScene('huimen_exp_street_fog_moss', {title:'血苔',text:`你蹲下身，用手指蹭了蹭那红色的青苔。

青苔是湿的，沾在指尖上，黏糊糊的，有一股铁锈味。你凑近闻了闻，确实是血，但不是新鲜的血，而是沉淀了很多年的、发黑的血，腥气呛鼻。

[red]这条村街，是用血养着的。[/red]

你继续往石缝里摸，发现石板缝里不仅有青苔，还有一些细小的东西。你抠出来一看，是一枚生锈的铜钱，钱眼上缠着一根红绳。

铜钱背面刻着"周氏"两个字。`,effects:{"sanity":-5,"yin":2,"addItem":"清代铜钱"},choices:[createChoice({"text":"把铜钱收好","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"把铜钱扔回石缝","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-2,"removeItem":"清代铜钱"}})]})
};
