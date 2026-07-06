/**
 * 《xitai》场景模块：talisman
 */

export const scenes = {
    talisman_resist: {
        title: '符镇戏台',
        text: `你掏出护身符，贴在戏台的一根柱子上。

黄符纸触到朱红柱子的瞬间，戏台上的锣鼓声猛地停了。那些没有五官的戏子像是被按了暂停键，保持着千奇百怪的姿势，僵在原地。

"散了吧。" 你对着戏台说，"你们的戏，早就唱完了。"

戏子们的身影开始变淡，像被水晕开的墨。最后，台上只剩下一件红色的戏服，孤零零地挂在台柱上。

你走过去，发现戏服的内衬里缝着一张纸条：

[faded]"云袖绝笔：愿来世，再唱一出完整的《牡丹亭》。"[/faded]

你把戏服小心地叠好，带出戏台。

天快亮了。`,
        effects: {
            sanity: 10,
            yin: -20,
            addItem: '云袖的戏服',
            setFlag: 'talismanResistedOpera'
        },
        choices: [
            {
                text: '把戏服和银钗一起安葬',
                next: 'bury_yunxiu_costume',
                ending: 'hidden_songEnds'
            },
            {
                text: '把戏服带回研究所',
                next: '',
                ending: 'peacefulDeparture'
            }
        ]
    }
};
