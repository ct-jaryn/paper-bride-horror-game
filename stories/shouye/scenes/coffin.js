/**
 * 《守夜》场景模块：coffin
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    coffin_to_yunxiu: createScene('coffin_to_yunxiu', {
        title: "戏台棺",
        text: "你费了九牛二虎之力，把那口柚木棺材从地下室搬了上来。\n\n棺材比想象中轻——也许是因为它本就是为云袖做的，也许是因为有什么在帮你。每上一级台阶，你都觉得身后有一股温柔的力量在托着棺尾。\n\n你把棺材停在七号厅中央，打开棺盖，让红绸幕布和刻满的唱词显露出来。\n\n云袖——七号厅灵床上的女尸——缓缓坐起身来。\n\n她飘到棺材前，低头看着里面的幕布、唱词、还有老张头刻的那行字。\n\n良久，她抬起头，眼里映着棺材内壁的牡丹雕花。\n\n\"这是……戏台。\" 她的声音颤抖，\"有人，给我做了一座戏台。\"\n\n她转过身，对着你深深一福。\n\n\"守夜人，\"她说，\"我等了近百年的戏台，终于有了。请你去地下室，把我生前的曲谱、周生留给我的信，还有那套头面，都拿来。今夜，我要在这座戏台上，唱完《牡丹亭》。\"",
        effects: {
            sanity: 20,
            yin: -30,
            setFlag: "coffinReady",
        },
        choices: [
            createChoice({
                text: "去地下室取齐所有物件",
                next: "coffin_final_rite",
                condition: {
                    flag: "foundZhouShengCache",
                },
            }),
            createChoice({
                text: "还差些东西，去取齐",
                next: "basement_lockers",
                condition: {
                    noFlag: "foundZhouShengCache",
                },
            }),
            createChoice({
                text: "还差棺材里的幕布，去旧戏台找",
                next: "go_old_stage",
                condition: {
                    noFlag: "foundCoffin",
                },
            }),
        ],
    }),
    coffin_final_rite: createScene('coffin_final_rite', {
        title: "戏台成",
        text: "你把云袖手抄的曲谱摊开在棺盖内侧，把旦角头面摆在棺头的牡丹雕花旁，把周生的信折好，压在梳妆台的铜镜下。\n\n你打开手机，找到《牡丹亭·惊梦》的伴奏，音量调到最小，放在棺材一角。\n\n然后，你退到七号厅的角落，静静地等。\n\n云袖飘进棺材里，躺在红绸幕布上，就像躺在真正的戏台上。她的戏服在没有任何光源的七号厅里，泛着一种自带的、微弱的红光。\n\n她开口了。\n\n[whisper]\"原来姹紫嫣红开遍，似这般都付与断井颓垣。良辰美景奈何天，赏心乐事谁家院……\"[/whisper]\n\n起初声音很轻，像是怕惊扰了什么。渐渐地，她的声音清亮起来，婉转起来，七号厅的空气仿佛都跟着震颤。\n\n唱到《寻梦》一折——那个她当年没能唱完的段落——她的声音哽咽了一下。\n\n但只是一下。\n\n她继续唱下去，每一个字都像是从近百年的水底浮上来的，沉重，又轻盈。\n\n唱到最后一折，她的声音已经不像是从喉咙里发出的，而是从棺材内壁的唱词里、从幕布的经纬里、从头面的珠翠里，一起共鸣出来的。\n\n一曲终了。\n\n云袖躺在棺材里，看着天花板，笑了。\n\n[red]那是近百年来，她第一次真正完整的笑。[/red]",
        effects: {
            sanity: 25,
            yin: -40,
            setFlag: "riteComplete",
        },
        choices: [
            createChoice({
                text: "为她合上棺盖，送她最后一程",
                ending: "hidden_stageCoffinFarewell",
            }),
            createChoice({
                text: "念周生的信给她听",
                next: "coffin_read_letter",
                condition: {
                    hasItem: "周生的信",
                },
            }),
            createChoice({
                text: "取出旧登记册，念给她听那些被记录过的名字",
                next: "shouye_item_use_registry",
                condition: {
                    hasItem: "旧登记册",
                },
                hidden: true,
                effects: {
                    sanity: 5,
                    yin: -10,
                },
            }),
            createChoice({
                text: "把春香班戏单贴在棺盖上，让她再看一次自己的名字",
                next: "shouye_item_use_playbill",
                condition: {
                    hasItem: "春香班戏单",
                },
                hidden: true,
                effects: {
                    sanity: 5,
                    yin: -10,
                },
            }),
            createChoice({
                text: "取出茶楼旧账本，替她结清那两块桂花糕的账",
                next: "shouye_item_use_teahouse_ledger",
                condition: {
                    hasItem: "茶楼旧账本",
                },
                hidden: true,
                effects: {
                    sanity: 5,
                    yin: -10,
                },
            }),
            createChoice({
                text: "把珠花还给她，让她戴着去见周生",
                next: "shouye_item_use_pearl_flower",
                condition: {
                    hasItem: "云袖的珠花",
                },
                hidden: true,
                effects: {
                    sanity: 5,
                    yin: -10,
                },
            }),
            createChoice({
                text: "问她，愿不愿意被后人记住",
                next: "coffin_remember_her",
                condition: {
                    flag: "yunxiuWishComplete",
                },
            }),
        ],
    }),
    coffin_read_letter: createScene('coffin_read_letter', {
        title: "念信",
        text: "你从棺材边拿起那封信，展开，一字一句地念给云袖听：\n\n[faded]\"云袖吾爱，戏台将塌，我不得不将你移入青石河。水能灭火，亦能锁魂。待我找到救你之法，必来寻你。\"[/faded]\n\n[faded]\"可我找了一辈子，也没找到救你的法子。水锁了你的魂，也锁了我的心。我终于明白，能让你解脱的，不是法术，是一座戏台，和一个愿意听你唱完的人。\"[/faded]\n\n[faded]\"云袖，如果有一天，有人把我的信念给你听，那说明，你终于等到了你的戏台。那一刻，请你也原谅我——原谅我当年没能陪你唱完。\"[/faded]\n\n[faded]\"我会在水底等你。青石河的尽头，有一盏我为你点的长明灯。\"[/faded]\n\n[faded]\"周生泣笔。\"[/faded]\n\n你念完最后一个字，七号厅里安静得能听见心跳。\n\n云袖躺在棺材里，泪水从眼角滑落，滴在红绸幕布上，晕开一朵朵暗红的花。\n\n\"他……一直在等我。\" 她说，\"而我，一直在怨他。\"\n\n她闭上眼，再睁开时，已经没有了泪水。\n\n\"守夜人，\"她说，\"我想去青石河的尽头，找他。\"",
        effects: {
            sanity: 15,
            yin: -25,
            setFlag: "yunxiuForgaveZhouSheng",
        },
        choices: [
            createChoice({
                text: "带她去青石河",
                next: "coffin_to_river",
                effects: {
                    time: 60,
                },
            }),
            createChoice({
                text: "先合上棺盖，让她在戏台上安息",
                ending: "hidden_stageCoffinFarewell",
            }),
        ],
    }),
    coffin_to_river: createScene('coffin_to_river', {
        title: "青石河",
        text: "天亮前，你请了假，把柚木棺材用殡仪馆的运尸车运到了青石河边。\n\n河水在晨雾里静静地流着。你把棺材停在河岸上，打开棺盖。\n\n云袖躺在里面，看着逐渐泛白的天际。\n\n\"周生说，青石河的尽头，有一盏他点的长明灯。\" 她说，\"我想去看看。\"\n\n你犹豫了：\"可你是……\"\n\n\"我知道。\" 她笑了，\"但我已经唱完了我的戏。戏散了，魂也该散了。\"\n\n她从棺材里坐起来，飘到河边。她的戏服在晨光里变得透明，像一层薄薄的红雾。\n\n她回过头，最后看了你一眼。\n\n\"守夜人，谢谢你。\" 她说，\"替我跟那个守了一百年册子的学徒说一声——师父没有负我。也跟那个做棺材的老木匠说一声——他做的戏台，很好。\"\n\n说完，她走进河里。\n\n河水没有漫过她的脚踝，没有打湿她的戏服。她就像一阵红色的雾，缓缓沉入水底，消失不见。\n\n你站在岸边，看着河面恢复平静。\n\n[whisper]远处，仿佛有一盏灯，在水底亮了起来。[/whisper]",
        effects: {
            sanity: 30,
            yin: -50,
            time: 90,
            setFlag: "yunxiuDeparted",
        },
        choices: [
            createChoice({
                text: "目送她离去，回殡仪馆",
                ending: "hidden_riverReunion",
            }),
            createChoice({
                text: "把周生给的纸牡丹递给她",
                next: "shouye_item_use_paper_peony",
                condition: {
                    hasItem: "河底的纸牡丹",
                },
                hidden: true,
                effects: {
                    sanity: 5,
                    yin: -10,
                },
            }),
        ],
    }),
    coffin_remember_her: createScene('coffin_remember_her', {
        title: "铭记",
        text: "\"云袖，\"你问，\"你希望被后人记住吗？\"\n\n云袖愣了一下。\n\n\"记住？\"\n\n\"不只是我，\"你说，\"我想把你的故事、春香班的故事、那场大火的真相，都写下来。让以后每一个来守夜的人都知道，七号厅曾经住过一位叫云袖的旦角，她唱得很好。\"\n\n云袖的眼睛亮了起来，那是你从未见过的、属于活人的光彩。\n\n\"如果……如果有人能记住我……\" 她的声音轻得像风，\"那我就不是一具无名女尸了。我是云袖。唱过《牡丹亭》的云袖。\"\n\n她从棺材里坐起来，把头面上的一颗珠子摘下来，递给你。\n\n\"这个给你。\" 她说，\"以后你写我的故事时，看着它，就能想起我的样子。\"\n\n你接过珠子。它在掌心里发着温润的光。",
        effects: {
            sanity: 20,
            yin: -30,
            addItem: "云袖的珠花",
            setFlag: "yunxiuRemembered",
        },
        choices: [
            createChoice({
                text: "合上棺盖，送她安息",
                ending: "hidden_stageCoffinFarewell",
            }),
            createChoice({
                text: "答应写一本关于她的书",
                ending: "hidden_yunxiuBook",
            }),
        ],
    })
};
