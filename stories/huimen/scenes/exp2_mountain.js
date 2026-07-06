/**
 * 《回门》场景模块：exp2_mountain
 */

export const scenes = {
    huimen_exp2_mountain_path: {
        title: '山路',
        text: `你踏上一条通往后山的小路。

路两旁是茂密的竹林，竹叶在风中沙沙作响，像无数人在低声说话。月光透过竹缝洒下来，在地上形成斑驳的影子。

你走了很久，发现路越来越窄，最后停在一座石牌坊前。

牌坊上刻着"周家禁地"四个字。`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"穿过牌坊","next":"huimen_exp2_mountain_path_in","effects":{"yin":2}},{"text":"绕路走","next":"huimen_exp2_mountain_path_around","effects":{"yin":1}},{"text":"继续往山路深处走","next":"huimen_exp2_mountain_path_deep","effects":{"yin":2}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_path_in: {
        title: '禁地',
        text: `你穿过牌坊。

里面的景象和外面完全不同。没有竹林，只有一片荒凉的石滩。石滩上立着许多石碑，每一块碑上都刻着一个名字。

你走近看，发现这些名字都是女子的名字。秀兰、柳红、阿绣、云袖……还有更多你不认识的。

[red]这是周家真正的祖坟。男人埋在村里，女人埋在这里。[/red]`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"在碑前磕头","next":"huimen_exp2_mountain_path_bow","effects":{"sanity":5,"yin":-5}},{"text":"寻找秀兰的碑","next":"huimen_exp2_mountain_path_xiulan","effects":{"yin":1}},{"text":"离开","next":"huimen_exp2_mountain_path","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_path_bow: {
        title: '山路祭拜',
        text: `你在每一块碑前都磕了一个头。

"我不知道你们的名字。" 你说，"但我知道你们受过委屈。我替周家给你们磕头。"

石碑开始微微颤动，像是有许多人在哭泣。天边的月亮似乎亮了一些。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_bowed_at_women_graves"},
        choices: [{"text":"继续寻找秀兰","next":"huimen_exp2_mountain_path_xiulan","effects":{"yin":1}},{"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_path_xiulan: {
        title: '秀兰之碑',
        text: `你找到秀兰的碑。

碑上没有名字，只有一行字："周氏不祥女之墓"。碑前放着一束枯萎的桂花。

你跪在碑前，用手把"不祥女"三个字擦掉。

"你不是不祥女。" 你说，"你是周秀兰。"`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp2_found_xiulan_mountain_grave"},
        choices: [{"text":"把碑上的字改过来","next":"huimen_exp2_mountain_path_rename","effects":{"sanity":5,"yin":-5}},{"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_path_rename: {
        title: '山路正名',
        text: `你咬破手指，在碑上写下：

"周氏秀兰之墓。民国三年生，民国二十三年卒。周家后人立。"

血字渗入石碑，发出淡淡的红光。你感到有许多目光落在身上，那些目光里不再有怨，只有感激。

[red]你帮她们每一个人，拿回了名字。[/red]`,
        effects: {"sanity":15,"yin":-15,"setFlag":"huimen_exp2_renamed_mountain_grave"},
        choices: [{"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_path_around: {
        title: '绕路',
        text: `你绕开牌坊，从竹林里穿行。

竹林很深，你走了很久，忽然听见前方传来水声。你拨开竹子，看见一条小溪。

溪水里漂着许多纸船，每只船上都写着"秀兰"。`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"沿着溪走","next":"huimen_exp2_riverbank","effects":{"yin":1}},{"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_path_deep: {
        title: '山路深处',
        text: `你继续往山路深处走。

路越来越陡，两旁的竹子变成了枯骨一样的白色。你听见山顶传来钟声，沉闷而悠长，每响一声，地面就震动一下。

前方有一座小庙，庙门上挂着一块匾，匾上写着"送子观音"。`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"进庙","next":"huimen_exp2_mountain_temple","effects":{"yin":2}},{"text":"绕过庙继续走","next":"huimen_exp2_mountain_path_peak","effects":{"yin":2}},{"text":"回山路","next":"huimen_exp2_mountain_path","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_temple: {
        title: '送子庙',
        text: `你走进庙里。

庙里没有观音像，只有许多泥塑的婴儿。它们排列在神龛上，每一个都闭着眼，嘴角却带着笑。

[red]这是周家求子的地方。每一个泥塑婴儿，都代表一个被借走命的孩子。[/red]`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"砸碎泥塑","next":"huimen_exp2_mountain_temple_smash","effects":{"sanity":-5,"yin":5}},{"text":"给泥塑取名","next":"huimen_exp2_mountain_temple_name","effects":{"sanity":5,"yin":-5}},{"text":"离开","next":"huimen_exp2_mountain_path_deep","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_temple_smash: {
        title: '砸像',
        text: `你举起一块石头，砸向泥塑婴儿。

泥塑碎裂，里面掉出一缕头发。每砸一个，就有一股黑烟冒出来，化作一个小孩的虚影，朝你鞠躬，然后飞走。

"你放了他们。" 秀兰的声音说，"周家再也不能用他们续命了。"`,
        effects: {"sanity":-5,"yin":5,"setFlag":"huimen_exp2_smashed_baby_statues"},
        choices: [{"text":"继续砸","next":"huimen_exp2_mountain_temple","effects":{"yin":2}},{"text":"离开","next":"huimen_exp2_mountain_path_deep","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_temple_name: {
        title: '取名',
        text: `你对着泥塑婴儿们，一个一个取名。

"大宝、二宝、三宝……" 你编了许多名字。每取一个，泥塑的笑容就更真一些。

"我们有名字了。" 一个声音说，"有名字，就能找到回家的路。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_named_baby_statues"},
        choices: [{"text":"离开","next":"huimen_exp2_mountain_path_deep","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_path_peak: {
        title: '山顶',
        text: `你绕过庙，来到山顶。

山顶有一块平地，平地上立着一根巨大的石柱。石柱上刻满了名字，男子的名字是凸出来的，女子的名字是凹进去的。

你伸手去摸一个凹进去的名字，指尖传来一阵刺痛。`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"把女子的名字刻深","next":"huimen_exp2_mountain_peak_names","effects":{"sanity":-5,"yin":3}},{"text":"在石柱前立誓","ending":"huimen_exp2_ending_mountain_pact","effects":{"yin":-5}},{"text":"离开","next":"huimen_exp2_mountain_path_deep","effects":{"yin":1}},{"text":"在石柱下发现一粒桂花种子","next":"huimen_exp2_mountain_seed","condition":{"flag":"huimen_exp2_deepened_mountain_names"},"effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_peak_names: {
        title: '刻深',
        text: `你用手指去抠那些凹进去的女子名字。

指甲翻了，血渗进石柱的缝隙里。可你没有停，你一个名字一个名字地抠，把它们抠深，抠清晰。

石柱开始颤抖，发出周家祖先的怒吼。但你不管。

"她们的名字，应该比你们的更深。" 你说。`,
        effects: {"sanity":-10,"yin":5,"setFlag":"huimen_exp2_deepened_mountain_names"},
        choices: [{"text":"下山","next":"huimen_exp2_mountain_path","effects":{"yin":1}}],
    }
,
    huimen_exp2_mountain_seed: {
        title: '山顶种籽',
        text: `你在山顶石柱下发现一粒种子。

种子是黑色的，像一颗小小的石头。你把它捡起来，感到一阵温暖。

"那是我的桂花树种。" 秀兰的声音说，"我死前把它埋在后山，希望来世能闻到桂花香。"`,
        effects: {"sanity":-3,"yin":1,"addItem":"秀兰的桂花种子"},
        choices: [{"text":"把种子种在秀兰坟前","ending":"huimen_exp2_ending_seed","effects":{"yin":-5}},{"text":"把种子带在身上","next":"huimen_exp2_mountain_path_peak","effects":{"yin":1}}],
    }
};
