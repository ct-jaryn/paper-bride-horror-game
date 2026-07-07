/**
 * 《回门》场景模块：exp2_ancestral
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_ancestral_women_wall_2: createScene('huimen_exp2_ancestral_women_wall_2', {title:'女墙之下',text:`你再次来到祖祠的女墙前。

天色已经暗了，祖祠的飞檐在暮色里像一只展翅的黑鸟。女墙上爬满了青苔，苔的边缘渗着暗红，像是被血浸透过。

这次你带了一支笔和一罐红漆。漆罐是凉的，沉甸甸地坠在手里，像握着一颗还在跳动的脏器。你拧开盖子，红漆的腥气扑上来，甜腻，刺鼻。

你一笔一画，把墙上三十七个女子的名字重新描红。笔尖划过石面，发出细长的尖啸，像是有人在墙后呻吟。

[red]"秀兰"[/red]、[red]"柳红"[/red]、[red]"阿绣"[/red]、[red]"云袖"[/red]……每一个名字被你描红时，都会发出一道微光，像是什么东西在墙里睁开了眼。

描到第二十个名字时，你的手开始发抖。漆是凉的，可墙是热的，热得像发烧。墙里有东西在动，在贴着你的手背蹭。

你硬着头皮把最后一个名字描完。整面女墙亮了一下，又暗下去。墙根渗出几滴水，落在地上，是淡红色的。`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp2_repainted_women_names"},choices:[createChoice({"text":"在墙前磕头","next":"huimen_exp2_ancestral_women_wall_bow","effects":{"sanity":10,"yin":-10}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_ancestral_women_wall_bow: createScene('huimen_exp2_ancestral_women_wall_bow', {title:'叩墙',text:`你在女墙前跪下，膝盖磕在冰冷的石板上，发出沉闷的一声响。你重重磕了三个头，每磕一下，额角就一阵发麻。

"我周家后人，今日给你们正名。" 你说，声音在空旷的祠堂里回荡，"你们不是不祥女，你们是周家欠下的人。"

话音落下，墙上的名字开始流动，像血一样从墙上渗出，顺着石缝一滴一滴地落下来，在地上汇成一条小河。河水是温的，带着桂花和铁锈的味道。它绕过你的膝盖，缓缓流向祠堂外，流向村外，流向自由。

[whisper]"有人记得我们了……"[/whisper] 许多女子的声音叠在一起，像一阵远去的哭嫁调。

墙后传来轻轻的叩击声，一下，两下，三下，像是在回你的礼。你抬手去摸墙，墙是凉的，可你分明感到墙后有东西在贴着你的手心。

河水流尽，墙上的字也淡了，只留下一行新的——

[faded]"债清。"[/faded]`,effects:{"sanity":15,"yin":-15,"setFlag":"huimen_exp2_bowed_at_women_wall"},choices:[createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
