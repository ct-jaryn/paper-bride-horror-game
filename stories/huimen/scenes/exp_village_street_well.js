/**
 * 《回门》场景模块：exp_village_street_well
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_village_street_well_sound: createScene('huimen_exp_village_street_well_sound', {title:'井响',text:`你听见井里传来声音。

不是水声，是敲击声，像有人在井底敲打着井壁。"咚咚咚"，很有节奏。

你来到井边，对着井口喊："是谁？"

敲击声停了。然后一个声音说："是我。秀兰。我在井底刻字，刻了三十年。"

"你刻了什么？"

"刻我的名字。" 她说，"我怕时间久了，连我自己都忘了自己是谁。"

[red]你探头看，井壁上密密麻麻全是"秀兰"两个字。[/red]`,effects:{"sanity":-10,"yin":3},choices:[createChoice({"text":"对她说我记得你","next":"huimen_exp_village_street_well_sound_remember","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]}),
    huimen_exp_village_street_well_sound_remember: createScene('huimen_exp_village_street_well_sound_remember', {title:'记得',text:`你说："我记得你。你是周秀兰，民国三年生，喜欢桂花糕，喜欢听戏，想当老师。"

井底的敲击声停了。过了一会儿，传来轻轻的啜泣。

"你真的记得。" 秀兰说，"不是只记得我是鬼。"

"我记得你是人。" 你说，"一个很好的人。"

井壁上的"秀兰"两个字开始发光，然后一个个从井壁上脱落，像萤火虫一样飞向夜空。

"我不需要再刻了。" 她说，"因为有人会记得我了。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp_xiulan_remembered"},choices:[createChoice({"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
