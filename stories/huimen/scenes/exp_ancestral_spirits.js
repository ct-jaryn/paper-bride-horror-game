/**
 * 《回门》场景模块：exp_ancestral_spirits
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_ancestral_painting: createScene('huimen_exp_ancestral_painting', {title:"祖像",text:`祖祠的角落积着厚厚的灰，蛛网像破旧的帐幔垂下来。你拨开蛛网，发现墙角立着一幅落满尘的画像。

画轴发黄发脆，上面绘着一个穿青灰长袍的老者，眉骨高耸，目光阴沉，下巴蓄着花白长须。画像下方用工整小楷写着"周氏开基祖"。

你举着烛台细看，总觉得那双眼睛在动——不是错觉，他的眼珠正随着你的脚步缓缓转动。你退后一步，他的嘴角竟也微微上扬起来。

"你来了。"画像开口了，声音干涩，像是从陈年的棺木里挤出来的，"周家等了你很久了。"

你猛地后退，画像却从墙上飘落下来，悬在你面前半空，画上的老者从画里走了出来，半透明的身子泛着青光。

"秀兰的事，是我定的。"老者缓缓说道，"一个女子，坏了周家的名声，就必须除掉。"

他停顿了一下，那双眼睛直直盯着你：

"你认同吗？"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"说不认同","next":"huimen_exp_ancestral_painting_defy","effects":{"sanity":5,"yin":-3}}),createChoice({"text":"沉默","next":"huimen_exp_ancestral_painting_silent","effects":{"yin":2}})]}),
    huimen_exp_ancestral_painting_defy: createScene('huimen_exp_ancestral_painting_defy', {title:"驳祖",text:`你深吸一口气，迎着那双幽幽的眼睛说："我不认同。人命不是名声能换的。"

画像老者的脸瞬间扭曲了，像被火舌舔过的纸一样卷曲、焦黑，五官挤在一起。

"逆子！"他尖声叫起来，声音刺得你耳膜生疼，"你敢反驳祖先！"

"祖先错了，就该被反驳。"你一字一顿地说。

话音未落，画像"砰"地一声烧起来，金红的火苗窜起，老者的身影在火中挣扎、扭曲，最后化作一捧灰烬落在地上。

灰烬里有一张没烧尽的黄符，符上用朱砂写着"周氏开基祖之灵位"。

你抬脚，把那张黄符碾碎。祖祠四角的阴影发出一阵骚动，像受惊的兽群，渐渐退散到黑暗里。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_defied_ancestor"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ancestral_painting_silent: createScene('huimen_exp_ancestral_painting_silent', {title:"沉默",text:`你咬着嘴唇，一言不发。

画像老者满意地点了点头："好孩子。周家正需要你这样听话的人。"

他伸出枯瘦的手，想拍你的肩膀。那只手冰凉，指尖还滴着水。你侧身躲开。

"你不认同？"老者眯起眼。

"我不说话，不代表我认同。"你说，"我只是不想和一张纸争辩。"

画像老者的脸僵住了，嘴角抽动了两下，最终缓缓飘回墙上，重新变成那幅落满灰尘的画像。

可你知道，他还会再找机会的。`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ancestral_women_wall: createScene('huimen_exp_ancestral_women_wall', {title:"女墙",text:`你绕到祖祠后墙，那里常年不见光，墙根生着青苔，散发着一股阴湿的霉味。

墙上密密麻麻刻满了字。你凑近看——全是女子的名字。

周氏秀兰、周氏柳红、周氏云袖、周氏素心、周氏月娥……每一个名字后面都跟着两个字："不祥"、"沉塘"、"活埋"、"配冥婚"。

你一个一个数下去，一共有三十七个名字。

[red]三十七个女子，三十七条命，撑起了周家所谓的"清白"。[/red]

你伸出手指，沿着那些刻痕一笔一画地描摹。指腹触到字的瞬间，一阵刺痛传来——墙在吸你的血。每描一个字，指尖就渗出一滴血，被墙面贪婪地吸了进去。

"把我们的名字记下来。"一个幽幽的女声从墙里传出，"别让世人忘了我们。"

墙缝里渗出几缕湿冷的气息，拂过你的脸，带着桂花糕的甜香和腐土的腥气。`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp_saw_women_wall"},choices:[createChoice({"text":"用血在墙上写正名","next":"huimen_exp_ancestral_women_wall_rename","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"把名字抄下来","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"女子名单"}}),createChoice({"text":"把这些名字抄下来","next":"huimen_exp_zhou_women_alt"}),createChoice({"text":"你已见过女墙，带红漆回来重新描红每一个名字","next":"huimen_exp2_ancestral_women_wall_2","condition":{"flag":"huimen_exp_saw_women_wall"},"hidden":true,"effects":{"sanity":-3,"yin":2}})]}),
    huimen_exp_ancestral_women_wall_rename: createScene('huimen_exp_ancestral_women_wall_rename', {title:"重写",text:`你咬破食指，在每个名字后面，用血写下"正名"二字。

血字渗入墙面的瞬间，那些原本黯淡发黑的名字一个个亮了起来，像被点燃的灯。墙里传来女子的哭声——这次不是悲伤，是一种近乎解脱的呜咽。

"谢谢……"她们说，声音轻得像风，"终于有人看见我们了。"

墙面的灰泥开始一片片剥落，露出底下的红砖。红砖上刻着新字，字迹工整：

[faded]"周氏女子，各有名姓，各有来生。"[/faded]

你感到胸口那块压了不知多久的石头，终于松动了。像是卸下了三十七年的重担，连呼吸都轻快了几分。`,effects:{"sanity":10,"yin":-15,"setFlag":"huimen_exp_renamed_women_wall"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"把名单带出村子，让世人知道","ending":"huimen_exp_ending_name_list","condition":{"hasItem":"女子名单"},"effects":{"yin":-5}}),createChoice({"text":"在墙前立一块小石碑","ending":"huimen_exp_ending_name_stone","condition":{"flag":"huimen_exp_renamed_women_wall"},"effects":{"yin":-5}}),createChoice({"text":"一切已明，打开阴阳簿","next":"true_ending_gate","condition":{"flag":"clues_assembled"},"hidden":true})]})
};
