/**
 * 《守夜》场景模块：investigation_identity
 * 云袖身份与银钗唤忆
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_her_name: createScene('ask_her_name', {
        title: "云袖",
        text: "你壮着胆子问：\"你是谁？有什么未了的心愿？\"\n\n女尸没有回答。但她的右手缓缓抬起，指向自己的戏服腰带。\n\n你犹豫了一下，轻轻解开她的腰带。里面缝着一张泛黄的照片和一张纸条。\n\n照片上是一个戏班子的合影。十几个演员站在戏台前，中间站着一个穿红戏服的年轻女子，笑得很甜。\n\n照片边角有些模糊，但你隐约看见戏台后方的青石河畔，站着一个穿红衣裳的背影。那背影面向河水，长发垂到腰际，仿佛正在低头唱着什么。\n\n你不确定那是照片上的污渍，还是真有人站在那里。\n\n纸条上写着一行字：\n\n[faded]\"民国二十三年，春香班于青石镇演出《牡丹亭》，旦角柳梦梅者，名唤云袖。演至《幽媾》一出，戏台坍塌，云袖葬身火海。此后每逢雨夜，戏台自鸣锣鼓。\"[/faded]\n\n[whisper]原来她不是无名女尸。[/whisper]\n\n她叫云袖，是一个死了近百年的戏子。",
        effects: {
            sanity: -10,
            setFlag: "knowsName",
        },
        choices: [
            createChoice({
                text: "搜索档案，查云袖的资料",
                next: "search_archives",
            }),
            createChoice({
                text: "把照片和纸条放回原处",
                next: "return_items",
                effects: {
                    yin: 5,
                },
            }),
            createChoice({
                text: "把照片烧给她",
                next: "burn_photo",
                effects: {
                    yin: -10,
                },
            }),
            createChoice({
                text: "你摸到口袋里的银钗，轻轻放在她眉心",
                next: "silver_hairpin_memory",
                condition: {
                    hasItem: "云袖的银钗",
                },
                hidden: true,
                effects: {
                    sanity: -5,
                    yin: -10,
                },
            }),
        ],
    }),
    silver_hairpin_memory: createScene('silver_hairpin_memory', {
        title: "银钗唤忆",
        text: "你摸出口袋里那枚银钗。钗身上刻着两个小字：[faded]\"云袖\"[/faded]。\n\n你轻轻把银钗放在女尸的眉心。\n\n刹那间，七号厅里的空气像是凝固了。女尸的眼睛猛地睁大，但这一次，那里面不是空洞，而是复杂的情绪——惊讶、悲伤、还有一丝久违的温柔。\n\n\"这是我的……\" 她的声音不再嘶哑，变得清亮，\"民国二十三年，班主把它赏给我，说我唱得最好。\"\n\n她的目光移向你，像是第一次真正\"看见\"你。\n\n\"你从哪里得到它的？\"\n\n\"青石镇。\" 你说，\"旧戏台的废墟里。\"\n\n她闭上眼睛，一滴红色的泪从眼角滑落，滴在银钗上。\n\n\"原来，真的有人记得我。\" 她说，\"不只记得我的死，还记得我的戏。\"",
        effects: {
            sanity: 5,
            yin: -20,
            setFlag: "yunxiuMemoryRestored",
        },
        choices: [
            createChoice({
                text: "问她想唱完哪一出",
                next: "promise_help",
                effects: {
                    setFlag: "promised",
                },
            }),
            createChoice({
                text: "把银钗留给她，退到一旁",
                next: "return_items",
                effects: {
                    yin: -5,
                },
            }),
        ],
    })
};
