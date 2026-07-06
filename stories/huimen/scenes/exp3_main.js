/**
 * 《回门》场景模块：exp3_main
 */

export const scenes = {
    huimen_exp3_ending_ancestral_cellar_scene: {
        title: '地窖长明',
        text: `你转身往地窖口跑，却撞上一堵无形的墙。

女子们的影子从你身后涌来，却没有伤害你。她们只是围着你，一遍又一遍地念自己的名字。

不知过了多久，你口袋里的火柴自己划着了。火光落到地上，点燃了一片不知道什么时候铺在地上的纸钱。

火越烧越大，把地窖照得通明。女子们在火光里鞠躬，然后化作青烟。

你醒来时，躺在祖宅的门槛上，手里握着一盏熄灭的古灯。`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"起身","ending":"huimen_exp3_ending_ancestral_cellar","effects":{"yin":0}}],
    }
,
    huimen_exp3_paper_shop_basement: {
        title: '三层纸扎铺地下室',
        text: `你掀开纸扎铺柜台后的布帘，发现一道向下的木梯。

梯子上落满灰尘，却有一串新鲜的脚印。脚印很小，像是女子的脚。你顺着梯子下去，地下室里堆满了未完工的纸人，有的有脸，有的没有。`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"查看没有脸的纸人","next":"huimen_exp3_paper_shop_faceless","effects":{"yin":2}},{"text":"找扎纸匠问问","next":"huimen_exp_paper_doll_craftsman","effects":{"yin":1}},{"text":"点燃一盏油灯","next":"huimen_exp3_paper_shop_basement_light","effects":{"yin":2}}],
    }
,
    huimen_exp3_paper_shop_faceless: {
        title: '无脸纸人',
        text: `没有脸的纸人一共有七个，排成一排，像是在等什么东西。

你走近时，听见它们身上发出细微的沙沙声。仔细一看，纸人的胸口都贴着一张黄纸，写着女子的名字和生辰。

最边上的那个，贴着"秀兰"。`,
        effects: {"sanity":-5,"yin":4},
        choices: [{"text":"撕下秀兰的纸","next":"huimen_exp3_paper_shop_faceless_tear","effects":{"sanity":3,"yin":-2}},{"text":"给它们画上脸","next":"huimen_exp3_paper_shop_faceless_draw","effects":{"yin":5}}],
    }
,
    huimen_exp3_paper_shop_faceless_tear: {
        title: '撕名',
        text: `黄纸一撕，那个无脸纸人忽然软倒，像被抽掉了骨头。

其他的纸人开始颤抖，发出婴儿哭泣般的声响。你赶紧把黄纸折好收进口袋，后退到梯子口。

纸人们慢慢平静下来，但它们的身体似乎比之前更瘦了。`,
        effects: {"sanity":3,"yin":-3,"addItem":"纸人名纸"},
        choices: [{"text":"离开地下室","next":"huimen_exp_paper_shop","effects":{"yin":1}}],
    }
,
    huimen_exp3_paper_shop_faceless_draw: {
        title: '画脸',
        text: `你蘸着朱砂，给纸人一一画上眉眼。

画到第三个时，纸人忽然睁开眼睛。那眼睛里没有眼白，只有两团漆黑。它张开嘴，发出秀兰的声音："别画了。画脸就是借命。"

你吓得把笔一扔。纸人们齐声叹了口气，像是在惋惜。`,
        effects: {"sanity":-8,"yin":8},
        choices: [{"text":"烧毁所有纸人","next":"huimen_exp3_paper_shop_faceless_burn","effects":{"sanity":5,"yin":-5}},{"text":"逃上梯子","next":"huimen_exp_paper_shop","effects":{"yin":2}}],
    }
,
    huimen_exp3_paper_shop_faceless_burn: {
        title: '焚毁',
        text: `火从纸人脚下燃起，很快吞噬了整排无脸纸人。

它们在火里没有尖叫，只是静静地燃烧，像是在等待这一刻已经很久。最后，灰烬里露出七枚小小的骨珠。

你拾起骨珠，感觉它们在掌心里微微发温。`,
        effects: {"sanity":5,"yin":-5,"addItem":"七枚骨珠"},
        choices: [{"text":"离开地下室","next":"huimen_exp_paper_shop","effects":{"yin":1}}],
    }
