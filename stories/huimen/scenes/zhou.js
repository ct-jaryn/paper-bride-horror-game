/**
 * 《回门》场景模块：zhou
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    zhou_bloodline_revelation: createScene('zhou_bloodline_revelation', {title:'血脉还债',text:`你望着无字碑上的血字，忽然想起另一段经历。

在青丘山下，狐女也曾说起周家。她说你父亲救过她的母亲，说周家血脉里欠着一份狐缘。

可此刻你才明白，周家欠下的又何止狐缘。

秀兰肚里的孩子，是周家的骨血。她被活埋，孩子陪她死在井底。三十年后，你作为周家后人回来，却被要求延续这场冥婚。

[red]这不是缘，是债。[/red]

你跪在碑前，咬破指尖，在石碑上写下一个"周"字。

"我周家世代的债，从我这里开始还。" 你说，"秀兰，你的孩子，我认。你的名分，我给。若有来世，周家再不欠你。"

血字渗入石碑，无字碑轰然裂开。一股桂花香从碑底涌出，秀兰的身影在香气中渐渐凝实。她怀里抱着一个婴孩的虚影，正看着你笑。

"你……和别的周家人不一样。" 她说。

她的身影化作两道红光，一道没入你的胸口，一道飞向远方。

你知道，那飞向远方的，是解脱。而那没入你胸口的，是周家血脉最后的诅咒，也是最后的救赎。`,effects:{"sanity":20,"yin":-30,"setFlag":"zhouDebtAcknowledged"},ending:'hidden_zhouCurse'}),
    huimen_exp_zhou_curse_alt: createScene('huimen_exp_zhou_curse_alt', {title:'血脉',text:`你跪在祠堂里，承认周家血脉里流的罪。

秀兰和她的孩子终于解脱，但一道红光没入你的胸口。从今以后，你会在梦里不断回到那些山村、戏台、古墓，遇见一个又一个被周家害过的人。

你是周家最后的血脉，也是周家最后的还债人。

但你不再害怕。因为只要你不忘，那些亡魂就不会真正消失。`,choices:[createChoice({"text":"接下这份债","ending":"hidden_zhouCurse"})]}),
    huimen_exp_zhou_women_alt: createScene('huimen_exp_zhou_women_alt', {title:'女名墙',text:`你在老宅祠堂里找到了一面墙。墙上密密麻麻刻着很多名字：周氏秀兰、周氏柳红、周氏云袖……每一个都是周家害过的女子。

你把她们的名字一个个抄下来，写成了一份长长的名单，贴在村口。

村民们围过来看。有人说你疯了，有人看完后默默流泪。

秀兰站在你身后，轻声说："原来我们不只是鬼，我们也是人。"

"一直都是。"你说。`,choices:[createChoice({"text":"让她们被看见","ending":"hidden_zhouWomen"})]})
};
