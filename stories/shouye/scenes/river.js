/**
 * 《守夜》场景模块：river
 */

export const scenes = {
    river_search: {
        title: '青石桥下',
        text: `天蒙蒙亮时，你请了假，骑着电动车赶往青石桥。

桥下的河水很浅，但很急。你挽起裤腿，踩着滑腻的卵石，摸到第三个桥洞。

桥洞下的石头缝里，果然卡着一只苍白的手。

你忍着恐惧，把那具早已泡发的女尸从石缝里拖出来。她的脸已经看不清了，但手腕上还戴着一条粉色的手绳，坠子是一个小小的摩托车挂件。

你报了警。警察来的时候，你听见其中一个老警察叹气：

"跟当年捞那个戏子的是一个地方。这桥底下，真是邪门。"

你看着那具女尸被抬走，忽然想起云袖也是从这里被捞上来的。

[whisper]同一条河，同一座桥，相隔近百年，收了两条人命。[/whisper]

河水哗哗地流着，像是什么都没发生过。`,
        effects: { time: 120, sanity: -10, yin: -10, setFlag: 'foundGirl' },
        choices: [
            { text: '回殡仪馆，把消息告诉少年的魂', next: 'river_search_report' }
        ]
    },

    river_search_report: {
        title: '了愿',
        text: `你回到殡仪馆时，天已经黑了。又一个夜晚开始了。

你直奔三号厅。少年的白布还盖着，但你知道他在等你。

"陈磊，"你说，"我找到她了。她在第三个桥洞下面，就像你说的。"

白布下沉默了很久。

然后，那只完好的右手再次缓缓抬起，又缓缓落下。这一次，没有沉重，只有一种如释重负的轻。

[whisper]"谢谢你……"[/whisper] 少年的声音清晰了许多，"告诉她妈妈……对不起……"

汽水瓶里的橘子水，无风自动，冒出了一个小小的气泡。

你退出三号厅，觉得今夜的殡仪馆，似乎安静了一些。

[red]但七号厅的方向，桂花香更浓了。[/red]`,
        effects: { sanity: 15, yin: -15, setFlag: 'chenleiReleased', clearFlag: 'promisedChenlei' },
        choices: [
            { text: '去七号厅守云袖', next: 'enter_with_flashlight' },
            { text: '先去地下室看看', next: 'basement_descent', condition: { flag: 'knowsCoffin' } },
            { text: '巡一圈其他厅', next: 'hall_five_inspection' }
        ]
    },

    // 五号厅 —— 空厅异响,

    river_bottom_vision: {
        title: '河底',
        text: `你站在青石桥头，望着浑浊的河水。

你已经知道，云袖和周生，都葬身在这条河里。一个民国二十三年，一个民国二十四年。相隔一年，相隔一层水。

你从口袋里掏出那枚铜镜——周生的镜。你把镜子抛向河心。

[red]镜子没有沉下去。[/red]

它漂浮在水面上，像一朵莲花。然后，它缓缓旋转，发出微弱的光。

河水在镜子周围开始打旋，形成一个漩涡。漩涡中央，露出了一段向下的阶梯——通向河底。

[whisper]这是一条只属于亡魂的路。而你，作为守夜人，被允许踏上去。[/whisper]`,
        effects: { sanity: -15, yin: 20 },
        choices: [
            { text: '沿着阶梯走下去', next: 'river_bottom_descent', effects: { sanity: -10 } },
            { text: '后退，这太危险了', next: 'enter_with_flashlight', effects: { sanity: -5 } }
        ]
    },

    river_bottom_descent: {
        title: '沉',
        text: `你沿着阶梯，一步步走下河底。

水没有浸湿你。你像是一个透明的影子，穿过浑浊的河水，来到河床。

河底铺满了淤泥和水草。但有一条清晰的小路，通向远方。

小路两旁，立着一盏又一盏的长明灯。有些已经熄灭，有些还在微微亮着。

你走到一盏最亮的灯前。灯下，坐着一个穿长衫的年轻人。他的背微驼，手里捏着一朵纸扎的牡丹。

他抬起头，看见你，愣住了。

[whisper]"你是……"[/whisper]

[red]那是周生。一百零二岁的、永远二十岁的周生。[/red]`,
        effects: { sanity: -20, yin: 15, setFlag: 'metZhouSheng' },
        choices: [
            { text: '告诉他，云袖一直在等他', next: 'river_bottom_zhousheng' }
        ]
    },

    river_bottom_zhousheng: {
        title: '河底周生',
        text: `"周生，"你轻声说，"我叫周遥，是青石镇殡仪馆的守夜人。"

周生站起来，手里还捏着那朵纸牡丹。他的脸很年轻，可眼睛里有一种跨越百年的疲惫。

"守夜人？"他问，"陈家的人？"

"不是。"你说，"我是第七代。陈家、林家之后，传到了我。"

周生点点头，像是早就预料到了。

"那……云袖呢？"他的声音颤抖，"她……还在等你吗？"

"她一直在等你。"你说，"她以为你抛下了她。她怨了你将近一百年。可现在，她知道了真相。她不怨了。她想来找你。"

周生的眼泪，无声地落进河水里。

[whisper]"我等了一百年。"[/whisper]他说，[whisper]"就等这一句话。"[/whisper]

他把手里那朵纸牡丹，递给你。

"带给她。"他说，"告诉她，我在河这头等她。我点了一盏灯，她能看见。"`,
        effects: { sanity: 10, yin: -10, addItem: '河底的纸牡丹', setFlag: 'zhouShengWaiting' },
        choices: [
            { text: '答应他，回到岸上带云袖来', next: 'river_bottom_return' }
        ]
    },

    river_bottom_return: {
        title: '上岸',
        text: `你沿着阶梯，回到河面。

漩涡在你身后闭合，铜镜沉入水中，再也没浮起来。

[whisper]它完成了它的使命——为你指了一条路。[/whisper]

你站在桥头，手里攥着那朵周生给你的纸牡丹。

天快亮了。可你知道，下一个夜晚，你将带着云袖，再次来到这里。

这一次，她将走下阶梯，走向那盏灯，走向那个等了她一百零二年的年轻人。

[red]而你，将站在岸上，目送她。[/red]

[red]因为你是守夜人。你的职责，是送她走，然后，继续守着下一个夜晚。[/red]`,
        effects: { sanity: 20, yin: -20, setFlag: 'readyToBringYunxiu' },
        choices: [
            { text: '回殡仪馆，等下一个夜晚', next: 'night_three_choice', condition: { flag: 'foundCoffin' } }
        ]
    }
};
