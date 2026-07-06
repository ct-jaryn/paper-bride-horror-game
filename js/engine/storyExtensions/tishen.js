/**
 * 《替身》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // tishen:prologue
    'tishen:prologue': [
        {
            text: '纸人衣角绣着青丘山纹',
            next: 'tishen_easter_fox_mark'
        }
    ],
    // tishen:ask_doll_truth
    'tishen:ask_doll_truth': [
        {
            text: '纸人嘴唇翕动，说出了自己的真名',
            ending: 'hidden_dollName'
        }
    ],
    // tishen:mirror_reveal
    'tishen:mirror_reveal': [
        {
            text: '你把镜子转向纸人，让它看见自己',
            ending: 'hidden_mirrorRelease'
        },
        {
            text: '你触发了隐藏结局：父忏',
            ending: 'hidden_fathersConfession'
        },
        {
            text: '你触发了隐藏结局：纸命',
            ending: 'hidden_paperLife'
        },
        {
            text: '你触发了隐藏结局：灰安',
            ending: 'hidden_ashPeace'
        },
        {
            text: '你触发了隐藏结局：共魂',
            ending: 'hidden_soulShare'
        },
        {
            text: '你触发了隐藏结局：稻草父亲',
            ending: 'hidden_strawFather'
        }
    ],
    // tishen:refuse_exchange
    'tishen:refuse_exchange': [
        {
            text: '纸人笑了，它知道下一个被替代的是谁',
            ending: 'hidden_secondDoll'
        }
    ]
};

export const scenes = {
    tishen_easter_fox_mark: {
        title: '青丘纹',
        text: `你蹲下身，看清了纸人衣角的纹样。

那不是寻常纸扎铺会用的云纹，而是九尾狐绕月的图腾。你只在深山古庙里见过类似的石刻，老人们说那是青丘山的标记。

纸人忽然动了一下。不是风，是衣角自己抖了抖，像有生命在纸壳下呼吸。

[red]“你认得我？”[/red] 纸人的嘴里发出细不可闻的声音。

你没有回答。`,
        effects: { sanity: -4, yin: 6 },
        choices: [
            { text: '撕掉那片衣角', next: 'notice_parents' }
        ]
    }
};
