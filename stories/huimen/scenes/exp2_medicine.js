/**
 * 《回门》场景模块：exp2_medicine
 */

export const scenes = {
    huimen_exp2_medicine_shop: {
        title: '药铺',
        text: `你来到一间破败的药铺前。

药柜上的抽屉大多已经腐烂，地上散落着各种药材。空气中弥漫着一股苦涩的药味。

柜台后面挂着一块匾额，上面写着"悬壶济世"，但"世"字被人用刀划掉了。`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"翻看药柜","next":"huimen_exp2_medicine_drawer","effects":{"yin":1}},{"text":"查看柜台下的账本","next":"huimen_exp2_medicine_account","effects":{"yin":1}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_medicine_drawer: {
        title: '药柜',
        text: `你拉开一个药柜抽屉。

里面没有药材，只有一叠黄纸，纸上写着许多人的名字和生辰八字。你翻到最后，找到了秀兰的名字。

纸条背面写着："堕胎药一剂，银元三枚。"`,
        effects: {"sanity":-8,"yin":3,"addItem":"药铺堕胎记录"},
        choices: [{"text":"把记录收好","next":"huimen_exp2_medicine_shop","effects":{"yin":1}},{"text":"烧掉记录","next":"huimen_exp2_medicine_shop","effects":{"sanity":5,"yin":-3}}],
    }
,
    huimen_exp2_medicine_account: {
        title: '账本',
        text: `你翻开柜台下的账本。

账本上记载着药铺三十年的生意。最后一页写着："民国二十三年中秋前夜，周家取堕胎药一副，用于不祥女秀兰。"

[red]原来连药铺都是帮凶。[/red]`,
        effects: {"sanity":-5,"yin":2,"setFlag":"huimen_exp2_read_medicine_account"},
        choices: [{"text":"把账本带走","next":"huimen_exp2_medicine_shop","effects":{"yin":1,"addItem":"药铺账本"}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_medicine_secret: {
        title: '药铺密室',
        text: `你在药铺的柜台后发现一道暗门。

暗门后是一间小密室，墙上挂着许多女子的画像。每一幅画像下面都摆着一碗黑乎乎的药渣。

[red]这些药渣，是周家给"不祥女"喝的堕胎药。[/red]`,
        effects: {"sanity":-10,"yin":5},
        choices: [{"text":"砸碎药碗","next":"huimen_exp2_medicine_secret_smash","effects":{"sanity":-5,"yin":5}},{"text":"把画像翻过来","next":"huimen_exp2_medicine_secret_turn","effects":{"yin":-5}},{"text":"离开","next":"huimen_exp2_medicine_shop","effects":{"yin":1}}],
    }
,
    huimen_exp2_medicine_secret_smash: {
        title: '砸碗',
        text: `你砸碎药碗。

药渣飞溅，化作许多女子的哭声。墙上的画像开始抖动，像是要从画里走出来。

"你砸了我们的药。" 她们说，"我们不用再喝了。"`,
        effects: {"sanity":-5,"yin":10,"setFlag":"huimen_exp2_smashed_medicine_bowls"},
        choices: [{"text":"离开","next":"huimen_exp2_medicine_shop","effects":{"yin":1}}],
    }
,
    huimen_exp2_medicine_secret_turn: {
        title: '翻画像',
        text: `你把画像翻过来。

画像背面写着每个女子的真实姓名和生辰，以及一句话："我本无辜。"

你把它们一一念出来。每念一个，画像上的女子就笑一下，然后消失。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_read_medicine_portraits"},
        choices: [{"text":"离开","next":"huimen_exp2_medicine_shop","effects":{"yin":1}}],
    }
};
