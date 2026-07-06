/**
 * 《守夜》场景模块：patrol_hall_three
 * 三号厅：车祸少年的怨气
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    hall_three_inspection: createScene('hall_three_inspection', {
        title: "三号厅 · 少年",
        text: "三号厅的门推开时，一股血腥味扑面而来。那个十九岁的少年躺在灵床上，全身盖着白布，但白布的形状凹凸不平——他撞得太碎了，入殓师用了很多石膏才勉强拼出一个人形。\n\n他叫陈磊，镇东头修车铺老板的儿子。上个月骑摩托送女朋友回家，在青石桥上撞了护栏。女朋友飞出去落进河里，到现在都没找到。\n\n少年的母亲白天来守过灵，哭得撕心裂肺。她走的时候，在灵床前放了一瓶他生前最爱喝的橘子汽水。\n\n现在，那瓶汽水倒在地上，橘色的液体正沿着瓷砖缝，缓缓朝白布下的人形流去。\n\n你走近时，白布下传来一个含混的声音，像是有水灌进了喉咙：\n\n[whisper]\"她……还在水里……\"[/whisper]\n\n[whisper]\"我没救上来她……\"[/whisper]",
        effects: {
            sanity: -10,
            yin: 15,
        },
        choices: [
            createChoice({
                text: "扶起汽水瓶，放回灵床前",
                next: "hall_three_soda",
                effects: {
                    sanity: 5,
                },
            }),
            createChoice({
                text: "问他女朋友在哪里",
                next: "hall_three_girl",
            }),
            createChoice({
                text: "不掺和，赶紧离开",
                next: "hall_five_inspection",
                effects: {
                    yin: 10,
                },
            }),
        ],
    }),
    hall_three_soda: createScene('hall_three_soda', {
        title: "橘子汽水",
        text: "你蹲下身，捡起那瓶滚落的橘子汽水。瓶身还是温的，像是有人刚刚握过。\n\n你把它轻轻放回灵床前的供桌上，又把歪倒的香炉扶正。\n\n\"陈磊，\"你轻声说，\"汽水我帮你放好了。你女朋友的事……你尽力了。\"\n\n白布下的躁动渐渐平息了。那个含混的声音消失了。\n\n你刚要转身，听见\"啵\"的一声轻响——汽水瓶的盖子，自己弹开了。\n\n一股橘子汽水的甜香飘出来，混着血腥味，有一种说不出的、少年人的味道。\n\n白布下，少年的右手——那只据说是完好的手——缓缓抬起，又缓缓落下，像是在跟你挥手。\n\n[faded]十九岁。他还想喝一口橘子汽水，还想送女朋友回家。[/faded]",
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: "comfortedChenlei",
        },
        choices: [
            createChoice({
                text: "答应帮他找女朋友的下落",
                next: "river_search",
                effects: {
                    setFlag: "promisedChenlei",
                },
            }),
            createChoice({
                text: "去五号厅看看",
                next: "hall_five_inspection",
            }),
            createChoice({
                text: "回七号厅继续守云袖",
                next: "enter_with_flashlight",
            }),
        ],
    }),
    hall_three_girl: createScene('hall_three_girl', {
        title: "水中人",
        text: "\"她在哪里？\" 你压低声音问。\n\n白布剧烈地起伏了一下，像是在努力翻身。\n\n少年的声音从白布下渗出来，每一个字都带着水泡破裂的声响：\n\n[whisper]\"青石桥……第三个桥洞下面……她的脚卡在石头缝里……我下去找她，可水太急了……\"[/whisper]\n\n[whisper]\"我一直没敢跟人说……我怕她妈妈恨我……\"[/whisper]\n\n白布下传来压抑的抽泣。一个撞碎了全身的少年，连哭都哭不出完整的调子。\n\n你心里一沉。如果他说的是真的，那个女孩的尸体还在青石桥下，卡在第三个桥洞里。\n\n而青石桥下面那条河——正是云袖被捞上来的青石河。\n\n[red]同一条河，吞了两个年轻人。[/red]",
        effects: {
            sanity: -15,
            yin: 10,
            setFlag: "knowsGirlLocation",
        },
        choices: [
            createChoice({
                text: "天亮后去青石桥找那个女孩",
                next: "river_search",
                effects: {
                    setFlag: "promisedChenlei",
                },
            }),
            createChoice({
                text: "这事你管不了，去五号厅",
                next: "hall_five_inspection",
                effects: {
                    yin: 5,
                },
            }),
        ],
    })
};
