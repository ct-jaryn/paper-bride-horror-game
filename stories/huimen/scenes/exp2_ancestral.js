/**
 * 《回门》场景模块：exp2_ancestral
 */

export const scenes = {
    huimen_exp2_ancestral_women_wall_2: {
        title: '女墙之下',
        text: `你再次来到祖祠的女墙前。

这次你带了一支笔和一罐红漆。你一笔一画，把墙上三十七个女子的名字重新描红。

"秀兰"、"柳红"、"阿绣"、"云袖"……每一个名字被你描红时，都会发出一道微光。`,
        effects: {"sanity":-5,"yin":-5,"setFlag":"huimen_exp2_repainted_women_names"},
        choices: [{"text":"在墙前磕头","next":"huimen_exp2_ancestral_women_wall_bow","effects":{"sanity":10,"yin":-10}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_ancestral_women_wall_bow: {
        title: '叩墙',
        text: `你在女墙前跪下，重重磕了三个头。

"我周家后人，今日给你们正名。你们不是不祥女，你们是周家欠下的人。"

墙上的名字开始流动，像血一样从墙上渗出，在地上汇成一条小河。河水流向村外，流向自由。`,
        effects: {"sanity":15,"yin":-15,"setFlag":"huimen_exp2_bowed_at_women_wall"},
        choices: [{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
