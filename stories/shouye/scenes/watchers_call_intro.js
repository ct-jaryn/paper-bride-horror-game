/**
 * 《守夜》场景模块：watchers_call_intro
 * 神秘来电者与前任守夜人
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    mysterious_call: createScene('mysterious_call', {
        title: "神秘来电",
        text: "凌晨三点，殡仪馆的座机响了。\n\n这个时间来电，不是好事。你接起来。\n\n电话那头先是一阵杂音，然后是一个苍老的、像是隔着一层什么的男声：\n\n\"……是七号厅的守夜人吗？\"\n\n\"我是。您哪位？\"\n\n电话那头沉默了一会儿。\n\n\"我是上一个殡仪馆的……守夜人。林叔的前任。我姓陈。\"\n\n你心里一惊。林叔的前任？那是第六代守夜人。可林叔说过，他的前任早就退休了，不知去向。\n\n\"陈先生，您怎么知道这里的电话？\"\n\n\"我一直在关注这馆子。\"老人说，\"七号厅那位，我守了二十年，没能帮她。我老了，没那个慧根。听说来了个年轻人，懂行……我想问问，你，能不能替我，了了这桩心愿？\"\n\n[red]电话那头，隐约传来唱戏声。不是从电话里，而是从老人那边。[/red]",
        effects: {
            sanity: -10,
            yin: 10,
            setFlag: "mysteriousCaller",
        },
        choices: [
            createChoice({
                text: "答应他",
                next: "caller_promise",
            }),
            createChoice({
                text: "问他和云袖的事",
                next: "caller_yunxiu_story",
            }),
            createChoice({
                text: "问他为什么现在才打来",
                next: "caller_why_now",
            }),
        ],
    }),
    caller_why_now: createScene('caller_why_now', {
        title: "此刻",
        text: "\"为什么现在才打来？\"你问。\n\n老人沉默了一会儿。\n\n\"因为我快走了。\"他说，\"我得了病，医生说撑不过这个月。\n\n\"我守了一辈子灵，最后，轮到别人来守我的灵了。可我放心不下云袖姑娘。我托人打听，听说馆里来了个年轻人，懂行，跟云袖姑娘处得不错。\n\n\"我想，在我走之前，把这桩事，托付出去。\"\n\n电话那头传来一阵咳嗽。\n\n\"孩子，\"老人的声音弱了下去，\"替我渡她。我……我在那边，会保佑你的。\"",
        effects: {
            sanity: -5,
            yin: 5,
            setFlag: "callerDying",
        },
        choices: [
            createChoice({
                text: "郑重答应他",
                next: "caller_promise",
            }),
            createChoice({
                text: "问他到底是谁",
                next: "caller_identity",
            }),
        ],
    })
};
