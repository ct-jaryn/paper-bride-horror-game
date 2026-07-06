/**
 * 《回门》场景模块：exp2_river_god
 */

export const scenes = {
    huimen_exp2_river_god: {
        title: '河神石',
        text: `你在河边发现一块巨大的石头。

石头立在河中央，上面刻着"河神之位"四个字。石头周围漂着许多纸船，每只船上都写着一个名字。

你走近石头，发现石头上有一道裂缝，缝里渗出黑色的液体，像血，又像墨。`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"把手放在石头上","next":"huimen_exp2_river_god_touch","effects":{"yin":3}},{"text":"在石头上刻字","next":"huimen_exp2_river_god_carve","effects":{"yin":-3}},{"text":"把纸船推开","next":"huimen_exp2_river_god_boats","effects":{"yin":2}},{"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}}],
    }
,
    huimen_exp2_river_god_touch: {
        title: '河神之触',
        text: `你把手放在石头上。

石头很冰，冰得刺骨。你感到有什么东西从石头里钻出来，顺着你的手臂往上爬。

"又一个周家的人。" 一个苍老的声音说，"你们周家欠这条河太多命。"

"我来还债。" 你说。

"那就把你的名字刻上来。" 河神说，"刻一个名字，还一条命。"`,
        effects: {"sanity":-8,"yin":5},
        choices: [{"text":"刻秀兰的名字","next":"huimen_exp2_river_god_carve_xiulan","effects":{"sanity":5,"yin":-10}},{"text":"刻自己的名字","next":"huimen_exp2_river_god_carve_self","effects":{"yin":10}}],
    }
,
    huimen_exp2_river_god_carve_xiulan: {
        title: '河石刻名',
        text: `你用手指在石头上刻下"周氏秀兰"四个字。

石头开始震动，黑色的液体从裂缝里涌出，却不是血，而是像墨水一样的东西。河面上的纸船纷纷让开，露出河底的一块青石。

"你替她还了船钱。" 河神说，"她可以渡河了。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_paid_xiulan_river_fare"},
        choices: [{"text":"送秀兰渡河","ending":"huimen_exp2_ending_river_god","effects":{"yin":-5}},{"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}}],
    }
,
    huimen_exp2_river_god_carve_self: {
        title: '刻己',
        text: `你刻下自己的名字。

石头吸收了你的名字，你感到自己的生命力在流失。河神的声音变得满意："好，又一条命。"

[red]你成了周家又一个献祭给河的人。[/red]`,
        effects: {"sanity":-15,"yin":10},
        choices: [{"text":"挣脱","next":"huimen_exp2_riverbank","effects":{"sanity":-5,"yin":3}},{"text":"放弃","ending":"huimen_exp2_ending_village_head_judge","effects":{"yin":5}}],
    }
,
    huimen_exp2_river_god_carve: {
        title: '刻石',
        text: `你捡起一块尖锐的石头，在河神石上刻字。

你刻下"无辜"二字。石头发出一声哀鸣，裂缝里的黑液开始变清。

"你刻的是什么？" 河神问。

"真相。" 你说。`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp2_carved_river_god"},
        choices: [{"text":"继续刻","next":"huimen_exp2_river_god_carve_more","effects":{"sanity":-3,"yin":-3}},{"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}}],
    }
,
    huimen_exp2_river_god_carve_more: {
        title: '刻满',
        text: `你继续刻，刻下"秀兰、柳红、阿绣、云袖……"所有你能记住的名字。

河神石开始裂开，黑色的液体全部涌出，化作许多女子的身影。她们朝你鞠躬，然后顺着河水漂向远方。

"你替我们把名字刻在了河上。" 她们说，"河水会记住我们。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_carved_all_names_on_river"},
        choices: [{"text":"回河边","next":"huimen_exp2_riverbank","effects":{"yin":1}}],
    }
,
    huimen_exp2_river_god_boats: {
        title: '推船',
        text: `你把河神石周围的纸船一一推开。

每只船被你推开时，都会发出一声轻轻的叹息。你忽然意识到，这些船不是被困在这里，而是在等一个愿意推它们走的人。

"谢谢你。" 一个声音说，"我们等了三十年，终于等到有人愿意让我们走。"`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"继续推","next":"huimen_exp2_riverbank","effects":{"sanity":3,"yin":-3}},{"text":"离开","next":"huimen_exp2_riverbank","effects":{"yin":1}}],
    }
};
