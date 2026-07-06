/**
 * 《狐嫁》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // hujia:prologue
    'hujia:prologue': [
        {
            text: '周家的债……是指回门那口井？',
            next: 'hujia_easter_zhou_debt'
        }
    ],
    // hujia:ask_after_marriage
    'hujia:ask_after_marriage': [
        {
            text: '狐女没有逼你成婚，只是与你结为知己',
            ending: 'hidden_foxFriend'
        }
    ],
    // hujia:refuse_dagger
    'hujia:refuse_dagger': [
        {
            text: '你把心头血滴入狐女掌心，结成血誓',
            ending: 'hidden_heartBloodOath'
        }
    ],
    // hujia:refuse_heart_blood
    'hujia:refuse_heart_blood': [
        {
            text: '白狐回首三次，消失在青丘山雾中',
            ending: 'hidden_whiteFoxSendoff'
        }
    ],
    // hujia:fox_mercy_path
    'hujia:negotiate_fox': [
        {
            text: '你触发了隐藏结局：村长的真相',
            ending: 'hidden_villageChiefTruth'
        },
        {
            text: '你触发了隐藏结局：戏服渡狐',
            ending: 'hidden_peonyDressFox'
        },
        {
            text: '你触发了隐藏结局：共珠',
            ending: 'hidden_thunderPearlShared'
        },
        {
            text: '你触发了隐藏结局：祖约',
            ending: 'hidden_ancestorPact'
        },
        {
            text: '你触发了隐藏结局：狐子',
            ending: 'hidden_foxChild'
        }
    ]
};

export const scenes = {
    hujia_easter_zhou_debt: {
        title: '周家债',
        text: `狐女的眼神变了。

“你竟然知道周家。”她轻声说，声音里第一次没有了戏谑。

[whisper]“周家欠的不只是我的命。井底那位、戏台那位、河边那位，都姓周，也都不姓周。”[/whisper]

她不再解释，只是伸手抚过你的眉心。你感到一阵刺痛，仿佛有什么东西被打通了。

“既然你知道，便该明白：答应我，就是答应所有被周家辜负的人。”`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '追问其他“被辜负的人”', next: 'ask_why_chosen' }
        ]
    }
};
