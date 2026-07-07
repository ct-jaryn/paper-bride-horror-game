/**
 * 《回门》场景模块：exp_village_street_core
 * 村街主入口，只保留核心入口与聚合枢纽
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street: createScene('huimen_exp_village_street', {title:'村街',text:`你站在村街中央。

街道两旁是低矮的瓦房，灰扑扑的，每一扇窗后都有一盏白灯笼，昏黄地亮着。灯笼上没有字，只有一个墨点画成的眼睛，圆溜溜的。你走到哪，那些眼睛就跟到哪，一眨不眨。

石板路是湿的，踩上去会发出黏腻的声响，"啪叽、啪叽"，像踩在舌头上。空气里弥漫着一股纸灰和香火混合的气味，呛人。

远处有纸钱在旋舞，"沙沙"地响，偶尔能看见一个纸人的背影拐进巷子，一闪就没了。你叫一声，它不回头；你追上去，巷子尽头是一堵墙，墙上爬满了青苔。

[whisper]"别追。追上了，你就变成它。"[/whisper]

风里传来这句话，你分不清是警告还是邀请。

[red]这里可以通往村子的每个角落。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({text:"去井边",next:"huimen_exp_well_night",effects:{yin:1}}),createChoice({text:"去纸扎铺",next:"huimen_exp_paper_shop",effects:{yin:1}}),createChoice({text:"去庙里",next:"huimen_exp_temple_gate",effects:{yin:1}}),createChoice({text:"去祖祠",next:"huimen_exp_ancestral_hall",effects:{yin:1}}),createChoice({text:"去桑树下",next:"huimen_exp_mulberry_tree",effects:{yin:1}}),createChoice({text:"去村东头李木匠铺",next:"huimen_exp3_carpenter_li_shop",effects:{yin:1}}),createChoice({text:"拜访族长家",next:"huimen_exp3_clan_head_house",effects:{yin:2}}),createChoice({text:"去村街拐角王婆家",next:"huimen_exp3_granny_wang_house",effects:{yin:1}}),createChoice({text:"去废墟看看",next:"huimen_exp_ruins",effects:{yin:2}}),createChoice({text:"顺着月光小路走",next:"huimen_exp_moonlit_path",effects:{yin:2}}),createChoice({text:"调查村街四周",next:"huimen_exp_village_street_events_hub",effects:{yin:1}}),createChoice({text:"寻找秀兰",next:"huimen_exp_village_street_xiulan_hub",effects:{yin:1},condition:{flag:"knowsTruth"}}),createChoice({text:"探索更远的区域",next:"huimen_exp_village_street_districts_hub",effects:{yin:1}}),createChoice({text:"天快亮了，村街的气氛变了",next:"huimen_exp_village_street_dawn",effects:{yin:1},condition:{timeAfter:120},hidden:true}),createChoice({text:"子时到了，村子变得不对劲",next:"huimen_exp_village_street_midnight",effects:{yin:2},condition:{timeAfter:180},hidden:true}),createChoice({text:"回老宅正堂，不在这里耽搁",next:"huimen_exp_return_old_house",effects:{yin:1}}),createChoice({text:"去后院井边，用铜镜照一照",next:"huimen_exp_return_well",effects:{yin:1},condition:{hasItem:"铜镜碎片"}}),createChoice({text:"该去开红棺了",next:"huimen_exp_return_red_coffin",effects:{yin:1},condition:{hasItem:"铜钥匙"}})],hallucination:'[whisper]你低头看自己的影子，影子里似乎还有一个人，正牵着你的衣角。[/whisper]'}),
    huimen_exp_village_street_dawn: createScene('huimen_exp_village_street_dawn', {title:'黎明前的村街',text:`你在村街上走了很久，久到月亮开始西斜，天边泛起一线鱼肚白。

村里的雾气变得稀薄，街道两旁的纸人开始枯萎，像被晒干的树叶，瘪了下去。你听见远处传来鸡鸣声，可那鸡鸣声不像来自活鸡，而像来自某个纸扎的鸡，"喔喔"地叫，带着回音。

[whisper]"天快亮了。"[/whisper]秀兰的声音说，"天亮之前，你必须做出选择。"

你抬头看天，东方的云层里透出一丝灰白。那是黎明的前兆。

[red]可这个村子，从来没有真正天亮过。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"趁天亮前离开村子","next":"huimen_exp_moonlit_escape","effects":{"yin":-3}}),createChoice({"text":"继续探索","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"去村口老槐树下等天亮","next":"huimen_exp_dawn_tree","effects":{"yin":2}})]}),
    huimen_exp_village_street_midnight: createScene('huimen_exp_village_street_midnight', {title:'子夜村街',text:`子时到了。

村街忽然安静下来，纸人、灯笼、纸钱，都停住了，一动不动。整个村子像被按下了暂停键，只有你的心跳还在响，"咚咚、咚咚"。

你抬头看天，月亮变成了血红色，悬在半空。月光照在地上，把石板路照得像一条血河，红得发亮。

[whisper]"子时是一天的尽头，也是阴阳交替的时候。"[/whisper]秀兰的声音说，"在这个时候，你可以看见村子真正的样子。"

你环顾四周，发现每一栋房子都在渗出黑色的液体，像血，又像墨，顺着墙根流。那些液体顺着石板缝流向村子中央，流向那口井。`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"去村子中央看看","next":"huimen_exp_village_heart","effects":{"yin":2}}),createChoice({"text":"找地方躲起来","next":"huimen_exp_village_street","effects":{"sanity":-3,"yin":1}})]}),
    huimen_exp_village_street_empty: createScene('huimen_exp_village_street_empty', {title:'空村',text:`你走着走着，发现村街空了。

纸人不见了，灯笼熄灭了，连风声都停了，死寂。整条街只剩你一个人，脚步声在空旷中回响，"嗒、嗒、嗒"。

你推开一扇门，屋里空荡荡的，只有一张供桌，积着厚厚的灰。供桌上摆着一张照片，照片里是一家人的合影，站得整整齐齐。

你仔细一看，照片上的人都没有脸，一片空白。

[red]这个村子的人，早就不是人了。他们只是一段段被保存下来的记忆。[/red]

你把照片翻过来，背面写着："周家村，民国二十三年。"`,effects:{"sanity":-8,"yin":2,"addItem":"民国二十三年周家村合影"},choices:[createChoice({"text":"把照片收好","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
