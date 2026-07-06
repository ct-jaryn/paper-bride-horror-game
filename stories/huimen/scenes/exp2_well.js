/**
 * 《回门》场景模块：exp2_well
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_well_wall: createScene('huimen_exp2_well_wall', {title:'井壁字',text:`你再次下到井底。

这次你没有看红棺，而是看井壁。井壁上密密麻麻刻满了字，都是秀兰用指甲刻的。你借着微弱的光，一行行读过去。

"民国二十三年，中秋前夜。周家害我。我腹中尚有周家骨肉。求后来人，为我正名。"`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp2_read_well_wall_words"},choices:[createChoice({"text":"在井壁上刻\"我记住了\"","next":"huimen_exp2_well_wall_carve","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把这些字拓下来","next":"huimen_exp2_well_wall_rubbing","effects":{"yin":1}}),createChoice({"text":"上井","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_well_wall_carve: createScene('huimen_exp2_well_wall_carve', {title:'刻回应',text:`你在秀兰的字旁边刻下：

"周秀兰，周家后人记得你。你的委屈，不会随水而去。"

刻完，井水开始翻涌，秀兰的身影浮出来。她看着你刻的字，眼泪落进井里。

"谢谢你。" 她说，"我终于不是自言自语了。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_responded_on_well_wall"},choices:[createChoice({"text":"上井","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_well_wall_rubbing: createScene('huimen_exp2_well_wall_rubbing', {title:'拓字',text:`你掏出一张纸，把井壁上的字拓下来。

纸上的字迹血红，像是从石头里渗出来的。你把拓纸收好，准备带出村子。

"你要让外面的人看见？" 秀兰问。

"是的。" 你说。`,effects:{"sanity":5,"yin":-5,"addItem":"井壁字拓片"},choices:[createChoice({"text":"上井","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
