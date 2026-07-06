/**
 * 《守夜》场景模块：investigation
 */

export const scenes = {
    ask_her_name: {
        title: '云袖',
        text: `你壮着胆子问："你是谁？有什么未了的心愿？"

女尸没有回答。但她的右手缓缓抬起，指向自己的戏服腰带。

你犹豫了一下，轻轻解开她的腰带。里面缝着一张泛黄的照片和一张纸条。

照片上是一个戏班子的合影。十几个演员站在戏台前，中间站着一个穿红戏服的年轻女子，笑得很甜。

照片边角有些模糊，但你隐约看见戏台后方的青石河畔，站着一个穿红衣裳的背影。那背影面向河水，长发垂到腰际，仿佛正在低头唱着什么。

你不确定那是照片上的污渍，还是真有人站在那里。

纸条上写着一行字：

[faded]"民国二十三年，春香班于青石镇演出《牡丹亭》，旦角柳梦梅者，名唤云袖。演至《幽媾》一出，戏台坍塌，云袖葬身火海。此后每逢雨夜，戏台自鸣锣鼓。"[/faded]

[whisper]原来她不是无名女尸。[/whisper]

她叫云袖，是一个死了近百年的戏子。`,
        effects: {
            sanity: -10,
            setFlag: 'knowsName'
        },
        choices: [
            {
                text: '搜索档案，查云袖的资料',
                next: 'search_archives'
            },
            {
                text: '把照片和纸条放回原处',
                next: 'return_items',
                effects: { yin: 5 }
            },
            {
                text: '把照片烧给她',
                next: 'burn_photo',
                effects: { yin: -10 }
            },
            {
                text: '你摸到口袋里的银钗，轻轻放在她眉心',
                next: 'silver_hairpin_memory',
                condition: { hasItem: '云袖的银钗' },
                hidden: true,
                effects: { sanity: -5, yin: -10 }
            }
        ]
    },

    // 银钗唤忆（新增分支）,

    silver_hairpin_memory: {
        title: '银钗唤忆',
        text: `你摸出口袋里那枚银钗。钗身上刻着两个小字：[faded]"云袖"[/faded]。

你轻轻把银钗放在女尸的眉心。

刹那间，七号厅里的空气像是凝固了。女尸的眼睛猛地睁大，但这一次，那里面不是空洞，而是复杂的情绪——惊讶、悲伤、还有一丝久违的温柔。

"这是我的……" 她的声音不再嘶哑，变得清亮，"民国二十三年，班主把它赏给我，说我唱得最好。"

她的目光移向你，像是第一次真正"看见"你。

"你从哪里得到它的？"

"青石镇。" 你说，"旧戏台的废墟里。"

她闭上眼睛，一滴红色的泪从眼角滑落，滴在银钗上。

"原来，真的有人记得我。" 她说，"不只记得我的死，还记得我的戏。"`,
        effects: {
            sanity: 5,
            yin: -20,
            setFlag: 'yunxiuMemoryRestored'
        },
        choices: [
            {
                text: '问她想唱完哪一出',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '把银钗留给她，退到一旁',
                next: 'return_items',
                effects: { yin: -5 }
            }
        ]
    },

    ignore_her: {
        title: '视而不见',
        text: `你关掉手电筒，退出门外，轻轻带上门。

走廊里安静得可怕。你坐回塑料椅，假装什么都没发生。

但你知道，门后的她在看着你。

凌晨一点，走廊的灯开始闪烁。你听见七号厅里传来细微的声响——

[whisper]沙沙。沙沙。[/whisper]

像是有人在用指甲刮门。

你戴上耳机，把音乐调到最大声。

可音乐里混进了一个女人的唱腔，凄婉悠长：

[whisper]"原来姹紫嫣红开遍，似这般都付与断井颓垣……"[/whisper]`,
        effects: {
            sanity: -20,
            yin: 20,
            time: 60
        },
        choices: [
            {
                text: '摘下耳机，回去处理',
                next: 'enter_with_flashlight'
            },
            {
                text: '继续装没听见',
                next: 'keep_ignoring',
                effects: { sanity: -10, yin: 10 }
            }
        ]
    },

    check_water_stain: {
        title: '水渍文字',
        text: `你蹲下身，用手电筒照着那片水渍。

水渍不是普通的脚印。它是由无数细小的文字组成的，每个字都只有蚂蚁大小：

[faded]"还我戏台。"[/faded]

四个字，密密麻麻地重复了千百遍。

你抬头看向灵床。女尸还闭着眼睛，但她的嘴唇在动，无声地重复着同一句话：

[whisper]"还我戏台。还我戏台。还我戏台。"[/whisper]

你突然明白了。她不是来害你的。她想回到戏台，唱完那出没唱完的戏。`,
        effects: {
            sanity: -5,
            setFlag: 'knowsDesire'
        },
        choices: [
            {
                text: '答应帮她完成心愿',
                next: 'promise_help',
                effects: { setFlag: 'promised' }
            },
            {
                text: '这是别人的事，与你无关',
                next: 'not_my_problem',
                effects: { yin: 15 }
            }
        ]
    },

    search_archives: {
        title: '旧档案',
        text: `你跑到档案室，翻找旧报纸。

在一堆发黄的报纸中，你找到了民国二十三年的一则新闻：

[faded]"青石镇戏台昨夜坍塌，春香班名伶云袖不幸遇难。据称，坍塌前云袖坚持要唱完《牡丹亭》最后一折，拒绝离台。班主称，云袖生前最大的心愿，是能以杜丽娘之身死在戏台上。"[/faded]

报纸旁边还有一张照片：戏台坍塌后，废墟中露出一只穿红绣鞋的女足。

你把报纸翻过来，背面右下角有一则小小的广告，用木刻字印着：

[faded]"周氏纸扎铺，青石镇东街。专扎冥婚喜服、纸人纸马，手艺精湛，百年老店。"[/faded]

你不明白为什么一则纸扎铺的广告会和云袖的新闻出现在同一张报纸上。也许，只是巧合。

云袖等了快一百年，只是想唱完那出戏。`,
        effects: {
            sanity: -5,
            setFlag: 'knowsFullStory'
        },
        choices: [
            {
                text: '回七号厅，告诉她你知道了',
                next: 'promise_help'
            },
            {
                text: '去旧戏台遗址',
                next: 'go_old_stage',
                effects: { time: 60 }
            }
        ]
    },

    return_items: {
        title: '归还遗物',
        text: `你把照片和纸条重新塞回她的腰带，恭敬地鞠了三个躬。

"我不知道你想要什么，但我会尊重你。"

女尸的眼睛缓缓闭上了。她的嘴角似乎微微上扬，像是在笑。

你退出七号厅，轻轻带上门。

这一夜，七号厅再没传出任何声响。

天亮了，林叔来接班。他看着七号厅，点点头："你是个好守灵人。"`,
        ending: 'normal_peacefulRest'
    },

    burn_photo: {
        title: '焚照',
        text: `你用打火机点燃照片，放在女尸脚边的铁盆里。

火苗舔上照片，云袖的笑容在火焰中扭曲。

"我给你烧了照片，" 你说，"你可以安心走了。"

照片烧完，铁盆里只剩下一堆灰。灰里突然伸出一只苍白的手，抓住你的手腕。

女尸的眼睛睁得极大，眼眶里流出黑色的泪水：

[scream]"那不是我要的！"[/scream]

你被拖向灵床。`,
        effects: {
            sanity: -35,
            yin: 30
        },
        choices: [
            {
                text: '挣扎',
                next: 'struggle_dragged',
                ending: 'death_drownedOnLand'
            }
        ]
    }
};
