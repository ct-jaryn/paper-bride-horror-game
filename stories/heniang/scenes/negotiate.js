/**
 * 《heniang》场景模块：negotiate
 */

export const scenes = {
    negotiate_xiugu: {
        title: '谈判',
        text: `"秀姑阿姨，" 你尽量让自己的声音平稳，"你和我妈是好朋友，你当年还救过我妈。你为什么要让她留在河里？"

秀姑的眼神柔和了一些："因为我孤单。河里很冷，一个人待久了，会忘记自己是谁。"

"那我经常来看你，好不好？" 你说，"我给你烧纸，给你带吃的，陪你说话。你放我妈走。"

秀姑笑了："你是活人，活人不能常来河边。来了，就回不去了。"

"那我可以给你立庙，让村里人拜你。"

秀姑沉默了很久。最后她说："你和你妈一样，会说话。"

"我答应你，" 她说，"但你每年七月半，要在河边给我唱一首歌。唱三十年，我就放她走。"`,
        effects: {
            yin: -5
        },
        choices: [
            {
                text: '答应她',
                next: 'agree_sing_thirty',
                effects: { setFlag: 'promisedToSing' }
            },
            {
                text: '三十年太长，再商量',
                next: 'bargain_years'
            }
        ]
    }
};
