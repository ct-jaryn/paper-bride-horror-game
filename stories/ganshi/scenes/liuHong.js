/**
 * 《ganshi》场景模块：liuHong
 */

export const scenes = {
    liuHong_paper_bride: {
        title: '纸新娘',
        text: `柳红——或者该叫她柳红的"形"——坐起身，迷茫地看着你。

"我不是活人。" 她说，"但我也不是死人。"

你想起师父提过的邪术：纸扎替身。周家用纸人借命，把活人的魂魄封进纸扎身体里，再配给死人做新娘。这样的新娘既不会腐烂，也不会真正死去，只是一具会呼吸的纸人。

你低头看她的手。月光下，她的指尖泛着淡淡的纸浆白。

"我被做成纸新娘了。" 她说，"除非有人愿意替我去冥婚，否则我永远这样。`,
        effects: {
            sanity: -20,
            yin: 15
        },
        choices: [
            {
                text: '我替你成亲',
                ending: 'death_paperGroom',
                effects: { sanity: -10, yin: 15 }
            },
            {
                text: '扎一个纸新郎，替你成婚',
                ending: 'hidden_paperBrideFreedom',
                effects: { sanity: 10, yin: -15 }
            }
        ]
    }
};
