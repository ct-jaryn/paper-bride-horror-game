/**
 * 《heniang》场景模块：search
 */

export const scenes = {
    search_for_bones: {
        title: '寻找尸骨',
        text: `你在石头周围寻找。

河水清澈了一些，你能看见水底的鹅卵石。你脱鞋下水，冰凉的河水让你打了个寒颤。

你摸索了十几分钟，手指碰到一个硬物。你把它捞起来——

[red]是一根腿骨。[/red]

骨头很小，像是女人的。上面缠着一段红色的布条，已经褪色了。

你又在附近摸到几块骨头，拼起来正好是一副完整的骨架。骨架的盆骨较宽，确实是个女人。

在骨架旁边，有一块玉佩。玉佩上刻着一个"秀"字。

[whisper]这是秀姑。[/whisper]`,
        effects: {
            sanity: -15,
            yin: 15,
            addItem: '秀姑的尸骨'
        },
        choices: [
            {
                text: '把尸骨捞上岸',
                next: 'take_bones_ashore'
            },
            {
                text: '把尸骨重新埋好',
                next: 'rebury_bones',
                effects: { yin: -10 }
            }
        ]
    },

    search_for_other_way: {
        title: '寻找他法',
        text: `你拒绝接受。

你开始查资料、问老人、走遍上下游。你得知，这条河里的河娘不止秀姑一个，她们形成了一个"河娘会"。任何一个河娘离开，都会惊动其他的。

要救母亲，只有一个办法：找到河娘的源头，也就是第一个跳进这条河的女人。

据说，第一个河娘是三百年前一个被沉塘的寡妇。她的怨气污染了整条河，之后所有溺亡的女人都会成为河娘。

要超度她，需要找到她的尸骨，和她当年被沉塘的原因。`,
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: 'searchingSource'
        },
        choices: [
            {
                text: '去上游找第一个河娘的墓',
                next: 'find_first_heniang'
            }
        ]
    }
};
