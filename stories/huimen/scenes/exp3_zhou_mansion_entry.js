/**
 * 《回门》场景模块：exp3_zhou_mansion_entry
 * 周家祖宅入口与后院
 */

export const scenes = {
    huimen_exp3_zhou_mansion_gate: {
        title: '祖宅侧门',
        text: `村街深处有一座黑瓦白墙的老宅，门楣上挂着"周府"的灯笼。灯笼纸已经发黄，里面没有火，却隐隐透出一团红。

门环是两只铜蝙蝠，翅膀交叠成"福"字。你走近时，左边的蝙蝠眼睛转了一下。`,
        effects: {"yin":2},
        choices: [{"text":"推门进去","next":"huimen_exp3_zhou_mansion_courtyard","effects":{"yin":2}},{"text":"先敲三下门","next":"huimen_exp3_zhou_mansion_knock","effects":{"yin":1}},{"text":"绕到后院","next":"huimen_exp3_zhou_mansion_backyard","effects":{"yin":1}}],
    },
    huimen_exp3_zhou_mansion_knock: {
        title: '三声门环',
        text: `你敲了三下。

门里没有脚步声，却有吱呀一声，门自己开了一条缝。缝里飘出一股檀香混着霉味的气味，像是有人刚在这里烧过纸。

一个苍老的声音说："进来吧，等你很久了。"`,
        effects: {"sanity":-2,"yin":2},
        choices: [{"text":"进门","next":"huimen_exp3_zhou_mansion_courtyard","effects":{"yin":1}}],
    },
    huimen_exp3_zhou_mansion_backyard: {
        title: '后院枯井',
        text: `你绕到后院，看见一口被石板盖住的枯井。

石板上刻着密密麻麻的小字，都是女子的名字。最中间一行是"秀兰"，名字被凿掉了一半，旁边填上了"周氏媳"。`,
        effects: {"yin":2,"sanity":-3},
        choices: [{"text":"用石头把\"周氏媳\"凿掉","next":"huimen_exp3_zhou_mansion_backyard_chisel","effects":{"sanity":5,"yin":-3}},{"text":"把石板掀开","next":"huimen_exp3_zhou_mansion_backyard_open","effects":{"yin":5}}],
    },
    huimen_exp3_zhou_mansion_backyard_chisel: {
        title: '祖宅后院还名',
        text: `石屑纷飞，"周氏媳"三个字一点点剥落。

当最后一笔被凿掉时，井底传来一声长长的叹息。石板上的"秀兰"二字泛起淡淡的红光，像是一个被解开的结。

你把凿下的石屑收进口袋。它们很轻，像烧过的纸灰。`,
        effects: {"sanity":5,"yin":-3,"setFlag":"huimen_exp3_restored_xiulan_name"},
        choices: [{"text":"去前院","next":"huimen_exp3_zhou_mansion_courtyard","effects":{"yin":1}}],
    },
    huimen_exp3_zhou_mansion_backyard_open: {
        title: '掀板',
        text: `石板很重，你用了全身力气才推开一条缝。

缝里涌出一股阴冷的风，风里夹着女人的哭声。你探头去看，井底没有水，只有层层叠叠的纸人，全都仰着脸，朝你露出一模一样的笑。

你赶紧把石板推回去，手还在发抖。`,
        effects: {"sanity":-8,"yin":8},
        choices: [{"text":"离开后院","next":"huimen_exp3_zhou_mansion_courtyard","effects":{"yin":1}}],
    }
};
