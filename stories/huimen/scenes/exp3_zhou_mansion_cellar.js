/**
 * 《回门》场景模块：exp3_zhou_mansion_cellar
 * 周家祖宅地窖探索
 */

export const scenes = {
    huimen_exp3_zhou_mansion_cellar: {
        title: '祖宅地窖',
        text: `石阶很长，每一步都踩在潮湿的苔藓上。

地窖里没有灯，只有墙缝里渗出的一点磷光。你看见墙上钉着无数黄纸，每张纸上都写着一个女子的生辰八字，最下面一行是"秀兰，民国三年六月初七"。`,
        effects: {"sanity":-3,"yin":4},
        choices: [{"text":"撕下秀兰的黄纸","next":"huimen_exp3_zhou_mansion_cellar_tear","effects":{"sanity":3,"yin":-2}},{"text":"点燃墙上的油灯","next":"huimen_exp3_zhou_mansion_cellar_light","effects":{"yin":3}},{"text":"继续往深处走","next":"huimen_exp3_zhou_mansion_cellar_deep","effects":{"yin":5}}],
    },
    huimen_exp3_zhou_mansion_cellar_tear: {
        title: '撕纸',
        text: `黄纸被撕下的瞬间，地窖里响起一声女人的尖叫。

墙上其他的黄纸开始颤抖，像是一群被惊醒的蝴蝶。你把秀兰的纸折好收进口袋，那些颤抖慢慢平息下来。

纸上的朱砂字蹭到你手上，像血一样红。`,
        effects: {"sanity":3,"yin":-2,"addItem":"秀兰生辰纸"},
        choices: [{"text":"去点灯","next":"huimen_exp3_zhou_mansion_cellar_light","effects":{"yin":1}},{"text":"离开地窖","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp3_zhou_mansion_cellar_light: {
        title: '地窖点灯',
        text: `你摸出一根火柴，点亮墙角的油灯。

火光一跳，地窖里亮了。你看见地上摆着九口小棺材，每口棺材里都躺着一个纸人。纸人们穿着不同花色的嫁衣，脸上画着一样的笑。

最里面的那口棺材是空的。`,
        effects: {"sanity":-5,"yin":5},
        choices: [{"text":"查看空棺材","next":"huimen_exp3_zhou_mansion_cellar_empty","effects":{"yin":2}},{"text":"烧掉纸人","next":"huimen_exp3_zhou_mansion_cellar_burn","effects":{"sanity":8,"yin":-5}}],
    },
    huimen_exp3_zhou_mansion_cellar_deep: {
        title: '地窖深处',
        text: `你越往里走，空气越冷。

地窖尽头是一扇石门，门上刻着周家的族徽，被一圈红线缠着。红线已经褪色，有几处还沾着暗红的污渍。

门缝里传出低低的哭声，像是有很多人在门后说话。`,
        effects: {"sanity":-5,"yin":6},
        choices: [{"text":"解开红线","next":"huimen_exp3_zhou_mansion_cellar_door_open","effects":{"yin":8}},{"text":"把红线重新缠紧","next":"huimen_exp3_zhou_mansion_cellar_door_seal","effects":{"sanity":-3,"yin":2}},{"text":"隔着门说话","next":"huimen_exp3_zhou_mansion_cellar_door_talk","effects":{"yin":2}}],
    },
    huimen_exp3_zhou_mansion_cellar_empty: {
        title: '空棺',
        text: `空棺材里铺着一层红绸，红绸上放着一只绣花鞋。

鞋面绣着并蒂莲，针脚细密，是秀兰的手艺。鞋里塞着一张纸条，上面写着：" waiting for the one who remembers"。

你认出这是秀兰留的。她把一只鞋留在这里，作为还没被完全吞没的证据。`,
        effects: {"sanity":3,"yin":-2,"addItem":"秀兰的绣花鞋"},
        choices: [{"text":"把鞋收好，继续探索","next":"huimen_exp3_zhou_mansion_cellar_deep","effects":{"yin":1}}],
    },
    huimen_exp3_zhou_mansion_cellar_burn: {
        title: '地窖焚纸',
        text: `火从最近的纸人开始烧起，很快蔓延到所有小棺材。

纸人们在火里翻滚、尖叫，声音越来越小，最后变成一阵轻轻的叹息。火焰熄灭后，地上只剩九堆灰烬，和一股说不出的香气。

你感觉地窖里的阴气淡了许多。`,
        effects: {"sanity":8,"yin":-8,"setFlag":"huimen_exp3_burned_paper_brides"},
        choices: [{"text":"去石门","next":"huimen_exp3_zhou_mansion_cellar_deep","effects":{"yin":1}},{"text":"离开地窖","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp3_zhou_mansion_cellar_door_open: {
        title: '门后',
        text: `红线一松，石门自己开了。

门后是一间更小的石室，室中央摆着一张供桌，桌上供着一块无字牌位。牌位后面，站着九个模糊的女子身影。

她们齐声说："你终于来了。我们等了很久。"`,
        effects: {"sanity":-10,"yin":10},
        choices: [{"text":"问她们想要什么","next":"huimen_exp3_zhou_mansion_cellar_women_want","effects":{"yin":2}},{"text":"转身逃跑","next":"huimen_exp3_ending_ancestral_cellar_scene","effects":{"yin":3}}],
    },
    huimen_exp3_zhou_mansion_cellar_door_seal: {
        title: '缠线',
        text: `你把红线一圈一圈缠紧，手指被勒出血也顾不上。

门后的哭声渐渐弱下去，最后只剩风声穿过红线的缝隙。你退后几步，靠在墙上大口喘气。

红线缠得很紧，但你知道，它总有一天会松的。`,
        effects: {"sanity":-3,"yin":2},
        choices: [{"text":"离开地窖","next":"huimen_exp_village_street","effects":{"yin":1}}],
    },
    huimen_exp3_zhou_mansion_cellar_door_talk: {
        title: '隔门对话',
        text: `你把手按在石门上，低声说："我知道你们。我知道你们的名字。"

门后的哭声停了片刻，然后一个声音说："那就把我们的名字念出来。念对了，门就让你进。念错了，你就留下陪我们。"`,
        effects: {"sanity":-2,"yin":4},
        choices: [{"text":"念秀兰的名字","next":"huimen_exp3_zhou_mansion_cellar_door_talk_xiulan","effects":{"yin":2}},{"text":"念九个人的名字","next":"huimen_exp3_zhou_mansion_cellar_door_talk_nine","condition":{"flag":"huimen_exp3_knows_seven_women"},"effects":{"sanity":5,"yin":-2}}],
    },
    huimen_exp3_zhou_mansion_cellar_door_talk_xiulan: {
        title: '只念一人',
        text: `你只念了秀兰的名字。

门后沉默了很久。然后石门缓缓打开一条缝，缝里伸出一只苍白的手，把你拉了进去。

"秀兰说，你会来的。"那声音说，"我们让她先见你。"`,
        effects: {"sanity":-3,"yin":5},
        choices: [{"text":"走进石室","next":"huimen_exp3_zhou_mansion_cellar_women_want","effects":{"yin":1}}],
    },
    huimen_exp3_zhou_mansion_cellar_door_talk_nine: {
        title: '九名',
        text: `你把九个人的名字一一念出。

有的名字你已经知道，有的是从族谱上背下来的。每念一个，门后的哭声就轻一分。

念到最后一个名字时，石门无声地开了。门后的女子身影朝两侧让开，露出供桌上那块无字牌位。

"给我们立个名。"她们说，"有名，才能走。"`,
        effects: {"sanity":5,"yin":-3},
        choices: [{"text":"在无字牌位上写下九个人的名字","next":"huimen_exp3_zhou_mansion_cellar_name_stele","effects":{"sanity":8,"yin":-5}}],
    },
    huimen_exp3_zhou_mansion_cellar_women_want: {
        title: '她们的心愿',
        text: `九个女子身影围成一圈，把你和无字牌位围在中间。

"我们想要一个名字。"最前面的身影说，"周家把我们的名字从族谱上划掉，我们就成了无名的鬼。无名，就不能投胎，不能回家。"

"帮我们刻回名字。"另一个身影说，"刻回名字，我们就放秀兰走。"`,
        effects: {"sanity":-3,"yin":5},
        choices: [{"text":"答应她们","next":"huimen_exp3_zhou_mansion_cellar_name_stele","effects":{"sanity":5,"yin":-2}},{"text":"说只带秀兰走","next":"huimen_exp3_zhou_mansion_cellar_women_angry","effects":{"yin":8}}],
    },
    huimen_exp3_zhou_mansion_cellar_women_angry: {
        title: '众怒',
        text: `"只带她走？"女子们的声音重叠在一起，像井底的回声，"我们也是秀兰。我们也是被人忘了的秀兰。"

她们的影子朝你压过来，地窖里的温度骤降。你感觉呼吸开始困难，像是有水灌进肺里。`,
        effects: {"sanity":-8,"yin":8},
        choices: [{"text":"改口答应所有人","next":"huimen_exp3_zhou_mansion_cellar_name_stele","effects":{"sanity":3,"yin":-2}},{"text":"拼死冲出地窖","next":"huimen_exp_village_street","effects":{"sanity":-5,"yin":5}}],
    },
    huimen_exp3_zhou_mansion_cellar_name_stele: {
        title: '地窖名碑',
        text: `你咬破手指，用血在无字牌位上写下九个名字。

每一个名字落上去，牌位就轻一分。女子身影一个个淡去，最后只剩秀兰站在你面前。

"你做到了。"她说，"现在，我可以跟你走了。"

她伸出手，掌心里是一枚冰凉的骨片。`,
        effects: {"sanity":10,"yin":-10,"addItem":"秀兰骨片","setFlag":"huimen_exp3_freed_nine_women"},
        choices: [{"text":"握住她的手","next":"huimen_exp3_xiulan_hand","effects":{"sanity":5,"yin":-3}}],
    }
};
