/**
 * 《守夜》场景模块：memory_fire
 * 周生回忆线：大火、救人、梦醒、转述
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    memory_fire_night: createScene('memory_fire_night', {
        title: "大火",
        text: "民国二十三年，秋分。\n\n春香班要在青石戏台演一场大戏——全本《牡丹亭》。这是云袖的心愿，她想完整地唱一遍这出戏。\n\n你（周生）提前一个月，扎了一座纸花的戏台牌楼，准备在散戏时烧给她，贺她圆满。\n\n可那天晚上，出事了。\n\n戏唱到《寻梦》一折。云袖扮着杜丽娘，正唱到\"偶然心间缱绻\"——\n\n[faded]戏台的后梁，发出一声沉闷的断裂声。[/faded]\n\n你（周生）就坐在第一排。你抬头，看见后梁的榫卯处，冒出了一缕烟。紧接着，火舌从横梁的缝隙里窜了出来。\n\n老戏台是木结构，上了大漆，一旦着火，就是燎原之势。\n\n\"着火了！\" 有人尖叫。\n\n戏园子大乱。观众拼命往门口挤，踩踏声、呼救声响成一片。\n\n可台上的云袖没有动。\n\n她还在唱。\n\n[whisper]\"生生死死随人愿……\"[/whisper]\n\n她像着了魔一样，不肯下台。火已经烧到了幕布，红色的火光映着她的红戏服，分不清哪里是火，哪里是人。\n\n\"云袖！\" 你（周生）疯了一样冲上台。",
        effects: {
            sanity: -15,
            yin: 15,
            visual: "shake",
        },
        choices: [
            createChoice({
                text: "冲上台去救她",
                next: "memory_save_yunxiu",
            }),
        ],
    }),
    memory_save_yunxiu: createScene('memory_save_yunxiu', {
        title: "救人",
        text: "火已经封住了下台的路。\n\n你（周生）冲上台，一把抓住云袖的手腕。她的手腕上系着一根红绳——那是你送她的定情红绳。\n\n\"走！\" 你喊。\n\n\"不！\" 云袖甩开你的手，\"我还没唱完！戏没散，我不能走！\"\n\n\"命都要没了，还唱什么戏！\"\n\n火舌舔上了云袖的水袖。她终于惊恐地叫了一声，可腿软了，走不动。\n\n你（周生）做了一个决定。\n\n你从怀里掏出扎纸花用的剪刀，一刀剪断了她手腕上的红绳。\n\n[faded]你后来无数次想：是不是剪断那根红绳的那一刻，就把她和戏台、和生，都剪断了。[/faded]\n\n你抱起云袖，往戏台后方冲。后台有一扇暗门，直通青石河——这是老戏园子的设计，方便卸货，也方便逃生。\n\n你踹开暗门，把云袖推了出去。\n\n\"云袖，\"你说，\"水能灭火，亦能锁魂。你先走，到水里等我。我随后就来。\"\n\n云袖跌进了河里。你听见落水声。\n\n然后，戏台的横梁塌了下来，压住了你的腿。\n\n你（周生）趴在火里，看着河水吞没了云袖的红戏服。\n\n[faded]你想爬过去，可腿被压住了。你想喊她的名字，可浓烟灌进了你的喉咙。[/faded]\n\n记忆在这里，碎成了无数火红的碎片。",
        effects: {
            sanity: -25,
            yin: 20,
            visual: "flicker",
        },
        choices: [
            createChoice({
                text: "从梦境中醒来",
                next: "memory_wake_up",
            }),
        ],
    }),
    memory_wake_up: createScene('memory_wake_up', {
        title: "惊梦醒",
        text: "你猛地从镜子前退开，一屁股坐在地下室的地上。\n\n手电筒滚落在地，光柱乱晃。你大口喘气，冷汗把后背的衣服浸透了。\n\n刚才那些——春香班、云袖、那场火、周生——全都是真真切切的记忆，涌进了你的脑子里。\n\n你低头看自己的手。手心里，有一道浅浅的红印，像是曾经握过一根红绳，又被生生勒出来的痕迹。\n\n[whisper]那是周生的手，留给你的印记。[/whisper]\n\n你抬头看向梳妆台上的铜镜。镜面恢复了正常，映出你苍白、冷汗涔涔的脸。\n\n但在镜子的角落，你似乎看见一个穿红戏服的身影，正缓缓转身，走向远方。\n\n[faded]\"谢谢你，让我知道他尽力了。\"[/faded]\n\n一个轻柔的声音，像是从镜子里传来，又像是从你心里浮起。\n\n你扶着墙站起来。地下室恢复了死寂。\n\n但你知道，云袖的故事，你现在已经完完整整地知道了。",
        effects: {
            sanity: -10,
            yin: -10,
            setFlag: "yunxiuMemoryRestored",
        },
        choices: [
            createChoice({
                text: "上楼，把这一切告诉云袖",
                next: "memory_tell_yunxiu",
            }),
            createChoice({
                text: "先看看棺材和其他物件",
                next: "basement_coffins",
                condition: {
                    flag: "knowsCoffin",
                },
            }),
            createChoice({
                text: "先看看棺材和其他物件",
                next: "basement_coffins_normal",
            }),
        ],
    }),
    memory_tell_yunxiu: createScene('memory_tell_yunxiu', {
        title: "转述",
        text: "你回到七号厅，把在镜子里看到的一切，原原本本告诉了云袖。\n\n春香班的开台戏，初见的纸花，青石河边的铜镜，还有那场大火——周生剪断红绳，把她推进暗门，自己却被横梁压住。\n\n云袖听得很安静。她没有流泪，只是眼神一点一点地变了。\n\n从怨恨，到震惊，到悲伤，最后，到一种深沉的、释然的安宁。\n\n\"原来，\"她说，\"他没有抛下我。他剪断红绳，是为了救我。他被压在火里的时候，还在看着我落水的地方。\"\n\n\"他后来呢？\" 她问。\n\n你沉默了一下，然后说：\"档案上写，民国二十四年春，周生失踪。据传投青石河自尽，尸身未寻获。\"\n\n云袖闭上眼睛。\n\n良久，她轻声说：\"他去河里找我了。\"\n\n她再睁开眼时，身上那股近百年的、浓重的怨气，肉眼可见地淡了下去。\n\n\"守夜人，\"她说，\"我想去青石河。我想去问他，这些年在水底，有没有等到我。\"",
        effects: {
            sanity: 20,
            yin: -30,
            setFlag: "yunxiuWantsRiver",
        },
        choices: [
            createChoice({
                text: "带她去青石河",
                next: "coffin_to_river",
                condition: {
                    flag: "foundCoffin",
                },
                effects: {
                    time: 60,
                },
            }),
            createChoice({
                text: "先去找周生的棺材和遗物",
                next: "basement_descent",
            }),
            createChoice({
                text: "去找周生投河的记录",
                next: "county_archive",
                effects: {
                    time: 60,
                },
            }),
        ],
    })
};
