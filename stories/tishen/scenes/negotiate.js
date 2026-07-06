/**
 * 《tishen》场景模块：negotiate
 */

export const scenes = {
    negotiate_doll: {
        title: '与纸人谈判',
        text: `"如果我不烧你，也不让你变成我，" 你说，"有没有第三条路？"

纸人想了想："有。你带我走。"

"带你走？"

"带我离开这个院子。" 纸人说，"你爸的咒把我困在这里。只要你带我出去，让我见见外面的世界，我就告诉你怎么解开我和你爸的联系。"

"然后你就自由了？"

"也许吧。" 纸人说，"至少我能选择自己的结局。"`,
        effects: {
            yin: 5
        },
        choices: [
            {
                text: '答应带它走',
                next: 'take_doll_away',
                effects: { setFlag: 'takeDollAway' }
            },
            {
                text: '拒绝，把它封在院子里',
                next: 'seal_doll_in_yard'
            }
        ]
    }
};
