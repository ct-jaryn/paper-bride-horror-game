/**
 * 《回门》场景模块：exp_wedding
 */

export const scenes = {
    huimen_exp_cut_bride_string: {
        title: '断红绳',
        text: `你用剪刀剪断了新娘手腕上的红绳。

红绳断裂的瞬间，新娘发出一声长长的叹息。她的腐烂开始消退，露出一张清秀的脸。

"谢谢你。" 她说，"我终于可以走了。"

她化作一道白光，从窗户飞出去。屋子里其他的红灯笼一盏盏熄灭，每一盏熄灭时，都传来一声解脱的叹息。

你走出朱门，发现巷子里的雾淡了许多。`,
        effects: {"sanity":10,"yin":-10,"removeItem":"缠发剪刀"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_wedding_procession: {
        title: '迎亲队',
        text: `你听见唢呐声。

一队纸人抬着红轿子从巷子里出来，吹鼓手也是纸人，唢呐里没有气，却发出凄厉的乐声。

纸人们看见你，停了下来。

"新郎官，上轿吧。" 为首的纸人说。

轿帘掀开，里面坐着一个盖着红盖头的人。盖头下伸出一只苍白的手，朝你招了招。

[red]你不上去，它们就不走。[/red]`,
        effects: {"sanity":-10,"yin":3,"visual":"paper-doll","visualDuration":2000},
        choices: [{"text":"掀翻轿子","next":"huimen_exp_overturn_palanquin","effects":{"sanity":-5,"yin":3}},{"text":"把纸人引到纸扎铺","next":"huimen_exp_lead_to_paper_shop","condition":{"flag":"huimen_exp_burned_paper_faces"},"effects":{"sanity":5,"yin":-5}},{"text":"上轿","next":"huimen_exp_enter_palanquin","effects":{"sanity":-15,"yin":5}}],
    }
,
    huimen_exp_overturn_palanquin: {
        title: '掀轿',
        text: `你冲上去，掀翻了红轿子。

轿子落地，里面的新娘滚了出来。盖头滑落，露出一张腐烂的脸——不是秀兰，是一个你不认识的老妇人。

"不是你？" 纸人们发出失望的叹息，"不是你……"

它们开始融化，像被雨淋湿的纸人一样瘫软在地上。轿子也塌了，变成一堆红黄相间的纸。

老妇人的魂飘起来，朝你鞠了一躬："谢谢。我等了三十年，终于有人敢掀轿了。"`,
        effects: {"sanity":-5,"yin":-5},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_enter_palanquin: {
        title: '上轿',
        text: `你上了轿子。

轿帘落下，里面很黑。新娘坐在你旁边，盖头下的呼吸喷在你脖子上，冰凉。

"你终于来了。" 她说，"我等了你好久。"

她靠在你身上，你感到自己的体温在被吸走。你的手脚开始变纸，皮肤开始发白。

[red]你明白了，上轿的人，都会变成新的纸人新郎。[/red]

轿子外，唢呐声越来越响，像在庆祝一场迟到三十年的婚礼。`,
        effects: {"sanity":-20,"yin":10},
        ending: 'huimen_exp_paper_doll',
    }
,
    huimen_exp_bride_link_alt: {
        title: '红嫁衣',
        text: `你带走了柳红的嫁衣。

两件红嫁衣叠在一起，一件写着"秀兰"，一件写着"柳红"。她们隔着时空，成了同命相连的姐妹。

你离开山村后，把柳红的嫁衣交给了赶尸匠田小七。他看着嫁衣上的"柳"字，沉默了很久。

"我会带她回家。"他说。`,
        choices: [{"text":"让她们不再孤单","ending":"hidden_brideLink"}],
    }
,
    huimen_exp_bride_veil_alt: {
        title: '盖头',
        text: `你捡起了秀兰的红盖头。

那盖头不是给你盖的，是给她自己盖的。她盖了三十年，因为死的时候，没有人愿意看她的脸。

你轻轻掀开盖头，看见了一个清秀的姑娘，眼角有一颗小小的泪痣。

"我好看吗？"她问。

"好看。"你说。

她把盖头收好，递给你："帮我烧了。我不想再盖着了。"`,
        choices: [{"text":"烧了盖头","ending":"hidden_brideVeil"}],
    }
};
