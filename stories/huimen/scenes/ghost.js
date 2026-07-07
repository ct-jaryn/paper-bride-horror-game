/**
 * 《回门》场景模块：ghost
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    use_talisman_ghost: createScene('use_talisman_ghost', {title:'以符驱鬼',text:`纸人不知从哪个角落蹿了出来。

那是一团白色的影子，四肢关节反着弯，像被什么人从纸上剪下来又硬生生撑起的架子。它扑过来时带着一股陈年香灰和湿纸浆的腥气，纸糊的脸皮上那对墨点眼睛黑洞洞地瞪着你。

你下意识摸出护身符挡在面前。黄纸符在指尖发烫，朱砂的"镇"字闪了一下。

纸人撞到符上，发出一声刺耳的尖叫——不是嗓子的声音，是纸张被揉皱、被撕裂时挤出的那种尖锐的摩擦声。它的脸皮卷起一个角，露出底下空空荡荡的黄纸内衬，像被火舌舔过一样缩了回去，跌坐在墙根下抽搐。

可你掌心的护身符也瞬间变成了黑色，朱砂字渗出血一样的暗红，随后"啪"地碎成几片，像落叶一样飘下来。指尖只剩一缕焦糊的纸味。

[faded]它替你挡了一次。[/faded]

墙根的纸人慢慢止住抽搐，墨点眼睛重新转向你。它歪着头，纸糊的嘴角裂开一道缝，像在笑。

[whisper]还有多少张……[/whisper] 风里飘来这么一句。`,effects:{"sanity":-5,"removeItem":"护身符","yin":-10},choices:[createChoice({"text":"趁机会逃走","next":"huimen_exp_village_street"})]})
};
