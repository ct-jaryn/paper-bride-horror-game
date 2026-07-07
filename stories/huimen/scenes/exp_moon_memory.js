/**
 * 《回门》场景模块：exp_moon_memory
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_moonlit_path_memory: createScene('huimen_exp_moonlit_path_memory', {title:"记忆路",text:`你再次踏上月光小路。

这次，路面不再只是银色的，而是开始浮现画面，像水面上的倒影。你每走一步，就看见秀兰的一段记忆在脚下展开。

她第一次穿新衣裳，对着铜镜转圈，笑得眉眼弯弯。她第一次收到情书，藏在枕头底下，夜里偷偷拿出来看。她第一次偷偷和祖父在桑树下牵手，两个人都红着脸。

然后画面一转——是怀孕，是被发现，是被拖向井边。

[red]这条路，是她的整个人生。[/red]

你走到画面最后，看见秀兰躺在井底，浑身是泥，手里紧紧握着一张纸。你蹲下身子，发现那张纸，竟是你的照片。

"我等的是你吗？"她问，声音空灵，"还是只是等一个愿意看我的人？"`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"告诉她你一直在看她","next":"huimen_exp_moonlit_path_memory_stay","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"继续往前走","next":"huimen_exp_moonlit_path_end","effects":{"yin":1}})]}),
    huimen_exp_moonlit_path_memory_stay: createScene('huimen_exp_moonlit_path_memory_stay', {title:"看见",text:`你停下脚步，认真地说："我看见你了。从出生到死亡，每一段我都看见了。你不是不祥女，你是一个很好的姑娘。"

秀兰的身影在月光里凝实了几分，轮廓清晰起来。她看着你，眼泪无声地落下，一滴一滴，砸在月光路上，泛起涟漪。

"你真的看见了？"她问，带着不敢相信。

"真的。"

"那你能不能记住我？"她说，声音发颤，"不要只记住我是鬼，记住我曾经也爱笑，爱穿花衣裳，爱听戏。"

"我答应你。"你说。

月光更亮了，像是一盏只为一个人点亮的灯。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_truly_saw_xiulan"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_moonlit_path_fork: createScene('huimen_exp_moonlit_path_fork', {title:"岔路",text:`月光小路在前方分成两条。

一条通向光明，一条通向黑暗。光明的路上开满了桂花，金灿灿的，香气扑鼻。黑暗的路上飘满了纸钱，白惨惨的，一片片在风里翻飞。

你站在岔路口，左右为难，不知道该走哪条。

[whisper]"走光明的路，你会忘记我。"[/whisper]秀兰说，"走黑暗的路，你会永远和我在一起。"[whisper][/whisper]

[red]这不是选择路，是选择人生。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"走光明的路","next":"huimen_exp_moonlit_escape","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"走黑暗的路","next":"huimen_exp_ending_village_memory_scene","effects":{"yin":3}})]}),
    huimen_exp_moon_pact_alt: createScene('huimen_exp_moon_pact_alt', {title:"月约",text:`秀兰提出一个条件：她不要你娶她，只要你每年七月半，来陪她坐一夜。

你答应了。

那一夜没有红嫁衣，没有纸人，只有你和秀兰坐在井边，看月亮从东山升到西山。风吹过桑树，叶子沙沙响，像是有人在低声说话。

"我现在算嫁人了吗？"你问。

她笑了，笑得像个普通的姑娘："算吧。嫁给月光了。"`,choices:[createChoice({"text":"明年再见","ending":"hidden_moonPact"})]})
};
