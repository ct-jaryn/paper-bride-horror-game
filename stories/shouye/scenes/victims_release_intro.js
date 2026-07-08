/**
 * 《守夜》场景模块：victims_release_intro
 * 青石戏台废墟超度三魂：入口
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    old_stage_victims: createScene('old_stage_victims', {
        title: "废墟三魂",
        text: "你请了假，再次赶到青石镇。\n\n老戏台的废墟还在。烧焦的木桩、塌了一半的台基、地上爬满了荒草。镇上人夜里不敢靠近，说这儿\"邪\"。\n\n你站在废墟中央，闭上眼。\n\n风过荒草的声音里，你听见了——\n\n不是云袖的唱腔，而是三个男人的声音。\n\n一个苍凉的、唱老生的男声：[whisper]\"救……出来了吗……那个孩子……\"[/whisper]\n\n一个浑厚的、唱花脸的男声：[whisper]\"我的脸……卸不下来了……\"[/whisper]\n\n一个沙哑的、哼琴师的调子：[whisper]\"我的二胡……弦断了……\"[/whisper]\n\n三个声音重叠在一起，像一出永远唱不完的群戏。\n\n你睁开眼。废墟上空无一人，但你能感觉到，他们就在这里，困了近百年，反复重演着火起的那一刻。\n\n[faded]他们和云袖一样，需要有人帮他们散场。[/faded]",
        effects: {
            time: 60,
            sanity: -15,
            yin: 20,
            visual: "flicker",
        },
        choices: [
            createChoice({
                text: "告诉秦鸣远，那个孩子活下来了",
                next: "qin_release",
                condition: {
                    flag: "knowsVictimDetails",
                },
            }),
            createChoice({
                text: "帮赵铁柱卸掉那张花脸",
                next: "zhao_release",
                condition: {
                    flag: "knowsVictimDetails",
                },
            }),
            createChoice({
                text: "替孙瞎子修好那把二胡",
                next: "sun_release",
                condition: {
                    flag: "knowsVictimDetails",
                },
            }),
            createChoice({
                text: "三魂齐度",
                next: "three_souls_rite",
                condition: {
                    flag: "knowsVictimDetails",
                },
            }),
            createChoice({
                text: "他们还缺一个名字，先去查清三人姓名",
                next: "fire_victim_detail",
            }),
        ],
    })
};
