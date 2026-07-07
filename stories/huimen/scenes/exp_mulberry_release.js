/**
 * 《回门》场景模块：exp_mulberry_release
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_mulberry_release: createScene('huimen_exp_mulberry_release', {title:'桑魂归',text:`你回到桑树下，对着黑漆漆的树洞轻声说："秀兰，最后一份魂，我来还你。"

树洞里伸出一只苍白的手，手里握着那缕长长的黑发。你伸手接过来，头发冰凉，却在触到你掌心的瞬间，泛起一阵温热。

你感到三股力量在体内汇合。井水的寒凉从脚底升起，庙钟的沉郁压在胸口，桑树的柔韧却托着你的脊梁。三种感觉交织在一起，最后化作一声悠长的叹息，从你嘴里呼出来。

秀兰的身影在你面前凝实了。她没有盖头，没有血泪，穿着一身普通的蓝布衣裳，只是一个清清秀秀的姑娘，像邻家任何一个会绣花的女儿。

"三魂归一，我可以走了。"她说，"但你呢？你愿意跟我一起走吗？"

[red]她的眼神里没有怨，只有一丝不舍。[/red]`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_released_mulberry_soul"},choices:[createChoice({"text":"牵她的手，带她离开","next":"huimen_exp_redemption_loop","condition":{"flag":"huimen_exp_restored_xiulan_name_in_hall"},"effects":{"yin":-5}}),createChoice({"text":"送她走，自己留下","next":"huimen_exp_mulberry_guard","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"回村街再想想","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_guard: createScene('huimen_exp_mulberry_guard', {title:'守树人',text:`你松开秀兰的手。

"你走吧。"你说，"我留下来，守着这棵桑树。守着周家欠下的所有名字。"

秀兰看着你，眼泪落了下来。她的眼泪是红色的，一滴一滴滴在桑树根上，树根发出一阵温暖的颤动，像是活了过来。

"傻子。"她说，"你会变成树的。"

"那就变成树吧。"你说，"至少，比变成纸人强。"

秀兰化作红光消散。你靠着桑树坐下，感到自己的双脚正在生根，深深扎进泥土里，双手正在变作树枝，向天空伸展。

你不害怕。你听见风里有许多女子的声音在说话，她们终于有人听了。`,effects:{"sanity":-5,"yin":5},ending:'huimen_exp_mulberry_guard'}),
    huimen_exp_mulberry_guard_alt: createScene('huimen_exp_mulberry_guard_alt', {title:'桑树守灵',text:`你决定留在老桑树下。

桑树里封着秀兰的一缕头发。你握着那缕头发，感到她的怨念像蚕丝一样缠住你，却并不勒紧，只是轻轻绕着。

"你不走了？"她问。

"不走了。"你说，"我替你守着，守到周家的债还清为止。`,choices:[createChoice({"text":"做守树人","ending":"huimen_exp_mulberry_guard"})]})
};
