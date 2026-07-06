/**
 * 《xitai》场景模块：mirror
 */

export const scenes = {
    mirror_photo: {
        title: '镜中留影',
        text: `你举起相机，对准那面镜子。

闪光灯亮起的瞬间，镜子里的小生戏服男人猛地抬起头。他没有五官的脸正对着镜头，像是在笑。

[red]咔嚓。[/red]

相机里吐出一张照片。你低头一看，照片上不是镜子，而是一张戏台。

戏台上，一个穿红戏服的女子正在唱《惊梦》。她身边站着一个穿小生戏服的男人，但男人的脸被划掉了，只剩一个血红的"死"字。

照片背面，有人用钢笔写着一行小字：

[faded]"民国二十三年，青石镇大戏台。云袖殁，周生殉。戏不散，魂不归。"[/faded]

你忽然明白，这戏台不是荒废了二十年。它是被封印了二十年。`,
        effects: {
            sanity: -15,
            yin: 10,
            setFlag: 'knowsStageTruth'
        },
        choices: [
            {
                text: '把照片收好，继续调查',
                next: 'ask_villagers'
            },
            {
                text: '烧了这张照片',
                next: 'burn_photo',
                effects: { sanity: 5, yin: -5 }
            }
        ]
    },

    // 烧照片（新增场景）
};
