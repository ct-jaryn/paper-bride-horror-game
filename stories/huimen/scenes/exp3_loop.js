/**
 * 《回门》场景模块：exp3_loop
 */

export const scenes = {
    huimen_exp3_loop_stone: {
        title: '循环石碑',
        text: `你在村街尽头发现一块被青苔覆盖的石碑。石碑上刻着："入村者三，出村者一。走错重来，走对归一。"

你伸手擦去青苔，石碑表面浮现出三个箭头，分别指向老宅、井边、纸扎铺。`,
        effects: {"yin":1},
        choices: [{"text":"走老宅方向","next":"huimen_exp3_loop_mansion","effects":{"yin":1}},{"text":"走井边方向","next":"huimen_exp3_loop_well","effects":{"yin":1}},{"text":"走纸扎铺方向","next":"huimen_exp3_loop_paper","effects":{"yin":1}},{"text":"在石碑前等待","next":"huimen_exp3_loop_wait","effects":{"yin":0}}],
    }
,
    huimen_exp3_loop_wait: {
        title: '循环等待',
        text: `你站在石碑前，没有急着选。

夜风吹过，石碑上的青苔重新合拢，把三个箭头盖住了。你忽然发现，石碑底部还有一行小字："心不动，则路自现。"`,
        effects: {"sanity":3,"yin":0},
        choices: [{"text":"闭上眼睛","next":"huimen_exp3_loop_eyes_closed","effects":{"sanity":2,"yin":0}},{"text":"默念秀兰的名字","next":"huimen_exp3_loop_call_xiulan","effects":{"sanity":3,"yin":0}}],
    }
,
    huimen_exp3_loop_eyes_closed: {
        title: '循环闭眼',
        text: `你闭上眼睛。

耳边传来风声、水声、纸人的沙沙声，但你不为所动。渐渐地，所有声音都退远了，只剩自己的心跳。

心跳里，你听见秀兰轻声说："跟着我。"`,
        effects: {"sanity":5,"yin":0,"setFlag":"huimen_exp3_loop_heart"},
        choices: [{"text":"凭感觉走","next":"huimen_exp3_loop_path_heart","effects":{"yin":0}}],
    }
,
    huimen_exp3_loop_call_xiulan: {
        title: '念名',
        text: `你低声念出秀兰的名字。

名字像一粒石子投入井中，荡开涟漪。石碑上的青苔纷纷脱落，露出第四道箭头——它不是刻在石碑上，而是浮在空中，用月光凝成。

箭头指向村外。`,
        effects: {"sanity":5,"yin":0,"setFlag":"huimen_exp3_loop_moon_path"},
        choices: [{"text":"沿月光箭头走","next":"huimen_exp3_loop_moon_exit","effects":{"yin":0}}],
    }
,
    huimen_exp3_loop_mansion: {
        title: '老宅之路',
        text: `你走向老宅方向。

路越走越长，两边的房子越来越旧，最后变成一片废墟。废墟里站着许多纸人，它们朝你鞠躬，齐声说："周家的人，回来了。"

你意识到这是循环的一部分。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"继续走","next":"huimen_exp3_loop_mansion_deep","effects":{"yin":3}},{"text":"退回石碑","next":"huimen_exp3_loop_stone","effects":{"yin":1}}],
    }
,
    huimen_exp3_loop_well: {
        title: '井边之路',
        text: `你走向井边方向。

路越走越湿，脚下的石板渗出井水。你听见井底有人在唱歌，声音很熟悉，是秀兰常唱的那首童谣。

你走到井边，井水里映出的却不是你的脸，而是无数个你自己。`,
        effects: {"sanity":-3,"yin":4},
        choices: [{"text":"看井水里的自己","next":"huimen_exp3_loop_well_reflection","effects":{"yin":3}},{"text":"退回石碑","next":"huimen_exp3_loop_stone","effects":{"yin":1}}],
    }
,
    huimen_exp3_loop_paper: {
        title: '纸扎铺之路',
        text: `你走向纸扎铺方向。

纸扎铺的灯笼亮了，但铺子里没有人。柜台后摆满了纸人，每个纸人都长着你的脸。

"选一个替身，你就可以走了。"一个声音说。`,
        effects: {"sanity":-5,"yin":4},
        choices: [{"text":"拒绝选替身","next":"huimen_exp3_loop_paper_refuse","effects":{"sanity":3,"yin":1}},{"text":"选一个纸人","next":"huimen_exp3_loop_paper_chose","effects":{"yin":8}}],
    }
,
    huimen_exp3_loop_mansion_deep: {
        title: '废墟深处',
        text: `废墟深处有一口枯井，井沿上坐着一个小女孩。

她背对着你，正在用井水梳头。你走近时，她回过头——没有脸，只有一团漆黑。

"你走错了。"她说，"回去重来。"`,
        effects: {"sanity":-5,"yin":5},
        choices: [{"text":"问她怎么走对","next":"huimen_exp3_loop_mansion_ask","effects":{"yin":1}},{"text":"退回石碑","next":"huimen_exp3_loop_stone","effects":{"yin":1}}],
    }
,
    huimen_exp3_loop_well_reflection: {
        title: '水中倒影',
        text: `井水里的无数个你同时开口："留下来，陪我们。"

你感觉自己的意识在被拉扯，像是要分裂成很多份。你咬破舌尖，疼痛让你清醒过来。

"我不是你们。"你说，"我要出去。"`,
        effects: {"sanity":-5,"yin":5},
        choices: [{"text":"砸碎水面","next":"huimen_exp3_loop_well_smash","effects":{"sanity":3,"yin":2}},{"text":"退回石碑","next":"huimen_exp3_loop_stone","effects":{"yin":1}}],
    }
,
    huimen_exp3_loop_paper_refuse: {
        title: '拒替',
        text: `"我不需要替身。"你说。

纸人们齐声叹了口气，像是很失望。柜台后的布帘掀起，露出一条通往村街的小路。

"你心性够硬。"那个声音说，"回去吧，下次再来。"`,
        effects: {"sanity":5,"yin":-2},
        choices: [{"text":"回到石碑","next":"huimen_exp3_loop_stone","effects":{"yin":0}}],
    }
,
    huimen_exp3_loop_paper_chose: {
        title: '选替身',
        text: `你选了一个纸人。

纸人笑了，从柜台后面走出来，活动了一下手脚。它朝你鞠了一躬，然后推开铺门，走向村外。

你低头看自己的手，发现手指正在变纸。`,
        effects: {"sanity":-10,"yin":10},
        choices: [{"text":"挣扎","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":5}}],
    }
,
    huimen_exp3_loop_mansion_ask: {
        title: '问路',
        text: `"走对的路，不在地上。"无脸小女孩说，"在你心里。你心里装着谁，路就通向谁。"

她重新转过身，继续梳头。井水从她发梢滴落，在地上汇成一行字："想她。"`,
        effects: {"sanity":3,"yin":1},
        choices: [{"text":"想秀兰","next":"huimen_exp3_loop_path_heart","effects":{"sanity":3,"yin":0}}],
    }
,
    huimen_exp3_loop_well_smash: {
        title: '破水',
        text: `你捡起一块石头，砸向井水面。

水面碎成无数片，每一片里的你都尖叫着消散。井底传来秀兰的声音："快回来，别再看了。"

你退后几步，水面慢慢恢复平静，但那些倒影已经不见了。`,
        effects: {"sanity":5,"yin":-2},
        choices: [{"text":"回到石碑","next":"huimen_exp3_loop_stone","effects":{"yin":0}}],
    }
,
    huimen_exp3_loop_path_heart: {
        title: '心路',
        text: `你凭着心中的方向走，不再看路标。

脚下的石板时软时硬，两边的房屋时新时旧，但你没有停。你心里只想着一件事：带秀兰离开。

渐渐地，路变得平坦，天空泛起鱼肚白。`,
        effects: {"sanity":5,"yin":-3},
        choices: [{"text":"继续走","next":"huimen_exp3_loop_exit_dawn","effects":{"yin":0}}],
    }
,
    huimen_exp3_loop_moon_exit: {
        title: '月路尽头',
        text: `月光箭头指向一条蜿蜒的小路。

小路上没有纸人，没有白灯笼，只有清冷的月光和路边不知名的白花。你走了很久，走到天边泛起微光。

秀兰的身影出现在小路尽头。她说："你找到真正的路了。"`,
        effects: {"sanity":8,"yin":-5},
        choices: [{"text":"走向她","next":"huimen_exp3_loop_dawn_together","effects":{"yin":0}}],
    }
,
    huimen_exp3_loop_exit_dawn: {
        title: '黎明出口',
        text: `你走到小路的尽头，那里有一座石牌坊。

牌坊上刻着"回门"二字，但字迹已经风化，像是很多年没有人走过了。

你跨过牌坊，身后的山村忽然安静下来。你知道，循环被你打破了。`,
        effects: {"sanity":8,"yin":-5},
        choices: [{"text":"继续走","ending":"huimen_exp3_ending_dawn_return","effects":{"yin":0}}],
    }
,
    huimen_exp3_loop_dawn_together: {
        title: '黎明循环同行',
        text: `秀兰走在你身侧，身影越来越淡。

"我不能再往前了。"她说，"但你已经打破循环，可以出去了。"

她把一样东西塞进你手里——是她腕上那根红绳，现在已经断了。

"带着它，别再回来。"`,
        effects: {"sanity":5,"yin":-3,"addItem":"断红绳"},
        choices: [{"text":"独自离开","ending":"huimen_exp3_ending_dawn_return","effects":{"yin":0}},{"text":"说你会带她一起","next":"huimen_exp3_loop_dawn_bones","condition":{"hasItem":"秀兰的骨殖"},"effects":{"sanity":5,"yin":0}}],
    }
,
    huimen_exp3_loop_dawn_bones: {
        title: '携骨',
        text: `你把背上的骨殖抱到身前。

"我已经带你出来了。"你说，"不管是魂还是骨，我们一起走。"

秀兰的身影在晨光里颤抖。她伸出手，触碰骨殖，然后整个人化作一缕光，融入其中。

骨殖在你怀里变轻，最后只剩一件粉色的嫁衣。`,
        effects: {"sanity":10,"yin":-10},
        choices: [{"text":"离开山村","ending":"huimen_exp3_hidden_return_with_xiulan","effects":{"yin":0}}],
    }
};
