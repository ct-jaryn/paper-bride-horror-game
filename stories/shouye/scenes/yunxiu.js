/**
 * 《守夜》场景模块：yunxiu
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    yunxiu_apprentice_message: createScene('yunxiu_apprentice_message', {
        title: "学徒的话",
        text: "你回到七号厅，把学徒的话原原本本告诉了云袖。\n\n云袖听完，沉默了很久。她的眼角，缓缓流下一滴红色的泪。\n\n\"周生……他来找我了吗？\" 她的声音很轻，\"那个傻孩子，我都不知道他收了学徒。\"\n\n\"他临走前让学徒转告你：师父没有负你。\"\n\n云袖闭上眼睛。当她再睁开时，眼里没有了怨恨，只剩一种深沉的、跨越近百年的悲伤。\n\n\"我一直以为，是他把我锁在了水里。\" 她说，\"原来，他也把自己赔了进去。\"\n\n她转向你，第一次露出一个完整的、带着泪的笑。\n\n\"守夜人，\"她说，\"我有些话，想托你带给一个人。可那个人，已经不在了。\"",
        effects: {
            sanity: 10,
            yin: -20,
            setFlag: "yunxiuKnowsTruth",
        },
        choices: [
            createChoice({
                text: "问她想说什么",
                next: "yunxiu_final_words",
            }),
            createChoice({
                text: "带她去地下室，看周生留下的东西",
                next: "basement_descent",
                condition: {
                    flag: "knowsCoffin",
                },
            }),
            createChoice({
                text: "天快亮了，这一夜的故事还没讲完",
                next: "night_two_dawn",
                condition: {
                    flag: "yunxiuKnowsTruth",
                },
                hidden: true,
                effects: {
                    time: 30,
                },
            }),
        ],
    }),
    yunxiu_final_words: createScene('yunxiu_final_words', {
        title: "托话",
        text: "\"我想跟他说……\"云袖的声音像是从很远的地方飘来，\"那出《牡丹亭》，我唱到《寻梦》一折就……就断了。我一直在想，如果当时能唱完，杜丽娘是不是就不用死了。\"\n\n她顿了顿。\n\n\"可现在我明白了。杜丽娘死了，是为了在梦里再见柳梦梅一面。我死了，是为了……等周生一句话。\"\n\n\"现在我知道了。他没负我。\"\n\n云袖的身影开始变得透明。但就在她即将消散时，她又凝实了。\n\n\"不，\"她说，\"我还不能走。我的戏台，还没搭起来。周生给我留了那么多东西，我总得看一眼，才算完整地唱完这一出。\"\n\n她看向你，眼神里有了温度。\n\n\"守夜人，带我去看看，他给我留了什么。\"",
        effects: {
            sanity: 15,
            yin: -25,
            setFlag: "yunxiuWantsCoffin",
        },
        choices: [
            createChoice({
                text: "带她去地下室",
                next: "basement_descent",
                condition: {
                    flag: "knowsCoffin",
                },
            }),
            createChoice({
                text: "先去找周生留下的其他东西",
                next: "paper_shop_visit",
                effects: {
                    time: 60,
                },
            }),
        ],
    })
};
