/**
 * 《守夜》场景模块：archive
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    county_archive: createScene('county_archive', {
        title: "县志馆",
        text: "你去了县城的县志馆，在故纸堆里泡了一整天。\n\n民国时期的县志保存得不算完整，但你在民国二十四年的警务日志里，找到了一条不起眼的记录：\n\n[faded]\"民国二十四年三月初九，青石镇周氏纸扎铺主周某，失踪。其学徒报案称，铺主留书出走，疑似投河。警方沿青石河搜寻三日，未获尸身。案卷悬置。\"[/faded]\n\n[faded]\"附：学徒供词——师父临行前交代，'我去找师娘了。铺子里的东西都留给云袖姑娘，待她回来取。'\"[/faded]\n\n你在另一本民国二十六年的日志里，找到了那个学徒的后续：\n\n[faded]\"周氏纸扎铺学徒李某某，于铺中自缢身亡。遗书称：'师父走后，铺子空了。我守了三年，师娘还没回来。我等不下去了。'警方通知其原籍亲属，无人认领，遗体存县殡仪馆五号厅。\"[/faded]\n\n你合上卷宗，靠在椅背上。\n\n一条青石河，一个纸扎铺，串起了三条人命。云袖、周生、还有那个连名字都没留下的学徒。\n\n而他们三个，至今还散落在殡仪馆和河底，等了将近一百年。",
        effects: {
            time: 120,
            sanity: -15,
            yin: 10,
            setFlag: "knowsFullArchiveTruth",
        },
        choices: [
            createChoice({
                text: "回殡仪馆，把真相告诉云袖和学徒",
                next: "archive_truth_reveal",
            }),
            createChoice({
                text: "去找周生的墓",
                next: "zhousheng_grave",
                effects: {
                    time: 60,
                },
            }),
            createChoice({
                text: "县志提到了青石镇东街的周氏纸扎铺，去旧址看看",
                next: "zhousheng_workshop_ruins",
                condition: {
                    flag: "knowsFullArchiveTruth",
                },
                hidden: true,
                effects: {
                    time: 60,
                },
            }),
        ],
    }),
    archive_truth_reveal: createScene('archive_truth_reveal', {
        title: "真相",
        text: "你回到殡仪馆，先去五号厅。\n\n那个守在床底下的学徒，听到你的脚步声，翻书声又响了起来。\n\n\"我都查到了。\" 你蹲下身，对着床底说，\"你师父，去青石河找师娘了。民国二十四年三月初九，投河，尸身没找到。\"\n\n床底沉默了很久。\n\n\"那……师娘呢？\"\n\n\"师娘一直在七号厅。\" 你说，\"但她现在知道了真相。她不怨师父了。她想去河里见他。\"\n\n学徒的声音带上了哭腔：\"那我呢？我守了这么多年……师父和师娘，他们要走了吗？\"\n\n\"你也该走了。\" 你轻声说，\"你师父临走前说，铺子里的东西都留给云袖姑娘。你替他守了这么多年，已经够了。\"\n\n床底又是一阵沉默。\n\n然后，那摞登记册缓缓滑出来，整整齐齐地停在你脚边。\n\n\"那……我能跟师娘一起走吗？\" 学徒的声音轻得像风，\"我想看看师父和师娘，在一起的样子。\"\n\n\"我去问问她。\"",
        effects: {
            sanity: 10,
            yin: -15,
            setFlag: "apprenticeWantsToLeave",
        },
        choices: [
            createChoice({
                text: "去七号厅问云袖",
                next: "yunxiu_apprentice_message",
                condition: {
                    flag: "knowsName",
                },
            }),
            createChoice({
                text: "先去找周生的墓",
                next: "zhousheng_grave",
                effects: {
                    time: 60,
                },
            }),
        ],
    })
};
