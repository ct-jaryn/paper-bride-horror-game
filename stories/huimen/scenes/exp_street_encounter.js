/**
 * 《回门》场景模块：exp_street_encounter
 */

export const scenes = {
    huimen_exp_street_footsteps: {
        title: '重步',
        text: `你听见身后传来沉重的脚步声。

不是纸人的轻飘脚步，而是人的脚步，一步一步，很慢，很重。你不敢回头，只敢加快脚步。

脚步声也加快了。

你跑起来，脚步声也跑起来。你停下，脚步声也停下。

[red]它一直在你身后三尺远的地方。[/red]

你终于忍不住回头。身后什么也没有，只有一串湿漉漉的脚印，一直延伸到雾里。

脚印很大，是个男人的脚印。可你分明听见，那脚步声里还混着婴儿的啼哭。`,
        effects: {"sanity":-8,"yin":2},
        choices: [{"text":"顺着脚印走","next":"huimen_exp_street_footsteps_follow","effects":{"yin":2}},{"text":"不管它，回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_street_footsteps_follow: {
        title: '脚印尽头',
        text: `你顺着脚印走。

脚印越来越淡，最后停在一口古井前。井沿上放着一双男人的布鞋，鞋里塞着一团湿漉漉的纸。

你把纸拿出来，展开一看，是一张生辰八字。八字是你的。

[whisper]"原来他一直在跟着你。"[/whisper]

你抬头看井，井水里映出一个男人的身影。他穿着长袍，和你祖父的照片很像。

"秀兰等了三十年。" 他说，"我也等了三十年。"

你认出了他。他是你的祖父。`,
        effects: {"sanity":-10,"yin":3,"setFlag":"huimen_exp_saw_grandfather_ghost"},
        choices: [{"text":"问他为什么不来救秀兰","next":"huimen_exp_grandfather_confession","effects":{"yin":2}},{"text":"转身离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_street_whistle: {
        title: '口哨',
        text: `你听见有人在吹口哨。

曲调很熟悉，是你小时候祖母哄你睡觉时常哼的调子。可在这村子里，没有人会吹这首曲子。

你顺着口哨声走去，来到一座小桥边。桥上站着一个背对你的男人，穿着旧式长衫。

"祖母？" 你脱口而出，然后意识到那是个男人。

男人转过身，脸上没有五官，只有一张嘴。嘴还在吹口哨，吹的正是那首摇篮曲。`,
        effects: {"sanity":-8,"yin":2},
        choices: [{"text":"跟着哼唱","next":"huimen_exp_street_whistle_sing","effects":{"sanity":-5,"yin":3}},{"text":"捂住耳朵离开","next":"huimen_exp_village_street","effects":{"sanity":-3,"yin":1}}],
    }
,
    huimen_exp_street_whistle_sing: {
        title: '合鸣',
        text: `你跟着哼起了那首摇篮曲。

男人的口哨声停了一下，然后变得更加凄厉。他的身体开始扭曲，像一张被揉皱的纸。

"你记得这首曲子？" 他问，"你祖母临死前，也在哼这首曲子。"

"她在等谁？"

"等秀兰。" 男人说，"她这辈子最对不起的人。"

男人的身体彻底散开了，化作无数音符飘向夜空。你站在桥上，感到一阵莫名的悲伤。`,
        effects: {"sanity":-5,"yin":2},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_street_calling: {
        title: '唤名',
        text: `雾里有声音在叫你的名字。

不是秀兰的声音，是一个苍老的女声，带着哭腔："回来吧，回来吧，外面冷。"

你辨认出那是祖母的声音。

你朝着声音走去，看见一个佝偻的背影站在一扇门前。她穿着祖母常穿的那件蓝布褂子，花白的头发梳得整整齐齐。

"祖母？" 你喊。

她缓缓转过身。她的脸是祖母的脸，可眼睛是两个黑洞，嘴角却带着笑："回来就好，回来就好。奶奶给你准备了红嫁衣。"`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"质问她为什么害秀兰","next":"huimen_exp_grandmother_confront","effects":{"sanity":-5,"yin":2}},{"text":"后退离开","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_street_hand: {
        title: '墙中手',
        text: `你贴着墙走，忽然感到有什么东西抓住了你的衣角。

你低头一看，一只苍白的手从墙缝里伸出来，正攥着你的衣服。那只手的指甲很长，缝里全是泥。

你想挣脱，可那只手抓得很紧。墙缝里传来一个女子的声音："拉我出去……墙里好挤……"

你环顾四周，发现不止这一面墙，整条街的墙缝里都有手伸出来。有的手在抓空气，有的手在互相握手，有的手在敲墙。

[red]这条村街，是用人和墙一起砌起来的。[/red]`,
        effects: {"sanity":-10,"yin":3},
        choices: [{"text":"用力把那只手拉出来","next":"huimen_exp_street_hand_pull","effects":{"sanity":-5,"yin":5}},{"text":"用缠发剪刀剪断手指","next":"huimen_exp_street_hand_cut","condition":{"hasItem":"缠发剪刀"},"effects":{"sanity":-5,"yin":-3}},{"text":"挣脱衣角，快跑","next":"huimen_exp_village_street","effects":{"yin":2}}],
    }
,
    huimen_exp_street_hand_pull: {
        title: '墙缝拉人',
        text: `你抓住那只手，用力往外拉。

墙缝开始扩大，碎石簌簌落下。你拉出一个女子的上半身，她的脸被墙灰糊住，只露出一双眼睛。

"谢谢……" 她说，"你是第一个愿意拉我的人。"

可她下半身还在墙里，你拉不动了。更多的手从墙里伸出来，抓住她的肩膀，把她往回拖。

"不！" 她尖叫，"我不要回去！"

你拼命拉，可墙的力量太大。最后，你只扯下她的一只袖子。

袖子上绣着一个"兰"字。`,
        effects: {"sanity":-10,"yin":5,"addItem":"绣兰袖"},
        choices: [{"text":"把袖子收好","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_street_hand_cut: {
        title: '断指',
        text: `你用缠发剪刀剪向那只手的手指。

剪刀落下，手指断开，却没有流血，而是化作一缕青烟。墙缝里传来一声哀鸣，所有的手都缩了回去。

你看了看手里的剪刀，发现刀刃上多了一道黑色的痕迹，像是一个女子的轮廓。

"对不起。" 你低声说。

你没有别的选择。在这村子里，有时候救人，要先学会断腕。`,
        effects: {"sanity":-5,"yin":-3},
        choices: [{"text":"回村街","next":"huimen_exp_village_street","effects":{"yin":1}}],
    }
,
    huimen_exp_street_knocking: {
        title: '敲门',
        text: `你经过一扇门，门里传来敲门声。

"咚咚咚"，三声，很有节奏。你停下脚步，敲门声也停了。

你继续走，敲门声又响起。你再停，它也停。

[whisper]"进来呀。"[/whisper] 门缝里飘出一个声音，"进来喝杯茶。"

你透过门缝往里看，屋里点着红烛，桌上摆着茶具。一个穿红嫁衣的女子背对着你，正在倒茶。

茶水是红色的。`,
        effects: {"sanity":-8,"yin":2},
        choices: [{"text":"推门进去","next":"huimen_exp_street_knocking_enter","effects":{"yin":3}},{"text":"不管它，继续走","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-1}}],
    }
,
    huimen_exp_street_knocking_enter: {
        title: '茶室',
        text: `你推开门，女子转过头来。

她没有脸，只有一团白纸。可她的声音很温柔："坐，喝茶。"

你坐下，茶杯里的红色茶水在冒热气。你不敢喝。

"你不喝？" 她问，"这茶是秀兰生前最爱喝的，桂花红茶。"

你愣了一下。桂花红茶，是祖母也常泡的茶。

"秀兰不是坏人。" 女子说，"她只是等得太久了。你喝了这杯茶，就能听见她的心里话。"

你端起茶杯，茶水映出你的脸，也映出秀兰的脸。`,
        effects: {"sanity":-5,"yin":3},
        choices: [{"text":"喝一口","next":"huimen_exp_street_knocking_drink","effects":{"sanity":-5,"yin":5}},{"text":"把茶倒在地上","next":"huimen_exp_village_street","effects":{"sanity":3,"yin":-2}}],
    }
,
    huimen_exp_street_knocking_drink: {
        title: '茶心',
        text: `你喝了一口茶。

茶不是苦的，是甜的，甜得发腻。茶水入腹，你眼前出现了一幅幅画面——

秀兰十六岁，在河边洗衣；秀兰十七岁，在学堂窗外偷听；秀兰十八岁，穿着嫁衣坐在喜房里，等着一个不会来的新郎。

然后是被活埋的画面。井水灌入耳鼻，孩子在腹中踢动，指甲在井壁上抓出血痕。

[red]你尝到了她的绝望。[/red]

你跪在地上，泪水止不住地流。那不是你的泪，是秀兰三十年的泪，终于有人替她流了。`,
        effects: {"sanity":-10,"yin":5,"setFlag":"huimen_exp_tasted_xiulan_tea"},
        choices: [{"text":"擦干眼泪，回村街","next":"huimen_exp_village_street","effects":{"sanity":5,"yin":-3}}],
    }
};
