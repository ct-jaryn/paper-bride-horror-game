/**
 * 《回门》场景模块：exp_mulberry_release
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_mulberry_release: createScene('huimen_exp_mulberry_release', {title:'桑魂归',text:`你回到桑树下，对着树洞说："秀兰，最后一份魂，我来还你。"

树洞里伸出一只苍白的手，手里握着那缕长发。你接过头发，感到三股力量在你体内汇合。

井水的寒凉、庙钟的沉郁、桑树的柔韧，三种感觉交织在一起，最后化作一声悠长的叹息。

秀兰的身影在你面前凝实。她没有盖头，没有血泪，穿着一身普通的布衣，只是一个清清秀秀的姑娘。

"三魂归一，我可以走了。" 她说，"但你呢？你愿意跟我一起走吗？"

[red]她的眼神里没有怨，只有一丝不舍。[/red]`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_released_mulberry_soul"},choices:[createChoice({"text":"牵她的手，带她离开","next":"huimen_exp_redemption_loop","condition":{"flag":"huimen_exp_restored_xiulan_name_in_hall"},"effects":{"yin":-5}}),createChoice({"text":"送她走，自己留下","next":"huimen_exp_mulberry_guard","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"回村街再想想","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_mulberry_guard: createScene('huimen_exp_mulberry_guard', {title:'守树人',text:`你松开秀兰的手。

"你走吧。" 你说，"我留下来，守着这棵桑树。守着周家欠下的所有名字。"

秀兰看着你，眼泪落了下来。她的眼泪是红色的，滴在桑树根上，树根发出一阵温暖的颤动。

"傻子。" 她说，"你会变成树的。"

"那就变成树吧。" 你说，"至少，比变成纸人强。"

秀兰化作红光消散。你靠着桑树坐下，感到自己的双脚正在生根，双手正在变作树枝。

你不害怕。你听见风里有许多女子的声音在说话，她们终于有人听了。`,effects:{"sanity":-5,"yin":5},ending:'huimen_exp_mulberry_guard'}),
    huimen_exp_mulberry_guard_alt: createScene('huimen_exp_mulberry_guard_alt', {title:'桑树守灵',text:`你决定留在老桑树下。

桑树里封着秀兰的一缕头发。你握着那缕头发，感到她的怨念像蚕丝一样缠住你，却不勒紧。

"你不走了？"她问。

"不走了。"你说，"我替你守着，守到周家的债还清为止。`,choices:[createChoice({"text":"做守树人","ending":"huimen_exp_mulberry_guard"})]})
};
