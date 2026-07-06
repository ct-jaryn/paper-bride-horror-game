/**
 * 《河娘》跨卷彩蛋选择与会话场景
 */

export const choices = {
    // heniang:prologue
    'heniang:prologue': [
        {
            text: '那件红裳的款式，像在戏台见过',
            next: 'heniang_easter_opera_dress'
        }
    ],
    // heniang:plan_ritual
    'heniang:plan_ritual': [
        {
            text: '你在河底找到了母亲留给你的信',
            ending: 'hidden_motherLetter'
        }
    ],
    // heniang:negotiate_xiugu
    'heniang:negotiate_xiugu': [
        {
            text: '你接过秀姑的位置，成为新的河神',
            ending: 'hidden_riverGoddess'
        },
        {
            text: '你触发了隐藏结局：秀姑之子',
            ending: 'hidden_xiuguChild'
        },
        {
            text: '你触发了隐藏结局：水下合唱队',
            ending: 'hidden_drownedChorus'
        },
        {
            text: '你触发了隐藏结局：河底戏衣',
            ending: 'hidden_peonyDress'
        },
        {
            text: '你触发了隐藏结局：夏雨',
            ending: 'hidden_summerRain'
        },
        {
            text: '你触发了隐藏结局：最后一支歌',
            ending: 'hidden_lastSong'
        },
        {
            text: '你触发了隐藏结局：水鬼',
            ending: 'hidden_waterGhost'
        },
        {
            text: '你触发了隐藏结局：石碑记忆',
            ending: 'hidden_stoneMemory'
        }
    ],
    // heniang:use_incense_ash
    'heniang:use_incense_ash': [
        {
            text: '你把香灰撒进河里，化作一艘小船',
            ending: 'hidden_incenseBoat'
        }
    ]
};

export const scenes = {
    heniang_easter_opera_dress: {
        title: '戏服红裳',
        text: `你望向河中那件红裳，指尖触到戏服特有的刺绣。

不是嫁衣，是戏台上的行头。水波荡漾间，你仿佛听见锣鼓声从很远的地方传来，还有一声清越的唱腔，唱的是“魂归何处”。

[faded]“戏台塌了二十年，戏服却漂到了这里。”[/faded]

你把目光移开。它缓缓漂向下游，像一场没有观众的落幕。`,
        effects: { sanity: -4, yin: 7, addItem: '湿戏服碎片' },
        choices: [
            { text: '继续沿河寻找', next: 'walk_riverbank' }
        ]
    }
};
