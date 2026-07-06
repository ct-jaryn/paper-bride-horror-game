/**
 * 《回门》场景模块：exp_paper
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp_burn_dolls_alt: createScene('huimen_exp_burn_dolls_alt', {title:'焚偶',text:`村口那两个纸扎人，一男一女，穿着大红喜服。

你掏出打火机，点燃了他们的衣角。

纸人在火中扭动，发出婴儿般的哭声。火光里，两个模糊的身影手拉着手，朝你鞠了一躬。

"债还清了。"秀兰的声音从火中传来。

村民们惊恐地看着你，却没人敢上前。`,choices:[createChoice({"text":"让一切烧成灰","ending":"hidden_paperDollBurned"})]}),
    huimen_exp_gate_of_paper_alt: createScene('huimen_exp_gate_of_paper_alt', {title:'纸门',text:`你把老宅的门拆了下来，换成了一扇纸门。

纸门上画着秀兰的像，旁边写着："周氏秀兰，明媒正娶。"

村里人都不敢从这扇门走，说会撞邪。但你每天都从纸门下进出，风雨无阻。

一年后，纸门没有烂，反而变得更加鲜艳。秀兰的像也越来越清晰。

有一天，你出门时，听见她在门后说："周家的门，终于为我开了。"`,choices:[createChoice({"text":"为她开门","ending":"hidden_gateOfPaper"})]})
};