,
    huimen_exp3_paper_shop_basement_light: {
        title: '地下室的光',
        text: `你点亮油灯，地下室里的阴影一下子退了很远。

在灯光照不到的角落里，有一口小小的纸棺材。棺材盖半开着，里面躺着一个穿着红肚兜的纸娃娃。

纸娃娃的脸上带着笑，手里攥着一张纸条："吾儿周安，满月夭折，以纸代之。"`,
        effects: {"sanity":-3,"yin":3},
        choices: [{"text":"把纸娃娃抱出来","next":"huimen_exp3_paper_shop_baby_doll","effects":{"yin":3}},{"text":"盖上棺材盖","next":"huimen_exp3_paper_shop_baby_doll_close","effects":{"sanity":3,"yin":1}}],
    }
,
    huimen_exp3_paper_shop_baby_doll: {
        title: '纸娃娃',
        text: `纸娃娃很轻，轻得像一只空心的鸡蛋。

你把它抱起来时，它忽然动了动，把纸条塞进你手里。纸条背面还有一行小字："娘亲秀兰，愿儿来世不姓周。"

你的眼眶忽然一酸。`,
        effects: {"sanity":-5,"yin":4,"addItem":"纸娃娃"},
        choices: [{"text":"把娃娃带去给秀兰","next":"huimen_exp_well_night","effects":{"yin":1}},{"text":"放回棺材","next":"huimen_exp3_paper_shop_baby_doll_close","effects":{"sanity":3,"yin":1}}],
    }
,
    huimen_exp3_paper_shop_baby_doll_close: {
        title: '盖棺',
        text: `你把棺材盖轻轻盖上。

纸娃娃在盖合的瞬间发出一声细细的呜咽，随即安静下来。地下室里的阴气似乎也淡了一些。

你在棺材盖上摸了摸，发现刻着一行小字："以纸代骨，以名代魂。"`,
        effects: {"sanity":3,"yin":1},
        choices: [{"text":"离开","next":"huimen_exp_paper_shop","effects":{"yin":1}}],
    }
,
    huimen_exp3_well_bottom: {
        title: '三代井底',
        text: `你顺着井壁的凹槽，慢慢下到井底。

井底没有水，只有一层厚厚的淤泥。淤泥里散落着白骨，有的完整，有的已经碎裂。你借着头上的微光，一具一具地辨认。

最深处，有一具穿着红嫁衣的骨架，手腕上系着一根红绳。`,
        effects: {"sanity":-5,"yin":6},
        choices: [{"text":"靠近红嫁衣骨架","next":"huimen_exp3_well_bottom_xiulan_bones","effects":{"yin":3}},{"text":"先祭拜其他尸骨","next":"huimen_exp3_well_bottom_bow","effects":{"sanity":5,"yin":-2}},{"text":"在井底寻找出口","next":"huimen_exp3_well_bottom_exit","effects":{"yin":2}}],
    }
,
    huimen_exp3_well_bottom_bow: {
        title: '井底祭拜',
        text: `你跪在淤泥里，朝散落的白骨拜了三拜。

"我不知道你们的名字，但我知道你们受过苦。"你说，"我会把秀兰带出去。你们若愿意，也跟着光走。"

白骨上没有反应，但井底的阴气明显轻了。几缕磷光从骨缝里升起，像萤火虫一样飘向井口。`,
        effects: {"sanity":5,"yin":-3},
        choices: [{"text":"去收敛秀兰的骨殖","next":"huimen_exp3_well_bottom_xiulan_bones","effects":{"yin":1}}],
    }
,
    huimen_exp3_well_bottom_wrap: {
        title: '包骨',
        text: `你脱下外套，把秀兰的骨殖一块一块包好。

骨殖很轻，像是包着一捆干柴。你把她系在背上，感觉有一股凉意贴着脊背，却并不沉重。

井壁上忽然渗出一行水字："背我回家。"`,
        effects: {"sanity":5,"yin":-2,"setFlag":"huimen_exp3_has_bones"},
        choices: [{"text":"寻找出路","next":"huimen_exp3_well_bottom_exit","effects":{"yin":1}}],
    }
