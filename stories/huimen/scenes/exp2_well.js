/**
 * 《回门》场景模块：exp2_well
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_well_wall: createScene('huimen_exp2_well_wall', {title:'井壁字',text:`你顺着井壁的石阶，再次下到井底。

井是青石砌的，石阶湿滑，长着青苔。你扶着井壁，一步一步往下走，每一步都"咯吱咯吱"地响，像是踩在什么东西上。井里很暗，只有井口漏下来的一线天光，灰蒙蒙的。

这次你没有看红棺，而是凑近井壁。井壁上密密麻麻刻满了字，都是秀兰用指甲刻的。字刻得很深，一笔一画，像是用尽了力气。指甲刻在青石上，每一笔都渗着暗红的血痕。

你借着微弱的光，一行行读过去。字迹歪斜，有的认得出，有的认不出：

"民国二十三年，中秋前夜。周家害我。我腹中尚有周家骨肉。求后来人，为我正名。"`,effects:{"sanity":-10,"yin":3,"setFlag":"huimen_exp2_read_well_wall_words"},choices:[createChoice({"text":"在井壁上刻\"我记住了\"","next":"huimen_exp2_well_wall_carve","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把这些字拓下来","next":"huimen_exp2_well_wall_rubbing","effects":{"yin":1}}),createChoice({"text":"上井","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_well_wall_carve: createScene('huimen_exp2_well_wall_carve', {title:'刻回应',text:`你掏出小刀，在秀兰的字旁边，一笔一画地刻下：

"周秀兰，周家后人记得你。你的委屈，不会随水而去。"

刀在青石上"咯吱咯吱"地刻，每一刀都溅出一点石屑。石屑是白的，落在井水里，像雪。

刻完，井水开始翻涌。秀兰的身影从水里浮出来，她蹲在井底，看着你刻的字，眼泪一滴一滴落进井里，井水"叮咚"地响。

"谢谢你。" 她说，声音里有三十年的孤独终于被打破的释然，"我终于不是自言自语了。三十年了，我在这里说话，没有人听。现在有人在墙上回我了。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_responded_on_well_wall"},choices:[createChoice({"text":"上井","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp2_well_wall_rubbing: createScene('huimen_exp2_well_wall_rubbing', {title:'拓字',text:`你掏出一张纸——是从纸扎铺顺来的宣纸——把它贴在井壁上，用一截炭笔，把秀兰刻的字拓下来。

纸上的字迹血红，像是从石头里渗出来的，不是拓的，是印的。你把拓纸揭下来，纸上的字还在微微发亮，像是活的。

你把拓纸收好，折成四折，塞进怀里。纸贴着你的胸口，是凉的，凉得像井水。

"你要让外面的人看见？" 秀兰问，从井底传来，声音里有期待，也有不安。

"是的。" 你说，"我要让所有人看见。让他们知道，这里死过一个叫秀兰的女子，她不该死。"`,effects:{"sanity":5,"yin":-5,"addItem":"井壁字拓片"},choices:[createChoice({"text":"上井","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
