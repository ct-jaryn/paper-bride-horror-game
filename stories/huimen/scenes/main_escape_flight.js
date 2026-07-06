/**
 * 《回门》场景模块：main_escape_flight
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    break_window: createScene('break_window', {title:"破窗",text:"你用肩膀撞破木窗，碎玻璃划破了手臂。\n\n顾不上疼痛，你滚落在屋外的泥地里。雨还在下，但天上的月亮不知什么时候出来了，惨白地照着院子。\n\n院子里站满了人。\n\n不，不是人。是纸人。\n\n几十个纸人穿着红嫁衣、白丧服，整整齐齐地站在院子里，低着头，像是在等什么。\n\n你猛然发现，最后一排的纸人里，混着一个异样的身影——那纸人穿的不是喜服，而是一身湿漉漉的大红戏服，水袖垂到地面，脸上画着旦角的妆。\n\n它的脸不是你的脸。而是一张苍白的女人的脸。\n\n它站在人群最后，没有抬头，只是低声哼着一段你听不清的曲调。\n\n听见你落地的声音，它们齐刷刷地抬起头。\n\n[red]每一张脸，都是你的脸。[/red]\n\n它们向你走来，脚步轻盈，像是踩在棉花上。\n\n\"新郎官，\" 它们一起说，\"吉时到了。\"",effects:{"sanity":-35,"yin":12,"visual":"paper-doll","visualDuration":4000},choices:[createChoice({"text":"向后山狂奔","next":"run_to_mountain"}),createChoice({"text":"躲进柴房","next":"hide_in_woodshed"})]}),
    hold_breath: createScene('hold_breath', {title:"无字碑",text:"你死死咬住嘴唇，不敢出气。\n\n肩上的手停了一会儿，慢慢缩了回去。纸人们的脚步声也渐渐远去，像是退回了村子里。\n\n你等了足足一刻钟，才敢动弹。\n\n月光照在无字碑上，碑身浮现出一行行血字：\n\n[faded]\"周家秀兰，年十六。与周家少爷有情，珠胎暗结。周家恐丑事外扬，于子时活埋于井底，对外宣称未婚卒。秀兰含冤三十年，求周家后人还我名分，令我归土。\"[/faded]\n\n你浑身发抖。\n\n[red]秀兰不是病死的。她是被周家活埋的。[/red]\n\n而那个周家少爷，正是你的祖父。",effects:{"sanity":-15,"yin":5,"setFlag":"knowsTruth"},choices:[createChoice({"text":"回村找秀兰的尸骨","next":"huimen_red_coffin_discovery"}),createChoice({"text":"去老宅找族谱证据","next":"huimen_seek_evidence","effects":{"yin":1}}),createChoice({"text":"在坟前发誓为她正名","next":"swear_justice","effects":{"setFlag":"xiulanMercy"}}),createChoice({"text":"想起狐嫁女也提过周家血脉……","next":"zhou_bloodline_revelation","condition":{"flag":"hujia_to_zhou"}}),createChoice({"text":"无字碑后有条小路，似乎通向村子深处","next":"huimen_exp_village_loop_entry","condition":{"flag":"knowsTruth"},"effects":{"yin":2}})],hallucination:"[whisper]你摸了摸自己的下巴，那里有一颗痣，和秀兰一模一样。[/whisper]"}),
    hide_in_woodshed: createScene('hide_in_woodshed', {title:"柴房",text:"你钻进柴房，缩在一堆干草后面。\n\n纸人的脚步声在院子里转了几圈，渐渐远去。你刚松一口气，就听见身后传来\"沙沙\"声。\n\n你以为是老鼠，没在意。\n\n[red]沙沙声越来越近。[/red]\n\n你猛地回头。柴房的角落里，堆着十几个纸扎人，刚才它们还背对着你，现在全都转了过来。\n\n它们的脸，和你一模一样。",effects:{"sanity":-30,"yin":10,"visual":"paper-doll"},choices:[createChoice({"text":"点燃柴火","next":"burn_woodshed","condition":{"hasItem":"打火机"}}),createChoice({"text":"冲出柴房","next":"run_to_mountain"})]}),
    burn_woodshed: createScene('burn_woodshed', {title:"焚柴房",text:"你掏出打火机，点燃了一把干草。\n\n火苗迅速蔓延，纸人们发出尖叫。那声音不像是纸燃烧的声音，更像是人的惨叫。\n\n你趁乱冲出柴房，身后是一片火光。\n\n可当你跑到村口时，发现全村的人都站在那里。他们低着头，手里提着白灯笼。\n\n\"你烧了秀兰的嫁妆。\" 二叔说，\"她会更生气的。\"",effects:{"sanity":-15,"yin":10,"time":60},choices:[createChoice({"text":"硬闯村口","next":"charge_exit","ending":"sacrificed"}),createChoice({"text":"退回后山","next":"run_to_mountain"})]})
};
