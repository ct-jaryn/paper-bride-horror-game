/**
 * 《heniang》场景模块：walk
 */

export const scenes = {
    walk_riverbank: {
        title: '河畔',
        text: `你沿着河岸边走边看。

河水不急，但有一种说不出的吸力。你看向水面时，会不自觉地想象水下的世界：黑暗、安静、没有声音，也没有痛苦。

[whisper]也许水底真的很好。[/whisper]

你猛地摇头，把这个念头甩出去。

走了一里多地，你发现河岸边有一块大石头，石头上刻着字。字被水侵蚀得很厉害，但还能辨认：

[faded]"爱女秀姑之墓。溺水而亡，年仅十九。"[/faded]

秀姑。你母亲年轻时最好的朋友就叫秀姑。你小时候还听她提起过。

原来秀姑不是病死的，是淹死的。

[red]而且她就死在这里。[/red]`,
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: 'foundXiuguStone'
        },
        choices: [
            {
                text: '在附近寻找秀姑的尸骨',
                next: 'search_for_bones'
            },
            {
                text: '回家翻看母亲的老照片',
                next: 'look_old_photos'
            },
            {
                text: '你神志恍惚，把河边的身影看成了母亲',
                next: 'mother_as_heniang',
                condition: { sanityBelow: 30 },
                hidden: true,
                effects: { sanity: -10, yin: 10 }
            }
        ]
    },

    // 母亲河娘（新增分支）
};
