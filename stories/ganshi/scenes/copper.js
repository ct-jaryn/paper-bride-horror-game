/**
 * 《ganshi》场景模块：copper
 */

export const scenes = {
    copper_bell_control: {
        title: '御铃',
        text: `你下意识握紧铜铃。

铃声本是为引尸而行，可此刻你突然觉得，第四个影子在随着铃声颤抖。它不是不怕铃，它是被铃困住了。

你想起师父教过的一段禁咒：铃分阴阳，急三慢四，可令游离之魂暂退。你从未用过，因为赶尸匠的铃只赶尸体，不赶游魂。

但今夜，你顾不得规矩了。

你摇动铜铃，三快四慢。洞壁上的第四个影子猛地缩成一团，发出一声凄厉的尖叫。

[scream]"田家人！——"[/scream]

叫声戛然而止。影子消失了。火堆重新旺了起来，洞壁上的影子只剩三个。

三具尸体齐齐转向你，黄符下的脸似乎带着某种敬畏。

[red]它们不是怕你，是怕你的铃。[/red]`,
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: 'bellControlledSpirit'
        },
        choices: [
            {
                text: '趁势查清真相',
                next: 'investigate_truth'
            },
            {
                text: '继续向洞深处查看',
                next: 'check_cave_depth'
            },
            {
                text: '用铜铃跳一段傩戏，为它们超度',
                next: 'bell_nuo_dance',
                effects: { sanity: -5, yin: -5 }
            }
        ]
    }
};
