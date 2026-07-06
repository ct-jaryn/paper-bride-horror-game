/**
 * 《守夜》场景模块：investigation_clues
 * 水渍文字与旧档案
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    check_water_stain: createScene('check_water_stain', {
        title: "水渍文字",
        text: "你蹲下身，用手电筒照着那片水渍。\n\n水渍不是普通的脚印。它是由无数细小的文字组成的，每个字都只有蚂蚁大小：\n\n[faded]\"还我戏台。\"[/faded]\n\n四个字，密密麻麻地重复了千百遍。\n\n你抬头看向灵床。女尸还闭着眼睛，但她的嘴唇在动，无声地重复着同一句话：\n\n[whisper]\"还我戏台。还我戏台。还我戏台。\"[/whisper]\n\n你突然明白了。她不是来害你的。她想回到戏台，唱完那出没唱完的戏。",
        effects: {
            sanity: -5,
            setFlag: "knowsDesire",
        },
        choices: [
            createChoice({
                text: "答应帮她完成心愿",
                next: "promise_help",
                effects: {
                    setFlag: "promised",
                },
            }),
            createChoice({
                text: "这是别人的事，与你无关",
                next: "not_my_problem",
                effects: {
                    yin: 15,
                },
            }),
        ],
    }),
    search_archives: createScene('search_archives', {
        title: "旧档案",
        text: "你跑到档案室，翻找旧报纸。\n\n在一堆发黄的报纸中，你找到了民国二十三年的一则新闻：\n\n[faded]\"青石镇戏台昨夜坍塌，春香班名伶云袖不幸遇难。据称，坍塌前云袖坚持要唱完《牡丹亭》最后一折，拒绝离台。班主称，云袖生前最大的心愿，是能以杜丽娘之身死在戏台上。\"[/faded]\n\n报纸旁边还有一张照片：戏台坍塌后，废墟中露出一只穿红绣鞋的女足。\n\n你把报纸翻过来，背面右下角有一则小小的广告，用木刻字印着：\n\n[faded]\"周氏纸扎铺，青石镇东街。专扎冥婚喜服、纸人纸马，手艺精湛，百年老店。\"[/faded]\n\n你不明白为什么一则纸扎铺的广告会和云袖的新闻出现在同一张报纸上。也许，只是巧合。\n\n云袖等了快一百年，只是想唱完那出戏。",
        effects: {
            sanity: -5,
            setFlag: "knowsFullStory",
        },
        choices: [
            createChoice({
                text: "回七号厅，告诉她你知道了",
                next: "promise_help",
            }),
            createChoice({
                text: "去旧戏台遗址",
                next: "go_old_stage",
                effects: {
                    time: 60,
                },
            }),
        ],
    })
};
