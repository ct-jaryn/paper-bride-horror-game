/**
 * 《守夜》场景模块：victims_release_rite
 * 青石戏台废墟超度三魂：群戏散场
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    three_souls_rite: createScene('three_souls_rite', {
        title: "群戏散",
        text: "你站在废墟正中央，依次对三个方向说话。\n\n对老生位：\"秦先生，孩子活下来了。\"\n\n对花脸位：\"赵先生，脸卸了。\"\n\n对琴师位：\"孙先生，弦续上了。\"\n\n说完，你闭上眼，静静等待。\n\n风过废墟，发出呜呜的声响，像是戏台的幕布最后一次抖动。\n\n然后，三个声音同时响起，齐齐唱了一句——\n\n[whisper]\"今日散场，各自归家。\"[/whisper]\n\n这是一句戏班的散场词。你听何伯说过，老戏班每演完一出，班主都会喊这句。\n\n可这一次，是三个亡魂，对着彼此喊的。\n\n声音渐渐远了。废墟上空，三缕青烟汇成一股，朝青石河的方向飘去。\n\n[whisper]他们去找云袖和周生了。同一个班子的，总要齐齐整整地走。[/whisper]\n\n你睁开眼，废墟恢复了真正的死寂。\n\n但这一次，是干净的死寂。",
        effects: {
            sanity: 25,
            yin: -30,
            setFlag: "sunReleased",
        },
        choices: [
            createChoice({
                text: "回殡仪馆继续守夜",
                next: "enter_with_flashlight",
            }),
            createChoice({
                text: "回殡仪馆告诉云袖，她的同伴走了",
                next: "three_souls_to_yunxiu",
                condition: {
                    flag: "knowsName",
                },
            }),
        ],
    }),
    three_souls_complete: createScene('three_souls_complete', {
        title: "三人皆散",
        text: "三缕青烟都散尽了。\n\n废墟上只剩下你一个人。风过荒草的声音，恢复了普通的风声，不再有唱腔。\n\n你长舒一口气。\n\n三个困了近百年的亡魂，终于散场了。\n\n[red]可你忽然意识到一件事——[/red]\n\n云袖，作为春香班的旦角，是最后一个还在\"唱戏\"的人。\n\n如果她的同伴都走了，她是不是也该走了？\n\n[whisper]她的戏台，是时候真正搭起来了。[/whisper]",
        effects: {
            sanity: 15,
            yin: -15,
            setFlag: "threeSoulsReleased",
        },
        choices: [
            createChoice({
                text: "回殡仪馆告诉云袖",
                next: "three_souls_to_yunxiu",
                condition: {
                    flag: "knowsName",
                },
            }),
            createChoice({
                text: "去找他们的后人",
                next: "victim_descendants",
            }),
        ],
    }),
    three_souls_to_yunxiu: createScene('three_souls_to_yunxiu', {
        title: "同伴",
        text: "你回到七号厅，把废墟上发生的事告诉云袖。\n\n云袖听完，沉默了很久。\n\n\"秦叔、赵哥、孙师傅……都走了吗？\" 她的声音很轻。\n\n\"都走了。\"你说，\"他们最后喊了一句'各自归家'。\"\n\n云袖的眼角，缓缓流下一滴泪。\n\n\"我们春香班，\"她低声说，\"散了快一百年了。我以为，我是最后一个还守着戏的人。\"\n\n她抬起头，看着七号厅的天花板，像是能透过层层楼板，看见青石镇废墟上空那三缕飘散的青烟。\n\n\"他们也等了我快一百年。\" 她说，\"等我和他们一起，回家。\"\n\n她转向你，眼神里没有了犹豫。\n\n\"守夜人，\"她说，\"我也该走了。我的戏，唱完了。班子里的人，都在河那头等我。\"",
        effects: {
            sanity: 20,
            yin: -30,
            setFlag: "yunxiuWishComplete",
        },
        choices: [
            createChoice({
                text: "为她搭起最后的戏台",
                next: "coffin_to_yunxiu",
                condition: {
                    flag: "foundCoffin",
                },
            }),
            createChoice({
                text: "送她去青石河与同伴重逢",
                next: "coffin_to_river",
                condition: {
                    flag: "foundCoffin",
                },
                effects: {
                    time: 60,
                },
            }),
        ],
    })
};
