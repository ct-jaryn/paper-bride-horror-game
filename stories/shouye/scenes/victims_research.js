/**
 * 《守夜》场景模块：victims_research
 * 火灾遇难者档案调查
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    fire_victim_list: createScene('fire_victim_list', {
        title: "死难名册",
        text: "你继续翻地下室铁皮柜里那摞旧登记册，在一本民国二十三年的殡葬记录里，找到了那场火灾的完整死难名单：\n\n[faded]\"民国二十三年九月初九，青石戏台坍塌起火。死难者共五人：\n\n一、春香班旦角云袖，女，十七岁，尸体失踪（实为入河）；\n\n二、春香班老生秦鸣远，男，四十二岁，火场中为救观众重返，殉职；\n\n三、春香班花脸赵铁柱，男，三十五岁，横梁砸中头部，当场身亡；\n\n四、春香班琴师孙瞎子，男，六十岁，被踩踏致死；\n\n五、青石镇纸扎铺周生，男，二十岁，重伤，下落不明（实为投河）。\"[/faded]\n\n你手指一顿。除了云袖和周生，还有三个人死在那场火里。老生、花脸、琴师。\n\n[faded]那些人，他们的魂魄，又去了哪里？[/faded]\n\n你想起一件事——青石镇老戏台的废墟，至今夜里还能听见唱戏声。如果云袖的执念把她困在了殡仪馆，那另外三个人的执念，会不会还困在那座烧塌的戏台下面？",
        effects: {
            sanity: -15,
            yin: 15,
            setFlag: "knowsOtherVictims",
        },
        choices: [
            createChoice({
                text: "去青石戏台废墟找他们的踪迹",
                next: "old_stage_victims",
                effects: {
                    time: 60,
                },
            }),
            createChoice({
                text: "先查另外三个人的身份",
                next: "fire_victim_detail",
            }),
        ],
    }),
    fire_victim_detail: createScene('fire_victim_detail', {
        title: "三人记",
        text: "你继续翻阅档案，拼凑出另外三位死难者的生平。\n\n[faded]秦鸣远，老生。青石镇人氏，唱戏二十余年，是春香班的台柱子之一。家中有一妻一女。火灾当夜，他本已逃出，却看见台下一个孩子被困，返身去救。孩子救出来了，他被火封在台上了。[/faded]\n\n[faded]赵铁柱，花脸。外乡人，体壮如牛，演关公、钟馓最拿手。据说火灾前夜他做了个梦，梦见自己卸了花脸妆，露出一张苍白的脸。第二天他就死在了横梁下。镇上人说他\"被梦里那张脸叫走了\"。[/faded]\n\n[faded]孙瞎子，琴师。眼盲，但耳力极好，能听出云袖唱腔里最细微的颤音。火灾时人群奔逃，他被撞倒，再没起来。死时怀里还紧紧抱着那把跟了他一辈子的二胡。[/faded]\n\n三个人，三种死法。一个为救人，一个被梦兆，一个死于踩踏。\n\n但他们的共同点是：都死在了戏台上，都没能唱完最后一出。\n\n[whisper]和云袖一样，他们的戏，也散了场。[/whisper]",
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: "knowsVictimDetails",
        },
        choices: [
            createChoice({
                text: "去青石戏台废墟超度他们",
                next: "old_stage_victims",
                effects: {
                    time: 60,
                },
            }),
            createChoice({
                text: "去找他们的后人",
                next: "victim_descendants",
            }),
        ],
    })
};
