/**
 * 《ganshi》场景模块：suppress
 */

export const scenes = {
    suppress_again: {
        title: '再次镇压',
        text: `你迅速用新的黄符贴在尸体额头，又在他身上撒了一把糯米。

尸体的挣扎渐渐停止，最后直挺挺地站着不动了。

你大口喘气，浑身冷汗。

另外两具尸体也开始躁动。他们的黄符下，都有黑色的液体渗出。

[red]这三具尸体，都有冤。[/red]

你意识到，这一单不是普通的赶尸。这是一场阴谋。有人想让你和尸体一起，消失在半路。`,
        effects: {
            sanity: -15,
            yin: 15
        },
        choices: [
            {
                text: '改变路线，去县城报官',
                next: 'go_to_county'
            },
            {
                text: '直接回委托人家质问',
                next: 'confront_client'
            }
        ]
    }
};
