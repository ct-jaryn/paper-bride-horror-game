/**
 * 《heniang》场景模块：take
 */

export const scenes = {
    take_bones_ashore: {
        title: '带骨上岸',
        text: `你把秀姑的尸骨一块一块捞上岸，用衣服包好。

河水在你捞骨头的过程中变得很安静，安静得反常。你总觉得水下有无数双眼睛在看着你。

捞完最后一块骨头，你准备离开。突然，水面分开，一个穿红嫁衣的女人站在水里。

是秀姑。

"你拿我的骨头做什么？" 她问。`,
        effects: {
            sanity: -15,
            yin: 15
        },
        choices: [
            {
                text: '说要超度她',
                next: 'lie_about_ritual',
                condition: { flag: 'knowsRitual' }
            },
            {
                text: '说要带她离开这条河',
                next: 'honest_about_bones',
                condition: { flag: 'honestApproach' }
            },
            {
                text: '质问她为何害母亲',
                next: 'accuse_xiugu'
            }
        ]
    }
};
