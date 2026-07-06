/**
 * 《tishen》场景模块：think
 */

export const scenes = {
    think_more: {
        title: '再想想',
        text: `你决定再想想。

你回到房间，打开灯，发现书桌上的相框倒了。照片是你大学毕业时和父母的合影。

你扶起相框，发现照片里的你，脸被划花了。划花的痕迹很新，像是不久前刚划的。

照片背面多了一行字：

[faded]"为什么你可以在外面笑，我只能在院子里站？"[/faded]

你握紧照片。纸人不仅有了意识，它还会嫉妒。`,
        effects: {
            sanity: -10,
            yin: 10
        },
        choices: [
            {
                text: '出去找纸人谈判',
                next: 'ask_doll_truth'
            }
        ]
    }
};
