/**
 * 《ganshi》场景模块：promise
 */

export const scenes = {
    promise_revenge_corpse: {
        title: '承诺为她报仇',
        text: `"我送你回县上，让你尸体公之于众。" 你说，"你的冤，我替你申。"

尸体的眼睛慢慢闭上，黑色的液体也停止了流淌。

"谢谢……" 它说，"但……不止我一个……"

它指的是旁边的青年尸体，还有女尸。

你看向另外两具尸体。青年尸体的黄符下，似乎也在流泪。女尸的白布被风吹动，像是在点头。`,
        effects: {
            sanity: -5,
            setFlag: 'promisedJustice'
        },
        choices: [
            {
                text: '查看青年尸体',
                next: 'inspect_youth_corpse'
            }
        ]
    }
};
