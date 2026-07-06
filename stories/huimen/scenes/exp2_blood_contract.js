/**
 * 《回门》场景模块：exp2_blood_contract
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_blood_contract: createScene('huimen_exp2_blood_contract', {title:'血契',text:`你在村长家的密室里发现一卷羊皮纸。

羊皮纸上写满了血字，是周家开基祖与某个存在签的契约。契约内容大致是：周家以女子之血续命，换取男丁荣华富贵。

[red]秀兰不是第一个，也不会是最后一个。[/red]`,effects:{"sanity":-10,"yin":5,"setFlag":"huimen_exp2_found_blood_contract"},choices:[createChoice({"text":"烧毁契约","next":"huimen_exp2_blood_contract_burn","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"用血改写契约","next":"huimen_exp2_blood_contract_rewrite","effects":{"sanity":-10,"yin":-10}}),createChoice({"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_blood_contract_burn: createScene('huimen_exp2_blood_contract_burn', {title:'焚契',text:`你点燃羊皮纸。

火光里，一个苍老的身影尖叫："你敢毁周家的根！"

"周家的根早就烂了。" 你说。

契约化为灰烬，密室开始崩塌。你跑出去，身后是一片烟尘。`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"回村长家","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_blood_contract_rewrite: createScene('huimen_exp2_blood_contract_rewrite', {title:'改写',text:`你咬破手指，在契约背面写下：

"周家后世子孙，愿以己身替女子受过。从此女子不再为债，男丁不再借命。"

血字渗入羊皮纸，纸上的旧字开始褪色。你感到胸口的压抑轻了许多。`,effects:{"sanity":10,"yin":-15,"setFlag":"huimen_exp2_rewrote_blood_contract"},choices:[createChoice({"text":"把契约带走","next":"huimen_exp2_village_head_house","effects":{"yin":1,"addItem":"改写后的血契"}}),createChoice({"text":"烧了它","next":"huimen_exp2_blood_contract_burn","effects":{"yin":5}})]})
};
