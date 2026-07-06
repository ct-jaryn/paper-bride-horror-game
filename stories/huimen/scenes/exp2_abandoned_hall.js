/**
 * 《回门》场景模块：exp2_abandoned_hall
 */

export const scenes = {
    huimen_exp2_abandoned_hall: {
        title: '废弃祠堂',
        text: `你来到一座废弃的祠堂前。

祠堂的屋顶塌了一半，门上的漆剥落殆尽。你走进去，发现里面没有牌位，只有一面墙，墙上画着许多女子的画像。

每一个女子都穿着嫁衣，脸上却没有五官。画像下方写着她们的名字：秀兰、柳红、阿绣、云袖……`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"给画像补上五官","next":"huimen_exp2_abandoned_hall_draw","effects":{"sanity":-5,"yin":-5}},{"text":"在画像前烧香","next":"huimen_exp2_abandoned_hall_incense","effects":{"yin":-3}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_abandoned_hall_draw: {
        title: '补脸',
        text: `你捡起地上的木炭，给每一幅画像补上五官。

你画得很慢，很认真。秀兰的眼睛、柳红的眉、阿绣的嘴、云袖的鼻……你一边画，一边念她们的名字。

画完最后一笔，墙上的画像似乎都活了。她们朝你微笑，然后画像上的颜色一点点褪去，露出底下洁白的墙。`,
        effects: {"sanity":-5,"yin":-10,"setFlag":"huimen_exp2_drew_faces_for_women"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_abandoned_hall_incense: {
        title: '上香',
        text: `你在地上找到几支没烧完的香，点燃，插在画像前。

烟雾升起，在空中凝成许多女子的身影。她们朝你鞠躬，然后消散。

"谢谢你。" 秀兰的声音说，"她们终于被人看见了。"`,
        effects: {"sanity":5,"yin":-10,"setFlag":"huimen_exp2_burned_incense_for_women"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
