/**
 * 《回门》场景模块：exp2_ruins
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_ruins_doll: createScene('huimen_exp2_ruins_doll', {title:'废墟纸偶',text:`你在废墟的角落里发现一个破旧的纸偶。

纸偶穿着新郎服，脸上画着周文的模样。它的胸口贴着一张黄符，符上写着秀兰的生辰八字。

[red]这是周文扎的替身，想替秀兰受过。[/red]`,effects:{"sanity":-5,"yin":2,"addItem":"周文的纸偶"},choices:[createChoice({"text":"把纸偶烧了","next":"huimen_exp2_ruins_doll_burn","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"把纸偶给秀兰","next":"huimen_exp2_riverbank","effects":{"sanity":10,"yin":-10,"removeItem":"周文的纸偶"}})]}),
    huimen_exp2_ruins_doll_burn: createScene('huimen_exp2_ruins_doll_burn', {title:'废墟焚偶',text:`你点燃纸偶。

纸偶在火中扭曲，发出周文的声音："秀兰，对不起。"

秀兰从井里浮出来，看着火光，没有说话。但她的眼泪落进井里，井水变得清澈。`,effects:{"sanity":10,"yin":-10,"removeItem":"周文的纸偶"},choices:[createChoice({"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}})]})
};
