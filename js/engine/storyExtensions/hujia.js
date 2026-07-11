/**
 * 《狐嫁》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // hujia:prologue —— 需要阴气足够深才能感知周家渊源
    'hujia:prologue': [
        {
            text: '你想起家中旧物里似乎有一件和周家有关的物件',
            next: 'hujia_easter_zhou_debt',
            condition: { yinAbove: 25 },
            hidden: true,
        }
    ],
    // hujia:ask_after_marriage —— 需要拥有青丘玉佩才触发知己结局
    'hujia:ask_after_marriage': [
        {
            text: '她的眼神里没有杀意，只有一种说不清的寂寥',
            ending: 'hidden_foxFriend',
            condition: { hasItem: '青丘玉佩' },
            hidden: true,
        }
    ],
    // hujia:refuse_dagger —— 需要携带狐妖内丹
    'hujia:refuse_dagger': [
        {
            text: '心头血也许不只是代价，也是另一种契约',
            ending: 'hidden_heartBloodOath',
            condition: { hasItem: '狐妖内丹' },
            hidden: true,
        }
    ],
    // hujia:refuse_heart_blood —— 需要高阴气才能看穿幻象
    'hujia:refuse_heart_blood': [
        {
            text: '你若有所思地望着青丘山的方向',
            ending: 'hidden_whiteFoxSendoff',
            condition: { yinAbove: 40 },
            hidden: true,
        }
    ],
    // hujia:negotiate_fox —— 五个隐藏分支各有不同条件
    'hujia:negotiate_fox': [
        {
            text: '她提起了一个你不该知道的名字',
            ending: 'hidden_villageChiefTruth',
            condition: { flag: 'sawThroughVillageChief' },
            hidden: true,
        },
        {
            text: '戏服上的金线忽然亮了一下',
            ending: 'hidden_peonyDressFox',
            condition: { hasItem: '小生戏服' },
            hidden: true,
        },
        {
            text: '雷声里你听见了另一个人的声音',
            ending: 'hidden_thunderPearlShared',
            condition: { flag: 'tryLove' },
            hidden: true,
        },
        {
            text: '她提到了一个比你更古老的约定',
            ending: 'hidden_ancestorPact',
            condition: { hasItem: '狐毛契约残页' },
            hidden: true,
        },
        {
            text: '你的血和她掌心的温度忽然同步了',
            ending: 'hidden_foxChild',
            condition: { hasItem: '狐妖内丹' },
            hidden: true,
        }
    ]
};

export const scenes = {
    hujia_easter_zhou_debt: {
        title: '周家债',
        text: `狐女的眼神变了。

"你竟然知道周家。"她轻声说，声音里第一次没有了戏谑。

[whisper]"周家欠的不只是我的命。井底那位、戏台那位、河边那位，都姓周，也都不姓周。"[/whisper]

她不再解释，只是伸手抚过你的眉心。你感到一阵刺痛，仿佛有什么东西被打通了。

"既然你知道，便该明白：答应我，就是答应所有被周家辜负的人。"`,
        effects: { sanity: -5, yin: 8 },
        choices: [
            { text: '追问其他"被辜负的人"', next: 'ask_why_chosen' }
        ]
    }
};
