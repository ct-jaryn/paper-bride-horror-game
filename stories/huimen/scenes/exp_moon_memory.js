/**
 * 《回门》场景模块：exp_moon_memory
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_moonlit_path_memory: createScene('huimen_exp_moonlit_path_memory', {title:"记忆路",text:"你再次踏上月光小路。\n\n这次，路面不再只是银色的，而是开始浮现画面。你每走一步，就看见秀兰的一段记忆。\n\n她第一次穿新衣裳，第一次收到情书，第一次偷偷和祖父牵手。然后是怀孕，是被发现，是被拖向井边。\n\n[red]这条路，是她的整个人生。[/red]\n\n你走到画面最后，看见秀兰躺在井底，手里握着一张纸。你蹲下身子，发现那张纸是你的照片。\n\n\"我等的是你吗？\" 她问，\"还是只是等一个愿意看我的人？\"",effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"告诉她你一直在看她","next":"huimen_exp_moonlit_path_memory_stay","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"继续往前走","next":"huimen_exp_moonlit_path_end","effects":{"yin":1}})]}),
    huimen_exp_moonlit_path_memory_stay: createScene('huimen_exp_moonlit_path_memory_stay', {title:"看见",text:"你说：\"我看见你了。从出生到死亡，每一段我都看见了。你不是不祥女，你是一个很好的姑娘。\"\n\n秀兰的身影在月光里凝实。她看着你，眼泪无声地落下。\n\n\"你真的看见了？\" 她问。\n\n\"真的。\"\n\n\"那你能不能记住我？\" 她说，\"不要只记住我是鬼，记住我曾经也爱笑，爱穿花衣裳，爱听戏。\"\n\n\"我答应你。\" 你说。\n\n月光更亮了，像是一盏为一个人点亮的灯。",effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_truly_saw_xiulan"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_moonlit_path_fork: createScene('huimen_exp_moonlit_path_fork', {title:"岔路",text:"月光小路在前方分成两条。\n\n一条通向光明，一条通向黑暗。光明的路上开满了桂花，黑暗的路上飘满了纸钱。\n\n你站在岔路口，不知道该走哪条。\n\n[whisper]\"走光明的路，你会忘记我。\"[/whisper] 秀兰说，\"走黑暗的路，你会永远和我在一起。\"\n\n[red]这不是选择路，是选择人生。[/red]",effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"走光明的路","next":"huimen_exp_moonlit_escape","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"走黑暗的路","next":"huimen_exp_ending_village_memory_scene","effects":{"yin":3}})]}),
    huimen_exp_moon_pact_alt: createScene('huimen_exp_moon_pact_alt', {title:"月约",text:"秀兰提出一个条件：她不要你娶她，只要你每年七月半来陪她坐一夜。\n\n你答应了。\n\n那一夜没有红嫁衣，没有纸人，只有你和秀兰坐在井边，看月亮从东山升到西山。\n\n\"我现在算嫁人了吗？\"你问。\n\n她笑了：\"算吧。嫁给月光了。\"",choices:[createChoice({"text":"明年再见","ending":"hidden_moonPact"})]})
};
