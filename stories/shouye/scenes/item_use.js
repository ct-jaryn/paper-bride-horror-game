/**
 * 《守夜》场景模块：item_use
 * 关键道具的额外使用场景
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    shouye_item_use_registry: createScene('shouye_item_use_registry', {
        title: '点名',
        text: `你取出那本民国旧登记册。

册子的封皮已经烂了，纸页脆得像枯叶。你翻到民国二十三年那一栏，手指顺着字迹一行一行往下移：

[faded]"民国二十三年，秋。无名女，戏服，河中捞出。存七号厅。"[/faded]

[faded]"民国二十三年，冬。周生来馆，留下铜镜、妆奁、替身纸人，托代为保管。"[/faded]

[faded]"民国二十四年，春。周生失踪，据传投青石河自尽，尸身未寻获。"[/faded]

[faded]"民国二十六年，腊月。周氏纸扎铺学徒自缢，临终遗言：'师父去找师娘了。'"[/faded]

你把登记册放在云袖的棺盖上，一字一句念给她听。

"云袖，"你说，"这里每一行字，都是有人替你记过的。你不是无名女尸，你是民国二十三年秋，从青石河里捞出来的云袖。周生认领了你，守夜人陈守一替你守了三十年，他的徒弟在床底下守了这些册子近一百年。"

云袖躺在棺中，听着听着，眼泪无声地滑落。

"原来……有那么多人在等我。"她说，"我以为只有周生。"

"不止。"你说，"现在还有我。"

登记册上的字迹在七号厅的灯下泛着微光，像是一群早已不在的人，齐齐举起了手中的灯。`,
        effects: {
            sanity: 15,
            yin: -20,
            removeItem: "旧登记册",
            setFlag: "shouye_registry_read"
        },
        choices: [
            createChoice({
                text: "合上登记册，为她盖上棺盖",
                ending: "hidden_stageCoffinFarewell"
            })
        ]
    }),

    shouye_item_use_zhou_sheng_notebook: createScene('shouye_item_use_zhou_sheng_notebook', {
        title: '周生手记',
        text: `你取出周生手记。

手记是在周生纸扎铺的废墟里找到的，蓝布封面，边角烧焦。你翻开，里面密密麻麻写满了字，有的工整，有的潦草，像是在不同的年月、不同的心境下写的。

你找到最后几页，那是民国二十四年初的日记：

[faded]"正月十六。云袖的妆奁我送到了殡仪馆。老馆长答应替我守着。他说，守夜人守的不是尸，是未了的愿。"[/faded]

[faded]"二月初三。我开始夜夜去青石河边。云袖，你在水里冷不冷？我多希望你能应我一声。"[/faded]

[faded]"三月初八。我想明白了。水能灭火，亦能锁魂。你被锁在水里，我也来水里陪你。只是我先要把这条路，指给一个愿意听我们故事的人。"[/faded]

[faded]"三月初九。今晚子时，我去桥头第三柱下等你。你不要急，我来了。"[/faded]

你合上手记，望向河水。

河水静静的，可你仿佛看见两个身影，在水底缓缓靠近。一个等了九十七年，一个走了九十七年，中间隔着一层水，却始终没有错过。

你把周生手记轻轻放在桥头第三柱下，用一块石头压住。

"周生，"你说，"路我走过了。你们的故事，我会带出去。"`,
        effects: {
            sanity: 20,
            yin: -20,
            removeItem: "周生手记",
            setFlag: "shouye_zhou_sheng_notebook_read"
        },
        choices: [
            createChoice({
                text: "回殡仪馆，把这条路也告诉云袖",
                next: "memory_tell_yunxiu"
            })
        ]
    }),

    shouye_item_use_playbill: createScene('shouye_item_use_playbill', {
        title: '戏单',
        text: `你取出那张从戏园旧址挖出来的春香班戏单。

戏单的边角被火烧焦了，可中央的字还清晰："民国二十三年九月初九。全本《牡丹亭》。主演：云袖。"

你把戏单摊开在柚木棺材的内壁上，正好贴着老张头刻的《惊梦》唱词。

"云袖，"你说，"这是你的戏单。民国二十三年九月初九，全本《牡丹亭》，你是主演。那场火没把这张单子烧完，有人把它和一朵纸牡丹一起埋在戏园地基下，埋了近一百年。"

云袖看着那张戏单，伸出手，指尖轻轻抚过"云袖"两个字。

"我真好看。"她忽然说，"这字印得真好看。"

她的声音很轻，像怕惊醒什么。

"我唱了十年《牡丹亭》，从没见过印着我名字的戏单。班主说，女子名字不能印在大戏单上，只能贴在后台的小黑板上。可这张单子上，有我的名字。"

你点点头："是你的名字。云袖。春香班当家旦角。"

戏单在棺材里发出淡淡的微光，焦黑的边缘像是被什么轻轻舔过，慢慢复原。云袖的名字，在那一瞬，亮得像一颗星。`,
        effects: {
            sanity: 20,
            yin: -25,
            removeItem: "春香班戏单",
            setFlag: "shouye_playbill_shown"
        },
        choices: [
            createChoice({
                text: "为她合上棺盖，送她走",
                ending: "hidden_stageCoffinFarewell"
            })
        ]
    }),

    shouye_item_use_teahouse_ledger: createScene('shouye_item_use_teahouse_ledger', {
        title: '还账',
        text: `你取出那本茶楼旧账本。

账本很厚，纸页发黄，每一页都记着茶客赊的账。你翻到民国二十三年那一页，云袖的名字密密麻麻：

[faded]"三月初二，云袖，桂花糕两块，赊。"[/faded]

[faded]"三月十五，云袖，龙井一壶、桂花糕两块，赊。"[/faded]

[faded]"七月七，云袖，桂花糕两块，班主代结。"[/faded]

[faded]"八月初三，云袖，桂花糕两块，周生代结。"[/faded]

[faded]"九月初八，云袖，桂花糕两块，赊。未还。"[/faded]

九月初八，是她死的前一天。

你把账本摊在棺材盖上，对着云袖说："你的桂花糕账，我替你结了。"

云袖愣了一下，然后笑了。那笑容很淡，却让你心里一酸——那是一个生前连两块桂花糕都要赊账的女子，死后有人替她还账时的表情。

"周生也替我结过一次。"她说，"他那时候穷，结完账，三天没吃上肉。"

"这次不一样。"你说，"这次是我请你。"

你从口袋里摸出两块桂花糕——是你在老茶楼买的——放在账本旁边。糕上的桂花还香着。

云袖看着那两块糕，轻轻叹了口气。

"真香。"她说，"我总算能安心地吃了。"`,
        effects: {
            sanity: 15,
            yin: -20,
            removeItem: "茶楼旧账本",
            setFlag: "shouye_ledger_paid"
        },
        choices: [
            createChoice({
                text: "看她吃完，再送她走",
                ending: "hidden_teahouseReunion"
            })
        ]
    }),

    shouye_item_use_pearl_flower: createScene('shouye_item_use_pearl_flower', {
        title: '珠花还主',
        text: `你取出云袖给你的那颗珠花。

珠花在七号厅的灯下泛着温润的光。云袖把它给你时，说"以后你写我的故事时，看着它，就能想起我的样子"。可你现在觉得，这颗珠子不该留在你手里——它应该跟云袖一起走。

你把珠花放在棺盖上，推向云袖。

"这个还给你。"你说，"你的故事，我已经记住了。不用珠子，我也能想起你。"

云袖看着那颗珠花，眼眶红了。

"你真不要？"她问，"这是我生前头面上最大的一颗珠子。"

"不要。"你说，"你带走吧。去河底找周生的时候，戴着它，他能一眼认出你。"

云袖把珠花握在手心，低头看着它，看了很久。

"我死的时候，头上什么首饰都没剩。"她说，"火太大了，全熔了。这颗珠子，是我死后第一次又有了一件属于自己的东西。"

她抬起头，对你深深一福。

"守夜人，谢谢你。你让我走得不那么难看。"`,
        effects: {
            sanity: 20,
            yin: -25,
            removeItem: "云袖的珠花",
            setFlag: "shouye_pearl_returned"
        },
        choices: [
            createChoice({
                text: "为她合上棺盖",
                ending: "hidden_stageCoffinFarewell"
            })
        ]
    }),

    shouye_item_use_paper_peony: createScene('shouye_item_use_paper_peony', {
        title: '纸牡丹',
        text: `你取出周生在河底给你的那朵纸牡丹。

纸牡丹被河水泡过，颜色褪尽了，花瓣却还很完整，一层一层，像是周生亲手扎的。你把纸牡丹放在云袖的枕边，和她的珠花、戏单放在一起。

"周生让我带给你的。"你说，"他说，他在河那头等你，点了一盏灯，你能看见。"

云袖拿起纸牡丹，贴在心口。她的身影开始发光，不是戏服的红光，是一种温柔的、像水一样流动的光。

"我等这句话，等了一百年。"她说，"不是'跟我走'，是'我等你'。"

七号厅里的阴气在消散。你能感觉到，有什么东西正在松开——不是云袖一个人的怨气，是她和周生之间那根绷了一百年的线，终于软了下来。

"我可以走了。"云袖说，"这次是真的可以走了。"

她躺回棺材里，把纸牡丹捧在胸前，像捧着一束迟到一百年的花。

你轻轻合上棺盖。`,
        effects: {
            sanity: 25,
            yin: -30,
            removeItem: "河底的纸牡丹",
            setFlag: "shouye_paper_peony_delivered"
        },
        choices: [
            createChoice({
                text: "送她最后一程",
                ending: "hidden_riverReunion"
            })
        ]
    })
};
