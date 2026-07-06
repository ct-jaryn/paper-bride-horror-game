/**
 * 《ganshi》场景模块：head
 */

export const scenes = {
    head_to_qingshi: {
        title: '青石镇',
        text: `你带着三具尸体，向青石镇走去。

天亮了，尸体不能再走。你找了一间义庄，把尸体停好，自己休息。

傍晚时分，你来到青石镇。

镇上很热闹，像是有什么喜事。你拉住一个路人问："今天是什么日子？"

路人笑着说："周老爷家办喜事，给儿子娶亲呢！"

你看着义庄里女尸的红嫁衣，心里一沉。

[red]周家又在办冥婚了。[/red]

（未完待续，可衔接《回门》剧情）`,
        effects: {
            yin: 10,
            setFlag: 'ganshi_to_qingshi'
        },
        ending: 'arrivedQingshi'
    },

    // 隐藏结局分支：新娘之恕
};
