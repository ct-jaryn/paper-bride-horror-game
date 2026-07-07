/**
 * 《回门》场景模块：main_time
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    shichen_hai_entry: createScene('shichen_hai_entry', {title:'亥时 · 入夜',text:`村口的雾气更浓了。

雾浓得像一锅煮开的米汤，黏在你的脸上，沾在衣服上，怎么也拂不掉。你抬头看天，月亮已经偏西。山村里没有钟，没有表，没有报时的更夫，但你本能地感觉到——时辰变了。那种感觉是从骨头里来的，像是有什么东西在你身体里敲了一下钟。

[faded]戌时已过，亥时降临。[/faded]

李婆的白灯笼在雾中一晃，不见了踪影。灯笼的光在雾里晕开，晕成一团白，然后白也淡了，淡成雾的一部分。老槐树上的纸人被风吹得沙沙作响，像是在交头接耳，议论着什么。

[whisper]亥时，阴阳交替。活人开始困倦，亡者开始清醒。[/whisper]

那声音不在耳边，在你心里，像一个很老的人在替你数时辰。你摸了摸口袋里的东西，决定接下来的每一步都要更谨慎。每一步，都可能踩进阴和阳的缝里。`,effects:{"time":60,"setFlag":"shichen_hai"},choices:[createChoice({"text":"继续往老宅走","next":"to_old_house"}),createChoice({"text":"先调查一下村口","next":"huimen_exp_village_street"})]}),
    shichen_zi_entry: createScene('shichen_zi_entry', {title:'子时 · 魂醒',text:`一阵阴冷的风从井口方向吹来。

那风是凉的，凉得你打了个寒颤。凉得不像风，像是从井底渗上来的水气，带着一股井水的腥。你忽然意识到，子时已到。

山村里所有的白灯笼同时亮了起来。灯笼亮得很齐，齐得像被同一只手点的。灯笼光照得纸钱像雪片一样飞舞，纸钱在风里翻，翻成一张张脸，又翻回纸钱。

远处传来一声唢呐，凄厉得不像人间能发出的声音。那唢呐声又长又尖，尖得像一根针，从村那头扎到村这头。

[faded]子时，万鬼苏醒。[/faded]

秀兰就在这一片唢呐声里，第一次真正"出现"了——不是纸人，不是风声，而是井口一缕缓缓升起的红衣。那红衣升得很慢，慢得像一缕烟，却红得刺眼。

你感到手腕上的脉搏，和某种更古老的心跳，渐渐重合。那心跳不是你的，是井底的，是三十年的。`,effects:{"time":60,"setFlag":"shichen_zi","yin":10},choices:[createChoice({"text":"靠近井口","next":"huimen_exp_well_night"}),createChoice({"text":"退回老宅","next":"to_old_house","effects":{"sanity":-5}})]}),
    shichen_chou_entry: createScene('shichen_chou_entry', {title:'丑时 · 真相',text:`子时三刻的唢呐声停了。

那唢呐声停得很突然，"嘎"的一声，像被什么东西掐断了。停了之后，夜反而更静了，静得你能听见自己血管里的血流声。

但村子并没有安静下来。相反，你听见无数细碎的声音从四面八方涌来——祠堂里的牌位在轻微颤动，颤得"咔咔"地响，像是在磕头。纸扎铺里的纸人在轻轻拍手，拍得很轻，轻得像风。老宅房梁上的灰尘簌簌落下，落在你头发上，落在你肩膀上。

[faded]丑时，真相浮出。[/faded]

你忽然明白，这个村子里所有被掩盖的东西，都会在丑时露出破绽。族谱、契约、井底的棺材、还有那些被抹去的女子名字——它们都在等你去发现。

你只剩下寅时之前的这段时间了。`,effects:{"time":60,"setFlag":"shichen_chou","sanity":-5},choices:[createChoice({"text":"去祠堂查族谱","next":"huimen_exp_ancestral_hall"}),createChoice({"text":"去纸扎铺找线索","next":"huimen_exp_paper_shop"}),createChoice({"text":"去井底开棺","next":"approach_coffin"})]}),
    shichen_yin_entry: createScene('shichen_yin_entry', {title:'寅时 · 黎明之前',text:`天边泛起一丝极淡的鱼肚白，但山村依然笼罩在浓雾里。

那白很淡，淡得像一缕烟，淡得你不仔细看就看不见。可它确实在，在东边的山头上，一点点往外渗。浓雾却还压着村子，压得很低，低得你能摸到雾，雾是凉的，凉得像井水。

[faded]寅时，是一夜中最黑暗的时刻，也是离黎明最近的时刻。[/faded]

你感到秀兰的气息就在身边。那气息很近，近得你能感觉到她的凉，凉得你后颈一麻。她的执念、她的怨恨、她未了的心愿，都在这一刻凝聚成了最后的提问。三十年了，她等的就是这一刻。

"周家后人，"她的声音不再飘忽，而是清晰得像在你耳边，清晰得你能感觉到她气息的凉，"你要怎么还这笔债？"

你只有这一个机会了。`,effects:{"time":60,"setFlag":"shichen_yin","yin":15},choices:[createChoice({"text":"答应娶她，完成冥婚","next":"approach_coffin"}),createChoice({"text":"帮她讨回公道","next":"huimen_exp_ancestral_women_wall"}),createChoice({"text":"带她离开山村","next":"huimen_exp_moonlit_escape"})]})
};
