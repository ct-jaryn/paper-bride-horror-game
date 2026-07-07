/**
 * 《回门》场景模块：exp_family
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_grandfather_confession: createScene('huimen_exp_grandfather_confession', {title:'祖父',text:`井水晃动，祖父的身影浮了上来。他低着头，像是不敢看你。

"我想救她。"他说，声音苍老而疲惫，"那天夜里，我被关在东厢房，听着他们把她一路拖到井边。我砸门，砸到手骨都断了，可那门太厚，太厚了……"

他抬起手，你看见那只手扭曲成不自然的角度。

"秀兰在井里叫我。她叫了一夜，叫到嗓子都哑了。第二天，他们告诉我，她病死了。"

他的眼泪一滴一滴落进井里，井水那抹骇人的红色，竟淡了一些。

"我后来每年都在井边烧纸，烧了三十年。可她不收我的纸，她只要周家一个道歉。"

[red]你看着祖父，心里五味杂陈，不知道该恨他还是可怜他。[/red]`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"告诉他你会替她正名","next":"huimen_exp_grandfather_release","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"冷冷地离开","next":"huimen_exp_village_street","effects":{"sanity":-3,"yin":3}})]}),
    huimen_exp_grandfather_release: createScene('huimen_exp_grandfather_release', {title:'祖父解脱',text:`你对着井水，一字一句地说："我会给秀兰正名。周家欠她的，我来还。你可以走了。"

祖父的身影颤抖了一下，然后露出一个释然的笑，那笑容里有解脱，也有几十年的疲惫。

"谢谢你，孙子。"他说，"我等这句话，等了三十年。"

他的身影渐渐淡去，像一缕被风吹散的烟，最后化作一滴泪，落进井里。井水顿时变得清澈，映出满天星斗。

你感到胸口的压抑又轻了一些。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_grandfather_released"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_grandmother_confront: createScene('huimen_exp_grandmother_confront', {title:'祖母对质',text:`你冲着那个披头散发的影子大喊："你为什么要活埋秀兰？"

"祖母"的笑容僵住了。她的脸像纸一样皱起来，声音却分成了两半——一半是锋利的旧规矩，一半是疲惫的老妇人："周家的脸不能丢。她未婚先孕，败坏门风，不埋她，周家的门楣就脏了。女人坏了名声，比死了还难受。"

"可她也是人！"

"人？"她冷笑一声，那笑声里带着刻骨的凉意，又忽然一顿，像被什么从喉咙里掐住，"在周家，女人不是人，女人是债。生不出儿子的女人是债，丢了脸的女人是债。秀兰是债，我也是债。"

她垂下眼，声音低下去："我后来后悔了。我后悔了三十年。可后悔不能让她活过来。"

"您死后为什么还在这里？"你问。

"他们把我的嘴糊上，把我的盖头盖上，让我继续守这门亲。"她抬起手，指尖指向自己胸口，"我死了也不得安宁。只要这规矩还在，我就得替周家看着，看着又一个女子被埋进井里。"

她的身体开始燃烧，却没有化为灰——而是变成一张黄符，飘飘悠悠落在地上。

符上用朱砂写着："周家女，世世为债。"`,effects:{"sanity":-5,"yin":3,"setFlag":"huimen_exp_confronted_grandmother"},choices:[createChoice({"text":"把黄符烧掉","next":"huimen_exp_burn_grandmother_talisman","condition":{"hasItem":"打火机"},"effects":{"sanity":5,"yin":-5}}),createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_burn_grandmother_talisman: createScene('huimen_exp_burn_grandmother_talisman', {title:'焚祖母符',text:`你划亮火折，点燃了那张黄符。

火焰不是红色的，而是青白色。符纸在火中扭动，像一条挣扎的蛇，发出祖母尖锐的叫声："你敢烧周家的根！"

"周家的根，早就烂了。"你说。

符纸化为灰烬，风里传来一声长长的叹息。那不是祖母的叹息，而是很多女子的叹息，一层叠着一层，像是三十七个声音同时松了一口气。

你低头看自己的手腕，那里的红绳似乎松了一些。`,effects:{"sanity":10,"yin":-10},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
