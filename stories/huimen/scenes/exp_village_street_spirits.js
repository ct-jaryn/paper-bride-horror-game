/**
 * 《回门》村街：灵异常、路径与门神相关场景
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_paper_bridge: createScene('huimen_exp_village_street_paper_bridge', {title:'纸桥',text:`你来到村边的小河，河上搭着一座纸桥。

桥是用黄纸和竹篾扎的，很窄，只容一人通过，纸皮皱皱巴巴。桥下没有水，只有一层厚厚的纸灰，白惨惨的。

你踩上纸桥，桥发出"咯吱咯吱"的声响，摇摇晃晃。走到桥中央，你低头看，纸灰里映出许多张脸，仰着脸看你。

"过桥的人，要留下一个秘密。"那些脸说，声音重叠在一起。

你想了想，说："我小时候偷过祖母的钱，买了一块糖。"

纸灰泛起涟漪，像是一个个微笑。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"继续过桥","next":"huimen_exp_moonlit_path","effects":{"yin":1}}),createChoice({"text":"退回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_ghost_dog: createScene('huimen_exp_village_street_ghost_dog', {title:'义犬',text:`你看见一只黑狗跟在你身后，"嗒嗒"地踩着石板。

这只狗和之前那只不同，它的身体是半透明的，能看见背后的墙。脖子上系着一根红绳，红绳褪了色。它看着你，眼神里没有凶光，只有哀求。

"你想带我去哪里？"你问。

黑狗转身朝一个方向跑去，跑几步就回头看你一眼，像怕你跟丢。

你跟着它，来到一座矮坟前。坟前没有碑，只有一块歪斜的木板，上面写着"义犬黑子之墓"。

"这是秀兰生前养的狗。"秀兰的声音说，"我死那晚，它想救我，被打死了。"`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_found_ghost_dog"},choices:[createChoice({"text":"在坟前磕个头","next":"huimen_exp_village_street_ghost_dog_bow","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_ghost_dog_bow: createScene('huimen_exp_village_street_ghost_dog_bow', {title:'义犬祭',text:`你跪在狗坟前，磕了三个头，额头碰在湿冷的泥地上。

"黑子，谢谢你当年想救秀兰。"你说，"她现在很好，我会带她走的。"

黑狗的身影凝实了一些，轮廓清晰了。它蹭了蹭你的手，鼻子凉凉的，然后化作一道黑光，飞入你的影子里。

"它会保护你。"秀兰说，"就像当年想保护我一样。"

你站起身，感到自己的影子重了一些。那不是负担，是一份忠诚。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_ghost_dog_protection"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_bird: createScene('huimen_exp_village_street_paper_bird', {title:'纸鸟',text:`你看见一只纸折的鸟停在井沿，纹丝不动。

纸鸟折得很精巧，翅膀还能动，每一道折痕都整整齐齐。你走近，它歪着头看你，黑豆一样的眼睛里没有光，黑洞洞的。

"这是秀兰折的。"一个声音说，"她活着的时候，最会折纸。"

你轻轻捧起纸鸟，发现鸟肚子里塞着一张小纸条，折得很小：

[faded]"愿来生，做一只自由的鸟。"[/faded]

[red]你把纸鸟举高，它忽然活了过来，从你手里飞走，飞向夜空。[/red]

"它自由了。"秀兰说。`,effects:{"sanity":5,"yin":-3},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_door: createScene('huimen_exp_village_street_paper_door', {title:'街门',text:`你走到一户人家门前，发现门是纸糊的。

门上画着门神，秦叔宝尉迟恭，可门神的眼睛被挖掉了，只剩下两个黑洞。你推开门，门"哗啦"一声，门后不是屋子，而是一片漆黑，深不见底。

漆黑里传来许多人的呼吸声，此起彼伏，像是有无数人在门后等着你。

"进来吧。"他们说，声音诱惑，"进来就不用再怕了。"

[red]你知道这不是邀请，是陷阱。[/red]

你松开手，纸门自动关上。门上的门神眼睛又长了出来，正直勾勾地盯着你。

你后退一步，发现门缝里渗出一缕黑烟。黑烟在空中凝成一只手，朝你抓来。你侧身躲开，黑烟抓了个空，不甘心地缩回门里。

[whisper]"下次，你会进来的。"[/whisper]门后的声音说。

你没有回答。你转身离开，但你知道，这扇门还会再出现。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_paper_door_god: createScene('huimen_exp_village_street_paper_door_god', {title:'门神',text:`你盯着纸门上的门神。

门神的眼睛动了动，然后开口说话："年轻人，你不该来这里。"

"我来还债。"你说。

"债？"门神冷笑，"周家的债，不是你一个人能还清的。"

"那也要还。"你说，"还一点，是一点。"

门神沉默了一会儿，然后说："把门上的红纸撕了，我能帮你一次。"

你撕下门上的红纸，门神的身影消失了。你感到一阵轻松，像是某种阻碍被清除了。风吹过，红纸化作一只红色的蝴蝶，向村子外面飞去。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp_helped_by_door_god"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
