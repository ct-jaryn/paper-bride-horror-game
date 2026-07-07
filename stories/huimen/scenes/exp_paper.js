/**
 * 《回门》场景模块：exp_paper
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_burn_dolls_alt: createScene('huimen_exp_burn_dolls_alt', {title:'焚偶',text:`村口那两个纸扎人，还站在老槐树下。一男一女，穿着大红喜服，脸上画着诡异的笑。

你掏出打火机，"咔"地点燃了男纸人的衣角。火苗"呼"地窜起来，顺着纸衣往上舔。

纸人在火中扭动起来，发出婴儿般的哭声，一声接一声，尖细而凄厉。火光里，两个模糊的身影从纸人中走出来，手拉着手，朝你深深鞠了一躬。

"债还清了。"秀兰的声音从火中传来，平静而释然。

村民们远远站着，惊恐地看着你，却没有一个人敢上前。火光映在他们脸上，一张张都是惨白。`,choices:[createChoice({"text":"让一切烧成灰","ending":"hidden_paperDollBurned"})]}),
    huimen_exp_gate_of_paper_alt: createScene('huimen_exp_gate_of_paper_alt', {title:'纸门',text:`你把老宅那扇沉重的木门拆了下来，换成了一扇自己糊的纸门。

纸门上你画了秀兰的像，眉眼温柔，旁边用工整小楷写着："周氏秀兰，明媒正娶。"

村里人都不敢从这扇门走，说会撞邪，远远绕开。但你每天都从纸门下进出，风雨无阻，一年，两年。

一年后，纸门没有烂，反而变得更加鲜艳，颜色鲜亮得像刚画上去的。秀兰的像也越来越清晰，眉眼像是会动。

有一天，你出门时，听见她在门后轻轻说："周家的门，终于为我开了。"`,choices:[createChoice({"text":"为她开门","ending":"hidden_gateOfPaper"})]})
};
