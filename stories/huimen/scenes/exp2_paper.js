/**
 * 《回门》场景模块：exp2_paper
 */

export const scenes = {
    huimen_exp2_paper_boat_read: {
        title: '河边纸船',
        text: `你捡起一只纸船。

船身是用黄纸折的，上面写着一个名字："周氏秀兰"。字迹娟秀，是秀兰亲笔。

船舱里还有一张小纸条：

[faded]"愿此船载我魂，顺流归故乡。"[/faded]

[red]原来她也曾想让自己的魂顺着河水流出去。[/red]`,
        effects: {"sanity":-3,"yin":1},
        choices: [{"text":"把纸船放回河里","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_released_paper_boat"}},{"text":"把纸船收好","next":"huimen_exp2_riverbank","effects":{"yin":1,"addItem":"秀兰的纸船"}}],
    }
,
    huimen_exp2_paper_doll_origin: {
        title: '纸偶起源',
        text: `你在纸扎铺的地下室里发现一本古书。

书上记载着纸扎术的起源：很久以前，周家祖先为了逃避死亡，发明了一种把活人魂封进纸人的术法。第一个被封进去的，是一个叫"阿绣"的女子。

[red]纸扎术不是手艺，是囚魂术。[/red]`,
        effects: {"sanity":-10,"yin":3,"setFlag":"huimen_exp2_learned_paper_doll_origin"},
        choices: [{"text":"烧了古书","next":"huimen_exp2_paper_doll_origin_burn","effects":{"sanity":-5,"yin":5}},{"text":"把古书带走","next":"huimen_exp_paper_shop","effects":{"yin":1,"addItem":"纸扎术古书"}},{"text":"离开","next":"huimen_exp_paper_shop","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_doll_origin_burn: {
        title: '焚书',
        text: `你点燃古书。

书页在火中扭曲，发出许多女子的哭声。她们是被封在纸扎术里的魂，随着古书的焚毁，一个个飞出来。

"谢谢你。" 她们说，"我们终于可以不再做纸人了。"`,
        effects: {"sanity":-5,"yin":10,"setFlag":"huimen_exp2_burned_paper_doll_book"},
        choices: [{"text":"回纸扎铺","next":"huimen_exp_paper_shop","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_shop_basement: {
        title: '二层纸扎铺地下室',
        text: `你推开纸扎铺后屋的地板，发现一条向下的楼梯。

地下室里摆满了纸人，每一个纸人都长着周家男丁的脸。最里面的架子上，放着一具特别的纸人——它长着秀兰的脸。

[red]周家不仅扎替身，还扎新娘。[/red]`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"烧了秀兰的纸人","next":"huimen_exp2_paper_shop_basement_burn","effects":{"sanity":5,"yin":-5}},{"text":"把纸人带走","next":"huimen_exp_paper_shop","effects":{"yin":1,"addItem":"秀兰的纸人"}},{"text":"离开","next":"huimen_exp_paper_shop","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_shop_basement_burn: {
        title: '纸扎铺地下室焚偶',
        text: `你点燃秀兰的纸人。

纸人在火中扭曲，发出秀兰的尖叫。但叫声里没有痛苦，只有解脱。

"你烧了我最后一个替身。" 秀兰的声音说，"从今以后，周家再也不能复制我。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_burned_xiulan_paper_doll"},
        choices: [{"text":"回纸扎铺","next":"huimen_exp_paper_shop","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_shop_craftsman_doll: {
        title: '扎纸匠的最后一个纸人',
        text: `你再次来到纸扎铺，发现老人正在扎最后一个纸人。

纸人的脸是空白的，但身形纤细，像是一个女子。

"这是阿绣。" 老人说，"我扎了一辈子，这是最像的一个。"`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"帮他点睛","next":"huimen_exp2_paper_shop_craftsman_doll_eye","effects":{"sanity":5,"yin":-5}},{"text":"离开","next":"huimen_exp_paper_shop","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_shop_craftsman_doll_eye: {
        title: '点睛',
        text: `你拿起朱砂，帮纸人点上眼睛。

纸人的眼睛一睁开，就活了过来。它从柜台上走下来，朝老人伸出手。

"阿绣……" 老人颤抖着握住那只纸手。

纸人化作一道光，和老人一起飘出铺子，消失在夜空。`,
        effects: {"sanity":15,"yin":-15,"setFlag":"huimen_exp2_craftsman_reunited"},
        choices: [{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
