/**
 * 《ganshi》场景模块：ask_bride
 * 女尸身份、冥婚与生死追问
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    ask_female_identity: createScene('ask_female_identity', {
        title: "问她是谁",
        text: "你停止念咒，问女尸：\"你是谁？\"\n\n女尸没有回答。她的眼睛一直看着你，眼神里没有敌意，只有一种说不清的情绪。\n\n\"你不会说话？\" 你问。\n\n女尸缓缓摇头。\n\n\"你是死人还是活人？\"\n\n女尸想了想，又摇头。\n\n[red]她也不知道自己是什么。[/red]\n\n你注意到她的嫁衣上绣着一个\"囍\"字，但\"囍\"字是倒挂的。这是冥婚的嫁衣。",
        effects: {
            sanity: -10,
            yin: 5,
        },
        choices: [
            createChoice({
                text: "问她是不是被配了冥婚",
                next: "ask_ghost_marriage",
            }),
            createChoice({
                text: "继续赶路，不与她纠缠",
                next: "continue_journey",
            }),
        ],
    }),
    ask_ghost_marriage: createScene('ask_ghost_marriage', {
        title: "问冥婚",
        text: "\"你是被配了冥婚？\" 你问。\n\n女尸缓缓点头。她的手指向自己的嫁衣，又指向自己的胸口。\n\n你掀开她的嫁衣领口，看见她的心口处有一道伤疤。伤疤是新的，还在渗血。\n\n[red]她是被活埋的。[/red]\n\n\"你是被活埋的新娘？\" 你问。\n\n女尸点头，眼泪从眼角流下来。但尸体的眼泪不是水，是一种黑色的粘液。\n\n\"你的夫家是谁？\" 你问。\n\n女尸张开嘴，艰难地吐出两个字：\n\n[whisper]\"周家。\"[/whisper]",
        effects: {
            sanity: -20,
            yin: 15,
            setFlag: "knowsGhostBride",
        },
        choices: [
            createChoice({
                text: "说要送她回娘家",
                next: "send_to_family",
            }),
            createChoice({
                text: "说要带她去找周家报仇",
                next: "help_revenge_zhou",
                effects: {
                    setFlag: "helpZhouRevenge",
                },
            }),
            createChoice({
                text: "我见过另一个被活埋的新娘，她要的只是一个公道",
                next: "bride_mercy",
                condition: {
                    flag: "xiulanMercy",
                },
            }),
        ],
    }),
    ask_if_alive: createScene('ask_if_alive', {
        title: "问是否活着",
        text: "\"你还活着吗？\" 你颤抖着问。\n\n女尸——不，女子——缓缓坐起来。她看着你，眼神迷茫。\n\n\"我……我不知道……\" 她说，\"我记得我在花轿里，然后有人捂住了我的嘴……再醒来，就在这里了。\"\n\n她低头看自己的嫁衣，又看自己的手：\"我……我是不是已经死了？\"\n\n你探她的脉搏。很微弱，但确实有。\n\n\"你没死。\" 你说，\"你是被活埋后又被当成尸体送来了。\"\n\n女子愣住了，然后开始发抖。",
        effects: {
            sanity: -10,
            yin: -10,
            setFlag: "womanAlive",
        },
        choices: [
            createChoice({
                text: "带她逃走",
                next: "escape_with_woman",
            }),
        ],
    })
};
