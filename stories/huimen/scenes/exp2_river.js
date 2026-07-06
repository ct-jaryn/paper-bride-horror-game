/**
 * 《回门》场景模块：exp2_river
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_riverbank: createScene('huimen_exp2_riverbank', {title:'河边',text:`你循着水声来到河边。

河水不是流动的，而是静止的，像一面黑色的镜子。河面上漂着许多纸船，每只船上都点着一根小蜡烛。烛光映在水里，却照不出倒影。

[whisper]"过河的人，要留下影子。"[/whisper]

你低头看自己的影子，发现它比平常淡了许多，像是要被河水吸走。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"沿河岸走","next":"huimen_exp2_riverbank_walk","effects":{"yin":1}}),createChoice({"text":"捡起一只纸船看看","next":"huimen_exp2_paper_boat_read","effects":{"yin":1}}),createChoice({"text":"蹲在河边，对着河水说话","next":"huimen_exp2_riverbank_whisper","effects":{"yin":-3}}),createChoice({"text":"找一处浅滩渡河","next":"huimen_exp2_river_cross","effects":{"yin":3}}),createChoice({"text":"去下游找那盏未点燃的河灯","next":"huimen_exp2_river_lantern","effects":{"yin":1}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_riverbank_walk: createScene('huimen_exp2_riverbank_walk', {title:'河岸',text:`你沿着河岸走。

河岸上的草不是绿色的，而是灰白色，像被火烧过。草叶上挂着露珠，每一滴珠子里都映着一张女子的脸。

你走过一片芦苇荡，芦苇发出沙沙的声响，像有人在低声说话。

[red]河尽头有一座石桥，桥洞下似乎藏着什么东西。[/red]`,effects:{"sanity":-3,"yin":2},choices:[createChoice({"text":"去石桥看看","next":"huimen_exp2_stone_bridge","effects":{"yin":1}}),createChoice({"text":"拨开芦苇","next":"huimen_exp2_reed_bundle","effects":{"yin":2}}),createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_riverbank_whisper: createScene('huimen_exp2_riverbank_whisper', {title:'水语',text:`你蹲在河边，对着河水轻声说："秀兰，我来了。"

河水开始泛起涟漪，一圈一圈，像是一个人在回应你。水里的纸船纷纷让开，露出河底的一块青石。

青石上刻着字：

[faded]"秀兰沉骨之处，后人莫忘。"[/faded]

[whisper]"我没有忘。"[/whisper] 你说。`,effects:{"sanity":3,"yin":-5},choices:[createChoice({"text":"把青石上的字拓下来","next":"huimen_exp2_riverbank","effects":{"yin":1,"addItem":"河边青石刻字"}}),createChoice({"text":"继续和河水说话","next":"huimen_exp2_river_talk_more","effects":{"yin":-3}})]}),
    huimen_exp2_river_talk_more: createScene('huimen_exp2_river_talk_more', {title:'河忆',text:`你继续对着河水说话。

你说外面的世界，说女孩子的自由，说迟到的正义。河水静静地听，纸船静静地漂。

忽然，水面浮出一张脸。是秀兰，但不是鬼，是她十六岁时的样子。

"谢谢你告诉我。" 她说，"下辈子，我一定要去看看。"`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_river_memory_shared"},choices:[createChoice({"text":"在河边写下秀兰的名字","ending":"huimen_exp2_ending_river_memory","effects":{"yin":-5}}),createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_river_cross: createScene('huimen_exp2_river_cross', {title:'河边渡河',text:`你找到一处浅滩，试探着踏入河水。

河水冰冷刺骨，却不是水的冷，而是无数只手在抓你的脚踝。你每走一步，就感到有什么东西在往下拽。

河对岸站着一个人影，背对着你，穿着大红嫁衣。

[red]那是秀兰，还是另一个新娘？[/red]`,effects:{"sanity":-8,"yin":5},choices:[createChoice({"text":"继续往前走","next":"huimen_exp2_river_other_side","effects":{"yin":3}}),createChoice({"text":"退回河岸","next":"huimen_exp2_riverbank","effects":{"sanity":-3,"yin":1}})]}),
    huimen_exp2_river_other_side: createScene('huimen_exp2_river_other_side', {title:'对岸',text:`你终于走到对岸。

那个人影缓缓转过身。不是秀兰，是一个更老的女子，脸上布满皱纹，眼眶是两个黑洞。

"我不是秀兰。" 她说，"我是她娘。我等了三十年，终于等到有人把她带来。"

她伸出手，手里是一枚生锈的长命锁。`,effects:{"sanity":-5,"yin":3,"addItem":"秀兰的长命锁"},choices:[createChoice({"text":"把长命锁交给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"秀兰的长命锁","setFlag":"huimen_exp2_returned_longevity_lock"}}),createChoice({"text":"收好长命锁","next":"huimen_exp2_riverbank","effects":{"yin":1}})]}),
    huimen_exp2_river_lantern: createScene('huimen_exp2_river_lantern', {title:'河灯',text:`你在河边发现一盏未点燃的河灯。

河灯是用黄纸扎的，灯芯是一缕细细的头发。你把灯拿起来，发现灯底写着"秀兰"二字。

[red]这是秀兰生前放的河灯，三十年了，还没有漂出去。[/red]`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"点燃河灯","next":"huimen_exp2_river_lantern_light","condition":{"hasItem":"打火机"},"effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把河灯放回河里","next":"huimen_exp2_river_lantern_release","effects":{"yin":-3}}),createChoice({"text":"收好","next":"huimen_exp2_riverbank","effects":{"yin":1,"addItem":"秀兰的河灯"}})]}),
    huimen_exp2_river_lantern_light: createScene('huimen_exp2_river_lantern_light', {title:'河灯点灯',text:`你点燃打火机，凑近河灯。

火苗舔上灯芯，发出淡淡的金光。河灯没有燃烧，反而变得更亮，像一只小小的太阳。

"你点燃了我的灯。" 秀兰的声音说，"我可以跟着它走了。"`,effects:{"sanity":5,"yin":-5,"removeItem":"秀兰的河灯"},choices:[createChoice({"text":"放灯入河","ending":"huimen_exp2_ending_lantern_river","effects":{"yin":-5}})]}),
    huimen_exp2_river_lantern_release: createScene('huimen_exp2_river_lantern_release', {title:'放灯',text:`你把河灯轻轻放进河里。

河灯没有沉，而是稳稳地漂在水面上。水面泛起涟漪，像是一只手在推着它。

"它会漂到该去的地方。" 秀兰说，"谢谢你。"`,effects:{"sanity":5,"yin":-5},choices:[createChoice({"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}})]})
};
