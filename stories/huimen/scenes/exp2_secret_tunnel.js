/**
 * 《回门》场景模块：exp2_secret_tunnel
 */

import { createScene, createChoice } from '../../../js/engine/sceneFactory.js';

export const scenes = {
    huimen_exp2_secret_tunnel: createScene('huimen_exp2_secret_tunnel', {title:'秘道',text:`你在村长家的灶台后，发现一道暗门。

暗门是木板的，刷了和墙一样的颜色，不仔细看根本看不出来。你按了一下墙上凸起的砖，门"咯"地一声，弹开了。

暗门后是一条狭窄的秘道，只容一人侧身而过。墙壁是石砌的，湿漉漉的，渗着水。墙上点着长明灯，灯一盏接一盏，往远处延伸，看不见尽头。灯油散发着一股奇怪的气味，不是菜油，不是桐油，是一种腥甜的、像脂肪燃烧的味道。

[red]这条秘道通向哪里？灯油的味道，让你胃里一阵翻腾。[/red]

秘道深处传来一阵回声，像是有人在很远的地方走，脚步声被石壁放大了。`,effects:{"sanity":-5,"yin":2},choices:[createChoice({"text":"沿秘道走","next":"huimen_exp2_secret_tunnel_walk","effects":{"yin":2}}),createChoice({"text":"查看灯油","next":"huimen_exp2_secret_tunnel_oil","effects":{"yin":3}}),createChoice({"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_secret_tunnel_walk: createScene('huimen_exp2_secret_tunnel_walk', {title:'秘道深处',text:`你沿着秘道走了很久。

秘道越走越窄，又越走越宽，最后通向一间石室。石室是方的，不大，也就两丈见方。墙壁是青石砌的，缝里渗着水，地上积着一层薄薄的积水。

石室正中有一口井。井不是通向地下，而是通向天空——你抬头看，井口外是满天星斗。星星很亮，亮得不像在这个村里能看见的。

"这是周家的星井。" 一个声音说，从石壁里传来，像是从石头缝里渗出来的，"所有被周家害死的人，最后都要从这里出去。他们的魂顺着星井往上飞，飞出井口，飞向天上。可周家在井口封了一道符，他们飞不出去，只能在井里转。"

你低头看井，井底有星星的倒影，密密麻麻，像一群被困的眼睛。`,effects:{"sanity":-8,"yin":3},choices:[createChoice({"text":"对井喊话","next":"huimen_exp2_secret_tunnel_well_call","effects":{"yin":-3}}),createChoice({"text":"把黄纸扔进井里","next":"huimen_exp2_secret_tunnel_well_paper","effects":{"yin":2}}),createChoice({"text":"离开","next":"huimen_exp2_secret_tunnel","effects":{"yin":1}})]}),
    huimen_exp2_secret_tunnel_oil: createScene('huimen_exp2_secret_tunnel_oil', {title:'灯油',text:`你凑近一盏长明灯，闻了闻。

灯油有一股腥甜的味道，像是……人油。那味道甜得发腻，腻得让人想吐。你想起周家续命的传说——周家男丁能活到四十岁以上，是因为有人替他们"续"了命。续命的方式，是把女子的脂膏熬成灯油，烧在秘道里，烧了三百年。

你想起祖母临终前的话："周家男丁没有一个能活过四十岁。" 那是诅咒。可诅咒之后，周家找到了破解的方法——用别人的命，续自己的命。

"这是女子的脂膏。" 一个声音说，从灯里传来，"烧了三百年，还没烧完。每一盏灯，烧的是一个女子的一生。"`,effects:{"sanity":-10,"yin":5,"setFlag":"huimen_exp2_learned_lamp_oil_secret"},choices:[createChoice({"text":"吹灭长明灯","next":"huimen_exp2_secret_tunnel_oil_extinguish","effects":{"sanity":5,"yin":-5}}),createChoice({"text":"离开","next":"huimen_exp2_secret_tunnel","effects":{"yin":1}})]}),
    huimen_exp2_secret_tunnel_oil_extinguish: createScene('huimen_exp2_secret_tunnel_oil_extinguish', {title:'熄灯',text:`你凑近一盏长明灯，"呼"地一吹。

灯灭了，火苗缩回去，像一条被惊吓的蛇。秘道暗了一角，墙上的影子开始骚动，像是什么东西被惊醒了。

你继续吹，一盏接一盏。每吹灭一盏，秘道就暗一截，墙上的影子就多动一分。吹到最后，整个秘道陷入黑暗，只剩你手里打火机的一点微光。

"你断了周家的灯。" 秀兰的声音说，从黑暗里传来，却让你安心，"她们不用再被烧了。"`,effects:{"sanity":10,"yin":-10,"setFlag":"huimen_exp2_extinguished_tunnel_lamps"},choices:[createChoice({"text":"摸黑离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_secret_tunnel_well_call: createScene('huimen_exp2_secret_tunnel_well_call', {title:'对井喊话',text:`你对着星井喊："秀兰，你听得见吗？"

声音在井里回荡，一圈一圈地往下沉，又一圈一圈地往上飘。过了一会儿，井里传来回应，是秀兰的声音，却比平时清亮：

"听得见。这里能看见所有星星。"

"你想出来吗？" 你问。

"想。" 她说，"但我要带着她们一起出来。一个出不来，就都出不来。"`,effects:{"sanity":5,"yin":-5,"setFlag":"huimen_exp2_called_xiulan_in_star_well"},choices:[createChoice({"text":"等她","next":"huimen_exp2_secret_tunnel","effects":{"yin":-3}}),createChoice({"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]}),
    huimen_exp2_secret_tunnel_well_paper: createScene('huimen_exp2_secret_tunnel_well_paper', {title:'扔纸',text:`你从怀里掏出一张黄纸——是你从纸扎铺顺来的——把它扔进星井。

黄纸没有下落，而是向上飘去。它越飘越高，飘出井口，飘向星空，越飘越小，最后变成一个亮点，和星星混在一起，分不清了。

"那是我们的信。" 秀兰说，声音从井里传来，带着笑，"你帮我们把信寄给天了。天会看见的。"`,effects:{"sanity":3,"yin":-3},choices:[createChoice({"text":"多扔几张","next":"huimen_exp2_secret_tunnel","effects":{"yin":-2}}),createChoice({"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}})]})
};