,
    huimen_exp3_well_bottom_change_dress: {
        title: '换衣',
        text: `你从怀里取出那件粉色的嫁衣——是你在裁缝铺请刘姐连夜赶制的。

你小心翼翼地替她脱下那件绣着井的红嫁衣，换上粉色的新衣。粉色嫁衣套上骨架时，井底忽然亮起一层柔和的光。

"好看。"秀兰的声音在井壁间回荡，"比周家那件好看多了。"`,
        effects: {"sanity":10,"yin":-5,"setFlag":"huimen_exp3_has_bones_dressed"},
        choices: [{"text":"带她离开井底","next":"huimen_exp3_well_bottom_exit","effects":{"yin":1}}],
    }
,
    huimen_exp3_well_bottom_exit: {
        title: '井底出口',
        text: `井底一侧的淤泥里，露出半扇石门。石门上刻着："背井者出，负骨者归。"

你用力推开石门，后面是一条向上的石阶。石阶尽头有光，不是月光，是天亮前的鱼肚白。`,
        effects: {"yin":2},
        choices: [{"text":"沿石阶上去","next":"huimen_exp3_well_bottom_surface","effects":{"yin":1}}],
    }
,
    huimen_exp3_well_bottom_surface: {
        title: '出井',
        text: `你背着秀兰的骨殖，从石阶尽头钻出来。

外面是一片陌生的河岸。河面上漂浮着无数纸船，每只纸船上都点着一盏小灯。秀兰的声音轻轻说："纸船会带我们离开。"

你找了一只最大的纸船，把骨殖放进去。纸船没有沉，反而稳稳地漂向河心。`,
        effects: {"sanity":5,"yin":-3},
        choices: [{"text":"跟着纸船走","next":"huimen_exp3_ending_paper_boat_ferry_scene","effects":{"yin":1}},{"text":"把船推远，自己游上岸","next":"huimen_exp3_well_bottom_shore","effects":{"yin":2}}],
    }
,
    huimen_exp3_well_bottom_shore: {
        title: '上岸',
        text: `你游到对岸，浑身湿透。

回头再看，河面上的纸船已经汇成一条灯带，向远方漂去。你手里还攥着从船上抓下的一块船板，上面写着一个"周"字，被你一点点掰碎了。

天快亮了。`,
        effects: {"sanity":3,"yin":-2},
        choices: [{"text":"朝有人烟的地方走","ending":"huimen_exp3_ending_well_bottom_bones","effects":{"yin":0}}],
    }
,
    huimen_exp3_ending_paper_boat_ferry_scene: {
        title: '渡',
        text: `你跟着纸船走了很久，直到河水变清，天边泛起金色。

纸船在晨光里慢慢融化，秀兰的骨殖沉入河底。你跪在岸边，看着最后一缕纸灰被风吹散。

"谢谢你。"她的声音从水里传来，"这次我真的走了。"`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"目送她离去","ending":"huimen_exp3_ending_paper_boat_ferry","effects":{"yin":0}}],
    }
,
    huimen_exp3_ending_carpenter_saw_scene: {
        title: '锯',
        text: `李木匠瘫坐在树桩上，浑身是汗。

秀兰走到他面前，伸出手，像是要替他擦汗。她的手穿过他的身体，带起一阵微风。

"谢谢你。"她说。

李木匠笑了，笑着笑着就哭了。`,
        effects: {"sanity":5,"yin":-5},
        choices: [{"text":"离开","ending":"huimen_exp3_ending_carpenter_saw","effects":{"yin":0}}],
    }
,
    huimen_exp3_return_mainline: {
        title: '回归主线',
        text: `你感觉到周围的雾气开始变薄。

村口的方向，你隐约看见老宅的轮廓——不是山村周家，而是你最初回到的那座老宅。堂屋里还点着灯，秀兰的红棺还在那里。

你背着秀兰的骨殖，一步一步走回去。`,
        effects: {"yin":-5},
        choices: [{"text":"回到堂屋","next":"to_old_house","effects":{"yin":0}},{"text":"先把骨殖安葬","next":"ask_coffin","effects":{"yin":0}},{"text":"牵着秀兰的手，沿着月光小路走出山村","next":"huimen_exp_redemption_loop_alt","condition":{"hasItem":"秀兰的骨殖"},"hidden":true}],
    }
};
