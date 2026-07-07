/**
 * 《回门》场景模块：main_locks
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    old_house_door_locked: createScene('old_house_door_locked', {title:'老宅门锁',text:`老宅的大门紧闭。

门是黑漆的，漆已经剥落大半，露出底下灰白的木。木上有许多划痕，像是有人用指甲抓过，抓痕密密麻麻，像一群人在门上写字。

门上没有锁孔，只有两个凹陷下去的巴掌印，像是有人曾用力拍过门。那巴掌印是凹进去的，凹得很深，深得能看见掌纹——掌纹清清楚楚，连指纹都看得见。你伸手去比，那巴掌比你的大一圈，是男人的手。

门缝里塞着一张黄纸，纸已经发黄，边角都卷了。你抽出来，纸上写着：

[faded]"周家后人，以血以名，方可入门。"[/faded]

字是朱砂写的，朱砂已经发黑，像凝住的血。你把纸翻过来，背面还有一行小字，写得歪歪扭扭，像是有人偷偷添的："名是她的，不是你的。"

你想起在纸人腹中发现的生辰八字。秀兰的八字——癸丑年七月初七。

也许，这就是开门的"名"。`,effects:{"yin":5},choices:[createChoice({"text":"把秀兰的生辰八字按在门印上","next":"to_old_house","condition":{"hasItem":"秀兰生辰八字"},"effects":{"removeItem":"秀兰生辰八字","setFlag":"old_house_unlocked"}}),createChoice({"text":"用血涂抹门印","next":"to_old_house","effects":{"sanity":-10,"yin":10,"setFlag":"old_house_unlocked_blood"}}),createChoice({"text":"绕到后院翻墙","next":"to_old_house","effects":{"sanity":-5}})]}),
    true_ending_gate: createScene('true_ending_gate', {title:'阴阳簿',text:`你集齐了所有线索，也做出了最后的选择。

线索摊在你面前，摊了一地。风从远处吹来，吹得那些纸"哗哗"地响，像是在替你翻一本看不见的书。

秀兰站在你面前，不再是浑身湿透的怨鬼，而是一个穿着红嫁衣、眼角有泪痣的姑娘。她的嫁衣是干的，发是干的，连眼角的泪痣都干着，像一颗没落下来的雨。她看着你，眼里没有怨，只有一种等了很久的平静。

"周家后人，"她问，声音清清的，像井水，"你愿意成为阴阳簿的记录者吗？"

"记录者？"

"记录我们这些被遗忘的人。"她说，伸出手，手心里浮出一本薄薄的册子，册子的封皮是黑的，没有一个字，"不是超度，不是复仇，只是记住。只要有人记得，我们就不是白白的死。"

[whisper]那本册子在你眼前晃了晃，像是在等你接过去。[/whisper]`,effects:{"sanity":10,"yin":-20},choices:[createChoice({"text":"我答应你","ending":"hidden_perfect_redemption","condition":{"flag":"clues_assembled"}}),createChoice({"text":"我会把你的故事写下来","ending":"huimen_exp_redemption_loop","condition":{"flag":"clues_assembled"}})]})
};
