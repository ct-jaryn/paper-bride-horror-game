/**
 * 《回门》场景模块：exp_xiulan_joy_daily
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_xiulan_cook: createScene('huimen_exp_xiulan_cook', {title:"桂花糕",text:`你想起秀兰想吃桂花糕的愿望，心一软。

你在村子里找到一间废弃的厨房，灶台塌了一半，里面还有一些发霉的糯米和桂花，干瘪瘪的。你勉强做了一块桂花糕，黑乎乎的，端到井边。

秀兰看着那块黑乎乎的糕点，笑了，眉眼弯弯。

"这算桂花糕吗？"她问。

"算吧。"你说，"条件有限。"

她伸手碰了碰糕点，糕点化作一道光，被她吸进身体里，"嗖"的一声。

"甜的。"她说，"虽然是鬼，但我尝到了甜味。"

[red]你看着她满足的样子，心里又酸又软。[/red]`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_sew: createScene('huimen_exp_xiulan_sew', {title:"秀兰嫁衣",text:`你找到一块红布和针线，决定给秀兰做一件嫁衣，一针一线。

你的针线活很糟糕，做出的嫁衣歪歪扭扭，针脚粗得像蜈蚣。但秀兰穿在身上，却很高兴，转了一圈。

"这是我第二件嫁衣。"她说，"第一件被他们烧了，说是不祥。"

"这件不会被烧。"你说，"我会把它和你一起，堂堂正正地埋进土里。"

秀兰摸着嫁衣上的针脚，眼泪落了下来，一滴一滴。

"你的手很笨。"她说，"但你的心很细。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_made_xiulan_dress"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_school: createScene('huimen_exp_xiulan_school', {title:"学堂",text:`你带秀兰"去"了一趟学堂，旧学堂遗址。

其实是你在村口的旧学堂遗址里，给她讲课本上的知识。你讲地理、历史、算术，她听得津津有味，眼睛亮亮的。

"原来世界这么大。"她说。

"是啊。"你说，"比周家村大得多。"

"如果我能去上学，"她说，"我想当老师，教女孩子们认字。"

"你可以的。"你说，"下辈子一定可以。"

秀兰笑了，那笑容里没有怨，只有对未来的向往。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_laugh: createScene('huimen_exp_xiulan_laugh', {title:"秀兰的笑",text:`你讲了一个很冷的笑话给秀兰听，干巴巴的。

秀兰愣了一下，然后"噗嗤"一声笑了出来。她笑得很大声，像是很久没有这样笑过，肩膀一耸一耸。

"你真傻。"她说，"这种笑话也讲得出来。"

"能让你笑就行。"你说。

秀兰笑够了，擦了擦眼角。她的眼泪是红色的，但笑容是真的。

"谢谢你。"她说，"我死之前，也爱笑。死后三十年，今天才知道自己还能笑。"`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"再讲一个","next":"huimen_exp_xiulan_laugh_more","effects":{"sanity":3,"yin":-3}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_laugh_more: createScene('huimen_exp_xiulan_laugh_more', {title:"再笑",text:`你又讲了一个更冷的笑话，更干巴。

这次秀兰没有立刻笑，而是看着你，眼神温柔。

"你知道吗，"她说，"周文以前也这样逗我笑。他讲的笑话比你还可笑。"

"那后来呢？"

"后来……"她低下头，"后来我就不笑了。"

你沉默了一会儿，说："那从现在开始，你可以再笑了。不是为了他，是为了你自己。"

秀兰抬起头，又笑了。这次笑得更久，更深。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_made_xiulan_laugh"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_hope: createScene('huimen_exp_xiulan_hope', {title:"秀兰的愿",text:`秀兰问你："外面的世界，女孩子真的可以自己做主吗？"

"可以。"你说，"她们可以读书、工作、旅行、结婚或者单身。没有人可以强迫她们。"

"那下辈子，"她说，"我要做你所说的那种女孩。"

"你一定会的。"你说。

秀兰笑了，那笑容里没有怨，只有希望，亮晶晶的。

"那我等你。"她说，"等下辈子，我们做朋友。"

"好。"你说，"下辈子，我们做朋友。"`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_flower_2: createScene('huimen_exp_xiulan_flower_2', {title:"再献花",text:`你又摘了一朵桂花，放在井沿，香气弥漫。

秀兰浮出来，闻着花香，闭上眼睛，深深吸了一口气。

"我活着的时候，院子里有一棵桂花树。"她说，"每年秋天，整个院子都是香的。"

"后来呢？"你问。

"后来被砍了。"她睁开眼睛，"因为我死了，树也成了不祥之物。"

你握紧了拳头。周家连一棵树都不放过。

"等我出去，"你说，"我给你种一棵桂花树。"`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
