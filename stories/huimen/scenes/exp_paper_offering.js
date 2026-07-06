/**
 * 《回门》场景模块：exp_paper_offering
 */

export const scenes = {
    huimen_exp_paper_offering: {
        title: '扎嫁妆',
        text: `你坐在柜台前，开始为秀兰扎嫁妆。

你记得小时候祖母教过你糊纸人。竹篾做骨，黄纸做肉，朱砂点睛。你扎了一座纸轿子，一身纸嫁衣，一对纸鞋，还有一把纸扇。

每扎完一件，你就在上面写下"周氏秀兰"四个字。

老人在旁边看着，眼眶里的墨渍似乎湿润了："三十年了，第一次有人给她扎嫁妆。"

"周家欠她的。" 你说。

老人点点头，从柜台下取出一盒朱砂："用这个。这是正经的喜砂，不是给死人用的。"`,
        effects: {"sanity":10,"yin":-5,"setFlag":"huimen_exp_made_paper_offering"},
        choices: [{"text":"去村口把这些烧了","next":"huimen_exp_paper_offering_burn","effects":{"yin":1}},{"text":"先收着，以后用","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_paper_offering_burn: {
        title: '纸供成灰',
        text: `你捧着纸嫁妆来到村口。

村口的老槐树下，那两个纸扎人还在。你把纸轿子、纸嫁衣、纸鞋、纸扇一件件摆在它们面前，用火点燃。

火光不是红色的，而是淡淡的金色。纸灰被风吹起，在空中旋转，像一只只蝴蝶。

[whisper]"谢谢你。"[/whisper] 秀兰的声音从火里传来，"这是我第一次，堂堂正正地穿上嫁衣。"

纸扎人倒下了。它们的纸壳里空空如也，只有两根红绳从手腕垂落，像两条死去的蛇。

你感到胸口的压抑轻了许多。`,
        effects: {"sanity":15,"yin":-15,"clearFlag":"huimen_exp_made_paper_offering"},
        ending: 'huimen_exp_paper_offering',
    }
,
    huimen_exp_paper_offering_alt: {
        title: '嫁妆',
        text: `你走进纸扎铺，亲手给秀兰扎了一套嫁妆。

纸轿子、纸衣裳、纸首饰、一对小小的纸鞋。你在每件东西上都写上"周氏秀兰"四个字。

然后你把它们堆在村口，一把火烧了。

火光里，秀兰穿上了那身纸嫁衣。她不再是浑身湿透的怨鬼，而是一个清清爽爽的新娘。

"这是我第一次，堂堂正正地穿上嫁衣。"她说。`,
        choices: [{"text":"送她出嫁","ending":"huimen_exp_paper_offering"}],
    }
};
