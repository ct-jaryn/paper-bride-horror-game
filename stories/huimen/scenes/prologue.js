/**
 * 《回门》场景模块：prologue
 */

export const scenes = {
    prologue: {
        title: '村口老槐',
        text: `雨下了七天七夜。

你站在山路的尽头，望着雾气中若隐若现的村落。三十年了，你从未回过这个出生的小山村。

那封家书是三天前收到的。信纸泛黄，字迹歪斜，像是用尽了力气才写完：

[faded]"祖母病逝，速归。婚事已备，勿误吉时。"[/faded]

婚事？祖母都去世了，哪来的婚事？

你想起离家前，母亲曾偷偷告诉你："你祖母这辈子，心里一直压着一个女子。那女子叫秀兰，是你祖父年轻时的相好。周家对不起她，所以她死后，周家男丁没有一个能活过四十岁。"

[whisper]"你父亲死时，正好三十九岁。"[/whisper]

村口的老槐树下，站着两个纸扎人。一男一女，穿着大红喜服，脸上画着诡异的笑。纸人的眼睛用墨点成，黑洞洞的，却好像一直在跟着你转。

你走近时，一阵风过。

[red]女纸人的头，缓缓转向了你。[/red]

你眼角的余光瞥见，老槐树的树根处陷着一张湿透的旧报纸。头条标题被泥水晕开，只剩几个字还能辨认：

[faded]"青石镇戏台……鬼戏……又唱……"[/faded]

你不记得自己何时听说过青石镇，只觉得那名字像一枚生锈的针，轻轻刺进记忆深处。

"新郎官……回来了？" 身后忽然响起一个苍老的声音。

你猛地回头，是村里的李婆。她手里提着白灯笼，灯笼上写着一个黑色的"囍"字。

"什么新郎官？" 你问。

李婆不回答，只是笑。她的嘴咧得很开，露出没有牙齿的牙龈："快进村吧，[whisper]秀兰等了你三十年。[/whisper]"

她的灯笼忽明忽暗，照得地上纸钱纷飞。`,
        effects: {"sanity":-5,"yin":5,"visual":"flicker","visualDuration":2000},
        choices: [{"text":"问她秀兰是谁","next":"ask_xiulan"},{"text":"不理她，径直往老宅走","next":"huimen_village_gate"},{"text":"仔细观察那两个纸人","next":"inspect_paper_dolls","effects":{"sanity":-8,"yin":2}},{"text":"侧耳倾听，纸人似乎在低语","next":"paper_whisper","condition":{"yinAbove":15},"hidden":true,"effects":{"sanity":-5,"yin":5}},{"text":"感觉时辰已晚，先在村口整理思绪","next":"shichen_hai_entry","condition":{"timeAfter":1200},"hidden":true,"effects":{"time":30}},{"text":"老宅大门似乎被什么东西封住了","next":"old_house_door_locked"}],
        hallucination: '[whisper]你低头看自己的手，发现手腕上已经系了一根红绳。红绳的另一端，消失在夜色里。[/whisper]',
    }
};
