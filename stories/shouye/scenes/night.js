/**
 * 《守夜》场景模块：night
 */

export const scenes = {
    night_two_dawn: {
        title: '第二夜',
        text: `天亮了，林叔来接班。

你把昨夜发生的事，简略地告诉了他。林叔听完，沉默良久。

"你比我有慧根。" 他最后说，"有些事，我守了三十年都没办成。也许，该由你来办了。"

他拍了拍你的肩："今晚你还来。那位云袖姑娘，认你了。"

你回去睡了一整天，梦里全是青石河、戏台、和那场火。

夜幕再次降临，你回到殡仪馆。

七号厅的门虚掩着。你推开门，桂花香扑面而来。

云袖已经坐在了灵床上，等你。

"守夜人，"她说，"昨夜你说的那些——周生的信、棺材、青石河——我想亲眼去看看。"

"可你是……"

"到了夜里，"她轻轻一笑，"我能出去一小会儿。趁着子时到寅时，魂魄未散，我能跟你走一趟。"`,
        effects: { sanity: 5, yin: -5, time: 60, setFlag: 'nightTwo' },
        choices: [
            { text: '带她去地下室看她生前的物件', next: 'basement_descent' },
            { text: '带她去青石桥找周生的痕迹', next: 'zhousheng_bridge', effects: { time: 60 } },
            { text: '先带她去五号厅见那个学徒', next: 'hall_five_apprentice', condition: { flag: 'foundApprenticeRecord' } }
        ]
    },

    // 第三夜 —— 真相大白后的抉择,

    night_three_choice: {
        title: '第三夜',
        text: `又是新的一夜。

经过前两夜，你已经把云袖、周生、学徒的故事，全部拼凑完整了。

七号厅里，柚木棺材已经摆好，曲谱摊在棺盖，头面摆在棺头。一切都准备就绪。

云袖站在棺材前，看着这一切，久久没有说话。

"守夜人，"她终于开口，"我该怎么走，你来定。"

"我可以在棺材里，唱完最后一折，然后安息。"

"我可以去青石河，找周生，和他一起散去。"

"我可以让世人记住我，把名字写进历史。"

"也可以……" 她顿了顿，"就这样守着七号厅，再唱一百年的戏。"

她看着你，等你的决定。

[red]这一夜，是最后的抉择。[/red]`,
        effects: { sanity: 10, yin: -10, setFlag: 'nightThree' },
        choices: [
            { text: '让她在棺材戏台上唱完，然后安息', ending: 'hidden_stageCoffinFarewell', condition: { flag: 'riteComplete' } },
            { text: '送她去青石河找周生', next: 'coffin_to_river', condition: { flag: 'yunxiuReadyToMeet' } },
            { text: '把她的故事写成书，让世人铭记', ending: 'hidden_yunxiuBook', condition: { flag: 'yunxiuRemembered' } },
            { text: '让她留下，继续守着七号厅', ending: 'hidden_eternalAudience' }
        ]
    },

    // ============================================================
    // 批次8：春香班其他死难者平行线
    // ============================================================

    // 火灾死难者名册 —— 从地下室铁皮柜发现
};
