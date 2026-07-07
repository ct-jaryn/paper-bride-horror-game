/**
 * 《回门》场景模块：exp2_theater
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_old_theater: createScene('huimen_exp2_old_theater', {title:'老戏台',text:`你循着一阵若有若无的唱戏声，来到村子的老戏台前。

戏台比村街那座更大，台基是青石的，台柱是柏木的，漆已经剥落，露出底下的木纹。台柱上缠满了红绸，绸已经褪色发白，像一条条干枯的血管。

台上没有演员。只有一件大红戏服在空中飘动，水袖自己挥舞，像是在表演。戏服是空的，里面没有人，却能做出每一个动作——甩袖、转身、亮相、回眸，一招一式，像是有个看不见的女子在穿它。

台下坐着许多纸人观众。纸人是竹篾扎的，糊着白纸，脸上画着五官，整整齐齐地排成排，仰着头，像是在看一出好戏。它们一动不动，眼睛却都盯着台上。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"上台","next":"huimen_exp2_old_theater_stage","effects":{"yin":3}}),createChoice({"text":"坐在纸人中间","next":"huimen_exp2_old_theater_audience","effects":{"yin":2}}),createChoice({"text":"问戏服是不是柳红","next":"huimen_exp2_old_theater_liu_hong","condition":{"hasVisited":"huimen_exp2_graveyard"},"effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"绕到戏台后面，看看后台的镜子","next":"huimen_exp2_theater_backstage","condition":{"flag":"xiulanMercy"},"hidden":true,"effects":{"yin":1}})]}),
    huimen_exp2_old_theater_stage: createScene('huimen_exp2_old_theater_stage', {title:'登台',text:`你走上戏台。台板是木的，每一步都"咯吱"地响，像是台板底下有人在替你数脚步。

戏服立刻飘到你面前。水袖缠上你的脖子，凉得像水，却不像水那样湿。戏服里没有身体，却发出一个女子的声音，从戏服的领口里传出来：

"你会唱戏吗？"

"不会。" 你说。

"那你会鼓掌吗？" 她问。

你鼓起掌来。掌声在空旷的戏台上回荡，"啪啪啪"，每一声都像是在替她说一句话。戏服松开了水袖，缓缓飘回台中央，继续它的戏。`,effects:{"sanity":-8,"yin":2},choices:[createChoice({"text":"陪她唱一段","next":"huimen_exp2_old_theater_sing","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"问她要什么","next":"huimen_exp2_old_theater_ask","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_sing: createScene('huimen_exp2_old_theater_sing', {title:'同唱',text:`你张开嘴，和着戏服的唱腔唱起来。

你唱得很难听，跑调，破音，可戏服没有嫌弃。它反而唱得更轻了，像是在迁就你。它越唱越轻，越唱越淡，水袖越挥越慢，最后像一缕烟一样，消散在月光里。

台下响起一阵掌声。纸人观众们纷纷站起来，朝你鞠躬，鞠得很深，像是在谢幕。然后它们一个一个地化为灰烬，灰烬落在地上，像一地的雪。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_sang_with_liu_hong"},choices:[createChoice({"text":"把这件戏服收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的戏服"}}),createChoice({"text":"让戏服随风散去","ending":"huimen_exp2_ending_theater_shadow","effects":{"yin":-5}})]}),
    huimen_exp2_old_theater_audience: createScene('huimen_exp2_old_theater_audience', {title:'观众席',text:`你在纸人中间找了个空位，坐下。纸人是冰凉的，你坐在它们中间，能感觉到它们的"看"——不是用眼看，是用整个身体在看。

台上的戏服唱到高潮处，纸人们齐齐鼓掌。掌声干燥，"沙沙沙"，像一阵风穿过枯叶。

你旁边的纸人转过头，那张纸脸转向你。它的脸和你一模一样——眉、眼、鼻、嘴，连那颗泪痣都画在同一个位置。

"你也来听戏？" 它问，声音和你的一样。`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"点头","next":"huimen_exp2_old_theater_audience_nod","effects":{"yin":2}}),createChoice({"text":"起身离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_audience_nod: createScene('huimen_exp2_old_theater_audience_nod', {title:'纸人观众',text:`你点点头，喉咙发紧，说不出话。

纸人笑了，嘴角往上扯，扯出一个夸张的弧度："那就好。柳红姐唱了三十年，终于有人愿意当她的观众。以前来的人，听两句就跑了，说害怕。柳红姐唱得可好了，你听完就知道。"

它从怀里掏出一张戏票，递给你。票是黄的，已经发脆，上面写着："青石镇戏台，柳红，民国二十三年中秋。"

[red]这是柳红生前最后一场戏的票。她唱完那场，就被活埋了。[/red]`,effects:{"sanity":-3,"yin":1,"addItem":"柳红的戏票"},choices:[createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_liu_hong: createScene('huimen_exp2_old_theater_liu_hong', {title:'问柳红',text:`你问："你是柳红吗？"

戏服颤抖了一下，水袖垂下来，像一个人低下了头。它发出一声苦笑，从领口里传出来：

"我是，也不是。我只是她的一件衣服，替她唱她没唱完的戏。她的魂不在这里，被封在青石镇了。"

"她的魂呢？" 你问。

"被封在青石镇。" 戏服说，声音里有渴望，"你若去青石镇，帮我把这件衣服带去。她会跟你走的。她等了三十年，等一件衣服。"`,effects:{"sanity":-3,"yin":2,"setFlag":"huimen_exp2_met_liu_hong_dress"},choices:[createChoice({"text":"答应","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的戏服"}}),createChoice({"text":"拒绝","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_ask: createScene('huimen_exp2_old_theater_ask', {title:'问所求',text:`你问戏服："你想要什么？"

戏服沉默了一会儿，水袖垂着，不动。然后它说，声音里有三十年的疲惫：

"我想被人听完。三十年了，每次唱到一半，台下的活人就跑了。他们说我唱的是鬼戏，听了会折寿。可我唱的不是鬼戏，是《贵妃醉酒》。我死前唱到一半，没唱完。"

"我听完。" 你说。

戏服又开始唱，这次唱得很慢，很完整。唱到最后一句，它唱完了，化作一件普通的戏服，落在台上，再也没有动。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_finished_liu_hong_song"},choices:[createChoice({"text":"收起戏服","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的戏服"}})]}),
    huimen_exp2_theater_backstage: createScene('huimen_exp2_theater_backstage', {title:'戏台后台',text:`你绕到戏台后面。

后台堆满了戏服、头面、胭脂盒，乱七八糟地堆在桌上和地上。戏服是各种颜色的，红、绿、黄、蓝，都褪了色。头面是银的，已经发黑。胭脂盒是木的，盖子开着，胭脂已经干涸。

角落里立着一面镜子。镜子是铜的，已经生了铜绿，镜面上布满裂痕，像一张蛛网。你走近，镜子里映出的不是你自己，而是一个正在化妆的女子。

她在画眉，动作很慢，每一笔都带着忧愁。她画了一笔，停一下，又画一笔，像是在等什么人。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"看她化妆","next":"huimen_exp2_theater_mirror","effects":{"yin":2}}),createChoice({"text":"翻找胭脂盒","next":"huimen_exp2_theater_makeup","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_old_theater","effects":{"yin":1}})]}),
    huimen_exp2_theater_mirror: createScene('huimen_exp2_theater_mirror', {title:'镜中女子',text:`你看着镜中的女子画完眉。她放下眉笔，缓缓转过头。

她没有脸——只有一团模糊的白影，像是被水泡过的纸。可她的声音很清楚，从镜子里传出来：

"我等了三十年，等一个愿意看我化妆的人。以前来的人，看见我没脸，就跑了。"

"你是谁？" 你问。

"我是柳红。" 她说，声音里有悲哀，"我死前正在化新娘妆，妆没化完，就被活埋了。我等了三十年，等一个人帮我把妆化完。"`,effects:{"sanity":-8,"yin":3,"setFlag":"huimen_exp2_met_liu_hong_mirror"},choices:[createChoice({"text":"帮她化完妆","next":"huimen_exp2_theater_makeup_help","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开镜子","next":"huimen_exp2_theater_backstage","effects":{"yin":1}})]}),
    huimen_exp2_theater_makeup: createScene('huimen_exp2_theater_makeup', {title:'胭脂盒',text:`你翻开一个胭脂盒。

盒子是木的，已经开裂。盒里的胭脂已经干涸，结成一块，却还散发着淡淡的香气——是桂花香，和秀兰身上的一样。

盒底刻着两个字："柳红"。字是刻的，刻得很深，像是用发簪刻的。

[red]这是柳红的胭脂。她死前用这个胭脂化妆，化到一半，就被抓走了。[/red]`,effects:{"sanity":-3,"yin":1,"addItem":"柳红的胭脂"},choices:[createChoice({"text":"把胭脂带给柳红的戏服","next":"huimen_exp2_old_theater","condition":{"hasItem":"柳红的胭脂"},"effects":{"sanity":5,"yin":-5,"removeItem":"柳红的胭脂"}}),createChoice({"text":"收好","next":"huimen_exp2_theater_backstage","effects":{"yin":1}})]}),
    huimen_exp2_theater_makeup_help: createScene('huimen_exp2_theater_makeup_help', {title:'完妆',text:`你拿起眉笔，帮镜中的柳红画完剩下的妆。

你的手穿过镜面，却像穿过水一样，没有阻力。柳红的脸渐渐清晰，从一团白影变成一个清秀的女子——眉如远山，眼含秋水，唇点朱砂。

"我好看吗？" 她问，声音里有期待，也有不安。

"好看。" 你说，"比任何新娘都好看。"

她笑了，那笑容像开了一朵花。然后她化作一缕烟，从镜子里飘出来，飘向窗外，消失在夜空。镜子里映出你自己的脸，你的眼角，不知何时多了一颗泪痣。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_finished_liu_hong_makeup"},choices:[createChoice({"text":"把她的骨灰带出去","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的骨灰"}}),createChoice({"text":"让她随风散去","next":"huimen_exp_village_street","effects":{"yin":-3}})]})
};
