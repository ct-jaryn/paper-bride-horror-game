/**
 * 《回门》场景模块：main_locks
 */

export const scenes = {
    old_house_door_locked: {
        title: '老宅门锁',
        text: `老宅的大门紧闭。

门上没有锁孔，只有两个凹陷下去的巴掌印，像是有人曾用力拍过门。门缝里塞着一张黄纸，纸上写着：

[faded]"周家后人，以血以名，方可入门。"[/faded]

你想起在纸人腹中发现的生辰八字。秀兰的八字——癸丑年七月初七。

也许，这就是开门的"名"。`,
        effects: {"yin":5},
        choices: [{"text":"把秀兰的生辰八字按在门印上","next":"to_old_house","condition":{"hasItem":"秀兰生辰八字"},"effects":{"removeItem":"秀兰生辰八字","setFlag":"old_house_unlocked"}},{"text":"用血涂抹门印","next":"to_old_house","effects":{"sanity":-10,"yin":10,"setFlag":"old_house_unlocked_blood"}},{"text":"绕到后院翻墙","next":"to_old_house","effects":{"sanity":-5}}],
    }
,
    true_ending_gate: {
        title: '阴阳簿',
        text: `你集齐了所有线索，也做出了最后的选择。

秀兰站在你面前，不再是浑身湿透的怨鬼，而是一个穿着红嫁衣、眼角有泪痣的姑娘。

"周家后人，"她问，"你愿意成为阴阳簿的记录者吗？"

"记录者？"

"记录我们这些被遗忘的人。"她说，"不是超度，不是复仇，只是记住。只要有人记得，我们就不是白白的死。"`,
        effects: {"sanity":10,"yin":-20},
        choices: [{"text":"我答应你","ending":"hidden_perfect_redemption","condition":{"flag":"clues_assembled"}},{"text":"我会把你的故事写下来","ending":"huimen_exp_redemption_loop","condition":{"flag":"clues_assembled"}}],
    }
};
