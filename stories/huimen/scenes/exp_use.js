/**
 * 《回门》场景模块：exp_use
 */

export const scenes = {
    huimen_exp_use_old_coin: {
        title: '用钱',
        text: `你掏出那枚清代铜钱。

铜钱在月光下泛着幽幽的光。你想起老妇的话：这枚铜钱，是秀兰的买命钱。

你来到井边，把铜钱投入井中。

"秀兰，" 你说，"我用这枚铜钱，买你自由。"

铜钱落水，发出一声清脆的响声。井水开始翻涌，一个女子的身影浮出来。

"你买了我的命？" 她问。

"不。" 你说，"我买你的自由。"`,
        effects: {"sanity":5,"yin":-5,"removeItem":"清代铜钱","setFlag":"huimen_exp_used_old_coin"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_use_silk: {
        title: '织锦',
        text: `你收集桑树上的银丝，编成一小段锦带。

锦带很细，却带着桑树的温度。你把它系在手腕上，感到一阵安心。

"这是命丝。" 秀兰说，"你把它带在身上，周家就绑不走你的命。"

你点点头，把锦带系紧。

"也给我一根。" 秀兰说。

你又编了一根，放进井里。井水轻轻荡漾，像是一个女子收下了礼物。`,
        effects: {"sanity":5,"yin":-5,"removeItem":"桑叶","addItem":"命丝锦带"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_use_child_tooth: {
        title: '用护身乳牙',
        text: `你握紧那枚护身乳牙。

牙齿在你手心里发热，像一颗小小的心脏。你感到有什么东西在保护你，让周围的阴气不敢靠近。

"这是元宝的牙。" 秀兰说，"他把自己的命分了一点给你。"

你把牙齿贴身收好。虽然它只是一颗小小的乳牙，却重得像一份承诺。

"告诉他，" 秀兰说，"谢谢他。"`,
        effects: {"sanity":5,"yin":-5,"removeItem":"护身乳牙"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_use_liu_hong_dress: {
        title: '还衣',
        text: `你取出柳红的戏服。

戏服在月光下泛着暗红的光，心口的裂缝还在。你对着戏服说："柳红，我会带你离开这里。"

戏服轻轻飘动，像有人在点头。

秀兰的声音从井里传来："柳红是我最好的朋友。我们死后才认识的。"

"我会把她的衣服交给赶尸匠。" 你说，"他会带她回家。"

戏服化作一道红光，飞入你的怀中。你感到一阵温暖，那是两个女子对你的信任。`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_use_broken_mirror: {
        title: '照镜',
        text: `你拿出破镜碎片，照向井底。

碎片里的裂痕射出一道光，井水开始翻涌。秀兰的身影在光里凝实，她看着自己水中的倒影，愣住了。

"这是我吗？" 她问，"我不记得自己长这样了。"

"这是你。" 你说，"很好看。"

秀兰摸了摸自己的脸，眼泪落进井里。

"原来我没有那么可怕。" 她说。`,
        effects: {"sanity":5,"yin":-5,"removeItem":"破镜碎片"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_use_life_silk: {
        title: '系丝',
        text: `你取出命丝锦带，系在手腕上。

锦带发出淡淡的银光，像是一圈月光缠在手上。你感到自己的命被稳稳地系住，不再被周家牵扯。

"这丝里有我的命。" 秀兰说，"也有一部分桑树的力量。它会保护你。"

"那你的命呢？" 你问。

"我的命，已经在你心里了。" 她说。

你握紧锦带，感到一阵温暖。`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_use_wedding_bed_note: {
        title: '婚约',
        text: `你取出婚床上的字条，再次阅读："兰妹，等我。"

秀兰从井里浮出来，看着字条，轻轻叹气。

"他终究没来接我。" 她说。

"他来了。" 你说，"只是没等到。"

"那有什么区别呢？" 她问。

"有。" 你说，"来了，说明他心里有你。没等到，是周家不让。这不是你的错，也不是他的错。是周家的错。"

秀兰沉默了，然后把字条贴在心口。

"谢谢你。" 她说，"这是我三十年来，听过最安慰的话。"`,
        effects: {"sanity":10,"yin":-10,"removeItem":"婚床上的字条"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_use_stone_lion_name: {
        title: '石狮还名',
        text: `你取出石狮口中的名字团纸。

纸团上写着"秀兰"，被口水和泥土弄脏了。你把纸团清洗干净，在月光下展开。

"秀兰，" 你说，"你的名字，不该在石狮子嘴里。"

纸团化作一道红光，飞向井里。秀兰的身影浮出来，她的手腕上多了一根细细的红线。

"我感觉到了。" 她说，"我的名字回来了。"

"它本来就该是你的。" 你说。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"石狮口中的名字"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
