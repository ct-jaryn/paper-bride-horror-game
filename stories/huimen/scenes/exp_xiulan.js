/**
 * 《回门》场景模块：exp_xiulan
 */

export const scenes = {
    huimen_exp_show_xiulan_photo: {
        title: '给秀兰看旧照',
        text: `你拿出照片，对着空气说："秀兰，这是你的照片。"

一阵风吹过，照片从你手里飞出去，悬在半空中。照片里的秀兰开始动，她眨了眨眼，然后笑了。

"我都忘了，我以前长这样。" 她的声音从照片里传出来，"那时候，我还想着要考女校呢。"

照片缓缓落到你手里，背面多了一行字：

[faded]"愿来生，生于寻常人家。"[/faded]

你感到照片上的温度，像是一个人的体温。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"秀兰旧照片","setFlag":"huimen_exp_showed_photo"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_xiulan_forgive: {
        title: '原谅',
        text: `你对着黑暗说："秀兰，对不起。周家对不起你。我会让所有人知道你的事。"

黑暗里亮起一点光。秀兰的身影出现在光里，她没有盖头，没有血泪，只是一个疲惫的姑娘。

"我不要所有人的知道。" 她说，"我只要你记得。"

你点点头："我记得。"

她伸出手，轻轻摸了摸你的脸。那只手很凉，但你没有躲。

"你和他很像。" 她说，"但你比他勇敢。"

光灭了。你发现自己站在村街上，天边的月亮似乎亮了一些。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"xiulanMercy"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
