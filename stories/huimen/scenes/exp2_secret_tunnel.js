/**
 * 《回门》场景模块：exp2_secret_tunnel
 */

export const scenes = {
    huimen_exp2_secret_tunnel: {
        title: '秘道',
        text: `你在村长家的灶台后发现一道暗门。

暗门后是一条狭窄的秘道，墙壁上点着长明灯，灯油散发着一股奇怪的气味，像脂肪燃烧的味道。

[red]这条秘道通向哪里？[/red]`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"沿秘道走","next":"huimen_exp2_secret_tunnel_walk","effects":{"yin":2}},{"text":"查看灯油","next":"huimen_exp2_secret_tunnel_oil","effects":{"yin":3}},{"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}}],
    }
,
    huimen_exp2_secret_tunnel_walk: {
        title: '秘道深处',
        text: `你沿着秘道走了很久。

秘道的尽头是一间石室，石室正中有一口井。井不是通向地下，而是通向天空——你抬头看，井口外是满天星斗。

"这是周家的星井。" 一个声音说，"所有被周家害死的人，最后都要从这里出去。"`,
        effects: {"sanity":-8,"yin":3},
        choices: [{"text":"对井喊话","next":"huimen_exp2_secret_tunnel_well_call","effects":{"yin":-3}},{"text":"把黄纸扔进井里","next":"huimen_exp2_secret_tunnel_well_paper","effects":{"yin":2}},{"text":"离开","next":"huimen_exp2_secret_tunnel","effects":{"yin":1}}],
    }
,
    huimen_exp2_secret_tunnel_oil: {
        title: '灯油',
        text: `你凑近长明灯闻了闻。

灯油有一股腥甜的味道，像是……人油。你想起周家续命的传说，胃里一阵翻腾。

"这是女子的脂膏。" 一个声音说，"烧了三百年，还没烧完。"`,
        effects: {"sanity":-10,"yin":5,"setFlag":"huimen_exp2_learned_lamp_oil_secret"},
        choices: [{"text":"吹灭长明灯","next":"huimen_exp2_secret_tunnel_oil_extinguish","effects":{"sanity":5,"yin":-5}},{"text":"离开","next":"huimen_exp2_secret_tunnel","effects":{"yin":1}}],
    }
,
    huimen_exp2_secret_tunnel_oil_extinguish: {
        title: '熄灯',
        text: `你吹灭一盏长明灯。

密室暗了一角， walls上的影子开始骚动。你继续吹，一盏接一盏，直到整个秘道陷入黑暗。

"你断了周家的灯。" 秀兰的声音说，"她们不用再被烧了。"`,
        effects: {"sanity":10,"yin":-10,"setFlag":"huimen_exp2_extinguished_tunnel_lamps"},
        choices: [{"text":"摸黑离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}}],
    }
,
    huimen_exp2_secret_tunnel_well_call: {
        title: '对井喊话',
        text: `你对着星井喊："秀兰，你听得见吗？"

井里传来回应："听得见。这里能看见所有星星。"

"你想出来吗？" 你问。

"想。" 她说，"但我要带着她们一起出来。"`,
        effects: {"sanity":5,"yin":-5,"setFlag":"huimen_exp2_called_xiulan_in_star_well"},
        choices: [{"text":"等她","next":"huimen_exp2_secret_tunnel","effects":{"yin":-3}},{"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}}],
    }
,
    huimen_exp2_secret_tunnel_well_paper: {
        title: '扔纸',
        text: `你把一张黄纸扔进星井。

黄纸没有下落，而是向上飘去，飘出井口，飘向星空。

"那是我们的信。" 秀兰说，"你帮我们把信寄给天了。"`,
        effects: {"sanity":3,"yin":-3},
        choices: [{"text":"多扔几张","next":"huimen_exp2_secret_tunnel","effects":{"yin":-2}},{"text":"离开","next":"huimen_exp2_village_head_house","effects":{"yin":1}}],
    }
};
