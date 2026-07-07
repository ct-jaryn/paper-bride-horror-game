/**
 * 《回门》场景模块：exp_village_street_xiulan_hub
 * 与秀兰的互动、记忆入口与关键道具使用
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_xiulan_hub: createScene('huimen_exp_village_street_xiulan_hub', {title:'寻兰',text:`你知道秀兰就在这条村街的某个角落——井底、桑树下、月光小路上，或者某一片飘落的纸钱里。

村街上的雾气一阵浓一阵淡，像是有人在你前面走，故意踩出深浅不一的脚印。你踩上去，脚印就消失，可过一会儿又在别处冒出来，像是在引你往前。

你轻声唤她的名字。风停了片刻，四周的纸钱也不飞了，像是有人在听，屏着呼吸。井沿上的水珠凝住不动，桑树的叶子也不抖了，整个村子像被人按住了。

片刻后，雾气深处传来一声极轻的应答，像是从很远的地方飘来的，又像是贴在你耳边说的。

[faded]你顺着那声音往前走，青石板上不知何时多了一片湿痕，水迹弯弯曲曲，像有人拖着湿透的裙摆走过。水痕尽头是井沿，井沿上摆着一朵半开的桂花，花瓣边缘已经发褐，是被人摘下放了许久的。[/faded]

巷子里飘来一股若有若无的桂花糕香，甜里带着焦糊，像是糕蒸过头了。你想起秀兰最爱的是桂花糕，可她最后一次蒸糕，是给谁吃的？是给那个说"等月亮圆了就来接我"的周文，还是给那个始终没敢露面的祖父？

[faded]墙根下摆着一双绣花鞋，鞋面绣着兰花，针脚素净。鞋里还留着一点潮气，像是刚脱下不久。你不敢动它——村里的老人说过，鬼的鞋动不得，动了，她就找不到回家的路。[/faded]

风又起了。雾气里隐约有一个穿青布衫的轮廓在走，背影瘦削，发髻松松地挽着。你追上去，她拐进巷子就不见了，巷尾只剩一缕桂花的甜香，和一片从桑树上落下的、还带着齿痕的叶子。

[whisper]"你叫我？"[/whisper]她的声音又来了，这次近了一些，带着一点小心翼翼，像是怕认错了人，"你……真的记得我吗？"

你站在原地，忽然有些心酸。一个被活埋了三十年的女子，连应一声都要先确认来人是不是真的在叫她。她怕的不是鬼，是被人再一次遗忘。

[red]她不会让你轻易找到。但如果你真心想见她，她总会出现。[/red]`,effects:{"sanity":-2,"yin":1},choices:[createChoice({text:"再去井边看看秀兰",next:"huimen_exp_well_night_repeat",effects:{yin:1},condition:{flag:"huimen_exp_sat_with_xiulan"}}),createChoice({text:"去桑树下陪秀兰哭",next:"huimen_exp_mulberry_weep",effects:{yin:1},condition:{flag:"huimen_exp_released_mulberry_soul"}}),createChoice({text:"让秀兰唱一段戏",next:"huimen_exp_xiulan_sing",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"看秀兰跳舞",next:"huimen_exp_xiulan_dance",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"逗秀兰笑",next:"huimen_exp_xiulan_laugh",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"问秀兰恨不恨",next:"huimen_exp_xiulan_angry",effects:{yin:1},condition:{flag:"xiulanMercy"}}),createChoice({text:"安慰害怕的秀兰",next:"huimen_exp_xiulan_scared",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"和秀兰聊未来",next:"huimen_exp_xiulan_hope",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"给秀兰做桂花糕",next:"huimen_exp_xiulan_cook",effects:{yin:-1},condition:{flag:"huimen_exp_knows_xiulan_wish"}}),createChoice({text:"给秀兰做嫁衣",next:"huimen_exp_xiulan_sew",effects:{yin:-1},condition:{flag:"huimen_exp_knows_xiulan_wish"}}),createChoice({text:"带秀兰去学堂遗址",next:"huimen_exp_xiulan_school",effects:{yin:-1},condition:{flag:"huimen_exp_xiulan_danced"}}),createChoice({text:"用铜钱换秀兰自由",next:"huimen_exp_use_old_coin",effects:{yin:-1},condition:{hasItem:"清代铜钱"}}),createChoice({text:"再照一次井水里的秀兰",next:"huimen_exp_xiulan_mirror_2",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"下雨了，陪秀兰一起淋",next:"huimen_exp_xiulan_rain",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"天亮时帮秀兰挡住阳光",next:"huimen_exp_xiulan_sun",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"拥抱秀兰",next:"huimen_exp_final_hug",effects:{yin:-1},condition:{flag:"huimen_exp_held_xiulan_hand"}}),createChoice({text:"再摘一朵桂花给秀兰",next:"huimen_exp_xiulan_flower_2",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"给秀兰梳头",next:"huimen_exp_xiulan_hair",effects:{yin:-1},condition:{flag:"huimen_exp_combed_xiulan_hair"}}),createChoice({text:"答应帮秀兰托梦",next:"huimen_exp_xiulan_dream",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"把秀兰的头发系在手腕上",next:"huimen_exp_use_xiulan_hair",effects:{yin:-1},condition:{hasItem:"秀兰的头发"}}),createChoice({text:"向秀兰道歉",next:"huimen_exp_xiulan_apology",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"听秀兰说谢谢",next:"huimen_exp_xiulan_thanks",effects:{yin:-1},condition:{flag:"huimen_exp_apologized_to_xiulan"}}),createChoice({text:"叫秀兰的名字",next:"huimen_exp_xiulan_name",effects:{yin:-1},condition:{flag:"xiulanMercy"}}),createChoice({text:"问秀兰如果活着会是什么样",next:"huimen_exp_xiulan_age",effects:{yin:-1},condition:{flag:"huimen_exp_called_xiulan_name"}}),createChoice({text:"和秀兰道别",next:"huimen_exp_xiulan_goodbye",effects:{yin:-1},condition:{flag:"huimen_exp_said_goodbye_to_xiulan"}}),createChoice({text:"把婚床字条给秀兰",next:"huimen_exp_use_wedding_bed_note",effects:{yin:-1},condition:{hasItem:"婚床上的字条"}}),createChoice({text:"把石狮口中的名字还给秀兰",next:"huimen_exp_use_stone_lion_name",effects:{yin:-1},condition:{hasItem:"石狮口中的名字"}}),createChoice({text:"带秀兰做最后的告别",next:"huimen_exp_final_goodbye",effects:{yin:-5},condition:{flag:"huimen_exp_truly_saw_xiulan"}}),createChoice({text:"你觉得自己已经属于这个村子，决定留下守护记忆",ending:"huimen_exp_ending_village_memory",effects:{yin:-5},condition:{flag:"huimen_exp_truly_saw_xiulan"}}),createChoice({text:"直接把秀兰安葬",next:"huimen_exp_return_bury_xiulan",effects:{yin:-5},condition:{flag:"xiulanMercy"}})]})
};
