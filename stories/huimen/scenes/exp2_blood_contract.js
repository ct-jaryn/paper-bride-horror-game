/**
 * 《回门》场景模块：exp2_blood_contract
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_blood_contract: createScene('huimen_exp2_blood_contract', {title:'血契',text:`你在村长家的密室里，发现一个铁皮匣子。匣子锈得几乎打不开，你用指甲抠了半天，才听见"咔"的一声。

匣子里躺着一卷羊皮纸。纸已经发黑，卷边结着一层暗红的硬壳，像干透的血。你展开它，纸发出一声脆响，像骨头断裂。

羊皮纸上写满了血字，字迹古朴，是周家开基祖的笔迹。契约内容大致是：周家以女子之血续命，换男丁荣华富贵，世代相传。每三十年献一名"不祥女"，剖其腹，取其子，封其魂于纸扎，烧于祠堂。

你的眼睛扫到最后一行，落款处盖着一个血印，印是一个女人的手印——五指张开，指甲尖锐，像是在抓。

[red]秀兰不是第一个，也不会是最后一个。[/red]

羊皮纸忽然发烫，烫得你几乎握不住。你低头看，纸上的血字在动，像一群红色的虫子，慢慢爬向你的手腕。你甩开它，纸落在地上，卷成筒，自己滚到墙角。

密室里响起一阵低低的笑声，不知从哪里传来。`,effects:{"sanity":-10,"yin":5,"setFlag":"huimen_exp2_found_blood_contract"},choices:[createChoice({"text":"烧毁契约","next":"huimen_exp2_blood_contract_burn","effects":{"sanity":-5,"yin":5}}),createChoice({"text":"用血改写契约","next":"huimen_exp2_blood_contract_rewrite","effects":{"sanity":-10,"yin":-10}}),createChoice({"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_blood_contract_burn: createScene('huimen_exp2_blood_contract_burn', {title:'焚契',text:`你捡起羊皮纸，用打火机点燃一角。

火苗舔上血字，纸发出一阵滋滋的声响，像油在炸。火光里，一个苍老的身影从烟雾中浮出来，面目模糊，只剩一双贪婪的眼。

"你敢毁周家的根！" 他尖叫，声音像铁器刮过石板，刺得你耳膜生疼。

"周家的根早就烂了。" 你说，把纸丢在地上，看它烧成一团黑色的灰。

契约化为灰烬，密室开始崩塌。墙皮一片一片往下掉，露出里面的红砖，红砖上爬满了密密麻麻的名字——那些被献祭的女子，她们的字被压在墙里，看不见，却一直在。

你转身往外跑，身后是一片烟尘和尖叫。门框在你头顶"轰"的一声塌下来，你侧身滚出去，后背蹭了一道血痕。

回头望去，密室已经塌成一座坟。`,effects:{"sanity":-10,"yin":10},choices:[createChoice({"text":"回村长家","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_blood_contract_rewrite: createScene('huimen_exp2_blood_contract_rewrite', {title:'改写',text:`你咬破手指，血珠子冒出来，红的，烫的。你把血抹在羊皮纸背面，一笔一画写下：

"周家后世子孙，愿以己身替女子受过。从此女子不再为债，男丁不再借命。"

血字渗入羊皮纸，像水渗进干土。纸上的旧字开始褪色，那个血手印也慢慢淡去，五指张开，像是在松开什么。

你感到胸口的压抑轻了许多，像是有人从你肩上卸下了一副担子。可你的手指还在流血，血一滴一滴落在纸上，被它吸进去，像它渴了很久。

纸的背面浮出一行新字，是用你的血写的：

[faded]"债已转。汝替她们还。"[/faded]

你忽然觉得冷，从骨头缝里往外冒的冷。`,effects:{"sanity":10,"yin":-15,"setFlag":"huimen_exp2_rewrote_blood_contract"},choices:[createChoice({"text":"把契约带走","next":"huimen_exp2_village_head_house","effects":{"yin":1,"addItem":"改写后的血契"}}),createChoice({"text":"烧了它","next":"huimen_exp2_blood_contract_burn","effects":{"yin":5}})]})
};
