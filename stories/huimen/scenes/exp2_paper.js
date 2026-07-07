/**
 * 《回门》场景模块：exp2_paper
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_paper_boat_read: createScene('huimen_exp2_paper_boat_read', {title:'河边纸船',text:`你蹲在河边，捡起一只纸船。

船身是用黄纸折的，折得很细，每一道折痕都压得整齐。船身上用毛笔写着"周氏秀兰"四个字，字迹娟秀，是秀兰亲笔。墨已经发灰，却还看得出笔锋。

你把船翻过来，船舱里还有一张小纸条。纸条折得很小，折成一只燕子的形状。你小心地展开，纸上是秀兰的字：

[faded]"愿此船载我魂，顺流归故乡。"[/faded]

[red]原来她也曾想让自己的魂顺着河水流出去。她折了很多船，一只一只放进河里，可船都被河水挡了回来，漂回她身边——周家的井水不让她走。[/red]

你把纸船捧在手里，船是干的，却凉得像水。`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"把纸船放回河里","next":"huimen_exp2_riverbank","effects":{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_released_paper_boat"}}),createChoice({"text":"把纸船收好","next":"huimen_exp2_riverbank","effects":{"yin":1,"addItem":"秀兰的纸船"}})]}),
    huimen_exp2_paper_doll_origin: createScene('huimen_exp2_paper_doll_origin', {title:'纸偶起源',text:`你在纸扎铺的地下室里，翻开一本古书。

书是线装的，封皮是黑布，已经磨损得看不出原本的颜色。书页发黄发脆，一翻就掉渣。你翻到中间一页，那一页被人用朱砂画了圈，圈出来。

书上记载着纸扎术的起源：很久以前，周家祖先为了逃避死亡，发明了一种把活人魂封进纸人的术法。第一个被封进去的，是一个叫"阿绣"的女子——她是周家开基祖的小妾，因为知道得太多，被活活封进纸人里，烧了。

术法传下来，一代一代，周家用纸扎术封了许多女子的魂。每一个纸人，都封着一个魂；每一次烧纸人，都是烧一个魂。

[red]纸扎术不是手艺，是囚魂术。扎纸匠一辈子扎的纸人，都是囚笼。[/red]`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp2_learned_paper_doll_origin"},choices:[createChoice({"text":"烧了古书","next":"huimen_exp2_paper_doll_origin_burn","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"把古书带走","next":"huimen_exp_paper_shop","effects":{"yin":1,"addItem":"纸扎术古书"}}),createChoice({"text":"离开","next":"huimen_exp_paper_shop","effects":{"yin":1}})]}),
    huimen_exp2_paper_doll_origin_burn: createScene('huimen_exp2_paper_doll_origin_burn', {title:'焚书',text:`你点燃古书。

书页在火中扭曲，发出许多女子的哭声。那哭声从书页里渗出来，一层一层，像剥洋葱。她们是被封在纸扎术里的魂，被困在书页的字里，随着古书的焚毁，一个个飞出来。

"谢谢你。" 她们说，声音叠在一起，像风穿过竹林，"我们终于可以不再做纸人了。"

最后一个飞出来的，是阿绣。她朝你深深地鞠了一躬，然后化作一道光，飞出地下室。`,effects:{"sanity":-5,"yin":10,"setFlag":"huimen_exp2_burned_paper_doll_book"},choices:[createChoice({"text":"回纸扎铺","next":"huimen_exp_paper_shop","effects":{"yin":1}})]}),
    huimen_exp2_paper_shop_basement: createScene('huimen_exp2_paper_shop_basement', {title:'二层纸扎铺地下室',text:`你推开纸扎铺后屋的地板，发现一条向下的楼梯。楼梯是木的，已经发黑，每一级都"咯吱"地响。

地下室很暗，只有一盏油灯，灯已经熄了。你摸索着点着灯，火光照亮了整个地下室。

地下室里摆满了纸人，一排一排，整整齐齐。每一个纸人都长着周家男丁的脸——眉毛、眼睛、鼻子、嘴，都画得很像，像是照着画像扎的。纸人的胸口都贴着一张黄符，符上写着生辰八字。

最里面的架子上，放着一具特别的纸人。它比别的都大，扎得也最细，连头发都用真发一根一根粘上去。它长着秀兰的脸。

[red]周家不仅扎替身，还扎新娘。秀兰的魂被封了一个替身，要给她配冥婚。[/red]`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"烧了秀兰的纸人","next":"huimen_exp2_paper_shop_basement_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把纸人带走","next":"huimen_exp_paper_shop","effects":{"yin":1,"addItem":"秀兰的纸人"}}),createChoice({"text":"离开","next":"huimen_exp_paper_shop","effects":{"yin":1}})]}),
    huimen_exp2_paper_shop_basement_burn: createScene('huimen_exp2_paper_shop_basement_burn', {title:'纸扎铺地下室焚偶',text:`你点燃秀兰的纸人。

纸人在火中扭曲，发出秀兰的尖叫。那尖叫声很大，把地下室的灰尘都震落了。但叫声里没有痛苦，只有解脱——像是憋了太久的一口气，终于吐出来了。

"你烧了我最后一个替身。" 秀兰的声音从火里传出来，轻得像风，"从今以后，周家再也不能复制我。他们扎一个，你烧一个；他们再扎，你再烧。"

纸人烧成灰，灰是白的，落在地上，像一捧雪。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_burned_xiulan_paper_doll"},choices:[createChoice({"text":"回纸扎铺","next":"huimen_exp_paper_shop","effects":{"yin":1}})]}),
    huimen_exp2_paper_shop_craftsman_doll: createScene('huimen_exp2_paper_shop_craftsman_doll', {title:'扎纸匠的最后一个纸人',text:`你再次来到纸扎铺，发现老人正在扎最后一个纸人。

老人坐在工作台前，背更驼了，头发白得像雪。他的手在抖，可还是一针一线地扎。纸人放在柜台上，脸是空白的，但身形纤细，像是一个女子。

"这是阿绣。" 老人说，没有抬头，"我扎了一辈子，这是最像的一个。她的眉，她的眼，她的嘴，我都记得。我记得她笑的样子，也记得她哭的样子。"

他扎得很慢，每一针都停一下，像是在等什么人。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"帮他点睛","next":"huimen_exp2_paper_shop_craftsman_doll_eye","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_paper_shop","effects":{"yin":1}})]}),
    huimen_exp2_paper_shop_craftsman_doll_eye: createScene('huimen_exp2_paper_shop_craftsman_doll_eye', {title:'点睛',text:`你拿起朱砂，沾了一点水，调成糊。你用细笔蘸了朱砂，帮纸人点上眼睛。

朱砂一落，纸人的眼睛就"活"了——眼珠转了一下，像是在看你。它从柜台上走下来，一步，两步，朝老人伸出手。

"阿绣……" 老人颤抖着，握住那只纸手。他的眼泪流下来，滴在纸手上，被纸吸了进去。

纸人化作一道光，和老人一起飘出铺子，消失在夜空。铺子里只剩下空荡荡的工作台，和一地没扎完的纸。`,effects:{"sanity":15,"yin":-15,"setFlag":"huimen_exp2_craftsman_reunited"},choices:[createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
