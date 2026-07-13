/**
 * 《回门》场景模块：exp_creature
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_dog_bark: createScene('huimen_exp_dog_bark', {title:'犬吠',text:`你经过一户人家，门板紧闭，听见里面有狗叫。

那叫声凄厉得很，不像看家护院，倒像是在哭，一声接一声，拖着长长的尾音，听得人后颈发凉。

你凑到门缝前，眯眼往里看。院子里蹲着一只黑狗，毛色油亮，眼睛却是通红的，像两颗烧红的炭。

黑狗看见你，忽然不叫了。它站起来，走到门边，用爪子扒门，扒得木屑纷飞。

"你想出来？"你问。

黑狗竟点了点头。

你推开虚掩的门，黑狗"嗖"地冲出来，却没有跑远，而是围着你转了三圈，然后撒腿朝村外跑去。

[red]它跑的方向，是秀兰的坟。[/red]`,effects:{"sanity":-3,"yin":1},choices:[createChoice({"text":"跟着黑狗","next":"huimen_exp_follow_dog","effects":{"yin":1}}),createChoice({"text":"不管它，回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_follow_dog: createScene('huimen_exp_follow_dog', {title:'引路',text:`你咬咬牙，跟着黑狗跑了出去。

黑狗跑得不快，时不时回头看你一眼，像怕你跟丢了。它带你绕过纸人聚集的巷子，穿过一片歪斜的坟地，最后停在一座无字碑前，喘着粗气。

碑上慢慢浮现出血字，一个字一个字地渗出来：

[faded]"秀兰之骨，分埋三处。井底一，庙中一，桑下一。"[/faded]

黑狗对着无字碑叫了三声，一声比一声低，然后趴在地上，不动了。

你蹲下身去看，发现它已经变成了一尊青石雕的狗，身上还带着余温。`,effects:{"sanity":-5,"yin":2,"setFlag":"huimen_exp_knows_bone_locations"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_fox_fire: createScene('huimen_exp_fox_fire', {title:'狐火',text:`村外的坟地里，不知何时飘起几团绿色的火焰。

火焰忽高忽低，像是有生命一样在坟头跳跃。湿冷的夜风吹过，火光摇曳，映得坟碑上的字忽明忽暗。

你想起老辈人讲过的狐火，说那是狐狸提的引路灯笼，专带迷路的人。

一团狐火飘到你面前，停住了。火光里，你隐约看见一只狐狸的轮廓，尖耳朵，长尾巴。它朝你摇了摇尾巴，然后转身朝树林深处跑去。

[whisper]"跟上。"[/whisper]一个声音在你耳边响起，"它知道出村的路。"[whisper][/whisper]

可你也听说过，跟狐火走的人，多半回不来。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"跟着狐火","next":"huimen_exp_follow_fox_fire","effects":{"yin":2}}),createChoice({"text":"不跟，回村街","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-1}})]}),
    huimen_exp_follow_fox_fire: createScene('huimen_exp_follow_fox_fire', {title:'狐径',text:`你跟着狐火走进了树林。

树林里的小路不是石板路，而是落叶铺成的。每走一步，脚下的落叶就"沙沙"作响，像有人在耳边低语，絮絮叨叨，听不清说什么。

狐火停在一棵老树下。树干上有个碗口大的洞，洞里嵌着一面铜镜，镜面斑驳发绿。你凑近看，镜子里映出的不是树林，而是村子。

"你想出去？"狐狸的声音问，"还是想留下？"

[red]镜子里的村子正在燃烧，纸人在火中尖叫、起舞。[/red]

"这是秀兰的怨念烧起来的样子。"狐狸说，"你出去，村子就烧。你留下，村子就还在。"`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"出去，让村子烧","next":"huimen_exp_fox_fire_escape","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"留下，找别的办法","next":"huimen_exp_village_street","effects":{"sanity":5,"yin":-3}})]}),
    huimen_exp_fox_fire_escape: createScene('huimen_exp_fox_fire_escape', {title:'狐火引路',text:`你没有回头，踩着燃烧的纸钱冲出村口。身后，秀兰的笑声像风一样追上来。你一头撞进铜镜里——这是唯一的出口。

镜面像水一样包裹住你，冰凉黏腻。你感到自己在下坠，一直下坠，下坠了很久，久到你以为会永远这样落下去。

然后，你落在村口的石板路上。

身后，村子正在燃烧。纸人在火中尖叫，化为灰烬。你看见秀兰站在井边，静静看着这场大火，脸上没有表情。

"你选了最轻松的路。"她说，"但也是最无情的路。"

你没有回头。你沿着山路一直走，一直走，直到天亮。

可你再也没有梦见过秀兰。你只梦见火，梦见纸人在火里跳舞，梦见它们的脸，都是你的脸。`,effects:{"sanity":-10,"yin":10},ending:'huimen_exp_moonlit_escape'})
};
