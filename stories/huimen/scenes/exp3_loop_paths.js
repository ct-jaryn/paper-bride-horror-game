/**
 * 《回门》场景模块：exp3_loop_paths
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp3_loop_eyes_closed: createScene('huimen_exp3_loop_eyes_closed', {title:'循环闭眼',text:`你闭上眼睛。

耳边传来风声、水声、纸人的沙沙声，但你不为所动。渐渐地，所有声音都退远了，只剩自己的心跳。

心跳里，你听见秀兰轻声说："跟着我。"`,effects:{"sanity":5,"yin":0,"setFlag":"huimen_exp3_loop_heart"},choices:[createChoice({"text":"凭感觉走","next":"huimen_exp3_loop_path_heart","effects":{"yin":0}})]}),
    huimen_exp3_loop_call_xiulan: createScene('huimen_exp3_loop_call_xiulan', {title:'念名',text:`你低声念出秀兰的名字。

名字像一粒石子投入井中，荡开涟漪。石碑上的青苔纷纷脱落，露出第四道箭头——它不是刻在石碑上，而是浮在空中，用月光凝成。

箭头指向村外。`,effects:{"sanity":5,"yin":0,"setFlag":"huimen_exp3_loop_moon_path"},choices:[createChoice({"text":"沿月光箭头走","next":"huimen_exp3_loop_moon_exit","effects":{"yin":0}})]}),
    huimen_exp3_loop_mansion: createScene('huimen_exp3_loop_mansion', {title:'老宅之路',text:`你走向老宅方向。

路越走越长，两边的房子越来越旧，最后变成一片废墟。废墟里站着许多纸人，它们朝你鞠躬，齐声说："周家的人，回来了。"

你意识到这是循环的一部分。`,effects:{"sanity":-3,"yin":3},choices:[createChoice({"text":"继续走","next":"huimen_exp3_loop_mansion_deep","effects":{"yin":3}}),createChoice({"text":"退回石碑","next":"huimen_exp3_loop_stone","effects":{"yin":1}})]}),
    huimen_exp3_loop_well: createScene('huimen_exp3_loop_well', {title:'井边之路',text:`你走向井边方向。

路越走越湿，脚下的石板渗出井水。你听见井底有人在唱歌，声音很熟悉，是秀兰常唱的那首童谣。

你走到井边，井水里映出的却不是你的脸，而是无数个你自己。`,effects:{"sanity":-3,"yin":4},choices:[createChoice({"text":"看井水里的自己","next":"huimen_exp3_loop_well_reflection","effects":{"yin":3}}),createChoice({"text":"退回石碑","next":"huimen_exp3_loop_stone","effects":{"yin":1}})]}),
    huimen_exp3_loop_paper: createScene('huimen_exp3_loop_paper', {title:'纸扎铺之路',text:`你走向纸扎铺方向。

纸扎铺的灯笼亮了，但铺子里没有人。柜台后摆满了纸人，每个纸人都长着你的脸。

"选一个替身，你就可以走了。"一个声音说。`,effects:{"sanity":-5,"yin":4},choices:[createChoice({"text":"拒绝选替身","next":"huimen_exp3_loop_paper_refuse","effects":{"sanity":3,"yin":1}}),createChoice({"text":"选一个纸人","next":"huimen_exp3_loop_paper_chose","effects":{"yin":8}})]}),
    huimen_exp3_loop_mansion_deep: createScene('huimen_exp3_loop_mansion_deep', {title:'废墟深处',text:`废墟深处有一口枯井，井沿上坐着一个小女孩。

她背对着你，正在用井水梳头。你走近时，她回过头——没有脸，只有一团漆黑。

"你走错了。"她说，"回去重来。"`,effects:{"sanity":-5,"yin":5},choices:[createChoice({"text":"问她怎么走对","next":"huimen_exp3_loop_mansion_ask","effects":{"yin":1}}),createChoice({"text":"退回石碑","next":"huimen_exp3_loop_stone","effects":{"yin":1}})]}),
    huimen_exp3_loop_well_reflection: createScene('huimen_exp3_loop_well_reflection', {title:'水中倒影',text:`井水里的无数个你同时开口："留下来，陪我们。"

你感觉自己的意识在被拉扯，像是要分裂成很多份。你咬破舌尖，疼痛让你清醒过来。

"我不是你们。"你说，"我要出去。"`,effects:{"sanity":-5,"yin":5},choices:[createChoice({"text":"砸碎水面","next":"huimen_exp3_loop_well_smash","effects":{"sanity":3,"yin":2}}),createChoice({"text":"退回石碑","next":"huimen_exp3_loop_stone","effects":{"yin":1}})]}),
    huimen_exp3_loop_paper_refuse: createScene('huimen_exp3_loop_paper_refuse', {title:'拒替',text:`"我不需要替身。"你说。

纸人们齐声叹了口气，像是很失望。柜台后的布帘掀起，露出一条通往村街的小路。

"你心性够硬。"那个声音说，"回去吧，下次再来。"`,effects:{"sanity":5,"yin":-2},choices:[createChoice({"text":"回到石碑","next":"huimen_exp3_loop_stone","effects":{"yin":0}})]}),
    huimen_exp3_loop_paper_chose: createScene('huimen_exp3_loop_paper_chose', {title:'选替身',text:`你选了一个纸人。

纸人笑了，从柜台后面走出来，活动了一下手脚。它朝你鞠了一躬，然后推开铺门，走向村外。

你低头看自己的手，发现手指正在变纸。`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"挣扎","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":5}})]}),
    huimen_exp3_loop_mansion_ask: createScene('huimen_exp3_loop_mansion_ask', {title:'问路',text:`"走对的路，不在地上。"无脸小女孩说，"在你心里。你心里装着谁，路就通向谁。"

她重新转过身，继续梳头。井水从她发梢滴落，在地上汇成一行字："想她。"`,effects:{"sanity":3,"yin":1},choices:[createChoice({"text":"想秀兰","next":"huimen_exp3_loop_path_heart","effects":{"sanity":3,"yin":0}})]}),
    huimen_exp3_loop_well_smash: createScene('huimen_exp3_loop_well_smash', {title:'破水',text:`你捡起一块石头，砸向井水面。

水面碎成无数片，每一片里的你都尖叫着消散。井底传来秀兰的声音："快回来，别再看了。"

你退后几步，水面慢慢恢复平静，但那些倒影已经不见了。`,effects:{"sanity":5,"yin":-2},choices:[createChoice({"text":"回到石碑","next":"huimen_exp3_loop_stone","effects":{"yin":0}})]})
};
