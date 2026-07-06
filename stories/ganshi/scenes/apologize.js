/**
 * 《ganshi》场景模块：apologize
 */

export const scenes = {
    apologize_for_master: {
        title: '替师父道歉',
        text: `你跪在石壁前："前辈，我师父若有对不起你的地方，我替他赔罪。但这些尸体是无辜的，求前辈放我们过去。"

洞里沉默了很久。

苍老的声音再次响起："你师父当年为了一单生意，把我全家的尸体扔在荒野，被野狗分食。我田家与你有不共戴天之仇。"

"那您想怎样？" 你问。

"我要你也尝尝，被尸体抛弃的滋味。" 声音说，"把你赶的尸体留下，你自己走。"

你看着三具尸体。它们还在等你带它们回家。`,
        effects: {
            sanity: -10,
            yin: 10
        },
        choices: [
            {
                text: '答应留下尸体',
                next: 'abandon_corpses'
            },
            {
                text: '拒绝，说要带它们走完最后一程',
                next: 'refuse_abandon',
                effects: { setFlag: 'loyalToCorpses' }
            }
        ]
    }
};
