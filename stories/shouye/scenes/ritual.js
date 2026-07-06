/**
 * 《守夜》场景模块：ritual
 */

export const scenes = {
    light_incense: {
        title: '重燃三炷香',
        text: `你擦干净脸上的黑水，重新点燃三炷香，插在香炉里。

香烟袅袅升起，在空中形成一个奇怪的形状——像是一个人形，正在翩翩起舞。

女尸的眼睛缓缓闭上了。她的表情也变得安详。

你长舒一口气，以为事情结束了。

但三炷香烧到一半，同时熄灭了。

[red]香从中间断开，像是被人硬生生掐断的。[/red]

女尸的眼睛又睁开了。这一次，她的眼神里没有怨恨，只有哀求。

[whisper]"戏台……"[/whisper]`,
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: 'knowsDesire'
        },
        choices: [
            {
                text: '答应帮她',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '再点一次香，强行超度',
                next: 'force_exorcise',
                effects: { yin: 10 }
            }
        ]
    },

    curse_corpse: {
        title: '怒斥亡者',
        text: `你怒了："你到底想怎样？死了就好好死，别折腾人！"

话音刚落，七号厅的温度骤降。你呼出的气变成了白雾。

女尸直挺挺地坐了起来。

她的脖子发出"咔咔"的响声，头慢慢转向你。戏服上的红绸在无风中飘动。

"你……不敬亡者……" 她的声音像是从井底传来，"那就……替我去唱吧……"`,
        effects: {
            sanity: -40,
            yin: 30,
            visual: 'shake'
        },
        choices: [
            {
                text: '跪地求饶',
                next: 'beg_mercy'
            },
            {
                text: '逃跑',
                next: 'flee_hall7'
            }
        ]
    },

    keep_ignoring: {
        title: '继续无视',
        text: `你继续装没听见。

但那唱腔越来越大，越来越近。最后，你感觉有人在你耳边唱：

[whisper]"则为你如花美眷，似水流年……"[/whisper]

你猛地摘下耳机。

七号厅的门敞开着。女尸站在门口，湿漉漉的戏服还在滴水。

她朝你伸出手。

"来……陪我……唱完……"`,
        effects: {
            sanity: -30,
            yin: 25
        },
        choices: [
            {
                text: '跟她走',
                next: 'follow_her',
                ending: 'death_duetWithGhost'
            },
            {
                text: '反抗',
                next: 'struggle_dragged',
                ending: 'death_drownedOnLand'
            }
        ]
    },

    force_exorcise: {
        title: '强行超度',
        text: `你点燃一把香，围着灵床走动，口中念诵在网上查到的往生咒。

女尸开始剧烈颤抖。她的嘴张得极大，黑色的河水不断涌出。

"住手……" 她的声音凄厉，"你不懂……你不该这样……"

你不管不顾，继续念咒。

突然，所有的香同时熄灭。女尸的身体僵直，然后——

[scream]她爆炸成了一团黑水。[/scream]

黑水溅满了整个七号厅。你站在黑水中，以为结束了。

但黑水里，慢慢浮出无数个小小的戏台。每个戏台上，都有一个云袖在唱。

[whisper]"还我戏台……还我戏台……"[/whisper]

你再也走不出七号厅了。`,
        ending: 'death_endlessChorus'
    },

    beg_mercy: {
        title: '跪地求饶',
        text: `你跪在地上："对不起！我错了！我不该不敬亡者！求你放过我！"

女尸歪着头看你，像是在打量一只蝼蚁。

"放过你？" 她说，"那谁来放过我？"

她的手掐住你的脖子。那不是实体，而是冰冷的河水。

你感到自己在下沉，下沉，沉到一条漆黑的河里。河底有无数戏台，每个戏台上都在唱《牡丹亭》。

你成了观众之一。

永远。`,
        ending: 'death_drownedOnLand'
    }
};
