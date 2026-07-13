/**
 * 《回门》场景模块：exp_xiulan_joy_arts
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_xiulan_flower: createScene('huimen_exp_xiulan_flower', {title:"献花",text:`你把桂花放在井沿，花瓣舒展开，香气四溢。

井水里浮出秀兰的脸。她看着那朵花，眼神柔和了许多，眼角的红色淡了。

"桂花……"她说，"我活着的时候，院子里有一棵桂花树。每年秋天，周文都会摘一束给我。"

她的眼泪落进井里，却没有让水变红，而是化作一圈圈涟漪，荡开。

"后来树被砍了。"她说，"他们说，不祥的人，不配闻桂花香。"

你握紧了拳头。周家连一棵树都不放过。`,effects:{"sanity":5,"yin":-8,"removeItem":"桂花"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_sing: createScene('huimen_exp_xiulan_sing', {title:"秀兰唱戏",text:`你坐在井边，秀兰给你唱了一段戏，声音清亮。

她唱的是《游园惊梦》，声音没有鬼气，反而带着少女的清亮，像山涧的泉水。她唱到"良辰美景奈何天"时，停顿了一下，声音卡在喉咙里。

"我以前最想学的，就是这段。"她说，"可周家说，戏子伤风败俗，不许我学。"

"你唱得很好。"你说。

秀兰笑了："真的吗？"

"真的。"你说，"比戏台上的名角儿都好。"

她笑得更开心了，像得到了全世界最好的夸奖，眉眼弯弯。`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"让她再唱一段","next":"huimen_exp_xiulan_sing_more","effects":{"sanity":3,"yin":-3}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_sing_more: createScene('huimen_exp_xiulan_sing_more', {title:"秀兰再唱",text:`秀兰又唱了一段《惊梦》，水袖轻甩。

这次她唱得更投入，水袖在空中挥舞。你虽然看不见袖子，但能感觉到风在跟着她的声音流动，一阵一阵。

唱到最高处，她的声音忽然断了，戛然而止。

"对不起，"她说，"三十年没唱，嗓子生了。"

"没关系。"你说，"你已经唱得很好了。"

秀兰点点头，脸上带着满足的笑。你忽然觉得，如果她能一直这样笑，该有多好。`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp_heard_xiulan_sing"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"和她一起唱完最后一段","ending":"huimen_exp_ending_sing_together","condition":{"flag":"huimen_exp_heard_xiulan_sing"},"effects":{"yin":-5}})]}),
    huimen_exp_xiulan_dance: createScene('huimen_exp_xiulan_dance', {title:"月下舞",text:`秀兰从井里出来，在月光下跳舞，身姿飘忽。

她没有脚，身影是飘着的，离地三寸。可她的舞姿很美，像一片落叶，像一缕轻烟，像三十年前那个还没被伤害的少女。

你坐在井沿上，静静地看，不敢出声。

"我母亲说，"她一边跳一边说，"我跳舞的时候，像天上的仙女。"

"你母亲说得对。"你说。

秀兰转了个圈，身影在月光里散开，又聚拢，像一缕烟。

"可惜，她没能看见我嫁人。"她说。

[red]月光下，她的舞带着一种说不出的凄美。[/red]`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"鼓掌","next":"huimen_exp_xiulan_dance_clap","effects":{"sanity":3,"yin":-3}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_xiulan_dance_clap: createScene('huimen_exp_xiulan_dance_clap', {title:"鼓掌",text:`你鼓起掌来，"啪啪啪"地响。

秀兰停住，不好意思地低下头："跳得不好。"

"很好。"你说。

她抬起头，眼里有光。那是你第一次在她眼里看到光，不是鬼火，而是活人一样的光，亮晶晶的。

"如果能再跳一次给周文看就好了。"她说。

"他看见了。"你说，"在另一个世界，他一定看见了。"

秀兰点点头，身影渐渐淡去。你知道，她又回到了井里。但她的心情，似乎好了很多。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_xiulan_danced"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"邀请她再跳最后一支舞","ending":"huimen_exp_ending_last_dance","condition":{"flag":"huimen_exp_xiulan_danced"},"effects":{"yin":-5}})]})
};
