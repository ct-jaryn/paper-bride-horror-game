/**
 * 《回门》场景模块：exp_xiulan_memory
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_xiulan_memory_1: createScene('huimen_exp_xiulan_memory_1', {title:'秀兰的记忆 · 一',text:`你眼前亮起一片光，金色的，暖暖的。

你看见十六岁的秀兰，穿着粗布衣裳，在河边洗衣，棒槌一下一下。她一边洗衣一边唱歌，歌声清亮，像山涧的泉水，叮叮咚咚。

一个年轻男人骑着自行车经过，停在她面前，"嘎吱"一声。

"秀兰，"他说，"我考上县里的学堂了。"

秀兰抬起头，脸红了："周少爷，恭喜。"

"别叫我周少爷。"男人说，"叫我名字。"

秀兰低下头，声音像蚊子："……周文。"

她这样叫他，不是因为身份还配。周文已经考上县里的学堂，周家反对他娶一个绣娘的女儿，可秀兰叫惯了"周少爷"，那称呼像一根旧红绳勒在喉咙里，一时松不开。

[red]那就是你的祖父。[/red]

[whisper]这只是她记忆的一个片段。童年、婚礼、井底……更多的碎片散在别处。[/whisper]`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"继续看","next":"huimen_exp_xiulan_memory_2","effects":{"yin":1}}),createChoice({"text":"退出记忆","next":"huimen_exp_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp_xiulan_memory_2: createScene('huimen_exp_xiulan_memory_2', {title:'秀兰的记忆 · 二',text:`画面变了，换了场景。

秀兰坐在一间小屋里，怀里抱着一件小衣服。她正在绣花样，针脚很细，一针一针。

门突然被撞开，"砰"的一声。周文冲进来，脸色惨白："秀兰，他们知道了。"

"知道什么？"秀兰问。

"你……你怀孕了。"周文跪在她面前，"我会娶你的，我会说服爹娘的。"

秀兰摸着自己的肚子，笑了："真的吗？"

"真的。"周文说，"我发誓。"

可画面一转，秀兰被几个人拖走，手脚并用挣扎。周文被关在东厢房，他砸门，哭喊，最后瘫倒在地，无能为力。

[red]誓言在现实面前，轻得像一张纸。[/red]`,effects:{"sanity":-8,"yin":2},choices:[createChoice({"text":"继续看","next":"huimen_exp_xiulan_memory_3","effects":{"yin":1}}),createChoice({"text":"退出记忆","next":"huimen_exp_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp_xiulan_memory_3: createScene('huimen_exp_xiulan_memory_3', {title:'秀兰的记忆 · 三',text:`画面来到井边，冷风嗖嗖。

秀兰被绑着，嘴上塞着布。她的眼睛里没有泪，只有绝望，死灰一样的绝望。

周文的母亲站在井边，冷冷地说："丢尽周家的脸。活埋。"

秀兰被推进井里。她在下坠中捂住肚子，像是要保护腹中的孩子，蜷成一团。

井水很冷。她挣扎着，用指甲在井壁上刻字，一笔一笔。你凑近看，刻的是：

[red]"周文，我恨你。周文，我等你。"[/red]

[scream]矛盾的两个字，被她的血混在一起。[/scream]

画面消失了。你跪在黑暗中，泪流满面。`,effects:{"sanity":-15,"yin":3,"setFlag":"huimen_exp_saw_xiulan_death"},choices:[createChoice({"text":"对她说对不起","next":"huimen_exp_xiulan_forgive","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"去看她的童年","next":"huimen_exp2_xiulan_memory_childhood","effects":{"yin":1}}),createChoice({"text":"去看她梦中的婚礼","next":"huimen_exp2_xiulan_memory_wedding","effects":{"yin":1}}),createChoice({"text":"退出记忆","next":"huimen_exp_xiulan_memory_return","effects":{"yin":1}})]}),
    huimen_exp_xiulan_dream: createScene('huimen_exp_xiulan_dream', {title:'托梦',text:`秀兰问你："你出去之后，会梦见我吗？"

"会。"你说。

"那你可以帮我托梦吗？"她问，"托给我娘。告诉她，我不恨她。她当年是没办法。"

你点点头："我帮你。"

秀兰笑了，那笑容里有一种释然，松了一口气。

"还有，"她说，"告诉周文，我等过他。不恨他，只是等累了。"`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp_promised_dream"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_apology: createScene('huimen_exp_xiulan_apology', {title:'道歉',text:`你对着井水说："秀兰，我替周家向你道歉。"

秀兰浮出来，看着你，眼神复杂，说不清是什么。

"你为什么要道歉？"她问，"你又没害我。"

"因为我是周家的后人。"你说，"周家欠你的，我替他们认。"

秀兰沉默了很久，井水静着。然后说："我不需要周家道歉。我需要周家承认我。"

"我会让周家承认你。"你说，"不是作为不祥女，而是作为周秀兰。"

她点点头，眼眶里的红色又淡了一些。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_apologized_to_xiulan"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"跪下，正式向秀兰道歉","ending":"huimen_exp_ending_apology","effects":{"yin":-5}})]}),
    huimen_exp_xiulan_thanks: createScene('huimen_exp_xiulan_thanks', {title:'道谢',text:`秀兰忽然说："谢谢你。"

你愣了一下："谢我什么？"

"谢谢你愿意听我说话。"她说，"三十年了，所有人都在告诉我该做什么：该嫁人，该去死，该原谅，该报仇。只有你问我想要什么。"

"那你想要什么？"你问。

"我想被人记住。"她说，"记住我原本的样子。"

"我记住了。"你说，"周秀兰，十六岁会唱《兰花花》，十八岁会绣鸳鸯，喜欢桂花糕，梦想当老师。"

秀兰笑了，那笑容里没有鬼气，只有少女的羞涩。`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_goodbye: createScene('huimen_exp_xiulan_goodbye', {title:'道别',text:`你坐在井边，秀兰也"坐"在旁边，飘着。

你们聊了很久，从她的童年聊到她的死，从她的恨聊到她的愿。月亮西斜，天边泛起灰白，鸡快要叫了。

"天要亮了。"秀兰说，"你该走了。"

"你呢？"你问。

"我也该走了。"她说，"去我该去的地方。"

你们沉默地坐了一会儿，谁也没说话。

"再见。"你说。

"再见。"秀兰说，"不是永别。是下次再见。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_said_goodbye_to_xiulan"},choices:[createChoice({"text":"离开村子","ending":"huimen_exp_ending_farewell","effects":{"yin":-5}}),createChoice({"text":"再陪她一会儿","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_memory_return: createScene('huimen_exp_xiulan_memory_return', {title:'从记忆里回来',text:`金光忽然收束。

你像是被人从一幅画里推了出来，踉跄一步，发现自己还站在原地。周围是村街，纸钱还在旋舞，可你的眼眶是湿的。

刚才的记忆很短，只够讲清三件事：她爱过，她等过，她被埋了。`,textVariants:[{condition:{flag:'huimen_exp_saw_xiulan_death'},text:`你想起她在井壁上刻下的"周文，我恨你。周文，我等你。"——爱和恨，被她用血揉在了一起。`},{condition:{flag:'huimen_exp_promised_dream'},text:`你答应替她托梦，告诉她娘：她不恨。`},{condition:{flag:'huimen_exp_apologized_to_xiulan'},text:`你也想起你说过：不是作为不祥女，而是作为周秀兰。`}],choices:[createChoice({"text":"回到村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};