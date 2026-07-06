/**
 * 《heniang》场景模块：underwater
 */

export const scenes = {
    underwater_chorus: {
        title: '水下合唱',
        text: `你屏住呼吸，把耳朵贴近水面。

河水下面传来极细的歌声，不是一个人在唱，而是很多个声音叠在一起。她们唱的不是河娘引诱人的那首，而是一首更古老、更凄凉的歌：

[whisper]"水来呀，水来呀……
来的人不要问名字……
问名的人回不了家……"[/whisper]

你忽然明白了：河娘不止一个。这条河里，有很多很多 drowned 的女子。她们不是各自为战，而是在一起唱，一起拉人下来。

水面下，隐约浮现出很多红色的身影。她们手拉手，站在河底，仰着头，像是在等待什么。

[red]她们在等一个能让她们上岸的人。[/red]

你猛地后退一步。那些身影中，有一个特别熟悉——是母亲。她站在人群边缘，没有唱歌，只是看着你。`,
        effects: {
            sanity: -10,
            yin: 15,
            setFlag: 'heardUnderwaterChorus'
        },
        choices: [
            {
                text: '喊母亲',
                next: 'call_mother'
            },
            {
                text: '去找神婆',
                next: 'find_shenpo'
            }
        ]
    }
};
