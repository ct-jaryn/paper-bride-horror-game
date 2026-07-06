/**
 * 《回门》场景模块：exp_ancestral_secrets
 */


import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_ancestral_candle: createScene('huimen_exp_ancestral_candle', {title:"点烛",text:"你在祖祠的香炉里找到一根没烧完的红烛。\n\n烛身上刻着\"长命\"二字，是周家男丁出生时点的。你把蜡烛点燃，烛火却是青白色的。\n\n火焰里浮现出许多女子的脸，她们在火中扭曲、挣扎。\n\n\"这不是长命烛。\" 秀兰的声音说，\"这是续命烛。周家男人多活的每一年，都是我们的命续的。\"\n\n[red]你看着那根蜡烛，感到一阵恶心。[/red]\n\n你吹灭了它。",effects:{"sanity":-5,"yin":3},choices:[createChoice({"text":"把蜡烛折断","next":"huimen_exp_ancestral_candle_break","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把蜡烛收好","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"续命烛"}})]}),
    huimen_exp_ancestral_candle_break: createScene('huimen_exp_ancestral_candle_break', {title:"折烛",text:"你用力折断蜡烛。\n\n蜡烛断成两截，里面的蜡芯不是棉线，而是一缕头发。头发在火焰里卷曲、焦黑，发出一股腥臭。\n\n祖祠里的牌位开始颤抖，最上面的\"周氏先祖\"牌位\"咔嚓\"一声裂开。\n\n\"你断了周家的命！\" 阴影们尖叫。\n\n\"不。\" 你说，\"我断了周家偷来的命。\"\n\n蜡烛彻底熄灭，祖祠陷入黑暗。可你并不害怕，因为你知道，黑暗之后，会是真正的天亮。",effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_broke_continuing_life_candle"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ancestral_blood_pool: createScene('huimen_exp_ancestral_blood_pool', {title:"血池",text:"你在祖祠地下发现一间密室。\n\n密室里有一个血池，池里不是血，而是红色的液体，像水银一样流动。池边刻着字：\n\n[faded]\"周家男丁，饮此延寿。\"[/faded]\n\n[red]这就是周家男人活不过四十的真相：他们不是靠自己的命活，而是靠女子的血。[/red]\n\n你看着血池，感到一阵恶心。你想起父亲死时三十九岁，二叔、三姑的丈夫，没有一个活过四十。\n\n原来他们不是短命，是借来的命到期了。",effects:{"sanity":-15,"yin":5,"setFlag":"huimen_exp_saw_blood_pool"},choices:[createChoice({"text":"把血池砸破","next":"huimen_exp_ancestral_blood_pool_break","effects":{"sanity":-10,"yin":5}}),createChoice({"text":"离开密室","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_ancestral_blood_pool_break: createScene('huimen_exp_ancestral_blood_pool_break', {title:"破池",text:"你举起一块石头，砸向血池。\n\n血池破裂，红色的液体喷涌而出。液体流过的地面，浮现出无数女子的脸。她们在液体里挣扎、哭喊，然后化为一道道红光，飞向夜空。\n\n\"自由了……\" 她们说，\"我们自由了……\"\n\n祖祠开始崩塌，牌位一个个倒下。你跑出祖祠，身后是一片烟尘。\n\n[red]你毁了周家续命的根。[/red]",effects:{"sanity":-10,"yin":10},ending:"huimen_exp_ending_paper_doll_burned"}),
    huimen_exp_family_tree_alt: createScene('huimen_exp_family_tree_alt', {title:"新谱",text:"你把周家族谱扔进了火盆。\n\n那本泛黄的册子里，每一页都写着周家男丁的名字，却没有一个女子。你看着它烧成灰，又亲手写了一份新的。\n\n新的族谱第一页，是秀兰的名字。第二页，是那个孩子的名字。后面才是周家的男人们。\n\n二叔想阻止你，但秀兰站在你身后，他不敢动。\n\n\"从今天起，\"你说，\"周家欠她们的，一笔笔还。\"",choices:[createChoice({"text":"重写族谱","ending":"hidden_familyTreeAshes"})]})
};
