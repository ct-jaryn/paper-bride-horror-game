/**
 * 《守夜》场景模块：night
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    night_two_dawn: createScene('night_two_dawn', {
        title: "第二夜",
        text: "天亮了，林叔来接班。\n\n你把昨夜发生的事，简略地告诉了他。林叔听完，沉默良久。\n\n\"你比我有慧根。\" 他最后说，\"有些事，我守了三十年都没办成。也许，该由你来办了。\"\n\n他拍了拍你的肩：\"今晚你还来。那位云袖姑娘，认你了。\"\n\n你回去睡了一整天，梦里全是青石河、戏台、和那场火。\n\n夜幕再次降临，你回到殡仪馆。\n\n七号厅的门虚掩着。你推开门，桂花香扑面而来。\n\n云袖已经坐在了灵床上，等你。\n\n\"守夜人，\"她说，\"昨夜你说的那些——周生的信、棺材、青石河——我想亲眼去看看。\"\n\n\"可你是……\"\n\n\"到了夜里，\"她轻轻一笑，\"我能出去一小会儿。趁着子时到寅时，魂魄未散，我能跟你走一趟。\"",
        effects: {
            sanity: 5,
            yin: -5,
            time: 60,
            setFlag: "nightTwo",
        },
        choices: [
            createChoice({
                text: "带她去地下室看她生前的物件",
                next: "basement_descent",
            }),
            createChoice({
                text: "带她去青石桥找周生的痕迹",
                next: "zhousheng_bridge",
                effects: {
                    time: 60,
                },
            }),
            createChoice({
                text: "先带她去五号厅见那个学徒",
                next: "hall_five_apprentice",
                condition: {
                    flag: "foundApprenticeRecord",
                },
            }),
        ],
    }),
    night_three_choice: createScene('night_three_choice', {
        title: "第三夜",
        text: "又是新的一夜。\n\n经过前两夜，你已经把云袖、周生、学徒的故事，全部拼凑完整了。\n\n七号厅里，柚木棺材已经摆好，曲谱摊在棺盖，头面摆在棺头。一切都准备就绪。\n\n云袖站在棺材前，看着这一切，久久没有说话。\n\n\"守夜人，\"她终于开口，\"我该怎么走，你来定。\"\n\n\"我可以在棺材里，唱完最后一折，然后安息。\"\n\n\"我可以去青石河，找周生，和他一起散去。\"\n\n\"我可以让世人记住我，把名字写进历史。\"\n\n\"也可以……\" 她顿了顿，\"就这样守着七号厅，再唱一百年的戏。\"\n\n她看着你，等你的决定。\n\n[red]这一夜，是最后的抉择。[/red]",
        effects: {
            sanity: 10,
            yin: -10,
            setFlag: "nightThree",
        },
        choices: [
            createChoice({
                text: "让她在棺材戏台上唱完，然后安息",
                ending: "hidden_stageCoffinFarewell",
                condition: {
                    flag: "riteComplete",
                },
            }),
            createChoice({
                text: "送她去青石河找周生",
                next: "coffin_to_river",
                condition: {
                    flag: "yunxiuReadyToMeet",
                },
            }),
            createChoice({
                text: "把她的故事写成书，让世人铭记",
                ending: "hidden_yunxiuBook",
                condition: {
                    flag: "yunxiuRemembered",
                },
            }),
            createChoice({
                text: "让她留下，继续守着七号厅",
                ending: "hidden_eternalAudience",
            }),
        ],
    })
};
