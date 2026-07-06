/**
 * 《回门》场景模块：exp_family
 */

export const scenes = {
    huimen_exp_grandfather_confession: {
        title: '祖父',
        text: `井里的祖父低下头。

"我想救她。" 他说，"我被关在东厢房，听着他们把她拖到井边。我砸门，砸到手骨都断了，可门太厚。"

"秀兰在井里叫我。她叫了一夜。第二天，他们告诉我，她病死了。"

他的眼泪落进井里，井水的红色淡了一些。

"我后来每年都在井边烧纸，烧了三十年。可她不收我的纸，她只要周家一个道歉。"

[red]你看着祖父，不知道该恨他还是可怜他。[/red]`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"告诉他你会替她正名","next":"huimen_exp_grandfather_release","effects":{"sanity":5,"yin":-5}},{"text":"冷冷地离开","next":"huimen_exp_village_street","effects":{"sanity":-3,"yin":3}}],
    }
,
    huimen_exp_grandfather_release: {
        title: '祖父解脱',
        text: `你对着井水说："我会给秀兰正名。周家欠她的，我来还。你可以走了。"

祖父的身影颤抖了一下，然后露出一个释然的笑。

"谢谢你，孙子。" 他说，"我等这句话，等了三十年。"

他的身影渐渐淡去，化作一滴泪落进井里。井水顿时变得清澈，映出满天星斗。

你感到胸口的压抑又轻了一些。`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp_grandfather_released"},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_grandmother_confront: {
        title: '祖母对质',
        text: `你大喊："你为什么要活埋秀兰？"

"祖母"的笑容僵住了。她的脸像纸一样皱起来，声音变得尖锐："因为周家不能丢脸！她未婚先孕，败坏门风，不埋她埋谁？"

"可她也是人！"

"人？" 她冷笑，"在周家，女人不是人，女人是债。生不出儿子的女人是债，丢了脸的女人是债。秀兰是债，我也是债。"

她的身体开始燃烧，却没有化为灰，而是变成一张黄符，飘落在地上。

符上写着："周家女，世世为债。"`,
        effects: {"sanity":-5,"yin":3,"setFlag":"huimen_exp_confronted_grandmother"},
        choices: [{"text":"把黄符烧掉","next":"huimen_exp_burn_grandmother_talisman","condition":{"hasItem":"打火机"},"effects":{"sanity":5,"yin":-5}},{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_burn_grandmother_talisman: {
        title: '焚祖母符',
        text: `你点燃黄符。

火焰不是红色的，而是青白色的。符纸在火中扭动，发出祖母的尖叫："你敢烧周家的根！"

"周家的根，早就烂了。" 你说。

符纸化为灰烬，风里传来一声长长的叹息。那不是祖母的叹息，而是很多女子的叹息，叠加在一起。

你感到手腕上的红绳松了一些。`,
        effects: {"sanity":10,"yin":-10},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
};
