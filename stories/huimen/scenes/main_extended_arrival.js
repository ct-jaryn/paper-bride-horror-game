/**
 * 《回门》场景模块：main_extended_arrival
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_village_gate: createScene('huimen_village_gate', {title:`入村`,text:`你绕过老槐树，踏上进村的小路。

雨还在下，下得不大，却密，密得像一根根针。雨水顺着你的衣领往下淌，淌进背里，凉得你打了个寒颤。脚下的泥路被雨泡软了，每踩一步都"咕叽"一声，像踩在一块湿海绵上。

村口立着一块石碑，碑身被青苔覆盖，字迹斑驳。你伸手拂去青苔，青苔软得像皮，凉得像泡过雨的纸钱。露出八个字：

[faded]"入村者三，出村者一。"[/faded]

你心头一凛。这是什么意思？是说三个人进来，只有一个人能出去？还是说……

李婆的灯笼在你身后晃了晃，白光在雨里晕开，像一团化不开的雾："别看了。这碑立了三十年，每个字都是血写的。"`,effects:{"sanity":-3,"yin":2,"setFlag":"huimen_saw_village_stele"},choices:[createChoice({"text":"追问碑文含义","next":"huimen_read_stele","effects":{"yin":1}}),createChoice({"text":"快步走向老宅","next":"huimen_paper_doll_warning","effects":{"yin":1}}),createChoice({"text":"绕过石碑，从侧路进村","next":"huimen_paper_doll_warning","effects":{"sanity":-2,"yin":2}})]}),
    huimen_read_stele: createScene('huimen_read_stele', {title:`血碑`,text:`你凑近石碑，借着灯笼光细看。

灯笼的光很弱，只够照见一小块。你把脸贴上去，鼻尖几乎要碰到碑面。碑是青石的，凉得像冰，贴上去能感觉到它"嗡嗡"地震，像有人在底下心跳。

碑的背面刻着密密麻麻的小字，都是名字。字刻得很深，一笔一画都像用刀子剜出来的。你一眼就认出了"周"字——那是周家的族谱，却被刻在这座入村的石碑上，像是一份诅咒的名单。

"这些名字，"李婆说，灯笼的光在她脸上晃，照得她皱纹忽深忽浅，"都是三十年前那晚，亲眼看着秀兰被活埋的人。他们后来都死了，死法各不相同，但都有一个共同点——"她顿了顿，喉咙里"咕咚"一声，像咽了口唾沫，"死前都喊着一个名字。"

[whisper]"秀兰。"[/whisper]

你摸了摸自己的手腕，那根红绳似乎又紧了一分。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"继续往老宅走","next":"huimen_paper_doll_warning","effects":{"yin":1}}),createChoice({"text":"在碑前站一会儿","next":"huimen_paper_doll_warning","effects":{"sanity":-3,"yin":2}})]}),
    huimen_paper_doll_warning: createScene('huimen_paper_doll_warning', {title:`纸人拦路`,text:`你加快脚步，可那两个纸扎人不知何时挡在了路中央。

它们就站在路中间，像两根钉子钉在地上。雨水顺着它们的纸衣服往下淌，淌成一道道红色的水痕，像是它们在流血。它们的脸上还是那种诡异的笑，墨点画的眼珠在雨里发亮。

但男纸人的嘴微微张开，风里传来极细的声音：

[whisper]"别喝交杯酒……别喝……"[/whisper]

那声音又轻又急，像是在赶时间。女纸人的头又转向你，这次你看见她的眼眶里不是墨点，而是两颗小小的、湿漉漉的眼泪。那眼泪是透明的，挂在纸脸上，没有掉下来。

[red]它们不是在吓你。它们在警告你。[/red]

李婆的灯笼突然灭了。黑暗中，纸人的声音更清晰了："子时之前，找到她的名字。找不到，你就是下一个新郎。"`,effects:{"sanity":-8,"yin":5,"setFlag":"heard_paper_whisper"},choices:[createChoice({"text":"问它们秀兰的名字在哪里","next":"huimen_old_house_gate","effects":{"sanity":-3,"yin":2}}),createChoice({"text":"绕过纸人，冲向老宅","next":"huimen_old_house_gate","effects":{"yin":1}}),createChoice({"text":"把纸人扶正，恭恭敬敬走过","next":"huimen_old_house_gate","effects":{"sanity":5,"yin":-2}})]}),
    huimen_after_li_po: createScene('huimen_after_li_po', {title:`李婆的背影`,text:`你快步穿过村街，李婆的白灯笼在身后晃了晃，终究没有跟上来。

你回头看了一眼，李婆的背影已经融进雨雾里，只剩一团白光，越来越淡。你想喊她，张了张嘴，却没有出声——你知道，她不会再跟你了。

可你越靠近老宅，空气越冷。那冷不是雨的冷，是从地底下渗上来的，凉得你骨头都疼。路边的纸人一个个转过头，脸上画着的笑在月光下泛着惨白。你听见它们用极细的声音说："新郎官，慢点走，新娘子会跟不上的。"

你不敢回头。你知道，秀兰就在你身后某处，或许在井底，或许在纸人里，或许就在你脚下的影子里。

老宅的轮廓出现在雾气中，门口那盏红灯笼亮得刺眼。那红，红得像血，红得像嫁衣。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"继续走向老宅","next":"huimen_paper_doll_warning","effects":{"yin":1}}),createChoice({"text":"绕到后院看看","next":"huimen_exp_village_street","effects":{"yin":2}}),createChoice({"text":"站在原地，等秀兰现身","next":"huimen_paper_doll_warning","condition":{"flag":"knowsTruth"},"effects":{"sanity":-5,"yin":3}})]}),
    huimen_old_house_gate: createScene('huimen_old_house_gate', {title:`老宅门前`,text:`纸人沉默片刻，墨点眼睛齐刷刷望向老宅方向。你顺着它们的目光，来到周家老宅门前。

这是正门。门没有关严，留着一条缝。缝里透出青白色的烛光，还有一股纸钱和檀香混合的味道。那味道浓得呛鼻，闻久了让人头晕。门板上贴着一张黄符，符上写着你的生辰八字——是你的，不是别人的。

你伸手推门，门却自己"吱呀"一声开了。那"吱呀"声很长，像一声叹息，又像是有人在门后等你等了很久，终于等不及了。

堂屋里跪着一群人，听见门响，齐刷刷地转过头来。他们的嘴角弯着同样的弧度，像被同一阵风拨弄的稻草人。烛光在他们脸上晃，照得那些笑忽明忽暗。

"回来啦。"他们说，齐声说，声音叠在一起，像一锅煮开的水。`,effects:{"sanity":-10,"yin":3,"time":60},choices:[createChoice({"text":"迈进老宅","next":"to_old_house","effects":{"yin":1}}),createChoice({"text":"先在门外观察","next":"to_old_house","effects":{"sanity":-3,"yin":1}}),createChoice({"text":"转身离开","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":5}})]})
};
