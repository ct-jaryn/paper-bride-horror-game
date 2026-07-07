/**
 * 《回门》场景模块：exp_mulberry_tree
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_mulberry_tree: createScene('huimen_exp_mulberry_tree', {title:'老桑树',text:`你来到村口的老桑树下。

桑树很高，少说也有百年，树冠遮住了半边天，把月光切成碎片洒在地上。树干上缠满了红绳，密密麻麻，每一根红绳的另一端都系着一个小布包。布包里装着指甲、头发、乳牙——这是村里人用来"借命"的东西。

你伸手摸了摸树干，树皮粗糙，却带着一点温度，像人的皮肤。你的指腹下，似乎有什么东西在搏动，一跳一跳的。

[whisper]"你来了。"[/whisper]秀兰的声音从树洞里传出来，"最后一份魂，就在这里。"

树洞里黑漆漆的，有一缕头发垂在外面。那缕头发很长，乌黑发亮，一直拖到地上，发梢还系着一根褪色的红绳。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"伸手去取那缕头发","next":"huimen_exp_mulberry_tree_hole","effects":{"yin":2}}),createChoice({"text":"绕着树走一圈","next":"huimen_exp_mulberry_shadow","effects":{"yin":1}}),createChoice({"text":"解开一根红绳看看","next":"huimen_exp_untie_red_string","effects":{"sanity":-5,"yin":3}}),createChoice({"text":"抬头看树冠里的鸟巢","next":"huimen_exp_mulberry_nest","effects":{"yin":2}}),createChoice({"text":"观察树上缠绕的银丝","next":"huimen_exp_mulberry_silk","condition":{"flag":"huimen_exp_knows_three_souls"},"effects":{"yin":1}}),createChoice({"text":"挖开树根下的泥土","next":"huimen_exp_mulberry_root","condition":{"flag":"huimen_exp_released_mulberry_soul"},"effects":{"yin":1}}),createChoice({"text":"离开，回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"用李木匠的锯锯断老槐树","next":"huimen_exp3_carpenter_li_saw_tree","condition":{"hasItem":"李木匠的锯"},"effects":{"yin":2}}),createChoice({"text":"留在桑树下，替她守灵","next":"huimen_exp_mulberry_guard_alt"}),createChoice({"text":"仔细检查老桑树","next":"investigate_mulberry_tree"}),createChoice({"text":"枝头有只乌鸦叼着红绳，你已取得小孩信任","next":"huimen_exp2_mulberry_bird","condition":{"flag":"huimen_exp_boy_friendly"},"hidden":true,"effects":{"yin":1}})],hallucination:'[whisper]树干上的裂缝张开，像一张嘴，正在叫你的名字。[/whisper]'}),
    huimen_exp_mulberry_tree_hole: createScene('huimen_exp_mulberry_tree_hole', {title:'树洞',text:`你把手伸进树洞。

树洞里很暖，和外面的阴冷截然不同，像钻进了一个人的怀里。你的手指触到那缕头发，头发像是有生命一样，缠上你的手腕，凉丝丝的。

你没有害怕，而是轻轻握住了它。

[whisper]"你不怕我？"[/whisper]秀兰问。

"怕。"你说，"但我也知道，你等了三十年，等的不是一个怕你的人。"

头发渐渐松开你的手腕，化作一道红光，钻进你心口。你感到三份魂终于归一，胸口的压抑彻底消散，像压了三十年的石头终于搬开。

[red]桑树的叶子开始沙沙作响，像是在笑，又像是在哭。[/red]`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_released_mulberry_soul"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}),createChoice({"text":"三魂已归一，带秀兰离开","next":"huimen_exp_redemption_loop","condition":{"flag":"huimen_exp_restored_xiulan_name_in_hall"},"effects":{"yin":-5}})]}),
    huimen_exp_mulberry_shadow: createScene('huimen_exp_mulberry_shadow', {title:'树影',text:`你绕着桑树走了一圈，转到树干背面。

背面有一道裂缝，裂缝里渗出红色的汁液，像血一样缓缓流下。你凑近看，发现裂缝里竟刻着一张人脸。

那张脸很年轻，是个女子。她的眼睛闭着，嘴角却微微上扬，像是在做一个安详的梦。

[whisper]"我是秀兰的姐妹。"[/whisper]裂缝里的脸说，"周家不止害了她一个。"

你想再问，裂缝却"咔"地合上了。树干上只剩下一道浅浅的痕迹，像一道泪痕。

你后退一步，低头发现地上落满了桑叶。每片叶子上都用极细的笔迹写着一个名字，都是女子的名字。`,effects:{"sanity":-8,"yin":2,"setFlag":"huimen_exp_saw_mulberry_sisters"},choices:[createChoice({"text":"把桑叶收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"桑叶"}}),createChoice({"text":"离开桑树","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
