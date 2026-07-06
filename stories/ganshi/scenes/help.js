/**
 * 《ganshi》场景模块：help
 */

export const scenes = {
    help_revenge_zhou: {
        title: '助她报周家仇',
        text: `"好，我带你去找周家。" 你说。

女尸的眼睛亮了起来。她掀开白布，露出完整的红嫁衣。嫁衣上绣着一个"周"字。

"你是周家哪一支的冥婚新娘？" 你问。

女尸伸出手指，在地上写了三个字：

[faded]"青石镇"[/faded]

青石镇。你听说过那个地方，离这里不远。

你决定改变路线，先去青石镇。`,
        effects: {
            yin: 10,
            setFlag: 'hujia_to_qingshi'
        },
        ending: 'toQingshiTown'
    }
};
