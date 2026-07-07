/**
 * 《回门》场景模块：exp_xiulan_bond_moments
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_xiulan_outside_world: createScene('huimen_exp_xiulan_outside_world', {title:"外面",text:`你坐在井沿上，给秀兰讲外面的世界，一件一件地讲。

你讲汽车、火车、飞机，讲高楼、电影、手机。你讲女孩子可以读书、工作、自己决定嫁不嫁人，讲她们可以一个人走夜路，可以一个人出远门。

秀兰听得入神，时不时问一句："真的吗？"

"真的。"你说，"如果你活到现在，你可以做任何想做的事。"

秀兰沉默了很久，井水静得像一面镜子。然后她说："那下辈子，我要活在你说的那个世界里。"

[whisper]"我要考大学，要当老师，要嫁一个真心待我的人。"[/whisper]

[red]她的声音很轻，却带着一种穿越三十年的渴望。[/red]`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"告诉她一定会的","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-3}})]}),
    huimen_exp_xiulan_hair: createScene('huimen_exp_xiulan_hair', {title:"梳头",text:`你坐在井边，给秀兰梳头，一下一下。

她的头发很长，从井里一直拖到地上，乌黑发亮。你用手指梳理那些打结的发丝，动作很轻，怕扯疼她。

"我娘以前也这样给我梳头。"秀兰说，"她说，女子的头发是命，要爱惜。"

"你的命不该这么短。"你说。

秀兰沉默了一会儿，然后说："可我的头发还在。三十年了，还在长。"

[red]你梳了很久，直到她的头发顺得像一条黑色的河。[/red]`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_combed_xiulan_hair_2"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_age: createScene('huimen_exp_xiulan_age', {title:"年华",text:`你问秀兰："如果你活着，现在多大了？"

秀兰算了算，扳着手指："四十六了。"

"四十六……"你说，"应该是一个安稳的年纪。"

"是啊。"她说，"也许有孩子，也许有孙子。也许我会在院子里种桂花，等他们回家。"

"你会是个好母亲。"你说。

"你怎么知道？"她问。

"因为你等了孩子三十年。"你说，"光这份等，就没人比得上。"

秀兰低下头，看着自己的手。那双手苍白，却温柔。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_rain: createScene('huimen_exp_xiulan_rain', {title:"雨诉",text:`下雨了，淅淅沥沥。

秀兰从井里伸出手，接住一滴雨，水珠在掌心凝住。

"这雨是我的眼泪。"她说，"我哭的时候，村子就下雨。"

"那你别哭了。"你说。

"我忍不住。"她说，"三十年的委屈，不是想停就能停的。"

你把手伸进雨里，和秀兰一起接着雨滴，雨打在手背上，凉丝丝的。

"那我陪你一起淋。"你说，"你哭多少，我陪多少。"

秀兰看着你，眼泪和雨水混在一起。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_sun: createScene('huimen_exp_xiulan_sun', {title:"向阳",text:`天边露出一丝阳光，金色的，斜斜地照过来。

秀兰连忙缩回井里："别照到我。"

"为什么？"你问。

"鬼不能见太阳。"她说，"会魂飞魄散的。"

你脱下外套，撑在井口，为她挡住阳光，手臂酸得发麻。

"你看，"你说，"有我在，你可以见太阳。"

秀兰探出一点头，阳光照在她脸上，金灿灿的。她眯起眼睛，像是很久没有见过光。

"好暖和。"她说，"原来太阳这么好。"`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_mirror_2: createScene('huimen_exp_xiulan_mirror_2', {title:"再照",text:`你再次用井水照秀兰。

这次水面很平静，静得像一面镜子，映出秀兰完整的脸。她没有盖头，没有血泪，只是一个清秀的姑娘，眉眼弯弯。

"我好看吗？"她问。

"好看。"你说。

"比新娘子还好看？"

"比任何新娘子都好看。"你说。

秀兰笑了，那笑容像一朵在井底开了三十年的花，终于开了。

"谢谢你让我看见自己。"她说，"三十年了，我第一次觉得自己不那么可怕。"`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
