/**
 * 《守夜》场景模块：patrol_hall_one
 * 一号厅：喜丧老人的秘密
 */

export const scenes = {
    hall_one_inspection: {
        title: '一号厅 · 老张头',
        text: `一号厅的灯是暖黄色的，老张头躺在灵床上，盖着绣"寿"字的白绸。他的遗容化得很好，嘴角甚至带着一丝笑意，像是做了一个美梦。

老张头是镇上的老木匠，做了一辈子棺材。镇上有一半的老人，最后都是躺着他做的棺材走的。听说他临终前还在念叨："我的棺材还没给自己刨好呢。"

你在灵床前站定，按规矩鞠了三个躬。

就在你直起身的时候，你注意到老张头的右手——入殓时是交叠放在胸前的，现在却微微攥着拳，像是握着什么东西。

你犹豫了一下。按规矩，亡者的东西不能乱动。可那攥紧的手指缝里，露出半截泛黄的纸边。`,
        effects: { sanity: -5 },
        choices: [
            {
                text: '轻轻掰开他的手，看看握着什么',
                next: 'hall_one_paper',
                effects: { yin: 5 }
            },
            { text: '不碰，恭敬退出', next: 'hall_three_inspection' },
            {
                text: '你想起老木匠做的那些棺材，低声问他一句',
                next: 'hall_one_whisper',
                condition: { flag: 'knowsName' },
                hidden: true
            }
        ]
    },

    hall_one_paper: {
        title: '掌中纸',
        text: `你屏住呼吸，轻轻掰开老张头僵硬的手指。

指尖触到那截纸的瞬间，一股冰凉顺着你的胳膊窜上来。老张头的笑容似乎更深了一些。

你抽出那张纸。是一张被汗浸透又干透、反复折叠的旧信纸，上面的字迹歪歪扭扭，像是一个不怎么识字的人一笔一笔刻上去的：

[faded]"我做了四十年棺材。最后这口，是给七号厅那位姑娘留的。她不肯走，是因为没有一口像样的棺材装她的戏。棺材铺在地下室东墙根下，盖板第三块。切记，那棺材只能给云袖，旁人躺了，要出大事。"[/faded]

你猛地抬头。老张头的眼睛不知什么时候睁开了一条缝，浑浊的瞳仁正看着你。

他的嘴唇动了动，没有发出声音，但你读懂了口型：

[whisper]"地下……室……"[/whisper]

然后，他的眼睛又慢慢合上了。`,
        effects: { sanity: -15, yin: 10, setFlag: 'knowsCoffin', addItem: '老张头的纸条' },
        choices: [
            { text: '去地下室找那口棺材', next: 'basement_descent' },
            { text: '先收好纸条，继续巡厅', next: 'hall_three_inspection' },
            { text: '回七号厅告诉云袖', next: 'enter_with_flashlight', condition: { flag: 'knowsName' } }
        ]
    },

    hall_one_whisper: {
        title: '问棺',
        text: `你俯下身，凑到老张头耳边，轻声问："老张头，云袖姑娘的戏台，是不是得有口好棺材才唱得完？"

老张头的身体纹丝不动。但他的喉结——那个早已不会动的东西——缓缓地、艰难地上下滚了一下。

像是在点头。

然后，他的右手无力地垂落床沿。掌心里，一张纸条无声地飘落到地上。

你捡起来。上面写着地下室的位置，和一行小字：

[faded]"那口棺材，是我这辈子做得最好的一口。柚木，朱漆，里头衬了戏台幕布。给她，她就有了戏台。"[/faded]

你把纸条收好，再看老张头。他的笑容不见了，取而代之的是一种了却心愿的安详。

[whisper]做了一辈子棺材的人，最后的心愿，是替一个素不相识的戏子，做最后一口棺材。[/whisper]`,
        effects: { sanity: 5, yin: -5, setFlag: 'knowsCoffin', addItem: '老张头的纸条' },
        choices: [
            { text: '去地下室找那口棺材', next: 'basement_descent' },
            { text: '先去三号厅看看', next: 'hall_three_inspection' }
        ]
    }
};
