/**
 * 《heniang》场景模块：use
 */

export const scenes = {
    use_incense_ash: {
        title: '用香灰',
        text: `你掏出香灰，撒向秀姑。

香灰碰到她的身体，发出"嗤嗤"的声音。秀姑惨叫一声，退入水底。

你趁机逃跑，一路跑到神婆家。

神婆看着你狼狈的样子，摇摇头："你用香灰伤了她，她更不会放你妈了。"

"那怎么办？"

"没办法了。" 神婆说，"除非你比她更狠。"`,
        effects: {
            sanity: -10,
            yin: 15
        },
        choices: [
            {
                text: '问怎么比她更狠',
                next: 'ask_how_cruel'
            }
        ]
    }
};
