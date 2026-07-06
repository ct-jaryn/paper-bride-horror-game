/**
 * 《回门》场景模块：exp3_xiulan_memory
 */

export const scenes = {
    huimen_exp3_xiulan_memory_childhood_intro: {
        title: '秀兰的童年',
        text: `村街尽头忽然飘来一阵槐花香。

你循香走去，发现一扇半掩的木门。门后是一个小院，院里晒着粗布，一个扎着双髻的小女孩坐在门槛上绣花。

她抬起头，眼睛亮得像井水："你是来娶我的吗？"

你愣住。那眉眼，分明是年幼的秀兰。`,
        effects: {"sanity":3,"yin":1},
        choices: [{"text":"蹲下来，陪她绣花","next":"huimen_exp3_xiulan_memory_childhood_sew","effects":{"sanity":2,"yin":0}},{"text":"问她长大后想做什么","next":"huimen_exp3_xiulan_memory_childhood_dream","effects":{"sanity":2,"yin":1}},{"text":"悄悄退出门外","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp3_xiulan_memory_childhood_sew: {
        title: '秀兰记忆绣花',
        text: `你坐在门槛上，看她一针一针绣一朵并蒂莲。

"我娘说，绣得好，将来才能嫁得好。"她把线头咬断，"可我不想嫁人。我想去镇上，看看戏台上的花旦是怎么走路的。"

一阵风吹过，粗布上的影子晃了晃。小女孩忽然长大了些许，变成少女的轮廓。`,
        effects: {"sanity":2,"yin":1},
        choices: [{"text":"说你会带她去看戏","next":"huimen_exp3_xiulan_memory_childhood_promise","effects":{"sanity":3,"yin":1,"setFlag":"huimen_exp3_promised_xiulan_opera"}},{"text":"沉默地看着她","next":"huimen_exp3_xiulan_memory_childhood_fade","effects":{"sanity":-2,"yin":2}}],
    }
,
    huimen_exp3_xiulan_memory_childhood_dream: {
        title: '她的愿望',
        text: `"我想开一家绣庄。"她把绣花绷子抱在胸前，"绣自己的花样，不用看婆婆脸色。"

她话音刚落，院墙上的青苔忽然蔓延，像是要把这座院子吞回时光里。`,
        effects: {"sanity":2,"yin":1},
        choices: [{"text":"告诉她，她的绣品以后会被人记住","next":"huimen_exp3_xiulan_memory_childhood_promise","effects":{"sanity":3,"yin":1}},{"text":"起身离开院子","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp3_xiulan_memory_childhood_promise: {
        title: '童言',
        text: `小女孩笑了，把绣了一半的并蒂莲塞进你手里。

"那你可要记得。大人最会忘事了。"

她的身影像被水晕开的墨，渐渐淡去。院里只剩一架织布机，还在空无一人的堂屋里"咔嗒咔嗒"地响。`,
        effects: {"sanity":3,"yin":1},
        choices: [{"text":"走进堂屋看织布机","next":"huimen_exp3_xiulan_memory_weaving","effects":{"yin":1}},{"text":"带着绣品离开","next":"huimen_exp_village_street","effects":{"yin":1,"addItem":"秀兰的绣品"}}],
    }
,
    huimen_exp3_xiulan_memory_childhood_fade: {
        title: '消散',
        text: `你没有说话。

小女孩低下头，继续绣花。她的身影越来越淡，最后只剩下一团模模糊糊的光，和门槛上一只没绣完的鞋面。

你捡起鞋面，发现上面绣的不是并蒂莲，是一口井。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp3_xiulan_memory_weaving: {
        title: '织布声',
        text: `织布机自己在动。

梭子来回穿梭，织出的不是布，是一幅幅画面：秀兰少年时熬夜织布，手指被梭子磨出血；她把卖布的钱藏进陶罐，说要给自己置办嫁妆；她娘把陶罐拿走，说"嫁人就是嫁妆"。

最后一幅画面停在一只红嫁衣上。嫁衣的袖口绣着井。`,
        effects: {"sanity":-2,"yin":2},
        choices: [{"text":"伸手触摸嫁衣","next":"huimen_exp3_xiulan_memory_wedding_night","effects":{"yin":2}},{"text":"烧掉嫁衣","next":"huimen_exp3_xiulan_memory_weaving_burn","effects":{"sanity":5,"yin":-3}}],
    }
,
    huimen_exp3_xiulan_memory_weaving_burn: {
        title: '焚衣',
        text: `火从嫁衣的袖口烧起，那口井在火焰里扭曲，变成一张哭脸。

织布机停了。屋里飘满纸灰的味道，像一场提前到来的葬礼。

你在灰烬里摸到一枚铜顶针，上面刻着一个小小的"秀"字。`,
        effects: {"sanity":5,"yin":-3,"addItem":"秀兰的顶针"},
        choices: [{"text":"离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp3_xiulan_memory_wedding_night: {
        title: '出嫁前夜',
        text: `你的手指穿过红嫁衣，触到一片冰凉的空气。

空气里浮出另一间屋子。烛火摇曳，秀兰坐在床沿，盖头还盖在头上。一个老妇人的声音在门外说："明日回门，记得把鞋留在家中。"

秀兰低声说："我不想回门。"

老妇人笑了："不回门，就不是周家的人。"

烛火"噗"地灭了。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"掀开她的盖头","next":"huimen_exp3_xiulan_memory_wedding_face","effects":{"yin":3}},{"text":"在门外问她害不害怕","next":"huimen_exp3_xiulan_memory_wedding_fear","effects":{"sanity":2,"yin":2}},{"text":"烛火灭后，你看见窗外有人影拖着红嫁衣走向井边","next":"huimen_exp3_xiulan_memory_well_death","effects":{"yin":2}}],
    }
,
    huimen_exp3_xiulan_memory_wedding_face: {
        title: '盖头下',
        text: `盖头下不是秀兰的脸，是一张被水泡胀的纸人脸。

纸人的嘴唇动了："你掀开盖头，就要娶我。"

你猛地后退，撞翻了烛台。火舌舔上嫁衣，纸人在火里尖叫，声音越来越像秀兰。

最后一刻，你听见她说："快跑，别让他们把我沉下去。"`,
        effects: {"sanity":-8,"yin":5},
        choices: [{"text":"从梦境中挣脱","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":1}}],
    }
,
    huimen_exp3_xiulan_memory_wedding_fear: {
        title: '她的回答',
        text: `"怕。"秀兰的声音很轻，"但我更怕不被当成一个人。"

你隔着门说："你不是周家的物。你是秀兰。"

她沉默了很久。然后你听见她在门里轻轻笑了一声："谢谢你。很久没人叫我的名字了。"

门缝里滑出一张红纸，上面写着她真正的生辰八字。`,
        effects: {"sanity":5,"yin":-2,"setFlag":"huimen_exp3_knows_xiulan_birth"},
        choices: [{"text":"收起红纸，离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp3_xiulan_memory_well_death: {
        title: '沉井',
        text: `你忽然站在井边。

夜很黑，井水里映着一弯残月。几个模糊的人影拖着一个人走来，那人的红嫁衣在地上拖出沙沙的响。

你认出那是秀兰。她的嘴被布条勒住，手腕被红绳捆着。他们没有说话，只是把她举起来，丢进井里。

"咕咚"一声。月亮碎了。`,
        effects: {"sanity":-10,"yin":8},
        choices: [{"text":"大声呼喊她的名字","next":"huimen_exp3_xiulan_memory_well_death_cry","effects":{"sanity":-5,"yin":3}},{"text":"抓住红绳把她拉上来","next":"huimen_exp3_xiulan_memory_well_death_pull","effects":{"sanity":-3,"yin":5}},{"text":"闭上眼睛","next":"huimen_exp3_xiulan_memory_well_death_close","effects":{"sanity":3,"yin":2}}],
    }
,
    huimen_exp3_xiulan_memory_well_death_cry: {
        title: '呼喊',
        text: `你的喊声撞在井壁上，碎成无数回声。

那些人影回过头，脸上没有五官。他们朝你走来，脚步声像浸湿的纸。

秀兰从井水里探出头，朝你摇头："别喊。他们会听见你。"

你闭上嘴。人影失去了方向，像被风吹散的纸灰，一层层化进夜色里。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"问她怎么才能救她","next":"huimen_exp3_xiulan_ask_save","effects":{"yin":1}}],
    }
,
    huimen_exp3_xiulan_memory_well_death_pull: {
        title: '拉绳',
        text: `你扑到井边，抓住还搭在井沿的红绳。

绳子的另一端很重，像拖着一口装满水的缸。你咬紧牙关往上拉，掌心被勒出血。

就在秀兰的手要触到井沿时，红绳断了。你向后跌倒，手里只剩半截湿漉漉的绳子。`,
        effects: {"sanity":-5,"yin":5,"addItem":"半截红绳"},
        choices: [{"text":"坐在井边","next":"huimen_exp3_xiulan_ask_save","effects":{"yin":1}}],
    }
,
    huimen_exp3_xiulan_memory_well_death_close: {
        title: '井底记忆闭眼',
        text: `你闭上眼睛，但水声还是钻进耳朵。

咕咚。咕咚。像是有什么东西在井底轻轻撞击。

然后一只手搭上你的肩膀。秀兰的声音贴着你的耳垂响起："你不敢看，我不怪你。但你要记住这里。记住我。"`,
        effects: {"sanity":2,"yin":3},
        choices: [{"text":"睁开眼睛","next":"huimen_exp3_xiulan_ask_save","effects":{"yin":1}}],
    }
};
