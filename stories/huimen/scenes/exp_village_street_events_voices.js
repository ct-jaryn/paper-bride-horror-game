/**
 * 《回门》场景模块：exp_village_street_events_voices
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_laugh: createScene('huimen_exp_village_street_laugh', {title:"笑声",text:"你听见一阵笑声。\n\n笑声从四面八方传来，像是很多人在笑，又像是同一个人在不同的方向笑。你转了一圈，看不见人。\n\n\"谁？\" 你问。\n\n笑声停了。然后一个声音说：\"我们在笑你。你居然还想救秀兰。\"\n\n\"秀兰不值得救。\" 另一个声音说，\"她是个贱人，勾引周家少爷。\"\n\n\"她该死。\" 又一个声音说。\n\n[red]你认出了这些声音。它们是三十年前围观秀兰被活埋的村民。[/red]\n\n\"她不该死。\" 你说，\"该死的是你们。\"",effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"大声反驳他们","next":"huimen_exp_village_street_laugh_refute","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"不去理会","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_laugh_refute: createScene('huimen_exp_village_street_laugh_refute', {title:"村街驳斥",text:"你大喊：\"秀兰没有勾引任何人！她和你我一样，只是想活下去！你们把她活埋，不是因为她是坏人，是因为你们懦弱！\"\n\n笑声变成了尖叫。\n\n\"你胡说！\"\n\n\"我们没错！\"\n\n\"周家让我们干的！\"\n\n\"周家让你们干，你们就干？\" 你冷笑，\"那你们的命，和周家的狗有什么区别？\"\n\n笑声彻底消失了。村子里安静了很久。\n\n[red]你感到一种奇异的痛快，像是替秀兰出了一口三十年前的气。[/red]",effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_refuted_villagers"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_cry: createScene('huimen_exp_village_street_cry', {title:"哭声",text:"你听见有人在哭。\n\n不是秀兰的哭，是很多女人的哭，层层叠叠，像潮水一样涌来。你捂住耳朵，哭声还是从指缝里钻进来。\n\n你蹲在地上，感到一阵无力。这些哭声里有绝望，有不甘，有对生命的眷恋。\n\n[whisper]\"救救我们……\"[/whisper] 她们说，\"我们不想做鬼……\"\n\n你抬起头，发现街道两旁的墙壁上浮现出许多张脸。都是女子的脸，有的年轻，有的苍老，有的还带着婴儿肥。\n\n她们在墙里哭。",effects:{"sanity":-12,"yin":3},choices:[createChoice({"text":"对她们说我会记住你们","next":"huimen_exp_village_street_cry_promise","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"逃离哭声","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":2}})]}),
    huimen_exp_village_street_cry_promise: createScene('huimen_exp_village_street_cry_promise', {title:"记住",text:"你说：\"我会记住你们。每一个人的名字，每一个人的脸，我都会记住。\"\n\n哭声渐渐小了。墙上的脸一个个露出感激的表情，然后慢慢淡去。\n\n\"谢谢你……\" 她们说，\"记住我们，我们就还存在。\"\n\n最后消失的那张脸，是一个年轻的姑娘。她朝你笑了笑，那笑容里没有怨，只有释然。\n\n你站起身，感到自己的肩膀上多了一份重量。那是三十七个女子的托付。",effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_promised_to_remember"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
