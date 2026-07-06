/**
 * 《守夜》场景模块：victims_release_souls
 * 青石戏台废墟超度三魂：分别超度
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    qin_release: createScene('qin_release', {
        title: "老生散",
        text: "你对着废墟，大声说：\"秦先生！那个孩子，活下来了！他叫张小宝，今年已经八十多岁了，住在镇南！他一辈子都在说，是春香班的老生救了他的命！\"\n\n风声停了片刻。\n\n那个苍凉的男声再次响起，但这次没有疑问，只有释然：\n\n[whisper]\"活下来了……就好……\"[/whisper]\n\n废墟的角落，一缕青烟升起，像是戏台上飘散的香火气，转瞬即逝。\n\n你听见一个极轻的、完整的唱段，是老生的《空城计》——\n\n[whisper]\"我本是卧龙岗散淡的人……\"[/whisper]\n\n唱到一半，声音渐渐远了。\n\n秦鸣远散了。他的戏，终于唱完了。",
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: "qinReleased",
        },
        choices: [
            createChoice({
                text: "继续超度赵铁柱",
                next: "zhao_release",
            }),
            createChoice({
                text: "继续超度孙瞎子",
                next: "sun_release",
            }),
            createChoice({
                text: "三人皆度，回殡仪馆",
                next: "enter_with_flashlight",
                condition: {
                    flag: "sunReleased",
                    flagValue: {
                        key: "zhaoReleased",
                        value: true,
                    },
                },
            }),
        ],
    }),
    zhao_release: createScene('zhao_release', {
        title: "花脸卸",
        text: "你走到废墟中央那根烧焦的横梁前——据档案，赵铁柱就是死在这里。\n\n你蹲下身，用手扒开横梁下的灰烬。灰烬深处，有一块已经风化的、画着花脸妆的戏妆残片。红的、黑的、白的油彩，已经褪得几乎看不见，但还能辨认出那是关公的脸谱。\n\n你想起档案里的话：\"他梦见自己卸了花脸妆，露出一张苍白的脸。\"\n\n\"赵先生，\"你轻声说，\"你演了一辈子关公，忠义千秋。可关公也得卸妆睡觉。你不必再戴着这张脸了。\"\n\n你把那块戏妆残片，轻轻从灰烬里取出来，放进手心。\n\n残片在你掌心慢慢软化，油彩一层层剥落，最后只剩下一小撮干净的灰。\n\n[whisper]\"卸……下来了……\"[/whisper]\n\n一个浑厚的男声，带着如释重负的疲惫。\n\n废墟的另一角，又升起一缕青烟。",
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: "zhaoReleased",
        },
        choices: [
            createChoice({
                text: "继续超度秦鸣远",
                next: "qin_release",
                condition: {
                    noFlag: "qinReleased",
                },
            }),
            createChoice({
                text: "继续超度孙瞎子",
                next: "sun_release",
            }),
            createChoice({
                text: "三人皆度，回殡仪馆",
                next: "enter_with_flashlight",
                condition: {
                    flag: "qinReleased",
                },
            }),
        ],
    }),
    sun_release: createScene('sun_release', {
        title: "二胡续弦",
        text: "你找到戏台侧后方——那是琴师的位置。\n\n灰烬里，有一把已经烧得只剩骨架的二胡。两根弦都断了，琴筒也裂了。\n\n你想起档案：\"死时怀里还紧紧抱着那把二胡。\"\n\n你把二胡的残骸小心地捡起来。它在你手里轻得像纸，可你能感觉到，里面有一个人一辈子的重量。\n\n\"孙先生，\"你说，\"弦断了，可以再续。您不用一直抱着它了。\"\n\n你从口袋里掏出一根线——是从周生桥头找到的那截红绳的碎头。你把它缠在断弦处，打了个结。\n\n[red]就在打结的瞬间，你听见了。[/red]\n\n一个沙哑的、跑了调的、却充满喜悦的琴声，从二胡的残骸里溢出来。\n\n[whisper]\"弦……接上了……\"[/whisper]\n\n琴声响了一会儿，然后渐渐弱了，弱成一丝，最后消失在风里。\n\n废墟的第三角，最后一缕青烟升起。",
        effects: {
            sanity: 15,
            yin: -15,
            setFlag: "sunReleased",
        },
        choices: [
            createChoice({
                text: "继续超度秦鸣远",
                next: "qin_release",
                condition: {
                    noFlag: "qinReleased",
                },
            }),
            createChoice({
                text: "继续超度赵铁柱",
                next: "zhao_release",
                condition: {
                    noFlag: "zhaoReleased",
                },
            }),
            createChoice({
                text: "三人皆度，回殡仪馆",
                next: "three_souls_complete",
                condition: {
                    flag: "qinReleased",
                },
            }),
        ],
    })
};
