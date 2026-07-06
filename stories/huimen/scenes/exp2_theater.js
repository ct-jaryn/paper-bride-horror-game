/**
 * 《回门》场景模块：exp2_theater
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_old_theater: createScene('huimen_exp2_old_theater', {title:'老戏台',text:`你循着唱戏声，来到村子的老戏台前。

戏台比huimen_exp_street_opera_tune那座更大，台柱上缠满了红绸。台上没有演员，只有一件大红戏服在空中飘动，水袖自己挥舞，像是在表演。

台下发着许多纸人观众，它们整齐地坐着，仰着头，像是在看一出好戏。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"上台","next":"huimen_exp2_old_theater_stage","effects":{"yin":3}}),createChoice({"text":"坐在纸人中间","next":"huimen_exp2_old_theater_audience","effects":{"yin":2}}),createChoice({"text":"问戏服是不是柳红","next":"huimen_exp2_old_theater_liu_hong","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_stage: createScene('huimen_exp2_old_theater_stage', {title:'登台',text:`你走上戏台。

戏服立刻飘到你面前，水袖缠上你的脖子。戏服里没有身体，却发出一个女子的声音：

"你会唱戏吗？"

"不会。" 你说。

"那你会鼓掌吗？" 她问。

你鼓起掌来。戏服松开了水袖，缓缓飘回台中央。`,effects:{"sanity":-8,"yin":2},choices:[createChoice({"text":"陪她唱一段","next":"huimen_exp2_old_theater_sing","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"问她要什么","next":"huimen_exp2_old_theater_ask","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_sing: createScene('huimen_exp2_old_theater_sing', {title:'同唱',text:`你张开嘴，和着戏服的唱腔唱起来。

你唱得很难听，但戏服没有嫌弃。它越唱越轻，越唱越淡，最后像一缕烟一样消散在月光里。

台下发发出一阵掌声。纸人观众们纷纷站起来，朝你鞠躬，然后化为灰烬。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_sang_with_liu_hong"},choices:[createChoice({"text":"把柳红的戏服收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的戏服"}}),createChoice({"text":"让戏服随风散去","ending":"huimen_exp2_ending_theater_shadow","effects":{"yin":-5}})]}),
    huimen_exp2_old_theater_audience: createScene('huimen_exp2_old_theater_audience', {title:'观众席',text:`你坐在纸人中间。

纸人们一动不动，但你能感觉到它们在"看"你。台上的戏服唱到高潮处，纸人们齐齐鼓掌，掌声像一阵干燥的风。

你旁边的纸人转过头，它的脸和你一模一样。

"你也来听戏？" 它问。`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"点头","next":"huimen_exp2_old_theater_audience_nod","effects":{"yin":2}}),createChoice({"text":"起身离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_audience_nod: createScene('huimen_exp2_old_theater_audience_nod', {title:'纸人观众',text:`你点点头。

纸人笑了："那就好。柳红姐唱了三十年，终于有人愿意当她的观众。"

它从怀里掏出一张戏票，递给你。票上写着："青石镇戏台，柳红，民国二十三年中秋。"

[red]这是柳红生前最后一场戏的票。[/red]`,effects:{"sanity":-3,"yin":1,"addItem":"柳红的戏票"},choices:[createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_liu_hong: createScene('huimen_exp2_old_theater_liu_hong', {title:'问柳红',text:`你问："你是柳红吗？"

戏服颤抖了一下，发出一声苦笑："我是，也不是。我只是她的一件衣服，替她唱她没唱完的戏。"

"她的魂呢？" 你问。

"被封在青石镇。" 戏服说，"你若去青石镇，帮我把这件衣服带去。她会跟你走的。"`,effects:{"sanity":-3,"yin":2,"setFlag":"huimen_exp2_met_liu_hong_dress"},choices:[createChoice({"text":"答应","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的戏服"}}),createChoice({"text":"拒绝","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_old_theater_ask: createScene('huimen_exp2_old_theater_ask', {title:'问所求',text:`你问戏服："你想要什么？"

戏服沉默了一会儿，说："我想被人听完。三十年了，每次唱到一半，台下的活人就跑了。"

"我听完。" 你说。

戏服又开始唱，这次唱得很慢，很完整。唱到最后，它化作一件普通的戏服，落在台上。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_finished_liu_hong_song"},choices:[createChoice({"text":"收起戏服","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的戏服"}})]}),
    huimen_exp2_theater_backstage: createScene('huimen_exp2_theater_backstage', {title:'戏台后台',text:`你绕到戏台后面。

后台堆满了戏服、头面、胭脂盒。一面镜子立在角落里，镜面上布满裂痕。你走近，镜子里映出的不是你自己，而是一个正在化妆的女子。

她在画眉，动作很慢，每一笔都带着忧愁。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"看她化妆","next":"huimen_exp2_theater_mirror","effects":{"yin":2}}),createChoice({"text":"翻找胭脂盒","next":"huimen_exp2_theater_makeup","effects":{"yin":1}}),createChoice({"text":"离开","next":"huimen_exp2_old_theater","effects":{"yin":1}})]}),
    huimen_exp2_theater_mirror: createScene('huimen_exp2_theater_mirror', {title:'镜中女子',text:`你看着镜中的女子画完眉，然后缓缓转过头。

她没有脸，只有一团模糊的白影。可她的声音很清楚："我等了三十年，等一个愿意看我化妆的人。"

"你是谁？" 你问。

"我是柳红。" 她说，"我死前正在化新娘妆，妆没化完，就被活埋了。"`,effects:{"sanity":-8,"yin":3,"setFlag":"huimen_exp2_met_liu_hong_mirror"},choices:[createChoice({"text":"帮她化完妆","next":"huimen_exp2_theater_makeup_help","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开镜子","next":"huimen_exp2_theater_backstage","effects":{"yin":1}})]}),
    huimen_exp2_theater_makeup: createScene('huimen_exp2_theater_makeup', {title:'胭脂盒',text:`你翻开一个胭脂盒。

盒里的胭脂已经干涸，却还散发着淡淡的香气。盒底刻着两个字："柳红"。

[red]这是柳红的胭脂。[/red]`,effects:{"sanity":-3,"yin":1,"addItem":"柳红的胭脂"},choices:[createChoice({"text":"把胭脂带给柳红的戏服","next":"huimen_exp2_old_theater","effects":{"sanity":5,"yin":-5,"removeItem":"柳红的胭脂"}}),createChoice({"text":"收好","next":"huimen_exp2_theater_backstage","effects":{"yin":1}})]}),
    huimen_exp2_theater_makeup_help: createScene('huimen_exp2_theater_makeup_help', {title:'完妆',text:`你拿起眉笔，帮镜中的柳红画完剩下的妆。

你的手穿过镜面，却像穿过水一样。柳红的脸渐渐清晰，露出一个清秀的女子模样。

"我好看吗？" 她问。

"好看。" 你说，"比任何新娘都好看。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_finished_liu_hong_makeup"},choices:[createChoice({"text":"把她的骨灰带出去","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"柳红的骨灰"}}),createChoice({"text":"让她随风散去","next":"huimen_exp_village_street","effects":{"yin":-3}})]})
};
