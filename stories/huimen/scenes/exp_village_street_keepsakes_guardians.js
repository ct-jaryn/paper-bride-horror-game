/**
 * 《回门》场景模块：exp_village_street_keepsakes_guardians
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_stone_lion: createScene('huimen_exp_village_street_stone_lion', {title:"石狮",text:`村口有一对石狮，蹲在门两边。

石狮不是石头的，是纸糊的，纸皮上刷了层灰漆，远看像真的。你走近，发现石狮的眼睛在动，乌溜溜地转，盯着你。

"守了周家三十年。"一只石狮开口，声音低沉，"现在想走了。"

"你们为什么要守？"你问。

"因为嘴里含着我们的名字。"另一只石狮张开嘴，嘴里有一团皱巴巴的纸，纸上写着"秀兰"，墨迹模糊。

[red]周家把女子的名字塞进石狮嘴里，让她们守门。[/red]

[faded]你凑近看，纸狮的爪子是断了一截的，断口处露出竹篾的茬子，发黑。狮子的鬃毛是用一缕缕头发粘上去的，发丝粗细不一，显然来自不同的人。三十年来，每一任"守门女子"的头发，都被剪下来一缕，粘在狮身上做鬃毛——意思是让她们的魂永远镇在门口。[/faded]

[whisper]"含着名字，就出不去。"[/whisper]石狮说，"我们的魂被名字压在嘴里，半个字也说不出来。三十年了，想喊一声'冤'都喊不出来。"

你伸手，从石狮嘴里取出那团纸。石狮顿时瘫软在地，化为一堆废纸，散了一地。`,effects:{"sanity":-5,"yin":2,"addItem":"石狮口中的名字"},choices:[createChoice({"text":"把纸烧掉","next":"huimen_exp_village_street_stone_lion_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"收好","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_stone_lion_burn: createScene('huimen_exp_village_street_stone_lion_burn', {title:"焚名",text:`你点燃那团纸。

火光里，秀兰的名字在燃烧，却没有化为灰，而是化作一只红色的蝴蝶，扑扇着翅膀飞向夜空。

"我自由了。"蝴蝶说，声音轻飘飘的，"谢谢你，守门人。"

另一只石狮也张开了嘴，里面还有更多名字。你一个一个取出，一个一个烧掉，火光映红了村口。

[faded]每一个名字被烧化的时候，都化作一只红蝴蝶，扑扇着飞起来。蝴蝶越来越多，绕着村口飞了一圈又一圈，最后聚成一团红光，朝井的方向飘去——那是她们生前最后去过的地方，她们记得路。[/faded]

烧到第七个名字的时候，纸团里忽然掉出一截断发，乌黑，长长一缕。你认出那是秀兰的发——她被剪断发那天，剩下的发被塞进石狮嘴里，连同名字一起镇着。

[whisper]"这缕发，是你祖父偷偷藏起来的。"[/whisper]一个老妇的声音忽然说，"他想留个念想。可周家发现后，又把它塞回狮子嘴里，连一个念想都不让他留。"

村口的两只石狮彻底化为了灰烬。从此，周家再也没有守门人了。`,effects:{"sanity":10,"yin":-10,"removeItem":"石狮口中的名字"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_abandoned_bed: createScene('huimen_exp_village_street_abandoned_bed', {title:"空床",text:`你推开一扇门，屋里静悄悄的，有一张床。

床上铺着大红被褥，绣着龙凤，像是新婚的床，喜气洋洋。可床上没有人，只有一个纸人，穿着新娘服，盖着红盖头，端端正正坐着。

你掀开盖头，纸人的脸是空白的，一片白纸，没有五官。

"这是秀兰的婚床。"一个声音从屋里飘出来，"她没睡过，就被活埋了。"

[faded]屋里落满灰，床帐是红的，红得发暗，像是褪了色的血。床脚系着一圈红绳，红绳上挂着十二枚铜钱，每一枚都磨得发亮——那是压床钱，本该是新婚之夜撒在床上的喜钱。可秀兰没等到撒钱的那一刻，这些铜钱就一直挂着，挂了三十年，挂出一层青绿的锈。[/faded]

桌上还摆着一对红烛，烧到一半就灭了，蜡油凝在烛台上，像两行干涸的泪。烛台上刻着"百年好合"，"合"字被人用刀划了一道，划断了。

[red]你把被褥掀开，床板上刻着一行字："兰妹，等我。"[/red]

那是祖父的字迹，刻得很深。`,effects:{"sanity":-8,"yin":2,"addItem":"婚床上的字条"},choices:[createChoice({"text":"把字条给秀兰","next":"huimen_exp_village_street_abandoned_bed_give","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_abandoned_bed_give: createScene('huimen_exp_village_street_abandoned_bed_give', {title:"婚床之约",text:`你把字条放在井沿。

秀兰浮出来，看着字条上的字，手在发抖，半天说不出话。

"兰妹，等我。"她念了一遍又一遍，眼泪落下来，"他叫我兰妹。"

"他一直在等你。"你说，"只是没等到。"

[faded]秀兰把字条贴在心口，字条上的墨迹开始发亮，像被她心口的体温焐热了。"等我"两个字一笔一笔从纸面上浮起来，化作金色的光，渗进她的身体。[/faded]

[whisper]"他写这四个字的时候，手是抖的。"[/whisper]秀兰说，声音轻得像怕惊扰了什么，"我能感觉到，每一笔都用力过猛，刻进木头里去了。他怕我看不到，所以刻得那么深。"

井水泛起一圈圈涟漪。水里浮起一片红烛的蜡，是当年那对烧了一半的红烛剩下的——蜡片漂在水面上，慢慢融化，融成一团暗红的水。

"我等到了。"她说，声音发颤，"三百年也值了。"`,effects:{"sanity":10,"yin":-10,"removeItem":"婚床上的字条"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
