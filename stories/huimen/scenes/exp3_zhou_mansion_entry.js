/**
 * 《回门》场景模块：exp3_zhou_mansion_entry
 * 周家祖宅入口与后院
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_zhou_mansion_gate: createScene('huimen_exp3_zhou_mansion_gate', {title:'祖宅侧门',text:`村街深处有一座黑瓦白墙的老宅，门楣上挂着"周府"的灯笼。

灯笼纸已经发黄，黄得像老人的牙。里面没有火，却隐隐透出一团红——那红不是火光，是从灯笼纸的纤维里渗出来的，像血浸透了纸。

门环是两只铜蝙蝠，翅膀交叠成"福"字。蝙蝠的眼睛是两颗红珠子，被风雨打磨得发暗，却还泛着一点幽光。

你走近时，左边的蝙蝠眼睛转了一下。

它转得很慢，慢得你以为是错觉。可它的眼珠确实跟着你动了，从左转到右，又从右转回中。

[whisper]门缝里飘出一股檀香，混着纸灰的甜。[/whisper]`,effects:{"yin":2},choices:[createChoice({"text":"推门进去","next":"huimen_exp3_zhou_mansion_courtyard","effects":{"yin":2}}),createChoice({"text":"先敲三下门","next":"huimen_exp3_zhou_mansion_knock","effects":{"yin":1}}),createChoice({"text":"绕到后院","next":"huimen_exp3_zhou_mansion_backyard","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_knock: createScene('huimen_exp3_zhou_mansion_knock', {title:'三声门环',text:`你敲了三下。

铜门环撞在门板上，"咚——咚——咚——"三声，沉得像敲钟。每一声都在夜里荡开，荡到很远才回来。

门里没有脚步声，却有吱呀一声，门自己开了一条缝。缝很窄，只够一只眼往里看。缝里飘出一股檀香混着霉味的气味，像是有人刚在这里烧过纸，又像是这味道已经在门后闷了三十年。

一个苍老的声音说："进来吧，等你很久了。"

那声音从门缝里渗出来，像水从井里渗出来。它没有起伏，没有情绪，平淡得像在说"今日天气不错"。

[faded]可你知道，它等的不是你，是替你来的那个人。[/faded]`,effects:{"sanity":-2,"yin":2},choices:[createChoice({"text":"进门","next":"huimen_exp3_zhou_mansion_courtyard","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_backyard: createScene('huimen_exp3_zhou_mansion_backyard', {title:'后院枯井',text:`你绕到后院，看见一口被石板盖住的枯井。

井沿上长满了青苔，青苔爬到石板上，把石板缝都糊住了。井边的一棵老槐树歪歪斜斜地站着，树根把井沿都拱裂了。

石板上刻着密密麻麻的小字，都是女子的名字。字刻得很深，一笔一画都像用刀子剜出来的。最中间一行是"秀兰"，名字被凿掉了一半，旁边填上了"周氏媳"。

那"周氏媳"三个字刻得比别的字都深，像是刻的人用了很大的力气，要把秀兰原来的名字彻底盖掉。

[red]可盖不掉。被凿掉的名字，比刻上去的更深。[/red]`,effects:{"yin":2,"sanity":-3},choices:[createChoice({"text":"用石头把\"周氏媳\"凿掉","next":"huimen_exp3_zhou_mansion_backyard_chisel","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"把石板掀开","next":"huimen_exp3_zhou_mansion_backyard_open","effects":{"yin":5}})]}),
    huimen_exp3_zhou_mansion_backyard_chisel: createScene('huimen_exp3_zhou_mansion_backyard_chisel', {title:'祖宅后院还名',text:`石屑纷飞，"周氏媳"三个字一点点剥落。

你凿得很急，每一凿下去都带着一口气。石屑飞到你脸上，凉凉的，像有人在替你擦汗。

当最后一笔被凿掉时，井底传来一声长长的叹息。那叹息从井底传上来，穿过石板，钻进你的脚底，让你浑身一颤。

石板上的"秀兰"二字泛起淡淡的红光，像是一个被解开的结。那红光很柔，照在你手背上，像一只手在轻轻拍你。

你把凿下的石屑收进口袋。它们很轻，轻得像烧过的纸灰。

[faded]那是她的名字的灰。[/faded]`,effects:{"sanity":5,"yin":-3,"setFlag":"huimen_exp3_restored_xiulan_name"},choices:[createChoice({"text":"去前院","next":"huimen_exp3_zhou_mansion_courtyard","effects":{"yin":1}})]}),
    huimen_exp3_zhou_mansion_backyard_open: createScene('huimen_exp3_zhou_mansion_backyard_open', {title:'掀板',text:`石板很重，你用了全身力气才推开一条缝。

石板比想象中还重，重得不像石头，像是有谁在底下按着它。你的指甲都抠翻了，渗出血来，才把它推开一条缝。

缝里涌出一股阴冷的风，风里夹着女人的哭声。那哭声不大，却很密，像是很多人在同时哭，哭声叠在一起，像一锅煮开的水。

你探头去看，井底没有水，只有层层叠叠的纸人，全都仰着脸，朝你露出一模一样的笑。

那笑是画上去的，红红的嘴角弯弯，眼睛弯弯。它们一张脸挨着一张脸，挤在井底，像是被塞进去的。

你赶紧把石板推回去，手还在发抖。`,effects:{"sanity":-8,"yin":8},choices:[createChoice({"text":"离开后院","next":"huimen_exp3_zhou_mansion_courtyard","effects":{"yin":1}})]})
};
