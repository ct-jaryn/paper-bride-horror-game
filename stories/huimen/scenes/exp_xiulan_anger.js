/**
 * 《回门》场景模块：exp_xiulan_anger
 * 秀兰的愤怒与释放
 */

export const scenes = {
    huimen_exp_xiulan_angry: {
        title: '秀兰的怒',
        text: `你问秀兰："你恨周家吗？"

秀兰的脸色变了。井里的水开始翻涌，像一锅沸腾的血。

"恨？" 她说，"我恨了三十年。我恨周文的母亲，恨那些村民，恨周家的每一块砖。"

"那你恨周文吗？"

她愣了一下，然后低下头："恨。也不恨。我恨他没有救我，可我明白他救不了我。"

[red]她的愤怒像井水一样汹涌，却也像井水一样深不见底。[/red]

"你想让我不恨吗？" 她问。

"不。" 你说，"你有权利恨。但别让恨把你永远困在这里。"`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"帮她发泄愤怒","next":"huimen_exp_xiulan_angry_release","effects":{"sanity":-5,"yin":-5}},{"text":"安静地陪她","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp_xiulan_angry_release: {
        title: '泄愤',
        text: `你捡起一块石头，递给秀兰。

"砸吧。" 你说，"把井壁砸碎，把恨都砸出来。"

秀兰接过石头——不，是阴气凝成的石头——砸向井壁。

"砰！砰！砰！" 每一声都像是三十年的控诉。

井壁上的符咒开始剥落，井水开始变清。秀兰砸了整整一百下，直到阴气耗尽，瘫坐在井底。

"够了。" 她说，"我不想再砸了。"

你坐在井沿，陪着她。天边的月亮，似乎亮了一些。`,
        effects: {"sanity":5,"yin":-10,"setFlag":"huimen_exp_xiulan_anger_released"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
