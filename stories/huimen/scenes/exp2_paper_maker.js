/**
 * 《回门》场景模块：exp2_paper_maker
 */

export const scenes = {
    huimen_exp2_paper_maker_house: {
        title: '纸扎匠家',
        text: `你来到纸扎匠的住处。

屋子比纸扎铺还要破旧，墙上贴满了画废的脸谱。屋里有一张床，床上放着一个没有完成的纸人，纸人的脸是空白的。

床头挂着一幅画像，画像上是一个年轻的女子，笑得很甜。画像下方写着"阿绣"。

[red]这是扎纸匠一生唯一的牵挂。[/red]`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"查看未完成的纸人","next":"huimen_exp2_paper_maker_doll","effects":{"yin":2}},{"text":"翻看床头的日记","next":"huimen_exp2_paper_maker_diary","effects":{"yin":1}},{"text":"对着画像说话","next":"huimen_exp2_paper_maker_painting","effects":{"yin":1}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_maker_doll: {
        title: '未完成的纸人',
        text: `你走近那个未完成的纸人。

纸人的身材纤细，不像男子，更像女子。纸人的胸口写着"阿绣"二字。

"我想给她扎一个身体。" 扎纸匠的声音从背后传来，"这样她就能从画里走出来，和我说话了。"

你转身，看见老人站在门口，眼眶里的墨渍湿润了。`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"帮他完成纸人","next":"huimen_exp2_paper_maker_finish","effects":{"sanity":5,"yin":-3}},{"text":"告诉他阿绣已经解脱","next":"huimen_exp2_paper_maker_release","condition":{"flag":"huimen_exp2_axiu_released"},"effects":{"sanity":10,"yin":-10}},{"text":"离开","next":"huimen_exp2_paper_maker_house","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_maker_finish: {
        title: '完成纸人',
        text: `你帮扎纸匠给纸人画上眉眼。

你画得并不好，但老人很满意。他抱起纸人，轻轻放在床上。

"阿绣，" 他说，"你看，有人愿意帮我完成你。"

纸人的嘴角似乎动了动，像是在笑。`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp2_finished_axiu_doll"},
        choices: [{"text":"查看日记","next":"huimen_exp2_paper_maker_diary","effects":{"yin":1}},{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_maker_release: {
        title: '纸匠解脱',
        text: `你告诉扎纸匠："阿绣已经解脱了。她去了一个没有周家的地方。"

老人愣了很久，然后笑了。他拿起枕下的遗书，递给你。

"那我也该走了。" 他说，"请你帮我把这个烧了。"

你接过遗书，感到它的分量。`,
        effects: {"sanity":5,"yin":-5,"addItem":"纸扎匠遗书"},
        choices: [{"text":"烧掉遗书","ending":"huimen_exp2_ending_paper_maker_truth","effects":{"yin":-5}},{"text":"收好","next":"huimen_exp2_paper_maker_house","effects":{"yin":1}}],
    }
,
    huimen_exp2_paper_maker_diary: {
        title: '纸匠日记',
        text: `你翻开床头的日记。

日记里记载着扎纸匠的一生。每一页都在念叨阿绣：

[faded]"今日扎纸人第七十三个，仍不像阿绣。"[/faded]
[faded]"阿绣，我若能早一日带你走，你也不会沉塘。"[/faded]
[faded]"秀兰死了，又一个女子死了。周家的债，什么时候能还完？"[/faded]

最后一页写着："我扎不动了。愿以纸骨，换阿绣来生。"`,
        effects: {"sanity":-5,"yin":2,"setFlag":"huimen_exp2_read_paper_maker_diary"},
        choices: [{"text":"把日记收好","next":"huimen_exp2_paper_maker_house","effects":{"yin":1,"addItem":"纸扎匠日记"}},{"text":"烧了日记","next":"huimen_exp2_paper_maker_house","effects":{"sanity":5,"yin":-3}}],
    }
,
    huimen_exp2_paper_maker_painting: {
        title: '画像',
        text: `你对着阿绣的画像说："阿绣，扎纸匠一直在等你。如果你听见了，就去见他吧。"

画像上的女子眨了眨眼，然后笑了。她的笑容从画里渗出来，化作一道光，飘向祖坟地的方向。

扎纸匠推门而入，正好看见那道光。他追出去，一边跑一边喊："阿绣！阿绣！"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_called_axiu_from_painting"},
        choices: [{"text":"跟着去祖坟地","next":"huimen_exp2_graveyard","effects":{"yin":1}},{"text":"留在屋里","next":"huimen_exp2_paper_maker_house","effects":{"yin":1}}],
    }
};
