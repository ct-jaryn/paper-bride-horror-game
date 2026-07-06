/**
 * 《守夜》场景模块：zhousheng_ruins
 * 周生纸扎铺、桥头与还绳
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    zhousheng_workshop_ruins: createScene('zhousheng_workshop_ruins', {
        title: "纸扎铺",
        text: "你循着登记册上的地址，找到了青石镇东街。\n\n如今的东街已经拆迁大半，只剩几间破败的老铺面。周氏纸扎铺的门脸还在，但招牌早已脱落，只剩两个生锈的铁钩。\n\n你推开虚掩的板门。铺子里空空荡荡，地上积了厚厚的灰。柜台后面，还挂着几件落满虫蛀的纸扎人偶。\n\n在柜台的抽屉里，你找到了一本蓝布封皮的手抄本——是周生的手记。\n\n你翻开。里面记的都是些纸扎的手艺：怎么扎牡丹花瓣，怎么调朱漆，怎么给纸人开脸。\n\n但在手记的最后几页，字迹变得潦草，内容也从手艺变成了絮语：\n\n[faded]\"云袖走后第三月。我夜夜去青石河边，想听她唱戏。可河水只有哗哗声。\"[/faded]\n\n[faded]\"云袖走后第六月。班主说春香班散了。我把他给我的定亲铜镜，托殡仪馆的老馆长代存。我说，等有缘人来了，还给她。\"[/faded]\n\n[faded]\"云袖走后第九月。我终于想明白了。她在水里等我。我应该去。\"[/faded]\n\n最后一页，只有一行字，墨迹晕开，像是被泪水打湿过：\n\n[faded]\"青石河，桥头第三柱下。云袖，我来找你了。\"[/faded]",
        effects: {
            time: 60,
            sanity: -15,
            yin: 10,
            setFlag: "foundZhouShengDiary",
            addItem: "周生手记",
        },
        choices: [
            createChoice({
                text: "去青石桥第三柱看看",
                next: "zhousheng_bridge",
            }),
            createChoice({
                text: "去找瞎眼阿婆问周生的事",
                next: "paper_shop_visit",
                effects: {
                    time: 30,
                },
            }),
        ],
    }),
    zhousheng_bridge: createScene('zhousheng_bridge', {
        title: "桥头",
        text: "你来到青石桥，数到第三根桥柱。\n\n桥柱的石缝里，卡着一截褪色的红绳。你认得——那和你（周生记忆里）剪断的那根，是一样的编法。\n\n你蹲下身，把红绳从石缝里抠出来。绳子已经朽了，一碰就掉渣，但你依稀能看出，绳头打着一个同心结。\n\n[faded]那是定情时打的结。[/faded]\n\n你握着这截红绳，望向桥下的青石河。河水浑浊，看不见底。\n\n你忽然想起手记里的话：\"青石河，桥头第三柱下。云袖，我来找你了。\"\n\n周生就是从这里，跳下去的。\n\n他剪断了云袖腕上的红绳，又在这根桥柱下，把自己交给了同一条河。\n\n[whisper]水能灭火，亦能锁魂。他把这两样，都应验在了自己身上。[/whisper]\n\n你把红绳小心地收好。也许，云袖见到这截红绳，就能明白周生最后的心意。",
        effects: {
            sanity: -10,
            yin: 5,
            setFlag: "foundRedRope",
            addItem: "褪色的同心结红绳",
        },
        choices: [
            createChoice({
                text: "回殡仪馆，把红绳给云袖看",
                next: "zhousheng_rope_to_yunxiu",
                condition: {
                    flag: "knowsName",
                },
            }),
            createChoice({
                text: "去县志馆查周生投河的记录",
                next: "county_archive",
                effects: {
                    time: 60,
                },
            }),
        ],
    }),
    zhousheng_rope_to_yunxiu: createScene('zhousheng_rope_to_yunxiu', {
        title: "还绳",
        text: "你回到七号厅，把那截褪色的同心结红绳，放在云袖的枕边。\n\n云袖低头看着那截红绳，身体微微颤抖。\n\n\"这是……\" 她的声音哽咽，\"我腕上的那根。他剪断了它，可他又捡了回来，打成了同心结，留在了桥头。\"\n\n她伸出苍白的手，把红绳捧在掌心。红绳在她手里，渐渐泛起一点温润的光，像是被什么捂热了。\n\n\"他一直没忘。\" 云袖的泪水滴在红绳上，\"剪断是为了救我，结成同心，是为了告诉我——他从未想断。\"\n\n她抬起头，看着你。\n\n\"守夜人，\"她说，声音平静而坚定，\"我想去青石河。不是怨，不是等。是去见他。我已经唱完了我的戏，他也该从水底上来了。\"",
        effects: {
            sanity: 20,
            yin: -30,
            setFlag: "yunxiuReadyToMeet",
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
                text: "先去县志馆确认周生投河的真相",
                next: "county_archive",
                effects: {
                    time: 60,
                },
            }),
        ],
    })
};
