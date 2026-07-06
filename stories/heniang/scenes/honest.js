/**
 * 《heniang》场景模块：honest
 */

export const scenes = {
    honest_about_bones: {
        title: '坦诚来意',
        text: `"秀姑阿姨，我找到你的骨头了。" 你说，"我想带你离开这条河，让你入土为安。"

秀姑愣住了。她似乎没想到你会这么说。

"离开这条河？" 她喃喃道，"我能离开吗？"

"能。" 你说，"我请神婆看过，只要把你的尸骨重新安葬，你就能解脱。"

秀姑的眼里流出了水。不是泪，是河水。

"那莲姐呢？" 她问，"她也能走吗？"

"她也能。" 你说，"你们一起走。"`,
        effects: {
            sanity: 5,
            yin: -10,
            setFlag: 'willRebury'
        },
        choices: [
            {
                text: '准备重新安葬',
                next: 'rebury_both'
            }
        ]
    }
};
