/**
 * 《回门》场景模块：exp2_blind_granny
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_blind_granny_house: createScene('huimen_exp2_blind_granny_house', {title:'盲婆婆家',text:`你循着一缕断断续续的哼唱，来到一座茅草屋前。

茅草已经发黑，像被人用墨泼过。屋檐下挂着一串风干的蒜，蒜辫里缠着一根红线，红线末端系着一枚铜钱，铜钱上刻着"长命"二字，可"命"字被人用刀划掉了。

屋里传出苍老的歌声，没有词，只有一个女声在哼。那调子很老，老到不像这个时代的歌，像是从土里刨出来的，带着一股潮湿的霉味。你听了一阵，觉得喉咙发紧，眼眶发热，明明听不懂词，心却先哭了。

你推开柴门，门轴"咿呀"一声，歌声停了。

屋里很暗，只有一盏豆油灯。灯下坐着一个瞎眼的老太太，怀里抱着一把破旧的月琴。月琴的弦断了一根，剩下三根，每一根都像一根头发，细得几乎看不见。她的眼眶是两个凹下去的洞，洞里没有眼珠，只有干涸的泪痕。

"你是谁？" 她侧耳听了一会儿，问，"是来听老婆子唱歌的，还是来封我嘴的？"

她的声音很轻，却像针一样扎进你的耳朵。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"说你是来听歌的","next":"huimen_exp2_blind_granny_sing","effects":{"yin":-3}}),createChoice({"text":"问她秀兰的事","next":"huimen_exp2_blind_granny_ask","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_blind_granny_sing: createScene('huimen_exp2_blind_granny_sing', {title:'哭嫁调',text:`盲婆婆开始唱歌。

她的手指搭上月琴，断了一根弦，就少一个音。可那三根弦弹出来的调子，比任何完整的曲子都难听，也都好听。

那是一首古老的哭嫁调，唱的是一个女子被活埋前的哀鸣。词是方言，你听不懂，可你听得泪流满面。眼泪从你眼里掉下来，砸在地上，发出"啪嗒"一声，像有人在替你计数。

唱到一半，盲婆婆的喉咙忽然哑了。她咳了几声，咳出一口黑血，抹在月琴上。然后她继续唱，唱得比刚才更哑，更慢，更撕心裂肺。

唱到最后，盲婆婆说："这是我为秀兰唱的。三十年前，我是村里唯一一个为她哭的人。"

"他们不让哭，说会招鬼。可我不怕。秀兰活着的时候对我好，我不能让她死得没人哭。"

她抬起空洞的眼眶，朝你的方向看。眼眶里没有泪，可你分明看见有什么东西从那里流出来。`,effects:{"sanity":-5,"yin":-5,"setFlag":"huimen_exp2_heard_blind_granny_song"},choices:[createChoice({"text":"请她再唱一遍","next":"huimen_exp2_blind_granny_sing_more","effects":{"sanity":3,"yin":-3}}),createChoice({"text":"问她秀兰的事","next":"huimen_exp2_blind_granny_ask","effects":{"yin":1}})]}),
    huimen_exp2_blind_granny_sing_more: createScene('huimen_exp2_blind_granny_sing_more', {title:'盲婆婆再唱',text:`盲婆婆又唱了一遍。

这次她唱得更慢，每一个字都像是从喉咙里拽出来的。你听懂了几句：

"兰花开，兰花谢，兰花落在井底眠。"
"周家郎，周家债，周家女儿不值钱。"

唱到"井底眠"三个字时，屋外的风忽然大了。茅草被吹得簌簌作响，像有人在屋顶上抓挠。盲婆婆不抬头，手指在月琴上越拨越快，弦震得嗡嗡作响，像井水在共鸣。

唱完，盲婆婆把月琴递给你："带走吧。让外面的人也听听秀兰。"

她的手枯瘦，骨节凸起，像干柴。月琴一离开她的手，她就老了十岁，背塌下去，头垂到膝盖上。

"我这辈子，就剩这一桩心愿了。" 她说，"你替我办了，我也能闭眼了。"`,effects:{"sanity":5,"yin":-5,"addItem":"盲婆婆的月琴"},choices:[createChoice({"text":"收下月琴","next":"huimen_exp2_blind_granny_house","effects":{"yin":1}}),createChoice({"text":"把歌声记在心里","ending":"huimen_exp2_ending_grandma_song","effects":{"yin":-5}})]}),
    huimen_exp2_blind_granny_ask: createScene('huimen_exp2_blind_granny_ask', {title:'盲婆婆询问',text:`你问盲婆婆："秀兰是个什么样的人？"

盲婆婆沉默了一会儿，屋里的豆油灯跳了一下，像是在替她喘气。

"好姑娘。" 她终于开口，声音很轻，"心善，手巧，爱唱歌。她常来给我送菜，叫我婆婆。别人都嫌我瞎，只有她不嫌。"

"她怀孕那阵，还来给我梳头。她说，等孩子生下来，要认我做干奶奶。"

她伸出手，在空中摸了摸，像是在摸一个看不见的头。

盲婆婆的眼泪从空洞的眼眶里流出来——不是泪，是两行黑水，顺着脸颊的皱纹流下来，滴在月琴上，渗进木头里。

"可孩子没生下来。" 她说，"我也没做成干奶奶。"

屋外忽然响起一阵婴儿的啼哭，很远，像是从井底传上来的。盲婆婆的身子抖了一下，把月琴抱得更紧。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"安慰她","next":"huimen_exp2_blind_granny_comfort","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_blind_granny_comfort: createScene('huimen_exp2_blind_granny_comfort', {title:'安慰',text:`你握住盲婆婆的手。她的手很凉，凉得像井水，可你没有松。

"婆婆，秀兰没有怪你。她知道你为她哭过。"

盲婆婆笑了，那笑容里有苦涩，也有释然。她的嘴咧得很开，露出没有牙齿的牙龈："真的？"

"真的。" 你说，"她让我告诉你，谢谢你。"

盲婆婆点点头，把月琴抱得更紧，下巴搁在琴身上，像是在哄一个孩子。

"那我这辈子，也不算白活。" 她说。

豆油灯跳了一下，灭了。屋里陷入黑暗，可你没有害怕。你听见盲婆婆轻轻哼起那首哭嫁调，没有词，只有调子。调子越来越轻，越来越远，像是一条小船，慢慢划进了雾里。

你站在黑暗里，等了很久，等歌声彻底消失，才轻轻退出门去。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_comforted_blind_granny"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
