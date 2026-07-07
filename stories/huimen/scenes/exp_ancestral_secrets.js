/**
 * 《回门》场景模块：exp_ancestral_secrets
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_ancestral_candle: createScene('huimen_exp_ancestral_candle', {title:"点烛",text:`你在祖祠的香炉底翻找，触到一截冰凉的东西。拂去香灰，是一根没烧完的红烛。

烛身上刻着"长命"二字，字迹歪斜，像是周家男丁出生时点的。你用火折点燃蜡烛，烛芯却"噼啪"作响，火苗蹿起青白色的光，照得整座祖祠惨白。

火焰里浮现出许多女子的脸，她们在火中扭曲、挣扎，张着嘴无声地呼喊。

"这不是长命烛。"秀兰的声音从烛火里飘出来，低低的，带着哭腔，"这是续命烛。周家男人多活的每一年，都是从我们的命里续来的。"

[red]你盯着那根蜡烛，胃里一阵翻涌，喉咙里泛起酸水。[/red]

烛泪"啪嗒"一滴落在你手背上，烫得钻心。你猛地甩手，用力吹灭了它。`,effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"把蜡烛折断","next":"huimen_exp_ancestral_candle_break","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把蜡烛收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"续命烛"}})]}),
    huimen_exp_ancestral_candle_break: createScene('huimen_exp_ancestral_candle_break', {title:"折烛",text:`你双手握住蜡烛两端，用力一折。

"咔"的一声，蜡烛断成两截。断口处露出的蜡芯不是棉线，而是一缕乌黑的头发。头发在残余的火光中卷曲、焦黑，散发出一股烧焦的腥臭。

祖祠里的牌位齐齐颤抖起来，最上方的"周氏先祖"牌位"咔嚓"一声从中间裂开，裂缝里渗出黑色的液体。

"你断了周家的命！"阴影们尖声叫嚷，"你断了周家的命！"

"不。"你说，声音出奇地平静，"我断了周家偷来的命。"

蜡烛彻底熄灭，祖祠陷入一片黑暗。可你一点也不害怕——你知道，黑暗之后，会是真正的天亮。`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_broke_continuing_life_candle"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ancestral_blood_pool: createScene('huimen_exp_ancestral_blood_pool', {title:"血池",text:`祖祠地下竟还有一间密室。你顺着石阶摸黑下去，空气越来越冷，越来越腥。

密室正中有一个石砌的血池。池里不是血，而是一种猩红色的液体，像水银一样浓稠地流动着，表面泛着幽幽的光。池边的石壁上刻着一行字：

[faded]"周家男丁，饮此延寿。"[/faded]

[red]这就是周家男人活不过四十的真相——他们不是短命，是借来的命到期了。[/red]

你盯着血池，胃里一阵阵痉挛。你想起父亲死时才三十九岁，二叔、三姑的丈夫，没有一个活过四十岁。

原来他们的命，都是这池子里一口一口喝出来的。`,effects:{"sanity":-15,"yin":5,"setFlag":"huimen_exp_saw_blood_pool"},choices:[createChoice({"text":"把血池砸破","next":"huimen_exp_ancestral_blood_pool_break","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"离开密室","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ancestral_blood_pool_break: createScene('huimen_exp_ancestral_blood_pool_break', {title:"破池",text:`你搬起池边一块棱角尖锐的石头，狠狠砸向血池。

"哗啦"一声，池壁碎裂，猩红的液体喷涌而出，溅了你一身。液体流过的地面，浮现出无数女子的脸——她们在红水中挣扎、哭喊，然后化为一道道红光，冲向夜空。

"自由了……"她们说，声音里带着哭，也带着笑，"我们终于自由了……"

祖祠开始崩塌，牌位一个个倒下，香炉翻倒，黄符自燃。你拼命跑出祖祠，身后是一片呛人的烟尘。

[red]你毁了周家续命的根。[/red]`,effects:{"sanity":-10,"yin":10},ending:"huimen_exp_ending_paper_doll_burned"}),
    huimen_exp_family_tree_alt: createScene('huimen_exp_family_tree_alt', {title:"新谱",text:`你把那些族谱碎片扔进火盆，看着周家的字一行一行被火吞掉。

火苗舔上书页，册子里每一页都写着周家男丁的名字，却没有一个女子。你看着它一点点烧成灰，火光映在你的脸上。

你蹲下身，铺开一张新的白纸，重新写下族谱。

新的族谱第一页，是秀兰的名字。第二页，是那个孩子的名字。后面才是周家的男人们。

二叔想冲上来阻止你，可他一抬眼，看见秀兰正站在你身后，直直盯着他。他张了张嘴，到底没敢动。

"从今天起，"你头也不抬地说，"周家欠她们的，一笔一笔还。"

火盆里的灰烬飘起来，像一场无声的雪。`,choices:[createChoice({"text":"重写族谱","ending":"hidden_familyTreeAshes"})]})
};
